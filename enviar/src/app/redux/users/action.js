import {
    USERS, USERS_SUCCESS, USERS_ERROR, 
    USERS_INDIVIDUAL, USERS_SUCCESS_INDIVIDUAL, USERS_ERROR_INDIVIDUAL, 
    USER_ACTION, USER_ACTION_SUCCESS, USER_ACTION_ERROR,
    USERS_FOLLOWEE, USERS_FOLLOWEE_ERROR, USERS_FOLLOWEE_SUCCESS,
    USERS_FOLLOWERS, USERS_FOLLOWERS_ERROR, USERS_FOLLOWERS_SUCCESS
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

export const userAction = (user, history) => ({
    type: USER_ACTION,
    payload: { user, history }
});

export const userActionSuccess = (user) => ({
    type: USER_ACTION_SUCCESS,
    payload: user
});

export const userActionError = (error) => ({
    type: USER_ACTION_ERROR,
    payload: error
});

export const usersFollowee = (user) => ({
    type: USERS_FOLLOWEE,
    payload: { user }
});

export const usersFolloweeSuccess = (user) => ({
    type: USERS_FOLLOWEE_SUCCESS,
    payload: user
});

export const usersFolloweeError = (error) => ({
    type: USERS_FOLLOWEE_ERROR,
    payload: error
});

export const usersFollowers = (user) => ({
    type: USERS_FOLLOWERS,
    payload: { user }
});

export const usersFollowersSuccess = (user) => ({
    type: USERS_FOLLOWERS_SUCCESS,
    payload: user
});

export const usersFollowersError = (error) => ({
    type: USERS_FOLLOWERS_ERROR,
    payload: error
});