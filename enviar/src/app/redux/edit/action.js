import {
    EDIT_DP, EDIT_DP_SUCCESS, EDIT_DP_ERROR, EDIT_INFO, EDIT_INFO_ERROR, EDIT_INFO_SUCCESS
} from '../../../constants/actions';

export const editDp = (avatar) => ({
    type: EDIT_DP,
    payload: avatar
});

export const editDpSuccess = (user) => ({
    type: EDIT_DP_SUCCESS,
    payload: user
});

export const editDpError = (error) => ({
    type: EDIT_DP_ERROR,
    payload: error
});

export const editInfo = (data) => ({
    type: EDIT_INFO,
    payload: data
});

export const editInfoSuccess = (user) => ({
    type: EDIT_INFO_SUCCESS,
    payload: user
});

export const editInfoError = (error) => ({
    type: EDIT_INFO_ERROR,
    payload: error
});
