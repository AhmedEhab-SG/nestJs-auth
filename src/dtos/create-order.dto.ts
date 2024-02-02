import { IsIn, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 50, { message: 'Must not be empty' })
  readonly incId: number;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50, { message: 'Must not be empty' })
  readonly userId: number;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50, { message: 'Must not be empty' })
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['EGY', 'USA'])
  readonly country: string;
}
