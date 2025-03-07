import { createSlice , PayloadAction } from "@reduxjs/toolkit";


interface IAuthUser {
    username: string;
    email: string;
}

interface IAuthState {
    authUser: IAuthUser | null;
}

const user = localStorage.getItem("authUser")

const INITIAL_STATE : IAuthState = {
    authUser: user ? JSON.parse(user) : null
}

const authSlice = createSlice({
    name : "user",
    initialState: INITIAL_STATE,
    reducers : {
        setUser : (state,action:PayloadAction<IAuthUser>) => {state.authUser = action.payload},
        removeUser : (state)=>{state.authUser = null}   
    }
})

export const { setUser,removeUser } = authSlice.actions;
export default authSlice.reducer