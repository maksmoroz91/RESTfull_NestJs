import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Movie } from "@src/movies/entities/movie.entity";

@Injectable()
export class PhotosService {
    constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {
    }

    async update(id: string, file: Express.Multer.File): Promise<Movie> {
        const photoPath = file.path;
        const movie = await this.movieModel.findById(id);

        movie.imagePath.push(photoPath);
        return movie.save();
    }
}
