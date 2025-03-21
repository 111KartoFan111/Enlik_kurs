import NEWS_left from "../Left_Block/NEWS_left";
import LISTEN from "../Listen/LISTEN";
import Main from "../Main";
import LISTEN1 from "../Listen/LISTEN1";
import PropTypes from "prop-types";
import "./FrameComponent1.css";
import { useNews } from "../../service/NewsContext";

function FrameComponent1({ className = "" }) {
    const { loading, news } = useNews();

    const topNewsItems = news.slice(0, 1);

    if (loading) {
      return <div>Loading news content...</div>;
    }
  return (
      <section className={`news-right-container-parent ${className}`}>
          <div className="news-right-container">
              <div className="news-right-parent">
                {topNewsItems.map(item => (
                    <NEWS_left key={item.id} newsId={item.id} />
                ))}

                  <LISTEN property1="Variant2" />
              </div>
          </div>

        {topNewsItems.map(item => (
            <Main  key={item.id} newsId={item.id} />
        ))}



          <div className="banner-content">
              <div className="news-right1">
                  <div className="side-news-item">
                      <div className="side-news-content">
                          <div className="side-news-header">
                              <h2 className="news7">
                                  {topNewsItems[0].category}
                              </h2>

                              <div className="news-line1" />
                          </div>

                          <h1 className="kairat-nurtas6">
                              {topNewsItems[0].title}
                          </h1>
                      </div>

                      <h3 className="buy-new-car6">
                          {topNewsItems[0].description}
                      </h3>
                  </div>

                  <b className="by-ismagulov-z8">
                      BY {topNewsItems[0].author}
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
