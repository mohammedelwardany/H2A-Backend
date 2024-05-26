import bcrypt  from 'bcrypt';
import User from "../models/User";
import CustomError from "../errors/CustomError";
import { IUser } from '../interfaces/IUser';
import { authSchema } from '../vaildators/auth';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../constants';


export class authController{

    private static instance: authController;

    private constructor() {}

    public static getInstance(): authController {
        if (!authController.instance) {
          authController.instance = new authController();
        }
        return authController.instance;
      }

      async login(email:string,password:string){

  
        const user = await User.findOne({email},{__v:0})
  
        if(!user)
          throw new CustomError("Invalid credentials",401)
  
        const isMatch = await bcrypt.compare(password,user.password)
  
        if(!isMatch)
          throw new CustomError("Invalid credentials",401)

        const token = jwt.sign({user},JWT_SECRET as string)
  
        return {user , token}
      }


      async adduser(user_:IUser){

        const {name,email,password,role} = user_

        const passwordHash = await bcrypt.hash(password,10)

        const user = await User.create({
          name,
          email,
          password:passwordHash,
          role
        })
  
        return user
      }
}