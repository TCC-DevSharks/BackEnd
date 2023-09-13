import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAlergiaDto {

    @IsNotEmpty()
    @IsString()
    alergia: string;

    @IsNotEmpty()
    @IsNumber()
    id_gestante: number;
}
