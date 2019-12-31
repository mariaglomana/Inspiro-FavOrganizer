import React from 'react';

class Music extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div className="section-main__wrapper">
                <div className="blue-background"></div>
                <h1 className="section-title">música</h1>
                <div className="section-container"></div>
            </div >
        );
    }
}



export default Music;