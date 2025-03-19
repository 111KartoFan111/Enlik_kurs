import PropTypes from "prop-types";
import "./Component1.css";

function Component1({ className = "", property1 = "Default" }) {
  return (
    <header
      className={`header ${className} ${property1 === "Variant2" ? "variant2-style" : ""}`}
      data-property1={property1}
    >
      <div className="content-wrapper">
        <div className="february-articles">
          <h1 className="tablet">Zeitgeist</h1>
          <div className="articles-title1">
            <div className="div1">
              23 ФЕВРАЛЯ , 2025 • 1 статей 5
            </div>
          </div>
        </div>
      </div>
      <img
        alt=""
        className="background-shape-icon"
        loading="lazy"
        src="/vector-4.svg"
      />
    </header>
  );
}

Component1.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string, // Ожидаем строку
};

export default Component1;