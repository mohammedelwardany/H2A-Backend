export interface IUser{
    email:string,
    password:string,
    name:string,
    role:String[]
}

export enum role{
    "admin",
    "superadmin",
    "editor"
}