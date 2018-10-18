import React, { Component } from 'react'
import { connect } from "react-redux";
import { handleSaveAnswer } from '../actions/questions'


class UnAnswered extends Component {

    state = {
        selected:''
    }

    handleSubmit = e => {
       e.preventDefault();
       const {selected} = this.state
       const { authedUser } = this.props
       const questionId = this.props.match.params.id.toString()
       this.props.dispatch(handleSaveAnswer(questionId, selected, authedUser))
       this.props.history.push(`/answered/${questionId}`)

    }

    handleChange = (e) => {
        this.setState({
            selected: e.target.value.toString()
        })
    }


    render() {

        const { questions, users} = this.props
        const questionId = this.props.match.params.id
        const question = questions[questionId];
        const {author, optionOne, optionTwo} = question
        const user = users[author];
        const {avatarURL, name} = user
        console.log(questionId);


        return (
            <div className="answered-container">

            <div className="expanded row">
                <div className="column small-12 ">
                    <h5 className="answered-container__title">{ name } asks: </h5>
                </div>

                <div className="column small-12">
                    <div className="inner-cointainer">
                        <div className="row">
                            {/* for image */}
                            <div className="columns small-4">
                                <img src={avatarURL} width="100%" alt={`avtar of ${name}`} />
                            </div>
                            <div className="columns small-8">
                                <div className="result-cointainer">
                                    <h5>Would you rather</h5>
                                    <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                                        <input type="radio" value="optionOne" name="option" /> {optionOne.text}
                                        <br />
                                        <input type="radio" value="optionTwo" name="option" /> {optionTwo.text}
                                        <button className="button" onClick={this.handleSubmit}>Submit</button>
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

const mapStateToProps = ({questions, users, authedUser}) => ({
    questions,
    users,
    authedUser
})

export default connect(mapStateToProps)(UnAnswered)