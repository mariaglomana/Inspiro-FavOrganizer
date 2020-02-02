import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SearchNew from "./SearchNew";
import Results from "./Results";

class SearchSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchSubject: "books"
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(value) {
    this.setState({ searchSubject: value });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            render={routerProps => (
              <SearchNew
                match={routerProps.match}
                searchSubject={this.state.searchSubject}
                handleSelectChange={this.handleSelectChange}
              />
            )}
          />
          <Route path="/results" component={Results} />
        </Switch>
      </Router>
    );
  }
}

export default SearchSection;
