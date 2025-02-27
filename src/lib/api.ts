import axios from "axios"
import { ILoginForm } from "./type";

export const loginUser = async ( { email, password, username }: ILoginForm): Promise<void> => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, { email, password,username });
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}