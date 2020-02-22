import React from "react";
import { Link } from "react-router-dom";

class SearchNewElem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleClickSearchBtn = this.handleClickSearchBtn.bind(this);
  }

  handleSearchSubmit(event) {
    event.preventDefault();
  }
  handleSearchText(event) {
    this.props.handleSearchText(event.target.value);
  }

  handleClickSearchBtn() {
    this.props.search();
  }

  handleSelectChange(event) {
    this.props.handleSelectChange(event.target.value);
  }

  render() {
    return (
      <div className="search-new__wrapper">
        <form
          className="search-new__form-wrapper"
          onSubmit={this.handleSearchSubmit}
        >
          <div className="search-new__select-wrapper">
            <label
              htmlFor="search-new__select"
              className="search-new__select-label"
            />
            <select
              id="searchSubject"
              name="searchSubject"
              className="search-new__select-options"
              onChange={this.handleSelectChange}
              defaultValue="0"
            >
              <option disabled value="0">
                Busco
              </option>

              <option
                value="books"
                className={`${
                  this.props.searchSubject === "books"
                    ? "search-new__select-options--selected"
                    : ""
                }`}
              >
                Libros
              </option>
              <option value="music">Música</option>
              <option value="films">Películas</option>
            </select>
          </div>
          <label htmlFor="search-new"></label>
          <div className="search-new__input-wrapper">
            <input
              type="text"
              id="search-new"
              name="search-new"
              className="search-new__input-text"
              ref={this.props.searchText}
              onChange={this.handleSearchText}
              placeholder="Título"
            />
          </div>
          <Link to="/search/results">
            <input
              type="submit"
              className="search-new__btn"
              value="Inspírame"
              onClick={this.handleClickSearchBtn}
            />
          </Link>
        </form>
      </div>
    );
  }
}

export default SearchNewElem;
