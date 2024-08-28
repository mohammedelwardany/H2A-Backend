import  express  from 'express';
import { userRouter } from './user';
import { authRouter } from './auth';
import { productRouter } from './product';


export const mainRouter = express.Router();

mainRouter.use('/user',userRouter())
mainRouter.use('/auth',authRouter())
mainRouter.use('/product',productRouter())

