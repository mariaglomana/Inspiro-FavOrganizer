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
    this.removeFavMovie = this.removeFavMovie.bind(this);
  }

  //// GENERAL

  updateFavs(item) {
    // let favsArr = [];

    // item.type === "book"
    //   ? (favsArr = this.state.userFavs.books)
    //   : item.type === "music"
    //   ? (favsArr = this.state.userFavs.music)
    //   : (favsArr = this.state.userFavs.movies);

    if (item.isSaved) {
      this.addFav(item);
    } else {
      this.removeFav(item);
    }
  }

  addFav(item) {
    let newFavourites = [];
    if (item.type === "book") {
      newFavourites = this.state.userFavs.books.push(item);
    } else if (item.type === "music") {
      newFavourites = this.state.userFavs.music.push(item);
    } else {
      newFavourites = this.state.userFavs.movies.push(item);
    }

    // const newFavourites = favsArr.push(item);
    this.setStateSection(item.type, newFavourites);
  }

  removeFav(item) {
    let indexFavList = 0;
    if (item.type === "book") {
      indexFavList = this.state.userFavs.books.findIndex(
        elem => elem.id === item.id
      );
    } else if (item.type === "music") {
      indexFavList = this.state.userFavs.music.findIndex(
        elem => elem.id === item.id
      );
    } else {
      indexFavList = this.state.userFavs.movies.findIndex(
        elem => elem.id === item.id
      );
    }

    // const indexFavList = favsArr.findIndex(elem => elem.id === item.id);
    let newFavourites = [];
    if (item.type === "book") {
      newFavourites = this.state.userFavs.books.splice(indexFavList, 1);
    } else if (item.type === "music") {
      newFavourites = this.state.userFavs.music.splice(indexFavList, 1);
    } else {
      newFavourites = this.state.userFavs.movies.splice(indexFavList, 1);
    }

    // const newFavourites = favsArr.splice(indexFavList, 1);
    this.setStateSection(item.type, newFavourites);
  }

  setStateSection(section, newArr) {
    this.setState(prevState => {
      return {
        ...prevState.userFavs,
        section: newArr
      };
    });
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
