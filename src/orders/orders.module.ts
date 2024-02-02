import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/schemas/Order.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      { name: Order.name, useFactory: () => OrderSchema },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrderModule {}
