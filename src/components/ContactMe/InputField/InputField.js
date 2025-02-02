import { FloatingLabel, Form } from "react-bootstrap";
import "./InputField.css";

export default function InputField({ field, textArea, value, onChange, isFieldValid }) {
  return (
    <FloatingLabel className="floating-label" controlId="floatingInput" label={field} data-aos="fade-up">
      <Form.Control
        as={textArea ? "textarea" : "input"}
        className={"contact-us-ip " + (isFieldValid ? "" : "is-invalid")}
        placeholder={field}
        value={value}
        onChange={onChange}
      />
    </FloatingLabel>
  );
}
