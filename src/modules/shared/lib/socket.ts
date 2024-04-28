import { createContext } from 'react';
import io from 'socket.io-client';
import { getItem } from './localStorage';

const token = getItem<string>('token');
export const socket = io('http://192.168.3.211:8000', {
  transports: ['websocket'],
  query: {
    token,
  },
});
export const SocketContext = createContext(socket);

export default socket;
