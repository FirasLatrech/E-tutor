import React from 'react';

const CurriculumIcon = ({ ...props }) => (
  <svg
    width="24"
    {...props}
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M19.5 4.5H4.5C4.10218 4.5 3.72065 4.65804 3.43934 4.93934C3.15804 5.22065 3 5.60218 3 6V16.5C3 16.8978 3.15804 17.2794 3.43934 17.5607C3.72065 17.842 4.10218 18 4.5 18H19.5C19.8978 18 20.2794 17.842 20.5607 17.5607C20.842 17.2794 21 16.8978 21 16.5V6C21 5.60218 20.842 5.22065 20.5607 4.93934C20.2794 4.65804 19.8978 4.5 19.5 4.5ZM10.5 14.25V8.25L15 11.25L10.5 14.25Z"
      fill="#6E7485"
    />
    <path
      d="M4.5 18L19.5 18C20.3284 18 21 17.3284 21 16.5V6C21 5.17157 20.3284 4.5 19.5 4.5L4.5 4.5C3.67157 4.5 3 5.17157 3 6V16.5C3 17.3284 3.67157 18 4.5 18Z"
      stroke="#6E7485"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 21H9"
      stroke="#6E7485"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 11.25L10.5 8.25V14.25L15 11.25Z"
      stroke="#6E7485"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default CurriculumIcon;
