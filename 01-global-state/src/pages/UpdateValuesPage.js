import React, { useState } from 'react';

export default function () {
  const [name, setName] = useState('');

  function handleNameUpdate(event) {
    const updatedName = event.target.value;
    setName(updatedName);
  }

  function handleNameSave() {
    console.log('name', name);
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
        <label htmlFor="name" style={{ marginRight: '10px' }}>
          Name
        </label>
        <input type="text" id="name" value={name} onChange={handleNameUpdate} />
        <button onClick={handleNameSave}>Submit</button>
      </div>
      <div style={{ marginTop: '40px' }}>
        <button style={{ marginRight: '10px' }} onClick={handleIncrementButtonClicked}>
          Increment
        </button>
        <button onClick={handleDecrementButtonClicked}>Decrement</button>
      </div>
    </div>
  );
}
