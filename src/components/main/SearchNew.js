import React from "react";

class SearchNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    this.props.handleSelectChange(event.target.value);
  }

  render() {
    return (
      <div className="search-new__wrapper">
        <form className="search-new__form-wrapper">
          <div className="search-new__select-wrapper">
            <label
              htmlFor="search-new__select"
              className="search-new__select-label"
            >
              Busco
            </label>
            <select
              id="searchSubject"
              name="searchSubject"
              className="search-new__select-options"
              onChange={this.handleSelectChange}
            >
              <option selected disabled value="0">
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
            />
          </div>
          <input type="submit" className="search-new__btn" value="Inspírame" />
        </form>
      </div>
    );
  }
}

export default SearchNew;
