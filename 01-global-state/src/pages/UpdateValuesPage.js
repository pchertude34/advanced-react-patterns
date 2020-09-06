import React, { useState } from 'react';
import { useNameState, nameTypes } from '../state';

export default function () {
  const { state, dispatch } = useNameState();

  function handleNameUpdate(event) {
    const updatedName = event.target.value;
    dispatch({ type: nameTypes.UPDATE_NAME, name: updatedName });
  }

  function handleNameClear() {
    dispatch({ type: nameTypes.CLEAR_NAME });
  }

  function handleIncrementButtonClicked() {
    console.log('increment');
  }

  function handleDecrementButtonClicked() {
    console.log('decrement');
  }

  return (
    <div>
      <h1>Update Values</h1>
      <div>
        <label htmlFor="name" className="m-r">
          Name
        </label>
        <input type="text" id="name" value={state.name} onChange={handleNameUpdate} />
        <button onClick={handleNameClear}>Clear</button>
      </div>
      <div style={{ marginTop: '40px' }}>
        <label className="m-r">Count</label>
        <button className="m-r" onClick={handleIncrementButtonClicked}>
          Increment
        </button>
        <button onClick={handleDecrementButtonClicked}>Decrement</button>
      </div>
    </div>
  );
}
