import { joiParam, joiValidation } from '../middleware/joiVadiation';
import express, { Router } from 'express';
import { ID } from '../vaildators/general';
import { newsSchema } from '../vaildators/news';
import CustomError from '../errors/CustomError';
import { NewsController } from '../controllers/news';



const router = express.Router()
const productControllerInstance = NewsController.getInstance()


export const newsRouter: () => Router = () => {


    router.get('/all',async(req, res, next)=>{
        try {
            return res.status(200).json(await productControllerInstance.getNews())
        } catch (error) {
            next(error)
        }
    })
    
    router.get("/:id", joiParam(ID.data), async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await productControllerInstance.getNewsById(id);
            if (!product) throw new CustomError("NOT FOUND", 404)
            return res.status(200).json(product)
        } catch (error) {
            next(error)
        }
    })

    router.post("/", joiValidation(newsSchema.data), async (req, res, next) => {
        try {
            return res.status(201).json(await productControllerInstance.createNews(req.body))
        } catch (error) {
            next(error)
        }
    })

    router.put("/:id", joiParam(ID.data), joiValidation(newsSchema.data), async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await productControllerInstance.updateNews(id, req.body);
            if (!product) throw new CustomError("NOT FOUND", 404)
            return res.status(200).json({ message: "Product Update Successfully" })
        } catch (error) {
            next(error)
        }
    })

    router.delete("/:id", joiParam(ID.data), async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await productControllerInstance.deleteNews(id);
            if (!product) throw new CustomError("NOT FOUND", 404)
            return res.status(200).json({ message: "Deleted Successfully" })
        } catch (error) {
            next(error)
        }
    })
    return router;
}