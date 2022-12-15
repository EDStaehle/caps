'use strict'
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001');
const { createOrder, thankDriver } = require('./handlers');
socket.emit('JOIN', 'acme-widgets');
socket.emit('GET_NOTIFS', {queueId: 'acme-widgets'})
socket.on('DELIVERED',(payload) => thankDriver(payload));
setInterval(() => {
  createOrder(socket)();
},5000)

