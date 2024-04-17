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
    ACTIVATE_USER_SUCCESS,
    DEACTIVATE_USER_SUCCESS
  } from './actionTypes';
  
  const initialState = {
    currentUser: null,
    isAuthenticated: false,
    users: [],
    loading: false,
    error: null
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
      case LOGOUT_REQUEST:
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          currentUser: action.payload,
          isAuthenticated: true,
          loading: false,
          error: null
        };
      case LOGIN_FAILURE:
      case LOGOUT_FAILURE:
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case LOGOUT_SUCCESS:
        return {
          ...state,
          currentUser: null,
          isAuthenticated: false,
          loading: false,
          error: null
        };
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          users: action.payload,
          loading: false,
          error: null
        };
      case ACTIVATE_USER_SUCCESS:
        return {
          ...state,
          users: state.users.map(user =>
            user.id === action.payload ? { ...user, isActive: true } : user
          )
        };
      case DEACTIVATE_USER_SUCCESS:
        return {
          ...state,
          users: state.users.map(user =>
            user.id === action.payload ? { ...user, isActive: false } : user
          )
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  