'use strict';

const eventPool = require('./eventPool');

// require handlers
const globalEvent = require('./global-event-pool-handler/index');
const vendorHandler = require('./vendor/vendorHandle');
const driverHandler = require('./driver/driverHandler');


// listen to all events
eventPool.on('PICKUP', driverHandler);
eventPool.on('INTRANSIT',() => console.log('driver is enroute'))
eventPool.on('DELIVERED', vendorHandler);


