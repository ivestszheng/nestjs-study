/*
 * @Descripttion: 应用程序的根模块。
 * @Date: 2022-08-05 14:27:28
 * @LastEditTime: 2022-08-05 14:44:29
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
