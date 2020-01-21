import React from 'react';
import logoInspiro from '../../images/logoInspiro.png';
import { Link } from 'react-router-dom';


const Landing = () => {

    const linkStyle = {
        color: 'white'
    };

    return (
        <main className="landing__main--wrapper">
            <div className="landing-logo__wrapper">
                <img className="landing-logo__img" src={logoInspiro} alt="Logo Inspiro" />
            </div>
            <Link to='/' style={linkStyle}>
                <button className="landing__main--button">
                    <span className="">Inicio</span>
                </button>
            </Link>
        </main>

    )
}

export default Landing;