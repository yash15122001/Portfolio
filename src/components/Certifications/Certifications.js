import "./Certifications.css";
import Section from "../Reusables/Section/Section";
import CertificationItem from "./CertificationItem/CertificationItem";
import { Col, Row } from "react-bootstrap";
import config from "../../config.json";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" background="certified">
      <Row className="gy-5 mt-5">
        {config.certifications.map((ele, i) => (
          <Col key={i} lg={6}>
            <CertificationItem {...ele} />
          </Col>
        ))}
      </Row>
    </Section>
  );
}
