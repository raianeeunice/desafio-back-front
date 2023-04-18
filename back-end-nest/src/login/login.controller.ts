import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Admin } from './admin/admin.decorator';
import { AdminGuard } from './admin/admin.guard';
import { CreateLoginDto } from './dto/create-login.dto';
import { LoginService } from './login.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('login')
@ApiBearerAuth()
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  /**
   * Cria um usuário
   */
  @ApiOperation({ summary: 'Create login user' })
  @Post()
  async create(@Body() createUserDto: CreateLoginDto) {
    return await this.loginService.create(createUserDto);
  }

  /**
   * Faz um usuário admin
   */
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Admin()
  @Post('/makeAdmin')
  makeAdmin(@Body() info: { id: number }) {
    return this.loginService.makeAdmin(info.id);
  }

  /**
   * Remove admin de um usuário
   */
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Admin()
  @Post('/removeAdmin')
  removeAdmin(@Body() info: { id: number }) {
    return this.loginService.removeAdmin(info.id);
  }

  /**
   * Encontra todos os usuários
   */
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Admin()
  @Get()
  findAll() {
    return this.loginService.findAll();
  }
}
