import { aboutContent } from "../../data/aboutData";
import profileImg from "../../assets/img/profile-img.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-5 bg-dark text-light rounded-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 text-center mb-4 lg-md-0">
            <img
              src={profileImg}
              alt="Mohamed Teama profile"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "300px" }}
            />
          </div>

          <div className="col-lg-7">
            <h2 className="fw-bold mb-3">{aboutContent.title}</h2>

            <p className="mb-4">{aboutContent.intro}</p>
            <p className="mb-4">{aboutContent.body}</p>

            <h5 className="fw-bold">What I Can Deliver:</h5>
            <ul className="list-unstyled mb-4">
              {aboutContent.deliverItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h5 className="fw-bold">Additional Skills:</h5>
            <ul className="list-unstyled mb-4">
              {aboutContent.additionalSkills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h5 className="fw-bold">Projects I'm Perfect For:</h5>
            <ul className="list-unstyled mb-4">
              {aboutContent.projectTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h5 className="fw-bold">Why Work With Me?</h5>
            <p className="mb-4">{aboutContent.closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
