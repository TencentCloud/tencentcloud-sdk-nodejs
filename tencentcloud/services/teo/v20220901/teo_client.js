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
     * 本接口（DescribeBotClientIpList）用于查询Bot攻击客户端Ip信息列表。
     */
    async DescribeBotClientIpList(req, cb) {
        return this.request("DescribeBotClientIpList", req, cb);
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
     * 获取托管规则组
     */
    async DescribeSecurityGroupManagedRules(req, cb) {
        return this.request("DescribeSecurityGroupManagedRules", req, cb);
    }
    /**
     * 本接口（DescribeWebProtectionAttackEvents）用于查询CC相关攻击事件列表。
     */
    async DescribeWebProtectionAttackEvents(req, cb) {
        return this.request("DescribeWebProtectionAttackEvents", req, cb);
    }
    /**
     * 查询站点的验证信息。
     */
    async DescribeIdentifications(req, cb) {
        return this.request("DescribeIdentifications", req, cb);
    }
    /**
     * 修改站点信息。
     */
    async ModifyZone(req, cb) {
        return this.request("ModifyZone", req, cb);
    }
    /**
     * 域名DDoS高可用开关
     */
    async ModifyDDoSPolicyHost(req, cb) {
        return this.request("ModifyDDoSPolicyHost", req, cb);
    }
    /**
     * 本接口（DescribeTimingL4AccessData）用于查询四层连接数的时序数据列表。
     */
    async DescribeTimingL4AccessData(req, cb) {
        return this.request("DescribeTimingL4AccessData", req, cb);
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
     * 修改源站组
     */
    async ModifyOriginGroup(req, cb) {
        return this.request("ModifyOriginGroup", req, cb);
    }
    /**
     * 修改规则引擎规则。
     */
    async ModifyRule(req, cb) {
        return this.request("ModifyRule", req, cb);
    }
    /**
     * 本接口（ModifyLogTopicTask）用于修改日志推送任务信息。
     */
    async ModifyLogTopicTask(req, cb) {
        return this.request("ModifyLogTopicTask", req, cb);
    }
    /**
     * 查询Bot用户画像规则
     */
    async DescribeSecurityPortraitRules(req, cb) {
        return this.request("DescribeSecurityPortraitRules", req, cb);
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
     * 本接口（DescribeDDoSAttackSourceEvent）用于查询DDoS攻击源信息列表。
     */
    async DescribeDDoSAttackSourceEvent(req, cb) {
        return this.request("DescribeDDoSAttackSourceEvent", req, cb);
    }
    /**
     * 本接口（CreateClsLog）用于创建CLS日志集。
     */
    async CreateLogSet(req, cb) {
        return this.request("CreateLogSet", req, cb);
    }
    /**
     * 当客户取回站定的同时会取回此站点下关联的别称域名，此时入参为ZoneId；当客户接入站点发现已被别称域名接入时通过验证之后可取回域名，此时入参为ZoneName。
     */
    async ReclaimAliasDomain(req, cb) {
        return this.request("ReclaimAliasDomain", req, cb);
    }
    /**
     * 本接口（ModifyAlarmConfig）用于修改用户告警配置。
     */
    async ModifyAlarmConfig(req, cb) {
        return this.request("ModifyAlarmConfig", req, cb);
    }
    /**
     * 本接口（DeleteLogTopicTask）用于删除日志推送任务。
     */
    async DeleteLogTopicTask(req, cb) {
        return this.request("DeleteLogTopicTask", req, cb);
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
     * 查询所有地域信息
     */
    async DescribeSecurityPolicyRegions(req, cb) {
        return this.request("DescribeSecurityPolicyRegions", req, cb);
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
     * 本接口（DescribeDDoSMajorAttackEvent）用于查询DDoS主攻击事件列表。
     */
    async DescribeDDoSMajorAttackEvent(req, cb) {
        return this.request("DescribeDDoSMajorAttackEvent", req, cb);
    }
    /**
     * 修改应用代理规则的状态
     */
    async ModifyApplicationProxyRuleStatus(req, cb) {
        return this.request("ModifyApplicationProxyRuleStatus", req, cb);
    }
    /**
     * 查询全部安全实例
     */
    async DescribeSecurityPolicyList(req, cb) {
        return this.request("DescribeSecurityPolicyList", req, cb);
    }
    /**
     * 查询预热任务状态
     */
    async DescribePrefetchTasks(req, cb) {
        return this.request("DescribePrefetchTasks", req, cb);
    }
    /**
     * 创建自定义拦截页面。
     */
    async CreateSecurityDropPage(req, cb) {
        return this.request("CreateSecurityDropPage", req, cb);
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
     * 本接口（DownloadL4Logs）用于下载四层离线日志。
     */
    async DownloadL4Logs(req, cb) {
        return this.request("DownloadL4Logs", req, cb);
    }
    /**
     * 查询清除缓存历史记录
     */
    async DescribePurgeTasks(req, cb) {
        return this.request("DescribePurgeTasks", req, cb);
    }
    /**
     * 本接口（CreateLogTopicTask）用于创建日志推送任务。
     */
    async CreateLogTopicTask(req, cb) {
        return this.request("CreateLogTopicTask", req, cb);
    }
    /**
     * 本接口（DescribeTimingL7CacheData）用于查询七层缓存分析时序类流量数据。
     */
    async DescribeTimingL7CacheData(req, cb) {
        return this.request("DescribeTimingL7CacheData", req, cb);
    }
    /**
     * 本接口（DescribeBotData）查询Bot攻击时序数据。
     */
    async DescribeBotData(req, cb) {
        return this.request("DescribeBotData", req, cb);
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
     * 查询安全规则详情
     */
    async DescribeSecurityRuleId(req, cb) {
        return this.request("DescribeSecurityRuleId", req, cb);
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
     * 本接口（DescribeLogTopicTaskDetail）用于获取日志推送任务详细信息。
     */
    async DescribeLogTopicTaskDetail(req, cb) {
        return this.request("DescribeLogTopicTaskDetail", req, cb);
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
     * 查询Bot托管规则
     */
    async DescribeBotManagedRules(req, cb) {
        return this.request("DescribeBotManagedRules", req, cb);
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
     * 本接口（DescribeDDoSAttackEventDetail）用于查询DDoS攻击事件详情。
     */
    async DescribeDDoSAttackEventDetail(req, cb) {
        return this.request("DescribeDDoSAttackEventDetail", req, cb);
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
     * 查询所有DDoS防护分区
     */
    async DescribeZoneDDoSPolicy(req, cb) {
        return this.request("DescribeZoneDDoSPolicy", req, cb);
    }
    /**
     * 修改安全配置托管规则
     */
    async ModifySecurityWafGroupPolicy(req, cb) {
        return this.request("ModifySecurityWafGroupPolicy", req, cb);
    }
    /**
     * 本接口（DescribeDistributionL4AccessData）用于查询四层连接时长的时序数据。
     */
    async DescribeDistributionL4AccessData(req, cb) {
        return this.request("DescribeDistributionL4AccessData", req, cb);
    }
    /**
     * 创建自定义规则的自定义页
     */
    async CreateCustomErrorPage(req, cb) {
        return this.request("CreateCustomErrorPage", req, cb);
    }
    /**
     * 修改DDoS防护分区配置
     */
    async ModifyDDoSPolicy(req, cb) {
        return this.request("ModifyDDoSPolicy", req, cb);
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
     * 查询DDoS防护配置详情
     */
    async DescribeDDoSPolicy(req, cb) {
        return this.request("DescribeDDoSPolicy", req, cb);
    }
    /**
     * 本接口（DescribeSingleL7AnalysisData）用于查询七层数据分析类单值流量数据列表。
     */
    async DescribeSingleL7AnalysisData(req, cb) {
        return this.request("DescribeSingleL7AnalysisData", req, cb);
    }
    /**
     * 本接口（DescribeBotHitRuleDetail）用于查询Bot攻击命中规则详情信息。
     */
    async DescribeBotHitRuleDetail(req, cb) {
        return this.request("DescribeBotHitRuleDetail", req, cb);
    }
    /**
     * 修改默认证书状态
     */
    async ModifyDefaultCertificate(req, cb) {
        return this.request("ModifyDefaultCertificate", req, cb);
    }
    /**
     * 查询安全防护配置详情。请求参数中ZoneId+Entity或TemplateId至少填一项。
     */
    async DescribeSecurityPolicy(req, cb) {
        return this.request("DescribeSecurityPolicy", req, cb);
    }
    /**
     * 创建IP黑白名单列表
     */
    async CreateIpTableList(req, cb) {
        return this.request("CreateIpTableList", req, cb);
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
     * 本接口（SwitchLogTopicTask）用于开启/关闭推送任务。
     */
    async SwitchLogTopicTask(req, cb) {
        return this.request("SwitchLogTopicTask", req, cb);
    }
    /**
     * 修改别称域名。
     */
    async ModifyAliasDomain(req, cb) {
        return this.request("ModifyAliasDomain", req, cb);
    }
    /**
     * 用于查询 DNSSEC 相关信息
     */
    async DescribeDnssec(req, cb) {
        return this.request("DescribeDnssec", req, cb);
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
     * 本接口（DescribeBotTopData）查询Bot攻击TopN数据。
     */
    async DescribeBotTopData(req, cb) {
        return this.request("DescribeBotTopData", req, cb);
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
     * 开启，关闭 CNAME 加速。
     */
    async ModifyZoneCnameSpeedUp(req, cb) {
        return this.request("ModifyZoneCnameSpeedUp", req, cb);
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
     * 此接口（ModifyAlarmDefaultThreshold）用于修改告警默认阈值。
     */
    async ModifyAlarmDefaultThreshold(req, cb) {
        return this.request("ModifyAlarmDefaultThreshold", req, cb);
    }
    /**
     * 本接口（DescribeDDoSBlockList）用于查询DDoS封禁解封列表。
     */
    async DescribeDDoSBlockList(req, cb) {
        return this.request("DescribeDDoSBlockList", req, cb);
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
     * 查询速率限制智能客户端过滤学习出来的规则
     */
    async DescribeRateLimitIntelligenceRule(req, cb) {
        return this.request("DescribeRateLimitIntelligenceRule", req, cb);
    }
    /**
     * 本接口（DescribeBotLog）用于查询Bot攻击日志。
     */
    async DescribeBotLog(req, cb) {
        return this.request("DescribeBotLog", req, cb);
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
    /**
     * 设置站点DNSSEC状态
     */
    async ModifyDnssec(req, cb) {
        return this.request("ModifyDnssec", req, cb);
    }
}
exports.Client = Client;
