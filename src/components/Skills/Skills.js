import { Col, Row } from "react-bootstrap";
import Section from "../Reusables/Section/Section";
import SkillBar from "../Reusables/SkillBar/SkillBar";
import "./Skills.css";
import "react-circular-progressbar/dist/styles.css";
import config from "../../config.json";

export default function Skills() {
  return (
    <Section id="skills" title="My Skills" background="Skills">
      <Row className="gy-4">
        {Object.keys(config.skills).map((k, i) => (
          <Col key={i} md={6}>
            <Row key={i} className="text-center gy-3">
              <h3 className="custom-dark-col-header mb-4 text-capitalize">{k}</h3>

              {config.skills[k].map((ele, j) => (
                <Col key={j} lg={4} xs={6}>
                  <SkillBar
                    keyForAnimationDelay={j}
                    title={ele.title}
                    imageLink={ele.imageLink}
                    value={ele.value}
                    color={ele.color}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        ))}
      </Row>
    </Section>
  );
}
