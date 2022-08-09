/*
 * @Descripttion:
 * @Author: 无声<ivestszheng@qq.com>
 * @Date: 2022-08-09 10:36:55
 * @LastEditors: 无声<ivestszheng@qq.com>
 * @LastEditTime: 2022-08-09 13:39:20
 */

import { IsString } from 'class-validator';

/**
 * DTO 让方法拥有完整的类型安全性，让我们确切地知道对有效载荷的期望
 * DTO 只是简单的对象，它们不包含任何业务逻辑、方法或任何需要测试的东西
 * 我们只是试图创建我们的数据传输对象的形状或对象接口
 * DTO 的另一个最佳实践是将所有属性标记为只读，以帮助保持不变性
 */
export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
