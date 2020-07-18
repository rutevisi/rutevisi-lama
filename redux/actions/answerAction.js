import { ADD_ANSWER } from './types'

export const addQuestion = (answer) => ({
    type: ADD_ANSWER,
    payload: answer,
});