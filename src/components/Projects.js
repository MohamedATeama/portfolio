import React from 'react'
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap'
import projImg1 from '../assets/img/pizza.png'
import projImg2 from '../assets/img/popcorn.png'
import projImg3 from '../assets/img/worldwise.png'
import projImg4 from '../assets/img/quiz.png'
import projImg5 from '../assets/img/mteck.png'
import projImg6 from '../assets/img/back1.jpg'
import profileImg from '../assets/img/about.jpg'
import ProjectCard from './ProjectCard'

export default function Projects() {

  const projects = [
    {
      title: "Fast React Pizza",
      path: "https://github.com/MohamedATeama/Fast-react-pizza",
      imgUrl: projImg1,
    },
    {
      title: "Popcorn",
      path: "https://github.com/MohamedATeama/use-Popcorn",
      imgUrl: projImg2,
    },
    {
      title: "WorldWise",
      path: "https://github.com/MohamedATeama/WorldWise",
      imgUrl: projImg3,
    },
    {
      title: "React Quiz",
      path: "https://github.com/MohamedATeama/React-Quiz",
      imgUrl: projImg4,
    },
    {
      title: "E-Commerce",
      path: "https://github.com/MohamedATeama/E-Commerce-Website-m.teck",
      imgUrl: projImg5,
    },
    {
      title: "E-Commerce APIs",
      path: "https://github.com/MohamedATeama/ECommerce-Backend-Node.js",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">Projects</h2>
            <p className="secand-title">
              This is a collection of some of my projects and some
              information about me if you want to see it.
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
                  <section id="about" className="py-5 bg-dark text-light rounded-3">
                    <div className="container">
                      <div className="row align-items-center">

                        {/* Profile Image */}
                        <div className="col-lg-5 text-center mb-4 lg-md-0">
                          <img
                            src={profileImg}
                            alt="Profile"
                            className="img-fluid rounded shadow"
                            style={{ maxWidth: "300px" }}
                          />
                        </div>

                        {/* About Content */}
                        <div className="col-lg-7">
                          <h2 className="fw-bold mb-3">About Me</h2>

                          <p className="mb-4">
                            I’m an ambitious and results-driven <strong>Full-Stack Web Developer</strong> with expertise in
                            building responsive, scalable, and interactive applications. My core stack includes
                            <strong> React, Next.js, Node.js, Express.js, and MongoDB</strong>, with a strong foundation in
                            <strong> HTML, CSS, JavaScript, and TypeScript</strong>.
                          </p>

                          <p className="mb-4">
                            I deliver solutions that combine clean design, smooth functionality, and strong performance —
                            ensuring each project meets client goals and exceeds expectations.
                          </p>

                          {/* What I Can Deliver */}
                          <h5 className="fw-bold">✅ What I Can Deliver:</h5>
                          <ul className="list-unstyled mb-4">
                            <li>🌐 Modern Web Apps – Full-stack solutions with secure APIs & dynamic UIs.</li>
                            <li>📱 Responsive & Mobile-First Design – Perfect on all devices.</li>
                            <li>⚡ High-Performance Front-End – React, Next.js, Redux, Socket.io & Tailwind CSS.</li>
                            <li>🔒 Reliable Back-End – Node.js, Express.js, MongoDB, GraphQL & Socket.io.</li>
                            <li>🧩 Clean & Maintainable Code – Modular & documented.</li>
                          </ul>

                          {/* Additional Skills */}
                          <h5 className="fw-bold">🛠 Additional Skills:</h5>
                          <ul className="list-unstyled mb-4">
                            <li>🎨 CSS frameworks (Tailwind, Bootstrap) for elegant UI.</li>
                            <li>🔗 RESTful APIs, authentication, integrations.</li>
                            <li>⚙ Git & Version Control for collaboration.</li>
                          </ul>

                          {/* Projects */}
                          <h5 className="fw-bold">🚀 Projects I’m Perfect For:</h5>
                          <ul className="list-unstyled mb-4">
                            <li>🏢 Business Websites – Professional & brand-focused.</li>
                            <li>🛒 E-commerce Platforms – Secure & conversion-driven.</li>
                            <li>🎯 Landing Pages – Optimized for performance & leads.</li>
                            <li>💻 Custom Web Apps – Scalable & interactive.</li>
                            <li>📸 Portfolios – Modern & visually striking.</li>
                          </ul>

                          {/* Why Work With Me */}
                          <h5 className="fw-bold">💡 Why Work With Me?</h5>
                          <p className="mb-4">
                            I mix <strong>technical expertise</strong> with <strong>creativity</strong> to build solutions that work flawlessly
                            and look amazing. My focus: <strong>client satisfaction, clear communication, and timely delivery</strong>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
