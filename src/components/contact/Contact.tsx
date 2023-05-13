import React from 'react'
import CONTACT_STRING from '../../res/string/contact'
import './Contact.css'

// Asset Import
import GithubIcon from '../../res/icon/github.svg'
import GitlabIcon from '../../res/icon/gitlab.svg'
import LinkedInIcon from '../../res/icon/linkedin.svg'
import EmailIcon from '../../res/icon/gmail.svg'
import TwitterIcon from '../../res/icon/twitter.svg'
import LineIcon from '../../res/icon/line.svg'

const Contact = () => {
  return (
    <div className='contact-container'>
        <section className="tab contact container">
        <h1 className='contact-title'>Contact Me!</h1>
        <ul className="contact-list">
            <li className="contact-item">
                <a target='_blank' href={CONTACT_STRING.GITHUB_LINK} className="contact-link" rel="noreferrer">
                    <img src={GithubIcon} alt="" className="contact-icon" />
                </a>
                <h3>Github</h3>
            </li>
            <li className="contact-item">
                <a target='_blank' href={CONTACT_STRING.GITLAB_LINK} className="contact-link" rel="noreferrer">
                    <img src={GitlabIcon} alt="" className="contact-icon" />
                </a>
                <h3>Gitlab</h3>
            </li>
            <li className="contact-item">
                <a target='_blank' href={CONTACT_STRING.LINKEDIN_LINK} className="contact-link" rel="noreferrer">
                    <img src={LinkedInIcon} alt="" className="contact-icon" />
                </a>
                <h3>LinkedIn</h3>
            </li>
            <li className="contact-item">
                <a target='_blank' href={CONTACT_STRING.EMAIL_LINK} className="contact-link" rel="noreferrer">
                    <img src={EmailIcon} alt="" className="contact-icon" />
                </a>
                <h3>Email</h3>
            </li>
            <li className="contact-item">
                <a target='_blank' href={CONTACT_STRING.TWITTER_LINK} className="contact-link" rel="noreferrer">
                    <img src={TwitterIcon} alt="" className="contact-icon" />
                </a>
                <h3>Twitter</h3>
            </li>
            <li className="contact-item">
                <a target='_blank' href={CONTACT_STRING.LINE_LINK} className="contact-link" rel="noreferrer">
                    <img src={LineIcon} alt="" className="contact-icon" />
                </a>
                <h3>Line</h3>
            </li>
        </ul>
    </section>
    </div>
  )
}

export default Contact