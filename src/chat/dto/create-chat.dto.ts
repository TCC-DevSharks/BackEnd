import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateChatUserDto {
    @IsNotEmpty()
    @IsString()
    nome:string

    @IsNotEmpty()
    @IsNumber()
    idGestante:number

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

        users: Array<CreateChatUserDto>

        sender: string
    }
    timestamp: boolean
}

