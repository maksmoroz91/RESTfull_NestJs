import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from "@nestjs/common";
import { MoviesService } from "@src/movies/movies.service";
import { CreateMovieDto } from "@src/movies/dto/create-movie.dto";
import { UpdateMovieDto } from "@src/movies/dto/update-movie.dto";
import { Movie } from "@src/movies/entities/movie.entity";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "@src/auth/guards/jwt.guard";

@Controller("movies")
@ApiTags("Фильмы")
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({summary: "Создать фильм"})
    @Post()
    createMovie(@Body() dto: CreateMovieDto): Promise<Movie> {
        return this.moviesService.create(dto);
    }

    @ApiOperation({summary: "Получить все фильмы"})
    @Get()
    getAllMovies(): Promise<Movie[]> {
        return this.moviesService.getAll();
    }

    @ApiOperation({summary: "Найти фильм по ID"})
    @Get(":id")
    getMovieById(@Param("id") id: string): Promise<Movie> {
        return this.moviesService.getById(id);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({summary: "Обновить фильм по ID"})
    @Put(":id")
    updateMovie(@Param("id") id: string, @Body() dto: UpdateMovieDto): Promise<Movie> {
        return this.moviesService.update(id, dto);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({summary: "Удалить фильм по ID"})
    @Delete(":id")
    removeMovie(@Param("id") id: string): Promise<Movie> {
        return this.moviesService.remove(id);
    }
}
