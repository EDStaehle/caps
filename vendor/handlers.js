'use strict'
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');
const Chance = require('chance');
const chance = new Chance();



function createOrder(payload = null){
  payload = payload? payload:  {
    store: '1-206-FLOWERS',
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address()
  };
  console.log('Vendor: order ready for pickup', payload)
  socket.emit('PICKUP', payload)
}
function thankDriver(payload){
  console.log('VENDOR: thank you for delivering to ', payload.customer)
}
module.exports = {createOrder, thankDriver}
