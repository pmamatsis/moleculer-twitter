"use strict";

let { ServiceBroker } 	= require("moleculer");
let MyService 			= require("../../index");

// Create broker
let broker = new ServiceBroker({
	logger: console
});

// Load my service
broker.createService(MyService);

// Start server
broker.start().then(() => {

	// Call action
	broker
		.call("twitter.retrieveSingleTweet", { id: 20 })
		.then(broker.logger.info)
		.catch(broker.logger.error);

});
