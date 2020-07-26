import { AUTHENTICATE_USER, AUTHENTICATE_DESTROY, AUTHECTICATE_FAILED, AUTHENTICATE_LOADING } from '../actions/types'

const initialState = {
    authenticate: false,
    errorMessage: null,
    userData: {},
    loading: null,
}

export const currentUser = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE_LOADING:
            return {
                ...state,
                loading: true
            }
        case AUTHENTICATE_USER:
            return {
                userData: action.payload,
                authenticate: true,
                errorMessage: null,
                loading: false
            }
        case AUTHENTICATE_DESTROY:
            return {
                userData: null,
                authenticate: false,
                errorMessage: null,
                loading: false
            }
        case AUTHECTICATE_FAILED:
            return {
                userData: null,
                authenticate: false,
                errorMessage: action.payload,
                loading: false
            }
        default:
            return state;
    }
};