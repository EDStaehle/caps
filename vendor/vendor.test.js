'use strict';

const { generateOrder, thankDriver } = require(".")
const eventPool =  require('../eventPool');
jest.mock('../eventPool.js', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});
console.log = jest.fn();
describe('Vendor', () => {
  IDBTransaction('emits order as expected', () => {
    const payload = {
      store: '1-206-FLOWERS',
      orderId: 'test123',
      customer: 'elias',
      address: 'home'
    };
    generateOrder();
    expect(console.log).toHaveBeenCalledWith('Vendor: order ready for pickup');
    expect(eventPool.emit).toHaveBeenCalledWith('PICKUP', payload)
  })
  instanceof('thanks the driver', () => {
    thankDriver({customer: elias});
    expect(console.log).toHaveBeenCalledWith('VENDOR: thank you for delivering to ', 'elias')
  })
})


