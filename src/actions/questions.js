import {saveQuestion} from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const NEW_QUESTION = 'NEW_QUESTION'


export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function newQuestion(question) {
    return {
      type: NEW_QUESTION,
      question
    }
  }

export function handleNewQuestion(firstOption, secondOption, authedUser) {
    return (dispatch) => {
      return saveQuestion({
        optionOneText: firstOption,
        optionTwoText: secondOption,
        author: authedUser
      }).then(question => dispatch(newQuestion(question)))
    }
  }