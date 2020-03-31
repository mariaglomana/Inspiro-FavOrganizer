import React from "react";
import ResultsItem from "./ResultsItem";
import "../../styles/layout/_loader.scss";
// import { Link } from "react-router-dom";

const ResultsList = props => {
  const {
    items,
    favsSearchSubject,
    notFoundMessage,
    loading,
    updateFavs
  } = props;

  if (loading)
    return (
      <div className="results-notFound__wrapper">
        <div className="lds-hourglass"></div>
        <div>Cargando...</div>
      </div>
    );

  if (items.length > 0)
    return (
      <div className="main-section__wrapper">
        <div className="main-section__header">
          <h1 className="main-section__header--title">Resultados</h1>
        </div>
        <ul className="list__wrapper">
          {items.map(function(item) {
            const isSaved =
              favsSearchSubject.filter(favourite => favourite.id === item.id)
                .length > 0;

            return (
              <li key={item.id}>
                {/* <Link to={`/book/${item.id}`} className=""> */}
                <ResultsItem
                  item={item}
                  isSaved={isSaved}
                  updateFavs={updateFavs}
                />
                {/* </Link> */}
              </li>
            );
          })}
        </ul>
      </div>
    );

  return (
    <div className="results-notFound__wrapper">
      <span>{notFoundMessage}</span>
    </div>
  );
};

export default ResultsList;
