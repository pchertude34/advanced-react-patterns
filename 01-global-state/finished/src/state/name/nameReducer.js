import * as types from './nameTypes';

export const initialState = {
  name: '',
};

export function nameReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_NAME:
      return {
        ...state,
        name: action.name,
      };
    case types.CLEAR_NAME:
      return {
        ...state,
        name: '',
      };
    default:
      return state;
  }
}
