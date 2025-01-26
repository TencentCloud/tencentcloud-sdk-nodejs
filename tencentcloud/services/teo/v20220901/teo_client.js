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
     * 当您需要停止 Edgeone 套餐的计费，可以通过该接口销毁计费套餐。
> 销毁计费套餐需要满足以下条件：
    1.套餐已过期（企业版套餐除外）；
    2.套餐下所有站点均已关闭或删除。

> 站点状态可以通过 [查询站点列表](https://cloud.tencent.com/document/product/1552/80713) 接口进行查询
停用站点可以通过 [切换站点状态](https://cloud.tencent.com/document/product/1552/80707) 接口将站点切换至关闭状态
删除站点可以通过 [删除站点](https://cloud.tencent.com/document/product/1552/80717) 接口将站点删除
     */
    async DestroyPlan(req, cb) {
        return this.request("DestroyPlan", req, cb);
    }
    /**
     * 在创建完站点后，并且站点为 NS 模式接入时，您可以通过本接口创建 DNS 记录。
     */
    async CreateDnsRecord(req, cb) {
        return this.request("CreateDnsRecord", req, cb);
    }
    /**
     * 导出站点配置接口，本接口支持用户根据需要的配置项进行配置导出，导出的配置用于导入站点配置接口（ImportZoneConfig）进行配置导入。该功能仅支持标准版和企业版套餐站点使用。
     */
    async ExportZoneConfig(req, cb) {
        return this.request("ExportZoneConfig", req, cb);
    }
    /**
     * 批量查询内容标识符，可以根据 ID、描述、状态或者标签过滤。按照状态查询被删除的内容标识符仅保留三个月。该功能仅白名单开放。
     */
    async DescribeContentIdentifiers(req, cb) {
        return this.request("DescribeContentIdentifiers", req, cb);
    }
    /**
     * 删除边缘函数，删除后函数无法恢复，关联的触发规则会一并删除。
     */
    async DeleteFunction(req, cb) {
        return this.request("DeleteFunction", req, cb);
    }
    /**
     * 当源站资源更新，但节点缓存 TTL 未过期时，用户仍会访问到旧的资源，此时可以通过该接口实现节点资源更新。触发更新的方法有以下两种：<li>直接删除：不做任何校验，直接删除节点缓存，用户请求时触发回源拉取；</li><li>标记过期：将节点资源置为过期，用户请求时触发回源校验，即发送带有 If-None-Match 和 If-Modified-Since 头部的 HTTP 条件请求。若源站响应 200，则节点会回源拉取新的资源并更新缓存；若源站响应 304，则节点不会更新缓存；</li>

清除缓存任务详情请查看[清除缓存](https://cloud.tencent.com/document/product/1552/70759)。
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
     * DescribePrefetchTasks 用于查询预热任务提交历史记录及执行进度，通过 CreatePrefetchTasks 接口提交的任务可通过此接口进行查询。
     */
    async DescribePrefetchTasks(req, cb) {
        return this.request("DescribePrefetchTasks", req, cb);
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
     * 通过本接口查询实时日志投递任务列表。
     */
    async DescribeRealtimeLogDeliveryTasks(req, cb) {
        return this.request("DescribeRealtimeLogDeliveryTasks", req, cb);
    }
    /**
     * 在 CNAME 接入模式下，您需要对站点或者域名的归属权进行验证，可以通过本接口触发验证。若站点通过归属权验证后，后续添加域名无需再验证。详情参考 [站点/域名归属权验证](https://cloud.tencent.com/document/product/1552/70789)。

在 NS 接入模式下，您也可以通过本接口来查询 NS 服务器是否切换成功，详情参考 [修改 DNS 服务器](https://cloud.tencent.com/document/product/1552/90452)。
     */
    async VerifyOwnership(req, cb) {
        return this.request("VerifyOwnership", req, cb);
    }
    /**
     * 创建边缘函数的触发规则。
     */
    async CreateFunctionRule(req, cb) {
        return this.request("CreateFunctionRule", req, cb);
    }
    /**
     * 删除边缘函数触发规则。
     */
    async DeleteFunctionRules(req, cb) {
        return this.request("DeleteFunctionRules", req, cb);
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
     * 本接口用于修改[规则引擎](https://cloud.tencent.com/document/product/1552/70901)中的规则，单次仅支持修改单条规则。
     */
    async ModifyL7AccRule(req, cb) {
        return this.request("ModifyL7AccRule", req, cb);
    }
    /**
     * 您可以通过本接口查看站点下的域名信息，包括加速域名、源站以及域名状态等信息。您可以查看站点下全部域名的信息，也可以指定过滤条件查询对应的域名信息。
     */
    async DescribeAccelerationDomains(req, cb) {
        return this.request("DescribeAccelerationDomains", req, cb);
    }
    /**
     * 查询边缘函数运行环境，包括环境变量。
     */
    async DescribeFunctionRuntimeEnvironment(req, cb) {
        return this.request("DescribeFunctionRuntimeEnvironment", req, cb);
    }
    /**
     * 修改源站组配置，新提交的源站记录将会覆盖原有源站组中的源站记录。
     */
    async ModifyOriginGroup(req, cb) {
        return this.request("ModifyOriginGroup", req, cb);
    }
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [删除四层代理实例
](https://cloud.tencent.com/document/product/1552/103415) 。
     */
    async DeleteApplicationProxy(req, cb) {
        return this.request("DeleteApplicationProxy", req, cb);
    }
    /**
     * 本接口用于修改[站点加速](https://cloud.tencent.com/document/product/1552/96193)全局配置。
     */
    async ModifyL7AccSetting(req, cb) {
        return this.request("ModifyL7AccSetting", req, cb);
    }
    /**
     * 用于启用/停用四层代理实例。
     */
    async ModifyL4ProxyStatus(req, cb) {
        return this.request("ModifyL4ProxyStatus", req, cb);
    }
    /**
     * 本接口（DownloadL7Logs）下载七层离线日志。
     */
    async DownloadL7Logs(req, cb) {
        return this.request("DownloadL7Logs", req, cb);
    }
    /**
     * 在版本管理模式下，用于查询环境信息，可获取环境 ID、类型、当前生效版本等。版本管理功能内测中，当前仅白名单开放。
     */
    async DescribeEnvironments(req, cb) {
        return this.request("DescribeEnvironments", req, cb);
    }
    /**
     * 当您的套餐绑定的站点数，或配置的 Web 防护 - 自定义规则 - 精准匹配策略的规则数，或 Web 防护 - 速率限制 - 精准速率限制模块的规则数达到套餐允许的配额上限，可以通过该接口增购对应配额。
> 该接口该仅支持企业版套餐。
     */
    async IncreasePlanQuota(req, cb) {
        return this.request("IncreasePlanQuota", req, cb);
    }
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [删除四层代理转发规则](https://cloud.tencent.com/document/product/1552/103414) 。
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
     * 本接口（DescribeOverviewL7Data）用于查询七层监控类时序流量数据。此接口待废弃，请使用 <a href="https://cloud.tencent.com/document/product/1552/80648">DescribeTimingL7AnalysisData</a> 接口。
     */
    async DescribeOverviewL7Data(req, cb) {
        return this.request("DescribeOverviewL7Data", req, cb);
    }
    /**
     * 在创建完站点之后，您可以通过本接口创建加速域名。

CNAME 模式接入时，若您未完成站点归属权校验，本接口将为您返回域名归属权验证信息，您可以单独对域名进行归属权验证，详情参考 [站点/域名归属权验证](https://cloud.tencent.com/document/product/1552/70789)。
     */
    async CreateAccelerationDomain(req, cb) {
        return this.request("CreateAccelerationDomain", req, cb);
    }
    /**
     * 在版本管理模式下，用于获取版本的详细信息，包括版本 ID、描述、状态、创建时间、所属配置组信息以及版本配置文件的内容。版本管理功能内测中，当前仅白名单开放。
     */
    async DescribeConfigGroupVersionDetail(req, cb) {
        return this.request("DescribeConfigGroupVersionDetail", req, cb);
    }
    /**
     * 本接口用于查询[规则引擎](https://cloud.tencent.com/document/product/1552/70901)的规则列表。
     */
    async DescribeL7AccRules(req, cb) {
        return this.request("DescribeL7AccRules", req, cb);
    }
    /**
     * 操作安全策略模板，支持将域名绑定或换绑到指定的策略模板，或者从指定的策略模板解绑。
     */
    async BindSecurityTemplateToEntity(req, cb) {
        return this.request("BindSecurityTemplateToEntity", req, cb);
    }
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [修改四层代理转发规则状态
](https://cloud.tencent.com/document/product/1552/103409) 。
     */
    async ModifyApplicationProxyRuleStatus(req, cb) {
        return this.request("ModifyApplicationProxyRuleStatus", req, cb);
    }
    /**
     * 为未购买套餐的站点购买套餐
     */
    async CreatePlanForZone(req, cb) {
        return this.request("CreatePlanForZone", req, cb);
    }
    /**
     * 删除源站组，若源站组仍然被服务（例如：四层代理，域名服务，负载均衡，规则引起）引用，将不允许删除。
     */
    async DeleteOriginGroup(req, cb) {
        return this.request("DeleteOriginGroup", req, cb);
    }
    /**
     * 查询负载均衡实例列表。负载均衡功能内测中，如您需要使用请 [联系我们](https://cloud.tencent.com/online-service)。
     */
    async DescribeLoadBalancerList(req, cb) {
        return this.request("DescribeLoadBalancerList", req, cb);
    }
    /**
     * 创建安全 IP 组
     */
    async CreateSecurityIPGroup(req, cb) {
        return this.request("CreateSecurityIPGroup", req, cb);
    }
    /**
     * 该接口可用于查询 IP 是否为 EdgeOne IP。
     */
    async DescribeIPRegion(req, cb) {
        return this.request("DescribeIPRegion", req, cb);
    }
    /**
     * 修改负载均衡实例配置。负载均衡功能内测中，如您需要使用请 [联系我们](https://cloud.tencent.com/online-service)。
     */
    async ModifyLoadBalancer(req, cb) {
        return this.request("ModifyLoadBalancer", req, cb);
    }
    /**
     * 批量删除加速域名
     */
    async DeleteAccelerationDomains(req, cb) {
        return this.request("DeleteAccelerationDomains", req, cb);
    }
    /**
     * 通过本接口创建实时日志投递任务。本接口有如下限制：
同一个实体（七层域名或者四层代理实例）在同种数据投递类型（LogType）和数据投递区域（Area）的组合下，只能被添加到一个实时日志投递任务中。建议先通过 [DescribeRealtimeLogDeliveryTasks](https://cloud.tencent.com/document/product/1552/104110)  接口根据实体查询实时日志投递任务列表，检查实体是否已经被添加到另一实时日志投递任务中。
     */
    async CreateRealtimeLogDeliveryTask(req, cb) {
        return this.request("CreateRealtimeLogDeliveryTask", req, cb);
    }
    /**
     * 用于修改四层代理实例的配置。
     */
    async ModifyL4Proxy(req, cb) {
        return this.request("ModifyL4Proxy", req, cb);
    }
    /**
     * 用于修改四层代理转发规则，支持单条或者批量修改。
     */
    async ModifyL4ProxyRules(req, cb) {
        return this.request("ModifyL4ProxyRules", req, cb);
    }
    /**
     * 您可以通过本接口批量修改 DNS 记录。
     */
    async ModifyDnsRecords(req, cb) {
        return this.request("ModifyDnsRecords", req, cb);
    }
    /**
     * 本接口用于查询七层缓存分析时序类流量数据。此接口待废弃，请使用 <a href="https://cloud.tencent.com/document/product/1552/80648">DescribeTimingL7AnalysisData</a> 接口。
     */
    async DescribeTimingL7CacheData(req, cb) {
        return this.request("DescribeTimingL7CacheData", req, cb);
    }
    /**
     * 在版本管理模式下，用于查询指定配置组的版本列表。版本管理功能内测中，当前仅白名单开放。
     */
    async DescribeConfigGroupVersions(req, cb) {
        return this.request("DescribeConfigGroupVersions", req, cb);
    }
    /**
     * 本接口为旧版，EdgeOne 已对规则引擎相关接口全面升级，详情请参考 [ModifyL7AccSetting](https://cloud.tencent.com/document/product/1552/115817)。
     */
    async ModifyZoneSetting(req, cb) {
        return this.request("ModifyZoneSetting", req, cb);
    }
    /**
     * 创建别称域名。
     */
    async CreateAliasDomain(req, cb) {
        return this.request("CreateAliasDomain", req, cb);
    }
    /**
     * 修改别称域名状态。
     */
    async ModifyAliasDomainStatus(req, cb) {
        return this.request("ModifyAliasDomainStatus", req, cb);
    }
    /**
     * 查询安全 IP 组的配置信息，包括安全 IP 组的 ID、名称和内容。
     */
    async DescribeSecurityIPGroup(req, cb) {
        return this.request("DescribeSecurityIPGroup", req, cb);
    }
    /**
     * 用于创建四层代理实例规则，支持单条或者批量创建。
     */
    async CreateL4ProxyRules(req, cb) {
        return this.request("CreateL4ProxyRules", req, cb);
    }
    /**
     * 本接口（DescribeTimingL4Data）用于查询四层时序流量数据列表。
     */
    async DescribeTimingL4Data(req, cb) {
        return this.request("DescribeTimingL4Data", req, cb);
    }
    /**
     * 本接口用于查询七层缓存分析 topN 数据。此接口待废弃，请使用 <a href="https://cloud.tencent.com/document/product/1552/80646"> DescribeTopL7AnalysisData</a> 接口。
     */
    async DescribeTopL7CacheData(req, cb) {
        return this.request("DescribeTopL7CacheData", req, cb);
    }
    /**
     * 本接口为旧版，EdgeOne 已对规则引擎相关接口全面升级，详情请参考 [ModifyL7AccRule](https://cloud.tencent.com/document/product/1552/115818)。
     */
    async ModifyRule(req, cb) {
        return this.request("ModifyRule", req, cb);
    }
    /**
     * 本接口用于查询七层域名业务按照指定维度的 topN 数据。请注意本接口查询数据有 10 分钟左右延迟，建议拉取当前时间 10 分钟以前的数据。
     */
    async DescribeTopL7AnalysisData(req, cb) {
        return this.request("DescribeTopL7AnalysisData", req, cb);
    }
    /**
     * 您可以用本接口批量删除 DNS 记录。
     */
    async DeleteDnsRecords(req, cb) {
        return this.request("DeleteDnsRecords", req, cb);
    }
    /**
     * 修改Web&Bot安全配置。
     */
    async ModifySecurityPolicy(req, cb) {
        return this.request("ModifySecurityPolicy", req, cb);
    }
    /**
     * 修改套餐配置。目前仅支持修改预付费套餐的自动续费开关。
     */
    async ModifyPlan(req, cb) {
        return this.request("ModifyPlan", req, cb);
    }
    /**
     * 本接口用于删除[规则引擎](https://cloud.tencent.com/document/product/1552/70901)的规则，支持批量删除。
     */
    async DeleteL7AccRules(req, cb) {
        return this.request("DeleteL7AccRules", req, cb);
    }
    /**
     * 将未绑定套餐的站点绑定到已有套餐
     */
    async BindZoneToPlan(req, cb) {
        return this.request("BindZoneToPlan", req, cb);
    }
    /**
     * 查询负载均衡实例下源站组健康状态。负载均衡功能内测中，如您需要使用请 [联系我们](https://cloud.tencent.com/online-service)。
     */
    async DescribeOriginGroupHealthStatus(req, cb) {
        return this.request("DescribeOriginGroupHealthStatus", req, cb);
    }
    /**
     * 用于删除四层代理转发规则，支持单条或者批量操作。
     */
    async DeleteL4ProxyRules(req, cb) {
        return this.request("DeleteL4ProxyRules", req, cb);
    }
    /**
     * 创建自定义错误页面。
     */
    async CreateCustomizeErrorPage(req, cb) {
        return this.request("CreateCustomizeErrorPage", req, cb);
    }
    /**
     * 修改加速域名信息
     */
    async ModifyAccelerationDomain(req, cb) {
        return this.request("ModifyAccelerationDomain", req, cb);
    }
    /**
     * 用于创建四层代理实例。
     */
    async CreateL4Proxy(req, cb) {
        return this.request("CreateL4Proxy", req, cb);
    }
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [修改四层代理实例状态](https://cloud.tencent.com/document/product/1552/103408) 。
     */
    async ModifyApplicationProxyStatus(req, cb) {
        return this.request("ModifyApplicationProxyStatus", req, cb);
    }
    /**
     * 若您需要使用 Edgeone 产品，您需要通过此接口创建计费套餐。
> 创建套餐后，您需要通过 [CreateZone](https://cloud.tencent.com/document/product/1552/80719) 完成创建站点，绑定套餐的流程，Edgeone 才能正常提供服务。
     */
    async CreatePlan(req, cb) {
        return this.request("CreatePlan", req, cb);
    }
    /**
     * 本接口查询七层域名业务的时序数据。请注意本接口查询数据有 10 分钟左右延迟，建议拉取当前时间 10 分钟以前的数据。
     */
    async DescribeTimingL7AnalysisData(req, cb) {
        return this.request("DescribeTimingL7AnalysisData", req, cb);
    }
    /**
     * 创建并部署边缘函数至 EdgeOne 的边缘节点。
     */
    async CreateFunction(req, cb) {
        return this.request("CreateFunction", req, cb);
    }
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版，新版接口中将四层代理实例列表的查询和四层转发规则的查询拆分成两个接口，详情请参考 [查询四层代理实例列表](https://cloud.tencent.com/document/product/1552/103413) 和 [查询四层代理转发规则列表](https://cloud.tencent.com/document/product/1552/103412)。
     */
    async DescribeApplicationProxies(req, cb) {
        return this.request("DescribeApplicationProxies", req, cb);
    }
    /**
     * 用于创建共享 CNAME，该功能白名单内测中。
     */
    async CreateSharedCNAME(req, cb) {
        return this.request("CreateSharedCNAME", req, cb);
    }
    /**
     * 本接口为旧版，EdgeOne 已对规则引擎相关接口全面升级，详情请参考 [CreateL7AccRules](https://cloud.tencent.com/document/product/1552/115822)。
     */
    async CreateRule(req, cb) {
        return this.request("CreateRule", req, cb);
    }
    /**
     * 在版本管理模式下，用于创建指定配置组的新版本。版本管理功能内测中，当前仅白名单开放。
     */
    async CreateConfigGroupVersion(req, cb) {
        return this.request("CreateConfigGroupVersion", req, cb);
    }
    /**
     * 您可以通过本接口批量修改 DNS 记录的状态，批量对记录进行开启和停用。
     */
    async ModifyDnsRecordsStatus(req, cb) {
        return this.request("ModifyDnsRecordsStatus", req, cb);
    }
    /**
     * 修改边缘函数，支持修改函数的内容及描述信息，修改且重新部署后，函数立刻生效。
     */
    async ModifyFunction(req, cb) {
        return this.request("ModifyFunction", req, cb);
    }
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [修改四层代理实例
](https://cloud.tencent.com/document/product/1552/103411) 。
     */
    async ModifyApplicationProxy(req, cb) {
        return this.request("ModifyApplicationProxy", req, cb);
    }
    /**
     * EdgeOne 为您提供 CNAME、NS 和无域名接入三种接入方式，您需要先通过此接口完成站点创建。CNAME 和 NS 接入站点的场景可参考 [从零开始快速接入 EdgeOne](https://cloud.tencent.com/document/product/1552/87601); 无域名接入的场景可参考 [快速启用四层代理服务](https://cloud.tencent.com/document/product/1552/96051)。

> 建议您在账号下已存在套餐时调用本接口创建站点，请在入参时传入 PlanId ，直接将站点绑定至该套餐；不传入 PlanId 时，创建出来的站点会处于未激活状态，无法正常服务，您需要通过 [BindZoneToPlan](https://cloud.tencent.com/document/product/1552/83042) 完成套餐绑定之后，站点才可正常提供服务 。若您当前没有可绑定的套餐时，请前往控制台购买套餐完成站点创建。
     */
    async CreateZone(req, cb) {
        return this.request("CreateZone", req, cb);
    }
    /**
     * 修改边缘函数触发规则，支持修改规则条件、执行函数以及描述信息。
     */
    async ModifyFunctionRule(req, cb) {
        return this.request("ModifyFunctionRule", req, cb);
    }
    /**
     * 查询当前账户可用套餐信息列表
     */
    async DescribeAvailablePlans(req, cb) {
        return this.request("DescribeAvailablePlans", req, cb);
    }
    /**
     * 查询自定义错误页列表。
     */
    async DescribeCustomErrorPages(req, cb) {
        return this.request("DescribeCustomErrorPages", req, cb);
    }
    /**
     * 删除负载均衡实例，若负载均衡示例被其他服务（例如：四层代理等）引用的时候，示例无法被删除，需要先解除引用关系。负载均衡功能内测中，如您需要使用请 [联系我们](https://cloud.tencent.com/online-service)。
     */
    async DeleteLoadBalancer(req, cb) {
        return this.request("DeleteLoadBalancer", req, cb);
    }
    /**
     * 删除指定的内容标识符。该功能仅白名单开放。
     */
    async DeleteContentIdentifier(req, cb) {
        return this.request("DeleteContentIdentifier", req, cb);
    }
    /**
     * 本接口为旧版，EdgeOne 已对规则引擎相关接口全面升级，详情请参考 [RuleEngineAction](https://cloud.tencent.com/document/product/1552/80721#RuleEngineAction)。
     */
    async DescribeRulesSetting(req, cb) {
        return this.request("DescribeRulesSetting", req, cb);
    }
    /**
     * 批量修改加速域名状态
     */
    async ModifyAccelerationDomainStatuses(req, cb) {
        return this.request("ModifyAccelerationDomainStatuses", req, cb);
    }
    /**
     * 查询边缘函数触发规则列表，支持按照规则 ID、函数 ID、规则描述等条件进行过滤。
     */
    async DescribeFunctionRules(req, cb) {
        return this.request("DescribeFunctionRules", req, cb);
    }
    /**
     * 通过本接口删除实时日志投递任务。
     */
    async DeleteRealtimeLogDeliveryTask(req, cb) {
        return this.request("DeleteRealtimeLogDeliveryTask", req, cb);
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
     * 本接口用于在[规则引擎](https://cloud.tencent.com/document/product/1552/70901)中创建规则，支持批量创建。
     */
    async CreateL7AccRules(req, cb) {
        return this.request("CreateL7AccRules", req, cb);
    }
    /**
     * DescribePurgeTasks 用于查询提交的 URL 刷新、目录刷新记录及执行进度，通过 CreatePurgeTasks 接口提交的任务均可通过此接口进行查询。
     */
    async DescribePurgeTasks(req, cb) {
        return this.request("DescribePurgeTasks", req, cb);
    }
    /**
     * 本接口为旧版，EdgeOne 已对规则引擎相关接口全面升级，详情请参考 [DeleteL7AccRules](https://cloud.tencent.com/document/product/1552/115821)。
     */
    async DeleteRules(req, cb) {
        return this.request("DeleteRules", req, cb);
    }
    /**
     * 查询四层代理实例下的转发规则列表。
     */
    async DescribeL4ProxyRules(req, cb) {
        return this.request("DescribeL4ProxyRules", req, cb);
    }
    /**
     * 删除自定义错误页面。
     */
    async DeleteCustomErrorPage(req, cb) {
        return this.request("DeleteCustomErrorPage", req, cb);
    }
    /**
     * 操作边缘函数运行环境，支持环境变量的相关设置。
设置环境变量后，可在函数代码中使用，具体参考 [边缘函数引入环境变量](https://cloud.tencent.com/document/product/1552/109151#0151fd9a-8b0e-407b-ae37-54553a60ded6)。
     */
    async HandleFunctionRuntimeEnvironment(req, cb) {
        return this.request("HandleFunctionRuntimeEnvironment", req, cb);
    }
    /**
     * 本接口（DescribeDDoSAttackEvent）用于查询DDoS攻击事件列表。
     */
    async DescribeDDoSAttackEvent(req, cb) {
        return this.request("DescribeDDoSAttackEvent", req, cb);
    }
    /**
     * 修改内容标识符，仅支持修改描述。该功能仅白名单开放。
     */
    async ModifyContentIdentifier(req, cb) {
        return this.request("ModifyContentIdentifier", req, cb);
    }
    /**
     * 当您需要使用高等级套餐才拥有的功能，可以通过本接口升级套餐，仅支持个人版，基础版套餐进行升级。
> 不同类型 Edgeone 计费套餐区别参考 [Edgeone计费套餐选型对比](https://cloud.tencent.com/document/product/1552/94165)
计费套餐升级规则以及资费详情参考 [Edgeone计费套餐升配说明](https://cloud.tencent.com/document/product/1552/95291)
如果需要将套餐升级至企业版，请 [联系我们](https://cloud.tencent.com/online-service)
     */
    async UpgradePlan(req, cb) {
        return this.request("UpgradePlan", req, cb);
    }
    /**
     * 修改边缘函数触发规则的优先级。
     */
    async ModifyFunctionRulePriority(req, cb) {
        return this.request("ModifyFunctionRulePriority", req, cb);
    }
    /**
     * 修改安全 IP 组。
     */
    async ModifySecurityIPGroup(req, cb) {
        return this.request("ModifySecurityIPGroup", req, cb);
    }
    /**
     * 本接口为旧版，EdgeOne 已对规则引擎相关接口全面升级，详情请参考 [DescribeL7AccRules](https://cloud.tencent.com/document/product/1552/115820)。
     */
    async DescribeRules(req, cb) {
        return this.request("DescribeRules", req, cb);
    }
    /**
     * 针对指定实时日志投递任务（task-id），在对应的腾讯云 CLS 日志主题中创建投递日志字段对应的键值索引。如果您在腾讯云 CLS 已经创建索引，本接口将采用合并的方式追加索引。
     */
    async CreateCLSIndex(req, cb) {
        return this.request("CreateCLSIndex", req, cb);
    }
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版 [创建四层代理实例](https://cloud.tencent.com/document/product/1552/103417) 。
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
     * 创建负载均衡实例。详情请参考 [快速创建负载均衡实例](https://cloud.tencent.com/document/product/1552/104223)。负载均衡功能内测中，如您需要使用请 [联系我们](https://cloud.tencent.com/online-service)。
     */
    async CreateLoadBalancer(req, cb) {
        return this.request("CreateLoadBalancer", req, cb);
    }
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [修改四层代理转发规则
](https://cloud.tencent.com/document/product/1552/103410) 。
     */
    async ModifyApplicationProxyRule(req, cb) {
        return this.request("ModifyApplicationProxyRule", req, cb);
    }
    /**
     * 本接口用于查询[站点加速](https://cloud.tencent.com/document/product/1552/96193)全局配置。
     */
    async DescribeL7AccSetting(req, cb) {
        return this.request("DescribeL7AccSetting", req, cb);
    }
    /**
     * 创建源站组，以源站组的方式管理业务源站。此处配置的源站组可于**添加加速域名**和**四层代理**等功能中引用。
     */
    async CreateOriginGroup(req, cb) {
        return this.request("CreateOriginGroup", req, cb);
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
     * 在版本管理模式下，用于查询生产/测试环境的版本发布历史。版本管理功能内测中，当前仅白名单开放。
     */
    async DescribeDeployHistory(req, cb) {
        return this.request("DescribeDeployHistory", req, cb);
    }
    /**
     * 在版本管理模式下，用于版本发布，可通过 EnvId 将版本发布至测试环境或生产环境。版本管理功能内测中，当前仅白名单开放。
     */
    async DeployConfigGroupVersion(req, cb) {
        return this.request("DeployConfigGroupVersion", req, cb);
    }
    /**
     * 本接口为旧版，EdgeOne 已对规则引擎相关接口全面升级，可通过 [DescribeL7AccSetting](https://cloud.tencent.com/document/product/1552/115819) 和 [DescribeL7AccRules](https://cloud.tencent.com/document/product/1552/115820) 来获取域名的详细配置。
     */
    async DescribeHostsSetting(req, cb) {
        return this.request("DescribeHostsSetting", req, cb);
    }
    /**
     * 查询指定策略模板的绑定关系列表。
     */
    async DescribeSecurityTemplateBindings(req, cb) {
        return this.request("DescribeSecurityTemplateBindings", req, cb);
    }
    /**
     * 用于删除四层代理实例。
     */
    async DeleteL4Proxy(req, cb) {
        return this.request("DeleteL4Proxy", req, cb);
    }
    /**
     * 用于加速域名绑定或解绑共享 CNAME，该功能白名单内测中。
     */
    async BindSharedCNAME(req, cb) {
        return this.request("BindSharedCNAME", req, cb);
    }
    /**
     * 通过本接口修改实时日志投递任务配置。本接口有如下限制：<li>不支持修改实时日志投递任务目的地类型（TaskType）；</li><li>不支持修改数据投递类型（LogType）</li><li>不支持修改数据投递区域（Area）</li><li>当原实时日志投递任务的目的地为腾讯云 CLS 时，不支持修改目的地详细配置，如日志集、日志主题。</li>
     */
    async ModifyRealtimeLogDeliveryTask(req, cb) {
        return this.request("ModifyRealtimeLogDeliveryTask", req, cb);
    }
    /**
     * 查询源站防护信息
     */
    async DescribeOriginProtection(req, cb) {
        return this.request("DescribeOriginProtection", req, cb);
    }
    /**
     * 用于启用/停用四层代理转发规则状态，支持单条或者批量操作。
     */
    async ModifyL4ProxyRulesStatus(req, cb) {
        return this.request("ModifyL4ProxyRulesStatus", req, cb);
    }
    /**
     * 当您的套餐需要延长有效期，可以通过该接口进行续费。套餐续费仅支持个人版，基础版，标准版套餐。
> 费用详情可参考 [套餐费用](https://cloud.tencent.com/document/product/1552/94158)
     */
    async RenewPlan(req, cb) {
        return this.request("RenewPlan", req, cb);
    }
    /**
     * 本接口为旧版，EdgeOne 已对规则引擎相关接口全面升级，详情请参考 [DescribeL7AccSetting](https://cloud.tencent.com/document/product/1552/115819)。
     */
    async DescribeZoneSetting(req, cb) {
        return this.request("DescribeZoneSetting", req, cb);
    }
    /**
     * 查询站点配置项导入结果接口，本接口用于站点配置导入接口（ImportZoneConfig）的结果查询。该功能仅支持标准版或企业版套餐的站点使用。
     */
    async DescribeZoneConfigImportResult(req, cb) {
        return this.request("DescribeZoneConfigImportResult", req, cb);
    }
    /**
     * 创建内容标识符，可以设置描述、标签等信息，同时需要绑定企业版套餐用于统计计费数据；一个内容标识符只能绑定一个计费套餐，一个计费套餐可以绑定多个内容标识符。该功能仅限白名单开放。
     */
    async CreateContentIdentifier(req, cb) {
        return this.request("CreateContentIdentifier", req, cb);
    }
    /**
     * 删除指定 IP 组，如果有规则引用了 IP 组情况，则不允许删除。
     */
    async DeleteSecurityIPGroup(req, cb) {
        return this.request("DeleteSecurityIPGroup", req, cb);
    }
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [创建四层代理转发规则
](https://cloud.tencent.com/document/product/1552/103416) 。
     */
    async CreateApplicationProxyRule(req, cb) {
        return this.request("CreateApplicationProxyRule", req, cb);
    }
    /**
     * 该接口用于查询您有权限的站点信息。可根据不同查询条件筛选站点。
     */
    async DescribeZones(req, cb) {
        return this.request("DescribeZones", req, cb);
    }
    /**
     * 查询边缘函数列表，支持函数 ID、函数名称、描述等条件的过滤。
     */
    async DescribeFunctions(req, cb) {
        return this.request("DescribeFunctions", req, cb);
    }
    /**
     * 删除站点。
     */
    async DeleteZone(req, cb) {
        return this.request("DeleteZone", req, cb);
    }
    /**
     * 接口已废弃，将于 2024 年 6 月 30 日停止服务。请使用 [查询安全 IP 组
](https://cloud.tencent.com/document/product/1552/105866) 接口。

查询 IP 组的配置信息，包括 IP 组名称、 IP 组内容、 IP 组归属站点。
     */
    async DescribeSecurityIPGroupInfo(req, cb) {
        return this.request("DescribeSecurityIPGroupInfo", req, cb);
    }
    /**
     * 您可以用过本接口查看站点下的 DNS 记录信息，包括 DNS 记录名、记录类型以及记录内容等信息，支持指定过滤条件查询对应的 DNS 记录信息。
     */
    async DescribeDnsRecords(req, cb) {
        return this.request("DescribeDnsRecords", req, cb);
    }
    /**
     * 导入站点配置接口，本接口支持站点配置文件的快速导入，发起导入后接口会返回对应的任务 ID（TaskId），用户需通过查询站点配置导入结果接口（DescribeZoneConfigImportResult）获取本次导入任务执行的结果。该功能仅支持标准版和企业版套餐站点使用。
     */
    async ImportZoneConfig(req, cb) {
        return this.request("ImportZoneConfig", req, cb);
    }
    /**
     * 修改自定义错误页面。
     */
    async ModifyCustomErrorPage(req, cb) {
        return this.request("ModifyCustomErrorPage", req, cb);
    }
    /**
     * 本接口（DescribeDDoSAttackData）用于查询DDoS攻击时序数据。
     */
    async DescribeDDoSAttackData(req, cb) {
        return this.request("DescribeDDoSAttackData", req, cb);
    }
    /**
     * 用于删除共享 CNAME，该功能白名单内测中。
     */
    async DeleteSharedCNAME(req, cb) {
        return this.request("DeleteSharedCNAME", req, cb);
    }
    /**
     * 查询别称域名信息列表。
     */
    async DescribeAliasDomains(req, cb) {
        return this.request("DescribeAliasDomains", req, cb);
    }
    /**
     * 用于查询四层代理实例列表。
     */
    async DescribeL4Proxy(req, cb) {
        return this.request("DescribeL4Proxy", req, cb);
    }
    /**
     * 通过本接口查询计费数据。
     */
    async DescribeBillingData(req, cb) {
        return this.request("DescribeBillingData", req, cb);
    }
}
exports.Client = Client;
