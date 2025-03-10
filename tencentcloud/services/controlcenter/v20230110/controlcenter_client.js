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
 * controlcenter client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("controlcenter.tencentcloudapi.com", "2023-01-10", clientConfig);
    }
    /**
     * 获取某个基线项历史应用信息
     */
    async ListDeployStepTasks(req, cb) {
        return this.request("ListDeployStepTasks", req, cb);
    }
    /**
     * 获取用户基线配置数据
     */
    async GetAccountFactoryBaseline(req, cb) {
        return this.request("GetAccountFactoryBaseline", req, cb);
    }
    /**
     * 更新用户当前基线项配置，基线配置会覆盖更新为当前配置。新增基线项时需要将新增的基线配置加到现有配置，删除基线项时需要将删除的基线配置从现有配置移除，然后保存最新基线配置。
     */
    async UpdateAccountFactoryBaseline(req, cb) {
        return this.request("UpdateAccountFactoryBaseline", req, cb);
    }
    /**
     * 批量对存量账号应用基线
     */
    async BatchApplyAccountBaselines(req, cb) {
        return this.request("BatchApplyAccountBaselines", req, cb);
    }
    /**
     * 获取账号工厂系统基线项
     */
    async ListAccountFactoryBaselineItems(req, cb) {
        return this.request("ListAccountFactoryBaselineItems", req, cb);
    }
}
exports.Client = Client;
