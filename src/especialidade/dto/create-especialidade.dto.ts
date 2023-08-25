import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEspecialidadeDto {
  @IsNotEmpty()
  @IsNumber()
  id_profissional: number;

  @IsNotEmpty()
  @IsNumber()
  id_especialidade: number;
}
