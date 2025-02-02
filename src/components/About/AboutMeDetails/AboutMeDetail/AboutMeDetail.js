import "./AboutMeDetail.css";

export default function AboutMeDetail({ prop, value }) {
  return (
    <div>
      <p>
        <span className="aboutme-detail-key">{prop}: </span>
        <span className="aboutme-detail-value">{value}</span>
      </p>
    </div>
  );
}
