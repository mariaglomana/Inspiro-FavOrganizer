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
          <div className="main-section__header">
            <h1 className="main-section__header--title">Tus libros</h1>
            <div className="main-section__header--btns">
              <button className="main-section__header--btns-item">
                <i class="far fa-star"></i>
              </button>
              <button className="main-section__header--btns-item">
                <i class="fas fa-home"></i>{" "}
              </button>
            </div>
          </div>
          <List items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default Books;
