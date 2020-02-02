import React from "react";
import books from "../../services/books";
import SearchSaved from "./SearchSaved";
import List from "./List";

class BooksSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      books: [],
      favBooks: []
    };
    this.searchText = React.createRef();
    this.handleSearchText = this.handleSearchText.bind(this);
    this.focusSearchText = this.focusSearchText.bind(this);
    this.toggleFavourite = this.toggleFavourite.bind(this);
  }

  componentDidMount() {
    this.setState({ books: books.results });
  }

  focusSearchText() {
    this.searchText.current.focus();
  }

  handleSearchText(value) {
    this.setState({ searchText: value });
  }

  toggleFavourite(favId) {
    const favBook = this.state.books.find(book => book.id === favId);
    this.setState(function(prevState) {
      const favIndex = this.state.favBooks.findIndex(book => book.id === favId);
      if (favIndex === -1) {
        prevState.favBooks.push(favBook);
      } else {
        prevState.favBooks.splice(favIndex, 1);
      }
      return { favBooks: prevState.favBooks };
    });
  }

  render() {
    return (
      <div>
        <SearchSaved
          searchText={this.searchText}
          handleSearchText={this.handleSearchText}
        />
        <div className="main-section__wrapper">
          <div className="main-section__header">
            <h1 className="main-section__header--title">Tus libros</h1>
            <div className="main-section__header--btns">
              <button className="main-section__header--btns-item">
                <i className="far fa-star"></i>
              </button>
            </div>
          </div>
          <List
            items={this.state.books}
            searchText={this.state.searchText}
            notFoundMessage="No hay resultados con ese título"
            toggleFavourite={this.toggleFavourite}
          />
        </div>
      </div>
    );
  }
}

export default BooksSection;
