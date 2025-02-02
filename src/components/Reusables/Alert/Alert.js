import "./Alert.css";
import $ from "jquery";

export default function Alert({ id }) {
  function hideAlert() {
    $("#" + id).removeClass("show");
  }

  return (
    <div id={id} className="alert alert-success alert-dismissible fade app-custom-alert" role="alert">
      Thanks for contacting! I'll be in touch soon!
      <button type="button" className="btn-close" onClick={hideAlert}></button>
    </div>
  );
}
