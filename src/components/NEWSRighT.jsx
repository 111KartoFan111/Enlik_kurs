import PropTypes from "prop-types";
import "./NEWSRighT.css";

function NEWSRighT({ className = "" }) {
  return (
      <div className={`news-right ${className}`}>
          <div className="news-item">
              <div className="news-content">
                  <a className="news">
                      NEWS
                  </a>

                  <div className="news-line" />
              </div>

              <h1 className="kairat-nurtas">
                  Kairat Nurtas
              </h1>
          </div>

          <div className="news-category">
              <h3 className="buy-new-car">
                  Buy new car
              </h3>
          </div>

          <b className="by-ismagulov-z">
              BY ISMAGULOV Z. MARATULY
          </b>

          <img
              alt=""
              className="news-icon"
              loading="lazy"
              src="/vector-5.svg"
          />
      </div>
  );
}

NEWSRighT.propTypes = {
  className: PropTypes.string,
};

export default NEWSRighT;
