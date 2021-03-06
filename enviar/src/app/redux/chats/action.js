import {
    GET_CONVERSATION, GET_CONVERSATION_SUCCESS, GET_CONVERSATION_ERROR, 
    GET_ALL_PEOPLES, GET_ALL_PEOPLES_SUCCESS, GET_ALL_PEOPLES_ERROR,
    SEND_MESSAGE, SEND_MESSAGE_ERROR, SEND_MESSAGE_SUCCESS
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

export const getAllPeoples = (data) => ({
    type: GET_ALL_PEOPLES,
    payload:{data}
});

export const getAllPeoplesSuccess = (peoples) => ({
    type: GET_ALL_PEOPLES_SUCCESS,
    payload: peoples
});

export const getAllPeoplesError = (error) => ({
    type: GET_ALL_PEOPLES_ERROR,
    payload: error
});

export const sendMessage = (data, history) => ({
    type: SEND_MESSAGE,
    payload: { data, history }
});

export const sendMessageSuccess = (data) => ({
    type: SEND_MESSAGE_SUCCESS,
    payload: data
});

export const sendMessagetError = (error) => ({
    type: SEND_MESSAGE_ERROR,
    payload: error
});