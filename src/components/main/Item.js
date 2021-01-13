import React from "react";

const Item = ({ item, removeFav }) => {
  const { title, authors, image, year, id } = item;
  let strAuthors = "";

  if (authors && authors.lenght > 1) {
    console.log("authors", authors)
    const formatAuthors = arr => {
      const lastAuth = arr.pop();
      return arr.lenght ? arr.join(", ") + " y " + lastAuth : lastAuth || "";
    };
    strAuthors = formatAuthors(authors);
  }

  function handleClickRemove() {
    removeFav(item);
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
          {authors !== undefined ? `${strAuthors}, ` : ``}
          {year}.
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
