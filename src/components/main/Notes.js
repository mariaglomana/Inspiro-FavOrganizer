import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Notes extends React.Component {
    constructor(props) {
        super(props);
    };
}

render() {
    return (
        <div >
            <Header />
            <h1>Sección para anotaciones</h1>
            <Footer />
        </div >
    );
}

export default Notes;