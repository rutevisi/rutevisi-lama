import { AUTHENTICATE_USER, AUTHENTICATE_DESTROY, AUTHECTICATE_FAILED, AUTHENTICATE_LOADING, UPDATE_PROFILE } from '../actions/types'
import update from 'immutability-helper';

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
        case UPDATE_PROFILE:
            return update(state, { 
                userData: {
                    user_photo: {$set: action.payload}
                }
            });
        default:
            return state;
    }
};