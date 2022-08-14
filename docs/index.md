## 创建控制器

需要　nestjs/cli

```
nest g co
```

services 用于将业务逻辑与控制器分开

## 创建 services

```
nest generate service
# 或缩写
# nest g s
```

## 创建模块

```
nest g module
```

## DTO: data transfer object 

是一个对象，用于封装数据并将其从一个应用程序发送到另一个应用程序，DTO 帮助我们定义系统内的接口或输入和输出。

创建 dto

```
nest g class coffees/dto/create-coffee.dto --no-spec
```

使用规则校验

```typescript
// main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  console.log('Server listening on http://localhost:3000');
}
bootstrap();

```

为使用规则校验还需安装两个包

```bash
npm i class-validator class-transformer
```

简化 dto 复制流程

```bash
npm i @nestjs/mapped-types
```

## 安装 docker

win10 家庭版需要先安装 Virtual-V

## 启动 docker
```
docker-compose up -d
```

`-d`意味着分离模式

## 安装 typeorm 及相关依赖
```
npm i @nestjs/typeorm typeorm@0.2.45 pg
```