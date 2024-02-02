import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
import { RegisterService } from './register.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      { name: User.name, useFactory: () => UserSchema },
    ]),
  ],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
