import {
    GET_CONVERSATION, GET_CONVERSATION_SUCCESS, GET_CONVERSATION_ERROR, GET_ALL_PEOPLES, GET_ALL_PEOPLES_SUCCESS, GET_ALL_PEOPLES_ERROR
} from '../../../constants/actions';

const INIT_STATE = {
    chats: [],
    error: null,
    loading: true,
    more: false,
    friend: {},
    peoples: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_CONVERSATION:
            return { ...state, loading: true };
        case GET_CONVERSATION_SUCCESS:
        return { ...state, 
            loading: false, 
            chats: [...state.chats, ...action.payload], 
            more: action.payload.length > 0 ? true : false,
            friend: action.payload.you
        };
        case GET_CONVERSATION_ERROR:
            return { ...state, 
                loading: false, 
                error: action.payload
            };
        case GET_ALL_PEOPLES:
                return { ...state, loading: true };
        case GET_ALL_PEOPLES_SUCCESS:
            return { ...state, 
                loading: false, 
                peoples: action.payload
            };
        case GET_ALL_PEOPLES_ERROR:
                return { ...state, 
                    loading: false, 
                    error: action.payload
                };
        default: return { ...state };
    }
}