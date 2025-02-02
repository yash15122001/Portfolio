import "./HamburgerIcon.css";

export default function HamburgerIcon({ isCollapsed, setIsCollapsed, className }) {
  return (
    <div
      onClick={() => setIsCollapsed((o) => !o)}
      className={className + " hamburger navbar-toggler " + (isCollapsed ? "" : "is-active")}
      id="hamburger-1"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
}
