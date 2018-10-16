import React, { Component } from 'react'
import { connect } from "react-redux";

class Answered extends Component {
    render() {
        console.log(this.props.match.params.id)
        // if(this.props.match.params.id)
        return (



            <div className="row individual-question">
            {/* <div className="column small-12">
                <div className="row">
                    <div className="column small-2">
                        <img className="author-img" 
                            src={avatarURL} 
                            alt={`Image of ${name}`}
                            />
                    </div>
                    <div className="column small-8">
                        <h6 className="">{name} asks:</h6>    
                        <h5 className="">Would you rather</h5>
                        <h4 className="">...{questions[id].optionOne.text}</h4>                        
                    </div>
                    <div className="column small-2">
                        <button className="button float-center">View Poll</button>
                    </div>
                </div>
            </div> */}
        </div>
        )
    }
}

const mapStateToProps = ({questions}) => ({
    questions
})


export default Answered