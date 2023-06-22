import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: "test@mail.py", description: "Уникальный email"})
    readonly email: string;

    @ApiProperty({example: "qwerty", description: "Пароль"})
    readonly password: string;
}
