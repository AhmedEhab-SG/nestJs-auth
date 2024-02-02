import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 50, { message: 'Must not be empty' })
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @Length(1, 50, { message: 'Must not be empty' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50, { message: 'Must not be empty' })
  readonly password: string;
}
