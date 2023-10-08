import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDietaDto {
  @IsNotEmpty()
  @IsNumber()
  id_consulta: number;
}

export class CreateMealDto {
  @IsNotEmpty()
  @IsNumber()
  id_dieta: number;

  @IsNotEmpty()
  @IsNumber()
  id_refeicao: number;

  @IsNotEmpty()
  @IsString()
  horario: string;
}
