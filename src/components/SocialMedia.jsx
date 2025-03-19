import Subscribe from "./Subscribe";
import PropTypes from "prop-types";
import "./SocialMedia.css";

function SocialMedia({ className = "" }) {
  return (
      <div className={`social-media ${className}`}>
          <Subscribe />
      </div>
  );
}

SocialMedia.propTypes = {
  className: PropTypes.string,
};

export default SocialMedia;
