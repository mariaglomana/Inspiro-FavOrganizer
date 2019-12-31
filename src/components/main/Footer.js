import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer__wrapper">
                <div className="footer-content__wrapper">
                    <h4>© Inspiro 2020</h4>
                    <nav>
                        <ul className="footer-content__nav">
                            <li className="footer-content__nav-item">Acerca</li>
                            <li className="footer-content__nav-item">Contacto</li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}


export default Footer;