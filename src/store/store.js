import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { demoApi } from "./api/demo";

const rootReducer = combineReducers({
  [demoApi.reducerPath]: demoApi.reducer,
});

const middlewares = [demoApi.middleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export default store