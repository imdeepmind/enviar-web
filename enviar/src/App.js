import React from 'react';
import decode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import LoadingBar from 'react-redux-loading-bar';
import axios from 'axios';
// import ReallySmoothScroll from 'really-smooth-scroll';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";

import Login from './app/router/login';
import Register from './app/router/register';
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
import Support from './app/router/support';
import Contributions from './app/router/contributions';

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

axios.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('user') ? localStorage.getItem('user') : "";
  return config;
});

// This cant be used
// axios.interceptors.response.use(
//   response => response,
//   error => {
//       const {status} = error.response;
//       if (status === 401) {
//         store.dispatch(store.dispatch({
//           type: 'LOGOUT_USER',
//           payload: {history}
//         }));
//         //TODO: Need to fix this
//         // history.push('/#login');
//       }
//       return Promise.reject(error);
//  }
// );

function App() {
  return (
    <Provider store={store} >
        <Router basename={baseUrl}>
        <div className="App">
          <LoadingBar style={{ backgroundColor: 'white', height: '3px', zIndex: "99999999999" }} />
          <Switch>
            <Route path={'/login'} exact component={Login} />
            <Route path={'/register'} exact component={Register} />
            <PrivateRoute path={'/'} exact component={Home} />
            <PrivateRoute path={'/post'} exact component={CreatePost} />
            <PrivateRoute path={'/users'} exact component={Users} />
            <PrivateRoute path={'/users/:username'} exact component={UserDetail} />
            <PrivateRoute path={'/me'} exact component={Me} />
            <PrivateRoute path={'/edit'} exact component={Edit} />
            <PrivateRoute path={'/settings'} exact component={Settings} />
            <PrivateRoute path={'/messages'} exact component={Messages} />
            <PrivateRoute path={'/messages/:username'} exact component={Chat} />
            <Route path={'/support'} exact component={Support} />
            <Route path={'/contributors'} exact component={Contributions} />
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
