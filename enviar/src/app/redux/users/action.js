import {
    USERS, USERS_SUCCESS, USERS_ERROR
} from '../../../constants/actions';

export const users = (user, history) => ({
    type: USERS,
    payload: { user, history }
});

export const usersSuccess = (user) => ({
    type: USERS_SUCCESS,
    payload: user
});

export const usersError = (error) => ({
    type: USERS_ERROR,
    payload: error
});