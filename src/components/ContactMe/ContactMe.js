import { Col, Row } from "react-bootstrap";
import Section from "../Reusables/Section/Section";
import "./ContactMe.css";
import InputField from "./InputField/InputField";
import { useState } from "react";
import EmailSendButton from "./EmailSendButton/EmailSendButton";

let defaultContactDetails = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

let defaultContactDetailsValid = {
  name: true,
  email: true,
  subject: true,
  message: true,
};

export default function ContactMe({ setIsLoading }) {
  const [contactDetails, setContactDetails] = useState(defaultContactDetails);
  const [isContactDetailsValid, setIsContactDetailsValid] = useState(defaultContactDetailsValid);

  function setField(field, value) {
    setContactDetails((old) => {
      return { ...old, [field]: value };
    });
  }

  function setName(e) {
    setField("name", e.target.value);
  }

  function setEmail(e) {
    setField("email", e.target.value);
  }

  function setSubject(e) {
    setField("subject", e.target.value);
  }

  function setMessage(e) {
    setField("message", e.target.value);
  }

  return (
    <Section id="contact" title="Get In Touch" background="Contact">
      <div className="contact-me-main-div">
        <Row className="gy-4 mb-4">
          <Col lg={6}>
            <InputField
              field="name"
              value={contactDetails.name}
              onChange={setName}
              isFieldValid={isContactDetailsValid.name}
            />
          </Col>

          <Col lg={6}>
            <InputField
              field="email"
              value={contactDetails.email}
              onChange={setEmail}
              isFieldValid={isContactDetailsValid.email}
            />
          </Col>

          <Col lg={12}>
            <InputField
              field="subject"
              value={contactDetails.subject}
              onChange={setSubject}
              isFieldValid={isContactDetailsValid.subject}
            />
          </Col>

          <Col lg={12}>
            <InputField
              field="message"
              textArea
              value={contactDetails.message}
              onChange={setMessage}
              isFieldValid={isContactDetailsValid.message}
            />
          </Col>
        </Row>

        <EmailSendButton
          setIsLoading={setIsLoading}
          contactDetails={contactDetails}
          setIsContactDetailsValid={setIsContactDetailsValid}
        />
      </div>
    </Section>
  );
}
