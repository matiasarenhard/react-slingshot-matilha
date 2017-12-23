/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
//import UserSalving from './containers/UserSalving';
import UserPage from './UserPage';

//import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div className="container text-center">
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}> <button type="button" className="btn btn-outline-dark">Home</button></NavLink>
            {' | '}
          <NavLink exact to="/create" activeStyle={activeStyle}><button type="button" className="btn btn-outline-dark">Login</button></NavLink>
          {' | '}
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/create" component={UserPage} />
        </Switch>
      </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
