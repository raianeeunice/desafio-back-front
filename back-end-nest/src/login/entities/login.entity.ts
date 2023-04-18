import * as bcrypt from 'bcryptjs';

import {
  Entity,
  Column,
  BeforeInsert,
  BeforeUpdate,
  ObjectID,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
@Entity()
export class Login {
  static counter = 0;

  @Exclude({ toPlainOnly: true })
  @ObjectIdColumn()
  _id: ObjectID;

  // needed because of https://github.com/typeorm/typeorm/issues/3964
  // https://stackoverflow.com/questions/60283117/replace-objectid-field-with-custom-string-for-objectidcolumn-in-typeorm-mongodb
  @PrimaryColumn({ unique: true })
  id: number;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column({ length: 50, unique: true })
  username: string;

  @Column({ default: false })
  isAdmin: boolean;

  constructor() {
    this.id = Login.counter;
    Login.counter += 1;
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    const salt = await bcrypt.genSalt();
    if (!/^\$2a\$\d+\$/.test(this.password)) {
      this.password = await bcrypt.hash(this.password, salt);
    }
  }

  async checkPassword(plainPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, this.password);
  }
}
