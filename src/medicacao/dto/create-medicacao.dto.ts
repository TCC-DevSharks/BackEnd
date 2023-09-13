import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMedicacaoDto {

    @IsNotEmpty()
    @IsString()
    medicacao: string;

    @IsNotEmpty()
    @IsNumber()
    id_gestante: number;
}
