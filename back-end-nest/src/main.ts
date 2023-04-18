import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';

import helmet from 'helmet';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  const config = new DocumentBuilder()
    .setTitle('Users Login and CRUD API')
    .setDescription('Api where the user can access and register new users')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3500);
  // somewhere in your initialization file
}
bootstrap();
