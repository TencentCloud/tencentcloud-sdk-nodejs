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
 * essbasic client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("essbasic.tencentcloudapi.com", "2021-05-26", clientConfig);
    }
    /**
     * 接口（CreateFlowsByTemplates）用于使用多个模板批量创建流程
     */
    async CreateFlowsByTemplates(req, cb) {
        return this.request("CreateFlowsByTemplates", req, cb);
    }
    /**
     * 该接口 (PrepareFlows) 用于创建待发起文件
     */
    async PrepareFlows(req, cb) {
        return this.request("PrepareFlows", req, cb);
    }
    /**
     * 根据流程Id批量创建签署参与者签署H5链接
     */
    async CreateSignUrls(req, cb) {
        return this.request("CreateSignUrls", req, cb);
    }
    /**
     * 此接口（CreateConsoleLoginUrl）用于创建电子签控制台登录链接。若企业未激活，调用同步企业信息、同步经办人信息

     */
    async CreateConsoleLoginUrl(req, cb) {
        return this.request("CreateConsoleLoginUrl", req, cb);
    }
    /**
     * 此接口（SyncProxyOrganizationOperators）用于同步渠道合作企业经办人列表
     */
    async SyncProxyOrganizationOperators(req, cb) {
        return this.request("SyncProxyOrganizationOperators", req, cb);
    }
    /**
     * 此接口（DescribeUsage）用于获取渠道所有合作企业流量消耗情况。
 注: 此接口每日限频2次，若要扩大限制次数,请提前与客服经理或邮件至e-contract@tencent.com进行联系。
     */
    async DescribeUsage(req, cb) {
        return this.request("DescribeUsage", req, cb);
    }
    /**
     * 此接口（SyncProxyOrganization）用于同步渠道侧企业信息
     */
    async SyncProxyOrganization(req, cb) {
        return this.request("SyncProxyOrganization", req, cb);
    }
    /**
     * 通过此接口（DescribeTemplates）查询该企业在电子签渠道版中配置的有效模板列表
     */
    async DescribeTemplates(req, cb) {
        return this.request("DescribeTemplates", req, cb);
    }
}
exports.Client = Client;
