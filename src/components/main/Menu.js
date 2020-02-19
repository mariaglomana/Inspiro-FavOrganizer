import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="menu__wrapper">
        <ul className="menu-list__container">
          <li className="menu-list__item">
            <Link to="/books">
              <i className="fas fa-book"></i>
              Libros
            </Link>
          </li>
          <li className="menu-list__item">
            <Link to="/music">
              <i className="fas fa-music"></i>
              {/* Música */}
            </Link>
          </li>
          <li className="menu-list__item">
            <Link to="/movies">
              <i className="fas fa-film"></i>
              Películas
            </Link>
          </li>
          <li className="menu-list__item">
            <Link to="/notes">
              <i className="far fa-sticky-note"></i>
              Notas
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
