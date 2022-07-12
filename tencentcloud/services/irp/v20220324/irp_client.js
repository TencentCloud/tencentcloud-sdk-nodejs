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
 * irp client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("irp.tencentcloudapi.com", "2022-03-24", clientConfig);
    }
    /**
     * 获取推荐结果
     */
    async RecommendContent(req, cb) {
        return this.request("RecommendContent", req, cb);
    }
    /**
     * 上报物料
     */
    async ReportMaterial(req, cb) {
        return this.request("ReportMaterial", req, cb);
    }
    /**
     * 上报行为
     */
    async ReportAction(req, cb) {
        return this.request("ReportAction", req, cb);
    }
    /**
     * 上报用户画像
     */
    async ReportPortrait(req, cb) {
        return this.request("ReportPortrait", req, cb);
    }
}
exports.Client = Client;
