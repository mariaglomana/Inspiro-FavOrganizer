import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
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
    }


    render() {
        return (
            <React.Fragment>
                <Router>
                    <Header />

                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route path="/home/music" component={Music} />
                        <Route path="/home/books" component={Books} />
                        <Route path="/home/films" component={Films} />
                        <Route path="/home/notes" component={Notes} />
                    </Switch>

                    <Footer />
                </Router>
            </React.Fragment>

        );
    }
}


export default Main;