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

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      music: [],
      films: [],
      loading: false,
      searchText: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/music" component={MusicSection} />
            <Route path="/books" component={BooksSection} />
            <Route path="/films" component={FilmsSection} />
            <Route path="/notes" component={NotesSection} />
            <Route path="/search" component={SearchSection} />
          </Switch>

          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default Main;
