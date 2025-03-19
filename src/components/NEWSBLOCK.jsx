import PropTypes from "prop-types";
import "./NEWSBLOCK.css";

function NEWSBLOCK({ className = "", newsVector }) {
  return (
      <div className={`news-block ${className}`}>
          <img
              alt=""
              className="news-vector-icon"
              loading="lazy"
              src={newsVector}
          />

          <h1 className="kairat-nurtas1">
              Kairat Nurtas
          </h1>

          <b className="by-ismagulov-z1">
              BY ISMAGULOV Z. MARATULYss
          </b>

          <h3 className="buy-new-car1">
              Buy new car
          </h3>

          <h2 className="news1">
              NEWS
          </h2>

          <div className="news-line2" />
      </div>
  );
}

NEWSBLOCK.propTypes = {
  className: PropTypes.string,
  newsVector: PropTypes.string,
};

export default NEWSBLOCK;
