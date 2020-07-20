import { TEST_END, TEST_START, SEND_RESULT } from '../actions/types'

const initialState = {
    testDone: null,
    result: {},
}

export const test = (state = initialState, action) => {
    switch (action.type) {
        case TEST_START:
            return {
                ...state,
                testDone: false,
                result: {}
            }
        case TEST_END:
            return {
                ...state,
                testDone: true,
                result: action.payload.result
            }
        default:
            return state
    }
}