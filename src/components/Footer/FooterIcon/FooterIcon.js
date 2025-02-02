import "./FooterIcon.css";

export default function FooterIcon({ className, href }) {
  return (
    <a href={href}>
      <i className={className + " footer-icon"}></i>
    </a>
  );
}
