import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Music from "./Music";
import Books from "./Books";
import Films from "./Films";
import Notes from "./Notes";
import SearchNew from "./SearchNew";

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
            <Route path="/music" component={Music} />
            <Route path="/books" component={Books} />
            <Route path="/films" component={Films} />
            <Route path="/notes" component={Notes} />
            <Route path="/search" component={SearchNew} />
          </Switch>

          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default Main;
