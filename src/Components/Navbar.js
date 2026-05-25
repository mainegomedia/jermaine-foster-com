import React, { useState } from 'react'
import '../App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const listItems = {
    margin: 10,
    color: '#ffffff',
    textDecoration: 'none',
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <button className='hamburger' onClick={toggleMenu}>
                <span className='hamburger-line'></span>
                <span className='hamburger-line'></span>
                <span className='hamburger-line'></span>
            </button>
            <ul className={`untitledList ${isMenuOpen ? 'open' : ''}`}>
                <div className='menuButton'><li style={listItems}><Link to='/home'>Home</Link></li></div>
                <li style={listItems}><Link to='/projects'>Projects</Link></li>
                <li style={listItems}><Link to='/contact'>Contact</Link></li>
            </ul>
        </>
  )
}

export default Navbar