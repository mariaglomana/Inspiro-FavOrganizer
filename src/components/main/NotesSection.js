import React from "react";

const NotesSection = () => {
  const divStyle = {
    height: "72vh",
    backgroundColor: "#dadee8",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };
  const iStyle = {
    padding: "15px"
  };
  const note = {
    color: "#dadee8"
  };
  return (
    <div style={divStyle}>
      <h2>Sección para anotaciones en construcción</h2>
      <div>
        <i className="fas fa-pencil-ruler" style={iStyle}></i>
        <i className="fas fa-paint-roller" style={iStyle}></i>
        <i className="fas fa-wrench" style={iStyle}></i>
      </div>
      <h2>Disculpen las molestias</h2>
      <h2 style={note}>Sección para anotaciones en construcción</h2>
    </div>
  );
};

export default NotesSection;
