import fs from 'fs';
import path from 'path';


import { IProduct } from "interfaces/IProduct";
import Product from "../models/Product";


export class productController {

    private static instance: productController;

    private constructor() { }

    public static getInstance(): productController {
        if (!productController.instance) {
            productController.instance = new productController();
        }
        return productController.instance;
    }

    async getAllProducts(limit: number, skip: number, segments?: string[], fieldOfApplication?: string[] , search?:string) {
        const filter: any = {};
      
        if (segments && segments.length > 0) {
          filter['clinicalSegments.segments'] = { $in: segments };
        }
      
        if (fieldOfApplication && fieldOfApplication.length > 0) {
          filter['clinicalSegments.fieldOfApplication'] = { $in: fieldOfApplication };
        }

        if(search) filter["name"] = new RegExp(search,"i")
      
        return await Product.find(filter).skip((skip - 1)*limit).limit(limit);
      }

    async createProduct(product: IProduct) {
        return await Product.create(product)
    }


    async getProductById(id: string) {
        return await Product.findById(id)
    }

    async updateProduct(id: string, body: IProduct) {
        return await Product.findByIdAndUpdate(id, body);
    }

    async deleteProduct(id: string) {
        const deletedProduct =  await Product.findByIdAndDelete(id);
        const imagesMessage =this.deleteImages(deletedProduct.name);

        return {deletedProduct,imagesMessage};
    }

    async getSegment_Fields() {
        const clinicalData = await Product.aggregate([
            { $unwind: '$clinicalSegments.segments' },
            { $unwind: '$clinicalSegments.fieldOfApplication' },
            {
                $group: {
                    _id: null,
                    segments: { $addToSet: '$clinicalSegments.segments' },
                    fieldOfApplication: { $addToSet: '$clinicalSegments.fieldOfApplication' }
                }
            },
            { $project: { _id: 0, segments: 1, fieldOfApplication: 1 } }
        ]);

        return clinicalData[0] || { segments: [], fieldOfApplication: [] };
    }

    async search(productName:string){
        return await Product.find({name:productName})
    }


    async createImages(files: Express.Multer.File[] , id:string , fileName:string){
        
        const imageUrls = files.map((file) => `/images/${fileName}/${file.filename}`);

        const newProduct = {
            images: imageUrls, 
        };

        await Product.findByIdAndUpdate(id,{...newProduct},{upsert:true})

        return "Images Stored!";
    }

    private deleteImages(name:string){
        const dir = path.join(__dirname, '../../public/images', name);
        fs.rm(dir, { recursive: true, force: true }, (err) => {
            if (err) {
             throw err
            }
          });
          return "Images Deleted"
    }


}