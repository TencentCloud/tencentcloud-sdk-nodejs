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
 * cfw client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cfw.tencentcloudapi.com", "2019-09-04", clientConfig);
    }
    /**
     * nat规则列表概况
     */
    async DescribeNatRuleOverview(req, cb) {
        return this.request("DescribeNatRuleOverview", req, cb);
    }
    /**
     * 修改规则表状态
     */
    async ModifyTableStatus(req, cb) {
        return this.request("ModifyTableStatus", req, cb);
    }
    /**
     * 获取安全组关联实例列表
     */
    async DescribeAssociatedInstanceList(req, cb) {
        return this.request("DescribeAssociatedInstanceList", req, cb);
    }
    /**
     * vpc规则列表概况
     */
    async DescribeVpcRuleOverview(req, cb) {
        return this.request("DescribeVpcRuleOverview", req, cb);
    }
    /**
     * 删除规则
     */
    async DeleteAcRule(req, cb) {
        return this.request("DeleteAcRule", req, cb);
    }
    /**
     * 创建安全组API规则
     */
    async CreateSecurityGroupApiRules(req, cb) {
        return this.request("CreateSecurityGroupApiRules", req, cb);
    }
    /**
     * 同步资产状态查询-互联网&VPC
     */
    async DescribeSyncAssetStatus(req, cb) {
        return this.request("DescribeSyncAssetStatus", req, cb);
    }
    /**
     * 查询安全组规则列表
     */
    async DescribeSecurityGroupList(req, cb) {
        return this.request("DescribeSecurityGroupList", req, cb);
    }
    /**
     * 删除全部规则
     */
    async DeleteSecurityGroupAllRule(req, cb) {
        return this.request("DeleteSecurityGroupAllRule", req, cb);
    }
    /**
     * 创建规则
     */
    async CreateAcRules(req, cb) {
        return this.request("CreateAcRules", req, cb);
    }
    /**
     * 启用停用全部规则
     */
    async ModifySecurityGroupAllRuleStatus(req, cb) {
        return this.request("ModifySecurityGroupAllRuleStatus", req, cb);
    }
    /**
     * 防火墙开关列表
     */
    async DescribeSwitchLists(req, cb) {
        return this.request("DescribeSwitchLists", req, cb);
    }
    /**
     * 查询规则列表概况
     */
    async DescribeRuleOverview(req, cb) {
        return this.request("DescribeRuleOverview", req, cb);
    }
    /**
     * 修改规则执行顺序
     */
    async ModifySequenceRules(req, cb) {
        return this.request("ModifySequenceRules", req, cb);
    }
    /**
     * 一键开启和关闭
     */
    async ModifyAllSwitchStatus(req, cb) {
        return this.request("ModifyAllSwitchStatus", req, cb);
    }
    /**
     * 启用停用全部规则
     */
    async ModifyAllRuleStatus(req, cb) {
        return this.request("ModifyAllRuleStatus", req, cb);
    }
    /**
     * 查询规则表状态
     */
    async DescribeTableStatus(req, cb) {
        return this.request("DescribeTableStatus", req, cb);
    }
    /**
     * 同步资产-互联网&VPC
     */
    async RunSyncAsset(req, cb) {
        return this.request("RunSyncAsset", req, cb);
    }
    /**
     * 修改规则
     */
    async ModifyAcRule(req, cb) {
        return this.request("ModifyAcRule", req, cb);
    }
    /**
     * 删除规则
     */
    async DeleteSecurityGroupRule(req, cb) {
        return this.request("DeleteSecurityGroupRule", req, cb);
    }
    /**
     * 访问控制列表
     */
    async DescribeAcLists(req, cb) {
        return this.request("DescribeAcLists", req, cb);
    }
    /**
     * 全部删除规则
     */
    async DeleteAllAccessControlRule(req, cb) {
        return this.request("DeleteAllAccessControlRule", req, cb);
    }
    /**
     * 修改单个防火墙开关
     */
    async ModifyItemSwitchStatus(req, cb) {
        return this.request("ModifyItemSwitchStatus", req, cb);
    }
}
exports.Client = Client;
