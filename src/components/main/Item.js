import React from "react";

const Item = props => {
  const { title, authors, image, year, id } = props.item;
  // const goodreadsRoute = `https://www.goodreads.com/book/show/${link}`;

  function handleClickRemove() {
    props.removeFav(props.item);
  }
  return (
    <div className="item__wrapper">
      <div>
        <img src={image} alt={title} className="item__image" />
      </div>
      <div className="item__text--wrapper">
        <button
          className="item__text--fav-btn"
          id={id}
          onClick={handleClickRemove}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        <h3 className="item__text--title">{title}</h3>
        <p className="item__text--detail">
          {authors}, {year}.
        </p>
        <small className="item__text--link">
          {/* <a href={goodreadsRoute} target="_blank"> */}
          Ver detalle
          {/* </a> */}
        </small>
      </div>
    </div>
  );
};

export default Item;
