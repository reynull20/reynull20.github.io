import React from 'react'
import './About.css'
import SkillIcon from '../../res/img/Framework Icon.png'
import Card from './Card'

const About = () => {
  return (
    <section className='about main-wrapper'>
      <div className='about content-wrapper'>
        <h1 className='title about'>Skills & Experience</h1>
        <div className='card-wrapper'>
          <Card type='game-dev' />
          <Card type='front-end' />
          <Card type='back-end' />
        </div>
      </div>
    </section>
    // <div className='about-container'>
    //   <section className="container about tab">
    //     <img src={SkillIcon} alt="Icon List" className='skill-list' />
    //     <div className='skill-summary'>
    //       <div className='title-holder'>
    //         <h1>Skill & Experience</h1>
    //       </div>
    //       <div className='skill-wrapper'>
    //         <h3>Front-end</h3>
    //         <div className='stroke v1'></div>
    //       </div>
    //       <div className='skill-wrapper'>
    //         <h3>Back-end</h3>
    //         <div className='stroke v2'></div>
    //       </div>
    //       <div className='skill-wrapper'>
    //         <h3>Game Dev</h3>
    //         <div className='stroke v3'></div>
    //       </div>
    //       <div className='skill-wrapper'>
    //         <h4>Click here to see more!</h4>
    //       </div>
    //       <span className='short-intro'>
    //         Since beginning my journey as a freelance designer over 11 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
    //       </span>
    //     </div>
    // </section>
    // </div>
  )
}

export default About