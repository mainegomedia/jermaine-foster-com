import React from 'react'
import '../Styles/card-styles.css'
import Tilty from 'react-tilty'

const Projects = () => {
  return (
    <div className="cardRow">
      <Tilty>
        <div className='cardContainer'>
            <div className='image' alt='card container'></div>
            <h2 className='title'>Blockchain Learning Tool</h2>
            <p className='description'>Personal project for educating individuals how the blockchain works in a simple
            easy to understand way. Technologies Used: Bootstrap, ReactJS, Coinmarketcap API </p>
        </div>
      </Tilty>
      <Tilty>
        <div className='cardContainer'>
            <div className='image' alt='card container'></div>
            <h2 className='title'>UTV Token Landing Page</h2>
            <p className='description'>Landing page design concept for a current cryptocurrency token UTV Token used by Upper Tier Video
            for creating an ecosystem for player NFTs. Technologies used: ReactJS, HTML, CSS, Javascript </p>
        </div>
      </Tilty>
      <Tilty>
        <div className='cardContainer'>
            <div className='image' alt='card container'></div>
            <h2 className='title'>Untitled Python Game</h2>
            <p className='description'>A simple dodging game created with Python using the Pygame Library. All assets created
            by me using Adobe Illustrator</p>
        </div>
      </Tilty>

    </div>
  )
}

export default Projects
