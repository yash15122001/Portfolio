import "./Footer.css";
import FooterIcon from "./FooterIcon/FooterIcon";

import config from "../../config.json";

export default function Footer() {
  return (
    <div className="footer-main-div">
      <div className="footer-icon-container">
        <FooterIcon className="fa-solid fa-envelope" href={"mailto:" + config.socials.email}/>
        <FooterIcon className="fa-brands fa-github" href={config.socials.github} />
        <FooterIcon className="fa-brands fa-linkedin" href={config.socials.linkedIn} />
      </div>

      <p>Made with 💖 by Yash</p>
    </div>
  );
}
