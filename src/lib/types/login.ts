//auth

export interface ILoginForm {
    identity: string
    password: string
}

export interface ILoggedInUser {
    _id:string
    username:string
    email:string
}

export interface IRegsiterForm {
    username:string
    email:string
    password : string
}

export interface IAuthResponse {
    user: ILoggedInUser
    message:string
    accessToken:string
    status : string
}