import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMealDto {

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsNumber()
    @IsNotEmpty()
    id_profissional: number;
}


export class CreateFoodToMealDto {

    @IsNumber()
    @IsNotEmpty()
    id_alimento: number;

    @IsNumber()
    @IsNotEmpty()
    id_refeicao: number;
}
