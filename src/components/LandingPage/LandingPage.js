import { Col, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import "./LandingPage.css";
import OutlineThemeButton from "../Reusables/OutlineThemeButton/OutlineThemeButton";

export default function LandingPage({ name, roles }) {
  roles = roles
    .join("|1000|")
    .split("|")
    .map((e) => parseInt(e) || e);
  roles.push(1000);

  return (
    <div id="home" className="landing-main-div">
      <Row className="gy-5">
        <Col lg={5}>
          <div className="d-flex justify-content-center">
            <img className="landing-pfp" src="profile.png" alt="profile-pic" />
          </div>
        </Col>

        <Col lg={7} className="">
          <div className="landing-details-div">
            <p className="landing-page-im">I'm</p>
            <p className="landing-page-name">{name.toUpperCase()}</p>
            <TypeAnimation className="landing-type-animation-div" sequence={roles} wrapper="p" repeat={Infinity} />

            <div>
              <OutlineThemeButton href="/Portfolio/resume.pdf">Download Resume</OutlineThemeButton>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
