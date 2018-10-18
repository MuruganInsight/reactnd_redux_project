import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'


class Answered extends Component {
    render() {
        const { questions, users, authedUser} = this.props
        const questionId = this.props.match.params.id
        const question = questions[questionId];
        const {author, optionOne, optionTwo} = question
        const user = users[author];
        const {avatarURL, name} = user

        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
        let optionOnePercentage = question.optionOne.votes.length / totalVotes * 100
        let OptionTwoPercentage = question.optionTwo.votes.length / totalVotes * 100        
        
        // for background color of authed user.
        const option = users[authedUser].answers[questionId];


        // if(this.props.match.params.id)
        return (
            <div className="answered-container">

                <div className="expanded row">
                    <div className="column small-12 ">
                        <h5 className="answered-container__title">Asked by { name }</h5>
                    </div>

                    <div className="column small-12">
                        <div className="inner-cointainer">
                            <div className="row">
                                {/* for image */}
                                <div className="columns small-4">
                                    <img src={avatarURL} width="100%" alt={`avtar of ${name}`} />
                                </div>
                                <div className="columns small-8">
                                    <h3 className="results">Results</h3>
                                    <div className="result-cointainer" 
                                        style={{backgroundColor: option === 'optionOne' ? '#b9f3e9' : 'lightgray' }}>
                                        <h5>Would you rather {optionOne.text}</h5>
                                        <div className="progress" role="progressbar" style={{ height:'30px'}}>
                                            <span className="progress-meter" style={{width: `${optionOnePercentage}%`, backgroundColor:'#3dcea6'}}>
                                                <p className="progress-meter-text">{optionOnePercentage}%</p>
                                            </span>
                                        </div>
                                        <p>{question.optionOne.votes.length} out of {totalVotes} votes</p>
                                    </div>
                                    <div className="result-cointainer"
                                        style={{backgroundColor: option === 'optionTwo' ? '#b9f3e9' : 'lightgray' }}>
                                        <h5>Would you rather {optionTwo.text}</h5>
                                        <div className="progress" role="progressbar" style={{ height:'30px'}}>
                                            <span className="progress-meter" style={{width: `${OptionTwoPercentage}%`, backgroundColor:'#3dcea6'}}>
                                                <p className="progress-meter-text">{OptionTwoPercentage}%</p>
                                            </span>
                                        </div>
                                        <p>{question.optionTwo.votes.length}  out of {totalVotes} votes</p>
                                    </div>
                                    <Link to="/home">Back to Dashboard</Link>

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