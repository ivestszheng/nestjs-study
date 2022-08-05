/*
 * @Descripttion: 应用程序入口文件。它使用 NestFactory 用来创建 Nest 应用实例。
 * @Date: 2022-08-05 14:27:28
 * @LastEditTime: 2022-08-05 14:45:20
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('Server listening on http://localhost:3000');
}
bootstrap();
