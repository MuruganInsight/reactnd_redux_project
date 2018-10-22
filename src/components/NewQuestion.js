import React, { Component } from 'react'
import { connect } from "react-redux";
import { handleNewQuestion } from "../actions/questions";

class NewQuestion extends Component {

    state = {
        firstOption:'',
        secondOption:'',
    }

    handleChange =  e => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { firstOption, secondOption } = this.state
        this.props.dispatch(handleNewQuestion(firstOption, secondOption, this.props.authedUser))
        this.setState({
          firstOption: "",
          secondOption: "",
        })
        this.props.history.push("/home")
      }

    render() {
        return (
            <div className="container text-center new-question container-small">
                <div className="grid-x">
                    <div className="cell small-12 container-title">
                        <h2>Create <br/>New Question</h2>
                    </div>
                </div>
                <div className="grid-x">
                    <div className="cell small-12">
                        <p>Complete the question:</p>
                        <h3>Would you rather ...</h3>
                    </div>
                </div>
                <div className="grid-x">
                    <div className="cell small-12">
                        <form onSubmit={this.handleSubmit} >
                            <div className="grid-container">
                                <div className="grid-x grid-padding-x">
                                    <div className="medium-12 cell">
                                        <input type="text" className="text-center" placeholder="Please enter your first option" name="firstOption" value={this.state.firstOption} onChange={this.handleChange} />
                                    </div>
                                    <div className="medium-12 cell text-center">
                                        <h5>or</h5>
                                    </div>
                                    <div className="medium-12 cell">
                                        <input type="text" className="text-center"  placeholder="Please enter your second option" name="secondOption" value={this.state.secondOption} onChange={this.handleChange} />
                                    </div>
                                    <div className="medium-12 cell">
                                        <button className="button" type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ authedUser }) => ({
    authedUser,
})


export default connect(mapStateToProps)(NewQuestion)