import * as actionTypes from '../actions/actionTypes';

const initState = {
  authError: null
};

export default (state = initState, action) => {
  switch(action.type) {

    case actionTypes.LOGIN_SUCCESS:
      console.log('Login Success');
      return {
        ...state,
        authError: null
      }

    case actionTypes.LOGIN_ERROR:
      console.log('Login Error');
      return {
        ...state,
        authError: action.error.message
      }

    case actionTypes.SIGNOUT_SUCCESS:
      console.log('Signout Success');
      return state;

    case actionTypes.SIGNUP_SUCCESS:
      console.log('Signup Success');
      return {
        ...state,
        authError: null
      }

    case actionTypes.SIGNUP_ERROR:
      console.log('Signup error');
      return {
        ...state,
        authError: action.error.message
      }

    default:
      return state;
  }
}