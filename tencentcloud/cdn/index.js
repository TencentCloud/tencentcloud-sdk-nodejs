'use strict';

var requestLib = require('request');
var _ = require('lodash');
var utilityLib = require('utility');
var commonUtils = require('./libs/utils');

var OPENAPI_HOST = 'cdn.api.qcloud.com';
var OPENAPI_PATH = '/v2/index.php';
var OPENAPI_URL = 'https://' + OPENAPI_HOST + OPENAPI_PATH;
var METHOD = 'POST';


var QcloudSDK = function() {
    this.secretKey = '';
    this.secretId = '';
}

QcloudSDK.prototype.config = function(userConfig) {
    checkUserConfig(userConfig)

    this.secretKey = userConfig.secretKey;
    this.secretId = userConfig.secretId;
}

QcloudSDK.prototype.request = function(actionName, params, callback) {
    checkUserConfig({
        secretKey: this.secretKey,
        secretId: this.secretId
    })

    params = params || {};
    var timestamp = Math.ceil((new Date()-0)/1000);
    var nonce = _.random(1000000);
    var signature = createSignature(actionName, nonce, timestamp, params, this.secretKey, this.secretId);

    var requestData = _.assign({
        'Action': actionName,
        'Timestamp': timestamp,
        'Nonce': nonce,
        'SecretId': this.secretId,
        'Signature': signature,
    }, params)

    requestData = commonUtils.serialize(requestData)

    requestLib.post({
        url: OPENAPI_URL,
        form: requestData
    }, function(err, httpRes, body) {
        if(err) {
            callback(err);
            return;
        }

        callback(body)
    })
}


function checkUserConfig(userConfig) {

    if(!_.isPlainObject(userConfig) 
        || !_.isString(userConfig['secretKey'])
        || !_.isString(userConfig['secretId'])) {
            throw new Error('::config function should be called required an object param which contains secretKey[String] and secretId[String]')
    }
}

function createSignature(actionName, nonce, timestamp, params, secretKey, secretId) {
    var originObject = _.assign({
                            'Action': actionName,
                            'Nonce': nonce,
                            'SecretId': secretId,
                            'Timestamp': timestamp
                        }, params);
    var sortedObject = commonUtils.sortObject(originObject);
    var serializeString = commonUtils.serialize(sortedObject);
    var originSignature = METHOD+OPENAPI_HOST+OPENAPI_PATH+'?'+serializeString;
    var signature = encodeURIComponent(utilityLib.hmac('sha1', secretKey, originSignature));

    return signature
}


var qcloudSDK = new QcloudSDK();


module.exports = qcloudSDK;

