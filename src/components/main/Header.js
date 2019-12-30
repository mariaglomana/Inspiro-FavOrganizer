import React from 'react';
import logoInspiro from '../../images/logoInspiro.png';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="header__wrapper ">
                <div className="header-content__wrapper">
                    <img className="header-logo" src={logoInspiro} alt="Logo Inspiro" />
                </div>
            </header >
        );
    }
}


export default Header;