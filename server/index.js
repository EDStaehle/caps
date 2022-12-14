'use strict';

require('dotenv').config();
const {Server} = require('socket.io');
const PORT = process.env.PORT;
const server = new Server(PORT);

const caps = server.of('/caps')

caps.on('connection', (socket) => {
  console.log('The socket connected to caps on namespace:', socket.id);
    socket.on('PICKUP', (payload) => {
    console.log('vendor has delivery', payload);
    logger('PICKUP', payload)
    socket.broadcast.emit('PICKUP',payload)
  });
  socket.on('IN_TRANSIT', (payload) => {
    console.log('Driver is in transit with:', payload);
    socket.broadcast.emit('IN_TANSIT',payload);
  });
  socket.on('DELIVERED', (payload) => {
    console.log('driver has delivered the package');
    socket.broadcast.emit('DELIVERED',payload)
  })

  function logger(event, payload){
    const time = new Date()
    console.log('EVENT:', {event, time, payload})
  };
});

