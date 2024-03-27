// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware } from "redux";
// import logger from "redux-logger";
import rootReducer from "./root-reducer";
// import userReducer from "./user/user-reducer";

// const middleWares = [logger];

const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export default store;
