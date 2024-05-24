import CustomError from '../errors/CustomError';
import { userController } from '../controllers/user';
import  express, { Router }  from 'express';


const router = express.Router()
const userControllerInstance = userController.getInstance()


export const userRouter : ()=> Router =()=>{

    router.get("/users",(req: express.Request,res:express.Response)=>{
        res.json({message:userControllerInstance.getAllUsers()})
    })

    router.post("/",(req,res)=>{
        
        res.json({message:"Created" , user:userControllerInstance.createUser()})
    })

    router.get("/:id", async (req,res,next)=>{
        try {
            const user = await userControllerInstance.getUserById(req.params.id);
            if(!user){
                return next(new CustomError("User Not Found",404))
            }
            return res.status(200).json({message:"Successfully",user})
        } catch (error) {
            next(new CustomError(error.message))
        }
        
    })

    return router
}


