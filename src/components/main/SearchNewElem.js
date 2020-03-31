import React from "react";
import { Link } from "react-router-dom";

const SearchNewElem = ({
  handleSearchText,
  search,
  handleSelectChange,
  searchText
  // searchTextRef
}) => {
  return (
    <div className="search-new__wrapper">
      <form
        className="search-new__form-wrapper"
        onSubmit={e => e.preventDefault()}
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
            onChange={e => handleSelectChange(e.target.value)}
            defaultValue="0"
          >
            <option disabled value="0">
              Busco
            </option>
            <option value="art">Arte</option>
            <option value="books">Libros</option>
            {/* <option value="music">Música</option> */}
            <option value="movies">Películas</option>
          </select>
        </div>
        <label htmlFor="search-new"></label>
        <div className="search-new__input-wrapper">
          <input
            type="text"
            id="search-new"
            name="search-new"
            className="search-new__input-text"
            value={searchText}
            // ref={searchTextRef}
            onChange={e => handleSearchText(e.target.value)}
            placeholder="Título"
          />
        </div>
        <Link to="/search/results">
          <input
            type="submit"
            className="search-new__btn"
            value="Inspírame"
            onClick={() => search()}
          />
        </Link>
      </form>
    </div>
  );
};

export default SearchNewElem;
