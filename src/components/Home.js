import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Question from './Question'

class Home extends Component {

    state = {
        tab:'unanswered'
    }

    handleClick = (selectedOption) => {
        selectedOption !== this.state.selected && this.setState(() => ({
            tab: selectedOption
        }))
    }

    render() {
        const {tab} = this.state
        const { unansweredIds, answeredIds } = this.props
        return (
            <div className="container">
            {/* tab */}
                <div className="row">
                    <ul className="tabs column small-12">
                        <div className="row align-center">
                            <ul className="tabs">
                                <li className={`tabs-title column small-6 text-center ${tab === 'unanswered' ? 'is-active' : ''}`} onClick={() => this.handleClick('unanswered')}>Unanswered Questions</li>
                                <li className={`tabs-title  column small-6  text-center ${tab === 'answered' ? 'is-active' : ''}`} onClick={() => this.handleClick('answered')}>Answered Questions</li>
                            </ul>
                        </div>
                    </ul>     
                </div>

                {/* unanswered tab content // if unanswered === true, show the unanswered content*/}
                {tab === 'unanswered' &&
                    <div className="question-container light-orange">
                        <h2 className="text-center">Unanswered Questions:</h2>
                        {
                            unansweredIds.map(id => (
                                <Link to={`/unanswered/${id}`} key={id}>
                                    <Question id={id} />
                                </Link>
                            ))
                        }
                        
                    </div>
                }
                
                {/* unanswered tab content // if unanswered === false, show the answered content*/}
                {tab === 'answered' && (
                <div className="question-container  light-blue">
                    <h2 className="text-center">Answered Questions:</h2>
                    {   
                        answeredIds.map(id => (
                            <Link to={`/answered/${id}`} key={id}>
                                <Question id={id} />
                            </Link>
                        ))
                    }
                </div>
                )}

            </div>
        )
    }
}

const mapStateToProps = ({authedUser, users, questions}) => {
        const unansweredIds = []
        const answeredIds = Object.keys(users[authedUser].answers)
        const questionsId = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        questionsId.map(id => answeredIds.includes(id) === false && unansweredIds.push(id))
        answeredIds.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
        return {
          authedUser,
          answeredIds,
          unansweredIds
        }
}


export default connect(mapStateToProps)(Home)