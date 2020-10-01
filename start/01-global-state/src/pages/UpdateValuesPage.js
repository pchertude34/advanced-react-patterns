import React from 'react';

export default function () {
  function handleNameUpdate(event) {}

  function handleNameClear() {}

  function handleIncrementButtonClicked() {}

  function handleDecrementButtonClicked() {}

  return (
    <div>
      <h1>Update Values</h1>
      <div>
        <label htmlFor="name" className="m-r">
          Name
        </label>
        <input type="text" id="name" value={'Add name state here'} onChange={handleNameUpdate} />
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
