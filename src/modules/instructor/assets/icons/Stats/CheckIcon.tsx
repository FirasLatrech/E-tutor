import React from 'react';

const CheckIcon = ({ ...props }) => (
  <svg
    {...props}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M5.5 5.5V24.5L7.5 26.5H26.5V5.5H5.5Z"
      fill="#564FFD"
    />
    <path
      d="M5.5 17.9091V6.5C5.5 6.23478 5.60536 5.98043 5.79289 5.79289C5.98043 5.60536 6.23478 5.5 6.5 5.5H25.5C25.7652 5.5 26.0196 5.60536 26.2071 5.79289C26.3946 5.98043 26.5 6.23478 26.5 6.5V25.5C26.5 25.7652 26.3946 26.0196 26.2071 26.2071C26.0196 26.3946 25.7652 26.5 25.5 26.5H16.9545"
      stroke="#564FFD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 19L8 27L4 23"
      stroke="#564FFD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckIcon;
