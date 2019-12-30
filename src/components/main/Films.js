import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Films extends React.Component {
    constructor(props) {
        super(props);
    };
}

render() {
    return (
        <div >
            <Header />
            <h1>Sección de películas</h1>
            <Footer />
        </div >
    );
}

export default Films;