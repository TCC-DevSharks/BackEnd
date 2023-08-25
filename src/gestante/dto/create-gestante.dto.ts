import {
  IsDateString,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateGestanteDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsDateString()
  data_nascimento: string;

  @IsNotEmpty()
  senha: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

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

  @IsString()
  foto: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;

  @IsNotEmpty()
  @IsNumber()
  tipo_telefone: number;

  @IsOptional()
  @IsNumber()
  id_telefone: number;

  @IsOptional()
  @IsString()
  cep: string;

  @IsOptional()
  @IsString()
  logradouro: string;

  @IsOptional()
  @IsString()
  numero: string;

  @IsOptional()
  @IsString()
  bairro: string;

  @IsOptional()
  @IsString()
  complemento: string;

  @IsOptional()
  @IsString()
  cidade: string;

  @IsOptional()
  @IsString()
  estado: string;
}
