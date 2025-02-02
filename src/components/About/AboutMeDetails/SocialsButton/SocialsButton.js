import OutlinePThemeButton from "../../../Reusables/OutlinePThemeButton/OutlinePThemeButton";
import "./SocialsButton.css";
import config from "../../../../config.json";

export default function SocialsButton({ title, faBrandClassName, configLinkProp }) {
  return (
    <OutlinePThemeButton href={config.socials[configLinkProp]}>
      <i className={"social-button-fa-icon fa-brands me-2 " + faBrandClassName}></i>
      {title}
    </OutlinePThemeButton>
  );
}
