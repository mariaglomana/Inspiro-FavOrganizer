import React from "react";
import Item from "./Item";

const List = props => {
  const { items, searchText, notFoundMessage, toggleFavourite } = props;

  const filteredItems = items.filter(
    item =>
      searchText === "" ||
      item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  if (filteredItems.length > 0) {
    return (
      //PENDIENTE: ORDENAR ALFABÉTICAMENTE
      <ul className="list__wrapper">
        {filteredItems.map(item => {
          return (
            <li key={item.id}>
              <Item item={item} toggleFavourite={toggleFavourite} />
            </li>
          );
        })}
      </ul>
    );
  } else {
    return (
      <div>
        <span>{notFoundMessage}</span>
      </div>
    );
  }
};

export default List;
