import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Movie } from "@src/movies/entities/movie.entity";

@Injectable()
export class RatingsService {
    constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {
    }

    async update(id: string, rating: number): Promise<Movie> {
        return this.movieModel.findByIdAndUpdate(id, { rating }, { new: true });
    }

    async sort(order: string): Promise<Movie[]> {
        const sortDirection = order === "asc" ? 1 : -1;
        const query = { rating: { $ne: null } };

        return this.movieModel.find(query).sort({ rating: sortDirection });
    }
}
