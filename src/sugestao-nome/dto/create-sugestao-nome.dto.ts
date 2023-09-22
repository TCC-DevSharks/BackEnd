import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSugestaoNomeDto {
  @IsNumber()
  @IsNotEmpty()
  id_nome: number;

  @IsNumber()
  @IsNotEmpty()
  id_gestante: number;
}
