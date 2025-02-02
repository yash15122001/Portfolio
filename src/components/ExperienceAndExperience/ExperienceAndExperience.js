import "./ExperienceAndExperience.css";
import Section from "../Reusables/Section/Section";
import { Col, Row } from "react-bootstrap";
import ExperienceDetail from "./ExperienceDetail/ExperienceDetail";
import config from "../../config.json";

export default function ExperienceAndExperience() {
  return (
    <Section id="experience" title={"Education and Experience"} background={"Experience"}>
      <Row className="gy-4">
        <Col lg={6}>
          <h2 className="custom-dark-col-header">My Education</h2>
          {config.education.map((ele, i) => (
            <ExperienceDetail
              key={i}
              title={ele.title}
              description={ele.description}
              timeline={ele.timeline}
              university={ele.university}
              university_link={ele.university_link}
            />
          ))}
        </Col>

        <Col lg={6}>
          <h2 className="custom-dark-col-header">My Experience</h2>
          {config.experience.map((ele, i) => (
            <ExperienceDetail
              key={i}
              title={ele.title}
              description={ele.description}
              timeline={ele.timeline}
              university={ele.university}
              university_link={ele.university_link}
            />
          ))}
        </Col>
      </Row>
    </Section>
  );
}
