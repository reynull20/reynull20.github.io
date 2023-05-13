import React from 'react'
import './Project.css'
import ProjectTab from './ProjectTab'

const Project = () => {
  return (
    <div className='project-container'>
        <section className='project tab container'>
            <h1 className='project-tab-title'>
                Project List
            </h1>
            <ProjectTab></ProjectTab>
        </section>
    </div>
  )
}

export default Project