import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from 'src/dtos/create-order.dto';
import { Order } from 'src/schemas/Order.schema';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private ordersModel: Model<Order>) {}

  async getAll(): Promise<Order[]> {
    return await this.ordersModel.find();
  }

  async getById(incId: number): Promise<Order[]> {
    const targetObj = this.ordersModel.find({ incId });

    if (!targetObj) throw new NotFoundException('Not Found Order');

    return targetObj;
  }

  async getByUserId(userId: number): Promise<Order[]> {
    const targetArr = this.ordersModel.find({ userId });

    if (!targetArr) throw new NotFoundException('Not Found Order');

    return targetArr;
  }

  async createOrder(userId: number, userOrder: any): Promise<Order> {
    const newOrder = await this.ordersModel.create({ ...userOrder, userId });
    return newOrder;
  }

  async updateOrder(
    userId: number,
    incId: number,
    userOrder: CreateOrderDto,
  ): Promise<Order> {
    const targetOrder = await this.ordersModel.findOneAndUpdate(
      { incId, userId },
      { ...userOrder, incId, userId },
    );

    if (!targetOrder) throw new NotFoundException('Not Found Order');

    return targetOrder;
  }

  async deleteOrder(incId: number, userId: number): Promise<Order> {
    const deletedOrder = await this.ordersModel.findOneAndDelete({
      userId,
      incId,
    });

    if (!deletedOrder) throw new NotFoundException('Not Found Order');

    return deletedOrder;
  }
}
