import bcrypt  from 'bcrypt';
import User from "../models/User";
import CustomError from "../errors/CustomError";
import { IUser } from '../interfaces/IUser';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, PASSWORD_HASH_ROUND } from '../../constants';


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

        // const token = jwt.sign({user},JWT_SECRET as string)

        user.password= undefined;
        return user
      }


      async adduser(user_:IUser){

        const {name,email,password,role} = user_

        const userFound = await User.findOne({email},{__v:0})
  
        if(userFound)
          throw new CustomError("User is Registered Already",400)

        const passwordHash = await bcrypt.hash(password,+PASSWORD_HASH_ROUND)

        const user = await User.create({
          name,
          email,
          password:passwordHash,
          role
        })
  
        return user
      }
}