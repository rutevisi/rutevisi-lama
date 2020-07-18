import { createStore, applyMiddleware } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initialState = {
    soalMBTI: []
}
const mbtiReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload};
        case 'FETCH_MBTI':
            return {...state, soalMBTI: action.payload};
        default:
            return state;
    }
};

const middleware = [thunk];

// Membuat store
const makeStore = context => createStore(
    mbtiReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export const wrapper = createWrapper(makeStore, {debug: false});