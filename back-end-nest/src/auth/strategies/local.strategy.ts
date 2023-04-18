import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    });
  }

  async validate(username: string, password: string): Promise<any> {
    const login = await this.authService.validateLogin(username, password);
    if (!login) {
      throw new UnauthorizedException(this.getDescription(login));
    }
    return login;
  }

  getDescription(login: any) {
    if (!login) {
      return '"Credenciais não autorizadas.\nCheque seu username e/ou usuário!"';
    }
  }
}
