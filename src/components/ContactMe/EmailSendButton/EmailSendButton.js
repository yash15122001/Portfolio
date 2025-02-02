import OutlinePThemeButton from "../../Reusables/OutlinePThemeButton/OutlinePThemeButton";
import "./EmailSendButton.css";
import emailjs from "@emailjs/browser";
import config from "../../../config.json";
import $ from "jquery";

export default function EmailSendButton({ contactDetails, setIsLoading, setIsContactDetailsValid }) {
  async function handleSubmit() {
    let keys = Object.keys(contactDetails);
    let isProceed = true;

    for (let key of keys) {
      if (contactDetails[key] === "") {
        setIsContactDetailsValid((old) => {
          return { ...old, [key]: false };
        });
        isProceed = false;
      } else {
        setIsContactDetailsValid((old) => {
          return { ...old, [key]: true };
        });
      }
    }

    if (!isProceed) return;

    setIsLoading(true);
    const result = await emailjs.send(config.emailjs.serviceID, config.emailjs.templateID, contactDetails);
    console.log(result);
    $("#mail-sent").addClass("show");
    setIsLoading(false);
  }

  return (
    <OutlinePThemeButton className="email-send-button" size="lg" onClick={handleSubmit}>
      Send Message
    </OutlinePThemeButton>
  );
}
