import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

const listItems = {
    margin: 10,
    color: '#ffffff',
    textDecoration: 'none',
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
            <button className='hamburger' onClick={toggleMenu} aria-label='Toggle navigation menu'>
                <span className='hamburger-line'></span>
                <span className='hamburger-line'></span>
                <span className='hamburger-line'></span>
            </button>
            <ul className={`untitledList ${isMenuOpen ? 'open' : ''}`}>
                <div className='menuButton'><li style={listItems}><Link to='/home' onClick={closeMenu}>Home</Link></li></div>
                <li style={listItems}><Link to='/projects' onClick={closeMenu}>Projects</Link></li>
                <li style={listItems}><Link to='/contact' onClick={closeMenu}>Contact</Link></li>
            </ul>
        </>
  )
}

export default Navbar