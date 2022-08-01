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
 * bma client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("bma.tencentcloudapi.com", "2021-06-24", clientConfig);
    }
    /**
     * 查询作品基本信息
     */
    async DescribeCRWorkInfo(req, cb) {
        return this.request("DescribeCRWorkInfo", req, cb);
    }
    /**
     * 申请取证
     */
    async ModifyCRObtainStatus(req, cb) {
        return this.request("ModifyCRObtainStatus", req, cb);
    }
    /**
     * 版权保护-拦截申请接口
     */
    async ModifyCRBlockStatus(req, cb) {
        return this.request("ModifyCRBlockStatus", req, cb);
    }
    /**
     * 版权保护-新建发函接口
     */
    async CreateCRRight(req, cb) {
        return this.request("CreateCRRight", req, cb);
    }
    /**
     * 版权保护-查询监测列表接口
     */
    async DescribeCRMonitors(req, cb) {
        return this.request("DescribeCRMonitors", req, cb);
    }
    /**
     * 版权保护-维权申请接口
     */
    async ModifyCRRightStatus(req, cb) {
        return this.request("ModifyCRRightStatus", req, cb);
    }
    /**
     * 更新作品
     */
    async UpdateCRWork(req, cb) {
        return this.request("UpdateCRWork", req, cb);
    }
    /**
     * 品牌经营管家-版权保护模块企业认证接口
     */
    async CreateCRCompanyVerify(req, cb) {
        return this.request("CreateCRCompanyVerify", req, cb);
    }
    /**
     * 版权保护-修改监测状态接口
     */
    async ModifyCRMonitor(req, cb) {
        return this.request("ModifyCRMonitor", req, cb);
    }
    /**
     * 版权保护-新建拦截接口
     */
    async CreateCRBlock(req, cb) {
        return this.request("CreateCRBlock", req, cb);
    }
    /**
     * 版权保护-添加作品接口
     */
    async CreateCRWork(req, cb) {
        return this.request("CreateCRWork", req, cb);
    }
    /**
     * 版权保护-查询作品监测详情接口
     */
    async DescribeCRMonitorDetail(req, cb) {
        return this.request("DescribeCRMonitorDetail", req, cb);
    }
}
exports.Client = Client;
