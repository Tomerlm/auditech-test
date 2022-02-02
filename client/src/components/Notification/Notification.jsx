import React, { useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useEvents } from '../../api/event';
import './Notification.scss';
import config from '../../config';

export default function Notification() {
  const { lastJsonMessage } = useWebSocket(config.websocketUrl);
  const { refetch } = useEvents();

  useEffect(() => {
    refetch();
  }, [lastJsonMessage]);

  return (
    <div className="notificationContainer">
      <div className="title">
        {lastJsonMessage?.title
          ? `New PR: ${lastJsonMessage?.title}`
          : 'waiting for a new PR...'}
      </div>
    </div>
  );
}
