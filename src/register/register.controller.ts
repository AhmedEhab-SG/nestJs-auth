import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from 'src/dtos/register.dto';
import { User } from 'src/schemas/user.schema';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  async create(@Body() registeredObj: RegisterDto): Promise<User> {
    return this.registerService.createUser(registeredObj);
  }
}
