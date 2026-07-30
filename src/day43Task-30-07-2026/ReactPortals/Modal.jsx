import { createPortal } from "react-dom";

function Modal() {
  return createPortal(
    <div className="modal">
      <h2>Welcome to React Portal</h2>
      <p>This modal is rendered using createPortal().</p>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;