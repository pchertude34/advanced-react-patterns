import React from 'react';

export default function () {
  return (
    <div>
      <h1>View Values</h1>
      <div>
        <label className="m-r">
          <b>Name:</b>
        </label>
        {/* Name state value needs to be added here */}
        NAME
      </div>
      <div style={{ marginTop: '40px' }}>
        <label className="m-r">
          <b>Count:</b>
        </label>
        {/* Count state value needs to be added here */}
        COUNT
      </div>
    </div>
  );
}
