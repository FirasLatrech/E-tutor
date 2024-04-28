import React, { useCallback, useContext, useEffect, useState } from 'react';
import NotificationIcon from 'modules/instructor/assets/icons/NavBar/Notification';
import NotificationList from './components/NotificationList/NotificationList';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { SocketContext } from 'modules/shared/lib/socket';

function Notification() {
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit('join', 'direct-notification');
    //socket.emit('direct-notification');
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-gray-50 relative px-3 py-[0.7rem]">
        <div className="cursor-pointer">
          <span className="border-2 absolute z-10 right-[0.8rem] border-white inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
          <NotificationIcon />
        </div>
        <NotificationList />
      </DropdownMenuTrigger>
      <button onClick={() => socket.emit('direct-notification', 'test')}>
        test realtime
      </button>
    </DropdownMenu>
  );
}

export default Notification;
