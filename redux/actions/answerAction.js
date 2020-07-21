import { ADD_ANSWER, ADD_ANSWERED } from './types'

export const addQuestion = (answer) => ({
    type: ADD_ANSWER,
    payload: answer,
});

export const addAnswered = (answered) => ({
    type: ADD_ANSWERED,
    payload: answered
})