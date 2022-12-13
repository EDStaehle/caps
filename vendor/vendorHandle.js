'use strict'

let eventPool = require('../eventPool');
const Chance = require('chance');
const chance = new Chance();
setTimeout(() => {
  let payload = {
    store: '1-206-FLOWERS',
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address()
  };
  eventPool.emit('PICKUP', payload)
  console.log('System: there is a package to pickup')
}, 5000)

module.exports = function(payload){
 console.log(`thanks for delivering package: ${payload.orderId} :) have a great day`)
}

