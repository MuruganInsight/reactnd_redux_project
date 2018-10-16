import {saveQuestion} from '../utils/api'
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

export function handleNewQuestion(firstOption, secondOption) {
    return (dispatch, getState) => {
      const { authedUser } = getState()
      return saveQuestion({
        optionOneText: firstOption,
        optionTwoText: secondOption,
        author: authedUser
      }).then(question => dispatch(newQuestion(question)))
    }
  }