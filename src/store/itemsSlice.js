import { createSlice } from "@reduxjs/toolkit";

// Creating a Slice
const ItemSlice = createSlice({
  name: "Items",
  initialState: [],
  reducers: {
    // Creating reducers for every actions seperately
    addInitialItems: (store, actions) => {
      return actions.payload;
    },
  },
});

// Exporting all the actions of slice
export const ItemActions = ItemSlice.actions;

// Exporting the slice so that it can be add into the store
export default ItemSlice;
