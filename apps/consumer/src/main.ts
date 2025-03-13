import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://admin:asdfjkl@rabbitMq:5672/vhost`],
        queue: 'orders-queue',
      },
    },
  );
  app.listen();
}
bootstrap();
