'use strict'

const Chance = require('chance');
const chance = new Chance();


const createOrder = (socket) => () => {
 let payload = {
    store: '1-203-flowers',
    queueId: '1-203-flowers',
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address()
  };
  console.log('Vendor: order ready for pickup', payload)
  socket.emit('PICKUP', payload)
}
const thankDriver = (payload) => {
  console.log('VENDOR: thank you for delivering to ', payload.customer)
}
module.exports = {createOrder, thankDriver}
