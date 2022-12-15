'use strict';

  const pickupInTransit = (socket) => (payload) => {
    setTimeout(() => {
      console.log(`Driver: Driver has picked up delivery:`,payload.orderId);
      console.log(payload, '----------------------')
      socket.emit('IN_TRANSIT', payload)
    }, 2000);
  }

  const deliveryHandler = (socket) => (payload) => {
    setTimeout(() => {
      console.log('driver has delivered the package');
      socket.emit('DELIVERED', payload);
    }, 5000);
  }


module.exports = {pickupInTransit, deliveryHandler};
