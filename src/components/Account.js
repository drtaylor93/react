import React from 'react';

function Account(props) {
  return (
    <div>
      <h2>{props.displayName}</h2>
      <p>{props.balance}</p>
    </div>
  )
}

export default Account;