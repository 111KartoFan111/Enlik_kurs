// components/Sidebar.jsx
import PropTypes from "prop-types";
import "./Sidebar.css";

function Sidebar({ isOpen, children }) {
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          {children} {/* Рендерим дочерние элементы */}
          <h2>Sidebar Content</h2>
          <p>Это выдвижная панель с левой стороны</p>
        </div>
      </div>
      {isOpen && <div className="sidebar-overlay" />}
    </>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node // Добавляем проп для дочерних элементов
};

export default Sidebar;