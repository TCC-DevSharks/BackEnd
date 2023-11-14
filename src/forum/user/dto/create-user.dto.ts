import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    username: string;

    @IsString()
    foto: string;

    @IsNumber()
    mysql: number;
    
    @IsNumber()
    age: number;

}
