import {GET_PROFILE, UPDATE_PROFILE} from './types'

export const getProfileDetail = (payload) => {
  return {type: GET_PROFILE, payload};
};

export const updateProfile = (payload) => {
    console.log('updateProfileDetail', payload);
    return {type: UPDATE_PROFILE, payload};
};
