import User from "../models/User";

export class userController{

    private static instance: userController;

    private constructor() {}

    public static getInstance(): userController {
        if (!userController.instance) {
          userController.instance = new userController();
        }
        return userController.instance;
      }

    getAllUsers(){
        return "All Users....."
    }

    async createUser(){
      return await User.create({
        name:"abdo",
        password:"Abdo12345",
        email:"abdo@example.com",
        role:"admin"
      })
    }
}