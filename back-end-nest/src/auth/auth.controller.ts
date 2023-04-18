import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Login } from 'src/login/entities/login.entity';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Realiza login, recebendo o email e password de um usuário
   */
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() login: LoginDto) {
    return this.authService.login(login.username, login.password);
  }
}
