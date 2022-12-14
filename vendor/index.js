'use strict'
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');
const { createOrder, thankDriver } = require('./handlers');
socket.on('DELIVERED', thankDriver);
setTimeout(() => {
  createOrder();
}, 5000)

setInterval(() => {
  createOrder();
},5000)
