import {saveQuestion, saveQuestionAnswer} from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const NEW_QUESTION = 'NEW_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'


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

  export function saveAnswer(authedUser, qid, answer) {
    return {
      type: SAVE_ANSWER,
      authedUser,
      qid,
      answer
    }
  }


export function handleSaveAnswer( qid, answer, authedUser ) {
    return (dispatch) => {
      dispatch(saveAnswer(authedUser, qid, answer))
      return saveQuestionAnswer({
        authedUser,
        qid,
        answer
      })
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

  