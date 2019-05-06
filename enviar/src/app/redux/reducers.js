import { combineReducers } from "redux";

import { reducer as formReducer} from 'redux-form';

import { loadingBarReducer } from 'react-redux-loading-bar'

import authReducer from './auth/reducer';
import homeReducer from './home/reducer';
import userReducer from './users/reducer';

export default combineReducers({
    form: formReducer,
    authReducer,
    homeReducer,
    userReducer,



    loadingBar: loadingBarReducer,
});