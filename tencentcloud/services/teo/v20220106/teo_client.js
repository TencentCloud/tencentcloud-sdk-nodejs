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
        super("teo.tencentcloudapi.com", "2022-01-06", clientConfig);
    }
    /**
     * 创建 DNS 记录
     */
    async CreateDnsRecord(req, cb) {
        return this.request("CreateDnsRecord", req, cb);
    }
    /**
     * 创建清除缓存任务
     */
    async CreatePurgeTask(req, cb) {
        return this.request("CreatePurgeTask", req, cb);
    }
    /**
     * 查询预热任务状态
     */
    async DescribePrefetchTasks(req, cb) {
        return this.request("DescribePrefetchTasks", req, cb);
    }
    /**
     * 查询web防护攻击事件
     */
    async DescribeWebProtectionAttackEvents(req, cb) {
        return this.request("DescribeWebProtectionAttackEvents", req, cb);
    }
    /**
     * 创建负载均衡
     */
    async CreateLoadBalancing(req, cb) {
        return this.request("CreateLoadBalancing", req, cb);
    }
    /**
     * 域名DDoS高可用开关
     */
    async ModifyDDoSPolicyHost(req, cb) {
        return this.request("ModifyDDoSPolicyHost", req, cb);
    }
    /**
     * 用于验证站点所有权
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
     * 源站组修改
     */
    async ModifyOriginGroup(req, cb) {
        return this.request("ModifyOriginGroup", req, cb);
    }
    /**
     * 查询DDos攻击Top数据
     */
    async DescribeDDosAttackTopData(req, cb) {
        return this.request("DescribeDDosAttackTopData", req, cb);
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
     * 查询Web托管日志
     */
    async DescribeWebManagedRulesLog(req, cb) {
        return this.request("DescribeWebManagedRulesLog", req, cb);
    }
    /**
     * 查询七层离线日志
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
     * 修改负载均衡状态
     */
    async ModifyLoadBalancingStatus(req, cb) {
        return this.request("ModifyLoadBalancingStatus", req, cb);
    }
    /**
     * 查询web防护数据
     */
    async DescribeWebProtectionData(req, cb) {
        return this.request("DescribeWebProtectionData", req, cb);
    }
    /**
     * 查询Web托管攻击事件
     */
    async DescribeWebManagedRulesAttackEvents(req, cb) {
        return this.request("DescribeWebManagedRulesAttackEvents", req, cb);
    }
    /**
     * 用该站点信息
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
     * 查询七层监控类时序流量数据
     */
    async DescribeOverviewL7Data(req, cb) {
        return this.request("DescribeOverviewL7Data", req, cb);
    }
    /**
     * 校验证书
     */
    async CheckCertificate(req, cb) {
        return this.request("CheckCertificate", req, cb);
    }
    /**
     * 分页查询门神规则
     */
    async DescribeSecurityPolicyManagedRules(req, cb) {
        return this.request("DescribeSecurityPolicyManagedRules", req, cb);
    }
    /**
     * 查询域名 CNAME 状态
     */
    async DescribeCnameStatus(req, cb) {
        return this.request("DescribeCnameStatus", req, cb);
    }
    /**
     * 查询所有地域信息
     */
    async DescribeSecurityPolicyRegions(req, cb) {
        return this.request("DescribeSecurityPolicyRegions", req, cb);
    }
    /**
     * 根据站点 ID 查询站点的详细信息
     */
    async DescribeZoneDetails(req, cb) {
        return this.request("DescribeZoneDetails", req, cb);
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
     * 查询全部安全实例
     */
    async DescribeSecurityPolicyList(req, cb) {
        return this.request("DescribeSecurityPolicyList", req, cb);
    }
    /**
     * 源站组删除
     */
    async DeleteOriginGroup(req, cb) {
        return this.request("DeleteOriginGroup", req, cb);
    }
    /**
     * 查询Web托管规则Top数据
     */
    async DescribeWebManagedRulesTopData(req, cb) {
        return this.request("DescribeWebManagedRulesTopData", req, cb);
    }
    /**
     * 批量创建应用代理规则
     */
    async CreateApplicationProxyRules(req, cb) {
        return this.request("CreateApplicationProxyRules", req, cb);
    }
    /**
     * 查询清除缓存历史记录
     */
    async DescribePurgeTasks(req, cb) {
        return this.request("DescribePurgeTasks", req, cb);
    }
    /**
     * 查询DDos攻击事件详情
     */
    async DescribeDDosAttackEventDetail(req, cb) {
        return this.request("DescribeDDosAttackEventDetail", req, cb);
    }
    /**
     * 七层查询缓存分析时序类流量数据
     */
    async DescribeTimingL7CacheData(req, cb) {
        return this.request("DescribeTimingL7CacheData", req, cb);
    }
    /**
     * 获取负载均衡列表
     */
    async DescribeLoadBalancing(req, cb) {
        return this.request("DescribeLoadBalancing", req, cb);
    }
    /**
     * 删除负载均衡
     */
    async DeleteLoadBalancing(req, cb) {
        return this.request("DeleteLoadBalancing", req, cb);
    }
    /**
     * 四层时序流量数据查询
     */
    async DescribeTimingL4Data(req, cb) {
        return this.request("DescribeTimingL4Data", req, cb);
    }
    /**
     * 七层查询缓存分析top类流量数据
     */
    async DescribeTopL7CacheData(req, cb) {
        return this.request("DescribeTopL7CacheData", req, cb);
    }
    /**
     * 扫描站点历史解析记录
     */
    async ScanDnsRecords(req, cb) {
        return this.request("ScanDnsRecords", req, cb);
    }
    /**
     * 查询top类流量数据
     */
    async DescribeTopL7AnalysisData(req, cb) {
        return this.request("DescribeTopL7AnalysisData", req, cb);
    }
    /**
     * 批量删除 DNS 记录
     */
    async DeleteDnsRecords(req, cb) {
        return this.request("DeleteDnsRecords", req, cb);
    }
    /**
     * 修改Web&Bot安全配置
     */
    async ModifySecurityPolicy(req, cb) {
        return this.request("ModifySecurityPolicy", req, cb);
    }
    /**
     * 分页查询Bot托管规则
     */
    async DescribeBotManagedRules(req, cb) {
        return this.request("DescribeBotManagedRules", req, cb);
    }
    /**
     * 查询DDos攻击源
     */
    async DescribeDDosAttackSourceEvent(req, cb) {
        return this.request("DescribeDDosAttackSourceEvent", req, cb);
    }
    /**
     * 修改应用代理的状态
     */
    async ModifyApplicationProxyStatus(req, cb) {
        return this.request("ModifyApplicationProxyStatus", req, cb);
    }
    /**
     * 查询七层数据分析类时序流量数据
     */
    async DescribeTimingL7AnalysisData(req, cb) {
        return this.request("DescribeTimingL7AnalysisData", req, cb);
    }
    /**
     * 查询验证结果
     */
    async DescribeIdentification(req, cb) {
        return this.request("DescribeIdentification", req, cb);
    }
    /**
     * 修改应用代理
     */
    async ModifyApplicationProxy(req, cb) {
        return this.request("ModifyApplicationProxy", req, cb);
    }
    /**
     * 用于用户接入新的站点
     */
    async CreateZone(req, cb) {
        return this.request("CreateZone", req, cb);
    }
    /**
     * 查询所有DDoS防护分区
     */
    async DescribeZoneDDoSPolicy(req, cb) {
        return this.request("DescribeZoneDDoSPolicy", req, cb);
    }
    /**
     * 修改负载均衡
     */
    async ModifyLoadBalancing(req, cb) {
        return this.request("ModifyLoadBalancing", req, cb);
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
     * 查询域名证书列表，支持搜索、分页、排序、过滤。
     */
    async DescribeHostsCertificate(req, cb) {
        return this.request("DescribeHostsCertificate", req, cb);
    }
    /**
     * 查询DDos攻击数据
     */
    async DescribeDDosAttackData(req, cb) {
        return this.request("DescribeDDosAttackData", req, cb);
    }
    /**
     * 获取源站组详细信息
     */
    async DescribeOriginGroupDetail(req, cb) {
        return this.request("DescribeOriginGroupDetail", req, cb);
    }
    /**
     * 获取应用代理详细信息
     */
    async DescribeApplicationProxyDetail(req, cb) {
        return this.request("DescribeApplicationProxyDetail", req, cb);
    }
    /**
     * 查询web防护日志
     */
    async DescribeWebProtectionLog(req, cb) {
        return this.request("DescribeWebProtectionLog", req, cb);
    }
    /**
     * 用于开启，关闭站点
     */
    async ModifyZoneStatus(req, cb) {
        return this.request("ModifyZoneStatus", req, cb);
    }
    /**
     * 查询DDoS防护配置详情
     */
    async DescribeDDoSPolicy(req, cb) {
        return this.request("DescribeDDoSPolicy", req, cb);
    }
    /**
     * 修改默认证书状态
     */
    async ModifyDefaultCertificate(req, cb) {
        return this.request("ModifyDefaultCertificate", req, cb);
    }
    /**
     * 获取负载均衡详细信息
     */
    async DescribeLoadBalancingDetail(req, cb) {
        return this.request("DescribeLoadBalancingDetail", req, cb);
    }
    /**
     * 查询安全防护配置详情
     */
    async DescribeSecurityPolicy(req, cb) {
        return this.request("DescribeSecurityPolicy", req, cb);
    }
    /**
     * 创建应用代理
     */
    async CreateApplicationProxy(req, cb) {
        return this.request("CreateApplicationProxy", req, cb);
    }
    /**
     * 获取源站组信息列表
     */
    async DescribeOriginGroup(req, cb) {
        return this.request("DescribeOriginGroup", req, cb);
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
     * 源站组创建
     */
    async CreateOriginGroup(req, cb) {
        return this.request("CreateOriginGroup", req, cb);
    }
    /**
     * 用于修改域名证书
     */
    async ModifyHostsCertificate(req, cb) {
        return this.request("ModifyHostsCertificate", req, cb);
    }
    /**
     * 开启，关闭 CNAME 加速
     */
    async ModifyZoneCnameSpeedUp(req, cb) {
        return this.request("ModifyZoneCnameSpeedUp", req, cb);
    }
    /**
     * 修改 DNS 记录
     */
    async ModifyDnsRecord(req, cb) {
        return this.request("ModifyDnsRecord", req, cb);
    }
    /**
     * 查询DDos主攻击事件
     */
    async DescribeDDosMajorAttackEvent(req, cb) {
        return this.request("DescribeDDosMajorAttackEvent", req, cb);
    }
    /**
     * 用于查询域名配置信息
     */
    async DescribeHostsSetting(req, cb) {
        return this.request("DescribeHostsSetting", req, cb);
    }
    /**
     * 用于查询站点的所有配置信息。
     */
    async DescribeZoneSetting(req, cb) {
        return this.request("DescribeZoneSetting", req, cb);
    }
    /**
     * 创建应用代理规则
     */
    async CreateApplicationProxyRule(req, cb) {
        return this.request("CreateApplicationProxyRule", req, cb);
    }
    /**
     * 用户查询用户站点信息列表，支持分页
     */
    async DescribeZones(req, cb) {
        return this.request("DescribeZones", req, cb);
    }
    /**
     * 站点被其他用户接入后，验证了站点所有权之后，可以找回该站点
     */
    async ReclaimZone(req, cb) {
        return this.request("ReclaimZone", req, cb);
    }
    /**
     * 删除站点
     */
    async DeleteZone(req, cb) {
        return this.request("DeleteZone", req, cb);
    }
    /**
     * 查询DDos攻击事件
     */
    async DescribeDDosAttackEvent(req, cb) {
        return this.request("DescribeDDosAttackEvent", req, cb);
    }
    /**
     * 查询 DNS 记录列表，支持搜索、分页、排序、过滤。
     */
    async DescribeDnsRecords(req, cb) {
        return this.request("DescribeDnsRecords", req, cb);
    }
    /**
     * 查询Bot攻击日志
     */
    async DescribeBotLog(req, cb) {
        return this.request("DescribeBotLog", req, cb);
    }
    /**
     * 获取应用代理列表
     */
    async DescribeApplicationProxy(req, cb) {
        return this.request("DescribeApplicationProxy", req, cb);
    }
    /**
     * 查询Web托管规则数据
     */
    async DescribeWebManagedRulesData(req, cb) {
        return this.request("DescribeWebManagedRulesData", req, cb);
    }
    /**
     * 导入 DNS 记录
     */
    async ImportDnsRecords(req, cb) {
        return this.request("ImportDnsRecords", req, cb);
    }
    /**
     * 规则id查询门神规则详情
     */
    async DescribeSecurityPolicyManagedRulesId(req, cb) {
        return this.request("DescribeSecurityPolicyManagedRulesId", req, cb);
    }
    /**
     * 修改 DNSSEC 状态
     */
    async ModifyDnssec(req, cb) {
        return this.request("ModifyDnssec", req, cb);
    }
}
exports.Client = Client;
