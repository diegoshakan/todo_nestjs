import { IsBoolean, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateTaskDto {
    @IsString()
    // @IsNotEmpty()
    // @MinLength(5)
    // @MaxLength(20)
    title: string;

    @IsString()
    // @IsNotEmpty()
    // @MinLength(5)
    // @MaxLength(200)
    description: string;

    @IsBoolean()
    // @IsNotEmpty()
    done: boolean;
}
