'use strict';

require('dotenv').config();
const { Server } = require('socket.io')
const PORT = process.env.PORT;
console.log(PORT)
const Queue = require('./lib/queue');
const notificationQueue = new Queue();

const server = new Server(PORT);
const caps = server.of('/caps')

caps.on('connection', (socket) => {
  console.log('The socket connected to caps on namespace:', socket.id);

  socket.on('JOIN', (room) => {
    console.log('these are the rooms', socket.rooms);
    console.log('payload---', room);
    socket.join(room);
    console.log(`you have joined the ${room} room`);
    console.log('these are the rooms', socket.rooms);
  });

});
  server.on('connection', (socket) => {
    socket.onAny((event, payload) => console.log({ event, payload }));

    socket.on('JOIN', (queueId) => {
      socket.join(queueId);
      console.log('joined the room: ', queueId);
      socket.emit('JOIN', queueId);
    });
    console.log('socket connected to event server', socket.id);

    socket.on('PICKUP', (payload) => {
      console.log('vendor has delivery', payload);
      logger('PICKUP', payload)
      let currentQueue = notificationQueue.read(payload.queueId);
      if (!currentQueue) {
        let queueKey = notificationQueue.store(payload.queueId, new Queue());
        currentQueue = notificationQueue.read(queueKey);
      }
      currentQueue.store(payload.orderId, payload);
      socket.broadcast.emit('PICKUP', payload)
    });


    socket.on('IN_TRANSIT', (payload) => {
      console.log('Driver is in transit with:', payload, payload.queueId);
      socket.to(payload.queueId).emit('IN_TRANSIT', payload);
    });
    socket.on('DELIVERED', (payload) => {
      console.log('driver has delivered the package', payload);
      let currentQueue = notificationQueue.read(payload.queueId);
      if (!currentQueue) {
        throw new Error('we have notifications but no queue')
      }
      let notification = currentQueue.remove(payload.orderId)

      socket.to(payload.queueId).emit('DELIVERED', notification);
    });
    socket.on('GET_NOTIFS', (payload) => {
      console.log('messages delivered');
      let currentQueue = notificationQueue.read(payload.queueId);
      if (currentQueue && currentQueue.data) {
        Object.keys(currentQueue.data).forEach(orderId => {
          socket.to(orderId.queueId).emit('RECEIVED')
        });
      }
    });

    function logger(event, payload) {
      const time = new Date()
      console.log('EVENT:', { event, time, payload })
    };
  })

