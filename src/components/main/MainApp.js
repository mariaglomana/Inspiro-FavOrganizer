import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
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
        movies: [],
        art: []
      },
      lastSectionVisited: "books"
    };
    this.updateFavs = this.updateFavs.bind(this);
    this.removeFav = this.removeFav.bind(this);
  }

  //// UPDATE FAVS HANDLING

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
        userFavs: {
          ...prevState.userFavs,
          [section]: newArr
        }
      };
    });
  }

  //// LOCAL STORAGE

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
            {/* <Route
              path="/music"
              render={routerProps => (
                <GenericSection
                  title={"Tu música"}
                  match={routerProps.match}
                  items={this.state.userFavs.music}
                  removeFav={this.removeFav}
                />
              )}
            /> */}

            <Route
              path="/art"
              render={routerProps => (
                <GenericSection
                  title={"Tus obras de arte"}
                  match={routerProps.match}
                  items={this.state.userFavs.art}
                  removeFav={this.removeFav}
                />
              )}
            />

            <Route
              path="/books"
              render={routerProps => (
                <GenericSection
                  title={"Tus libros"}
                  match={routerProps.match}
                  items={this.state.userFavs.books}
                  removeFav={this.removeFav}
                />
              )}
            />
            <Route
              path="/movies"
              render={routerProps => (
                <GenericSection
                  title={"Tus películas"}
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
