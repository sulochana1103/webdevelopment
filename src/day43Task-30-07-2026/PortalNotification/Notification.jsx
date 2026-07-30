import { createPortal } from "react-dom";

function Notification() {
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "green",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
       Login Successful
    </div>,
    document.body
  );
}

export default Notification;