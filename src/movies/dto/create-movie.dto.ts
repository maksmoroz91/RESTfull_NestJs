import { ApiBody, ApiProperty } from "@nestjs/swagger";

export class CreateMovieDto {

    @ApiProperty({ default: "Терминатор", description: "Название фильма" })
    readonly title: string;

    @ApiProperty({ default: "Фильм о ...", description: "Описание фильма"  })
    readonly description: string;

    @ApiProperty({ default: null, description: "Рейтинг фильма"  })
    readonly rating: number;

    @ApiProperty({ default: [], description: "Список путей до изображений"  })
    readonly imagePath: string[];
}
