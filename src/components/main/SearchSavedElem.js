import React from "react";

const SearchSavedElem = props => {
  const handleSearchSubmit = event => {
    event.preventDefault();
  };
  const handleSearchText = event => {
    props.handleSearchText(event.target.value);
  };

  return (
    <div className="search__wrapper">
      <form className="search-form__wrapper" onSubmit={handleSearchSubmit}>
        <label htmlFor="search" className="form__label"></label>
        <div className="search-inputText__wrapper">
          <i className="fas fa-search"></i>
          <input
            type="text"
            id="search"
            name="search"
            className="search-inputText__input"
            ref={props.searchText}
            onChange={handleSearchText}
            placeholder="Título"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchSavedElem;
