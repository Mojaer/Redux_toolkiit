const { default: axios } = require("axios")
const { createStore, applyMiddleware } = require("redux")
const { default: thunk } = require("redux-thunk")

// state
const storeState = {
    product: [],
    loading: false,
    error: null
}

// action

const storeRequest = () => {
    return {
        type: 'Request',
        loading: true
    }
}
const storeSuccess = (product) => {
    return {
        type: 'Success',
        payload: product,
        loading: false,
    }
}
const storeFailed = (error) => {
    return {
        type: 'Failed',
        payload: error,
        loading: false,
    }
}

// reducer

const storeReducers = (state = storeState, action) => {
    switch (action.type) {
        case 'Request':
            return {
                ...state,
                loading: action.loading
            }
        case 'Success':
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        case 'Failed':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
    }

}

//fetchData 
const fetchData = () => {
    return (dispatch) => {
        dispatch(storeRequest())
        axios.get('https://fakestoreapi.com/products')
            .then(res => dispatch(storeSuccess(res.data.map(data => data.title))))
            .catch(err => dispatch(storeFailed(err.message)))
    }
}

// store 
const store = createStore(storeReducers, applyMiddleware(thunk))

// Subscription
store.subscribe(() => {
    console.log(store.getState())
})

// dispatch
store.dispatch(fetchData())