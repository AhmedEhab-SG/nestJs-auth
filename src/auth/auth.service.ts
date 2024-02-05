import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { RegisterDto } from 'src/dtos/register.dto';
import { LogInDto } from 'src/dtos/log-in.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async register(userObj: RegisterDto): Promise<User> {
    return this.userModel.create({ userObj });
  }

  async logIn(userObj: LogInDto): Promise<User> {
    const { email } = userObj;
    const user = await this.userModel.findOne({ email });

    if (!user) throw new UnauthorizedException('Invaild email or passowrd');

    return user;
  }
}
