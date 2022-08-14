/*
 * @Descripttion: 应用程序的根模块。
 * @Date: 2022-08-05 14:27:28
 * @LastEditTime: 2022-08-14 10:55:08
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CoffeesController } from './coffees/coffees.controller';
// import { CoffeesService } from './coffees/coffees.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  // 有了 Module 就不需要再在 controller 和  providers 中引入了，防止实例化两次
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true, // 生产环境一定要禁用
    }),
  ],
  // controllers: [AppController, CoffeesController],
  // providers: [AppService, CoffeesService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
