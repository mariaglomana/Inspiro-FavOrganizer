import React from "react";

const DetailBook = ({ match }) => {
  // const { title, authors, imageSmall, year } = props.item;
  console.log(match);
  return (
    <div>
      <p>book detail</p>
    </div>
    // <div className="item__wrapper">
    //   <div>
    //     <img src={imageSmall} alt={title} className="item__image" />
    //   </div>
    //   <div className="item__text--wrapper">
    //     <h3 className="item__text--title">{title}</h3>
    //     <p className="item__text--detail">
    //       {authors}, {year}.
    //     </p>
    //   </div>
    // </div>
  );
};

export default DetailBook;
