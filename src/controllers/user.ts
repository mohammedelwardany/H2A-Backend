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
}