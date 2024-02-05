import { IsEmail, IsEmpty, IsNumber, IsString, Length } from 'class-validator';

export class LogInDto {
  @IsEmail()
  @IsEmpty()
  @IsString()
  @Length(3, 50, { message: 'email must be more than 3 char ' })
  readonly email: string;

  @IsNumber()
  @IsEmpty()
  @Length(3, 50, { message: 'password must be more than 3 char ' })
  readonly password: string;
}
