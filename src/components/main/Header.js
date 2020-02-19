import React from "react";
import { Route, Link } from "react-router-dom";
import logoInspiro from "../../images/logoInspiro.png";

function renderLinkAndHightlightActive(route, text, linkClass) {
  return (
    <Route
      exact
      path={route}
      children={({ match }) => {
        const activeClass =
          !!match && match.isExact
            ? "nav-link nav-link--active"
            : "nav-link nav-link--normal";

        return (
          <Link to={route} className={activeClass}>
            <i className={linkClass}></i>
            {/* {text} */}
          </Link>
        );
      }}
    />
  );
}

class Header extends React.Component {
  render() {
    return (
      <header className="header__wrapper ">
        <div className="header-bar__wrapper">
          <Link to="/home">
            <img
              className="header-bar__logo"
              src={logoInspiro}
              style={{ height: "6vh" }}
              alt="Logo Inspiro"
            />
          </Link>
          <Link to="/search">
            <div className="header-bar__search">
              <button className="header-bar__search--icon">
                <i className="fas fa-search"></i>{" "}
              </button>
            </div>
          </Link>
        </div>
        <nav className="header-nav__wrapper">
          <ul className="header-nav">
            <li className="header-nav__item">
              {renderLinkAndHightlightActive(
                "/music",
                "Música",
                "fas fa-music nav-link-icon"
              )}
            </li>
            <li className="header-nav__item">
              {renderLinkAndHightlightActive(
                "/books",
                "Libros",
                "fas fa-book nav-link-icon"
              )}
            </li>
            <li className="header-nav__item">
              {renderLinkAndHightlightActive(
                "/movies",
                "Películas",
                "fas fa-film nav-link-icon"
              )}
            </li>
            <li className="header-nav__item">
              {renderLinkAndHightlightActive(
                "/notes",
                "Notas",
                "far fa-sticky-note nav-link-icon"
              )}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
