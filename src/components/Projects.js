import React from 'react'
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import ProjectCard from './ProjectCard'

export default function Projects() {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className='projects' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2 className='section-title'>Projects</h2>
                        <p className='secand-title'>My name is mohamed. i live in menofia. this is some projects in react dev.</p>
                        <Tab.Container id='project-tabs' defaultActiveKey='first'>
                            <Nav variant="pills" className="nav-pills mb-5 flex-wrap justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">1st Section</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">2nd Section</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >3rd Section</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            );
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'></Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <p className='text-center fs-5 text-secondary'>My name is mohamed. I live in menofia. This is the 1st project in react dev..</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
