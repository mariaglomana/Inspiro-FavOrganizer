import React from 'react';
import { Route, Link } from 'react-router-dom';

import logoInspiro from '../../images/logoInspiro.png';

function renderLinkAndHightlightActive(route, text) {
    return (
        <Route
            path={route}
            children={
                ({ match, history, location }) => {
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
                    <Link to="/home">
                        <img className="header-logo" src={logoInspiro} style={{ height: "6vh" }} alt="Logo Inspiro" />
                    </Link>
                </div>
                <nav className="header-nav__wrapper">
                    <ul className="header-nav">
                        <li className="header-nav__item">{renderLinkAndHightlightActive('/home/music', 'Música')}</li>
                        <li className="header-nav__item">{renderLinkAndHightlightActive('/home/books', 'Libros')}</li>
                        <li className="header-nav__item">{renderLinkAndHightlightActive('/home/films', 'Películas')}</li>
                        <li className="header-nav__item">{renderLinkAndHightlightActive('/home/notes', 'Notas')}</li>


                        {/* <li >
                            <Link to="/home/music">
                                Música
                            </Link>
                        </li>
                        <li >
                            <Link to="/home/books">
                                Libros
                            </Link>
                        </li>
                        <li >
                            <Link to="/home/films">
                                Películas
                            </Link>
                        </li>
                        <li >
                            <Link to="/home/notes">
                                Notas
                            </Link>
                        </li> */}
                    </ul>
                </nav>
            </header >
        );
    }
}


export default Header;