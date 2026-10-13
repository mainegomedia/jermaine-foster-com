import React from 'react'
import '../Styles/card-styles.css'
import Tilty from 'react-tilty'

const Projects = () => {
  return (
    <div className="cardRow">
      <Tilty>
        <a href="https://mainegomedia.github.io/blockchain-learning-tool/" target="_blank" rel="noreferrer" className='cardContainer'>
            <div className='image' alt='card container' id='project-002'></div>
            <h2 className='title'>Blockchain Learning Tool</h2>
            <p className='description'>Personal project for educating individuals how the blockchain works in a simple
            easy to understand way. Technologies Used: Bootstrap, ReactJS, Coinmarketcap API </p>
        </a>
      </Tilty>
      <Tilty>
        <a href="https://mainegomedia.github.io/space2space/" target="_blank" rel="noreferrer" className='cardContainer'>
            <div className='image' alt='card container' id='project-001'></div>
            <h2 className='title'>Space2Space</h2>
            <p className='description'>Landing page design concept for room mate finding web application. Technologies used: ReactJS, HTML, CSS, Javascript </p>
        </a>
      </Tilty>
      <Tilty>
        <a href="https://mainegomedia.github.io/Flu-Fighters-App/" target="_blank" rel="noreferrer" className='cardContainer'>
            <div className='image' alt='card container' id='project-003'></div>
            <h2 className='title'>Flu Fighters Application</h2>
            <p className='description'>A flu tracker that gives users a “threat level” and locations of doctors and Walgreens in their areas based on geolocation information or user input APis - Flutrack, Google Maps, Medicare, Walgreens Task breakdown - Jermaine - UI</p>
        </a>
      </Tilty>

    </div>
  )
}

export default Projects
