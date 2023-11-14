import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateMessagesDto {
    @IsString()
    topic: string;

    @IsString()
    user: string;

    @IsString()
    text: string;

    @IsString()
    date: string;

}