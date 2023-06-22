import { Controller, Post, UseGuards, Request, Body } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "@src/users/dto/create-user.dto";
import { AuthService } from "@src/auth/auth.service";
import { User } from "@src/users/entities/user.entity";
import { LocalAuthGuard } from "@src/auth/guards/local.guard";

@ApiTags("Авторизация")
@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @UseGuards(LocalAuthGuard)
    @ApiOperation({summary: "Аутентификация"})
    @Post("login")
    @ApiBody({type: CreateUserDto})
    async login(@Request() dto: CreateUserDto): Promise<{token: string}> {
        return this.authService.login(dto);
    }

    @ApiOperation({summary: "Регистрация"})
    @Post("registration")
    async registration(@Body() dto: CreateUserDto): Promise<User> {
        return this.authService.registration(dto);
    }
}
