import NotificationIcon from 'modules/instructor/assets/icons/NavBar/Notification';
import React from 'react';

function Notification() {
  return (
    <div className="bg-gray-50 relative px-3 py-[0.7rem]">
      <span className="border-2 absolute z-10 right-[0.8rem] border-white inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
      <NotificationIcon />
    </div>
  );
}

export default Notification;
