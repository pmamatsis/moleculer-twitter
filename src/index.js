/*
 * moleculer-twitter
 * Copyright (c) 2022 Panagiotis Mamatsis (https://github.com/pmamatsis/moleculer-twitter)
 * MIT Licensed
 */

"use strict";

const { MoleculerError } = require("moleculer").Errors;
const { Context } = require("moleculer");
const { TweetLookup } = require("./libs/TweetLookup");
const { UserLookup } = require("./libs/UserLookup");

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
		retrieveSingleTweet: {
			params: {
				id: { type: "number" },
				objParams: { type: "object", optional: true }
			},
			async handler(ctx) {
				return await this.retrieveSingleTweet(ctx.params.id, ctx.params.objParams);
			}
		},
		retrieveMultipleTweets: {
			params: {
				ids: { type: "string" },
				objParams: { type: "object", optional: true }
			},
			async handler(ctx) {
				return await this.retrieveMultipleTweets(ctx.params.ids, ctx.params.objParams);
			}
		},
		retrieveUserById: {
			params: {
				id: { type: "number" },
				objParams: { type: "object", optional: true }
			},
			async handler(ctx) {
				return await this.retrieveUserById(ctx.params.id, ctx.params.objParams);
			}
		},
		retrieveUserByIds: {
			params: {
				ids: { type: "string" },
				objParams: { type: "object", optional: true }
			},
			async handler(ctx) {
				return await this.retrieveUserByIds(ctx.params.ids, ctx.params.objParams);
			}
		},
		retrieveUserByUsername: {
			params: {
				userName: { type: "string" },
				objParams: { type: "object", optional: true }
			},
			async handler(ctx) {
				return await this.retrieveUserByUsername(ctx.params.userName, ctx.params.objParams);
			}
		},
		retrieveUserByUsernames: {
			params: {
				userNames: { type: "string" },
				objParams: { type: "object", optional: true }
			},
			async handler(ctx) {
				return await this.retrieveUserByUsernames(ctx.params.userNames, ctx.params.objParams);
			}
		},
		retrieveAuthUserLookup: {
			params: {
				objParams: { type: "object", optional: true }
			},
			async handler(ctx) {
				return await this.retrieveAuthUserLookup(ctx.params.objParams);
			}
		}
	},

	/**
	 * Methods
	 */
	methods: {
		async retrieveSingleTweet(id, objParams){
			const tweetLookup = new TweetLookup(this.settings.twitterBearerToken);

			return await tweetLookup.retrieveSingleTweet(id, objParams);
		},
		async retrieveMultipleTweets(ids, objParams){
			const tweetLookup = new TweetLookup(this.settings.twitterBearerToken);

			return await tweetLookup.retrieveMultipleTweets(ids, objParams);
		},
		async retrieveUserById(id, objParams){
			const userLookup = new UserLookup(this.settings.twitterBearerToken);

			return await userLookup.retrieveUserById(id, objParams);
		},
		async retrieveUserByIds(ids, objParams){
			const userLookup = new UserLookup(this.settings.twitterBearerToken);

			return await userLookup.retrieveUserByIds(ids, objParams);
		},
		async retrieveUserByUsername(userName, objParams){
			const userLookup = new UserLookup(this.settings.twitterBearerToken);

			return await userLookup.retrieveUserByUsername(userName, objParams);
		},
		async retrieveUserByUsernames(userNames, objParams){
			const userLookup = new UserLookup(this.settings.twitterBearerToken);

			return await userLookup.retrieveUserByUsernames(userNames, objParams);
		},
		async retrieveAuthUserLookup(objParams){
			const userLookup = new UserLookup(this.settings.twitterBearerToken);

			return await userLookup.retrieveAuthUserLookup(objParams);
		}
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