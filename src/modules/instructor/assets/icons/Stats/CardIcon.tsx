import React from 'react';

const CardIcon = ({ ...props }) => (
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
      d="M2.99951 12.1074H28.9995L29.0002 24.0009C29.0002 24.2661 28.8949 24.5205 28.7074 24.708C28.5198 24.8955 28.2655 25.0009 28.0002 25.0009H4.00024C3.73503 25.0009 3.48067 24.8955 3.29314 24.708C3.1056 24.5205 3.00024 24.2661 3.00024 24.0009L2.99951 12.1074Z"
      fill="#1D2026"
    />
    <path
      d="M28 7H4C3.44772 7 3 7.44772 3 8V24C3 24.5523 3.44772 25 4 25H28C28.5523 25 29 24.5523 29 24V8C29 7.44772 28.5523 7 28 7Z"
      stroke="#1D2026"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.9995 21H24.9995"
      stroke="#1D2026"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.9995 21H16.9995"
      stroke="#1D2026"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.99951 12.1074H28.9995"
      stroke="#1D2026"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CardIcon;
