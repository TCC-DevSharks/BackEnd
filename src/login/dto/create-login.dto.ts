import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLoginDto {
 @IsEmail()
  @IsNotEmpty()
  email: string;

@IsString()
  @IsNotEmpty()
  senha: string;
}
