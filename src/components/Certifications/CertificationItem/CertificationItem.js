import { Col, Row } from "react-bootstrap";
import "./CertificationItem.css";
import OutlinePThemeButton from "../../Reusables/OutlinePThemeButton/OutlinePThemeButton";

export default function CertificationItem({ title, provider, provider_logo, issued, expires, credential_link }) {
  return (
    <div data-aos="fade-up">
      <Row>
        <Col xs="auto" className="pe-0">
          <img
            className="certification-item-provider-img"
            src={"certification_providers/" + provider_logo}
            alt="certification_provider"
          />
        </Col>

        <Col className="mx-0">
          <h2 className="certification-item-title">{title}</h2>

          <p className="certification-item-provider-name">{provider}</p>

          <p className="certification-item-expiry">
            Issued {issued} - Expires {expires}
          </p>
        </Col>
      </Row>
      <OutlinePThemeButton className="mt-2" href={credential_link}>
        View Credential
        <i className="fa-solid fa-up-right-from-square mx-2" style={{ transition: "none" }}></i>
      </OutlinePThemeButton>
    </div>
  );
}
