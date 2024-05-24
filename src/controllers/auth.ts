import bcrypt  from 'bcrypt';
import User from "../models/User";
import CustomError from "../errors/CustomError";
import { IUser } from '../interfaces/IUser';
import { authSchema } from '../vaildators/auth';


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

  
        const user = await User.findOne({email})
  
        if(!user)
          throw new CustomError("Invalid credentials",401)
  
        const isMatch = await bcrypt.compare(password,user.password)
  
        if(!isMatch)
          throw new CustomError("Invalid credentials",401)
  
        return user
      }


      async adduser(user_:IUser){

        const {name,email,password,role} = user_

        // // const validation = await authSchema.data.validateAsync(user_ ,{abortEarly:false})
        // // if(validation){
        // //     // console.log(validation); 
        // //     const errorMessage = validation.details.map((error:any)=>error.message).join(',')
        // //     console.log(errorMessage);
                           
        //     // throw new CustomError(errorMessage,400)
        // }


        const user = await User.create({
          name,
          email,
          password,
          role
        })
  
        return user
      }
}