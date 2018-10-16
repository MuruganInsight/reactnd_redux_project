import React, { Component } from 'react'

export default class NewQuestion extends Component {

    state = {

    }

    render() {
        return (
            <div className="container text-center new-question container-small">
            <div className="row">
                <div className="column small-12 container-title">
                    <h2>Create New Question</h2>
                </div>
            </div>
            <div className="row ">
                <div className="column small-12">
                    <p>Complete the question:</p>
                    <h3>Would you rather ...</h3>
                </div>
            </div>
                <div className="row">
                    <div className="column small-12">
                    <form>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                            <div className="medium-12 cell">
                                 <input type="text" className="text-center" placeholder="Please enter your first option" />
                            </div>
                            <div className="medium-12 cell text-center">
                                <h3>or</h3>
                            </div>
                            <div className="medium-12 cell">
                                <input type="text" className="text-center"  placeholder="Please enter your second option" />
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
