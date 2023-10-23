import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateChatUserDto {
    @IsNotEmpty()
    @IsString()
    name:string

    @IsNotEmpty()
    @IsString()
    usuario: string

    @IsNotEmpty()
    @IsString()
    foto:string

    @IsNotEmpty()
    @IsString()
    email:string
}

export class CreateChatMessagesDto{

    @IsNotEmpty()
    message:{

        text: string;

        from: CreateChatMessagesDto

        to: CreateChatMessagesDto

        sender:CreateChatUserDto
    }
    timestamp: boolean
}

