import { TEST_END, TEST_START } from './types'

export const testStart = (payload) => ({
    type: TEST_START,
    payload: payload,
});

export const testEnd = (payload) => ({
    type: TEST_END,
    payload: payload,
});