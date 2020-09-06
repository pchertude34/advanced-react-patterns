import { useReducer } from 'react';

const initialState = {
  name: '',
};

/**
 *
 * @param {*} state
 * @param {*} action
 */
export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
