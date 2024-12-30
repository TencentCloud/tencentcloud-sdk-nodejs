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
     * 查询指定域名TOP N攻击类型
     */
    async DescribeAttackType(req, cb) {
        return this.request("DescribeAttackType", req, cb);
    }
    /**
     * 获取一个clbwaf域名详情
     */
    async DescribeDomainDetailsClb(req, cb) {
        return this.request("DescribeDomainDetailsClb", req, cb);
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
     * 按照条件查询展示攻击总次数
     */
    async GetAttackTotalCount(req, cb) {
        return this.request("GetAttackTotalCount", req, cb);
    }
    /**
     * 导入IP黑白名单
     */
    async ImportIpAccessControl(req, cb) {
        return this.request("ImportIpAccessControl", req, cb);
    }
    /**
     * 增加精准白名单规则
     */
    async AddCustomWhiteRule(req, cb) {
        return this.request("AddCustomWhiteRule", req, cb);
    }
    /**
     * Waf IP黑白名单Delete接口（建议使用DeleteIpAccessControlV2来替换当前接口）
     */
    async DeleteIpAccessControl(req, cb) {
        return this.request("DeleteIpAccessControl", req, cb);
    }
    /**
     * 获取地域封禁配置包括地域封禁开关，设置封禁的地区信息
     */
    async DescribeAreaBanAreas(req, cb) {
        return this.request("DescribeAreaBanAreas", req, cb);
    }
    /**
     * 编辑自定义规则
     */
    async ModifyCustomRule(req, cb) {
        return this.request("ModifyCustomRule", req, cb);
    }
    /**
     * 设置负载均衡型WAF防护域名的流量模式，切换镜像模式和清洗模式
     */
    async ModifyHostFlowMode(req, cb) {
        return this.request("ModifyHostFlowMode", req, cb);
    }
    /**
     * 设置套餐实例的弹性qps上限
     */
    async ModifyInstanceQpsLimit(req, cb) {
        return this.request("ModifyInstanceQpsLimit", req, cb);
    }
    /**
     * api资产列表
     */
    async DescribeApiListVersionTwo(req, cb) {
        return this.request("DescribeApiListVersionTwo", req, cb);
    }
    /**
     * waf斯巴达-获取防护域名信息
     */
    async DescribeSpartaProtectionInfo(req, cb) {
        return this.request("DescribeSpartaProtectionInfo", req, cb);
    }
    /**
     * 描述WAF自动封禁IP详情,对齐自动封堵状态
     */
    async DescribeAutoDenyIP(req, cb) {
        return this.request("DescribeAutoDenyIP", req, cb);
    }
    /**
     * 删除精准白名单规则
     */
    async DeleteCustomWhiteRule(req, cb) {
        return this.request("DeleteCustomWhiteRule", req, cb);
    }
    /**
     * 查询下载攻击日志任务记录列表
     */
    async GetAttackDownloadRecords(req, cb) {
        return this.request("GetAttackDownloadRecords", req, cb);
    }
    /**
     * 获取Api请求详情信息
     */
    async DescribeApiDetail(req, cb) {
        return this.request("DescribeApiDetail", req, cb);
    }
    /**
     * 查询扫描ip
     */
    async DescribeScanIp(req, cb) {
        return this.request("DescribeScanIp", req, cb);
    }
    /**
     * 删除自定义规则
     */
    async DeleteCustomRule(req, cb) {
        return this.request("DeleteCustomRule", req, cb);
    }
    /**
     * 编辑防篡改url
     */
    async ModifyAntiFakeUrl(req, cb) {
        return this.request("ModifyAntiFakeUrl", req, cb);
    }
    /**
     * 编辑SaaS型WAF域名配置
     */
    async ModifySpartaProtection(req, cb) {
        return this.request("ModifySpartaProtection", req, cb);
    }
    /**
     * 修改实例的QPS弹性计费开关
     */
    async ModifyInstanceElasticMode(req, cb) {
        return this.request("ModifyInstanceElasticMode", req, cb);
    }
    /**
     * api分析页面开关
     */
    async ModifyApiAnalyzeStatus(req, cb) {
        return this.request("ModifyApiAnalyzeStatus", req, cb);
    }
    /**
     * 修改ip惩罚规则
     */
    async ModifyWafAutoDenyRules(req, cb) {
        return this.request("ModifyWafAutoDenyRules", req, cb);
    }
    /**
     * 查询saas和clb的域名信息
     */
    async DescribeUserDomainInfo(req, cb) {
        return this.request("DescribeUserDomainInfo", req, cb);
    }
    /**
     * 查询Tiga引擎大类规则及其防护模式
     */
    async DescribeProtectionModes(req, cb) {
        return this.request("DescribeProtectionModes", req, cb);
    }
    /**
     * 取得信息防泄漏规则列表
     */
    async DescribeAntiInfoLeakageRules(req, cb) {
        return this.request("DescribeAntiInfoLeakageRules", req, cb);
    }
    /**
     * 本接口用于搜索WAF访问日志
     */
    async SearchAccessLog(req, cb) {
        return this.request("SearchAccessLog", req, cb);
    }
    /**
     * 描述WAF威胁情报封禁模块配置详情
     */
    async DescribeWafThreatenIntelligence(req, cb) {
        return this.request("DescribeWafThreatenIntelligence", req, cb);
    }
    /**
     * Waf  IP封堵状态查询
     */
    async DescribeIpHitItems(req, cb) {
        return this.request("DescribeIpHitItems", req, cb);
    }
    /**
     * 删除CC攻击的session设置
     */
    async DeleteSession(req, cb) {
        return this.request("DeleteSession", req, cb);
    }
    /**
     * 查询多种条件的聚类分析
     */
    async DescribeHistogram(req, cb) {
        return this.request("DescribeHistogram", req, cb);
    }
    /**
     * 获取域名的webshell状态
     */
    async DescribeWebshellStatus(req, cb) {
        return this.request("DescribeWebshellStatus", req, cb);
    }
    /**
     * 计费资源购买、续费下单接口
     */
    async GenerateDealsAndPayNew(req, cb) {
        return this.request("GenerateDealsAndPayNew", req, cb);
    }
    /**
     * 信息防泄漏删除规则
     */
    async DeleteAntiInfoLeakRule(req, cb) {
        return this.request("DeleteAntiInfoLeakRule", req, cb);
    }
    /**
     * 添加（编辑）地域封禁中的地域信息
     */
    async CreateAreaBanRule(req, cb) {
        return this.request("CreateAreaBanRule", req, cb);
    }
    /**
     * 修改地域封禁中的地域信息
     */
    async ModifyAreaBanAreas(req, cb) {
        return this.request("ModifyAreaBanAreas", req, cb);
    }
    /**
     * 计费资源购买、续费下单接口
     */
    async CreateDeals(req, cb) {
        return this.request("CreateDeals", req, cb);
    }
    /**
     * 获取WAF地域封禁支持的地域列表
     */
    async DescribeAreaBanSupportAreas(req, cb) {
        return this.request("DescribeAreaBanSupportAreas", req, cb);
    }
    /**
     * 编辑SAAS型接入的紧急CC防护状态
     */
    async UpsertCCAutoStatus(req, cb) {
        return this.request("UpsertCCAutoStatus", req, cb);
    }
    /**
     * 获取各个模块具体的规格限制
     */
    async DescribeRuleLimit(req, cb) {
        return this.request("DescribeRuleLimit", req, cb);
    }
    /**
     * 添加信息防泄漏规则
     */
    async AddAntiInfoLeakRules(req, cb) {
        return this.request("AddAntiInfoLeakRules", req, cb);
    }
    /**
     * clb-waf 设置防护域名WAF开关
支持批量操作。
     */
    async ModifyHostStatus(req, cb) {
        return this.request("ModifyHostStatus", req, cb);
    }
    /**
     * 查询各个waf基础安全模块的开关状态，看每个模块是否开启
     */
    async DescribeModuleStatus(req, cb) {
        return this.request("DescribeModuleStatus", req, cb);
    }
    /**
     * Waf IP黑白名单Upsert接口（建议使用CreateIpAccessControl、ModifyIpAccessControl来替换当前接口）
     */
    async UpsertIpAccessControl(req, cb) {
        return this.request("UpsertIpAccessControl", req, cb);
    }
    /**
     * 生成攻击日志的产生时间柱状图
     */
    async GetAttackHistogram(req, cb) {
        return this.request("GetAttackHistogram", req, cb);
    }
    /**
     * 修改域名列表的访问日志开关
     */
    async ModifyDomainsCLSStatus(req, cb) {
        return this.request("ModifyDomainsCLSStatus", req, cb);
    }
    /**
     * 获取用户特征规则列表
     */
    async DescribeUserSignatureRuleV2(req, cb) {
        return this.request("DescribeUserSignatureRuleV2", req, cb);
    }
    /**
     * 根据过滤条件查询VIP信息
     */
    async DescribeVipInfo(req, cb) {
        return this.request("DescribeVipInfo", req, cb);
    }
    /**
     * 删除负载均衡型域名，支持批量操作。
     */
    async DeleteHost(req, cb) {
        return this.request("DeleteHost", req, cb);
    }
    /**
     * 本接口用于访问日志的快速分析
     */
    async DescribeAccessFastAnalysis(req, cb) {
        return this.request("DescribeAccessFastAnalysis", req, cb);
    }
    /**
     * 查询业务和攻击概要趋势
     */
    async DescribePeakPoints(req, cb) {
        return this.request("DescribePeakPoints", req, cb);
    }
    /**
     * 编辑精准白名单
     */
    async ModifyCustomWhiteRule(req, cb) {
        return this.request("ModifyCustomWhiteRule", req, cb);
    }
    /**
     * 获取证书的检查结果
     */
    async DescribeCertificateVerifyResult(req, cb) {
        return this.request("DescribeCertificateVerifyResult", req, cb);
    }
    /**
     * Waf IP黑白名单最新版本删除接口
     */
    async DeleteIpAccessControlV2(req, cb) {
        return this.request("DeleteIpAccessControlV2", req, cb);
    }
    /**
     * 切换弹性的开关
     */
    async SwitchElasticMode(req, cb) {
        return this.request("SwitchElasticMode", req, cb);
    }
    /**
     * 修改实例的自动续费开关
     */
    async ModifyInstanceRenewFlag(req, cb) {
        return this.request("ModifyInstanceRenewFlag", req, cb);
    }
    /**
     * 获取用户防护规则等级
     */
    async DescribeUserLevel(req, cb) {
        return this.request("DescribeUserLevel", req, cb);
    }
    /**
     * Waf  CC V2 Query接口
     */
    async DescribeCCRule(req, cb) {
        return this.request("DescribeCCRule", req, cb);
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
     * 设置waf防护状态
     */
    async ModifySpartaProtectionMode(req, cb) {
        return this.request("ModifySpartaProtectionMode", req, cb);
    }
    /**
     * 删除攻击日志下载任务记录
     */
    async DeleteAttackDownloadRecord(req, cb) {
        return this.request("DeleteAttackDownloadRecord", req, cb);
    }
    /**
     * 获取防护配置中的访问控制策略列表
     */
    async DescribeCustomRuleList(req, cb) {
        return this.request("DescribeCustomRuleList", req, cb);
    }
    /**
     * 攻击总览
     */
    async DescribeAttackOverview(req, cb) {
        return this.request("DescribeAttackOverview", req, cb);
    }
    /**
     * 获取用户规则白名单列表
     */
    async DescribeAttackWhiteRule(req, cb) {
        return this.request("DescribeAttackWhiteRule", req, cb);
    }
    /**
     * clb-waf中获取防护域名列表
     */
    async DescribeHosts(req, cb) {
        return this.request("DescribeHosts", req, cb);
    }
    /**
     * 添加SaaS型WAF防护域名
     */
    async AddSpartaProtection(req, cb) {
        return this.request("AddSpartaProtection", req, cb);
    }
    /**
     * 获取防护状态以及生效的实例id
     */
    async DescribePolicyStatus(req, cb) {
        return this.request("DescribePolicyStatus", req, cb);
    }
    /**
     * Waf 会话定义查询接口
     */
    async DescribeSession(req, cb) {
        return this.request("DescribeSession", req, cb);
    }
    /**
     * 查询Top5的攻击域名
     */
    async DescribeTopAttackDomain(req, cb) {
        return this.request("DescribeTopAttackDomain", req, cb);
    }
    /**
     * 编辑负载均衡型WAF防护域名配置
     */
    async ModifyHost(req, cb) {
        return this.request("ModifyHost", req, cb);
    }
    /**
     * 查询Tiga引擎规则类型及状态
     */
    async DescribeUserSignatureClass(req, cb) {
        return this.request("DescribeUserSignatureClass", req, cb);
    }
    /**
     * Bot_V2 bot总开关更新
     */
    async ModifyBotStatus(req, cb) {
        return this.request("ModifyBotStatus", req, cb);
    }
    /**
     * 开启、关闭WAF开关
     */
    async ModifyProtectionStatus(req, cb) {
        return this.request("ModifyProtectionStatus", req, cb);
    }
    /**
     * Saas型WAF接入查询加密套件信息
     */
    async DescribeCiphersDetail(req, cb) {
        return this.request("DescribeCiphersDetail", req, cb);
    }
    /**
     * 修改防护域名的地域封禁状态
     */
    async ModifyAreaBanStatus(req, cb) {
        return this.request("ModifyAreaBanStatus", req, cb);
    }
    /**
     * Waf IP黑白名单编辑接口
     */
    async ModifyIpAccessControl(req, cb) {
        return this.request("ModifyIpAccessControl", req, cb);
    }
    /**
     * 获取防篡改url
     */
    async DescribeAntiFakeRules(req, cb) {
        return this.request("DescribeAntiFakeRules", req, cb);
    }
    /**
     * 获取发现域名列表接口
     */
    async DescribeFindDomainList(req, cb) {
        return this.request("DescribeFindDomainList", req, cb);
    }
    /**
     * 切换防篡改开关
     */
    async ModifyAntiFakeUrlStatus(req, cb) {
        return this.request("ModifyAntiFakeUrlStatus", req, cb);
    }
    /**
     * 本接口用于访问日志柱状趋势图
     */
    async DescribeAccessHistogram(req, cb) {
        return this.request("DescribeAccessHistogram", req, cb);
    }
    /**
     * 查询SaaS型WAF支持的TLS版本
     */
    async DescribeTlsVersion(req, cb) {
        return this.request("DescribeTlsVersion", req, cb);
    }
    /**
     * 编辑信息防泄漏规则
     */
    async ModifyAntiInfoLeakRules(req, cb) {
        return this.request("ModifyAntiInfoLeakRules", req, cb);
    }
    /**
     * Waf IP黑白名单新增接口
     */
    async CreateIpAccessControl(req, cb) {
        return this.request("CreateIpAccessControl", req, cb);
    }
    /**
     * 添加防篡改url
     */
    async AddAntiFakeUrl(req, cb) {
        return this.request("AddAntiFakeUrl", req, cb);
    }
    /**
     * 获取waf流量访问趋势
     */
    async DescribeFlowTrend(req, cb) {
        return this.request("DescribeFlowTrend", req, cb);
    }
    /**
     * 查看防护对象列表
     */
    async DescribeObjects(req, cb) {
        return this.request("DescribeObjects", req, cb);
    }
    /**
     * 更改某一条规则
     */
    async ModifyDomainWhiteRule(req, cb) {
        return this.request("ModifyDomainWhiteRule", req, cb);
    }
    /**
     * 开启或禁用访问控制（自定义策略）
     */
    async ModifyCustomRuleStatus(req, cb) {
        return this.request("ModifyCustomRuleStatus", req, cb);
    }
    /**
     * 供用户控制台调用，删除Tiga规则引擎白名单。
     */
    async DeleteAttackWhiteRule(req, cb) {
        return this.request("DeleteAttackWhiteRule", req, cb);
    }
    /**
     * Waf ip黑白名单查询
     */
    async DescribeIpAccessControl(req, cb) {
        return this.request("DescribeIpAccessControl", req, cb);
    }
    /**
     * 供用户控制台调用，增加Tiga规则引擎白名单。
     */
    async AddAttackWhiteRule(req, cb) {
        return this.request("AddAttackWhiteRule", req, cb);
    }
    /**
     * 添加地域封禁中的地域信息
     */
    async AddAreaBanAreas(req, cb) {
        return this.request("AddAreaBanAreas", req, cb);
    }
    /**
     * 获取域名概况
     */
    async DescribeDomainCountInfo(req, cb) {
        return this.request("DescribeDomainCountInfo", req, cb);
    }
    /**
     * SaaS型WAF删除防护域名
     */
    async DeleteSpartaProtection(req, cb) {
        return this.request("DeleteSpartaProtection", req, cb);
    }
    /**
     * 切换域名的规则开关
     */
    async SwitchDomainRules(req, cb) {
        return this.request("SwitchDomainRules", req, cb);
    }
    /**
     * Waf 批量防护IP黑白名单查询
     */
    async DescribeBatchIpAccessControl(req, cb) {
        return this.request("DescribeBatchIpAccessControl", req, cb);
    }
    /**
     * 返回ip惩罚规则详细信息
     */
    async DescribeWafAutoDenyRules(req, cb) {
        return this.request("DescribeWafAutoDenyRules", req, cb);
    }
    /**
     * 增加访问控制（自定义策略）
     */
    async AddCustomRule(req, cb) {
        return this.request("AddCustomRule", req, cb);
    }
    /**
     * 获取域名的规则白名单
     */
    async DescribeDomainWhiteRules(req, cb) {
        return this.request("DescribeDomainWhiteRules", req, cb);
    }
    /**
     * 设置域名的webshell状态。
     */
    async ModifyWebshellStatus(req, cb) {
        return this.request("ModifyWebshellStatus", req, cb);
    }
    /**
     * 信息防泄漏切换规则开关
     */
    async ModifyAntiInfoLeakRuleStatus(req, cb) {
        return this.request("ModifyAntiInfoLeakRuleStatus", req, cb);
    }
    /**
     * 刷新接入检查的结果，后台会生成接入检查任务
     */
    async RefreshAccessCheckResult(req, cb) {
        return this.request("RefreshAccessCheckResult", req, cb);
    }
    /**
     * 创建搜索下载攻击日志任务，使用CLS新版本的搜索下载getlog接口
     */
    async PostAttackDownloadTask(req, cb) {
        return this.request("PostAttackDownloadTask", req, cb);
    }
    /**
     * 获取防护配置中的精准白名单策略列表
     */
    async DescribeCustomWhiteRule(req, cb) {
        return this.request("DescribeCustomWhiteRule", req, cb);
    }
    /**
     * clb-waf获取防护域名详情
     */
    async DescribeHost(req, cb) {
        return this.request("DescribeHost", req, cb);
    }
    /**
     * 修改用户防护规则，开启关闭具体的某条规则
     */
    async ModifyUserSignatureRuleV2(req, cb) {
        return this.request("ModifyUserSignatureRuleV2", req, cb);
    }
    /**
     * 本接口用于获取访问日志导出列表
     */
    async DescribeAccessExports(req, cb) {
        return this.request("DescribeAccessExports", req, cb);
    }
    /**
     * 添加域名的首先验证是否购买了套餐，是否没有达到购买套餐的限制，域名是否已经添加
     */
    async DescribeHostLimit(req, cb) {
        return this.request("DescribeHostLimit", req, cb);
    }
    /**
     * 获取套餐实例的弹性qps上限
     */
    async GetInstanceQpsLimit(req, cb) {
        return this.request("GetInstanceQpsLimit", req, cb);
    }
    /**
     * 获取地域封禁规则配置
     */
    async DescribeAreaBanRule(req, cb) {
        return this.request("DescribeAreaBanRule", req, cb);
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
     * 获取添加域名操作的结果
     */
    async DescribeDomainVerifyResult(req, cb) {
        return this.request("DescribeDomainVerifyResult", req, cb);
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
     * 查询用户所有实例的详细信息
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 供用户控制台调用，修改Tiga规则引擎白名单。
     */
    async ModifyAttackWhiteRule(req, cb) {
        return this.request("ModifyAttackWhiteRule", req, cb);
    }
    /**
     * 查询单个saaswaf域名详情
     */
    async DescribeDomainDetailsSaas(req, cb) {
        return this.request("DescribeDomainDetailsSaas", req, cb);
    }
    /**
     * 修改用户防护规则，开启关闭具体的某条规则
     */
    async ModifyUserSignatureRule(req, cb) {
        return this.request("ModifyUserSignatureRule", req, cb);
    }
    /**
     * 提供给clb等使用的waf实例下单接口，目前只支持clb旗舰版实例的下单，该接口会进行入参校验，然后调用是否为收购用户，然后调用计费接口下单。目前只支持预付费下单，计费侧接口：https://tcb.woa.com/magical-brush/docs/754661947
     */
    async ModifyGenerateDeals(req, cb) {
        return this.request("ModifyGenerateDeals", req, cb);
    }
    /**
     * 修改实例的名称
     */
    async ModifyInstanceName(req, cb) {
        return this.request("ModifyInstanceName", req, cb);
    }
    /**
     * 设置某个domain下基础安全模块的开关
     */
    async ModifyModuleStatus(req, cb) {
        return this.request("ModifyModuleStatus", req, cb);
    }
    /**
     * 在CDC场景下，负载均衡型WAF的添加、编辑域名配置的时候，需要展示CDC负载均衡型WAF（cdc-clb-waf)支持的地域列表，通过DescribeUserCdcClbWafRegions既可以获得当前对客户已经开放的地域列表
     */
    async DescribeUserCdcClbWafRegions(req, cb) {
        return this.request("DescribeUserCdcClbWafRegions", req, cb);
    }
    /**
     * 添加（编辑）地域封禁中的地域信息
     */
    async ModifyAreaBanRule(req, cb) {
        return this.request("ModifyAreaBanRule", req, cb);
    }
    /**
     * 废弃接口

描述WAF自动封禁模块详情
     */
    async DescribeWafAutoDenyStatus(req, cb) {
        return this.request("DescribeWafAutoDenyStatus", req, cb);
    }
    /**
     * 开启或禁用精准白名单
     */
    async ModifyCustomWhiteRuleStatus(req, cb) {
        return this.request("ModifyCustomWhiteRuleStatus", req, cb);
    }
    /**
     * 获取Saas型WAF防护端口列表
     */
    async DescribePorts(req, cb) {
        return this.request("DescribePorts", req, cb);
    }
    /**
     * clb-waf设置防护域名防护状态
     */
    async ModifyHostMode(req, cb) {
        return this.request("ModifyHostMode", req, cb);
    }
    /**
     * 修改域名投递状态
     */
    async ModifyDomainPostAction(req, cb) {
        return this.request("ModifyDomainPostAction", req, cb);
    }
    /**
     * 在负载均衡型WAF的添加、编辑域名配置的时候，需要展示负载均衡型WAF（clb-waf)支持的地域列表，通过DescribeUserClbWafRegions既可以获得当前对客户已经开放的地域列表
     */
    async DescribeUserClbWafRegions(req, cb) {
        return this.request("DescribeUserClbWafRegions", req, cb);
    }
    /**
     * Waf  CC V2 Upsert接口
     */
    async UpsertCCRule(req, cb) {
        return this.request("UpsertCCRule", req, cb);
    }
    /**
     * 修改防护对象
     */
    async ModifyObject(req, cb) {
        return this.request("ModifyObject", req, cb);
    }
    /**
     * 删除防篡改url
     */
    async DeleteAntiFakeUrl(req, cb) {
        return this.request("DeleteAntiFakeUrl", req, cb);
    }
    /**
     * 根据多条件查询CC规则
     */
    async DescribeCCRuleList(req, cb) {
        return this.request("DescribeCCRuleList", req, cb);
    }
    /**
     * Waf  CC V2 Delete接口
     */
    async DeleteCCRule(req, cb) {
        return this.request("DeleteCCRule", req, cb);
    }
    /**
     * clb-waf中添加防护域名
     */
    async CreateHost(req, cb) {
        return this.request("CreateHost", req, cb);
    }
    /**
     * Waf  会话定义 Upsert接口
     */
    async UpsertSession(req, cb) {
        return this.request("UpsertSession", req, cb);
    }
    /**
     * 获取SAAS型接入的紧急CC防护状态
     */
    async DescribeCCAutoStatus(req, cb) {
        return this.request("DescribeCCAutoStatus", req, cb);
    }
    /**
     * 获取用户特征规则列表
     */
    async DescribeUserSignatureRule(req, cb) {
        return this.request("DescribeUserSignatureRule", req, cb);
    }
    /**
     * 批量操作tiga子规则
     */
    async BatchOperateUserSignatureRules(req, cb) {
        return this.request("BatchOperateUserSignatureRules", req, cb);
    }
    /**
     * 刷新防篡改url
     */
    async FreshAntiFakeUrl(req, cb) {
        return this.request("FreshAntiFakeUrl", req, cb);
    }
    /**
     * 拉取域名的防护规则列表
     */
    async DescribeDomainRules(req, cb) {
        return this.request("DescribeDomainRules", req, cb);
    }
    /**
     * api安全状态变更接口
     */
    async ModifyApiSecEventChange(req, cb) {
        return this.request("ModifyApiSecEventChange", req, cb);
    }
    /**
     * 增加域名规则白名单
     */
    async AddDomainWhiteRule(req, cb) {
        return this.request("AddDomainWhiteRule", req, cb);
    }
    /**
     * 切换ipv6开关
     */
    async ModifyDomainIpv6Status(req, cb) {
        return this.request("ModifyDomainIpv6Status", req, cb);
    }
    /**
     * 修改用户防护规则等级
     */
    async ModifyUserLevel(req, cb) {
        return this.request("ModifyUserLevel", req, cb);
    }
}
exports.Client = Client;
