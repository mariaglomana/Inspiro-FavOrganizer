import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Books extends React.Component {
    constructor(props) {
        super(props);
    };
}

render() {
    return (
        <div >
            <Header />
            <h1>Sección de libros</h1>
            <Footer />
        </div >
    );
}

export default Books;