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
const CreateBlockNodeRecordsRequest = models.CreateBlockNodeRecordsRequest;
const CreateBlockNodeRecordsResponse = models.CreateBlockNodeRecordsResponse;


/**
 * tan client
 * @class
 */
class TanClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tan.tencentcloudapi.com", "2022-04-20", credential, region, profile);
    }
    
    /**
     * 推送节点数据
     * @param {CreateBlockNodeRecordsRequest} req
     * @param {function(string, CreateBlockNodeRecordsResponse):void} cb
     * @public
     */
    CreateBlockNodeRecords(req, cb) {
        let resp = new CreateBlockNodeRecordsResponse();
        this.request("CreateBlockNodeRecords", req, resp, cb);
    }


}
module.exports = TanClient;
