import { ACTION_DECREMENT, ACTION_INCREMENT, ACTION_FORGIVE } from "./actions";
import { combineReducers } from 'redux';

// Average student loan debt in America for 4 year education
// is ~ $40,000 (O_o)
const defaultState = {
  savings: 0,
  checking: 0,
  loans: 40000
}

export function accountReducer(state=defaultState, action) {
  switch (action.type) {
    case ACTION_INCREMENT:
      return {
        ...state,
        [action.account]: state[action.account] + action.value
      }
    case ACTION_DECREMENT:
      return {
        ...state,
        [action.account]: state[action.account] - action.value
      }
    default:
      return state;
  }
}

export function forgiveReducer(state=defaultState, action) {
    switch (action.type) {
      case ACTION_FORGIVE && action.account < 0:
        return {
          ...state,
          [action.account]: state[action.loans] + action.loans
        }
      default:
        return state;
    }
  }

  export const rootReducer = combineReducers({
    account: accountReducer,
    loans: forgiveReducer
  });