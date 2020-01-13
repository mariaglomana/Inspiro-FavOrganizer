import React from 'react';
import { Route, Link } from 'react-router-dom';

import logoInspiro from '../../images/logoInspiro.png';

function renderLinkAndHightlightActive(route, text) {
    return (
        <Route
            exact path={route}
            children={
                ({ match }) => {
                    const activeClass = (!!match && match.isExact)
                        ? 'nav-link nav-link--active'
                        : 'nav-link nav-link--normal';

                    return (
                        <Link
                            to={route}
                            className={activeClass}
                        >{text}</Link>
                    );
                }
            }
        />
    );
}


class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    //}
    render() {
        return (
            <header className="header__wrapper ">
                <div className="header-logo__wrapper">
                    <Link to="/">
                        <img className="header-logo" src={logoInspiro} style={{ height: "6vh" }} alt="Logo Inspiro" />
                    </Link>
                </div>
                <nav className="header-nav__wrapper">
                    <ul className="header-nav">
                        <li className="header-nav__item">{renderLinkAndHightlightActive('/music', 'Música')}</li>
                        <li className="header-nav__item">{renderLinkAndHightlightActive('/books', 'Libros')}</li>
                        <li className="header-nav__item">{renderLinkAndHightlightActive('/films', 'Películas')}</li>
                        <li className="header-nav__item">{renderLinkAndHightlightActive('/notes', 'Notas')}</li>
                    </ul>
                </nav>
            </header >
        );
    }
}


export default Header;