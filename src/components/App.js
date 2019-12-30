import React from 'react';
import '../styles/App.scss';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing/Landing';
import Main from './main/Main';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/landing" component={Landing} />
          <Route path="/desktop" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;

