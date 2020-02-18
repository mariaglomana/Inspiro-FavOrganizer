import React from "react";

const DetailBook = props => {
  const { title, authors, imageSmall, year } = props.item;

  return (
    <div className="item__wrapper">
      <div>
        <img src={imageSmall} alt={title} className="item__image" />
      </div>
      <div className="item__text--wrapper">
        <h3 className="item__text--title">{title}</h3>
        <p className="item__text--detail">
          {authors}, {year}.
        </p>
      </div>
    </div>
  );
};

export default DetailBook;
