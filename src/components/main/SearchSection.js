import React from "react";
import SearchNew from "./SearchNew";
import ResultsList from "./ResultsList";
import getDataFromApi from "../../services/api";
import localStorage from "../../localStorage/index";

// import books from "../../services/books";

class SearchSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchSubject: "books",
      loading: false,
      results: []
    };
    this.searchText = React.createRef();
    this.handleSearchText = this.handleSearchText.bind(this);
    this.focusSearchText = this.focusSearchText.bind(this);
    this.search = this.search.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  focusSearchText() {
    this.searchText.current.focus();
  }

  handleSearchText(value) {
    this.setState({ searchText: value });
  }

  search() {
    this.setState({
      loading: true
    });

    getDataFromApi(this.state.searchText);

    // getDataFromApi(this.state.searchText).then(data => {
    //   this.setState({
    //     results: data,
    //     loading: false
    //   });
    // });
  }

  componentDidUpdate() {
    localStorage.set("searchText", this.state.searchText);
  }

  handleSelectChange(value) {
    this.setState({ searchSubject: value });
  }

  render() {
    return (
      <React.Fragment>
        <SearchNew
          searchSubject={this.state.searchSubject}
          handleSelectChange={this.handleSelectChange}
          handleSearchText={this.handleSearchText}
          search={this.search}
        />
        <ResultsList
          items={this.props.userFavs.books}
          notFoundMessage="No hay resultados con ese título"
        />
      </React.Fragment>
    );
  }
}

export default SearchSection;
