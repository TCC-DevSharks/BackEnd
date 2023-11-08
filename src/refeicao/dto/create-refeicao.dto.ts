import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateRefeicaoDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsNumber()
    @IsNotEmpty()
    id_profissional: number;

    @IsNotEmpty()
    @IsNumber()
    id_gestante: number;
}

export class CreateFoodToMealDto {

    @IsNumber()
    @IsNotEmpty()
    id_alimento: number;

    @IsNumber()
    @IsNotEmpty()
    id_refeicao: number;
}
