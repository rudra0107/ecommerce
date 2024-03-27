import { createSlice } from "@reduxjs/toolkit";
import SHOP_DATA from "./shop.js";

const INITIAL_DATA = {
  collections: SHOP_DATA,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState: INITIAL_DATA,
  reducers: {},
});

export default shopSlice.reducer;
