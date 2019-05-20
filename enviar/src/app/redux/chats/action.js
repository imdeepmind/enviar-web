import {
    GET_CONVERSATION, GET_CONVERSATION_SUCCESS, GET_CONVERSATION_ERROR, GET_ALL_PEOPLES, GET_ALL_PEOPLES_SUCCESS, GET_ALL_PEOPLES_ERROR
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

export const getAllPeoples = () => ({
    type: GET_ALL_PEOPLES
});

export const getAllPeoplesSuccess = (peoples) => ({
    type: GET_ALL_PEOPLES_SUCCESS,
    payload: peoples
});

export const getAllPeoplesError = (error) => ({
    type: GET_ALL_PEOPLES_ERROR,
    payload: error
});