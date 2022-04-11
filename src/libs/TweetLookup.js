/**
 * NOTE: The authentication of this class can be done via "Bearer Token" method.
 */

"use strict";

const { MoleculerError } = require("moleculer").Errors;
const axios = require("axios");

class TweetLookup {
    bearerKey = "";

    /**
     * Class constructor accepts the Twitter bearer access key
     * 
     * @param {String} bearerKey 
     */
    constructor(bearerKey = ""){
        this.bearerKey = bearerKey;
    }

    /**
     * Function to retrieve a tweet based on an tweet id.
     * 
     * @param {Number} id 
     * @param {Object} obj 
     * @returns {Promise<Object>}
     */
    async retrieveSingleTweet(id, objParams = {}){
        const API_URL=`https://api.twitter.com/2/tweets/${id}`;

        return axios.get(API_URL, {params: objParams, headers: {'content-type': 'application/json', 'Authorization': `Bearer ${this.bearerKey}`}})
            .then(response => response.data)
            .catch(error => Promise.reject(new MoleculerError(error.message + " " + error.detail, 500, "RETRIEVE_SINGLE_TWEET_ERROR")));
    }

    /**
     * Function to retrieve multiple tweets based on a comma separated list of tweet ids.
     * @param {String} ids 
     * @param {Object} objParams 
     * @returns {Promise<Object>}
     */
    async retrieveMultipleTweets(ids, objParams = {}){
        const API_URL=`https://api.twitter.com/2/tweets?ids=${ids}`;

        return axios.get(API_URL, {params: objParams, headers: {'content-type': 'application/json', 'Authorization': `Bearer ${this.bearerKey}`}})
            .then(response => response.data)
            .catch(error => Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "RETRIEVE_MULTIPLE_TWEET_ERROR")));

    }
}

module.exports = {
    TweetLookup
}