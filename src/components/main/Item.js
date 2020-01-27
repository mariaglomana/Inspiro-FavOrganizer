import React from "react";

const Item = props => {
  const { title, author, imageSmall, year } = props.item;
  return (
    <div className="item__wrapper">
      <div>
        <img src={imageSmall} alt={title} className="item__image" />
      </div>
      <div className="item__text--wrapper">
        <button className="item__text--fav-btn">
          <i className="far fa-star"></i>
        </button>
        <h3 className="item__text--title">{title}</h3>
        <p className="item__text--detail">
          {author}, {year}.
        </p>
      </div>
    </div>
  );
};

export default Item;
