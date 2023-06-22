import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
    handleRequest(err, user, info: Error) {
        if (err || !user) {
            throw new UnauthorizedException("Доступ разрешен только для авторизованных пользователей.");
        }
        return user;
    }
}
