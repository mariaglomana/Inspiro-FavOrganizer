import React from 'react';
import '../styles/App.scss';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import getDataFromServer from '../services/data';

import Landing from './landing/Landing';
import Main from './main/Main';
//import MenuAppBar from './main/MenuAppBar';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    getDataFromServer();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

