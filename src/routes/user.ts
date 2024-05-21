import { userController } from '../controllers/user';
import  express, { Router }  from 'express';


const router = express.Router()
const userControllerInstance = userController.getInstance()


export const userRouter : ()=> Router =()=>{

    router.get("/users",(req: express.Request,res:express.Response)=>{
        res.json({message:userControllerInstance.getAllUsers()})
    })
    return router
}


