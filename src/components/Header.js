import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import navIcon1 from "../assets/img/navIcon1.svg";
import navIcon2 from "../assets/img/navIcon2.svg";
import navIcon3 from "../assets/img/navIcon3.svg";
import { HashLink } from "react-router-hash-link";
import { navItems, socialLinks } from "../data/navigationData";

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
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="lg"
      className={scrolled ? "scrolled" : ""}
      data-bs-theme="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#">
          <h1 className="text-bold">M.T</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            {navItems.map((item) => (
              <Nav.Link
                key={item.id}
                href={item.href}
                className={
                  activeLink === item.id ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink(item.id)}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text d-flex align-items-center ms-auto">
            <div className="social-icons d-inline-block ms-3">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <img
                    src={
                      link.id === "linkedin"
                        ? navIcon1
                        : link.id === "github"
                        ? navIcon2
                        : navIcon3
                    }
                    alt={link.alt}
                  />
                </a>
              ))}
            </div>
            <HashLink to="#connect">
              <button>Let's Connect</button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
