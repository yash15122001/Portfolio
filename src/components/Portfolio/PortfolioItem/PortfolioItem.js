import OutlinePThemeButton from "../../Reusables/OutlinePThemeButton/OutlinePThemeButton";
import "./PortfolioItem.css";

export default function PortfolioItem({
  techStack,
  title,
  portfolioImage,
  sourceCodeLink,
  keyforAnimationDelay,
}) {
  return (
    <div className="position-relative" data-aos="fade-up" data-aos-delay={keyforAnimationDelay * 100}>
      <a href={sourceCodeLink} className="portfolio-img-container">
        <img className="portfolio-img" src={portfolioImage} alt="portfolio-img" />
        <div className="portfolio-img-div-overlay">
          <i className="fa-solid fa-arrow-up-right-from-square portfolio-img-overlay-redirect-icon"></i>
        </div>
      </a>
      <h2 className="portfolio-title">{title}</h2>

      <div className="tech-stack-icons-div">
        {techStack.map((ele, i) => (
          <img key={i} className="tech-stack-icon" src={"skill_icons/" + ele + ".png"} alt="tech-stack-icon" />
        ))}
      </div>

      <div className="tech-stack-buttons-div">
        <OutlinePThemeButton href={sourceCodeLink} disabled={sourceCodeLink === undefined}>
          Source Code
        </OutlinePThemeButton>
      </div>
    </div>
  );
}
