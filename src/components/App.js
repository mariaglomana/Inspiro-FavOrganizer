import React from 'react';
import '../styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './landing/Landing';
import Inspiro from './inspiro/Inspiro';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/inspiro" component={Inspiro} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

