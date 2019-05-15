import {
    GET_CONVERSATION, GET_CONVERSATION_SUCCESS, GET_CONVERSATION_ERROR
} from '../../../constants/actions';

const INIT_STATE = {
    chats: [],
    error: null,
    loading: true,
    limit: 1,
    page: 1,
    pages: 1,
    total: 1,
    friend: {}
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_CONVERSATION:
            return { ...state, loading: true };
        case GET_CONVERSATION_SUCCESS:
        return { ...state, 
            loading: false, 
            chats: [...state.chats, ...action.payload.docs], 
            limit: action.payload.limit,
            page: action.payload.page,
            pages: action.payload.pages,
            total: action.payload.total,
            friend: action.payload.you
        };
        case GET_CONVERSATION_ERROR:
            return { ...state, 
                loading: false, 
                error: action.payload
            };
        default: return { ...state };
    }
}