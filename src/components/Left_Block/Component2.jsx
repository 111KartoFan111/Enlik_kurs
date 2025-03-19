import PropTypes from "prop-types";
import "./Component2.css";

function Component2({ className = "" }) {
  return (
    <div className={`div2 ${className}`}>
      <div className="first-news-container flex-container">
        <div className="first-news-content flex-container">
          <div className="first-news-item flex-container">
            <div className="first-news-details flex-container">
              <div className="first-news-heading flex-container">
                <div className="title flex-container">
                  <h2 className="news text-base">вв</h2>
                  <div className="news-line" />
                </div>
              </div>
              <div className="first-news-author flex-container">
                <h1 className="news-title text-base">Kairat Nurtas</h1>
                <b className="news-author text-base">BY IsOV Z. MARATULY</b>
              </div>
            </div>
          </div>
          <img alt="" className="first-news-image" loading="lazy" src="/vector-7.svg" />
          <div className="second-news-item flex-container">
            <div className="second-news-details flex-container">
              <div className="second-news-heading flex-container">
                <div className="title flex-container">
                  <h2 className="news text-base">NEWS</h2>
                  <div className="news-line" />
                </div>
              </div>
              <div className="second-news-author flex-container">
                <h1 className="news-title text-base">Kairat Nurtas</h1>
                <b className="news-author text-base">BY ISMAGULOV Z. MARATULY</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img alt="" className="second-news-image" loading="lazy" src="/vector-8.svg" />
    </div>
  );
}

Component2.propTypes = {
  className: PropTypes.string,
};

export default Component2;