import { createPortal } from "react-dom";

function PortalModal() {

  return createPortal(
    <h2>Portal Popup</h2>,
    document.body
  );
}

export default PortalModal;