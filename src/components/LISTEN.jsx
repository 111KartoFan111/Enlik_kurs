import PropTypes from "prop-types";
import "./LISTEN.css";

function LISTEN({ className = "", property1 = "Default" }) {
  return (
      <div
          className={`listen-2 ${className}`}
          data-property1={property1}
      >
          <div className="listen-background" />

          <div className="listen-header">
              <h2 className="listen-to-tablet-container">
                  <p className="listen-to-tablet">
                      Listen to Tablet
                  </p>
              </h2>

              <div className="listen-separator" />
          </div>

          <div className="listen-content">
              <div className="what-really-matters">
                  What Really Matters
              </div>

              <b className="which-way-euro">
                  Which Way Euro Man?
              </b>
          </div>

          <div className="podcast-description">
              <div className="this-week-walter">
                  This week, Walter and Jeremy discuss the White House scrapping
                  environmental regulations, the Trump-Modi bromance, the New York
                  Times’ adoption of AI tools, and the beginning of the end of the
                  trans-Atlantic alliance
              </div>
          </div>

          <div className="february-19-2025-container">
              <p className="february-19-2025">
                  February 19, 2025
              </p>
          </div>

          <img
              alt=""
              className="listen-icon"
              loading="lazy"
              src="/vector-3.svg"
          />
      </div>
  );
}

LISTEN.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default LISTEN;
