import React from "react";
import SearchSavedElem from "./SearchSavedElem";
import List from "./List";
import CollapsibleSearch from "./CollapsibleSearch";

class GenericSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchIsOpen: false
    };
    this.searchText = React.createRef();
    this.handleSearchText = this.handleSearchText.bind(this);
    this.focusSearchText = this.focusSearchText.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  focusSearchText() {
    this.searchText.current.focus();
  }

  handleSearchText(value) {
    this.setState({ searchText: value });
  }

  toggleSearch() {
    const newState = !this.state.searchIsOpen;
    this.setState({ searchIsOpen: newState });
  }

  render() {
    const { title, items, removeFav } = this.props;
    return (
      <div className="main-section__wrapper">
        <div>
          <CollapsibleSearch
            title={title}
            items={items}
            isOpen={this.state.searchIsOpen}
            toggleSearch={this.toggleSearch}
          >
            <SearchSavedElem
              searchText={this.searchText}
              handleSearchText={this.handleSearchText}
            />
          </CollapsibleSearch>
          <List
            items={items}
            searchText={this.state.searchText}
            removeFav={removeFav}
          />
        </div>
      </div>
    );
  }
}

export default GenericSection;
