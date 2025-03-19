import PropTypes from "prop-types";
import "./Main.css";

function Main({ className = "" }) {
  return (
      <div className={`main ${className}`}>
          <img
              alt=""
              className="main-article-background"
              src="/main-article-background.svg"
          />

          <div className="main-article-image" />

          <div className="main-article-content">
              <div className="frame-group">
                  <div className="main-article-title-wrapper">
                      <div className="main-article-title">
                          <img
                              alt=""
                              className="title-icon"
                              loading="lazy"
                              src="/vector-1.svg"
                          />

                          <h2 className="israel-the">
                              ISRAEL & THE MIDDLE FAST
                          </h2>
                      </div>
                  </div>

                  <div className="main-article-description">
                      <div className="description-container">
                          <h1 className="their-time-is">
                              Their Time Is Up
                          </h1>

                          <div className="the-murder-of">
                              The murder of the Bibas children caps off an 18-month catalog of
                              horrors that has told us exactly who our Palestinian neighbors
                              are. Backed by a friend in the White House, Israel must secure
                              its future through strong unilateral action.
                          </div>
                      </div>

                      <div className="author-container">
                          <div className="by-liel-leibovitz">
                              by Liel Leibovitz
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
