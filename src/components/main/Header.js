import React from 'react';
import logoInspiro from '../../images/logoInspiro.png';


class Header extends React.Component {
    constructor(props) {
        super(props);


    }



    render() {
        return (
            <div className="Header__wrapper">
                <div className="landing__main--logo">
                    <img className="" src={logoInspiro} alt="Logo Inspiro" />
                </div>


            </div >
        );
    }
}


export default Header;