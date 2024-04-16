import React from 'react';

const MenuLogo = ({ ...props }) => (
  <svg
    {...props}
    className="svg-icon"
    style={{
      width: '2rem',
      height: '2rem',
      verticalAlign: 'middle',
      fill: 'currentColor',
      overflow: 'hidden',
      position: 'fixed',
      top: '2rem',
      left: '1rem',
      cursor: 'pointer',
    }}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M960 288H64C44.8 288 32 275.2 32 256s12.8-32 32-32h896c19.2 0 32 12.8 32 32s-12.8 32-32 32zM960 544H64C44.8 544 32 531.2 32 512s12.8-32 32-32h896c19.2 0 32 12.8 32 32s-12.8 32-32 32zM960 800H64c-19.2 0-32-12.8-32-32s12.8-32 32-32h896c19.2 0 32 12.8 32 32s-12.8 32-32 32z"
      fill="#2F3448"
    />
  </svg>
);

export default MenuLogo;