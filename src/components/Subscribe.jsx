import PropTypes from "prop-types";
import "./Subscribe.css";

function Subscribe({ className = "" }) {
  return (
    <div className={`social-media ${className}`}>
      <div className={`subscribe ${className}`}>
          <div className="subscribe-rectangle">

          <div className="subscribe-to-mysite">
              Subscribe to MySite:
          </div>

            <div className="input-container">
                <input className="subscribe-rectangle1" placeholder="Your email address here" />
                <button className="subscribe-arrow-icon" formAction="sumbit"></button>
            </div>
            </div>
      </div>
    </div>
  );
}

Subscribe.propTypes = {
  className: PropTypes.string,
};

export default Subscribe;
