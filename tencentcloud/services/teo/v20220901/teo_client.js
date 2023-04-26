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
 * teo client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("teo.tencentcloudapi.com", "2022-09-01", clientConfig);
    }
    /**
     * 创建清除缓存任务
     */
    async CreatePurgeTask(req, cb) {
        return this.request("CreatePurgeTask", req, cb);
    }
    /**
     * 本接口（DownloadL4Logs）用于下载四层离线日志。
     */
    async DownloadL4Logs(req, cb) {
        return this.request("DownloadL4Logs", req, cb);
    }
    /**
     * 为未购买套餐的站点购买套餐
     */
    async CreatePlanForZone(req, cb) {
        return this.request("CreatePlanForZone", req, cb);
    }
    /**
     * 查询内容管理接口配额
     */
    async DescribeContentQuota(req, cb) {
        return this.request("DescribeContentQuota", req, cb);
    }
    /**
     * 查询站点的验证信息。
     */
    async DescribeIdentifications(req, cb) {
        return this.request("DescribeIdentifications", req, cb);
    }
    /**
     * 用于验证站点所有权。
     */
    async IdentifyZone(req, cb) {
        return this.request("IdentifyZone", req, cb);
    }
    /**
     * 查询默认证书列表
     */
    async DescribeDefaultCertificates(req, cb) {
        return this.request("DescribeDefaultCertificates", req, cb);
    }
    /**
     * 查询加速域名列表，支持搜索、分页、排序、过滤。
     */
    async DescribeAccelerationDomains(req, cb) {
        return this.request("DescribeAccelerationDomains", req, cb);
    }
    /**
     * 修改源站组
     */
    async ModifyOriginGroup(req, cb) {
        return this.request("ModifyOriginGroup", req, cb);
    }
    /**
     * 删除应用代理
     */
    async DeleteApplicationProxy(req, cb) {
        return this.request("DeleteApplicationProxy", req, cb);
    }
    /**
     * 本接口（DescribeWebManagedRulesLog）用于查询Web攻击日志。
     */
    async DescribeWebManagedRulesLog(req, cb) {
        return this.request("DescribeWebManagedRulesLog", req, cb);
    }
    /**
     * 用于创建COS回源私有凭证
     */
    async CreateCredential(req, cb) {
        return this.request("CreateCredential", req, cb);
    }
    /**
     * 本接口（DownloadL7Logs）下载七层离线日志。
     */
    async DownloadL7Logs(req, cb) {
        return this.request("DownloadL7Logs", req, cb);
    }
    /**
     * 删除应用代理规则
     */
    async DeleteApplicationProxyRule(req, cb) {
        return this.request("DeleteApplicationProxyRule", req, cb);
    }
    /**
     * 本接口（DescribeWebProtectionData）用于查询CC防护时序数据。
     */
    async DescribeWebProtectionData(req, cb) {
        return this.request("DescribeWebProtectionData", req, cb);
    }
    /**
     * 修改站点信息。
     */
    async ModifyZone(req, cb) {
        return this.request("ModifyZone", req, cb);
    }
    /**
     * 创建预热任务
     */
    async CreatePrefetchTask(req, cb) {
        return this.request("CreatePrefetchTask", req, cb);
    }
    /**
     * 删除别称域名。
     */
    async DeleteAliasDomain(req, cb) {
        return this.request("DeleteAliasDomain", req, cb);
    }
    /**
     * 本接口（DescribeOverviewL7Data）用于查询七层监控类时序流量数据。
     */
    async DescribeOverviewL7Data(req, cb) {
        return this.request("DescribeOverviewL7Data", req, cb);
    }
    /**
     * 本接口（DescribeAddableEntityList）用于查询剩余可添加的日志推送实体列表。
     */
    async DescribeAddableEntityList(req, cb) {
        return this.request("DescribeAddableEntityList", req, cb);
    }
    /**
     * 创建加速域名
     */
    async CreateAccelerationDomain(req, cb) {
        return this.request("CreateAccelerationDomain", req, cb);
    }
    /**
     * 校验证书
     */
    async CheckCertificate(req, cb) {
        return this.request("CheckCertificate", req, cb);
    }
    /**
     * 创建刷新/预热重放任务
     */
    async CreateReplayTask(req, cb) {
        return this.request("CreateReplayTask", req, cb);
    }
    /**
     * 查询站点拨测配额
     */
    async DescribeSpeedTestingQuota(req, cb) {
        return this.request("DescribeSpeedTestingQuota", req, cb);
    }
    /**
     * 对用户指定的域名进行一次站点拨测
     */
    async CreateSpeedTesting(req, cb) {
        return this.request("CreateSpeedTesting", req, cb);
    }
    /**
     * 查询站点拨测结果
     */
    async DescribeSpeedTestingMetricData(req, cb) {
        return this.request("DescribeSpeedTestingMetricData", req, cb);
    }
    /**
     * 用于修改站点配置
     */
    async ModifyZoneSetting(req, cb) {
        return this.request("ModifyZoneSetting", req, cb);
    }
    /**
     * 修改应用代理规则的状态
     */
    async ModifyApplicationProxyRuleStatus(req, cb) {
        return this.request("ModifyApplicationProxyRuleStatus", req, cb);
    }
    /**
     * 查询预热任务状态
     */
    async DescribePrefetchTasks(req, cb) {
        return this.request("DescribePrefetchTasks", req, cb);
    }
    /**
     * 删除源站组
     */
    async DeleteOriginGroup(req, cb) {
        return this.request("DeleteOriginGroup", req, cb);
    }
    /**
     * 更新源站防护IP白名单
     */
    async UpdateOriginProtectionIPWhitelist(req, cb) {
        return this.request("UpdateOriginProtectionIPWhitelist", req, cb);
    }
    /**
     * 创建安全 IP 组
     */
    async CreateSecurityIPGroup(req, cb) {
        return this.request("CreateSecurityIPGroup", req, cb);
    }
    /**
     * 查询清除缓存历史记录
     */
    async DescribePurgeTasks(req, cb) {
        return this.request("DescribePurgeTasks", req, cb);
    }
    /**
     * 批量删除加速域名
     */
    async DeleteAccelerationDomains(req, cb) {
        return this.request("DeleteAccelerationDomains", req, cb);
    }
    /**
     * 本接口（DescribeTimingL7CacheData）用于查询七层缓存分析时序类流量数据。
     */
    async DescribeTimingL7CacheData(req, cb) {
        return this.request("DescribeTimingL7CacheData", req, cb);
    }
    /**
     * 创建别称域名。
     */
    async CreateAliasDomain(req, cb) {
        return this.request("CreateAliasDomain", req, cb);
    }
    /**
     * 本接口（DescribeWebProtectionHitRuleDetail）用于查询CC防护命中规则详情列表。
     */
    async DescribeWebProtectionHitRuleDetail(req, cb) {
        return this.request("DescribeWebProtectionHitRuleDetail", req, cb);
    }
    /**
     * 修改别称域名状态。
     */
    async ModifyAliasDomainStatus(req, cb) {
        return this.request("ModifyAliasDomainStatus", req, cb);
    }
    /**
     * 本接口（DescribeTopL7CacheData）用于查询七层缓存分析topN流量数据。
     */
    async DescribeTopL7CacheData(req, cb) {
        return this.request("DescribeTopL7CacheData", req, cb);
    }
    /**
     * 本接口（DescribeTimingL4Data）用于查询四层时序流量数据列表。
     */
    async DescribeTimingL4Data(req, cb) {
        return this.request("DescribeTimingL4Data", req, cb);
    }
    /**
     * 修改规则引擎规则。
     */
    async ModifyRule(req, cb) {
        return this.request("ModifyRule", req, cb);
    }
    /**
     * 本接口（DescribeTopL7AnalysisData）用于查询七层流量前topN的数据。
     */
    async DescribeTopL7AnalysisData(req, cb) {
        return this.request("DescribeTopL7AnalysisData", req, cb);
    }
    /**
     * 修改Web&Bot安全配置。
     */
    async ModifySecurityPolicy(req, cb) {
        return this.request("ModifySecurityPolicy", req, cb);
    }
    /**
     * 修改规则引擎规则优先级
     */
    async ModifyRulePriority(req, cb) {
        return this.request("ModifyRulePriority", req, cb);
    }
    /**
     * 将未绑定套餐的站点绑定到已有套餐
     */
    async BindZoneToPlan(req, cb) {
        return this.request("BindZoneToPlan", req, cb);
    }
    /**
     * 本接口（DescribeDDoSAttackEvent）用于查询DDoS攻击事件列表。
     */
    async DescribeDDoSAttackEvent(req, cb) {
        return this.request("DescribeDDoSAttackEvent", req, cb);
    }
    /**
     * 修改加速域名信息
     */
    async ModifyAccelerationDomain(req, cb) {
        return this.request("ModifyAccelerationDomain", req, cb);
    }
    /**
     * 修改应用代理的状态
     */
    async ModifyApplicationProxyStatus(req, cb) {
        return this.request("ModifyApplicationProxyStatus", req, cb);
    }
    /**
     * 本接口（DescribeTimingL7AnalysisData）查询七层数据分析类时序数据。
     */
    async DescribeTimingL7AnalysisData(req, cb) {
        return this.request("DescribeTimingL7AnalysisData", req, cb);
    }
    /**
     * 查询应用代理列表。
     */
    async DescribeApplicationProxies(req, cb) {
        return this.request("DescribeApplicationProxies", req, cb);
    }
    /**
     * 本接口（DescribeTimingL7SourceData）查询七层回源分析时序数据。
     */
    async DescribeTimingL7SourceData(req, cb) {
        return this.request("DescribeTimingL7SourceData", req, cb);
    }
    /**
     * 本接口（DescribeClientRuleList）用于查询封禁客户端信息列表。
     */
    async DescribeClientRuleList(req, cb) {
        return this.request("DescribeClientRuleList", req, cb);
    }
    /**
     * 规则引擎创建规则。
     */
    async CreateRule(req, cb) {
        return this.request("CreateRule", req, cb);
    }
    /**
     * 修改应用代理
     */
    async ModifyApplicationProxy(req, cb) {
        return this.request("ModifyApplicationProxy", req, cb);
    }
    /**
     * 用于用户接入新的站点。
     */
    async CreateZone(req, cb) {
        return this.request("CreateZone", req, cb);
    }
    /**
     * 本接口（DescribeWebProtectionClientIpList）用于查询CC防护客户端（攻击源）IP信息。
     */
    async DescribeWebProtectionClientIpList(req, cb) {
        return this.request("DescribeWebProtectionClientIpList", req, cb);
    }
    /**
     * 查询当前账户可用套餐信息列表
     */
    async DescribeAvailablePlans(req, cb) {
        return this.request("DescribeAvailablePlans", req, cb);
    }
    /**
     * 修改安全配置托管规则
     */
    async ModifySecurityWafGroupPolicy(req, cb) {
        return this.request("ModifySecurityWafGroupPolicy", req, cb);
    }
    /**
     * 获取DNS请求数统计曲线
     */
    async DescribeDnsData(req, cb) {
        return this.request("DescribeDnsData", req, cb);
    }
    /**
     * 返回规则引擎可应用匹配请求的设置列表及其详细建议配置信息
     */
    async DescribeRulesSetting(req, cb) {
        return this.request("DescribeRulesSetting", req, cb);
    }
    /**
     * 本接口（DescribeLogTopicTasks）用于获取日志推送任务列表。
     */
    async DescribeLogTopicTasks(req, cb) {
        return this.request("DescribeLogTopicTasks", req, cb);
    }
    /**
     * 批量修改加速域名状态
     */
    async ModifyAccelerationDomainStatuses(req, cb) {
        return this.request("ModifyAccelerationDomainStatuses", req, cb);
    }
    /**
     * 修改安全 IP 组。
     */
    async ModifySecurityIPGroup(req, cb) {
        return this.request("ModifySecurityIPGroup", req, cb);
    }
    /**
     * 本接口（DescribeDDoSAttackTopData）用于查询DDoS攻击Top数据。
     */
    async DescribeDDoSAttackTopData(req, cb) {
        return this.request("DescribeDDoSAttackTopData", req, cb);
    }
    /**
     * 用于开启，关闭站点。
     */
    async ModifyZoneStatus(req, cb) {
        return this.request("ModifyZoneStatus", req, cb);
    }
    /**
     * 批量删除规则引擎规则。
     */
    async DeleteRules(req, cb) {
        return this.request("DeleteRules", req, cb);
    }
    /**
     * 本接口（DescribeSingleL7AnalysisData）用于查询七层流量数据分析单值数据列表，单值数据表示：指标在查询时间范围内的单个统计数据，通常表现为接口仅返回一个统计数值。
     */
    async DescribeSingleL7AnalysisData(req, cb) {
        return this.request("DescribeSingleL7AnalysisData", req, cb);
    }
    /**
     * 修改默认证书状态
     */
    async ModifyDefaultCertificate(req, cb) {
        return this.request("ModifyDefaultCertificate", req, cb);
    }
    /**
     * 本接口（DescribeWebManagedRulesHitRuleDetail）用于查询WAF攻击命中规则详情。
     */
    async DescribeWebManagedRulesHitRuleDetail(req, cb) {
        return this.request("DescribeWebManagedRulesHitRuleDetail", req, cb);
    }
    /**
     * 查询规则引擎规则。
     */
    async DescribeRules(req, cb) {
        return this.request("DescribeRules", req, cb);
    }
    /**
     * 创建应用代理
     */
    async CreateApplicationProxy(req, cb) {
        return this.request("CreateApplicationProxy", req, cb);
    }
    /**
     * 获取源站组列表
     */
    async DescribeOriginGroup(req, cb) {
        return this.request("DescribeOriginGroup", req, cb);
    }
    /**
     * 修改别称域名。
     */
    async ModifyAliasDomain(req, cb) {
        return this.request("ModifyAliasDomain", req, cb);
    }
    /**
     * 修改应用代理规则
     */
    async ModifyApplicationProxyRule(req, cb) {
        return this.request("ModifyApplicationProxyRule", req, cb);
    }
    /**
     * 创建源站组
     */
    async CreateOriginGroup(req, cb) {
        return this.request("CreateOriginGroup", req, cb);
    }
    /**
     * 用于查询拨测分地区数据
     */
    async DescribeSpeedTestingDetails(req, cb) {
        return this.request("DescribeSpeedTestingDetails", req, cb);
    }
    /**
     * 用于修改域名证书
     */
    async ModifyHostsCertificate(req, cb) {
        return this.request("ModifyHostsCertificate", req, cb);
    }
    /**
     * 用于查询域名配置信息
     */
    async DescribeHostsSetting(req, cb) {
        return this.request("DescribeHostsSetting", req, cb);
    }
    /**
     * 查询源站防护信息
     */
    async DescribeOriginProtection(req, cb) {
        return this.request("DescribeOriginProtection", req, cb);
    }
    /**
     * 本接口（DescribeLogSets）用于获取日志集列表。
     */
    async DescribeLogSets(req, cb) {
        return this.request("DescribeLogSets", req, cb);
    }
    /**
     * 用于查询站点的所有配置信息。
     */
    async DescribeZoneSetting(req, cb) {
        return this.request("DescribeZoneSetting", req, cb);
    }
    /**
     * 删除指定 IP 组，如果有规则引用了 IP 组情况，则不允许删除。
     */
    async DeleteSecurityIPGroup(req, cb) {
        return this.request("DeleteSecurityIPGroup", req, cb);
    }
    /**
     * 当客户取回站定的同时会取回此站点下关联的别称域名，此时入参为ZoneId；当客户接入站点发现已被别称域名接入时通过验证之后可取回域名，此时入参为ZoneName。
     */
    async ReclaimAliasDomain(req, cb) {
        return this.request("ReclaimAliasDomain", req, cb);
    }
    /**
     * 创建应用代理规则
     */
    async CreateApplicationProxyRule(req, cb) {
        return this.request("CreateApplicationProxyRule", req, cb);
    }
    /**
     * 用户查询用户站点信息列表，支持分页。
     */
    async DescribeZones(req, cb) {
        return this.request("DescribeZones", req, cb);
    }
    /**
     * 站点被其他用户接入后，验证了站点所有权之后，可以找回该站点。
     */
    async ReclaimZone(req, cb) {
        return this.request("ReclaimZone", req, cb);
    }
    /**
     * 删除站点。
     */
    async DeleteZone(req, cb) {
        return this.request("DeleteZone", req, cb);
    }
    /**
     * 本接口（DescribeDDoSAttackData）用于查询DDoS攻击时序数据。
     */
    async DescribeDDoSAttackData(req, cb) {
        return this.request("DescribeDDoSAttackData", req, cb);
    }
    /**
     * 本接口（DescribeWebProtectionTopData）用于查询CC防护的Top数据。
     */
    async DescribeWebProtectionTopData(req, cb) {
        return this.request("DescribeWebProtectionTopData", req, cb);
    }
    /**
     * 本接口（DescribeWebManagedRulesData）用于查询WAF攻击的时序数据。
     */
    async DescribeWebManagedRulesData(req, cb) {
        return this.request("DescribeWebManagedRulesData", req, cb);
    }
    /**
     * 查询别称域名信息列表。
     */
    async DescribeAliasDomains(req, cb) {
        return this.request("DescribeAliasDomains", req, cb);
    }
}
exports.Client = Client;
