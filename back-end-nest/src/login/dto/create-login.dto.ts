import { ApiProperty } from '@nestjs/swagger';

export class CreateLoginDto {
  @ApiProperty({ example: 'password' })
  password: string;
  @ApiProperty({ example: 'false' })
  isAdmin?: boolean;
  @ApiProperty({ example: 'shareenergy' })
  username: string;
}
