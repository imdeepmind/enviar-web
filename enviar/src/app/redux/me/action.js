import {
    GET_ME, GET_ME_SUCCESS, GET_ME_ERROR
} from '../../../constants/actions';

export const getMe = () => ({
    type: GET_ME
});

export const getMeSuccess = (user) => ({
    type: GET_ME_SUCCESS,
    payload: user
});

export const getMeError = (error) => ({
    type: GET_ME_ERROR,
    payload: error
});
