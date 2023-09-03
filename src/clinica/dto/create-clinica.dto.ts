import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateClinicaDto {
  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  razao_social: string;

  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @MaxLength(200)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  senha: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  foto: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @MaxLength(20)
  @IsNotEmpty()
  @IsString()
  telefone: string;

  @IsNotEmpty()
  @IsNumber()
  tipo_telefone: number;

  @MaxLength(10)
  @IsString()
  cep: string;

  @MaxLength(10)
  @IsString()
  numero: string;

  @MaxLength(50)
  @IsString()
  complemento: string;
}

export class CreateResponseClinicaDto {
  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  razao_social: string;

  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @MaxLength(200)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  senha: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  foto: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @MaxLength(20)
  @IsNotEmpty()
  @IsString()
  telefone: string;

  @IsNotEmpty()
  @IsNumber()
  tipo_telefone: number;

  @IsNumber()
  id_telefone: number;

  @IsNumber()
  id_endereco: number;

  @MaxLength(10)
  @IsString()
  cep: string;

  @MaxLength(10)
  @IsString()
  numero: string;

  @MaxLength(50)
  @IsString()
  complemento: string;
}
