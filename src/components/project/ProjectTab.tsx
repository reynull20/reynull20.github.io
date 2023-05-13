import React from 'react'
import './ProjectTab.css'
import {Link} from 'react-router-dom'

// import assets
import GameBackground from '../../res/img/game background.jpg'

const ProjectTab = () => {
  const openlink:any = (url:string) => () => {
    window.location.href=url
  }
  return (
    <div className='proj-tab-wrapper'>
        <div className='project-wrapper' id='game-project' onClick={openlink('https://gitlab.com/reynull20/univ-unity-project')}>
            <h1>Game</h1>
        </div>
        <div className='project-wrapper' id='web-project' onClick={openlink('https://github.com/reynull20/practice-webgl-threejs')}>
            <h1>Three.JS</h1>
        </div>
        <div className='project-wrapper' id='webgl-project' onClick={openlink('https://github.com/reynull20/IF3260_Tugas3_K01_G15')}>
            <h1>WebGL</h1>
        </div>
    </div>
  )
}

export default ProjectTab