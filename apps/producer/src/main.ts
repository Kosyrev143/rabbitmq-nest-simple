import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(process.env.port ?? 3001)
    .then(() => console.log(`Server producer started on port ${3001}`));
}
bootstrap();
