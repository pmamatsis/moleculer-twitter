/*
 * moleculer-twitter
 * Copyright (c) 2022 Panagiotis Mamatsis (https://github.com/pmamatsis/moleculer-twitter)
 * MIT Licensed
 */

"use strict";

const { MoleculerError } = require("moleculer").Errors;
const TweetLookup = require("./libs/TweetLookup");

require("dotenv").config();

module.exports = {

	name: "twitter",

	/**
	 * Default settings
	 */
	settings: {
		twitterVersionApi: 'v2',
		twitterBearerToken: process.env.BEARER_TOKEN
	},

	/**
	 * Actions
	 */
	actions: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {
		if(!this.settings.twitterBearerToken)
			this.logger.warn("The `twitterBearerToken` is not configured. Please set the 'BEARER_TOKEN' environment variable!");

		return this.Promise.resolve();
	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {
		return this.Promise.resolve();
	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {
		return this.Promise.resolve();
	}
};