import React from 'react'
import { connect } from "react-redux";
import RightArrow from '../images/right_arrow.svg'

const Question = ({id, users, questions}) => {
    const {avatarURL, name} = users[questions[id].author]
    return (
        <div className="grid-x individual-question">
            <div className="cell small-12">
                <div className="grid-x align-middle">
                    <div className="cell small-3">
                        <img className="author-img" 
                            src={avatarURL} 
                            alt={`avatar of ${name}`}/>
                    </div>
                    <div className="cell small-7 question-details">
                        <h6 className="">{name} asks:</h6>    
                        <h5 className="">Would you rather</h5>
                        <h4 className="">...{questions[id].optionOne.text}</h4>                     
                    </div>
                    <div className="cell small-2">
                        <button className="button" style={{width:'100%'}}>
                            <img src={RightArrow} width="75px" alt=""/><br/>
                            View Poll
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({users, questions}, {id}) => ({
    users,
    questions,
    id
})



export default connect(mapStateToProps)(Question)