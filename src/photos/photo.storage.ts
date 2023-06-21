import {diskStorage} from "multer";

const generateName = () => {
    return Array(18)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
}

const normalizeFileName = (req, file, callback) => {
    const fileExtName = file.originalname.split('.').pop();

    callback(null, `${generateName()}.${fileExtName}`);
}

export const photoStorage = diskStorage({
    destination: './uploads',
    filename: normalizeFileName,
})
