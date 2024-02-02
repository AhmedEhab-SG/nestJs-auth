import { Module } from '@nestjs/common';
import { RegisterModule } from 'src/register/register.module';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      { name: User.name, useFactory: () => UserSchema },
    ]),
    RegisterModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
