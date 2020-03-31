import React from "react";

const ResultsItem = props => {
  const { item, isSaved, updateFavs } = props;
  const { title, authors, image, year, id } = item;
  let strAuthors = "";

  if (authors !== undefined && Array.isArray(authors)) {
    const formatAuthors = arr => {
      const authorsArr = [...arr];
      const lastAuth = authorsArr.pop();
      return authorsArr.lenght
        ? authorsArr.join(", ") + " y " + lastAuth
        : lastAuth || "";
    };
    strAuthors = formatAuthors(authors);
  }

  const classIcon = isSaved ? "fas fa-trash-alt" : "far fa-star";
  const classItem = isSaved ? "savedItem" : "newItem";

  return (
    <div className={`item__wrapper ${classItem}`}>
      <div className="item__image--wrapper">
        <img src={image} alt={title} className="item__image" />
      </div>
      <div className="item__text--wrapper">
        <button
          className="item__text--fav-btn"
          id={id}
          onClick={() => updateFavs(item, !isSaved)}
        >
          <i className={classIcon}></i>
        </button>
        <h3 className="item__text--title">{title}</h3>
        <p className="item__text--detail">
          {authors !== undefined ? `${strAuthors}, ` : ``}
          {year !== undefined ? `${year}, ` : ``}
        </p>
        <small className="item__text--link">
          {/* <a href="google.com" target="_blank"> */}
          Ver detalle
          {/* </a> */}
        </small>
      </div>
    </div>
  );
};

export default ResultsItem;
