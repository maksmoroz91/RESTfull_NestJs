import { Module } from "@nestjs/common";
import { PhotosService } from "@src/photos/photos.service";
import { PhotosController } from "@src/photos/photos.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Movie, MovieSchema } from "@src/movies/entities/movie.entity";

@Module({
    controllers: [PhotosController],
    providers: [PhotosService],
    imports: [
        MongooseModule.forFeature([
            { name: Movie.name, schema: MovieSchema }
        ])]
})
export class PhotosModule {
}
