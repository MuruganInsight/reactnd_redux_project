import React from 'react'
import Nomatch from '../images/no-match.jpg'


const Notfound = () => (
    <div className="no-match">
        <div className="grid-x align-center">
            <div className="cell small-8">
                   <img src={Nomatch} width="100%" alt=""/> 
            </div>             
        </div>
    </div>
)

export default Notfound