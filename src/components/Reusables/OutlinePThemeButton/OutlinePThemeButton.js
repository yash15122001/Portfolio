import { Button } from "react-bootstrap";
import "./OutlinePThemeButton.css";

export default function OutlinePThemeButton({ children, href, disabled, size, onClick, className }) {
  return (
    <div data-aos="fade-up">
      <Button
        size={size || "md"}
        href={href}
        className={"outline-p-theme-button " + className}
        disabled={disabled}
        onClick={onClick || undefined}
      >
        {children}
      </Button>
    </div>
  );
}
