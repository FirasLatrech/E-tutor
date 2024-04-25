import React from 'react';

function Footer() {
  return (
    <div className="flex w-[80%] pb-4 self-center justify-between items-center">
      <p className="text-sm font-light text-gray-600">
        © 2021 - Eduguard. Designed by{' '}
        <span className="text-gray-900">Templatecookie.</span> All rights
        reserved
      </p>
      <div className="flex items-center justify-center gap-3">
        <h2 className="text-sm font-light text-gray-600">FAQs</h2>
        <h2 className="text-sm font-light text-gray-600">Privacy Policy</h2>
        <h2 className="text-sm font-light text-gray-600">Terms & Condition</h2>
      </div>
    </div>
  );
}

export default Footer;
