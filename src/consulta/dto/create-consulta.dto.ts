import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateConsultaDto {
  @IsDateString()
  dia: string;

  @IsNotEmpty()
  @IsString()
  hora: string;

  @IsNotEmpty()
  @IsNumber()
  id_profissional: number;

  @IsNotEmpty()
  @IsNumber()
  id_gestante: number;
  
}
