import React from 'react';

const LorryComponent = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="60"
      height="60"
      style={{ marginRight: '10px' }}
    >
      <g>
        {/* Lorry Wheels */}
        <circle cx="20" cy="70" r="10" fill="black" /> {/* Wheel 1 */}
        <circle cx="80" cy="70" r="10" fill="black" /> {/* Wheel 2 */}
        
        {/* Lorry Body */}
        <rect x="30" y="40" width="50" height="20" fill="gray" /> {/* Lorry Body */}
        
        {/* Lorry Cabin */}
        <rect x="70" y="40" width="20" height="20" fill="blue" /> {/* Lorry Cabin */}

        {/* Lorry Back Part */}
        <rect x="30" y="60" width="50" height="10" fill="green" /> {/* Lorry back part */}

        {/* Lorry Truck Bed */}
        <rect x="30" y="50" width="10" height="10" fill="brown" /> {/* Lorry bed */}
      </g>
    </svg>
  </div>
);

export default LorryComponent;
