/*
 * @Descripttion:
 * @Date: 2022-08-07 22:01:29
 * @LastEditTime: 2022-08-08 14:21:14
 */
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  // @Get()
  // findAll() {
  //   // 方法名称无关紧要
  //   return 'This action returns all coffees';
  // }

  @Get()
  findAll(@Query() pginationQuerry) {
    const { limit, offset } = pginationQuerry;

    return `This action returns all coffees. Limit: ${limit}, Offset: ${offset}`;
  }

  // @Get()
  // findAll(@Res() response) {
  //   // 手动设置状态码提供了一定的灵活性，
  //   // 但是失去了依赖于Nestjs标准处理功能的兼容性，例如：拦截器和 @HttpCode() 装饰器
  //   // 建议在处理响应时尽可能使用 Nest 标准方法
  //   response.status(200).send('This action returns all coffees');
  // }

  //   @Get(':id')
  //   findById(@Param() params) {
  //     return `This action returns ${params.id} coffee`;
  //   }

  @Get(':id')
  findById(@Param('id') id: string) {
    return `This action returns ${id} coffee`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  // 这样只会返回传参对象的 name 属性
  // @Post('name')
  // create(@Body() body) {
  //   return body;
  // }

  // @Post()
  // @HttpCode(HttpStatus.GONE) // 此时响应状态码由201变为410
  // create(@Body() body) {
  //   return body;
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee`;
  }
}
