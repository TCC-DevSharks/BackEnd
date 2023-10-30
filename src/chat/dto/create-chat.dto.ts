import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

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
    @IsArray()
    users: Array<string>
    
    @IsNotEmpty()
    @IsString()
    sender: string;

    timestamp: boolean
}

class arrayUser{

    @IsNotEmpty()
    @IsString()
    from:string

    @IsNotEmpty()
    @IsString()
    to:string
}

