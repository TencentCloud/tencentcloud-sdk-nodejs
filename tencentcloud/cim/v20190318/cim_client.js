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
const DescribeSdkAppidResponse = models.DescribeSdkAppidResponse;
const DescribeSdkAppidRequest = models.DescribeSdkAppidRequest;


/**
 * cim client
 * @class
 */
class CimClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cim.tencentcloudapi.com", "2019-03-18", credential, region, profile);
    }
    
    /**
     * 获取云通信IM中腾讯云账号对应的SDKAppID
     * @param {DescribeSdkAppidRequest} req
     * @param {function(string, DescribeSdkAppidResponse):void} cb
     * @public
     */
    DescribeSdkAppid(req, cb) {
        let resp = new DescribeSdkAppidResponse();
        this.request("DescribeSdkAppid", req, resp, cb);
    }


}
module.exports = CimClient;
