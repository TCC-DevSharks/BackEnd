import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateChatUserDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    usuario: string

    @IsNotEmpty()
    @IsString()
    foto: string

    @IsNotEmpty()
    @IsString()
    email: string
}

export class CreateChatMessagesDto {

    @IsNotEmpty()
    @IsString()
    text: string;

    @IsNotEmpty()
    @IsString()
    from: string;

    @IsNotEmpty()
    @IsString()
    to: string;
    
    @IsNotEmpty()
    @IsString()
    sender: string;

    timestamp: boolean
}

