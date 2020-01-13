import React from 'react';
import getDataFromServer from '../../services/data';
import List from './List';


class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        //Sustituir por la sig. cuando se arregle probl cargado info desd books.json
        getDataFromServer().then(data => {
            const items = data.results.map(task => {
                return {
                    ...items,
                    favourite: false
                };
            });
            this.setState({ items: items });
        });

        // const data = getDataFromServer();
        // this.setState({ items: data.results });
    }

    // handleFavouriteStatus(id){

    // }

    render() {
        console.log(this.state.items);

        return (
            <div >
                <h1>Sección de libros</h1>
                <List items={this.state.items} />
            </div >
        );
    }

}


export default Books;