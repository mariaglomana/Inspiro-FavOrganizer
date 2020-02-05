import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import MusicSection from "./MusicSection";
import BooksSection from "./BooksSection";
import FilmsSection from "./FilmsSection";
import NotesSection from "./NotesSection";
import SearchSection from "./SearchSection";

import books from "../../services/books";
// import localStorage from "../../localStorage/index";

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFavs: {
        books: [],
        music: [],
        films: []
      }
    };
  }

  componentDidMount() {
    this.setState(prevState => {
      return {
        userFavs: {
          ...prevState.userFavs,
          books: books.results
        }
      };
    });
    // const userFavs = JSON.parse(localStorage.getItem('userFavs'));
    // if (userFavs !== null) {
    //   this.setState(userFavs);
    // }
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/music" component={MusicSection} />
            <Route
              path="/books"
              render={routerProps => (
                <BooksSection
                  match={routerProps.match}
                  books={this.state.userFavs.books}
                />
              )}
            />
            <Route path="/films" component={FilmsSection} />
            <Route path="/notes" component={NotesSection} />
            <Route
              path="/search"
              render={routerProps => (
                <SearchSection
                  match={routerProps.match}
                  userFavs={this.state.userFavs}
                />
              )}
            />
          </Switch>

          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default MainApp;
