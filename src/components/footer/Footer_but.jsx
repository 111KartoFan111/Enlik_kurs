import PropTypes from "prop-types";
import { useState } from "react";
import "./Footer_but.css";

function Footer_but({ className = "", onToggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    const newState = !isOpen;
    setIsOpen(newState);

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
      <div className="footer-but-child"></div>
      <div className="footer-but-item"></div>
      <div className="footer-but-child"></div>
    </div>
  );
}

Footer_but.propTypes = {
  className: PropTypes.string,
  onToggle: PropTypes.func
};

export default Footer_but;