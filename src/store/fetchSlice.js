import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: "fetch",
  initialState: {
    fetching: false,
    fetchDone: false,
  },
  reducers: {
    // we can show loader spinner on the basis of fetching state

    // Takes only the initialState of this slice of the whole store and make the small change init
    markFetchDone: (state) => {
      state.fetchDone = true;
    },

    // reducer when fetching of API started (show the loader )
    markFetchingStarted: (state) => {
      state.fetching = true;
    },

    // reducer when fetching of API Finished (hide the loader )
    markFetchingFinished: (state) => {
      state.fetching = false;
    },
  },
});

export const FetchActions = fetchSlice.actions;

export default fetchSlice;
