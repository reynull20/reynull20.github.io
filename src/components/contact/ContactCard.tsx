import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import deepcopy from 'deepcopy'
import { useForm, ValidationError } from '@formspree/react'

import EmailLogoIcon from '../../res/icon/email-1572-svgrepo-com.svg'

const ContactCard = () => {
    const hashId:string = "mzbqwayj";

    const contact_details = {
        full_name: '',
        email: '',
        message: ''
      }
    
      const [state, handleSubmit] = useForm(hashId);  
      const [formDetails, setFormDetails] = useState(contact_details);
    
      const onFormUpdate = (category:string, value:string) => {   
        const formDetailsCopy = deepcopy(formDetails);
        switch (category) {
          case 'full-name':
            formDetailsCopy.full_name = value;
            break;
    
          case 'email':
            formDetailsCopy.email = value;
            break;
    
          case 'message':
            formDetailsCopy.message = value;
            break;
    
          default:
            break;
        }
        setFormDetails(formDetailsCopy);
      }

    return (
        <Container>
            <Row className='align-items-center justify-content-around'>
            <Col md={2} className='mx-3'>
                <img className='email-logo' src={EmailLogoIcon} alt="Contact Me" />
            </Col>
            <Col md={6}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                <Row>
                    <Col sm={12} className='p-2'>
                        <input className='form-control' type="text" id='full-name' name='name' required={true} value={formDetails.full_name} placeholder='Full Name' onChange={(e) => onFormUpdate('full-name', e.target.value)} />
                    <ValidationError prefix='Email' field='email' errors={state.errors} />
                    </Col>
                    <Col sm={12} className='p-2'>
                        <input className='form-control' type="email" name='_replyto' id='email-address' required={true} value={formDetails.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col sm={12} className='p-2'>
                        <textarea className='form-control' rows={6} id='message' name='message' value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <ValidationError prefix='Message' field='message' errors={state.errors}/>
                    <Col sm={12} className='p-2'>
                        <button type='submit' className='btn btn-primary mb-2' disabled={state.submitting}>
                            <span>Send</span>
                        </button>
                    </Col>
                    </Col>
                    {
                        state.succeeded && 
                        <Col>
                            <p className={state.succeeded ? "danger" : "success"}>Mail Sent! Thank you for contacting me</p>
                        </Col>
                    }
                </Row>
                </form>
            </Col>
            </Row>
        </Container>
    )
}

export default ContactCard