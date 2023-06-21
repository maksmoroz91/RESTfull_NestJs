import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateMovieDto } from "@src/movies/dto/create-movie.dto";
import { UpdateMovieDto } from "@src/movies/dto/update-movie.dto";
import { Movie } from "@src/movies/entities/movie.entity";

@Injectable()
export class MoviesService {
    constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {
    }

    async getAll(): Promise<Movie[]> {
        return this.movieModel.find();
    }

    async create(dto: CreateMovieDto): Promise<Movie> {
        const newMovie = new this.movieModel(dto);
        return newMovie.save();
    }

    async getById(id: string): Promise<Movie> {
        try {
            return await this.movieModel.findById(id);
        } catch (e) {
            throw new BadRequestException('Нет фильма с таким ID');
        }

    }

    async update(id: string, dto: UpdateMovieDto): Promise<Movie> {
        return this.movieModel.findByIdAndUpdate(id, dto, { new: true });
    }

    async remove(id: string): Promise<Movie> {
        return this.movieModel.findByIdAndRemove(id);
    }
}
