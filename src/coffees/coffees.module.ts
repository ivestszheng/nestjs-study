/*
 * @Author: 无声<ivestszheng@qq.com>
 * @Descripttion:
 * @Date: 2022-08-09 10:18:53
 * @LastEditors: 无声<ivestszheng@qq.com>
 * @LastEditTime: 2022-08-09 10:23:39
 */
import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({ controllers: [CoffeesController], providers: [CoffeesService] })
export class CoffeesModule {}
