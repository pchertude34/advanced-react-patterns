import { useReducer } from 'react';
import * as types from './nameTypes';

export const initialState = {
  name: '',
};

/**
 *
 * @param {*} state
 * @param {*} action
 */
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
