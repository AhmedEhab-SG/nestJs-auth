import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class LogInDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @Length(3, 50, { message: 'email must be more than 3 char ' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 50, { message: 'password must be more than 3 char ' })
  readonly password: string;
}
