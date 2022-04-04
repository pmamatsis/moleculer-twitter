"use strict";

const axios = require("axios");

class UserLookup {
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
     * Function to retrieve a single user's information based on the tweeter id.
     * 
     * @param {Number} id 
     * @param {Object} objParams 
     * @returns {Promise<Object>}
     */
    async retrieveUserById(id, objParams = {}){
        const API_URL=`https://api.twitter.com/2/users/${id}`;

        return axios.get(API_URL, {params: objParams, headers: {'content-type': 'application/json', 'Authorization': `Bearer ${this.bearerKey}`}})
            .then(response => response.data)
            .catch(error => this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "RETRIEVE_SINGLE_USER_BY_ID_ERROR")));
    }

    /**
     * Function to retrieve a users information based on a list of ids comma separated.
     * 
     * @param {String} ids 
     * @param {Object} objParams 
     * @returns {Promise<Object>}
     */
    async retrieveUserByIds(ids, objParams = {}){
        const API_URL=`https://api.twitter.com/2/users/${ids}`;

        return axios.get(API_URL, {params: objParams, headers: {'content-type': 'application/json', 'Authorization': `Bearer ${this.bearerKey}`}})
            .then(response => response.data)
            .catch(error => this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "RETRIEVE_SINGLE_USER_BY_IDS_ERROR")));
    }


}