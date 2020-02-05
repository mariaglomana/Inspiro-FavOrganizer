import React from "react";
import "../styles/App.scss";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Landing from "./landing/Landing";
import MainApp from "./main/MainApp";
//import MenuAppBar from './main/MenuAppBar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={MainApp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
