import { ADD_ANSWER, ADD_ANSWERED, ADD_PILGAN_ANSWER, ADD_PILGAN_ANSWERED } from './types'

export const addQuestion = (answer) => ({
    type: ADD_ANSWER,
    payload: answer,
});

export const addAnswered = (answered) => ({
    type: ADD_ANSWERED,
    payload: answered
});

export const addPilganAnswer = (answer) => ({
    type: ADD_PILGAN_ANSWER,
    payload: answer
});

export const addPilganAnswered = (answered) => ({
    type: ADD_PILGAN_ANSWERED,
    payload: answered
});