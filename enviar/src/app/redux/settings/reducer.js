import {
    CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_ERROR
} from '../../../constants/actions';

const INIT_STATE = {
    data: false,
    error: null,
    loading: true
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD:
            return { ...state, loading: true };
        case CHANGE_PASSWORD_SUCCESS: 
            return { ...state, 
                        loading: false, 
                        data: action.payload
                    };
        case CHANGE_PASSWORD_ERROR:
            return { ...state, loading: false, error: action.payload};
        default: return { ...state };
    }
}