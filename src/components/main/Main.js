import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Music from './Music';
import Books from './Books';
import Films from './Films';
import Notes from './Notes';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            music: [],
            films: [],
            loading: false,
            searchText: ''
        };
        // this.search = this.search.bind(this);
        // this.handleSearch = this.handleSearch.bind(this);
    }

    // search() {
    //     this.setState({
    //         loading: true
    //     });
    //     getDataFromApi(this.state.searchText)
    //         .then(data => {
    //             this.setState({
    //                 shows: data,
    //                 loading: false
    //             });
    //         });
    // }

    // handleSearch(searchText) {
    //     //localStorage.set('searchText', searchText);
    //     this.setState({ searchText: searchText });
    // }

    render() {
        return (
            <div >
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/music" componenet={Music} />
                        <Route path="/books" componenet={Books} />
                        <Route path="/films" componenet={Films} />
                        <Route path="/notes" componenet={Notes} />
                    </Switch>
                </main>
                <Footer />
            </div >
        );
    }
}


export default Main;