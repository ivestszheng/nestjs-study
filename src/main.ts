/*
 * @Descripttion: 应用程序入口文件。它使用 NestFactory 用来创建 Nest 应用实例。
 * @Date: 2022-08-05 14:27:28
 * @LastEditTime: 2022-08-09 14:21:08
 */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 用来过滤那些 dto 以外的字段
      transform: true,
      forbidNonWhitelisted: true, // 与 whitelist 配合使用，告诉哪些字段不应该存在
    }),
  );
  await app.listen(3000);
  console.log('Server listening on http://localhost:3000');
}
bootstrap();
