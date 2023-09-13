import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDeficienciaDto {

    @IsNotEmpty()
    @IsString()
    deficiencia: string;

    @IsNotEmpty()
    @IsNumber()
    id_gestante: number;
}
