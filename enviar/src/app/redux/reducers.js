import { combineReducers } from "redux";

import { reducer as formReducer} from 'redux-form';

import { loadingBarReducer } from 'react-redux-loading-bar'

import authReducer from './auth/reducer';
import homeReducer from './home/reducer';
import userReducer from './users/reducer';
import createPostReducer from './users/reducer';
import chatsReducer from './chats/reducer';


const appReducer = combineReducers({
    form: formReducer,
    authReducer,
    homeReducer,
    userReducer,
    createPostReducer,
    chatsReducer,


    loadingBar: loadingBarReducer,
});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }
    
    return appReducer(state, action)
}

export default rootReducer;