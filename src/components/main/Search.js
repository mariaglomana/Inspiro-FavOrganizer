import React from "react";
//import Loader from "./Loader";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search__wrapper">
        {/* <Loader isLoading={this.props.loading} /> */}
        <form
          className="search-form__wrapper"
          // onSubmit={this.formHandle}
        >
          <label htmlFor="search" className="form__label"></label>
          <div className="search-inputText__wrapper">
            <i class="fas fa-search"></i>
            <input
              type="text"
              id="search"
              name="search"
              className="form__input-text"
              // value={this.props.searchText}
              // onChange={this.handleSearch}
            />
          </div>
          <input type="submit" className="form__btn" value="Buscar" />
        </form>
      </div>
    );
  }
}

export default Search;
