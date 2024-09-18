import multer from "multer";
import path from 'path';
import fs from 'fs';

import CustomError from "../errors/CustomError";


export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const folderName = req.body.name;
        
        if (folderName) {
            const dir = path.join(__dirname, '../../public/images', folderName);

            fs.mkdir(dir, { recursive: true }, (err) => {
                if (err) {
                    return cb(err, '');
                }
                cb(null, dir);
            });
        }


    },
    filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            cb(null, uniqueSuffix + path.extname(file.originalname));
    }
})

export const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    if(req.files && (req.files.length as number) > 0){    
    const allowedTypes = /jpeg|jpg|png|webp|jfif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());

    if (extname) {
      return cb(null, true);
    } else {
      cb(new CustomError('Only images are allowed',400));
    }
}
};

