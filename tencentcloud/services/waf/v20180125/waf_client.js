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
     * 查询业务和攻击概要趋势
     */
    async DescribePeakPoints(req, cb) {
        return this.request("DescribePeakPoints", req, cb);
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
     * 修改防护域名的地域封禁状态
     */
    async ModifyAreaBanStatus(req, cb) {
        return this.request("ModifyAreaBanStatus", req, cb);
    }
    /**
     * 查询用户所有域名的详细信息
     */
    async DescribeDomains(req, cb) {
        return this.request("DescribeDomains", req, cb);
    }
    /**
     * 本接口用于搜索WAF访问日志
     */
    async SearchAccessLog(req, cb) {
        return this.request("SearchAccessLog", req, cb);
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
     * 新版本CLS接口存在参数变化，query改成了query_string支持lucence语法接口搜索查询。
     */
    async SearchAttackLog(req, cb) {
        return this.request("SearchAttackLog", req, cb);
    }
    /**
     * 查询单个saas域名详情
     */
    async DescribeDomainDetailsSaas(req, cb) {
        return this.request("DescribeDomainDetailsSaas", req, cb);
    }
    /**
     * 查询用户所有实例的详细信息
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
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
     * 本接口用于修改访问日志保存期限及大字段是否存储
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
     * 根据过滤条件查询VIP信息
     */
    async DescribeVipInfo(req, cb) {
        return this.request("DescribeVipInfo", req, cb);
    }
    /**
     * 在CDC场景下，负载均衡型WAF的添加、编辑域名配置的时候，需要展示CDC负载均衡型WAF（cdc-clb-waf)支持的地域列表，通过DescribeUserCdcClbWafRegions既可以获得当前对客户已经开放的地域列表
     */
    async DescribeUserCdcClbWafRegions(req, cb) {
        return this.request("DescribeUserCdcClbWafRegions", req, cb);
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
     * 删除精准白名单规则
     */
    async DeleteCustomWhiteRule(req, cb) {
        return this.request("DeleteCustomWhiteRule", req, cb);
    }
    /**
     * 编辑精准白名单
     */
    async ModifyCustomWhiteRule(req, cb) {
        return this.request("ModifyCustomWhiteRule", req, cb);
    }
    /**
     * 查询下载攻击日志任务记录列表
     */
    async GetAttackDownloadRecords(req, cb) {
        return this.request("GetAttackDownloadRecords", req, cb);
    }
    /**
     * 增加访问控制（自定义策略）
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
     * 创建搜索下载攻击日志任务，使用CLS新版本的搜索下载getlog接口
     */
    async PostAttackDownloadTask(req, cb) {
        return this.request("PostAttackDownloadTask", req, cb);
    }
    /**
     * 开启或禁用访问控制（自定义策略）
     */
    async ModifyCustomRuleStatus(req, cb) {
        return this.request("ModifyCustomRuleStatus", req, cb);
    }
    /**
     * 获取业务和攻击概览峰值
     */
    async DescribePeakValue(req, cb) {
        return this.request("DescribePeakValue", req, cb);
    }
    /**
     * 配置WAF威胁情报封禁模块详情
     */
    async ModifyWafThreatenIntelligence(req, cb) {
        return this.request("ModifyWafThreatenIntelligence", req, cb);
    }
    /**
     * 增加精准白名单规则
     */
    async AddCustomWhiteRule(req, cb) {
        return this.request("AddCustomWhiteRule", req, cb);
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
     * 攻击总览
     */
    async DescribeAttackOverview(req, cb) {
        return this.request("DescribeAttackOverview", req, cb);
    }
    /**
     * 删除访问日志下载记录
     */
    async DeleteDownloadRecord(req, cb) {
        return this.request("DeleteDownloadRecord", req, cb);
    }
    /**
     * clb-waf中添加防护的域名
     */
    async CreateHost(req, cb) {
        return this.request("CreateHost", req, cb);
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
     * 获取各个模块具体的规格限制
     */
    async DescribeRuleLimit(req, cb) {
        return this.request("DescribeRuleLimit", req, cb);
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
     * 获取防护状态以及生效的实例id
     */
    async DescribePolicyStatus(req, cb) {
        return this.request("DescribePolicyStatus", req, cb);
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
     * 切换域名的规则开关
     */
    async SwitchDomainRules(req, cb) {
        return this.request("SwitchDomainRules", req, cb);
    }
    /**
     * 获取防护配置中的精准白名单策略列表
     */
    async DescribeCustomWhiteRule(req, cb) {
        return this.request("DescribeCustomWhiteRule", req, cb);
    }
    /**
     * Waf IP黑白名单Upsert接口
     */
    async UpsertIpAccessControl(req, cb) {
        return this.request("UpsertIpAccessControl", req, cb);
    }
}
exports.Client = Client;
