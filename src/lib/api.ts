import axios from "axios"
import { ILoginForm, IRegsiterForm } from "./types/login";
import handleAxiosError from "./utils/handleAxiosError";



// auth

export const registerUser = async ({username , email, password}: IRegsiterForm): Promise<string> => {
    try{
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`, {username, email, password});
        return response.data.message
    }catch(error){
        return handleAxiosError(error)
    }
}

export const loginUser = async ( {  password, identity }: ILoginForm): Promise<string> => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, { identity, password});
        return response.data.message
    } catch (error) {
        return handleAxiosError(error)
    }
}

export const logoutUser = async (): Promise<string> => {
    try {
        await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`);
        return "User logged out successfully"
    } catch (error) {
        return handleAxiosError(error)
    }
}