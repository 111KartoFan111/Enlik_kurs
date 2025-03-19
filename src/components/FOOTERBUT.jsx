import PropTypes from "prop-types";
import { useState } from "react";
import "./FOOTERBUT.css";

function FOOTERBUT({ className = "", onToggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    // Вызываем обработчик из родительского компонента
    if (onToggle) {
      onToggle(newState);
    }
  };
  return (
    <div
      className={`footer-but ${className} ${isOpen ? "active" : ""}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      {/* Заменяем img на div для лучшего контроля */}
      <div className="footer-but-child"></div>
      <div className="footer-but-item"></div>
      <div className="footer-but-child"></div>
    </div>
  );
}

FOOTERBUT.propTypes = {
  className: PropTypes.string,
  onToggle: PropTypes.func
};

export default FOOTERBUT;