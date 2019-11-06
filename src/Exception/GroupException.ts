import { Request, Response } from 'express';
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
@Catch(HttpException)
export default class GroupExceptionFilter
  implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    Logger.warn(exception.message.message);
    // 发送响应
    response.status(status).json({
      statusCode: status,
      date: new Date().toLocaleDateString(),
      message: exception.message.message,
      path: request.url,
    });
  }
}
