const faIconClasses = "fa-regular fa-circle-dot";

export default function CircleDot({ className, size }) {
  return (
    <i
      className={faIconClasses + " " + className + " fontawesome-master"}
      style={{ fontSize: size + "rem", color: "var(--primary)" }}
    ></i>
  );
}
