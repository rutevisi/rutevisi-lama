import { ADD_ANSWER } from '../actions/types'
import update from 'immutability-helper';

const initialState = {
    answers: [],
}

export const answer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ANSWER:
            const findByPropInObjectArray = (arr, prop) => match => arr.find(e => e[prop] === match)
            const findID = findByPropInObjectArray(state.answers, "questionId");

            const result = findID(action.payload.questionId) ? true : false

            if(result){
                return update(state, { 
                    answers: { 
                      [action.payload.index]: {
                        questionId: {$set: action.payload.questionId},
                        index: {$set: action.payload.index},
                        jawab: {$set: action.payload.jawab},
                        flip: {$set: action.payload.flip},
                      }
                    }
                });
            }
            else{
                return {
                    ...state,
                    answers: [
                        ...state.answers,
                        {
                            questionId: action.payload.questionId,
                        index: action.payload.index,
                        jawab: action.payload.jawab,
                        flip: action.payload.flip
                        }
                    ]
                }
            }
        default:
            return state;
    }
};