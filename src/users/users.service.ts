import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async getByUsername(username: string): Promise<User> {
    const targUser = await this.userModel.findOne({ username });

    if (!targUser) throw new NotFoundException('couldnt find suhc user');

    return targUser;
  }

  async updateUser(username: string, updatedUser: User): Promise<User> {
    const targUpdate = await this.userModel.findOneAndUpdate(
      { username },
      updatedUser,
    );

    if (!targUpdate) throw new NotFoundException('couldnt find suhc user');

    return targUpdate;
  }

  async deleteUser(username: string): Promise<User> {
    const targDelete = await this.userModel.findOneAndDelete({ username });

    if (!targDelete) throw new NotFoundException('couldnt find your this user');

    return targDelete;
  }
}
