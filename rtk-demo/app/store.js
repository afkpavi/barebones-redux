const configureStore = require("@reduxjs/toolkit").configureStore;
const { createLogger } = require("redux-logger");
const coffeeReducer = require("../app/features/coffee/coffeeSlice");
const teaReducer = require("./features/tea/teaSlice");
const userReducer = require("./features/user/userSlice");

const logger = createLogger();

const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
    tea: teaReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
