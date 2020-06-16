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
const DescribeWorkersInfoResponse = models.DescribeWorkersInfoResponse;
const ModifyWorkersResponse = models.ModifyWorkersResponse;
const StopGameResponse = models.StopGameResponse;
const WorkerRegionInfo = models.WorkerRegionInfo;
const TrylockWorkerResponse = models.TrylockWorkerResponse;
const QuitQueueRequest = models.QuitQueueRequest;
const DescribeWorkersResponse = models.DescribeWorkersResponse;
const ModifyWorkersRequest = models.ModifyWorkersRequest;
const DescribeWorkersInfoRequest = models.DescribeWorkersInfoRequest;
const CreateSessionResponse = models.CreateSessionResponse;
const QuitQueueResponse = models.QuitQueueResponse;
const EnterQueueRequest = models.EnterQueueRequest;
const StopGameRequest = models.StopGameRequest;
const TrylockWorkerRequest = models.TrylockWorkerRequest;
const WorkerDetail = models.WorkerDetail;
const CreateSessionRequest = models.CreateSessionRequest;
const EnterQueueResponse = models.EnterQueueResponse;
const DescribeWorkersRequest = models.DescribeWorkersRequest;


/**
 * gs client
 * @class
 */
class GsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("gs.tencentcloudapi.com", "2019-11-18", credential, region, profile);
    }
    
    /**
     * 进入排队锁定机器
     * @param {EnterQueueRequest} req
     * @param {function(string, EnterQueueResponse):void} cb
     * @public
     */
    EnterQueue(req, cb) {
        let resp = new EnterQueueResponse();
        this.request("EnterQueue", req, resp, cb);
    }

    /**
     * 尝试锁定机器
     * @param {TrylockWorkerRequest} req
     * @param {function(string, TrylockWorkerResponse):void} cb
     * @public
     */
    TrylockWorker(req, cb) {
        let resp = new TrylockWorkerResponse();
        this.request("TrylockWorker", req, resp, cb);
    }

    /**
     * 强制退出游戏
     * @param {StopGameRequest} req
     * @param {function(string, StopGameResponse):void} cb
     * @public
     */
    StopGame(req, cb) {
        let resp = new StopGameResponse();
        this.request("StopGame", req, resp, cb);
    }

    /**
     * 退出排队
     * @param {QuitQueueRequest} req
     * @param {function(string, QuitQueueResponse):void} cb
     * @public
     */
    QuitQueue(req, cb) {
        let resp = new QuitQueueResponse();
        this.request("QuitQueue", req, resp, cb);
    }

    /**
     * 查询空闲机器数量
     * @param {DescribeWorkersRequest} req
     * @param {function(string, DescribeWorkersResponse):void} cb
     * @public
     */
    DescribeWorkers(req, cb) {
        let resp = new DescribeWorkersResponse();
        this.request("DescribeWorkers", req, resp, cb);
    }

    /**
     * 获取机器信息
     * @param {DescribeWorkersInfoRequest} req
     * @param {function(string, DescribeWorkersInfoResponse):void} cb
     * @public
     */
    DescribeWorkersInfo(req, cb) {
        let resp = new DescribeWorkersInfoResponse();
        this.request("DescribeWorkersInfo", req, resp, cb);
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

    /**
     * 修改机器信息
     * @param {ModifyWorkersRequest} req
     * @param {function(string, ModifyWorkersResponse):void} cb
     * @public
     */
    ModifyWorkers(req, cb) {
        let resp = new ModifyWorkersResponse();
        this.request("ModifyWorkers", req, resp, cb);
    }


}
module.exports = GsClient;
