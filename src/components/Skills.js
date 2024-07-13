import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from '../assets/img/skill1.svg';
import skill2 from '../assets/img/skill2.svg';
import skill3 from '../assets/img/skill3.svg';

export default function Skills() {

    const responsive = {
        superLargeDesktop: {
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
    };

    return (
        <section className='skills' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-box'>
                            <h2 className='section-title'>Skills</h2>
                            <p className='section-p'>You Can See My Skills Here!</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={skill1} alt='skill1' />
                                    <h3>FrontEnd Development</h3>
                                </div>
                                <div className='item'>
                                    <img src={skill3} alt='skill2' />
                                    <h3>BackEnd Development</h3>
                                </div>
                                <div className='item'>
                                    <img src={skill2} alt='skill3' />
                                    <h3>Web Design</h3>
                                </div>
                                <div className='item'>
                                    <img src={skill3} alt='skill4' />
                                    <h3>Web Development</h3>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
