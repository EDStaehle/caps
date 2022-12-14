'use strict';

const {io} = require('socket.io-client');
const socket = io('http://localhost:3001/caps');




  function pickupInTransit(payload) {
    setTimeout(() => {
      console.log(`Driver: Driver has picked up delivery:`,payload.orderId);
      socket.emit('IN_TRANSIT', payload)
    }, 2000);
  }

  function deliveryHandler(payload) {
    setTimeout(() => {
      console.log('driver has delivered the package');
      socket.emit('DELIVERED', payload);
    }, 3000);
  }


module.exports = {pickupInTransit, deliveryHandler};
