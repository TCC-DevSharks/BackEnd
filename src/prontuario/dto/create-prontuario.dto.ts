import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProntuarioDto {
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsNumber()
  id_consulta: number;
}
