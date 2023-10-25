import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsEmail,
  IsDateString,
} from 'class-validator';

export class CreateProfissionalDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  crm: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;

  @IsNotEmpty()
  @IsDateString()
  data_nascimento: string;

  @IsNotEmpty()
  @IsString()
  foto: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsString()
  inicio_atendimento: string;

  @IsNotEmpty()
  @IsString()
  fim_atendimento: string;

  @IsNotEmpty()
  @IsNumber()
  id_sexo: number;

  @IsNotEmpty()
  @IsNumber()
  id_clinica: number;

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

  @IsNumber()
  id_especialidade: number;
}
