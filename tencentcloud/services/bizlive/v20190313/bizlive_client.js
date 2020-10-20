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
 * bizlive client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("bizlive.tencentcloudapi.com", "2019-03-13", clientConfig);
    }
    /**
     * 禁止某条流的推送，可以预设某个时刻将流恢复。
     */
    async ForbidLiveStream(req, cb) {
        return this.request("ForbidLiveStream", req, cb);
    }
    /**
     * 强制退出游戏
     */
    async StopGame(req, cb) {
        return this.request("StopGame", req, cb);
    }
    /**
     * 注册聊天室
     */
    async RegisterIM(req, cb) {
        return this.request("RegisterIM", req, cb);
    }
    /**
     * 查询空闲机器数量
     */
    async DescribeWorkers(req, cb) {
        return this.request("DescribeWorkers", req, cb);
    }
    /**
     * 查询播放数据，支持按流名称查询详细播放数据，也可按播放域名查询详细总数据。
     */
    async DescribeStreamPlayInfoList(req, cb) {
        return this.request("DescribeStreamPlayInfoList", req, cb);
    }
    /**
     * 创建会话
     */
    async CreateSession(req, cb) {
        return this.request("CreateSession", req, cb);
    }
}
exports.Client = Client;
