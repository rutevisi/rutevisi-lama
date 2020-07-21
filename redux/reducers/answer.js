import { ADD_ANSWER, ADD_ANSWERED } from '../actions/types'
import update from 'immutability-helper';

const initialState = {
    answers: [],
    answered: [],
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
                        answered: {$set: action.payload.answered}
                      }
                    },
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
                        flip: action.payload.flip,
                        answered: action.payload.answered,
                        }
                    ],
                }
            }
            case ADD_ANSWERED:
                const findByPropInArray = (arr, prop) => match => arr.find(e => e[prop] === match)
                const find = findByPropInArray(state.answered, "questionId");
    
                const res = find(action.payload.questionId) ? true : false
    
                if(res){
                    return update(state, { 
                        answered: {
                            [action.payload.index]: {
                                questionId: {$set: action.payload.questionId},
                                jawab: {$set: action.payload.jawab},
                                indikator: {$set: action.payload.indikator},
                              }
                        } 
                    });
                }
                else{
                    return {
                        ...state,
                        answered: [
                            ...state.answered,
                            {
                                questionId: action.payload.questionId,
                                jawab: action.payload.jawab,
                                indikator: action.payload.indikator
                            }
                        ]
                    }
                }
        default:
            return state;
    }
};