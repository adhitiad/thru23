import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartReducer";
import { useDispatch } from "react-redux";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
