import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import AboutSection from "./sections/AboutSection";
import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle mx-auto text-center mb-5">
              Explore a selection of my recent projects and learn more about me.
            </p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 flex-wrap justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                    <Nav.Link eventKey="second">Contact</Nav.Link>
                  </Nav.Item> */}
                <Nav.Item>
                  <Nav.Link eventKey="third">About</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third">
                  <AboutSection />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
