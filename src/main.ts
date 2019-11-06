import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as rateLimit from 'express-rate-limit';
import * as path from 'path';
import * as helmet from 'helmet';

import GroupException from './Exception/GroupException';
import { ValidationPipe } from './pipe/GroupValidationPipe';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true, // 设置跨站访问
  });
  const options = new DocumentBuilder()
    .setTitle('nestjs api文档')
    .setDescription('nestjs api接口文档')
    .setBasePath('/api/v1')
    .setVersion('1.0')
    .addBearerAuth('token')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`/api/v1/docs`, app, document);

  // 访问频率限制
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15分钟
      max: 100, // 限制15分钟内最多只能访问100次
    }),
  );

  // web漏洞
  app.use(helmet());
  app.useStaticAssets(path.join(__dirname, '..', 'public'));
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new GroupException());
  await app.listen(3000);
}
bootstrap();
