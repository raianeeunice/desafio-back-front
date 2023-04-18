import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Login } from 'src/login/entities/login.entity';
import { LoginService } from 'src/login/login.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly loginService: LoginService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Valida combinação de username e usuário
   */
  async validateLogin(username: string, pass: string): Promise<any> {
    const login = await this.loginService.findByUsername(username);
    if (!login) {
      throw new UnauthorizedException();
    }
    if (login.checkPassword(pass)) {
      const { password, ...result } = login;
      return result;
    }
    return null;
  }

  /**
   * Realiza login, recebendo o username e password de um usuário
   */
  async login(username: string, password: string) {
    const login = new Login();
    login.username = username;
    login.password = password;
    const payload = {
      username: login.username,
      sub: login.id,
      isAdmin: login.isAdmin,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
