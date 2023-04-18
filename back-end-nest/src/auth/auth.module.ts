import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LoginModule } from '../login/login.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
import { LoginService } from 'src/login/login.service';
import { Login } from 'src/login/entities/login.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    LoginModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, LoginService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
