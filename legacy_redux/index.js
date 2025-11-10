const redux = require("redux");
const reduxLogger = require("redux-logger");

// Action Types
const COFFEE_ORDERED = "COFFEE_ORDERED";
const COFFEE_RESTOCKED = "COFFEE_RESTOCKED";

const TEA_ORDERED = "TEA_ORDERED";
const TEA_RESTOCKED = "TEA_RESTOCKED";

// Action Creator
const orderCoffee = (qty) => {
  return {
    type: COFFEE_ORDERED,
    payload: qty,
  };
};
const restockCoffee = (qty) => {
  return {
    type: COFFEE_RESTOCKED,
    payload: qty,
  };
};

const orderTea = (qty) => {
  return {
    type: TEA_ORDERED,
    payload: qty,
  };
};
const restockTea = (qty) => {
  return {
    type: TEA_RESTOCKED,
    payload: qty,
  };
};

// initialState
const initialCoffeeState = {
  coffeeCount: 10,
};
const initialTeaState = {
  teaCount: 20,
};

// Reducer
const coffeeReducer = (state = initialCoffeeState, action) => {
  switch (action.type) {
    case COFFEE_ORDERED:
      return { ...state, coffeeCount: state.coffeeCount - action.payload };
    case COFFEE_RESTOCKED:
      return { ...state, coffeeCount: state.coffeeCount + action.payload };
    default:
      return state;
  }
};
const teaReducer = (state = initialTeaState, action) => {
  switch (action.type) {
    case TEA_ORDERED:
      return { ...state, teaCount: state.teaCount - action.payload };
    case TEA_RESTOCKED:
      return { ...state, teaCount: state.teaCount + action.payload };
    default:
      return state;
  }
};

const rootReducer = redux.combineReducers({
  coffee: coffeeReducer,
  tea: teaReducer,
});

// Store
const store = redux.legacy_createStore(
  rootReducer,
  redux.applyMiddleware(reduxLogger.createLogger()),
);

console.log("Initial state => ", store.getState());

// const unsubscribe = store.subscribe(() => {
//   console.log("State Updated => ", store.getState());
// });

const action = redux.bindActionCreators(
  { orderCoffee, restockCoffee, orderTea, restockTea },
  store.dispatch,
);

action.orderCoffee(3);
action.restockCoffee(4);

action.orderTea(3);
action.restockTea(4);

// unsubscribe();
