import React, { ReactNode } from 'react';
import socket, { SocketContext } from '../lib/socket';

interface socketProviderPropsType {
  children: ReactNode;
}
function SocketProvider({ children }: socketProviderPropsType) {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

export default SocketProvider;
