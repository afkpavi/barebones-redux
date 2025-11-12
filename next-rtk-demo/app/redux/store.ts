import { configureStore } from "@reduxjs/toolkit";
import bikeReducer from "./features/bike/bikeSlice";
import usersReducer from "./features/user/userSlice";
import carReducer from "./features/car/carSlice";
import postApi from "./features/post/postSlice";

const store = configureStore({
  reducer: {
    bike: bikeReducer,
    users: usersReducer,
    cars: carReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
