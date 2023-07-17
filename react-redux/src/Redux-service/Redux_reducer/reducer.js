import { createStore } from 'redux'

const counterState = {
    count: 0
}

const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case 'increase':
            return {
                ...state,
                count: state.count + 1
            }
        case 'decrease':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return {
                ...state,
                count: 0
            }
    }
}

const store = createStore(counterReducer)

export default store