import React from "react";

const CollapsibleSearch = props => {
  const { items, isOpen, toggleSearch, children } = props;
  const iconStyling = isOpen ? "fas fa-home" : "fas fa-filter";

  function handleClick() {
    toggleSearch();
  }
  return (
    <React.Fragment>
      <div className="main-section__header">
        <h1 className="main-section__header--title">Tus libros</h1>
        {items.length > 0 ? (
          <div className="main-section__header--btns">
            <button
              className="main-section__header--btns-item"
              onClick={handleClick}
            >
              <i className={iconStyling}></i>
            </button>
          </div>
        ) : null}
      </div>
      {isOpen && items.length > 0 ? (
        <React.Fragment>{children}</React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default CollapsibleSearch;
