import { Module } from '@nestjs/common';
import { RatingsService } from "@src/ratings/ratings.service";
import { RatingsController } from "@src/ratings/ratings.controller";
import { MoviesModule } from "@src/movies/movies.module";
import { MongooseModule } from "@nestjs/mongoose";
import { Movie, MovieSchema } from "@src/movies/entities/movie.entity";

@Module({
    controllers: [RatingsController],
    providers: [RatingsService],
    imports: [
        MoviesModule,
        MongooseModule.forFeature([
            { name: Movie.name, schema: MovieSchema }
        ]),]
})
export class RatingsModule {}
