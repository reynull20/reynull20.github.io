import { useState } from 'react'
import './Skills.css'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import Icon1 from '../../res/img/Framework Icon.png'

const Skills = () => {
    const menuList = ["Education", "Programming Skills", "Interest"];
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex:number, e:any) => {
    //     setIndex(selectedIndex);
    // }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <section className="skill" id="skills">
            <Container className='skill-container'>
                <Row>
                    {/* <Col md={3}>
                        <Carousel className='vertical' activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <h3>First Slide Label</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus impedit aperiam nulla iure blanditiis consequuntur exercitationem, voluptas itaque dolor facere doloremque id ratione, qui aut beatae, tempore dicta totam?</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h3>Second Slide Label</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus impedit aperiam nulla iure blanditiis consequuntur exercitationem, voluptas itaque dolor facere doloremque id ratione, qui aut beatae, tempore dicta totam?</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h3>Third Slide Label</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus impedit aperiam nulla iure blanditiis consequuntur exercitationem, voluptas itaque dolor facere doloremque id ratione, qui aut beatae, tempore dicta totam?</p>
                            </Carousel.Item>
                        </Carousel>
                    </Col> */}
                    <Col>
                        <div className="skill-box">
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, illum vitae earum veritatis nihil excepturi architecto expedita modi doloremque commodi unde repellendus placeat accusamus, fugit nam itaque est veniam. Alias.</p>
                            <Carousel 
                                draggable={false} 
                                centerMode={true} 
                                responsive={responsive} 
                                infinite={true} 
                                className='skill-slider'
                                partialVisbile={false}
                                autoPlay={false}
                                customTransition='transform 0.5s ease-in-out'
                                >
                                <div className="item">
                                    <img src={Icon1} alt="Icon 1" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={Icon1} alt="Icon 2" />
                                    <h5>Game Development</h5>
                                </div>
                                <div className="item">
                                    <img src={Icon1} alt="Icon 3" />
                                    <h5>Shader Toy</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills