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
const DataSearchResponse = models.DataSearchResponse;
const DataSearchRequest = models.DataSearchRequest;
const DataManipulationRequest = models.DataManipulationRequest;
const DataManipulationResponse = models.DataManipulationResponse;


/**
 * yunsou client
 * @class
 */
class YunsouClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("yunsou.tencentcloudapi.com", "2018-05-04", credential, region, profile);
    }
    
    /**
     * 上传云搜数据的API接口
     * @param {DataManipulationRequest} req
     * @param {function(string, DataManipulationResponse):void} cb
     * @public
     */
    DataManipulation(req, cb) {
        let resp = new DataManipulationResponse();
        this.request("DataManipulation", req, resp, cb);
    }

    /**
     * 用于检索云搜中的数据
     * @param {DataSearchRequest} req
     * @param {function(string, DataSearchResponse):void} cb
     * @public
     */
    DataSearch(req, cb) {
        let resp = new DataSearchResponse();
        this.request("DataSearch", req, resp, cb);
    }


}
module.exports = YunsouClient;
