import React from 'react';
import { Link } from 'react-router-dom';


class Menu extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <nav className="Menu__wrapper">
                <ul>
                    <li>
                        <Link to="/music">
                            <i class="fas fa-music"></i>
                            Música
                    </Link>
                    </li>
                    <li>
                        <Link to="/books">
                            <i class="fas fa-book"></i>
                            Libros
                    </Link>
                    </li>
                    <li>
                        <Link to="/films">
                            <i class="fas fa-film"></i>
                            Películas
                 </Link>
                    </li>
                    <li>
                        <Link to="/notes">
                            <i class="far fa-sticky-note"></i>
                            Notas</Link>
                    </li>
                </ul>
            </nav >
        );
    }
}


export default Menu;