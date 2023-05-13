import React from 'react'
import './ProjectTab.css'

// import assets
import GameBackground from '../../res/img/game background.jpg'

const ProjectTab = () => {
  return (
    <div className='proj-tab-wrapper'>
        <div className='project-wrapper' id='game-project'>
            <h1>Game</h1>
        </div>
        <div className='project-wrapper' id='web-project'>
            <h1>Web</h1>
        </div>
        <div className='project-wrapper' id='game-project'>
            <h1>WebGL</h1>
        </div>
    </div>
  )
}

export default ProjectTab