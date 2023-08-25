import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateClinicaDto {
  @IsString()
  @IsNotEmpty()
  razao_social: string;

  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  senha: string;

  @IsString()
  @IsNotEmpty()
  foto: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

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
  @IsNumber()
  id_endereco: number;

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
