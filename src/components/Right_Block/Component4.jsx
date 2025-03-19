import PropTypes from "prop-types";
import "./Component4.css";

function Component4({ className = "" }) {
  return (
      <div className={`div4 ${className}`}>
          <img
              alt=""
              className="featured-image-icon"
              loading="lazy"
              src="/vector-9.svg"
          />

          <div className="featured-content">
              <div className="featured-image-placeholder" />

              <div className="featured-details">
                  <div className="featured-news-item">
                      <div className="featured-description">
                          <div className="theme">
                              <h2 className="israel-the1">
                                  ISRAEL & THE MIDDLE FAST
                              </h2>

                              <div className="theme-image">
                                  <img
                                      alt=""
                                      className="small-image-icon"
                                      src="/vector-1-1.svg"
                                  />
                              </div>
                          </div>
                      </div>

                      <div className="featured-title">
                          <h1 className="their-time-is1">
                              Their Time Is Up
                          </h1>
                      </div>

                      <div className="the-murder-of1">
                          The murder of the Bibas children caps off an 18-month catalog of
                          horrors that has told us exactly who our Palestinian neighbors
                          are. Backed by a friend in the White House, Israel must secure its
                          future through strong unilateral action.
                      </div>

                      <div className="featured-author">
                          <div className="by-liel-leibovitz1">
                              by Liel Leibovitz
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

Component4.propTypes = {
  className: PropTypes.string,
};

export default Component4;
