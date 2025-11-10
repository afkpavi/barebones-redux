const redux = require("redux");
const axios = require("axios");
const thunk = require("redux-thunk");

// Actions Types
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Actions
const fetchUsersRequested = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// Initial State
const initialUserState = {
  loading: false,
  users: [],
  error: "",
};

// Reducer
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    default:
      return state;
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
};

const rootReducer = redux.combineReducers({
  users: userReducer,
});

// Async action
const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequested());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response.data)
        dispatch(fetchUsersSuccess(response.data.map((user) => user.name)));
      })
      .catch((err) => {
        dispatch(fetchUsersFailure(err.message));
      });
  };
};

const store = redux.legacy_createStore(
  rootReducer,
  redux.applyMiddleware(thunk.thunk),
);

const unsubscribe = store.subscribe(() => {
  console.log("State Updated => ", store.getState());
});

store.dispatch(fetchUser());

setTimeout(() => {
  console.log("unsubscribing");
  unsubscribe();
}, 5000);
