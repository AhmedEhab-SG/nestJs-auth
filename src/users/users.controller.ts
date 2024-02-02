import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { UserService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.getAll();
  }
  @Get('username')
  async findByUserName(@Param() username: string): Promise<User> {
    return this.userService.getByUsername(username);
  }

  @Patch('username')
  async update(
    @Param() username: string,
    @Body() userObj: User,
  ): Promise<User> {
    return this.userService.updateUser(username, userObj);
  }

  @Delete('username')
  async delete(@Param() username: string): Promise<User> {
    return this.userService.deleteUser(username);
  }
}
