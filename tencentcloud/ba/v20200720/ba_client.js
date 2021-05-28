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
const CreateWeappQRUrlRequest = models.CreateWeappQRUrlRequest;
const CreateWeappQRUrlResponse = models.CreateWeappQRUrlResponse;


/**
 * ba client
 * @class
 */
class BaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ba.tencentcloudapi.com", "2020-07-20", credential, region, profile);
    }
    
    /**
     * 创建渠道备案小程序二维码
     * @param {CreateWeappQRUrlRequest} req
     * @param {function(string, CreateWeappQRUrlResponse):void} cb
     * @public
     */
    CreateWeappQRUrl(req, cb) {
        let resp = new CreateWeappQRUrlResponse();
        this.request("CreateWeappQRUrl", req, resp, cb);
    }


}
module.exports = BaClient;
