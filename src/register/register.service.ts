import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class RegisterService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(registeredObj: User): Promise<User> {
    const isFound = this.userModel.find({ email: registeredObj.email });

    if (isFound)
      throw new BadRequestException('Email and Password must be unique');

    return await this.userModel.create(registeredObj);
  }
}
