import React, {
  useState /*, useEffect, useContext, useReducer */
} from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import { ConfigContext } from "../App";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NotesSection from "./NotesSection";
import SearchSection from "./SearchSection";
import GenericSection from "./GenericSection";

// import localStorage from "../../localStorage/index";

const MainApp = () => {
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);
  const [art, setArt] = useState([]);

  //context will be used for displaying/ not displaying login section
  // const context = useContext(ConfigContext);

  // const [lastSectionSel, setLastSectionSel] = useState("home");

  const updateFavs = (item, isSaved) => {
    if (isSaved) {
      item.type === "books"
        ? addBook(item)
        : item.type === "movies"
        ? addMovie(item)
        : addArt(item);
    } else {
      item.type === "books"
        ? removeBook(item)
        : item.type === "movies"
        ? removeMovie(item)
        : removeArt(item);
    }
  };

  const addBook = item => {
    const newBooks = books.concat(item);
    setBooks(newBooks);
  };
  const addArt = item => {
    const newArt = art.concat(item);
    setArt(newArt);
  };

  const addMovie = item => {
    const newMovie = movies.concat(item);
    setMovies(newMovie);
  };

  const removeBook = item => {
    const newBooks = books.filter(elem => elem.id !== item.id);
    setBooks(newBooks);
  };
  const removeArt = item => {
    const newArt = art.filter(elem => elem.id !== item.id);
    setArt(newArt);
  };

  const removeMovie = item => {
    const newMovies = movies.filter(elem => elem.id !== item.id);
    setMovies(newMovies);
  };

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("favourites"));
  //   if (data !== null) {
  //     setUserFavs(data);
  //   }
  //   // return () => console.log("dismounting");
  // }, [userFavs]);
  //// LOCAL STORAGE

  // componentDidUpdate() {
  //   localStorage.setItem("favourites", JSON.stringify(this.state.userFavs));
  // }

  // componentDidMount() {
  //   const data = JSON.parse(localStorage.getItem("favourites"));
  //   if (data !== null) {
  //     this.setState({ userFavs: data });
  //   }
  // }

  return (
    <React.Fragment>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/home" component={Home} />

          <Route
            path="/art"
            render={routerProps => (
              <GenericSection
                title={"Tus obras de arte"}
                match={routerProps.match}
                items={art}
                removeFav={removeArt}
              />
            )}
          />

          <Route
            path="/books"
            render={routerProps => (
              <GenericSection
                title={"Tus libros"}
                match={routerProps.match}
                items={books}
                removeFav={removeBook}
              />
            )}
          />
          <Route
            path="/movies"
            render={routerProps => (
              <GenericSection
                title={"Tus películas"}
                match={routerProps.match}
                items={movies}
                removeFav={removeMovie}
              />
            )}
          />

          <Route path="/notes" component={NotesSection} />

          <Route
            path="/search"
            render={routerProps => (
              <SearchSection
                match={routerProps.match}
                books={books}
                movies={movies}
                art={art}
                updateFavs={updateFavs}
              />
            )}
          />
        </Switch>

        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default MainApp;
