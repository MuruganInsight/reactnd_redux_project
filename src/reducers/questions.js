import { RECEIVE_QUESTIONS } from "../actions/questions";

export default function question(state={}, action){
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
    
        default:
            return state
    }
}