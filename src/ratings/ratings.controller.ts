import { Controller, Get, Param, Put } from "@nestjs/common";
import { RatingsService } from "@src/ratings/ratings.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Movie } from "@src/movies/entities/movie.entity";

@Controller("ratings")
@ApiTags("Рейтинг фильмов")
export class RatingsController {
    constructor(private readonly ratingsService: RatingsService) {
    }

    @ApiOperation({summary: 'Обновить рейтинг фильма по ID'})
    @Put(":id/:rating")
    update(@Param("id") id: string, @Param("rating") rating: number): Promise<Movie> {
        return this.ratingsService.update(id, rating);
    }

    @ApiOperation({summary: 'Сортировать все фильмы по рейтингу (order == asc - по возрастанию)'})
    @Get("sort/:order")
    sort(@Param("order") order: string): Promise<Movie[]> {
        return this.ratingsService.sort(order);
    }
}
