import * as types from './countTypes';

export const initialState = {
  count: 0,
};

export function countReducer(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case types.DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
