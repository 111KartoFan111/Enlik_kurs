import NEWSBLOCK from "./NEWSBLOCK";
import Collection from "./Collection/Collection";
import Component2 from "./Left_Block/Component2";
import Component3 from "./Left_Block/Component3";
import Component4 from "./Right_Block/Component4";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./RevolutionBanner.css";

function RevolutionBanner({ className = "" }) {
  return (
      <section className={`revolution-banner ${className}`}>
          <div className="news-block-container">
              <div className="twitter-name">
                  <div className="news4">
                      <NEWSBLOCK newsVector="/news-vector.svg" />

                      <NEWSBLOCK newsVector="/news-vector.svg" />

                      <NEWSBLOCK newsVector="/news-vector.svg" />
                  </div>
              </div>

              <div className="collection-block">
                  <Collection />

                  <div className="side-news-block1">
                      <div className="side-news-container1">
                          <div className="side-news-content2">
                              <Component2 />

                              <Component3 />
                          </div>

                          <div className="main-side-news">
                              <Component4 />
                          </div>
                      </div>
                  </div>

                  <FrameComponent />
              </div>
          </div>
      </section>
  );
}

RevolutionBanner.propTypes = {
  className: PropTypes.string,
};

export default RevolutionBanner;
