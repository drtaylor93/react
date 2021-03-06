export const ACTION_INCREMENT = 'INCREMENT';
export const ACTION_DECREMENT = 'DECREMENT';
export const ACTION_FORGIVE = 'FORGIVE';

export function createDeposit(value, account) {
  return {
    type: ACTION_INCREMENT,
    value: value,
    account: account
  }
}

export function createWithdrawal(value, account) {
  return {
    type: ACTION_DECREMENT,
    value: value,
    account: account
  }
}

export function forgiveLoan(account, loans) {
  return {
    type: ACTION_FORGIVE,
    account: account,
    loans: loans
  }
}