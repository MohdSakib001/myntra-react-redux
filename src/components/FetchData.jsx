import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemActions } from "../store/itemsSlice";
import { FetchActions } from "../store/fetchSlice";

// headless components which does not provide any UI but work for logic only
export const FetchData = () => {
  const fetching = useSelector((store) => store.Fetch);
  const dispatch = useDispatch();

  useEffect(() => {
    // If data is fetched already
    if (fetching.fetchDone) return;

    // Created a controller
    const controller = new AbortController();
    const signal = controller.signal;

    // Shows that fetching from server is started
    dispatch(FetchActions.markFetchingStarted());

    // Fetching data from the backend server we created
    async function fetchingData() {
      try {
        const res = await fetch("items.json", { signal });

        // Destructure the items array from the response we get from server
        const { items } = await res.json();

        // It shows that fetching from sever is done now
        dispatch(FetchActions.markFetchDone());

        // Shows that fetching from server is Finished
        dispatch(FetchActions.markFetchingFinished());

        // Dispatching the payload back to this slice
        dispatch(ItemActions.addInitialItems(items[0]));
      } catch (err) {
        console.error(err);
      }
    }
    fetchingData();

    return () => {
      // controller.abort();
    };
  }, []);

  return <></>;
};
