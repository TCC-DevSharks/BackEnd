import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    age: number

    @IsBoolean()
    active: boolean
}
