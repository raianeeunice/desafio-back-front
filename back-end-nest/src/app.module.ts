import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { Login } from './login/entities/login.entity';
import { LoginService } from './login/login.service';
import { databaseConstants, rootConstants } from './auth/constants';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: databaseConstants.url,
      type: 'mongodb',
      useUnifiedTopology: true,
      ssl: false,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false, // This for development
      autoLoadEntities: true,
      logging: true,
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    LoginModule,
    AuthModule,
    TypeOrmModule.forFeature([Login]),
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule implements OnModuleInit {
  constructor(private userService: LoginService) {}

  onModuleInit() {
    this.userService.setRoot({
      password: rootConstants.rootPassword,
      username: rootConstants.rootUsername,
      isAdmin: true,
    });
  }
}
