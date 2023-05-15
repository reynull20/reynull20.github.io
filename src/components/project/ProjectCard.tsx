import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({title, description, imgUrl} : {children:any, title:string, description:string, imgUrl:string}) => {
  return (
    <Col sm={6} md={6}>
        {/* <div className='proj-imgbx' style={{backgroundImage : `url(${imgUrl})`}}> */}
        <div className='proj-imgbx'>
            <img src={imgUrl} alt="project card background" />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard