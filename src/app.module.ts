import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './orders/orders.module';
import { MongoModule } from './mongo/mongo.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [MongoModule, OrderModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
