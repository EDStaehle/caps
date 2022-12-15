'use strict'

const Chance = require('chance');
const chance = new Chance();


const createOrder = (socket) => () => {
 let payload = {
    store: 'acme-widgets',
    queueId: 'acme-widgets',
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address()
  };
  console.log('Vendor: order ready for pickup', payload)
  socket.emit('PICKUP', payload)
  console.log(payload.customer);
}
const thankDriver = (payload) => {

  console.log('VENDOR: thank you for delivering to ', payload.customer)
}
module.exports = {createOrder, thankDriver}
