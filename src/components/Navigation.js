import React from 'react'
import { NavLink } from "react-router-dom";
import TopBar from './TopBar'

// used Nav Link for the active class
const Navigation = () => (   
<div className="top-bar">
  <div className="top-bar-left">
    <ul className="menu">
        <li><NavLink activeClassName='is-active' to="/home">Home</NavLink></li>
        <li><NavLink activeClassName='is-active' to="/add">New Question</NavLink></li>
        <li><NavLink activeClassName='is-active' to="/leaderboard">Leader Board</NavLink></li>
    </ul>
  </div>
  <TopBar />
</div>
)

export default Navigation