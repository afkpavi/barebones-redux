const store = require("./app/store");
const coffeeActions =
  require("./app/features/coffee/coffeeSlice").coffeeActions;
const teaActions = require("./app/features/tea/teaSlice").teaActions;
const { fetchUsers } = require("./app/features/user/userSlice");

// console.log("Initial State => ", store.getState());

const unsub = store.subscribe(() => {
  // console.log("State Updated => ", store.getState())
});

// store.dispatch(coffeeActions.ordered(2));
// store.dispatch(coffeeActions.restocked(5));

// store.dispatch(teaActions.ordered(2));
// store.dispatch(teaActions.restocked(5));

store.dispatch(fetchUsers());

// unsub();
