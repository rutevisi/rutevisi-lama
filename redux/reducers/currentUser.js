import { AUTHENTICATE_USER, AUTHENTICATE_DESTROY, AUTHECTICATE_FAILED, AUTHENTICATE_LOADING, UPDATE_PROFILE } from '../actions/types'

const initialState = {
    authenticate: false,
    errorMessage: null,
    userData: {},
    loading: null,
    userProfile: null
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
                userProfile: action.payload.user_photo,
                authenticate: true,
                errorMessage: null,
                loading: false
            }
        case AUTHENTICATE_DESTROY:
            return {
                userData: null,
                authenticate: false,
                userProfile: null,
                errorMessage: null,
                loading: false
            }
        case AUTHECTICATE_FAILED:
            return {
                userData: null,
                authenticate: false,
                userProfile: null,
                errorMessage: action.payload,
                loading: false
            }
        case UPDATE_PROFILE:
            return Object.assign({}, state, {
                ...state,
                userProfile: action.payload,
            })
        default:
            return state;
    }
};