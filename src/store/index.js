import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./itemsSlice";
import fetchSlice from "./fetchSlice";
import bagSlice from "./bagSlice";

// Creating store of multiple Slices
const myntraStore = configureStore({
  reducer: {
    Items: ItemSlice.reducer,
    Fetch: fetchSlice.reducer,
    Bag: bagSlice.reducer,
  },
});

// Exporting store as default
export default myntraStore;
