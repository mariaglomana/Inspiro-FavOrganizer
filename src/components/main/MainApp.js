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
    this.saveBook = this.saveBook.bind(this);
  }

  saveBook(book) {
    this.setState(prevState => {
      const newFavorites = prevState.userFavs.books.push(book);
      return {
        ...prevState.userFavs,
        books: newFavorites
      };
    });
  }

  componentDidUpdate() {
    localStorage.setItem("favourites", JSON.stringify(this.state.userFavs));
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("favourites"));
    if (data !== null) {
      this.setState({ userFavs: data });
    }
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
                  saveBook={this.saveBook}
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
