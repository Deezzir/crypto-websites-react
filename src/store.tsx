import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../src/blocks/block4/reducers";
import { thunk } from "redux-thunk";

const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });
};

export default store;
