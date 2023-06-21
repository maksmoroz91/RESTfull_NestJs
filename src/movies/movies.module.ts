import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { MoviesService } from "@src/movies/movies.service";
import { MoviesController } from "@src/movies/movies.controller";
import { Movie, MovieSchema } from "@src/movies/entities/movie.entity";

@Module({
    controllers: [MoviesController],
    providers: [MoviesService],
    exports: [MoviesService],
    imports: [
        MongooseModule.forFeature([
            { name: Movie.name, schema: MovieSchema }
        ]),
    ]
})
export class MoviesModule {}
