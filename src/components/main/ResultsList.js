import React from "react";
import ResultsItem from "./ResultsItem";
import "../../styles/layout/_loader.scss";

const ResultsList = props => {
  const { items, notFoundMessage, loading, saveBook } = props;
  if (loading) {
    return (
      <div className="results-notFound__wrapper">
        <div className="lds-hourglass"></div>
        <div>Cargando...</div>
      </div>
    );
  } else {
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
                  <ResultsItem item={item} saveBook={saveBook} />
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="search-new--results-notFound__wrapper">
          <span>{notFoundMessage}</span>
        </div>
      );
    }
  }
};

export default ResultsList;
