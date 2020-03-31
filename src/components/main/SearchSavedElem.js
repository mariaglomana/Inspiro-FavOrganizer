import React from "react";

const SearchSavedElem = ({
  handleSearchText,
  searchText /*searchTextRef*/
}) => {
  return (
    <div className="search__wrapper">
      <form className="search-form__wrapper" onSubmit={e => e.preventDefault()}>
        <label htmlFor="search" className="form__label"></label>
        <div className="search-inputText__wrapper">
          <i className="fas fa-search"></i>
          <input
            type="text"
            id="search"
            name="search"
            className="search-inputText__input"
            value={searchText}
            // ref={searchTextRef}
            onChange={e => handleSearchText(e.target.value)}
            placeholder="Título"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchSavedElem;
