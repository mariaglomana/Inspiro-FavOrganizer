import React from 'react';
import logoInspiro from '../../images/logoInspiro.png';
import { Link } from 'react-router-dom';


const Landing = () => {

    const linkStyle = {
        color: 'white'
    };

    return (
        <main className="landing__main">
            <div className="landing__main--logo">
                <img className="" src={logoInspiro} alt="Logo Inspiro" />
            </div>
            <Link to='/desktop' style={linkStyle}>
                <div className="landing__button">
                    <a href=""><span className="">Inicio</span></a>
                </div>
            </Link>
        </main>

    )
}

export default Landing;