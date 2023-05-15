import React from 'react'
import { useState } from 'react'
import CONTACT_STRING from '../../res/string/contact'
import './Contact.css'
import ContactItem from './ContactItem'
import ContactCard from './ContactCard'


// Asset Import
import GithubIcon from '../../res/icon/github.svg'
import GitlabIcon from '../../res/icon/gitlab.svg'
import LinkedInIcon from '../../res/icon/linkedin.svg'
import EmailIcon from '../../res/icon/gmail.svg'
import TwitterIcon from '../../res/icon/twitter.svg'
import LineIcon from '../../res/icon/line.svg'

const Contact = () => {
  return ( 
    <section className='contact' id='connect'>
      <ContactCard />
    </section>

    // <div className='contact-container'>
    //     <section className="tab contact container">
    //     <h1 className='contact-title'>Contact Me!</h1>
    //     <ul className="contact-list">
    //         <ContactItem url={CONTACT_STRING.GITHUB_LINK} img={GithubIcon} name='Github' />
    //         <ContactItem url={CONTACT_STRING.GITLAB_LINK} img={GitlabIcon} name='Gitlab' />
    //         <ContactItem url={CONTACT_STRING.LINKEDIN_LINK} img={LinkedInIcon} name='LinkedIn' />
    //         <ContactItem url={'mailto:'+CONTACT_STRING.EMAIL_LINK} img={EmailIcon} name='Email' />
    //         <ContactItem url={CONTACT_STRING.TWITTER_LINK} img={TwitterIcon} name='Twitter' />
    //         <ContactItem url={CONTACT_STRING.LINE_LINK} img={LineIcon} name='Line' />
    //     </ul>
    // </section>
    // </div>
  )
}

export default Contact