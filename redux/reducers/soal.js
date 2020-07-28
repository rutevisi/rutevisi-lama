import { FETCH_MBTI, FETCH_FAKBOI, FETCH_NEGARAMANA } from '../actions/types'

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
        case FETCH_NEGARAMANA:
            return Object.assign({}, state, {
                negaramana: action.payload,
                testname: 'Negara Mana',
                loading:false,
            })
        default:
            return state;
    }
};