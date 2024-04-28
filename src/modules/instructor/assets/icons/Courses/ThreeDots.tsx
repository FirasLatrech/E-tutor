import React from 'react';

const ThreeDots = ({ ...props }) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 13.525C12.8422 13.525 13.525 12.8422 13.525 12C13.525 11.1578 12.8422 10.475 12 10.475C11.1578 10.475 10.475 11.1578 10.475 12C10.475 12.8422 11.1578 13.525 12 13.525Z"
      fill="#8C94A3"
      stroke="#8C94A3"
      stroke-width="0.8"
    />
    <path
      d="M19 13.525C19.8422 13.525 20.525 12.8422 20.525 12C20.525 11.1578 19.8422 10.475 19 10.475C18.1578 10.475 17.475 11.1578 17.475 12C17.475 12.8422 18.1578 13.525 19 13.525Z"
      fill="#8C94A3"
      stroke="#8C94A3"
      stroke-width="0.8"
    />
    <path
      d="M5 13.525C5.84223 13.525 6.525 12.8422 6.525 12C6.525 11.1578 5.84223 10.475 5 10.475C4.15777 10.475 3.475 11.1578 3.475 12C3.475 12.8422 4.15777 13.525 5 13.525Z"
      fill="#8C94A3"
      stroke="#8C94A3"
      stroke-width="0.8"
    />
  </svg>
);

export default ThreeDots;