import PropTypes from "prop-types";
import "./Collection.css";

function Collection({ className = "" }) {
  return (
    <div className={`collection flex-container ${className}`}>
      <div className="collection-container flex-container">
        <div className="collection-content flex-container">
          <div className="collection-description flex-container">
            <div className="collection1 text-base">Collection</div>
            <h1 className="ukraine text-base">Ukraine</h1>
          </div>
          <div className="ukraine-description flex-container">
            <div className="few-countries-over-container text-base">
              <a href="https://www.google.com">
                <button className="full-news text-base">Посмотреть всю новость →︎</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        alt=""
        className="collection-image-icon"
        loading="lazy"
        src="/vector-6.svg"
      />
    </div>
  );
}

Collection.propTypes = {
  className: PropTypes.string,
};

export default Collection;