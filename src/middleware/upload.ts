import { fileFilter, storage } from "../config/multer";
import multer from "multer";

export const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
    fileFilter: fileFilter,
  });