const createSlice = require("@reduxjs/toolkit").createSlice;
const { coffeeActions } = require("../coffee/coffeeSlice");

const initialState = {
  numOfTea: 25,
};

const teaSlice = createSlice({
  name: "tea",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfTea -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfTea += action.payload;
    },
  },
  // extraReducers: {
  //     ['coffee/ordered']: state => {
  //         state.numOfTea--
  //     }
  // }
  extraReducers: (builder) => {
    builder.addCase(coffeeActions.ordered, (state, action) => {
      state.numOfTea--;
    });
  },
});

module.exports = teaSlice.reducer;
module.exports.teaActions = teaSlice.actions;
