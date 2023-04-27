import { IsBoolean, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(35)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(200)
    description: string;

    @IsBoolean()
    @IsNotEmpty()
    done: boolean;

    @IsNumber()
    @IsNotEmpty()
    userId: number;
}
