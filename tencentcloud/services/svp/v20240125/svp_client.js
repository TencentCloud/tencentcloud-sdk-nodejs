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
 * svp client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("svp.tencentcloudapi.com", "2024-01-25", clientConfig);
    }
    /**
     * 查询当前用户节省计划覆盖率明细数据，如无特别说明，金额单位均为元（国内站）或者美元（国际站）。
     */
    async DescribeSavingPlanCoverage(req, cb) {
        return this.request("DescribeSavingPlanCoverage", req, cb);
    }
    /**
     * 查用当前用户明细节省计划查询时段内的使用情况
     */
    async DescribeSavingPlanUsage(req, cb) {
        return this.request("DescribeSavingPlanUsage", req, cb);
    }
    /**
     * 查用当前用户明细节省计划总览查询时段内的使用情况
     */
    async DescribeSavingPlanOverview(req, cb) {
        return this.request("DescribeSavingPlanOverview", req, cb);
    }
    /**
     * 创建节省计划订单
     */
    async CreateSavingPlanOrder(req, cb) {
        return this.request("CreateSavingPlanOrder", req, cb);
    }
    /**
     * 查询节省计划抵扣明细
     */
    async DescribeSavingPlanDeduct(req, cb) {
        return this.request("DescribeSavingPlanDeduct", req, cb);
    }
}
exports.Client = Client;
