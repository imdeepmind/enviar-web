import { combineReducers } from "redux";

import { reducer as formReducer} from 'redux-form';

import authReducer from './auth/reducer';
import homeReducer from './home/reducer';

export default combineReducers({
    form: formReducer,
    authReducer,
    homeReducer
});