import { configureStore } from "@reduxjs/toolkit";
import bikeReducer from "./features/bike/bikeSlice";
import usersReducer from "./features/user/userSlice";
import carReducer from "./features/car/carSlice";

const store = configureStore({
  reducer: {
    bike: bikeReducer,
    users: usersReducer,
    cars: carReducer,
  },
});

export default store;
