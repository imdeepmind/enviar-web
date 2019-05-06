import React from 'react';
import decode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import LoadingBar from 'react-redux-loading-bar'
// import ReallySmoothScroll from 'really-smooth-scroll';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";

import Login from './app/router/login';

import Home from './app/router/home';
import CreatePost from './app/router/createPost';

import Users from './app/router/users';
import UserDetail from './app/router/userDetail';

import E404 from './app/router/e404';

import 'react-toastify/dist/ReactToastify.min.css'; 

import store from './app/redux/store';

// ReallySmoothScroll.shim();
const baseUrl = process.env.PUBLIC_URL;

const isTokenExpired = () => {
  const token = localStorage.getItem("user");
  try {
    const date = new Date(0);
    const decoded = decode(token);
    date.setUTCSeconds(decoded.exp);
    return date.valueOf() > new Date().valueOf();
  } catch (err) {
    return false;
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      isTokenExpired()
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
          <LoadingBar
            style={{ backgroundColor: 'black', height: '3px' }} 
          />
          <Switch>
            <Route path={'/login'} exact component={Login} />
            <PrivateRoute path={'/'} exact component={Home} />
            <PrivateRoute path={'/post'} exact component={CreatePost} />
            <PrivateRoute path={'/users'} exact component={Users} />
            <PrivateRoute path={'/users/:username'} exact component={UserDetail} />
            <Route component={E404} />
          </Switch>
          <ToastContainer 
            position="bottom-left"
            hideProgressBar={true}
            autoClose={2000}
          />
          
        </div>
      </Router>
    </Provider>
  );
}

export default App;
