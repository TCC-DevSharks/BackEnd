import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePagseguroDto {
  @IsNotEmpty()
  @IsString()
  token: string;

  @IsNotEmpty()
  @IsNumber()
  id_clinica: number;

  @IsNotEmpty()
  @IsNumber()
  id_gestante: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  dddPais: string;

  @IsNotEmpty()
  @IsString()
  ddd: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;

  @IsNotEmpty()
  @IsString()
  referenciaItem: string;

  @IsNotEmpty()
  @IsString()
  nomeItem: string;

  @IsNotEmpty()
  @IsNumber()
  quantidadeItem: number;

  @IsNotEmpty()
  @IsNumber()
  valorUnitarioItem: number;

  @IsNotEmpty()
  @IsString()
  logradouro: string;

  @IsNotEmpty()
  @IsString()
  numero: string;

  @IsString()
  complemento: string;

  @IsNotEmpty()
  @IsString()
  bairro: string;

  @IsNotEmpty()
  @IsString()
  cidade: string;

  @IsNotEmpty()
  @IsString()
  estado: string;

  @IsNotEmpty()
  @IsString()
  pais: string;

  @IsNotEmpty()
  @IsString()
  cep: string;

  @IsNotEmpty()
  @IsString()
  referenciaCobrança: string;

  @IsNotEmpty()
  @IsString()
  descricaoCobrança: string;

  @IsNotEmpty()
  @IsString()
  tipoCartao: string;

  @IsNotEmpty()
  @IsNumber()
  quantidadeParcelas: number;

  @IsNotEmpty()
  @IsString()
  numeroCartao: string;

  @IsNotEmpty()
  @IsString()
  mesVencimento: string;

  @IsNotEmpty()
  @IsString()
  anoVencimento: string;

  @IsNotEmpty()
  @IsString()
  cdd: string;
}

export class getPag {
  @IsString()
  order: string;

  @IsString()
  token: string;
}
