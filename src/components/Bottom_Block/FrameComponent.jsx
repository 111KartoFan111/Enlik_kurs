import PropTypes from "prop-types";
import "./FrameComponent.css";

function FrameComponent({ className = "" }) {
  return (
      <div className={`repeated-news-structure-parent ${className}`}>
          <div className="repeated-news-structure">
              <div className="nested-news-item">
                  <div className="nested-news-details">
                      <div className="nested-news-elements">
                          <div className="title3">
                              <div className="nested-news-title-container">
                                  <h2 className="news3">
                                      NEWS
</h2>
                              </div>

                              <div className="news-line6" />
                          </div>
                      </div>

                      <div className="nested-news-author-info">
                          <h1 className="kairat-nurtas5">
                              Kairat Nurtas
                          </h1>

                          <h3 className="description3">
                              Buy new car
                          </h3>

                          <b className="by-ismagulov-z4">
                              BY ISMAGULOV Z. MARATULY
                          </b>
                      </div>
                  </div>
              </div>

              <img
                  alt=""
                  className="second-nested-news-item"
                  loading="lazy"
                  src="/vector-16.svg"
              />
          </div>

          <div className="third-nested-news">
              <div className="third-nested-news-container">
                  <div className="third-nested-news-content">
                      <div className="third-nested-item">
                          <div className="third-nested-elements">
                              <div className="third-news-details">
                                  <div className="title3">
                                      <h2 className="news">
                                      NEWS
                                  </h2>

                                      <div className="news-line6" />
                                  </div>
                              </div>

                              <div className="third-news-author">
                                  <h1 className="kairat-nurtas6">
                                      Kairat Nurtas
                              </h1>

                                  <h3 className="description4">
                                      Buy new car
                              </h3>
                              </div>
                          </div>

                          <b className="by-ismagulov-z5">
                              BY ISMAGULOV Z. MARATULY
                          </b>
                      </div>
                  </div>

                  <img
                      alt=""
                      className="second-nested-news-item"
                      loading="lazy"
                      src="/vector-16.svg"
                  />
              </div>
          </div>

          <div className="side-news-block">
              <div className="side-news-background" />

              <div className="side-news-content1">
                  <div className="side-news-container">
                      <div className="title5">
                          <h2 className="news">
                              NEWS
                          </h2>

                          <div className="news-line6" />
                      </div>

                      <div className="side-news-names">
                          <h1 className="kairat-nurtas7">
                              Kairat Nurtas
                          </h1>

                          <h3 className="description5">
                              Buy new car
                          </h3>
                      </div>
                  </div>

                  <b className="by-ismagulov-z5">
                      BY ISMAGULOV Z. MARATULY
                  </b>
              </div>
          </div>

          <div className="repeated-news-structure1">
              <img
                  alt=""
                  className="second-nested-news-item"
                  loading="lazy"
                  src="/vector-16.svg"
              />

              <div className="second-nested-news-details-wrapper">
                  <div className="second-nested-news-details">
                      <div className="second-nested-news-elements">
                          <div className="title5">
                              <h2 className="news">
                                  NEss
                              </h2>

                              <div className="news-line6" />
                          </div>

                          <h1 className="kairat-nurtas8">
                              Kairat Nurtas
                          </h1>
                      </div>

                      <div className="second-nested-description">
                          <h3 className="description6">
                              sss
                          </h3>
                      </div>

                      <b className="by-ismagulov-z5">
                          BY ISMAGULOV Z. MARATULY
                      </b>
                  </div>
              </div>
          </div>
      </div>
  );
}

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
