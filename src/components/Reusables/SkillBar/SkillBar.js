import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "./SkillBar.css";

export default function SkillBar({ imageLink, value, color, title, keyForAnimationDelay }) {
  return (
    <div className="skillbar-main-div" data-aos="fade-up" data-aos-delay={(keyForAnimationDelay * 100 + 100).toString()}>
      <CircularProgressbarWithChildren
        strokeWidth={6}
        value={value * 10}
        styles={{
          path: {
            stroke: color,
            pathTransitionDuration: 0.5,
          },
          trail: {
            stroke: "var(--skill-bar-secondary)",
          },
        }}
      >
        <img className="skillbar-img" src={imageLink} alt="skill-img" />
      </CircularProgressbarWithChildren>

      <p className="skillbar-title">{title}</p>
      <p className="skillbar-value">{value}/10</p>
    </div>
  );
}
