import React from 'react';
import { Link } from 'react-router-dom';

import logoInspiro from '../../images/logoInspiro.png';


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
                    <ul className="header-navigation">
                        <li >
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
                        </li>
                    </ul>
                </nav>
            </header >
        );
    }
}


export default Header;