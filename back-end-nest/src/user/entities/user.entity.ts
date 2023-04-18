import { Exclude } from 'class-transformer';
import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  PrimaryColumn,
  Column,
} from 'typeorm';

@Entity()
export class User {
  static counter = 0;

  @Exclude({ toPlainOnly: true })
  @ObjectIdColumn()
  _id: ObjectID;

  // needed because of https://github.com/typeorm/typeorm/issues/3964
  // https://stackoverflow.com/questions/60283117/replace-objectid-field-with-custom-string-for-objectidcolumn-in-typeorm-mongodb
  @PrimaryColumn({ unique: true })
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ length: 100 })
  name: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  cpf: string;

  constructor() {
    this.id = User.counter;
    User.counter += 1;
  }
}
