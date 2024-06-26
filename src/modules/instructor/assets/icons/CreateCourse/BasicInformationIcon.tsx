import React from 'react';

const BasicInformationIcon = ({ ...props }) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z"
      fill="#6E7485"
    />
    <path
      d="M3 16.5L12 21.75L21 16.5"
      stroke="#6E7485"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12L12 17.25L21 12"
      stroke="#6E7485"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z"
      stroke="#6E7485"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BasicInformationIcon;
