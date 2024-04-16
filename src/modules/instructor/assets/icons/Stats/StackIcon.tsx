import React from 'react';

const StackIcon = ({ ...props }) => (
  <svg
    {...props}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path opacity="0.2" d="M4 10L16 17L28 10L16 3L4 10Z" fill="#564FFD" />
    <path
      d="M4 22L16 29L28 22"
      stroke="#564FFD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 16L16 23L28 16"
      stroke="#564FFD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 10L16 17L28 10L16 3L4 10Z"
      stroke="#564FFD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default StackIcon;
