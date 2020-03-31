import React from "react";
import "../styles/App.scss";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Landing from "./landing/Landing";
import MainApp from "./main/MainApp";

export const ConfigContext = React.createContext();

const configValue = {
  showLogIn: false
};

const App = () => {
  return (
    <ConfigContext.Provider value={configValue}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={MainApp} />
          </Switch>
        </div>
      </Router>
    </ConfigContext.Provider>
  );
};

export default App;
