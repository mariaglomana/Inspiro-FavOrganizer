import React from "react";

const ResultsItem = props => {
  const { item, index, updateFavs, updateResults } = props;
  const { title, authors, image, year, id, isSaved } = item;
  let strAuthors = "";

  if (authors !== undefined) {
    const formatAuthors = arr => {
      const lastAuth = arr.pop();
      return arr.lenght ? arr.join(", ") + " y " + lastAuth : lastAuth || "";
    };
    strAuthors = formatAuthors(authors);
  }

  const handleClickIcon = () => {
    item.isSaved = !isSaved;
    updateResults(index, item);
    updateFavs(item);
  };

  const classIcon = isSaved ? "fas fa-trash-alt" : "far fa-save";
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
          onClick={handleClickIcon}
        >
          <i className={classIcon}></i>
        </button>
        <h3 className="item__text--title">{title}</h3>
        <p className="item__text--detail">
          {authors !== undefined ? `${strAuthors}, ` : ``}
          {year}.
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
