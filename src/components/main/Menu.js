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
            <Link to="/music">
              <i class="fas fa-music"></i>
              {/* Música */}
            </Link>
          </li>
          <li className="menu-list__item">
            <Link to="/books">
              <i class="fas fa-book"></i>
              Libros
            </Link>
          </li>
          <li className="menu-list__item">
            <Link to="/films">
              <i class="fas fa-film"></i>
              Películas
            </Link>
          </li>
          <li className="menu-list__item">
            <Link to="/notes">
              <i class="far fa-sticky-note"></i>
              Notas
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
