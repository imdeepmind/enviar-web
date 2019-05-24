import {
    GET_ME, GET_ME_SUCCESS, GET_ME_ERROR, 
    GET_FOLLOWERS_LIST, GET_FOLLOWERS_LIST_SUCCESS, GET_FOLLOWERS_LIST_ERROR, 
    GET_FOLLOWING_LIST, GET_FOLLOWING_LIST_ERROR, GET_FOLLOWING_LIST_SUCCESS,
    GET_BLOCKED_LIST, GET_BLOCKED_LIST_ERROR, GET_BLOCKED_LIST_SUCCESS
} from '../../../constants/actions';

const INIT_STATE = {
    me: {},
    followers: [],
    following: [],
    blocked: [],
    error: null,
    errorSmall: null,
    loading: true,
    loadingSmall: true
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_ME:
            return { ...state, loading: true };
        case GET_ME_SUCCESS: 
            return { ...state, 
                        loading: false, 
                        me: action.payload
                    };
        case GET_ME_ERROR:
            return { ...state, loading: false, error: action.payload};
        
        case GET_FOLLOWERS_LIST:
            return { ...state, loadingSmall: true };
        case GET_FOLLOWERS_LIST_SUCCESS: 
            return { ...state, 
                        loadingSmall: false, 
                        followers: action.payload
                    };
        case GET_FOLLOWERS_LIST_ERROR:
            return { ...state, loadingSmall: false, errorSmall: action.payload};

        case GET_FOLLOWING_LIST:
            return { ...state, loadingSmall: true };
        case GET_FOLLOWING_LIST_SUCCESS: 
            return { ...state, 
                        loadingSmall: false, 
                        following: action.payload
                    };
        case GET_FOLLOWING_LIST_ERROR:
            return { ...state, loadingSmall: false, errorSmall: action.payload};

        case GET_BLOCKED_LIST:
            return { ...state, loadingSmall: true };
        case GET_BLOCKED_LIST_SUCCESS: 
            return { ...state, 
                        loadingSmall: false, 
                        blocked: action.payload
                    };
        case GET_BLOCKED_LIST_ERROR:
            return { ...state, loadingSmall: false, errorSmall: action.payload};
            
        default: return { ...state };
    }
}