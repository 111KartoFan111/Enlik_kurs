import PropTypes from "prop-types";
import "./Component3.css";

function Component3({ className = "" }) {
  return (
      <div className={`div3 ${className}`}>
          <div className="image-placeholder" />

          <div className="side-image-news-details">
              <div className="title2">
                  <h2 className="news">
                      вфв
                  </h2>

                  <div className="news-line5" />
              </div>

              <div className="image-news-author">
                  <h1 className="kairat-nurtas4">
                      Kairat Nurtas
                  </h1>

                  <h3 className="buy-new-car2">
                      Buy new car
                  </h3>

                  <b className="by-ismagulov-zx1">
                      BY ISMAGULOV Z. MARATULY
                  </b>
              </div>
          </div>
      </div>
  );
}

Component3.propTypes = {
  className: PropTypes.string,
};

export default Component3;
