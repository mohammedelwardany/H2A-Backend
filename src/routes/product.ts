import { joiParam, joiValidation } from '../middleware/joiVadiation';
import { productController } from '../controllers/product';
import express, { Router } from 'express';
import { ID } from '../vaildators/general';
import { productSchema } from '../vaildators/product';
import CustomError from '../errors/CustomError';



const router = express.Router()
const productControllerInstance = productController.getInstance()


export const productRouter: () => Router = () => {


    router.get('/all',async(req, res, next)=>{
        try {
            return res.status(200).json(await productControllerInstance.getAllProducts())
        } catch (error) {
            next(error)
        }
    })
    router.get("/", async (req, res, next) => {
        try {
            const { limit, skip, segments, fields, search } = req.query;
            const products = await productControllerInstance.getProducts(+limit, +skip, segments?.toString().split(","), fields?.toString().split(","), search as string);
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
            if (!product) throw new CustomError("NOT FOUND", 404)
            return res.status(200).json({ message: "Deleted Successfully" })
        } catch (error) {
            next(error)
        }
    })
    return router;
}