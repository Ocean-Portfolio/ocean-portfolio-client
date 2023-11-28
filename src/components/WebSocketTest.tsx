import { useEffect, useRef, useState } from 'react';
import io, { Socket } from 'socket.io-client';

const WebSocketTest = () => {
  const [data, setData] = useState<string>('');
  const [receivedData, setReceivedData] = useState('');
  const socketRef = useRef<Socket>();
  // TODO: 포트번호를 .env 파일에서 가져오는 방법을 찾아보자.
  const PORT = useRef(process.env.NEXT_PUBIC_WEBSOCKET_PORT);

  useEffect(() => {
    console.log(PORT.current);
    socketRef.current = io(PORT.current);

    socketRef.current.on('connect', () => {
      console.log('Socket connected');
    });

    socketRef.current.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    socketRef.current.on('message', (data) => {
      console.log(data, 'data');
      setReceivedData(data);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!socketRef.current) return;
    socketRef.current.emit('events', event.target.value);
    setData(event.target.value);
  };

  return (
    <div>
      <input type="text" value={data} onChange={handleInputChange} />
      <div>receivedData : {receivedData}</div>
    </div>
  );
};

const WebSocketTest2 = () => {};

export default WebSocketTest;
