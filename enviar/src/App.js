import React from 'react';
import axios from 'axios';
// import ReallySmoothScroll from 'really-smooth-scroll';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";

import Login from './app/router/login';
import Home from './app/router/home';
import Users from './app/router/users';
import UserDetail from './app/router/userDetail';
import E404 from './app/router/e404';

import {VERIFY} from './constants/endpoints';

import store from './app/redux/store';


// ReallySmoothScroll.shim();
const baseUrl = process.env.PUBLIC_URL;

const PrivateRoute = ({ component: Component, ...rest }) => {
  //TODO: Need to connect it with Redux
  let auth = false;

  const config = {
      headers: { 'Authorization': localStorage.getItem('user') }
  };

  axios.get(VERIFY, config).then(resp => {
    auth = true;
  })
  .catch(err => {
    auth = false;
  })

  return (
    <Route {...rest} render={(props) => (
      auth
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
}

function App() {
  return (
    <Provider store={store} >
        <Router basename={baseUrl}>
        <div className="App">
          <Switch>
            <Route path={'/login'} exact component={Login} />
            <PrivateRoute path={'/'} exact component={Home} />
            <PrivateRoute path={'/users'} exact component={Users} />
            <PrivateRoute path={'/users/:username'} exact component={UserDetail} />
            <Route component={E404} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
