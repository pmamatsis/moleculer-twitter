'use strict';

const { MoleculerError } = require("moleculer").Errors;
const axios = require("axios");

class Follow {
    bearerKey = "";

    /**
     * Class constructor accepts the Twitter bearer access key
     * 
     * @param {String} bearerKey 
     */
    constructor(bearerKey = ""){
        this.bearerKey = bearerKey;
    }

    async retrieveFollowersOfUserId(id, objParams){
        const API_URL=`https://api.twitter.com/2/users/${id}/followers`;

        return axios.get(API_URL, {params: objParams, headers: {'content-type': 'application/json', 'Authorization': `Bearer ${this.bearerKey}`}})
            .then(response => response.data)
            .catch(error => Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "RETRIEVE_FOLLOWERS_OF_USER_ID_ERROR")));
    }

    async retrieveUserIdFollowing(id, objParams){
        const API_URL=`https://api.twitter.com/2/users/${id}/following`;

        return axios.get(API_URL, {params: objParams, headers: {'content-type': 'application/json', 'Authorization': `Bearer ${this.bearerKey}`}})
            .then(response => response.data)
            .catch(error => Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "RETRIEVE_USER_ID_FOLLOWING_ERROR")));
    }

    async followAUserId(id, targetUserId){
        const API_URL=`https://api.twitter.com/2/users/${id}/following`;

        return axios.post(API_URL, {target_user_id: targetUserId}, { headers: {'content-type': 'application/json', 'Authorization': `Bearer ${this.bearerKey}`} })
            .then(response => response.data)
            .catch(error => Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "FOLLOW_USER_ID_ERROR")));
    }

    async unFollowUserId(id, targetUserId){
        const API_URL=`https://api.twitter.com/2/users/${id}/following/${targetUserId}`;

        return axios.delete(API_URL, { headers: {'content-type': 'application/json', 'Authorization': `Bearer ${this.bearerKey}`} })
            .then(response => response.data)
            .catch(error => Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "UNFOLLOW_USER_ID_ERROR")));
    }
}