import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Movie } from "@src/movies/entities/movie.entity";
import { Model } from "mongoose";

@Injectable()
export class PhotosService {
    constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {
    }

    async update(id: string, file: Express.Multer.File) {
        const photoPath = file.path;
        const movie = await this.movieModel.findById(id);
        movie.imageUrls.push(photoPath);
        await movie.save();
    }
}
