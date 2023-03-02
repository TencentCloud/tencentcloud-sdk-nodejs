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
const CheckAppidExistRequest = models.CheckAppidExistRequest;
const QueryResourceInfoResponse = models.QueryResourceInfoResponse;
const CheckAppidExistResponse = models.CheckAppidExistResponse;
const GoodsDetail = models.GoodsDetail;
const QueryResourceInfoRequest = models.QueryResourceInfoRequest;
const QueryResourceResponse = models.QueryResourceResponse;
const QueryResourceRequest = models.QueryResourceRequest;
const Resource = models.Resource;


/**
 * anicloud client
 * @class
 */
class AnicloudClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("anicloud.tencentcloudapi.com", "2022-09-23", credential, region, profile);
    }
    
    /**
     * 查看appid是否存在
     * @param {CheckAppidExistRequest} req
     * @param {function(string, CheckAppidExistResponse):void} cb
     * @public
     */
    CheckAppidExist(req, cb) {
        let resp = new CheckAppidExistResponse();
        this.request("CheckAppidExist", req, resp, cb);
    }

    /**
     * 查询购买资源
     * @param {QueryResourceRequest} req
     * @param {function(string, QueryResourceResponse):void} cb
     * @public
     */
    QueryResource(req, cb) {
        let resp = new QueryResourceResponse();
        this.request("QueryResource", req, resp, cb);
    }

    /**
     * 查询资源信息
     * @param {QueryResourceInfoRequest} req
     * @param {function(string, QueryResourceInfoResponse):void} cb
     * @public
     */
    QueryResourceInfo(req, cb) {
        let resp = new QueryResourceInfoResponse();
        this.request("QueryResourceInfo", req, resp, cb);
    }


}
module.exports = AnicloudClient;
