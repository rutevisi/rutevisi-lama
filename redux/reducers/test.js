import { TEST_END, TEST_START } from '../actions/types'

const initialState = {
    testDone: null
}

export const test = (state = initialState, action) => {
    switch (action.type) {
        case TEST_START:
            return {
                ...state,
                testDone: false
            }
        case TEST_END:
            return {
                ...state,
                testDone: true
            }
        default:
            return state
    }
}