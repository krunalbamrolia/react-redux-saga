// import { LOGIN_SUCCESS } from './actionTypes';

// export const login = (userData) => ({
//   type: LOGIN_SUCCESS,
//   payload: userData
// });

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    ACTIVATE_USER_REQUEST,
    ACTIVATE_USER_SUCCESS,
    ACTIVATE_USER_FAILURE,
    DEACTIVATE_USER_REQUEST,
    DEACTIVATE_USER_SUCCESS,
    DEACTIVATE_USER_FAILURE
  } from './actionTypes';
  
  // Action creators for login
  export const loginRequest = (credentials) => ({
    type: LOGIN_REQUEST,
    payload: credentials
  });
  
  export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
  });
  
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
  });
  
  // Action creators for logout
  export const logoutRequest = () => ({
    type: LOGOUT_REQUEST
  });
  
  export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
  });
  
  export const logoutFailure = (error) => ({
    type: LOGOUT_FAILURE,
    payload: error
  });
  
  // Action creators for fetching users
  export const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUEST
  });
  
  export const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
  });
  
  export const fetchUsersFailure = (error) => ({
    type: FETCH_USERS_FAILURE,
    payload: error
  });
  
  // Action creators for activating a user
  export const activateUserRequest = (userId) => ({
    type: ACTIVATE_USER_REQUEST,
    payload: userId
  });
  
  export const activateUserSuccess = (userId) => ({
    type: ACTIVATE_USER_SUCCESS,
    payload: userId
  });
  
  export const activateUserFailure = (error) => ({
    type: ACTIVATE_USER_FAILURE,
    payload: error
  });
  
  // Action creators for deactivating a user
  export const deactivateUserRequest = (userId) => ({
    type: DEACTIVATE_USER_REQUEST,
    payload: userId
  });
  
  export const deactivateUserSuccess = (userId) => ({
    type: DEACTIVATE_USER_SUCCESS,
    payload: userId
  });
  
  export const deactivateUserFailure = (error) => ({
    type: DEACTIVATE_USER_FAILURE,
    payload: error
  });
  