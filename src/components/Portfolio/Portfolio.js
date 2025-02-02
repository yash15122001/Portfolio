import { Col, Row } from "react-bootstrap";
import Section from "../Reusables/Section/Section";
import "./Portfolio.css";
import config from "../../config.json";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

export default function Portfolio() {
  return (
    <Section id="portfolio" title="My Portfolio" background="Gallery">
      <Row className="gy-5">
        {config.portfolio.map((ele, i) => (
          <Col key={i} lg={4}>
            <PortfolioItem
              keyforAnimationDelay={i}
              title={ele.title}
              techStack={ele.techStack}
              portfolioImage={ele.portfolioImage}
              sourceCodeLink={ele.sourceCodeLink}
            />
          </Col>
        ))}
      </Row>
    </Section>
  );
}
