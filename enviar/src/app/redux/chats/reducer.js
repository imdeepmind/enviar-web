import {
    GET_CONVERSATION, GET_CONVERSATION_SUCCESS, GET_CONVERSATION_ERROR, 
    GET_ALL_PEOPLES, GET_ALL_PEOPLES_SUCCESS, GET_ALL_PEOPLES_ERROR,
    SEND_MESSAGE, SEND_MESSAGE_ERROR, SEND_MESSAGE_SUCCESS
} from '../../../constants/actions';

const INIT_STATE = {
    chats: [],
    error: null,
    loading: true,
    peoples: [],
    send: null,
    more: false,
    more2: true
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_CONVERSATION:
            return { ...state, loading: true, more: false, chats: [] };
        case GET_CONVERSATION_SUCCESS:
        return { ...state, 
            loading: false, 
            chats: action.payload.docs,
            more: action.payload.docs.length > 0 ? true : false
        };
        case GET_CONVERSATION_ERROR:
            return { ...state, 
                loading: false, 
                error: action.payload,
                more: false
            };
        case GET_ALL_PEOPLES:
                return { ...state, loading: true, more2: false };
        case GET_ALL_PEOPLES_SUCCESS:
            return { ...state, 
                loading: false, 
                peoples: action.payload,
                more2: action.payload.length > 0 ? true : false
            };
        case GET_ALL_PEOPLES_ERROR:
                return { ...state, 
                    loading: false, 
                    more2: false,
                    error: action.payload
                };
        case SEND_MESSAGE:
            return { ...state, loading: true };
        case SEND_MESSAGE_SUCCESS:
            return { ...state, 
                loading: false, 
                send: action.payload
            };
        case SEND_MESSAGE_ERROR:
            return { ...state, 
                loading: false, 
                error: action.payload
            };
        default: return { ...state };
    }
}