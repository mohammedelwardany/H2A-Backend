import fs from 'fs';
import path from 'path';


import { INews } from '../interfaces/INews';
import News from '../models/News';


export class NewsController {

    private static instance: NewsController;

    private constructor() { }

    public static getInstance(): NewsController {
        if (!NewsController.instance) {
            NewsController.instance = new NewsController();
        }
        return NewsController.instance;
    }

    async getNews() {      
        return await News.find().sort({ createdAt: -1 });
      }

    async createNews(product: INews) {
        return await News.create(product);
    }


    async getNewsById(id: string) {
        return await News.findById(id);
    }

    async updateNews(id: string, body: INews) {
        return await News.findByIdAndUpdate(id, body);
    }

    async deleteNews(id: string) {
        const deletedNews =  await News.findByIdAndDelete(id);
        return deletedNews;
    }

    
    async createImages(files: Express.Multer.File[] , id:string , fileName:string){
        
        const imageUrls = files.map((file) => `/images/${fileName}/${file.filename}`);

        const newProduct = {
            images: imageUrls, 
        };

        await News.findByIdAndUpdate(id,{...newProduct},{upsert:true})

        return "Images Stored!";
    }

   async deleteImages(id:string){

       const news = await News.findById(id);

       if(news){
           const dir = path.join(__dirname, '../../public/images', news.title);
           fs.rm(dir, { recursive: true, force: true }, (err) => {
               if (err) {
                   throw err
               }
           });
       }
   }


}