import React from "react";
import ResultsItem from "./ResultsItem";

const ResultsList = props => {
  const { items, notFoundMessage, toggleFavourite } = props;

  if (items.length > 0) {
    return (
      <div className="main-section__wrapper">
        <div className="main-section__header">
          <h1 className="main-section__header--title">Resultados</h1>
        </div>
        <ul className="list__wrapper">
          {items.map(item => {
            return (
              <li key={item.id}>
                <ResultsItem
                  item={item}
                  // toggleFavourite={toggleFavourite}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <span>{notFoundMessage}</span>
      </div>
    );
  }
};

export default ResultsList;
