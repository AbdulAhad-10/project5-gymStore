import { createSlice } from "@reduxjs/toolkit";
import { products } from "../constants/data";

const initialState = {
  searchTerm: "",

  searchItems: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchItems = products.filter((product) =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    clearAll: (state) => {
      state.items = [];
    },
  },
});

export const { setSearchTerm, clearAll } = searchSlice.actions;
export default searchSlice.reducer;
