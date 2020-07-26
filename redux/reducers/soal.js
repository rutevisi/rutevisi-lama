import { FETCH_MBTI, FETCH_FAKBOI } from '../actions/types'

const initialState = {
    loading: null,
    testname: '',
}

export const soal = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MBTI:
            return Object.assign({}, state, {
                mbti: action.payload,
                testname: 'Myers–Briggs Type Indicator',
                loading:false,
            })
        case FETCH_FAKBOI:
            return Object.assign({}, state, {
                fakboi: action.payload,
                testname: 'Fakboi-Check',
                loading:false,
            })
        default:
            return state;
    }
};