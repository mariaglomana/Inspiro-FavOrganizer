import React from "react";

const Item = props => {
  const { title, author, imageSmall, year, id, link } = props.item;
  const goodreadsRoute = `https://www.goodreads.com/book/show/${link}`;

  function toggleFavourite() {
    props.toggleFavourite(id);
  }
  return (
    <div className="item__wrapper">
      <div>
        <img src={imageSmall} alt={title} className="item__image" />
      </div>
      <div className="item__text--wrapper">
        <button
          className="item__text--fav-btn"
          id={id}
          onClick={toggleFavourite}
        >
          <i className="fas fa-star"></i>
        </button>
        <h3 className="item__text--title">{title}</h3>
        <p className="item__text--detail">
          {author}, {year}.
        </p>
        <small className="item__text--link">
          <a href={goodreadsRoute} target="_blank">
            Ver detalle
          </a>
        </small>
      </div>
    </div>
  );
};

export default Item;
