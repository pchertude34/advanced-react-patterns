import React from 'react';
import { useNameState, useCountState } from '../state';

export default function () {
  const { state: nameState } = useNameState();
  const { state: countState } = useCountState();

  return (
    <div>
      <h1>View Values</h1>
      <div>
        <label className="m-r">
          <b>Name:</b>
        </label>
        {nameState.name}
      </div>
      <div style={{ marginTop: '40px' }}>
        <label className="m-r">
          <b>Count:</b>
        </label>
        {countState.count}
      </div>
    </div>
  );
}
