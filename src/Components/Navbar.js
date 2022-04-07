import React from 'react'
import '../App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const listItems = {
    margin: 10,
    color: '#ffffff',
    textDecoration: 'none',
}

const Navbar = () => {
    return (
        <ul className='untitledList'>
            <div className='menuButton'><li style={listItems}><Link to='/home'>Home</Link></li></div>
            <li style={listItems}><Link to='/projects'>Projects</Link></li>
            <li style={listItems}><Link to='/contact'>Contact</Link></li>
        </ul>
  )
}

export default Navbar