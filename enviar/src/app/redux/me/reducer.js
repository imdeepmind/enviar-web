import {
    GET_ME, GET_ME_SUCCESS, GET_ME_ERROR
} from '../../../constants/actions';

const INIT_STATE = {
    me: {},
    error: null,
    loading: true
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
        default: return { ...state };
    }
}