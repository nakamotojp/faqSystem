import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch, Redirect 
} from 'react-router-dom';
import Menu from './Menu';
import Questions from './Questions';
import Ask from './Ask';

class App extends React.Component {

  render() {
    return (
      <Router>

        <Menu />
        <Switch>
          <Route exact path="/questions" component={Questions} />
          <Route exact path="/ask" component={Ask} />
          <Route exact path="/" component={() => (<Redirect to='/ask' />)} />
        </Switch>
      </Router>
    );
  }
}
export default App;
