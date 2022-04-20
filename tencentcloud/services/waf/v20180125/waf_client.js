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
 * waf client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("waf.tencentcloudapi.com", "2018-01-25", clientConfig);
    }
    /**
     * 本接口用于获取访问日志导出列表
     */
    async DescribeAccessExports(req, cb) {
        return this.request("DescribeAccessExports", req, cb);
    }
    /**
     * 获取防护配置中的自定义策略列表
     */
    async DescribeCustomRules(req, cb) {
        return this.request("DescribeCustomRules", req, cb);
    }
    /**
     * 开启或禁用自定义策略
     */
    async ModifyCustomRuleStatus(req, cb) {
        return this.request("ModifyCustomRuleStatus", req, cb);
    }
    /**
     * 本接口用于删除访问日志导出
     */
    async DeleteAccessExport(req, cb) {
        return this.request("DeleteAccessExport", req, cb);
    }
    /**
     * 删除域名规则白名单


     */
    async DeleteDomainWhiteRules(req, cb) {
        return this.request("DeleteDomainWhiteRules", req, cb);
    }
    /**
     * 查询用户所有域名的详细信息
     */
    async DescribeDomains(req, cb) {
        return this.request("DescribeDomains", req, cb);
    }
    /**
     * 本接口用于获取访问日志索引配置信息
     */
    async DescribeAccessIndex(req, cb) {
        return this.request("DescribeAccessIndex", req, cb);
    }
    /**
     * 本接口用于创建访问日志导出
     */
    async CreateAccessExport(req, cb) {
        return this.request("CreateAccessExport", req, cb);
    }
    /**
     * Waf IP黑白名单Delete接口
     */
    async DeleteIpAccessControl(req, cb) {
        return this.request("DeleteIpAccessControl", req, cb);
    }
    /**
     * 配置WAF自动封禁模块状态
     */
    async ModifyWafAutoDenyStatus(req, cb) {
        return this.request("ModifyWafAutoDenyStatus", req, cb);
    }
    /**
     * 本接口用于修改访问日志保存期限
     */
    async ModifyAccessPeriod(req, cb) {
        return this.request("ModifyAccessPeriod", req, cb);
    }
    /**
     * 获取waf流量访问趋势
     */
    async DescribeFlowTrend(req, cb) {
        return this.request("DescribeFlowTrend", req, cb);
    }
    /**
     * 创建攻击日志下载任务
     */
    async CreateAttackDownloadTask(req, cb) {
        return this.request("CreateAttackDownloadTask", req, cb);
    }
    /**
     * 更改某一条规则
     */
    async ModifyDomainWhiteRule(req, cb) {
        return this.request("ModifyDomainWhiteRule", req, cb);
    }
    /**
     * 本接口用于访问日志的快速分析
     */
    async DescribeAccessFastAnalysis(req, cb) {
        return this.request("DescribeAccessFastAnalysis", req, cb);
    }
    /**
     * 描述WAF自动封禁IP详情,对齐自动封堵状态
     */
    async DescribeAutoDenyIP(req, cb) {
        return this.request("DescribeAutoDenyIP", req, cb);
    }
    /**
     * 描述WAF自动封禁模块详情
     */
    async DescribeWafAutoDenyStatus(req, cb) {
        return this.request("DescribeWafAutoDenyStatus", req, cb);
    }
    /**
     * 增加自定义策略
     */
    async AddCustomRule(req, cb) {
        return this.request("AddCustomRule", req, cb);
    }
    /**
     * Waf ip黑白名单查询
     */
    async DescribeIpAccessControl(req, cb) {
        return this.request("DescribeIpAccessControl", req, cb);
    }
    /**
     * 配置WAF威胁情报封禁模块详情
     */
    async ModifyWafThreatenIntelligence(req, cb) {
        return this.request("ModifyWafThreatenIntelligence", req, cb);
    }
    /**
     * 修改ip惩罚规则
     */
    async ModifyWafAutoDenyRules(req, cb) {
        return this.request("ModifyWafAutoDenyRules", req, cb);
    }
    /**
     * 在负载均衡型WAF的添加、编辑域名配置的时候，需要展示负载均衡型WAF（clb-waf)支持的地域列表，通过DescribeUserClbWafRegions既可以获得当前对客户已经开放的地域列表
     */
    async DescribeUserClbWafRegions(req, cb) {
        return this.request("DescribeUserClbWafRegions", req, cb);
    }
    /**
     * 删除攻击日志下载任务记录
     */
    async DeleteAttackDownloadRecord(req, cb) {
        return this.request("DeleteAttackDownloadRecord", req, cb);
    }
    /**
     * 返回ip惩罚规则详细信息
     */
    async DescribeWafAutoDenyRules(req, cb) {
        return this.request("DescribeWafAutoDenyRules", req, cb);
    }
    /**
     * 删除访问日志下载记录
     */
    async DeleteDownloadRecord(req, cb) {
        return this.request("DeleteDownloadRecord", req, cb);
    }
    /**
     * 删除CC攻击的session设置
     */
    async DeleteSession(req, cb) {
        return this.request("DeleteSession", req, cb);
    }
    /**
     * 获取域名的规则白名单


     */
    async DescribeDomainWhiteRules(req, cb) {
        return this.request("DescribeDomainWhiteRules", req, cb);
    }
    /**
     * 添加Spart防护域名
     */
    async AddSpartaProtection(req, cb) {
        return this.request("AddSpartaProtection", req, cb);
    }
    /**
     * 描述WAF威胁情报封禁模块配置详情
     */
    async DescribeWafThreatenIntelligence(req, cb) {
        return this.request("DescribeWafThreatenIntelligence", req, cb);
    }
    /**
     * 本接口用于搜索WAF访问日志
     */
    async SearchAccessLog(req, cb) {
        return this.request("SearchAccessLog", req, cb);
    }
    /**
     * Waf  IP封堵状态查询
     */
    async DescribeIpHitItems(req, cb) {
        return this.request("DescribeIpHitItems", req, cb);
    }
    /**
     * 增加域名规则白名单
     */
    async AddDomainWhiteRule(req, cb) {
        return this.request("AddDomainWhiteRule", req, cb);
    }
    /**
     * Waf IP黑白名单Upsert接口
     */
    async UpsertIpAccessControl(req, cb) {
        return this.request("UpsertIpAccessControl", req, cb);
    }
}
exports.Client = Client;
