import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'email@gmail.com' })
  email: string;

  @ApiProperty({ example: 'Desafio Sharenergy' })
  name: string;

  @ApiProperty({ example: '81 999999999' })
  phone: string;

  @ApiProperty({ example: 'São Paulo - SP' })
  address: string;

  @ApiProperty({ example: '000000000-00' })
  cpf: string;
}
