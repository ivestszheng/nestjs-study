/*
 * @Descripttion: 应用程序的根模块。
 * @Date: 2022-08-05 14:27:28
 * @LastEditTime: 2022-08-09 10:26:30
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CoffeesController } from './coffees/coffees.controller';
// import { CoffeesService } from './coffees/coffees.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  // 有了 Module 就不需要再在 controller 和  providers 中引入了，防止实例化两次
  imports: [CoffeesModule],
  // controllers: [AppController, CoffeesController],
  // providers: [AppService, CoffeesService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
