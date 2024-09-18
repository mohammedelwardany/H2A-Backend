import { joiParam, joiValidation } from '../middleware/joiVadiation';
import { productController } from '../controllers/product';
import express, { Router } from 'express';
import { ID } from '../vaildators/general';
import { productSchema } from '../vaildators/product';
import CustomError from '../errors/CustomError';
import { upload } from '../middleware/upload';



const router = express.Router()
const productControllerInstance = productController.getInstance()


export const productRouter: () => Router = () => {

    router.post("/images/:id", upload.array("images", 10), async (req, res, next) => {
        try {
            const files = req.files as Express.Multer.File[];
            const {id} = req.params
            const FileName = req.body.name;
            if(!id || !files || files.length < 0) throw new CustomError("Some Thing wrong please check that you add any images" , 400)
            res.status(200).json({message:await productControllerInstance.createImages(files,id,FileName)})
        } catch (error) {
            next(error);
        }
    })
    router.get("/", async (req, res, next) => {
        try {
            const { limit, skip, segments, fields, search } = req.query;
            const products = await productControllerInstance.getAllProducts(+limit, +skip, segments?.toString().split(","), fields?.toString().split(","), search as string);
            return res.status(200).json(products)
        } catch (error) {
            next(error)
        }
    })
    router.get("/segment-field", async (req, res, next) => {
        try {
            return res.status(200).json(await productControllerInstance.getSegment_Fields())
        } catch (error) {
            next(error)
        }
    })
    router.get("/:id", joiParam(ID.data), async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await productControllerInstance.getProductById(id);
            if (!product) throw new CustomError("NOT FOUND", 404)
            return res.status(200).json(product)
        } catch (error) {
            next(error)
        }
    })

    router.post("/", joiValidation(productSchema.data), async (req, res, next) => {
        try {
            return res.status(201).json(await productControllerInstance.createProduct(req.body))
        } catch (error) {
            next(error)
        }
    })

    router.put("/:id", joiParam(ID.data), joiValidation(productSchema.data), async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await productControllerInstance.updateProduct(id, req.body);
            if (!product) throw new CustomError("NOT FOUND", 404)
            return res.status(200).json({ message: "Product Update Successfully" })
        } catch (error) {
            next(error)
        }
    })

    router.delete("/:id", joiParam(ID.data), async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await productControllerInstance.deleteProduct(id);
            if (!product.deletedProduct) throw new CustomError("NOT FOUND", 404)
            return res.status(200).json({ message: "Deleted Successfully" , images_message:product.imagesMessage })
        } catch (error) {
            next(error)
        }
    })
    return router;
}