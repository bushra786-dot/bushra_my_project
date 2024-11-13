import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;  // Exit if already fetched

    const controller = new AbortController();
    const signal = controller.signal;

    // Dispatch action to mark the start of fetching
    dispatch(fetchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(({ items }) => {
        dispatch(itemsActions.addInitialItems(items));
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Fetch error: ", error);
        }
      });

    // Cleanup: abort fetch only if it’s not completed
    return () => {
      if (!fetchStatus.fetchDone) {
        controller.abort();
      }
    };
  }, [dispatch, fetchStatus.fetchDone]);

  return null;
};

export default FetchItems;
