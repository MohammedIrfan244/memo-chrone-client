import { createSlice , PayloadAction } from "@reduxjs/toolkit";


interface IUser {
    username: string;
    email: string;
}

interface IAuthState {
    user: IUser | null;
}

const user = localStorage.getItem("user")

const INITIAL_STATE : IAuthState = {
    user: user ? JSON.parse(user) : null
}

const authSlice = createSlice({
    name : "user",
    initialState: INITIAL_STATE,
    reducers : {
        setUser : (state,action:PayloadAction<IUser>) => {state.user = action.payload},
        removeUser : (state)=>{state.user = null}   
    }
})

export const { setUser,removeUser } = authSlice.actions;
export default authSlice.reducer