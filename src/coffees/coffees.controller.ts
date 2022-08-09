/*
 * @Descripttion:
 * @Date: 2022-08-07 22:01:29
 * @LastEditTime: 2022-08-09 10:55:45
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
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  // @Get()
  // findAll() {
  //   // 方法名称无关紧要
  //   return 'This action returns all coffees';
  // }

  @Get()
  findAll(@Query() pginationQuerry) {
    // const { limit, offset } = pginationQuerry;
    return this.coffeesService.findAll();
  }

  // @Get()
  // findAll(@Res() response) {
  //   // 手动设置状态码提供了一定的灵活性，
  //   // 但是失去了依赖于Nestjs标准处理功能的兼容性，例如：拦截器和 @HttpCode() 装饰器
  //   // 建议在处理响应时尽可能使用 Nest 标准方法
  //   response.status(200).send('This action returns all coffees');
  // }

  //   @Get(':id')
  //   findOne(@Param() params) {
  //     return `This action returns ${params.id} coffee`;
  //   }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
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
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
