import { useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");

  const modalElement = document.createElement("div");
  modalElement.className =
    "fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75";

  useEffect(() => {
    if (modalRoot) {
      modalRoot.appendChild(modalElement);
    }
    return () => {
      if (modalRoot) {
        modalRoot.removeChild(modalElement);
      }
    };
  }, [modalElement, modalRoot]);

  return modalRoot ? ReactDOM.createPortal(children, modalElement) : null;
};

export default Modal;
