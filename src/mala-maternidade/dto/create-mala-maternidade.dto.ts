import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMalaMaternidadeDto {
  @IsNumber()
  @IsNotEmpty()
  id_mala: number;

  @IsNumber()
  @IsNotEmpty()
  id_gestante: number;
}
