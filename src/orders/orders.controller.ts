import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from 'src/dtos/create-order.dto';
import { Order } from 'src/schemas/Order.schema';

@Controller('users/:userId/Order')
export class OrdersController {
  constructor(private readonly orderSerivce: OrdersService) {}

  @Get()
  async findAll(): Promise<Order[]> {
    return this.orderSerivce.getAll();
  }

  @Get('/get')
  async findByUserId(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<Order[]> {
    return this.orderSerivce.getByUserId(userId);
  }

  @Get(':incId')
  async findById(
    @Param('incId', ParseIntPipe) incId: number,
  ): Promise<Order[]> {
    return this.orderSerivce.getById(incId);
  }

  @Post()
  async create(
    @Param('userId') userId: number,
    @Body() userOrder: CreateOrderDto,
  ): Promise<Order> {
    return this.orderSerivce.createOrder(userId, userOrder);
  }

  @Patch(':incId')
  async update(
    @Param('incId', ParseIntPipe) incId: number,
    @Param('userId', ParseIntPipe) userId: number,
    @Body() userOrder: CreateOrderDto,
  ): Promise<Order> {
    return this.orderSerivce.updateOrder(userId, incId, userOrder);
  }

  @Delete(':incId')
  async delete(
    @Param('incId', ParseIntPipe) incId: number,
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<Order> {
    return this.orderSerivce.deleteOrder(userId, incId);
  }
}
