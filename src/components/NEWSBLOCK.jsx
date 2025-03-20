import PropTypes from "prop-types";
import { useNews } from "../service/NewsContext";
import "./NEWSBLOCK.css";

function NEWSBLOCK({ className = "", newsId }) {
  const { getNewsById } = useNews();
  const newsItem = getNewsById(newsId);

  if (!newsItem) return null;

  return (
    <div className={`news-block ${className}`}>
      <h1 className="kairat-nurtas1">
        {newsItem.title}
      </h1>

      <b className="author">
        BY {newsItem.author}
      </b>

      <h3 className="description">
        {newsItem.description}
      </h3>

      <h2 className="news1">
        {newsItem.category}
      </h2>

      <div className="news-line2" />
    </div>
  );
}

NEWSBLOCK.propTypes = {
  className: PropTypes.string,
  newsId: PropTypes.number.isRequired,
};

export default NEWSBLOCK;