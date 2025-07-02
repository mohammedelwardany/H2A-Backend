import  express  from 'express';
import { userRouter } from './user';
import { authRouter } from './auth';
import { productRouter } from './product';
import { newsRouter } from './news';

export const mainRouter = express.Router();

mainRouter.use('/user',userRouter())
mainRouter.use('/auth',authRouter())
mainRouter.use('/product',productRouter())
mainRouter.use('/news',newsRouter())

