import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>{title}</h3>
        <div>{children}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    modal: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "5px",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
      minWidth: "300px",
      maxWidth: "40%",
      textAlign: "center",
      position: "relative",
    },
  };

export default Modal;
