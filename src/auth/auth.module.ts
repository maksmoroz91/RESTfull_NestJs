import { Module } from '@nestjs/common';
import { AuthService } from "@src/auth/auth.service";
import { AuthController } from "@src/auth/auth.controller";
import { UsersModule } from "@src/users/users.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "@src/auth/strategies/local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtStrategy } from "@src/auth/strategies/jwt.strategy";

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                return {
                    secret: configService.get("SECRET_KEY"),
                    signOptions: { expiresIn: configService.get("EXPIRES_IN")}
                };
            },
        }),
        UsersModule,
        PassportModule,
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
    ]
})
export class AuthModule {}
