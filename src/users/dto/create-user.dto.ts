import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({default: "test@mail.py"})
    readonly email: string;

    @ApiProperty({default: "qwerty"})
    readonly password: string;
}
