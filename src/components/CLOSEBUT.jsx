import PropTypes from "prop-types";
import { useState } from "react";
import "./CLOSEBUT.css";

function CLOSEBUT({ className = "", onToggle }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    const newState = !isActive;
    setIsActive(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <div
      className={`close-but ${className} ${isActive ? "active" : ""}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="close-but-child"></div>
      <div className="close-but-item"></div>
      <div className="close-but-child"></div>
    </div>
  );
}

CLOSEBUT.propTypes = {
  className: PropTypes.string,
  onToggle: PropTypes.func
};

export default CLOSEBUT;