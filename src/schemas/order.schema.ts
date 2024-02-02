import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Order {
  @Prop({ unique: true, required: true })
  incId: number;

  @Prop({ required: true })
  userId: number;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  country: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
