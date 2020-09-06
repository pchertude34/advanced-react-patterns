import React from 'react';
import { useNameState } from '../state';

export default function () {
  const { state } = useNameState();

  return (
    <div>
      <h1>View Values</h1>
      <div>
        <label className="m-r">
          <b>Name:</b>
        </label>
        {state.name}
      </div>
      <div style={{ marginTop: '40px' }}>
        <label className="m-r">
          <b>Count:</b>
        </label>
      </div>
    </div>
  );
}
