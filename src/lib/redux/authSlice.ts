import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoggedInUser } from "../types/login";

interface IAuthState {
  authUser: ILoggedInUser | null;
}

const user = localStorage.getItem("user");

const INITIAL_STATE: IAuthState = {
  authUser: user ? JSON.parse(user) : null,
};

const authSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action: PayloadAction<ILoggedInUser>) => {
      state.authUser = action.payload;
      localStorage.setItem("user", JSON.stringify(state.authUser));
    },
    removeUser: (state) => {
      state.authUser = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
