import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'


class Question extends Component {

    render() {
        const {id, answered, users, questions} = this.props
        const {avatarURL, name} = users[questions[id].author]
        // console.log(answered);
        return (
                <div className="row individual-question">
                <div className="column small-12">
                    <div className="row">
                        <div className="column small-2">
                            <img className="author-img" 
                                src={avatarURL} 
                                alt={`avatar of ${name}`}
                                />
                        </div>
                        <div className="column small-8">
                            <h6 className="">{name} asks:</h6>    
                            <h5 className="">Would you rather</h5>
                            <h4 className="">...{questions[id].optionOne.text}</h4>                        
                        </div>
                        <Link to={`/questions/${id}`}>
                            <div className="column small-2">
                                <button className="button float-center">View Poll</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({authedUser, users, questions}, {id, answered}) => ({
    users,
    questions,
    id
})



export default connect(mapStateToProps)(Question)