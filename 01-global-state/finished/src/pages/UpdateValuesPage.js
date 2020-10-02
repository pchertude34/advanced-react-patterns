import React from 'react';
import { useCountState, countTypes } from '../state/count';
import { useNameState, nameTypes } from '../state/name';

export default function () {
  const { state: nameState, dispatch: nameDispatch } = useNameState();
  const { dispatch: countDispatch } = useCountState();

  function handleNameUpdate(event) {
    const updatedName = event.target.value;
    nameDispatch({ type: nameTypes.UPDATE_NAME, name: updatedName });
  }

  function handleNameClear() {
    nameDispatch({ type: nameTypes.CLEAR_NAME });
  }

  function handleIncrementButtonClicked() {
    countDispatch({ type: countTypes.INCREMENT_COUNT });
  }

  function handleDecrementButtonClicked() {
    countDispatch({ type: countTypes.DECREMENT_COUNT });
  }

  return (
    <div>
      <h1>Update Values</h1>
      <div>
        <label htmlFor="name" className="m-r">
          Name
        </label>
        <input type="text" id="name" value={nameState.name} onChange={handleNameUpdate} />
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
