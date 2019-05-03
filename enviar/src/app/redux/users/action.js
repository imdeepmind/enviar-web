import {
    USERS, USERS_SUCCESS, USERS_ERROR, USERS_INDIVIDUAL, USERS_SUCCESS_INDIVIDUAL, USERS_ERROR_INDIVIDUAL, 
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

export const usersIndividual = (user, history) => ({
    type: USERS_INDIVIDUAL,
    payload: { user, history }
});

export const usersSuccessIndividual = (user) => ({
    type: USERS_SUCCESS_INDIVIDUAL,
    payload: user
});

export const usersErrorIndividual = (error) => ({
    type: USERS_ERROR_INDIVIDUAL,
    payload: error
});