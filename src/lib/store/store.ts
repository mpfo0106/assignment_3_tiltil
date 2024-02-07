import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user.reducer";

export interface UserState {
  nickname: string;
}

export interface RootState {
  user: UserState;
}
const store = configureStore({
  reducer: { user: userReducer },
});

export default store;
