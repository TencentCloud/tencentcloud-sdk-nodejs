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
const CreateSessionResponse = models.CreateSessionResponse;
const DestroySessionResponse = models.DestroySessionResponse;
const ApplyConcurrentResponse = models.ApplyConcurrentResponse;
const ApplyConcurrentRequest = models.ApplyConcurrentRequest;
const DestroySessionRequest = models.DestroySessionRequest;
const CreateSessionRequest = models.CreateSessionRequest;


/**
 * car client
 * @class
 */
class CarClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("car.tencentcloudapi.com", "2022-01-10", credential, region, profile);
    }
    
    /**
     * 申请并发
     * @param {ApplyConcurrentRequest} req
     * @param {function(string, ApplyConcurrentResponse):void} cb
     * @public
     */
    ApplyConcurrent(req, cb) {
        let resp = new ApplyConcurrentResponse();
        this.request("ApplyConcurrent", req, resp, cb);
    }

    /**
     * 销毁会话
     * @param {DestroySessionRequest} req
     * @param {function(string, DestroySessionResponse):void} cb
     * @public
     */
    DestroySession(req, cb) {
        let resp = new DestroySessionResponse();
        this.request("DestroySession", req, resp, cb);
    }

    /**
     * 创建会话
     * @param {CreateSessionRequest} req
     * @param {function(string, CreateSessionResponse):void} cb
     * @public
     */
    CreateSession(req, cb) {
        let resp = new CreateSessionResponse();
        this.request("CreateSession", req, resp, cb);
    }


}
module.exports = CarClient;
