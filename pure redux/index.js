const { createStore, applyMiddleware } = require('redux')
const { default: logger } = require('redux-logger')
// state 
const initialState = {
    count: 0,
}


// action
const increaseState = () => {
    return {
        type: 'increase'
    }
}
const decreaseState = () => {
    return {
        type: 'decrease'
    }
}

// reducer 
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increase':
            return {
                ...state,
                count: state.count + 1
            }
            break;
        case 'decrease':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            break;
    }
}

const store = createStore(counterReducer, applyMiddleware(logger))

store.subscribe(() => console.log(store.getState()))

store.dispatch(increaseState())


