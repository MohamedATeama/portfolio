import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import navIcon1 from '../assets/img/navIcon1.svg';
import navIcon2 from '../assets/img/navIcon2.svg';
import navIcon3 from '../assets/img/navIcon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";

export default function Header() {

    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""} data-bs-theme="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/"><h1 className='text-bold'>M.T</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skils</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                        </Nav>
                        <span className='navbar-text d-flex align-items-center ms-auto'>
                            <div className='social-icons d-inline-block ms-3'>
                                <a href='https://www.linkedin.com/in/mohammed-teama-1a40571aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={navIcon1} alt='LinkedIn' /></a>
                                <a href='https://github.com/MohamedATeama'><img src={navIcon2} alt='Github' /></a>
                                <a href='mailto:mohammed.teama789@gmail.com'><img src={navIcon3} alt='Mail' /></a>
                            </div>
                            <HashLink to='#connect'>
                                <button>Let's Connect</button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
}
