/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const SendMessageResponse = models.SendMessageResponse;
const BatchContent = models.BatchContent;
const SendMessageRequest = models.SendMessageRequest;


/**
 * dataintegration client
 * @class
 */
class DataintegrationClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dataintegration.tencentcloudapi.com", "2022-06-13", credential, region, profile);
    }
    
    /**
     * 使用SDK将数据上报到DIP
     * @param {SendMessageRequest} req
     * @param {function(string, SendMessageResponse):void} cb
     * @public
     */
    SendMessage(req, cb) {
        let resp = new SendMessageResponse();
        this.request("SendMessage", req, resp, cb);
    }


}
module.exports = DataintegrationClient;
