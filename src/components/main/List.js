import React from "react";
import Item from "./Item";

const List = props => {
  const { items, searchText, removeFav } = props;
  // const varFiltering = title;

  const notFoundMessage =
    items.length > 0
      ? "Ningún resultado encontrado para ese título"
      : `Aun no tienes elementos guardados`;

  const filteredItems = items
    .filter(
      item =>
        searchText === "" ||
        item.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort(function(a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });

  if (filteredItems.length > 0)
    return (
      <ul className="list__wrapper">
        {filteredItems.map(item => {
          return (
            <li key={item.id}>
              <Item item={item} removeFav={removeFav} />
            </li>
          );
        })}
      </ul>
    );

  return (
    <div className="results-notFound__wrapper">
      <span>{notFoundMessage}</span>
    </div>
  );
};

export default List;
