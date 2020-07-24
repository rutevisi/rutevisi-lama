import { SORT_BARU, SORT_POPULER } from '../actions/types'

const initialState = {
    sortby: '',
}

export const sort = (state = initialState, action) => {
    switch(action.type){
        case SORT_BARU:
            return{
                sortby: action.payload
            }
        case SORT_POPULER:
            return{
                sortby: action.payload
            }
        default:
            return state;
    }
}