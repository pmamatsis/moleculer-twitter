/*
 * moleculer-twitter
 * Copyright (c) 2022 Panagiotis Mamatsis (https://github.com/pmamatsis/moleculer-twitter)
 * MIT Licensed
 */

"use strict";

module.exports = {

	name: "twitter",

	/**
	 * Default settings
	 */
	settings: {

	},

	/**
	 * Actions
	 */
	actions: {
		test(ctx) {
			return "Hello " + (ctx.params.name || "Anonymous");
		}
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

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};