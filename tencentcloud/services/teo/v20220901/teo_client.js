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
     * 修改应用代理规则
     */
    async ModifyApplicationProxyRule(req, cb) {
        return this.request("ModifyApplicationProxyRule", req, cb);
    }
    /**
     * 创建共享 CNAME
     */
    async CreateSharedCNAME(req, cb) {
        return this.request("CreateSharedCNAME", req, cb);
    }
    /**
     * 删除站点。
     */
    async DeleteZone(req, cb) {
        return this.request("DeleteZone", req, cb);
    }
    /**
     * 当源站资源更新，但节点缓存 TTL 未过期时，用户仍会访问到旧的资源，此时可以通过该接口实现节点资源更新。触发更新的方法有以下两种：<li>直接删除：不做任何校验，直接删除节点缓存，用户请求时触发回源拉取；</li><li>标记过期：将节点资源置为过期，用户请求时触发回源校验，即发送带有 If-None-Match 和 If-Modified-Since 头部的 HTTP 条件请求。若源站响应 200，则节点会回源拉取新的资源并更新缓存；若源站响应 304，则节点不会更新缓存；</li>

清除缓存任务详情请查看[清除缓存](https://cloud.tencent.com/document/product/1552/70759)。
     */
    async CreatePurgeTask(req, cb) {
        return this.request("CreatePurgeTask", req, cb);
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
     * 用于修改站点配置
     */
    async ModifyZoneSetting(req, cb) {
        return this.request("ModifyZoneSetting", req, cb);
    }
    /**
     * 本接口（DescribeTimingL7CacheData）用于查询七层缓存分析时序类流量数据。
     */
    async DescribeTimingL7CacheData(req, cb) {
        return this.request("DescribeTimingL7CacheData", req, cb);
    }
    /**
     * 批量删除加速域名
     */
    async DeleteAccelerationDomains(req, cb) {
        return this.request("DeleteAccelerationDomains", req, cb);
    }
    /**
     * 完成域名创建之后，您可以为域名配置自有证书，也可以使用 EdgeOne 为您提供的 [免费证书](https://cloud.tencent.com/document/product/1552/90437)。
如果您需要配置自有证书，请先将证书上传至 [SSL证书控制台](https://console.cloud.tencent.com/certoverview)，然后在本接口中传入对应的证书 ID。详情参考 [部署自有证书至 EdgeOne 域名
](https://cloud.tencent.com/document/product/1552/88874)。
     */
    async ModifyHostsCertificate(req, cb) {
        return this.request("ModifyHostsCertificate", req, cb);
    }
    /**
     * 规则引擎创建规则。
     */
    async CreateRule(req, cb) {
        return this.request("CreateRule", req, cb);
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
     * 修改应用代理
     */
    async ModifyApplicationProxy(req, cb) {
        return this.request("ModifyApplicationProxy", req, cb);
    }
    /**
     * 查询站点的验证信息。
     */
    async DescribeIdentifications(req, cb) {
        return this.request("DescribeIdentifications", req, cb);
    }
    /**
     * EdgeOne 为您提供 CNAME、NS 和无域名接入三种接入方式，您需要先通过此接口完成站点创建。CNAME 和 NS 接入站点的场景可参考 [从零开始快速接入 EdgeOne](https://cloud.tencent.com/document/product/1552/87601); 无域名接入的场景可参考 [快速启用四层代理服务](https://cloud.tencent.com/document/product/1552/96051)。

> 建议您在账号下已存在套餐时调用本接口创建站点，请在入参时传入 PlanId ，直接将站点绑定至该套餐；不传入 PlanId 时，创建出来的站点会处于未激活状态，无法正常服务，您需要通过 [BindZoneToPlan](https://cloud.tencent.com/document/product/1552/83042) 完成套餐绑定之后，站点才可正常提供服务 。若您当前没有可绑定的套餐时，请前往控制台购买套餐完成站点创建。
     */
    async CreateZone(req, cb) {
        return this.request("CreateZone", req, cb);
    }
    /**
     * 修改站点信息。
     */
    async ModifyZone(req, cb) {
        return this.request("ModifyZone", req, cb);
    }
    /**
     * 用于查询域名配置信息
     */
    async DescribeHostsSetting(req, cb) {
        return this.request("DescribeHostsSetting", req, cb);
    }
    /**
     * 查询当前账户可用套餐信息列表
     */
    async DescribeAvailablePlans(req, cb) {
        return this.request("DescribeAvailablePlans", req, cb);
    }
    /**
     * 用于验证站点所有权。
     */
    async IdentifyZone(req, cb) {
        return this.request("IdentifyZone", req, cb);
    }
    /**
     * 查询源站防护信息
     */
    async DescribeOriginProtection(req, cb) {
        return this.request("DescribeOriginProtection", req, cb);
    }
    /**
     * 查询默认证书列表
     */
    async DescribeDefaultCertificates(req, cb) {
        return this.request("DescribeDefaultCertificates", req, cb);
    }
    /**
     * 在 CNAME 接入模式下，您需要对站点或者域名的归属权进行验证，可以通过本接口触发验证。若站点通过归属权验证后，后续添加域名无需再验证。详情参考 [站点/域名归属权验证](https://cloud.tencent.com/document/product/1552/70789)。

在 NS 接入模式下，您也可以通过本接口来查询 NS 服务器是否切换成功，详情参考 [修改 DNS 服务器](https://cloud.tencent.com/document/product/1552/90452)。
     */
    async VerifyOwnership(req, cb) {
        return this.request("VerifyOwnership", req, cb);
    }
    /**
     * 用于查询站点的所有配置信息。
     */
    async DescribeZoneSetting(req, cb) {
        return this.request("DescribeZoneSetting", req, cb);
    }
    /**
     * 返回规则引擎可应用匹配请求的设置列表及其详细建议配置信息
     */
    async DescribeRulesSetting(req, cb) {
        return this.request("DescribeRulesSetting", req, cb);
    }
    /**
     * 您可以通过本接口查看站点下的域名信息，包括加速域名、源站以及域名状态等信息。您可以查看站点下全部域名的信息，也可以指定过滤条件查询对应的域名信息。
     */
    async DescribeAccelerationDomains(req, cb) {
        return this.request("DescribeAccelerationDomains", req, cb);
    }
    /**
     * 删除指定 IP 组，如果有规则引用了 IP 组情况，则不允许删除。
     */
    async DeleteSecurityIPGroup(req, cb) {
        return this.request("DeleteSecurityIPGroup", req, cb);
    }
    /**
     * 创建应用代理规则
     */
    async CreateApplicationProxyRule(req, cb) {
        return this.request("CreateApplicationProxyRule", req, cb);
    }
    /**
     * 查询预热任务状态
     */
    async DescribePrefetchTasks(req, cb) {
        return this.request("DescribePrefetchTasks", req, cb);
    }
    /**
     * 该接口用于查询您有权限的站点信息。可根据不同查询条件筛选站点。
     */
    async DescribeZones(req, cb) {
        return this.request("DescribeZones", req, cb);
    }
    /**
     * 本接口（DescribeDDoSAttackTopData）用于查询DDoS攻击Top数据。
     */
    async DescribeDDoSAttackTopData(req, cb) {
        return this.request("DescribeDDoSAttackTopData", req, cb);
    }
    /**
     * 删除应用代理
     */
    async DeleteApplicationProxy(req, cb) {
        return this.request("DeleteApplicationProxy", req, cb);
    }
    /**
     * 本接口（DescribeTopL7CacheData）用于查询七层缓存分析topN流量数据。
     */
    async DescribeTopL7CacheData(req, cb) {
        return this.request("DescribeTopL7CacheData", req, cb);
    }
    /**
     * 创建别称域名。
     */
    async CreateAliasDomain(req, cb) {
        return this.request("CreateAliasDomain", req, cb);
    }
    /**
     * 用于开启，关闭站点。
     */
    async ModifyZoneStatus(req, cb) {
        return this.request("ModifyZoneStatus", req, cb);
    }
    /**
     * 修改别称域名状态。
     */
    async ModifyAliasDomainStatus(req, cb) {
        return this.request("ModifyAliasDomainStatus", req, cb);
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
     * 校验域名 CNAME 状态
     */
    async CheckCnameStatus(req, cb) {
        return this.request("CheckCnameStatus", req, cb);
    }
    /**
     * 批量删除规则引擎规则。
     */
    async DeleteRules(req, cb) {
        return this.request("DeleteRules", req, cb);
    }
    /**
     * 本接口（DescribeTimingL4Data）用于查询四层时序流量数据列表。
     */
    async DescribeTimingL4Data(req, cb) {
        return this.request("DescribeTimingL4Data", req, cb);
    }
    /**
     * 批量修改加速域名状态
     */
    async ModifyAccelerationDomainStatuses(req, cb) {
        return this.request("ModifyAccelerationDomainStatuses", req, cb);
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
     * 本接口（DescribeDDoSAttackData）用于查询DDoS攻击时序数据。
     */
    async DescribeDDoSAttackData(req, cb) {
        return this.request("DescribeDDoSAttackData", req, cb);
    }
    /**
     * 本接口（DescribeDDoSAttackEvent）用于查询DDoS攻击事件列表。
     */
    async DescribeDDoSAttackEvent(req, cb) {
        return this.request("DescribeDDoSAttackEvent", req, cb);
    }
    /**
     * 修改Web&Bot安全配置。
     */
    async ModifySecurityPolicy(req, cb) {
        return this.request("ModifySecurityPolicy", req, cb);
    }
    /**
     * 本接口（DownloadL4Logs）用于下载四层离线日志。
     */
    async DownloadL4Logs(req, cb) {
        return this.request("DownloadL4Logs", req, cb);
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
     * 将未绑定套餐的站点绑定到已有套餐
     */
    async BindZoneToPlan(req, cb) {
        return this.request("BindZoneToPlan", req, cb);
    }
    /**
     * 在创建完站点之后，您可以通过本接口创建加速域名。

CNAME 模式接入时，若您未完成站点归属权校验，本接口将为您返回域名归属权验证信息，您可以单独对域名进行归属权验证，详情参考 [站点/域名归属权验证](https://cloud.tencent.com/document/product/1552/70789)。
     */
    async CreateAccelerationDomain(req, cb) {
        return this.request("CreateAccelerationDomain", req, cb);
    }
    /**
     * 查询别称域名信息列表。
     */
    async DescribeAliasDomains(req, cb) {
        return this.request("DescribeAliasDomains", req, cb);
    }
    /**
     * 修改加速域名信息
     */
    async ModifyAccelerationDomain(req, cb) {
        return this.request("ModifyAccelerationDomain", req, cb);
    }
    /**
     * 修改安全 IP 组。
     */
    async ModifySecurityIPGroup(req, cb) {
        return this.request("ModifySecurityIPGroup", req, cb);
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
     * 修改别称域名。
     */
    async ModifyAliasDomain(req, cb) {
        return this.request("ModifyAliasDomain", req, cb);
    }
    /**
     * 修改应用代理规则的状态
     */
    async ModifyApplicationProxyRuleStatus(req, cb) {
        return this.request("ModifyApplicationProxyRuleStatus", req, cb);
    }
    /**
     * 查询应用代理列表。
     */
    async DescribeApplicationProxies(req, cb) {
        return this.request("DescribeApplicationProxies", req, cb);
    }
}
exports.Client = Client;
