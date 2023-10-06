import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDietaDto {


    @IsNotEmpty()
    @IsNumber()
  id_consulta: number;
}


