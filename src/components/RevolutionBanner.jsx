import { useNews } from "../service/NewsContext";
import NEWSBLOCK from "./NEWSBLOCK";
import Collection from "./Collection/Collection";
import Component2 from "./Left_Block/Component2";
import Component3 from "./Left_Block/Component3";
import Component4 from "./Right_Block/Component4";
import FrameComponent from "./Bottom_Block/FrameComponent";
import PropTypes from "prop-types";
import "./RevolutionBanner.css";

function RevolutionBanner({ className = "" }) {
  const { loading, news } = useNews();

  const topNewsItems = news.slice(0, 3);

  const oneNewsItem = news.slice(3, 4);

  if (loading) {
    return <div>Loading news content...</div>;
  }

  return (
    <section className={`revolution-banner ${className}`}>
      <div className="news-block-container">
        <div className="twitter-name">
          <div className="news4">
            {topNewsItems.map(item => (
              <NEWSBLOCK key={item.id} newsId={item.id} />
            ))}
          </div>
        </div>

        <div className="collection-block">
          <Collection collectionId={1} />

          <div className="side-news-block1">
            <div className="side-news-container1">
              <div className="side-news-content2">
                {oneNewsItem.map(item => (
                  <Component2 key={item.id} newsId={item.id} />
                ))}
                <Component3 newsId={6} />
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