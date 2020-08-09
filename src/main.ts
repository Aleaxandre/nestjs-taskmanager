import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { QueryFailedFilter } from './filters/query-failed-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter(), new QueryFailedFilter());

  if (process.env.NODE_ENV === 'develoment') {
    app.enableCors();
  }

  await app.listen(3000);
}
bootstrap();
