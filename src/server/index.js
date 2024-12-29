import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('New Connection');

  ws.on('message', (message) => {
    console.log(`New message: ${message}`);
  });

  ws.on('close', () => {
    console.log('Connection End');
  });
});