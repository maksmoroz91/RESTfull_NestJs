import { ApiBody, ApiProperty } from "@nestjs/swagger";

export class CreateMovieDto {

    @ApiProperty({default: 'Терминатор'})
    readonly title: string;

    @ApiProperty({default: 'Боевик'})
    readonly description: string;

    @ApiProperty({default: null})
    readonly rating: number;

    @ApiProperty({default: []})
    readonly imagePath: string[];
}
