import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import searchReducer from "./searchSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});

export default store;
