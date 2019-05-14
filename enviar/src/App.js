import React from 'react';
import decode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import LoadingBar from 'react-redux-loading-bar';
import axios from 'axios';
import { createBrowserHistory } from 'history';
// import ReallySmoothScroll from 'really-smooth-scroll';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";

import Login from './app/router/login';
import Home from './app/router/home';
import CreatePost from './app/router/createPost';
import Users from './app/router/users';
import UserDetail from './app/router/userDetail';
import E404 from './app/router/e404';
import Me from './app/router/me';
import Edit from './app/router/edit';
import Settings from './app/router/settings';
import Messages from './app/router/messages';
import Chat from './app/router/chat';

import 'react-toastify/dist/ReactToastify.min.css'; 

import store from './app/redux/store';

/*
TODO: Need to add the attribution - 
<div>Icons made by <a href="https://www.freepik.com/?__hstc=57440181.34da643cb6a07b340fde999b532ce749.1556902993149.1556902993149.1557681941053.2&__hssc=57440181.5.1557681941053&__hsfp=1705634725" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
*/
// ReallySmoothScroll.shim();
const baseUrl = process.env.PUBLIC_URL;
const history = createBrowserHistory();

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

axios.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('user') ? localStorage.getItem('user') : "";
  return config;
});

axios.interceptors.response.use(
  response => response,
  error => {
      const {status} = error.response;
      if (status === 401) {
        store.dispatch(store.dispatch({
          type: 'LOGOUT_USER',
          payload: {history}
        }));
        //TODO: Need to fix this
        // history.push('/#login');
      }
      return Promise.reject(error);
 }
);

function App() {
  return (
    <Provider store={store} >
        <Router basename={baseUrl}>
        <div className="App">
          <LoadingBar style={{ backgroundColor: 'white', height: '3px', zIndex: "99999999999" }} />
          <Switch>
            <Route path={'/login'} exact component={Login} />
            <PrivateRoute path={'/'} exact component={Home} />
            <PrivateRoute path={'/post'} exact component={CreatePost} />
            <PrivateRoute path={'/users'} exact component={Users} />
            <PrivateRoute path={'/users/:username'} exact component={UserDetail} />
            <PrivateRoute path={'/me'} exact component={Me} />
            <PrivateRoute path={'/edit'} exact component={Edit} />
            <PrivateRoute path={'/settings'} exact component={Settings} />
            <PrivateRoute path={'/messages'} exact component={Messages} />
            <PrivateRoute path={'messages/:username'} exact component={Chat} />
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
