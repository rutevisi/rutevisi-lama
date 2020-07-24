import { FILTER_FUN, FILTER_KARIR_EDUKASI, FILTER_PSIKOLOGI } from '../actions/types'

const initialState = {
    filterby: '',
}

export const filter = (state = initialState, action) => {
    switch(action.type){
        case FILTER_FUN:
            return{
                filterby: action.payload
            }
        case FILTER_PSIKOLOGI:
            return{
                filterby: action.payload
            }
        case FILTER_KARIR_EDUKASI:
            return{
                filterby: action.payload
            }
        default:
            return state;
    }
}