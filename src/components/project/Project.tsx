import React from 'react'
import './Project.css'
import ProjectTab from './ProjectTab'

const Project = () => {
  return (
    <section className='project main-wrapper'>
      <div className='project content-wrapper'>
        <h1>Projects</h1>
        <span>Here are some of the project that i have contributed so far. Check out my Github or Email me to know more</span>
        <ProjectTab />
      </div>
    </section>
    // <div className='project-container'>
    //     <section className='project tab container'>
    //         <h1 className='project-tab-title'>
    //           Project List
    //         </h1>
    //         <span>
    //           Checkout my recent Project that i have contributed with
    //         </span>
    //         <ProjectTab></ProjectTab>
    //     </section>
    // </div>
  )
}

export default Project