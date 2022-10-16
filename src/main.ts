import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true, // nest will try to convert 'correct' type. so we don't have to use Type decorator in data transfer objects for example.
      },
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
