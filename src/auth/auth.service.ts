import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { UsersService } from "@src/users/users.service";
import { CreateUserDto } from "@src/users/dto/create-user.dto";
import { User } from "@src/users/entities/user.entity";

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
        ) {
    }

    async login(user): Promise<{token: string}> {
        return {
            token: this.jwtService.sign({ _id: user._id, email: user.email})
        };
    }

    async registration(dto: CreateUserDto): Promise<User> {
        const candidate = await this.userService.findByEmail(dto.email);

        if (candidate) {
            throw new BadRequestException("Пользователь с такой почтой уже существует")
        }

        const hashPassword = await bcrypt.hash(dto.password, 5);
        return this.userService.create({...dto, password: hashPassword})
    }

    async validateUser(email: string, password: string): Promise<{token: string}> {
        const user = await this.userService.findByEmail(email);

        if (user) {
            const passwordEquals: boolean = await bcrypt.compare(password, user.password);

            if (user && passwordEquals) {
                return {
                    token: this.jwtService.sign({email: user.email})
                };
            }
        }

        return null;
    }
}
