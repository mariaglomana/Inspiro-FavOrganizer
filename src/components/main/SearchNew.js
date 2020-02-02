import React from "react";

class SearchNew extends React.Component {
  render() {
    return (
      <div className="search-new__wrapper">
        <form className="search-new__form-wrapper">
          <div className="search-new__select-wrapper">
            <label htmlFor="search-new__select">Busco</label>
            <select
              id="search-new__select"
              name="search-new__select"
              className="search-new-form__select-options"
            >
              <option value="Libros">Libros</option>
              <option value="Música">Música</option>
              <option value="Películas">Películas</option>
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
