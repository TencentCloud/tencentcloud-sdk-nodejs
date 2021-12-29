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
 * rce client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("rce.tencentcloudapi.com", "2020-11-03", clientConfig);
    }
    /**
     * 依托人工智能技术和腾讯丰富的风控实战经验，根据用户提供的数据和业务场景，给客户提供定制化模型服务
     */
    async DescribeRiskModel(req, cb) {
        return this.request("DescribeRiskModel", req, cb);
    }
    /**
     * 以图表形式展示三种请求状态的趋势变化
     */
    async DescribeRiskTrends(req, cb) {
        return this.request("DescribeRiskTrends", req, cb);
    }
    /**
     * 此接口用于查询风险评估结果
     */
    async DescribeRiskAssessment(req, cb) {
        return this.request("DescribeRiskAssessment", req, cb);
    }
    /**
     * 全栈式风控引擎（RiskControlEngine，RCE）是基于人工智能技术和腾讯20年风控实战沉淀，依托腾讯海量业务构建的风控引擎，以轻量级的 SaaS 服务方式接入，帮助您快速解决注册、登录、营销活动等关键场景遇到的欺诈问题，实时防御黑灰产作恶。
     */
    async ManageMarketingRisk(req, cb) {
        return this.request("ManageMarketingRisk", req, cb);
    }
}
exports.Client = Client;
