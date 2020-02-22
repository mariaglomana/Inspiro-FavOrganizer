import React from "react";

const ResultsItem = props => {
  const { title, authors, imageSmall, year, id, isSaved } = props.item;
  // const date = year.slice(0, 4);

  const formatAuthors = arr => {
    const lastAuth = arr.pop();
    return arr.lenght ? arr.join(", ") + " y " + lastAuth : lastAuth || "";
  };
  const strAuthors = formatAuthors(authors);

  const handleClickIcon = () => {
    // this.setState((prevState, props) => ({
    //   backgroundColor: prevState.backgroundColor === 'blue' ? 'red' : 'blue'
    props.item.isSaved = !isSaved;
    props.updateResults(props.index, props.item);
    props.updateFav(props.item);
  };

  const classIcon = isSaved ? "fas fa-trash-alt" : "far fa-save";
  const classItem = isSaved ? "savedItem" : "newItem";

  return (
    <div className={`item__wrapper ${classItem}`}>
      <div className="item__image--wrapper">
        <img src={imageSmall} alt={title} className="item__image" />
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
