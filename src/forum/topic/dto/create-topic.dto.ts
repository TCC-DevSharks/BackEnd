import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateTopicDto {
    @IsString()
    title: string

    @IsString()
    text: string

    @IsString()
    user: string

    @IsString()
    date: string

    @IsString()
    category: string

}
