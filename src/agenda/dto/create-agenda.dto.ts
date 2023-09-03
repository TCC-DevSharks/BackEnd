import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateAgendaDto {
  @IsNotEmpty()
  @IsDateString()
  dia: string;

  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsBoolean()
  lembrete: boolean;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsNumber()
  id_gestante: number;
}
