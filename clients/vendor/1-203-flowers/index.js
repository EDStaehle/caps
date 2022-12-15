'use strict'
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001');
const { createOrder, thankDriver } = require('./handlers');
socket.emit('JOIN', '1-203-flowers');
socket.emit('GET_NOTIFS', {queueId: '1-203-flowers'})
socket.on('DELIVERED',(payload) => thankDriver(payload));

setInterval(() => {
  createOrder(socket)();
},5000)

