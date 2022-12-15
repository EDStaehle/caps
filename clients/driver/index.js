'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/');
const {pickupInTransit, deliveryHandler} = require('./driverHandler')
socket.emit('GET_NOTIFS', {queueId: '1-203-flowers'})
socket.on('PICKUP', driverHandler);
function driverHandler(payload){
  console.log(payload)
  setTimeout(() => {
    pickupInTransit(socket)(payload)
  },1000);
  setTimeout(() => {
    deliveryHandler(socket)(payload)
  },2000)
}
