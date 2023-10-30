import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;

    @IsNumber()
    age: number;

    @IsBoolean()
    active: boolean;
}
