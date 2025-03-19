import NEWSRighT from "../Left_Block/NEWS_left";
import LISTEN from "../Listen/LISTEN";
import Main from "../Main";
import LISTEN1 from "../Listen/LISTEN1";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

function FrameComponent1({ className = "" }) {
  return (
      <section className={`news-right-container-parent ${className}`}>
          <div className="news-right-container">
              <div className="news-right-parent">
                  <NEWSRighT />

                  <LISTEN property1="Variant2" />
              </div>
          </div>

          <Main />

          <div className="banner-content">
              <div className="news-right1">
                  <div className="side-news-item">
                      <div className="side-news-content">
                          <div className="side-news-header">
                              <h2 className="news7">
                                  NEWssssS
                              </h2>

                              <div className="news-line1" />
                          </div>

                          <h1 className="kairat-nurtas6">
                              Kairat Nurtas
                          </h1>
                      </div>

                      <h3 className="buy-new-car6">
                          Buy new car
                      </h3>
                  </div>

                  <b className="by-ismagulov-z8">
                      BY ISMAGULOV Z. MARATULY
                  </b>

                  <img
                      alt=""
                      className="side-news-icon"
                      src="/vector-5.svg"
                  />
              </div>

              <LISTEN1 />
          </div>
      </section>
  );
}

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
