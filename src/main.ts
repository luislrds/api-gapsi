import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionFilter } from './common/exception/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  )
  app.useGlobalFilters(
    new AllExceptionFilter()
  )
  const options = new DocumentBuilder()
    .setTitle('Api Gapsi')
    .setDescription('Gestionar Proveedores')
    .setVersion('1.0.0')
    .build()
  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('/api/docs', app, document)
  await app.listen(3000);
}
bootstrap();
