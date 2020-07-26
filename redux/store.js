import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { soal } from './reducers/soal'
import { answer } from './reducers/answer'
import { test } from './reducers/test'
import { sort } from './reducers/sort'
import { filter } from './reducers/filter'
import { currentUser } from './reducers/currentUser'
import thunkMiddleware from 'redux-thunk'

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension')
      return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
  }

const combinedReducer = combineReducers({
    soal,
    answer,
    test,
    currentUser,
    sort,
    filter
})

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state,
        ...action.payload,
      }
      if (state.answer) nextState.answer = state.answer
      return nextState
    } else {
      return combinedReducer(state, action)
    }
  }

// Membuat store
const makeStore = context => createStore(
    reducer,
    bindMiddleware([thunkMiddleware])
);

export const wrapper = createWrapper(makeStore, {debug: false});