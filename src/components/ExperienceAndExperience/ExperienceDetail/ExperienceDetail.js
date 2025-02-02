import CircleDot from "../../Icons/CircleDot";
import "./ExperienceDetail.css";

export default function ExperienceDetail({ title, university, timeline, description, university_link }) {
  return (
    <div className="experience-detail-master-div">
      <CircleDot className="experience-detail-circle-dot" size={1} />
      <div className="experience-detail-div" data-aos="fade-up">
        <h3 className="experience-detail-title">{title}</h3>
        <a href={university_link} className="experience-detail-university"><strong>{university}</strong></a>
        
        {" | "}

        <small className="experience-detail-timeline">{timeline}</small>

        <p className="experience-detail-description">{description}</p>
      </div>
    </div>
  );
}
