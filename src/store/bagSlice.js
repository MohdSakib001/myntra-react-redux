import { createSlice } from "@reduxjs/toolkit";

// Creating a Slice
const bagSlice = createSlice({
  name: "Bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      // Push the id of item into the array
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      // Remove the id of item from array
      return state.filter((item) => item != action.payload);
    },
  },
});

// Exporting all the actions of slice
export const bagActions = bagSlice.actions;

// Exporting the slice so that it can be add into the store
export default bagSlice;
