import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    VERIFY, VERIFY_SUCCESS, VERIFY_ERROR
  } from '../../../constants/actions';

export const loginUser = (user, history) => ({
    type: LOGIN_USER,
    payload: { user, history }
});
export const loginUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: user
});

export const loginUserError = (error) => ({
    type: LOGIN_USER_ERROR,
    payload: error
})

export const registerUser = (user, history) => ({
    type: REGISTER_USER,
    payload: { user, history }
})
export const registerUserSuccess = (user) => ({
    type: REGISTER_USER_SUCCESS,
    payload: user
})

export const registerUserError = (error) => ({
    type: REGISTER_USER_ERROR,
    payload: error
})

export const logoutUser = (history) => ({
    type: LOGOUT_USER,
    payload : {history}
});

export const verify = (history) => ({
    type: VERIFY,
    payload: { history }
});
export const verifySuccess = (user) => ({
    type: VERIFY_SUCCESS,
    payload: user
});

export const verifyError = (error) => ({
    type: VERIFY_ERROR,
    payload: error
})