import React from 'react'
import '../Styles/card-styles.css'
import Tilty from 'react-tilty'

const Projects = () => {
  return (
    <div className="cardRow">
      <Tilty>
        <a href="https://mainegomedia.github.io/blockchain-learning-tool/" target="_blank" rel="noreferrer" className='cardContainer'>
            <div className='image' alt='card container' id='project-001'></div>
            <h2 className='title'>Blockchain Learning Tool</h2>
            <p className='description'>Personal project for educating individuals how the blockchain works in a simple
            easy to understand way. Technologies Used: Bootstrap, ReactJS, Coinmarketcap API </p>
        </a>
      </Tilty>
      <Tilty>
        <a href="https://mainegomedia.github.io/space2space/" target="_blank" rel="noreferrer" className='cardContainer'>
            <div className='image' alt='card container' id='project-002'></div>
            <h2 className='title'>UTV Token Landing Page</h2>
            <p className='description'>Landing page design concept for a current cryptocurrency token UTV Token used by Upper Tier Video
            for creating an ecosystem for player NFTs. Technologies used: ReactJS, HTML, CSS, Javascript </p>
        </a>
      </Tilty>
      <Tilty>
        <a href="https://mainegomedia.github.io/Flu-Fighters-App/" target="_blank" rel="noreferrer" className='cardContainer'>
            <div className='image' alt='card container' id='project-003'></div>
            <h2 className='title'>Untitled Python Game</h2>
            <p className='description'>A simple dodging game created with Python using the Pygame Library. All assets created
            by me using Adobe Illustrator</p>
        </a>
      </Tilty>

    </div>
  )
}

export default Projects
