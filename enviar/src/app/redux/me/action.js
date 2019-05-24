import {
    GET_ME, GET_ME_SUCCESS, GET_ME_ERROR, 
    GET_FOLLOWERS_LIST, GET_FOLLOWERS_LIST_SUCCESS, GET_FOLLOWERS_LIST_ERROR, 
    GET_FOLLOWING_LIST, GET_FOLLOWING_LIST_ERROR, GET_FOLLOWING_LIST_SUCCESS,
    GET_BLOCKED_LIST, GET_BLOCKED_LIST_ERROR, GET_BLOCKED_LIST_SUCCESS
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

export const getFollowersList = () => ({
    type: GET_FOLLOWERS_LIST
});

export const getFollowersListSuccess = (user) => ({
    type: GET_FOLLOWERS_LIST_SUCCESS,
    payload: user
});

export const getFollowersListError = (error) => ({
    type: GET_FOLLOWERS_LIST_ERROR,
    payload: error
});

export const getFollowingList = () => ({
    type: GET_FOLLOWING_LIST
});

export const getFollowingListSuccess = (user) => ({
    type: GET_FOLLOWING_LIST_SUCCESS,
    payload: user
});

export const getFollowingListError = (error) => ({
    type: GET_FOLLOWING_LIST_ERROR,
    payload: error
});

export const getBlockedList = () => ({
    type: GET_BLOCKED_LIST
});

export const getBlockedListSuccess = (user) => ({
    type: GET_BLOCKED_LIST_SUCCESS,
    payload: user
});

export const getBlockedListError = (error) => ({
    type: GET_BLOCKED_LIST_ERROR,
    payload: error
});
