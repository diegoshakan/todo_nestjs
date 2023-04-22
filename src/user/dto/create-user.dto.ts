import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(35)
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @MinLength(7)
    @MaxLength(35)
    email: string;
}
