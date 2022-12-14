'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');
const {pickupInTransit, deliveryHandler} = require('./driverHandler')

socket.on('PICKUP', driverHandler);
function driverHandler(payload){
  setTimeout(() => {
    pickupInTransit(payload)
  },1000);
  setTimeout(() => {
    deliveryHandler(payload)
  },2000)
}
