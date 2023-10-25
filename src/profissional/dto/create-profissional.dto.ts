import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsEmail,
  IsDateString,
} from 'class-validator';

export class CreateProfissionalDto {

  @IsString()
  nome: string;


  @IsString()
  cpf: string;


  @IsString()
  crm: string;


  @IsEmail()
  email: string;


  @IsString()
  senha: string;


  @IsDateString()
  data_nascimento: string;


  @IsString()
  foto: string;


  @IsString()
  descricao: string;


  @IsString()
  inicio_atendimento: string;


  @IsString()
  fim_atendimento: string;


  @IsNumber()
  id_sexo: number;


  @IsNumber()
  id_clinica: number;


  @IsString()
  telefone: string;

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
