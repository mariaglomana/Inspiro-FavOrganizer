import React from "react";
import { Route, Switch } from "react-router-dom";
import SearchNewElem from "./SearchNewElem";
import ResultsList from "./ResultsList";
import getBooksFromApi from "../../services/books";
import localStorage from "../../localStorage/index";
import getMoviesFromApi from "../../services/movies";
// import getMusicFromApi from "../../services/music";
import getArtFromAPI from "../../services/art";

class SearchSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchSubject: "0",
      loading: false,
      results: []
    };
    this.searchText = React.createRef();
    this.handleSearchText = this.handleSearchText.bind(this);
    this.focusSearchText = this.focusSearchText.bind(this);
    this.search = this.search.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  focusSearchText() {
    this.searchText.current.focus();
  }

  handleSearchText(value) {
    this.setState({ searchText: value });
  }

  search() {
    const { searchSubject } = this.state;
    this.setState({
      loading: true
    });
    if (searchSubject === "books") {
      getBooksFromApi(this.state.searchText).then(data => {
        console.log(data);
        this.setState({
          results: data,
          loading: false
        });
      });
    }
    if (searchSubject === "movies") {
      getMoviesFromApi(this.state.searchText).then(data => {
        console.log(data);
        this.setState({
          results: data,
          loading: false
        });
      });
    }

    if (searchSubject === "art") {
      getArtFromAPI(this.state.searchText).then(data => {
        console.log(data);
        this.setState({
          results: data,
          loading: false
        });
      });
    }
    // if (searchSubject === "music") {
    //   getMusicFromApi(this.state.searchText).then(data => {
    //     console.log(data);
    //     this.setState({
    //       results: data,
    //       loading: false
    //     });
    //   });
    // }
  }

  componentDidUpdate() {
    localStorage.set("searchText", this.state.searchText);
  }

  handleSelectChange(value) {
    this.setState({ searchSubject: value });
  }

  updateResults(index, item) {
    const newResults = this.state.results;
    newResults[index] = item;
    this.setState({ results: newResults });
  }

  render() {
    return (
      <Switch>
        <Route path="/search" exact>
          <SearchNewElem
            searchSubject={this.state.searchSubject}
            handleSelectChange={this.handleSelectChange}
            handleSearchText={this.handleSearchText}
            search={this.search}
          />
        </Route>

        <Route path="/search/results">
          <ResultsList
            items={this.state.results}
            userFavs={this.props.userFavs}
            notFoundMessage="No hay resultados con ese título"
            loading={this.state.loading}
            updateFavs={this.props.updateFavs}
            updateResults={this.updateResults}
          />
        </Route>
      </Switch>
    );
  }
}

export default SearchSection;
