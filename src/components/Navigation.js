import React from 'react'
import { Link } from "react-router-dom";
import AuthButton from './AuthButton'



const Navigation = () => (   
<div className="top-bar">
  <div className="top-bar-left">
    <ul className="dropdown menu" data-dropdown-menu>
        <li><Link to="/protected">Home</Link></li>
        <li><Link to="/newquestion">New Question</Link></li>
        <li><Link to="/leaderboard">Leader Board</Link></li>
    </ul>
  </div>
  <div className="top-bar-right">
    <ul className="menu">
        <AuthButton/>
    </ul>
  </div>
</div>
)

export default Navigation