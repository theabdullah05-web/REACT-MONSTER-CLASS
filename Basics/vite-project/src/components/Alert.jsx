import { createPortal } from "react-dom";
const Alert = ({ copied }) => {
  return createPortal(
    copied && <div> "Copied To Clipboard"</div>,
    document.querySelector("#portal"),
  );
};

export default Alert;
