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
    this.updateFavBooks = this.updateFavBooks.bind(this);
    this.removeFavBook = this.removeFavBook.bind(this);
  }

  updateFavBooks(book) {
    // const selectedBook = { ...book, isSaved: true };
    if (book.isSaved) {
      this.addFavBook(book);
    } else {
      this.removeFavBook(book);
    }
  }

  addFavBook(book) {
    const newFavourites = this.state.userFavs.books.push(book);
    this.setStateSection("books", newFavourites);
  }

  removeFavBook(book) {
    const indexFavList = this.state.userFavs.books.findIndex(
      elem => elem.id === book.id
    );
    const newFavourites = this.state.userFavs.books.splice(indexFavList, 1);
    this.setStateSection("books", newFavourites);
  }

  setStateSection(section, newArr) {
    this.setState(prevState => {
      return {
        ...prevState.userFavs,
        section: newArr
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
                  removeFavBook={this.removeFavBook}
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
                  updateFavBooks={this.updateFavBooks}
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
