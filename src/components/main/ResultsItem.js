import React from "react";

const ResultsItem = props => {
  const { title, authors, imageSmall, year, id } = props.item;
  // const date = year.slice(0, 4);

  const formatAuthors = arr => {
    const lastAuth = arr.pop();
    return arr.lenght ? arr.join(", ") + " y " + lastAuth : lastAuth || "";
  };
  const strAuthors = formatAuthors(authors);

  const handleClickSaveBook = () => {
    props.saveBook(props.item);
  };

  return (
    <div className="item__wrapper">
      <div className="item__image--wrapper">
        <img src={imageSmall} alt={title} className="item__image" />
      </div>
      <div className="item__text--wrapper">
        <button
          className="item__text--fav-btn"
          id={id}
          onClick={handleClickSaveBook}
        >
          <i className="far fa-save"></i>
        </button>
        <h3 className="item__text--title">{title}</h3>
        <p className="item__text--detail">
          {strAuthors}, {year}.
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
