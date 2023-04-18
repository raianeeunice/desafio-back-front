import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'sh@r3n3rgy' })
  password: string;
  @ApiProperty({ example: 'desafiosharenergy' })
  username: string;
}
