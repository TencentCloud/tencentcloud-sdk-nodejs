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
 * npp client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("npp.tencentcloudapi.com", "2019-08-23", clientConfig);
    }
    /**
     * 回拨呼叫取消
     */
    async DeleteCallBack(req, cb) {
        return this.request("DeleteCallBack", req, cb);
    }
    /**
     * 回拨拉取主叫显号号码集合
     */
    async DescribeCallerDisplayList(req, cb) {
        return this.request("DescribeCallerDisplayList", req, cb);
    }
    /**
     * 直拨解绑中间号
     */
    async DelVirtualNum(req, cb) {
        return this.request("DelVirtualNum", req, cb);
    }
    /**
     * 直拨获取中间号（App 使用方发起）
     */
    async GetVirtualNum(req, cb) {
        return this.request("GetVirtualNum", req, cb);
    }
    /**
     * 直拨话单获取接口
     */
    async Get400Cdr(req, cb) {
        return this.request("Get400Cdr", req, cb);
    }
    /**
     * 回拨通话状态获取
     */
    async DescribeCallBackStatus(req, cb) {
        return this.request("DescribeCallBackStatus", req, cb);
    }
    /**
     * 回拨呼叫请求
     */
    async CreateCallBack(req, cb) {
        return this.request("CreateCallBack", req, cb);
    }
    /**
     * 回拨话单获取接口
     */
    async DescribeCallBackCdr(req, cb) {
        return this.request("DescribeCallBackCdr", req, cb);
    }
}
exports.Client = Client;
