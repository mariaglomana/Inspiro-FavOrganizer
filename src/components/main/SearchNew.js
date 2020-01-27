import React from "react";

class SearchNew extends React.Component {
  render() {
    return (
      <div className="search-new__wrapper">
        <form className="search-new-form__wrapper">
          <label htmlFor="search-new"></label>
          <div className="search-new-input__wrapper">
            <i className="fas fa-search"></i>
            <input
              type="text"
              id="search-new"
              name="search-new"
              className="search-new-input__text"
            />
          </div>
          <input type="submit" className="form__btn" value="Buscar" />
        </form>
      </div>
    );
  }
}

export default SearchNew;
