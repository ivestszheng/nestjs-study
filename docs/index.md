创建控制器，需要　nestjs/cli

```
nest g co
```

services 用于将业务逻辑与控制器分开

创建 services
```
nest generate service
# 或缩写
# nest g s
```

创建模块
```
nest g module
```

DTO: data transfer object 
是一个对象，用于封装数据并将其从一个应用程序发送到另一个应用程序，DTO 帮助我们定义系统内的接口或输入和输出。

创建 dto
```
nest g class coffees/dto/create-coffee.dto --no-spec
```