/*
 * @Descripttion: 应用程序的根模块。
 * @Date: 2022-08-05 14:27:28
 * @LastEditTime: 2022-08-07 22:01:48
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';

@Module({
  imports: [],
  controllers: [AppController, CoffeesController],
  providers: [AppService],
})
export class AppModule {}
