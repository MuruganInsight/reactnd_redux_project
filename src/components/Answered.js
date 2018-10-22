import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import RightArrow from '../images/right_arrow.svg'

const Answered = ({ questions, users, authedUser, id }) => {
    const questionId = id
    const question = questions[questionId];
    const { author, optionOne, optionTwo } = question
    const user = users[author];
    const { avatarURL, name } = user

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
                    <h5 className="answered-container__title">Asked by {name}</h5>
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
                            {/* result containers */}
                            <div className="cell small-8">
                                <h3 className="results">Results</h3>

                                {/* result Container */}
                                <div className="result-cointainer result"
                                    style={{ backgroundColor: option === 'optionOne' ? '#c7ebf5' : 'lightgray' }}>
                                    <h5>Would you rather {optionOne.text}</h5>
                                    <div className="progress" role="progressbar" style={{ height: '30px' }}>
                                        <span className="progress-meter" style={{ width: `${optionOnePercentage}%`, backgroundColor: '#2ba6cb' }}>
                                            <p className="progress-meter-text">{optionOnePercentage}%</p>
                                        </span>
                                    </div>
                                    <p>{question.optionOne.votes.length} out of {totalVotes} votes</p>
                                </div>

                                {/* result Container */}
                                <div className="result-cointainer result"
                                    style={{ backgroundColor: option === 'optionTwo' ? '#c7ebf5' : 'lightgray' }}>
                                    <h5>Would you rather {optionTwo.text}</h5>
                                    <div className="progress" role="progressbar" style={{ height: '30px' }}>
                                        <span className="progress-meter" style={{ width: `${OptionTwoPercentage}%`, backgroundColor: '#2ba6cb' }}>
                                            <p className="progress-meter-text">{OptionTwoPercentage}%</p>
                                        </span>
                                    </div>
                                    <p>{question.optionTwo.votes.length}  out of {totalVotes} votes</p>
                                </div>

                                {/* link to home component */}
                                <Link to="/home">
                                    <div className="grid-x align-middle backbutton">
                                        <img src={RightArrow} className="backbutton" alt="" />Back to Home
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

const mapStateToProps = ({ questions, users, authedUser }, { id }) => ({
    questions,
    users,
    authedUser,
    id
})


export default connect(mapStateToProps)(Answered)