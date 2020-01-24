import React from "react";
//import Loader from "./Loader";

class SearchNew extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="search-new__wrapper">
        {/* <Loader isLoading={this.props.loading} /> */}
        <form
          className="search-new-form__wrapper"
          // onSubmit={this.formHandle}
        >
          <label htmlFor="search-new"></label>
          <div className="search-new-input__wrapper">
            <i class="fas fa-search"></i>
            <input
              type="text"
              id="search-new"
              name="search-new"
              className="search-new-input__text"
              // value={this.props.search-newText}
              // onChange={this.handleSearch-new}
            />
          </div>
          <input type="submit" className="form__btn" value="Buscar" />
        </form>
      </div>
    );
  }
}

export default SearchNew;
