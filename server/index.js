import 'dotenv/config';

import express from 'express';
import activities from './src/event/event.controller.js';
import cors from 'cors';
import wss from './lib/websocket.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/event', activities);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

wss.on('connection', (ws) => {
  console.log('client connected to the websockets server');
});
