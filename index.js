const redux = require('redux')

// Action Types
const ITEM_ORDERED = 'ITEM_ORDERED'

// Action Creator
const orderItem = (quantity) => {
    return {
        type: ITEM_ORDERED,
        quantity
    }
}

// initialState
const initialState = {
    itemCount : 10
}

// Reducer
const reducer = (state=initialState, action) => {
    switch(action.type){
        case ITEM_ORDERED:
            return {...state, itemCount: state.itemCount -= action.quantity}
        default:
            return state
    }
}

// Store
const store = redux.legacy_createStore(reducer)

console.log('Initial state => ', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('State Updated => ', store.getState())
})

store.dispatch(orderItem(5))
store.dispatch(orderItem(5))
store.dispatch(orderItem(5))
store.dispatch(orderItem(5))

unsubscribe()

