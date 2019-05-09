import {
    CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_ERROR
} from '../../../constants/actions';

const INIT_STATE = {
    success: false,
    error: null,
    loading: true
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CREATE_POST:
            return { ...state, loading: true };
        case CREATE_POST_SUCCESS:
            return { ...state, 
                loading: false, 
                success: true,
                error: null
            };
        case POSTS_ERROR:
            return { ...state, 
                loading: false, 
                success: false,
                error: action.payload
            };
        default: return { ...state };
    }
}