import { FETCH_MBTI, FETCH_FAKBOI } from '../actions/types'

const initialState = {
    loading: null
}

export const soal = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MBTI:
            return Object.assign({}, state, {
                mbti: action.payload,
            })
        case FETCH_FAKBOI:
            return Object.assign({}, state, {
                fakboi: action.payload,
            })
        default:
            return state;
    }
};