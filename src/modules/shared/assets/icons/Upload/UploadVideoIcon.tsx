import React from 'react'

function UploadVideoIcon({...props}) {
  return (
    <svg
      {...props}
      width="124"
      height="124"
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.2"
        d="M62.0039 15.5C52.8071 15.5 43.8168 18.2272 36.1699 23.3367C28.523 28.4461 22.563 35.7085 19.0435 44.2052C15.5241 52.702 14.6032 62.0516 16.3974 71.0717C18.1916 80.0918 22.6203 88.3773 29.1235 94.8805C35.6266 101.384 43.9121 105.812 52.9322 107.607C61.9523 109.401 71.3019 108.48 79.7987 104.96C88.2955 101.441 95.5578 95.4809 100.667 87.834C105.777 80.1871 108.504 71.1968 108.504 62C108.504 55.8935 107.301 49.8469 104.964 44.2052C102.628 38.5636 99.2024 33.4374 94.8844 29.1195C90.5665 24.8016 85.4404 21.3764 79.7987 19.0396C74.1571 16.7027 68.1104 15.5 62.0039 15.5ZM54.2539 77.5V46.5L77.5039 62L54.2539 77.5Z"
        fill="#B7BAC7"
      />
      <path
        d="M62.0039 108.5C87.6852 108.5 108.504 87.6812 108.504 62C108.504 36.3188 87.6852 15.5 62.0039 15.5C36.3227 15.5 15.5039 36.3188 15.5039 62C15.5039 87.6812 36.3227 108.5 62.0039 108.5Z"
        stroke="#B7BAC7"
        stroke-width="6"
        stroke-miterlimit="10"
      />
      <path
        d="M77.5 62L54.25 46.5V77.5L77.5 62Z"
        stroke="#B7BAC7"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default UploadVideoIcon