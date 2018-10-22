import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Answered from './Answered'
import Unanswered from './Unanswered'

const Questions = (props) => {
    const questionId = props.match.params.question_id
    const {authedUser, users, questions} = props;

    // check ifthe questions has id in the state; 
    if(questions.hasOwnProperty(questionId.toString())) {
        // check if authedUser answer this question. if yes Answered component, else Unanswered component
        return users[authedUser].answers.hasOwnProperty(questionId) 
            ? <Answered id={questionId} />
            : <Unanswered  id={questionId} />
    } else {
        return  <Redirect to="/NoMatch" />
    }
}

const mapStateToProps = ({questions, users, authedUser}) => ({
    questions,
    users,
    authedUser
})

export default connect(mapStateToProps)(Questions)