import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8081 });

export default wss;
