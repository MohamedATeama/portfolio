import navIcon1 from "../assets/img/navIcon1.svg";
import navIcon2 from "../assets/img/navIcon2.svg";
import navIcon3 from "../assets/img/navIcon3.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cont d-flex flex-column flex-md-row justify-content-between align-items-center">
          <span className="logo">M.T</span>
          <div className="social-links mt-5 mt-md-0">
            <div className="social-icons d-flex justify-content-center justify-content-md-end mb-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/mohamed-teama-software"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ms-3"
                href="https://github.com/MohamedATeama"
              >
                <img src={navIcon2} alt="Github" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ms-3"
                href="mailto:mohammed.teama789@gmail.com"
              >
                <img src={navIcon3} alt="Mail" />
              </a>
            </div>
            <p>Copyright &copy; Mohamed Teama - All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
