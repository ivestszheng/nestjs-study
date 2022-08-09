/*
 * @Descripttion:
 * @Author: 无声<ivestszheng@qq.com>
 * @Date: 2022-08-09 10:54:09
 * @LastEditors: 无声<ivestszheng@qq.com>
 * @LastEditTime: 2022-08-09 14:05:18
 */
import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// export class UpdateCoffeeDto {
//   readonly name?: string;
//   readonly brand?: string;
//   readonly flavors?: string[];
// }

/**
 * updateCoffeeDto 和 createCoffeeDto 非常像，可以通过 Nest 提供的函数简化这个操作
 * PartialType 不仅标记了所有可选的的字段，还继承了所有通过装饰器应用的验证规则
 */
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
