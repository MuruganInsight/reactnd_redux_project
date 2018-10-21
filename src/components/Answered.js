import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom'
import RightArrow from '../images/right_arrow.svg'

class Answered extends Component {
    render() {
        const { questions, users, authedUser} = this.props
        const questionId = this.props.match.params.id
        const question = questions[questionId];
        
        // show the home component if question id doesnot match, after return from the home.
        const questionIsInIt = questions.hasOwnProperty(questionId.toString());
        if(!questionIsInIt){
            return <Redirect to="/home" />
        }

        const {author, optionOne, optionTwo} = question
        const user = users[author];
        const {avatarURL, name} = user

        // totalVotes, optionone percentage, optiontwo percentage
        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
        let optionOnePercentage = Math.round(question.optionOne.votes.length / totalVotes * 100)
        let OptionTwoPercentage = Math.round(question.optionTwo.votes.length / totalVotes * 100)        
        
        // for background color of authed user.
        const option = users[authedUser].answers[questionId];

        return (
            <div className="answered-container">

                <div className="grid-x">
                    <div className="cell small-12 ">
                        <h5 className="answered-container__title">Asked by { name }</h5>
                    </div>
                </div>
                <div className="grid-x">
                    <div className="cell small-12">
                        <div className="inner-cointainer">
                            <div className="grid-x">
                                {/* for image */}
                                <div className="cell small-4">
                                    <img src={avatarURL} width="80%" alt={`avtar of ${name}`} />
                                </div>
                                {/* result container */}
                                <div className="cell small-8">
                                    <h3 className="results">Results</h3>
                                    <div className="result-cointainer result" 
                                        style={{backgroundColor: option === 'optionOne' ? '#c7ebf5' : 'lightgray' }}>
                                        <h5>Would you rather {optionOne.text}</h5>
                                        <div className="progress" role="progressbar" style={{ height:'30px'}}>
                                            <span className="progress-meter" style={{width: `${optionOnePercentage}%`, backgroundColor:'#2ba6cb'}}>
                                                <p className="progress-meter-text">{optionOnePercentage}%</p>
                                            </span>
                                        </div>
                                        <p>{question.optionOne.votes.length} out of {totalVotes} votes</p>
                                    </div>
                                    <div className="result-cointainer result"
                                        style={{backgroundColor: option === 'optionTwo' ? '#c7ebf5' : 'lightgray' }}>
                                        <h5>Would you rather {optionTwo.text}</h5>
                                        <div className="progress" role="progressbar" style={{ height:'30px'}}>
                                            <span className="progress-meter" style={{width: `${OptionTwoPercentage}%`, backgroundColor:'#2ba6cb'}}>
                                                <p className="progress-meter-text">{OptionTwoPercentage}%</p>
                                            </span>
                                        </div>
                                        <p>{question.optionTwo.votes.length}  out of {totalVotes} votes</p>
                                    </div>
                                    <Link to="/home">
                                        <div className="grid-x align-middle backbutton">
                                            <img src={RightArrow} className="backbutton" alt=""/>Back to Dashboard
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}

const mapStateToProps = ({questions, users, authedUser}) => ({
    questions,
    users,
    authedUser
})


export default connect(mapStateToProps)(Answered)