'use strict';

const eventPool = require("../eventPool");

module.exports = (payload) => {
  setTimeout(() => {
    console.log(`Driver: Driver has picked up delivery: ${payload.orderId}`);
    eventPool.emit('INTRANSIT',payload )
  }, 1000);

  setTimeout(() => {
    console.log('driver has delivered the package');
    eventPool.emit('DELIVERED', payload)
  },1000)
}
