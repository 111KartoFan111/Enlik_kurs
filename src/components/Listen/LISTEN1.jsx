import PropTypes from "prop-types";
import "./LISTEN1.css";

function LISTEN1({ className = "" }) {
  return (
      <div className={`listen ${className}`}>
          <div className="side-listen-background" />

          <div className="side-listen-title-container">
              <h2 className="listen-to-tablet1">
                  Listen to Tablet
              </h2>
          </div>

          <div className="side-listen-separator-wrapper">
              <div className="side-listen-separator" />
          </div>

          <div className="side-listen-content">
              <div className="side-podcast">
                  <div className="rootless">
                      Rootless
                  </div>

                  <div className="can-orthodox-judaism">
                      Can Orthodox Judaism Be Reformed?, With Rabbi Irving Greenberg
                  </div>
              </div>
          </div>

          <div className="side-podcast-summary">
              <div className="the-iconoclastic-rabbi">
                  The iconoclastic rabbi talks to Liel about God and the Holocaust,
                  women and the rabbinate, and whether it’s time to rethink some of
                  Orthodoxy’s most vaunted traditions
              </div>
          </div>

          <div className="side-podcast-footer">
              <div className="side-podcast-date-container">
                  <div className="february-20-2025">
                      February 20, 2025
                  </div>
              </div>

              <div className="date-separator" />
          </div>

          <div className="sanhedrin">
              <div className="sanhedrin-container">
                  <div className="take-one">
                      TAKE ONE
                  </div>

                  <div className="sanhedrin-66-and">
                      Sanhedrin 66 and 67
                  </div>

                  <div className="sanhedrin-66-and1">
                      Sanhedrin 66 and 67
                  </div>

                  <div className="february-20-20251">
                      February 20, 2025
                  </div>
              </div>
          </div>
      </div>
  );
}

LISTEN1.propTypes = {
  className: PropTypes.string,
};

export default LISTEN1;
