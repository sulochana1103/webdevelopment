import { createPortal } from "react-dom";

function Modal({ show, closeModal }) {
  console.log("Modal Component Rendered");
  console.log("show =", show);

  if (!show) {
    console.log("Modal is closed");
    return null;
  }

  console.log("Modal is open");

  const modalRoot = document.getElementById("modal-root");
  console.log("modalRoot =", modalRoot);

  return createPortal(
    <div>
      <h2>Modal</h2>
    </div>,
    document.body // temporary for testing
  );
}

export default Modal;