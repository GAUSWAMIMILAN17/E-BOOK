import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import bookSlice from "./bookSlice"
import orderSlice from "./orderSlice"

const store = configureStore({
  reducer: {
    user: authSlice,
    books: bookSlice,
    orders: orderSlice
  },
});

export default store;
