import { IsNotEmpty, IsString } from "class-validator"

export class CreateArtigoDto {

    @IsString()
    @IsNotEmpty()
    titulo: string

    @IsString()
    @IsNotEmpty()
    descricao: string

    @IsString()
    @IsNotEmpty()
    imagem: string
}
