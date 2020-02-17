import React from "react";
import SearchSavedElem from "./SearchSavedElem";
import List from "./List";

class BooksSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      favBooks: []
    };
    this.searchText = React.createRef();
    this.handleSearchText = this.handleSearchText.bind(this);
    this.focusSearchText = this.focusSearchText.bind(this);
    // this.toggleFavourite = this.toggleFavourite.bind(this);
  }

  focusSearchText() {
    this.searchText.current.focus();
  }

  handleSearchText(value) {
    this.setState({ searchText: value });
  }

  // toggleFavourite(favId) {
  //   const favBook = this.state.books.find(book => book.id === favId);
  //   this.setState(function(prevState) {
  //     const favIndex = this.state.favBooks.findIndex(book => book.id === favId);
  //     if (favIndex === -1) {
  //       prevState.favBooks.push(favBook);
  //     } else {
  //       prevState.favBooks.splice(favIndex, 1);
  //     }
  //     return { favBooks: prevState.favBooks };
  //   });
  // }

  render() {
    return (
      <div className="main-section__wrapper">
        <SearchSavedElem
          searchText={this.searchText}
          handleSearchText={this.handleSearchText}
        />
        <div>
          <div className="main-section__header">
            <h1 className="main-section__header--title">Tus libros</h1>
            <div className="main-section__header--btns">
              <button className="main-section__header--btns-item">
                <i className="fas fa-filter"></i>{" "}
              </button>
            </div>
          </div>
          <List
            items={this.props.books}
            searchText={this.state.searchText}
            notFoundMessage="Aun no tienes libros guardados"
          />
        </div>
      </div>
    );
  }
}

export default BooksSection;
