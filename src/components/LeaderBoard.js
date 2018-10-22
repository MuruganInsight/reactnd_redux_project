import React, { Component } from 'react'
import { connect } from "react-redux";


class LeaderBoard extends Component {
    render(){
        const { sortedUsers } = this.props;

        // const i = [0,1,2];
        return (
            <div className="container leader-board">
                {/* Title */}
                <div className="grid-x">
                    <div className="cell small-12 container-title">
                        <h2>Leader Board</h2>
                    </div>
                </div>

                {/* Leader board details  */}
                <div className="leader-board__players">
                {
                    
                    sortedUsers.map((user) =>{
                        const {id, name, avatarURL, answers, questions} = user
                        
                        return <div key={id} className="grid-x align-middle leader-board__player">
                            <div className="cell small-3">
                                <img className="avatar-full" src={avatarURL} alt={`avatar of ${name}`} />
                            </div>
                            <div className="cell small-7">
                                <h3 className="bold">{name}</h3>
                                <h5>Answered Question: {Object.keys(answers).length}</h5>
                                <h5>Created Question: {questions.length}</h5>
                            </div>
                            <div className="cell small-2 score">
                                <div className="score--title">
                                    Score
                                </div>
                                <div className="score--count">
                                { Object.keys(answers).length + questions.length } 
                                </div>
                            </div>
                        </div>
                    })     
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
    const sortedUsers = Object.keys(users).map(id => users[id])
                      .sort((a, b) =>(b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length))
  return {
    sortedUsers
  }
}

export default connect(mapStateToProps)(LeaderBoard);