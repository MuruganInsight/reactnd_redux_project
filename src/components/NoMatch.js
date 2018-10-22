import React from 'react'
import { Link } from 'react-router-dom'
import Nomatch from '../images/no-match.jpg'
import RightArrow from '../images/right_arrow.svg'



const Notfound = () => (
    <div className="no-match">
        <div className="grid-x align-center">
            <div className="cell small-6">
                    <img src={Nomatch} width="100%" alt=""/>
            </div>             
        </div>
        <Link to="/home">
            <div className="grid-x align-center backbutton">
                <div className="cell small-6">
                    <img src={RightArrow} className="backbutton" alt=""/>Back to Home
                </div>
            </div>
        </Link>
    </div>
)

export default Notfound