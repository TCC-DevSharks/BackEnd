import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import internal from "stream";

export class CreateComorbidadeDto {

    @IsNotEmpty()
    @IsString()
    comorbidade: string;

    @IsNotEmpty()
    @IsNumber()
    id_gestante: number;
}
