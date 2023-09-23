import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEnxovalDto {
  @IsNumber()
  @IsNotEmpty()
  id_enxoval: number;

  @IsNumber()
  @IsNotEmpty()
  id_gestante: number;
}
