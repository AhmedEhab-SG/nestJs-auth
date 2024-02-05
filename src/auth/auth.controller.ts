import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { LogInDto } from 'src/dtos/log-in.dto';
import { RegisterDto } from 'src/dtos/register.dto';
import { User } from 'src/schemas/user.schema';

import { JWTStrategy } from '../jwt/jwt.strategy';
import { compare, hash } from 'bcrypt';
import { AuthService } from './auth.service';

@Controller('Auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JWTStrategy,
  ) {}

  @Post('register')
  async register(@Body() userObj: RegisterDto): Promise<User> {
    const { password } = userObj;
    const passwordHashed = await hash(password, 10);

    return this.authService.register({ ...userObj, password: passwordHashed });
  }

  @Post('login')
  async logIn(@Body() userObj: LogInDto): Promise<{ token: string }> {
    const { email, password } = userObj;

    const user = await this.authService.logIn(userObj);

    const isPasswordMatched = await compare(password, user.password);
    
    if (!isPasswordMatched)
      throw new UnauthorizedException('Invaild email or password!');

    const token = this.jwtService.({ email });

    return { token };
  }
}
