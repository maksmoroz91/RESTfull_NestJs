import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { MoviesModule } from "@src/movies/movies.module";
import { RatingsModule } from "@src/ratings/ratings.module";
import { UsersModule } from "@src/users/users.module";
import { PhotosModule } from "@src/photos/photos.module";
import { AuthModule } from "@src/auth/auth.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        MongooseModule.forRoot(process.env.MONGODB_URI),
        MoviesModule,
        RatingsModule,
        UsersModule,
        PhotosModule,
        AuthModule,
    ],
    controllers: [],
    providers: []
})
export class AppModule {
}
