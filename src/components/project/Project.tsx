import React from 'react'
import './Project.css'
import ProjectTab from './ProjectTab'
import ProjectCard from './ProjectCard'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'

// Import Assets
import projImg from '../../res/img/webgl-background.png'

const Project = () => {
  const projects_list = [
    {
      title: "WebGL Articulated Object & Animation",
      description: "Implementation of Articulated Model and it's animation in WebGL",
      imgUrl: projImg
    },
    {
      title: "WebGL Articulated Object & Animation",
      description: "Implementation of Articulated Model and it's animation in WebGL",
      imgUrl: projImg
    },
    {
      title: "WebGL Articulated Object & Animation",
      description: "Implementation of Articulated Model and it's animation in WebGL",
      imgUrl: projImg
    },
    {
      title: "WebGL Articulated Object & Animation",
      description: "Implementation of Articulated Model and it's animation in WebGL",
      imgUrl: projImg
    },
    {
      title: "WebGL Articulated Object & Animation",
      description: "Implementation of Articulated Model and it's animation in WebGL",
      imgUrl: projImg
    },
    {
      title: "WebGL Articulated Object & Animation",
      description: "Implementation of Articulated Model and it's animation in WebGL",
      imgUrl: projImg
    },
  ]
  
  // Ref : https://react-bootstrap.github.io/components/navs/
  return (
    // <section className='project main-wrapper'>
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam recusandae perferendis nam doloremque eaque deserunt. Mollitia sit commodi facilis! Neque fugiat corporis modi accusantium eaque, quasi dolore quaerat iure totam!</p>
            <Tab.Container id='projects-tab' defaultActiveKey={'first'}>
              <Nav variant="pills" defaultActiveKey="/home" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {
                      projects_list.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}>
                            
                          </ProjectCard>
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus possimus sequi nesciunt explicabo repellat quod in et incidunt sunt? Nisi molestiae ad eius quasi pariatur, omnis temporibus itaque assumenda et!
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat voluptatum officia eos alias. Aliquid laborum accusamus numquam a adipisci sunt, hic doloremque consequuntur vel sit corrupti, modi ea ipsum.
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <div className='project content-wrapper'>
        <h1>Projects</h1>
        <div>
        <span>Here are some of the project that i have contributed so far. Check out my </span>
        <a href='https://github.com/reynull20?tab=repositories'>Github</a><span> or Email me to know more</span>
        </div>
        <ProjectTab />
      </div> */}
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