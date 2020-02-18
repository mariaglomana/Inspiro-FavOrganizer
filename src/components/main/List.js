import React from "react";
import { Link } from "react-router-dom";
import { ModalRoute } from "react-router-modal";
import Item from "./Item";
import DetailBook from "./DetailBook";

const List = props => {
  const { items, searchText, notFoundMessage, removeFavBook, match } = props;

  const filteredItems = items.filter(
    item =>
      searchText === "" ||
      item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  if (filteredItems.length > 0) {
    return (
      //PENDIENTE: ORDENAR ALFABÉTICAMENTE
      <React.Fragment>
        <ul className="list__wrapper">
          {filteredItems.map(item => {
            return (
              <li key={item.id}>
                <Link to={`${match.url}/books/${item.id}`}>
                  <Item item={item} removeFavBook={removeFavBook} />
                </Link>
              </li>
            );
          })}
        </ul>
        <ModalRoute
          path={`${match.url}/books/:id`}
          parentPath={match.url}
          component={DetailBook}
        />
      </React.Fragment>
    );
  } else {
    return (
      <div className="results-notFound__wrapper">
        <span>{notFoundMessage}</span>
      </div>
    );
  }
};

export default List;
