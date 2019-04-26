import React from 'react';
import ReallySmoothScroll from 'really-smooth-scroll';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from './app/router/login';
import Home from './app/router/home';
import E404 from './app/router/e404';

ReallySmoothScroll.shim();
const baseUrl = process.env.PUBLIC_URL;

const PrivateRoute = ({ component: Component, ...rest }) => {
  let auth = localStorage.getItem('user');
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
    <Router basename={baseUrl}>
      <div className="App">
        <Switch>
          <Route path={'/login'} exact component={Login} />
          <PrivateRoute path={'/'} exact component={Home} />
          <Route component={E404} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
