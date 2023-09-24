import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreatePlanoPartoDto {
  @IsNumber()
  @IsNotEmpty()
  id_plano: number;

  @IsNumber()
  @IsNotEmpty()
  id_gestante: number;
}
