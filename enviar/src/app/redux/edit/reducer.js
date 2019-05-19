import {
    EDIT_DP, EDIT_DP_SUCCESS, EDIT_DP_ERROR, EDIT_INFO, EDIT_INFO_ERROR, EDIT_INFO_SUCCESS
} from '../../../constants/actions';

const INIT_STATE = {
    updatedDp: null,
    updateInfo: null,
    error: null,
    loading: true
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case EDIT_DP:
            return { ...state, loading: true };
        case EDIT_DP_SUCCESS: 
            return { ...state, 
                        loading: false, 
                        updatedDp: action.payload
                    };
        case EDIT_DP_ERROR:
            return { ...state, loading: false, error: action.payload};
        case EDIT_INFO:
            return { ...state, loading: true };
        case EDIT_INFO_SUCCESS: 
            return { ...state, 
                        loading: false, 
                        updateInfo: action.payload
                    };
        case EDIT_INFO_ERROR:
            return { ...state, loading: false, error: action.payload};
        default: return { ...state };
    }
}