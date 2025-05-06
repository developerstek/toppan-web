import { configureStore } from "@reduxjs/toolkit";
import timerReducer, { decrementTimer } from "./slices/timerSlice";
import themeReducer from "./slices/themeSlice";
import collapseReducer from "./slices/collapseSlice";

const store = configureStore({
  reducer: {
    timer: timerReducer,
    theme: themeReducer,
    collapse: collapseReducer,
  },
});

setInterval(() => {
  store.dispatch(decrementTimer());
}, 1000);

export type RootState = ReturnType<typeof store.getState>;
export default store;
