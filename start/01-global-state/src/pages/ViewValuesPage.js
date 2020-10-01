import React from 'react';

export default function () {
  return (
    <div>
      <h1>View Values</h1>
      <div>
        <label className="m-r">
          <b>Name:</b>
        </label>
        {/* Insert the name state here */}
        NAME GOES HERE
      </div>
      <div style={{ marginTop: '40px' }}>
        <label className="m-r">
          <b>Count:</b>
        </label>
        {/* Insert the count state here */}
        COUNT GOES HERE
      </div>
    </div>
  );
}
