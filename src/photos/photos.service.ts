import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { extname } from "path";
import { Movie } from "@src/movies/entities/movie.entity";

@Injectable()
export class PhotosService {
    constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {
    }

    async update(id: string, file: Express.Multer.File): Promise<Movie> {
        const photoPath = file.path;
        const movie = await this.movieModel.findById(id);
        const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        const fileExtension = extname(file.originalname);

        if (!allowedExtensions.includes(fileExtension)) {
            throw new BadRequestException('Разрешены только изображения (.jpg, .jpeg, .png, .gif)');
        }

        movie.imageUrls.push(photoPath);
        return movie.save();
    }
}
