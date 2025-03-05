import axios from "axios"
import { ILoginForm } from "./types/login";

export const loginUser = async ( {  password, identity }: ILoginForm): Promise<void> => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, { identity, password});
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}