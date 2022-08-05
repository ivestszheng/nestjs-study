/*
 * @Descripttion: 带有单个方法的基本服务
 * @Date: 2022-08-05 14:27:28
 * @LastEditTime: 2022-08-05 14:45:10
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
