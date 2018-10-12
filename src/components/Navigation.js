import React from 'react'
import { NavLink } from "react-router-dom";
import AuthButton from './AuthButton'

// used Nav Link for the active class
const Navigation = () => (   
<div className="top-bar">
  <div className="top-bar-left">
    <ul className="dropdown menu" data-dropdown-menu>
        <li><NavLink activeClassName='is-active' to="/home">Home</NavLink></li>
        <li><NavLink activeClassName='is-active' to="/newquestion">New Question</NavLink></li>
        <li><NavLink activeClassName='is-active' to="/leaderboard">Leader Board</NavLink></li>
    </ul>
  </div>
  <AuthButton />
</div>
)

export default Navigation