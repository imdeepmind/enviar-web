import {
    CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_ERROR
} from '../../../constants/actions';

export const changePassword = (data) => ({
    type: CHANGE_PASSWORD,
    payload: {data}
});

export const changePasswordSuccess = (resp) => ({
    type: CHANGE_PASSWORD_SUCCESS,
    payload: resp
});

export const changePasswordError = (error) => ({
    type: CHANGE_PASSWORD_ERROR,
    payload: error
});
