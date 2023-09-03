import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateGestanteDto {
  @IsNotEmpty()
  @MaxLength(150)
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsDateString()
  data_nascimento: string;

  @MaxLength(100)
  @IsNotEmpty()
  senha: string;

  @MaxLength(255)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @MaxLength(18)
  @IsString()
  cpf: string;

  @IsNumber()
  peso: number;

  @IsNumber()
  altura: number;

  @IsNotEmpty()
  @IsNumber()
  semana_gestacao: number;

  @IsNotEmpty()
  @IsDateString()
  data_parto: string;

  @MaxLength(255)
  @IsString()
  foto: string;

  @MaxLength(20)
  @IsNotEmpty()
  @IsString()
  telefone: string;

  @MaxLength(10)
  @IsOptional()
  @IsString()
  cep: string;

  @MaxLength(10)
  @IsOptional()
  @IsString()
  numero: string;

  @MaxLength(50)
  @IsOptional()
  @IsString()
  complemento: string;
}
