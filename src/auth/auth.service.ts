import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "@src/users/users.service";
import { CreateUserDto } from "@src/users/dto/create-user.dto";

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
        ) {
    }

    async validateUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email);

        if (user && user.password === password) {
            const {password, ...result } = user;
            return {
                token: this.jwtService.sign({email: user.email})
            };
        }

        return null;
    }

    async register(dto: CreateUserDto) {
        return this.userService.create(dto);
    }

    async login(user) {
        return {
            token: this.jwtService.sign({ _id: user._id})
        };
    }
}
