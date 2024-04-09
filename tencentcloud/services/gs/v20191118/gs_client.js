"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * gs client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("gs.tencentcloudapi.com", "2019-11-18", clientConfig);
    }
    /**
     * 获取并发总数和运行数
     */
    async DescribeInstancesCount(req, cb) {
        return this.request("DescribeInstancesCount", req, cb);
    }
    /**
     * 尝试锁定机器
     */
    async TrylockWorker(req, cb) {
        return this.request("TrylockWorker", req, cb);
    }
    /**
     * 强制退出游戏
     */
    async StopGame(req, cb) {
        return this.request("StopGame", req, cb);
    }
    /**
     * 保存游戏存档
     */
    async SaveGameArchive(req, cb) {
        return this.request("SaveGameArchive", req, cb);
    }
    /**
     * 开始云端推流
     */
    async StartPublishStreamToCSS(req, cb) {
        return this.request("StartPublishStreamToCSS", req, cb);
    }
    /**
     * 切换游戏存档
     */
    async SwitchGameArchive(req, cb) {
        return this.request("SwitchGameArchive", req, cb);
    }
    /**
     * 开始云端推流
     */
    async StartPublishStream(req, cb) {
        return this.request("StartPublishStream", req, cb);
    }
    /**
     * 停止云端推流
     */
    async StopPublishStream(req, cb) {
        return this.request("StopPublishStream", req, cb);
    }
    /**
     * 创建会话
     */
    async CreateSession(req, cb) {
        return this.request("CreateSession", req, cb);
    }
}
exports.Client = Client;
