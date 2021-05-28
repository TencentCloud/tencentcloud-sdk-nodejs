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
const StopGameRequest = models.StopGameRequest;
const SaveGameArchiveResponse = models.SaveGameArchiveResponse;
const SwitchGameArchiveRequest = models.SwitchGameArchiveRequest;
const TrylockWorkerResponse = models.TrylockWorkerResponse;
const DescribeInstancesCountResponse = models.DescribeInstancesCountResponse;
const CreateSessionRequest = models.CreateSessionRequest;
const CreateSessionResponse = models.CreateSessionResponse;
const DescribeInstancesCountRequest = models.DescribeInstancesCountRequest;
const SaveGameArchiveRequest = models.SaveGameArchiveRequest;
const TrylockWorkerRequest = models.TrylockWorkerRequest;
const SwitchGameArchiveResponse = models.SwitchGameArchiveResponse;
const StopGameResponse = models.StopGameResponse;


/**
 * gs client
 * @class
 */
class GsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("gs.tencentcloudapi.com", "2019-11-18", credential, region, profile);
    }
    
    /**
     * 获取实例总数和运行数
     * @param {DescribeInstancesCountRequest} req
     * @param {function(string, DescribeInstancesCountResponse):void} cb
     * @public
     */
    DescribeInstancesCount(req, cb) {
        let resp = new DescribeInstancesCountResponse();
        this.request("DescribeInstancesCount", req, resp, cb);
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
     * 保存游戏存档
     * @param {SaveGameArchiveRequest} req
     * @param {function(string, SaveGameArchiveResponse):void} cb
     * @public
     */
    SaveGameArchive(req, cb) {
        let resp = new SaveGameArchiveResponse();
        this.request("SaveGameArchive", req, resp, cb);
    }

    /**
     * 切换游戏存档
     * @param {SwitchGameArchiveRequest} req
     * @param {function(string, SwitchGameArchiveResponse):void} cb
     * @public
     */
    SwitchGameArchive(req, cb) {
        let resp = new SwitchGameArchiveResponse();
        this.request("SwitchGameArchive", req, resp, cb);
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
module.exports = GsClient;
