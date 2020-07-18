import { FETCH_MBTI } from '../actions/types'

const initialState = {
    soal: [],
    loading: null
}

export const mbti = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MBTI:
            return Object.assign({}, state, {
                soal: action.payload,
              })
        default:
            return state;
    }
};