import React, { Component } from 'react'
import { connect } from "react-redux";

class Question extends Component {
    render() {
        const {id, answered, authedUser, users, questions} = this.props
        const {avatarURL, name} = users[questions[id].author]
        console.log(answered);
        return (

            <div className="row individual-question">
            <div className="column small-12">
                <div className="row">
                    <div className="column small-2">
                        <img className="author-img" 
                            src={avatarURL} 
                            alt={`Image of ${name}`}
                            />
                    </div>
                    <div className="column small-8">
                        <h4 className="">{name} asks:</h4>    
                        <h5 className="">Would you rather</h5>
                        <h6 className="">...{questions[id].optionOne.text}</h6>                        
                    </div>
                    <div className="column small-2">
                        <button className="button float-center">View Poll</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


const mapStateToProps = ({authedUser, users, questions}, {id, answered}) => ({
    authedUser,
    users,
    questions,
    id
})



export default connect(mapStateToProps)(Question)