import React, { Component } from 'react'
import { connect } from "react-redux";
import { handleSaveAnswer } from '../actions/questions'


class UnAnswered extends Component {

    state = {
        selected: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        const { selected } = this.state
        const { authedUser, id } = this.props
        this.props.dispatch(handleSaveAnswer(id, selected, authedUser))
    }

    handleChange = (e) => {
        this.setState({
            selected: e.target.value.toString()
        })
    }


    render() {

        const { questions, users } = this.props
        const questionId = this.props.id
        const question = questions[questionId];
        const { author, optionOne, optionTwo } = question
        const user = users[author];
        const { avatarURL, name } = user

        return (
            <div className="answered-container">
                <div className="grid-x">
                    <div className="cell small-12 ">
                        <h5 className="answered-container__title">{name} asks: </h5>
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
                                <div className="cell small-8">
                                    <div className="result-cointainer">
                                        <h5>Would you rather</h5>
                                        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                                            <input type="radio" value="optionOne" name="option" /> {optionOne.text}
                                            <br />
                                            <input type="radio" value="optionTwo" name="option" /> {optionTwo.text}
                                            <br />
                                            <button className="button" disabled={this.state.selected === ''}>Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ questions, users, authedUser }, { id }) => ({
    questions,
    users,
    authedUser,
    id
})

export default connect(mapStateToProps)(UnAnswered)