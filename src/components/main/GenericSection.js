import React, { useState /*useRef, useEffect*/ } from "react";
import SearchSavedElem from "./SearchSavedElem";
import List from "./List";
import CollapsibleSearch from "./CollapsibleSearch";

const GenericSection = ({ title, items, removeFav }) => {
  const [searchText, setSearchText] = useState("");
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  // const searchTextRef = useRef(null);

  // useEffect(() => {
  //   searchTextRef.current.focus();
  // }, [searchTextRef]);

  return (
    <div className="main-section__wrapper">
      <div>
        <CollapsibleSearch
          title={title}
          items={items}
          isOpen={searchIsOpen}
          toggleSearch={() => setSearchIsOpen(!searchIsOpen)}
        >
          <SearchSavedElem
            searchText={searchText}
            handleSearchText={value => setSearchText(value)}
            // searchTextRef={searchTextRef}
          />
        </CollapsibleSearch>
        <List items={items} searchText={searchText} removeFav={removeFav} />
      </div>
    </div>
  );
};

export default GenericSection;
