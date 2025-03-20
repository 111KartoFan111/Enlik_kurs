import PropTypes from "prop-types";
import { useNews } from "../../service/NewsContext";
import "./Collection.css";

function Collection({ className = "", collectionId = 1 }) {
  const { getCollectionById } = useNews();
  const collection = getCollectionById(collectionId);

  if (!collection) return null;

  return (
    <div className={`collection flex-container ${className}`}>
      <div className="collection-container flex-container">
        <div className="collection-content flex-container">
          <div className="collection-description flex-container">
            <div className="collection1 text-base">Collection</div>
            <h1 className="ukraine text-base">{collection.title}</h1>
          </div>
          <div className="ukraine-description flex-container">
            <div className="few-countries-over-container text-base">
              <a href={`/collections/${collection.id}`}>
                <button className="full-news text-base">Посмотреть всю новость →︎</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        alt={collection.title}
        className="collection-image-icon"
        loading="lazy"
        src={collection.image}
      />
    </div>
  );
}

Collection.propTypes = {
  className: PropTypes.string,
  collectionId: PropTypes.number,
};

export default Collection;