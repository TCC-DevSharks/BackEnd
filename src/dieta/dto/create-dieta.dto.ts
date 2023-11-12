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
  id_gestante: number;

  @IsNotEmpty()
  @IsNumber()
  id_profissional: number;

  @IsNotEmpty()
  @IsString()
  horario: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  
}
