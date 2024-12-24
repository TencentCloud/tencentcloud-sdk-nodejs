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
 * aca client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("aca.tencentcloudapi.com", "2021-03-23", clientConfig);
    }
    /**
     * 登录获取token
     */
    async LoginHisTool(req, cb) {
        return this.request("LoginHisTool", req, cb);
    }
    /**
     * 药品适应症接口
     */
    async GetDrugIndications(req, cb) {
        return this.request("GetDrugIndications", req, cb);
    }
    /**
     * 登出
     */
    async LoginOutHisTool(req, cb) {
        return this.request("LoginOutHisTool", req, cb);
    }
    /**
     * 辅诊智能预测接口
     */
    async SmartPredict(req, cb) {
        return this.request("SmartPredict", req, cb);
    }
    /**
     * 智能用药接口
     */
    async SmartDrugInfo(req, cb) {
        return this.request("SmartDrugInfo", req, cb);
    }
    /**
     * 用于院方科室管理，获取科室列表和状态、新增或修改科室信息、删除科室。
     */
    async SyncDepartment(req, cb) {
        return this.request("SyncDepartment", req, cb);
    }
    /**
     * 同步标准字典，如给药频次、给药途径、科室、诊断等
     */
    async SyncStandardDict(req, cb) {
        return this.request("SyncStandardDict", req, cb);
    }
    /**
     * 药品同步，一次同步数据不要超过500个
     */
    async UploadDrugs(req, cb) {
        return this.request("UploadDrugs", req, cb);
    }
}
exports.Client = Client;
