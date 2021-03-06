import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createDeposit, createWithdrawal } from '../redux/actions';

function TransactionForm() {
  const [ account, setAccount] = useState('savings');
  const [ transaction, setTransaction] = useState('withdraw');
  //const [ transaction, setLoans] = useState('forgive');
  const [ amount, setAmount] = useState('0');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (transaction === 'withdraw') {
      dispatch(createWithdrawal(Number(amount), account))
    } else if (transaction === 'deposit') {
      dispatch(createDeposit(Number(amount), account))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="account">Account</label>
        <select name="account" id="account" value={account} onChange={
          (e) => setAccount(e.target.value)
        }>
          <option value="savings">Savings</option>
          <option value="checking">Checking</option>
        </select>
      </p>
      <p>
        <label htmlFor="transaction">Transaction</label>
        <select name="transaction" id="transaction" value={transaction} onChange={
          (e) => setTransaction(e.target.value)
        }>
          <option value="withdraw">Withdraw</option>
          <option value="deposit">Deposit</option>
        </select> 
      </p>
      <p>
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" id="amount" value={amount} onChange={
          (e) => setAmount(e.target.value)
        } />
      </p>
      <button type="submit">Submit</button>
    </form>
  )
}

export default TransactionForm