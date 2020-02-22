import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
// import GenericSection from "./GenericSection";
import MusicSection from "./MusicSection";
import BooksSection from "./BooksSection";
import MoviesSection from "./MoviesSection";
import NotesSection from "./NotesSection";
import SearchSection from "./SearchSection";
import GenericSection from "./GenericSection";

// import localStorage from "../../localStorage/index";

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFavs: {
        books: [],
        music: [],
        movies: []
      }
    };
    this.updateFavs = this.updateFavs.bind(this);
    this.removeFav = this.removeFav.bind(this);
    this.removeFavMovie = this.removeFavMovie.bind(this);
  }

  //// BOOKS

  updateFavs(item) {
    if (item.isSaved) {
      this.addFav(item);
    } else {
      this.removeFav(item);
    }
  }

  addFav(item) {
    const updatedFavsTyped = this.state.userFavs[item.type].concat(item);
    this.setStateSection(item.type, updatedFavsTyped);
  }

  removeFav(item) {
    const updatedFavsTyped = this.state.userFavs[item.type].filter(
      elem => elem.id !== item.id
    );
    this.setStateSection(item.type, updatedFavsTyped);
  }

  //// MOVIES
  removeFavMovie(movie) {
    const indexFavList = this.state.userFavs.movies.findIndex(
      elem => elem.id === movie.id
    );
    const newFavourites = this.state.userFavs.movies.splice(indexFavList, 1);
    this.setStateSection("movies", newFavourites);
  }

  //// GENERAL

  setStateSection(section, newArr) {
    this.setState(prevState => {
      return {
        userFavs: {
          ...prevState.userFavs,
          [section]: newArr
        }
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
                // <BooksSection
                //   match={routerProps.match}
                //   books={this.state.userFavs.books}
                //   removeFav={this.removeFav}
                // />

                <GenericSection
                  match={routerProps.match}
                  items={this.state.userFavs.books}
                  removeFav={this.removeFav}
                />
              )}
            />
            <Route
              path="/movies"
              render={routerProps => (
                // <MoviesSection
                //   match={routerProps.match}
                //   movies={this.state.userFavs.movies}
                //   removeFavMovie={this.removeFavMovie}
                // />

                <GenericSection
                  match={routerProps.match}
                  items={this.state.userFavs.movies}
                  removeFav={this.removeFav}
                />
              )}
            />

            <Route path="/notes" component={NotesSection} />
            <Route
              path="/search"
              render={routerProps => (
                <SearchSection
                  match={routerProps.match}
                  userFavs={this.state.userFavs}
                  updateFavs={this.updateFavs}
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
