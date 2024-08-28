import { productController } from '../controllers/product';
import express, { Router } from 'express';



const router = express.Router()
const productControllerInstance = productController.getInstance()


export const productRouter: () => Router = () => {
    router.get("/", async (req, res, next) => {
        try {
            const { limit, skip } = req.query;
            const products = await productControllerInstance.getAllProducts(+limit, +skip);
            return res.status(200).json(products)
        } catch (error) {
            next(error)
        }
    })
    router.get("/:id", async (req, res, next) => {
        try {
            const { id } = req.params;
            return res.status(200).json(await productControllerInstance.getProductById(id))
        } catch (error) {
            next(error)
        }
    })
    router.post("/", async (req, res, next) => {
        try {
            return res.status(201).json(await productControllerInstance.createProduct())
        } catch (error) {
            next(error)
        }
    })

    router.put("/:id",async(req,res,next)=>{
        try {
            const{id}=req.params;
            await productControllerInstance.updateProduct(id,req.body)
            return res.status(200).json({message:"Product Update Successfully"})
        } catch (error) {
            next(error)
        }
    })

    router.delete("/:id",async(req,res,next)=>{
        try {
            const{id}=req.params;
            return res.status(200).json({product:await productControllerInstance.deleteProduct(id),message:"Deleted Successfully"})
        } catch (error) {
            next(error)
        }
    })
    return router;
}