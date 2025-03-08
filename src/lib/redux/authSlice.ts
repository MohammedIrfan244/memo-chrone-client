import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoggedInUser } from "../types/login";
import { isBrowser } from "../utils/isBrowser";

interface IAuthState {
  authUser: ILoggedInUser | null;
}

const user = isBrowser() ? localStorage.getItem("user") : null;

const INITIAL_STATE: IAuthState = {
  authUser: user ? JSON.parse(user) : null,
};

const authSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action: PayloadAction<ILoggedInUser>) => {
      state.authUser = action.payload;
      if(isBrowser()) localStorage.setItem("user", JSON.stringify(action.payload));
    },
    removeUser: (state) => {
      state.authUser = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
