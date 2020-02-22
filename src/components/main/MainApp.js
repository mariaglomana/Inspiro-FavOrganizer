import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import FavsSection from "./FavsSection";
import MusicSection from "./MusicSection";
import BooksSection from "./BooksSection";
// import MoviesSection from "./MoviesSection";
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
        movies: []
      }
    };
    this.updateFavs = this.updateFavs.bind(this);
    this.removeFav = this.removeFav.bind(this);

    this.updateFavsMovies = this.updateFavsMovies.bind(this);
    this.removeFavMovies = this.removeFavMovies.bind(this);
  }

  //// GENERAL

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

  setStateSection(section, newArr) {
    this.setState(prevState => {
      return {
        ...prevState.userFavs,
        [section]: newArr
      };
    });
  }

  //MOVIES

  updateFavsMovies(movie) {
    if (movie.isSaved) {
      this.addFavMovies(movie);
    } else {
      this.removeFavMovies(movie);
    }
  }

  addFavMovies(movie) {
    const updatedFavsTyped = this.state.userFavs.movies.concat(movie);
    this.setStateSection(movie.type, updatedFavsTyped);
  }

  removeFavMovies(movie) {
    const updatedFavsTyped = this.state.userFavs.movies.filter(
      elem => elem.id !== movie.id
    );
    this.setStateSection(movie.type, updatedFavsTyped);
  }

  //// MOVIES
  // removeFavMovie(movie) {
  //   const indexFavList = this.state.userFavs.movies.findIndex(
  //     elem => elem.id === movie.id
  //   );
  //   const newFavourites = this.state.userFavs.movies.splice(indexFavList, 1);
  //   this.setStateSection("movies", newFavourites);
  // }

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

                <FavsSection
                  match={routerProps.match}
                  items={this.state.userFavs.movies}
                  removeFav={this.removeFavMovies}
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
                  updateFavs={this.updateFavsMovies}
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
