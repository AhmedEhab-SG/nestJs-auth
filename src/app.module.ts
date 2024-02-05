import { Module } from '@nestjs/common';
import { OrderModule } from './orders/orders.module';
import { MongoModule } from './mongo/mongo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongoModule, AuthModule, OrderModule],
})
export class AppModule {}
