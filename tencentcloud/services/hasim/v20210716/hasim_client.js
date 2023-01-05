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
 * hasim client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("hasim.tencentcloudapi.com", "2021-07-16", clientConfig);
    }
    /**
     * 删除策略
     */
    async DeleteTactic(req, cb) {
        return this.request("DeleteTactic", req, cb);
    }
    /**
     * 查询订单列表
     */
    async DescribeOrders(req, cb) {
        return this.request("DescribeOrders", req, cb);
    }
    /**
     * 查询云兔切换策略列表
     */
    async DescribeTactics(req, cb) {
        return this.request("DescribeTactics", req, cb);
    }
    /**
     * 创建自动化规则
     */
    async CreateRule(req, cb) {
        return this.request("CreateRule", req, cb);
    }
    /**
     * 删除标签
     */
    async DeleteTag(req, cb) {
        return this.request("DeleteTag", req, cb);
    }
    /**
     * 查询云兔连接列表
     */
    async DescribeLinks(req, cb) {
        return this.request("DescribeLinks", req, cb);
    }
    /**
     * 删除自动化规则
     */
    async DeleteRule(req, cb) {
        return this.request("DeleteRule", req, cb);
    }
    /**
     * 编辑自动化规则状态
     */
    async ModifyRuleStatus(req, cb) {
        return this.request("ModifyRuleStatus", req, cb);
    }
    /**
     * 编辑云兔高级日志状态
     */
    async ModifyLinkAdvancedLog(req, cb) {
        return this.request("ModifyLinkAdvancedLog", req, cb);
    }
    /**
     * 创建标签
     */
    async CreateTag(req, cb) {
        return this.request("CreateTag", req, cb);
    }
    /**
     * 修改云兔运营商
     */
    async ModifyLinkTele(req, cb) {
        return this.request("ModifyLinkTele", req, cb);
    }
    /**
     * 查询自动化规则
     */
    async DescribeRule(req, cb) {
        return this.request("DescribeRule", req, cb);
    }
    /**
     * 查询标签列表
     */
    async DescribeTags(req, cb) {
        return this.request("DescribeTags", req, cb);
    }
    /**
     * 编辑自动化规则
     */
    async ModifyRule(req, cb) {
        return this.request("ModifyRule", req, cb);
    }
    /**
     * 查询云兔连接详细信息
     */
    async DescribeLink(req, cb) {
        return this.request("DescribeLink", req, cb);
    }
    /**
     * 创建云兔切换策略
     */
    async CreateTactic(req, cb) {
        return this.request("CreateTactic", req, cb);
    }
    /**
     * 刷新云兔连接信息同步
     */
    async RenewLinkInfo(req, cb) {
        return this.request("RenewLinkInfo", req, cb);
    }
    /**
     * 修改云兔切换策略
     */
    async ModifyTactic(req, cb) {
        return this.request("ModifyTactic", req, cb);
    }
    /**
     * 查询云兔切换策略信息
     */
    async DescribeTactic(req, cb) {
        return this.request("DescribeTactic", req, cb);
    }
    /**
     * 查询自动化规则列表
     */
    async DescribeRules(req, cb) {
        return this.request("DescribeRules", req, cb);
    }
    /**
     * 编辑云兔策略
     */
    async ModifyLinkTactic(req, cb) {
        return this.request("ModifyLinkTactic", req, cb);
    }
    /**
     * 编辑标签
     */
    async ModifyTag(req, cb) {
        return this.request("ModifyTag", req, cb);
    }
}
exports.Client = Client;
