import React, { Component } from 'react'
import { connect } from "react-redux";


class LeaderBoard extends Component {
    render(){
        const { sortedUsers } = this.props;

        const i = [0,1,2];
        return (
            <div className="container leader-board">
                {/* Title */}
                <div className="row">
                    <div className="column small-12">
                        <h2>Leader Board</h2>
                    </div>
                </div>

                {/* Leader board details  */}
                <div className="leader-board__players">
                {
                    
                    sortedUsers.map((user) =>{
                        const {id, name, avatarURL, answers, questions} = user
                        
                        return <div key={id} className="row leader-board__player">
                            <div className="column small-2">
                                <img className="avatar-full" src={avatarURL} alt={`avatar of ${name}`} />
                            </div>
                            <div className="column small-8">
                                <h3 className="bold">{name}</h3>
                                <h6>Answered Question: {Object.keys(answers).length}</h6>
                                <h6>Created Question: {questions.length}</h6>
                            </div>
                            <div className="column small-2 score">
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