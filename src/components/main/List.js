import React from "react";
import Item from "./Item";

const List = props => {
  const { items, searchText, notFoundMessage, toggleFavourite } = props;

  items.filter(
    item =>
      searchText === "" ||
      item.title.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(items);
  //no se hace bien el filtro del includes .. :(

  if (items.length > 0) {
    return (
      //PENDIENTE: ORDENAR ALFABÉTICAMENTE
      <ul className="list__wrapper">
        {items.map(item => {
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
