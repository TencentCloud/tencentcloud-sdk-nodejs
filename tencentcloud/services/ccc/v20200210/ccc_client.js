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
 * ccc client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ccc.tencentcloudapi.com", "2020-02-10", clientConfig);
    }
    /**
     * 包括具体聊天内容
     */
    async DescribeChatMessages(req, cb) {
        return this.request("DescribeChatMessages", req, cb);
    }
    /**
     * 包括全媒体和文本两种类型
     */
    async DescribeIMCdrs(req, cb) {
        return this.request("DescribeIMCdrs", req, cb);
    }
    /**
     * 按实例获取电话消耗统计
     */
    async DescribeTelCallInfo(req, cb) {
        return this.request("DescribeTelCallInfo", req, cb);
    }
    /**
     * 创建 SDK 登录 Token。
     */
    async CreateSDKLoginToken(req, cb) {
        return this.request("CreateSDKLoginToken", req, cb);
    }
    /**
     * 获取坐席用户列表
     */
    async DescribeSeatUserList(req, cb) {
        return this.request("DescribeSeatUserList", req, cb);
    }
    /**
     * 获取 PSTN 活动会话列表。
     */
    async DescribePSTNActiveSessionList(req, cb) {
        return this.request("DescribePSTNActiveSessionList", req, cb);
    }
    /**
     * 创建客服账号。
     */
    async CreateStaff(req, cb) {
        return this.request("CreateStaff", req, cb);
    }
    /**
     * 获取电话服务记录与录音
     */
    async DescribeTelCdr(req, cb) {
        return this.request("DescribeTelCdr", req, cb);
    }
}
exports.Client = Client;
