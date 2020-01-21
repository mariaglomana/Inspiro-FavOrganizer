import React from "react";
import books from "../../services/books";
import Search from "./Search";
import List from "./List";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState({ items: books.results });
  }

  render() {
    console.log(this.state.items);

    return (
      <div>
        <Search />
        <div className="main-section__wrapper">
          <h1 className="main-section__title">Tus libros</h1>
          <List items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default Books;
