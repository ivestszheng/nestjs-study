/*
 * @Descripttion: 带有单个路由的基本控制器示例。
 * @Date: 2022-08-05 14:27:28
 * @LastEditTime: 2022-08-05 14:43:58
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
