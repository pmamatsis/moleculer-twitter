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
     * Function to retrieve a single user's information based on the twitter id.
     * 
     * @param {Number} id 
     * @param {Object} objParams 
     * @returns {Promise<Object>}
     */
    async retrieveUserById(id, objParams = {}){
        const API_URL=`https://api.twitter.com/2/users/${id}`;

        return axios.get(API_URL, {params: objParams, headers: {'content-type': 'application/json', 'Authorization': `Bearer ${this.bearerKey}`}})
            .then(response => response.data)
            .catch(error => Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "RETRIEVE_SINGLE_USER_BY_ID_ERROR")));
    }

    /**
     * Function to retrieve a users information based on a list of ids comma separated.
     * 
     * @param {String} ids 
     * @param {Object} objParams 
     * @returns {Promise<Object>}
     */
    async retrieveUserByIds(ids, objParams = {}){
        const API_URL=`https://api.twitter.com/2/users?ids=${ids}`;

        return axios.get(API_URL, {params: objParams, headers: {'content-type': 'application/json', 'Authorization': `Bearer ${this.bearerKey}`}})
            .then(response => response.data)
            .catch(error => Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "RETRIEVE_SINGLE_USER_BY_IDS_ERROR")));
    }

    /**
     * Function to retrieve a single user's information based on the twitter username.
     * 
     * @param {String} userName 
     * @param {Object} objParams 
     * @returns {Promise<Object>}
     */
    async retrieveUserByUsername(userName, objParams = {}){
        const API_URL=`https://api.twitter.com/2/users/by/username/${userName}`;

        return axios.get(API_URL, {params: objParams, headers: {'content-type': 'application/json', 'Authorization': `Bearer ${this.bearerKey}`}})
            .then(response => response.data)
            .catch(error => Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "RETRIEVE_SINGLE_USER_BY_USERNAME_ERROR")));

    }

    /**
     * Function to retrieve a users information based on a list of twitter usernames comma separated.
     * 
     * @param {String} userNames 
     * @param {Object} objParams 
     * @returns {Promise<Object>}
     */
    async retrieveUserByUsernames(userNames, objParams = {}){
        const API_URL=`https://api.twitter.com/2/users/by?usernames=${userNames}`;

        return axios.get(API_URL, {params: objParams, headers: {'content-type': 'application/json', 'Authorization': `Bearer ${this.bearerKey}`}})
            .then(response => response.data)
            .catch(error => Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "RETRIEVE_SINGLE_USER_BY_USERNAMES_ERROR")));
    }

    /**
     * Function to retrieve information about the authorized Twitter end-user.
     * 
     * @param {Object} objParams 
     * @returns {Promise<Object>}
     */
    async retrieveAuthUserLookup(objParams){
        const API_URL='https://api.twitter.com/2/me';

        return axios.get(API_URL, {params: objParams, headers: {'content-type': 'application/json', 'Authorization': `Bearer ${this.bearerKey}`}})
            .then(response => response.data)
            .catch(error => Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "RETRIEVE_AUTH_USER_LOOKUP_ERROR")));
    }
}

module.exports = {
    UserLookup
}