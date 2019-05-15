import {
    GET_CONVERSATION, GET_CONVERSATION_SUCCESS, GET_CONVERSATION_ERROR
} from '../../../constants/actions';

export const getChat = (chat, history) => ({
    type: GET_CONVERSATION,
    payload: { chat, history }
});

export const getChatSuccess = (chat) => ({
    type: GET_CONVERSATION_SUCCESS,
    payload: chat
});

export const getChatError = (error) => ({
    type: GET_CONVERSATION_ERROR,
    payload: error
});