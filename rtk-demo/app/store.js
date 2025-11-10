const configureStore = require("@reduxjs/toolkit").configureStore;
const { createLogger } = require("redux-logger");
const coffeeReducer = require("../app/features/coffee/coffeeSlice");
const teaReducer = require("./features/tea/teaSlice");

const logger = createLogger();

const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
    tea: teaReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
