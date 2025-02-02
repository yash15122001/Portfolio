import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import config from "./config.json";
import About from "./components/About/About";
import ExperienceAndExperience from "./components/ExperienceAndExperience/ExperienceAndExperience";
import "./components/Icons/Icons.css";
import Skills from "./components/Skills/Skills";
import AOS from "aos";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import ContactMe from "./components/ContactMe/ContactMe";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import $ from "jquery";
import emailjs from "@emailjs/browser";
import LoadingScreen from "./components/Reusables/LoadingScreen/LoadingScreen";
import Alert from "./components/Reusables/Alert/Alert";
import Certifications from "./components/Certifications/Certifications";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const emailjsPublicKey = "MdCGnoLoLDCndmdKx";
  AOS.init();
  emailjs.init(emailjsPublicKey);

  let root = document.querySelector(":root").style;

  root.setProperty("--light", isDarkTheme ? "black" : "#fff");
  root.setProperty("--dark", isDarkTheme ? "#fff" : "#343a40");
  root.setProperty("--secondary", isDarkTheme ? "#b5b5b5" : "#6c757d");
  root.setProperty("--text-stroke", isDarkTheme ? "#535353" : "#dee2e6");
  root.setProperty("--skill-bar-secondary", isDarkTheme ? "white" : "#b5b5b5");

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 10) {
      $(".navbar").fadeIn("fast").css("display", "flex");
    } else {
      $(".navbar").fadeOut("fast").css("display", "none");
    }
  });

  if (isLoading) {
    $(".loading-screen-main-div").animate({ opacity: 1 }).css("display", "flex");
  } else {
    $(".loading-screen-main-div").animate({ opacity: 0 }).css("display", "none");
  }

  return (
    <div className="app-main">
      <img className="background-animated-svg-blocks" src="bg.svg" alt="animated-bg" />
      <div className="site-main position-relative">
        <Alert id="mail-sent" />
        <NavBar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <LandingPage name={config.landing.name} roles={config.landing.roles} />
        <About />
        <ExperienceAndExperience />
        <Skills />
        <Portfolio />
        <Certifications />
        <ContactMe setIsLoading={setIsLoading} />
        <Footer />
        <LoadingScreen />
      </div>
    </div>
  );
}

export default App;
