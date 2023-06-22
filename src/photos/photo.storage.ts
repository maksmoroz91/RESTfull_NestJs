import {diskStorage} from "multer";
import { BadRequestException } from "@nestjs/common";

const generateName = () => {
    return Array(18)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
}

const isAllowedExtension = (fileName: string): boolean => {
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const fileExtName = fileName.split('.').pop().toLowerCase();
    return allowedExtensions.includes(fileExtName);
};

const normalizeFileName = (req, file, callback) => {
    if (!isAllowedExtension(file.originalname)) {
        callback(new BadRequestException('Можно загрузить только JPG, JPEG, PNG и GIF.'));
    } else {
        const fileExtName = file.originalname.split('.').pop();
        callback(null, `${generateName()}.${fileExtName}`);
    }
};

export const photoStorage = diskStorage({
    destination: './uploads',
    filename: normalizeFileName,
})
