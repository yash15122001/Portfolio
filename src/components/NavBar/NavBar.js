import "./NavBar.css";
import NavLink from "./NavLink/NavLink";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import { useState } from "react";

export default function NavBar({ isDarkTheme, setIsDarkTheme }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  let navLinks = ["home", "about", "experience", "skills", "portfolio", "certifications", "contact"];

  return (
    <nav className="navbar navbar-expand-xl navbar-main-div" style={{ display: "none" }}>
      <div className="container-fluid position-relative">
        <a className="navbar-brand" href="#home">
          <i className="fa-solid fa-code navbar-icon"></i>
          <span className="full-name navbar-title">Yash Nimbalkar</span>
          <span className="short-name navbar-title">Yash</span>
        </a>

        <HamburgerIcon className="navbar-hamburger" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <DarkModeSwitch className="darkmode-switch ml-auto" checked={isDarkTheme} onChange={setIsDarkTheme} size={120} />

        <div className="collapse navbar-collapse navbar-links-div" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navLinks.map((ele, i) => (
              <NavLink key={i} title={ele} href={"Portfolio/#" + ele} setIsCollapsed={setIsCollapsed} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
