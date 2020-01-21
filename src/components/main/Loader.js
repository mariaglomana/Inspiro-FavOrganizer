import React from "react";

function Loader(props) {
  return props.isLoading
    ? <div className="loading loading--fixed" />
    : null;
}

export default Loader;
