import React from "react";
import Item from "./Item";

const List = props => {
  return (
    <ul>
      {props.items.map(item => {
        return (
          <li key={item.id}>
            <Item item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
