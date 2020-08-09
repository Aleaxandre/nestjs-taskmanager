import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class QueryFailedFilter implements ExceptionFilter {
  catch(error: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = HttpStatus.UNPROCESSABLE_ENTITY;

    let message = error.message;

    if (/^duplicate key value violates unique constraint/.test(error.message)) {
      message = `Duplicate value : ${(error as any).detail}`;
    } else if (/violates foreign key constraint/.test(error.message)) {
      message = `Foreign key not found : ${(error as any).detail}`;
    }

    response.status(status).json({
      statusCode: status,
      message: message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
