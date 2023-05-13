import React from 'react'
import './ContactItem.css'

const ContactItem = ({url, img, name} : {url:string, img:string, name:string}) => {
  return (
    <li className="contact-item">
        <a target='_blank' href={url} className="contact-link" rel="noreferrer">
            <img src={img} alt="" className="contact-icon" />
        </a>
        <h3>{name}</h3>
    </li>
  )
}

export default ContactItem