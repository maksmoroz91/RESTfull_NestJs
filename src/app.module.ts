import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { MoviesModule } from "@src/movies/movies.module";
import { RatingsModule } from "@src/ratings/ratings.module";
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        MongooseModule.forRoot(process.env.MONGODB_URI),
        MoviesModule,
        RatingsModule,
        UsersModule,
    ],
    controllers: [],
    providers: []
})
export class AppModule {
}
