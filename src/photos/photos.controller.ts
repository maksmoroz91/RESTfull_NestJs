import { Controller, Param, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { PhotosService } from './photos.service';
import { FileInterceptor } from "@nestjs/platform-express";
import { photoStorage } from "@src/photos/photo.storage";
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from "@nestjs/swagger";


@ApiTags("Фотографии")
@Controller('photos')
export class PhotosController {
    constructor(private readonly photosService: PhotosService) {}

    @ApiOperation({summary: 'Добавление фотографии по ID фильма'})
    @Put(":id")
    @UseInterceptors(FileInterceptor('file', {
        storage: photoStorage
    }))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    update(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
        return this.photosService.update(id, file);
    }

}
