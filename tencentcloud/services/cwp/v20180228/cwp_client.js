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
 * cwp client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cwp.tencentcloudapi.com", "2018-02-28", clientConfig);
    }
    /**
     * 删除标签
     */
    async DeleteTags(req, cb) {
        return this.request("DeleteTags", req, cb);
    }
    /**
     * 本接口(TrustMalwares)将被识别木马文件设为信任。
     */
    async TrustMalwares(req, cb) {
        return this.request("TrustMalwares", req, cb);
    }
    /**
     * 本接口 (DescribeComponentStatistics) 用于获取组件统计列表数据。
     */
    async DescribeComponentStatistics(req, cb) {
        return this.request("DescribeComponentStatistics", req, cb);
    }
    /**
     * 删除服务器关联的标签
     */
    async DeleteMachineTag(req, cb) {
        return this.request("DeleteMachineTag", req, cb);
    }
    /**
     * 按分页形式展示网络攻击日志列表
     */
    async DescribeAttackLogs(req, cb) {
        return this.request("DescribeAttackLogs", req, cb);
    }
    /**
     * 导出ES查询文档列表
     */
    async DescribeSearchExportList(req, cb) {
        return this.request("DescribeSearchExportList", req, cb);
    }
    /**
     * 删除检索模板
     */
    async DeleteSearchTemplate(req, cb) {
        return this.request("DeleteSearchTemplate", req, cb);
    }
    /**
     * DescribeScanTaskDetails 查询扫描任务详情 , 可以查询扫描进度信息/异常;
     */
    async DescribeScanTaskDetails(req, cb) {
        return this.request("DescribeScanTaskDetails", req, cb);
    }
    /**
     * 根据策略信息创建基线策略
     */
    async CreateBaselineStrategy(req, cb) {
        return this.request("CreateBaselineStrategy", req, cb);
    }
    /**
     * 查询批量导入机器信息
     */
    async DescribeImportMachineInfo(req, cb) {
        return this.request("DescribeImportMachineInfo", req, cb);
    }
    /**
     * 获取高危命令规则列表
     */
    async DescribeBashRules(req, cb) {
        return this.request("DescribeBashRules", req, cb);
    }
    /**
     * 获取历史搜索记录
     */
    async DescribeSearchLogs(req, cb) {
        return this.request("DescribeSearchLogs", req, cb);
    }
    /**
     * 根据Ids删除本地提权
     */
    async DeletePrivilegeEvents(req, cb) {
        return this.request("DeletePrivilegeEvents", req, cb);
    }
    /**
     * 本接口 (RenewProVersion) 用于续费专业版(包年包月)。
     */
    async RenewProVersion(req, cb) {
        return this.request("RenewProVersion", req, cb);
    }
    /**
     * 导出网络攻击日志
     */
    async ExportAttackLogs(req, cb) {
        return this.request("ExportAttackLogs", req, cb);
    }
    /**
     * 此接口（DescribeUsualLoginPlaces）用于查询常用登录地。
     */
    async DescribeUsualLoginPlaces(req, cb) {
        return this.request("DescribeUsualLoginPlaces", req, cb);
    }
    /**
     * 根据Ids删除高危命令事件
     */
    async DeleteBashEvents(req, cb) {
        return this.request("DeleteBashEvents", req, cb);
    }
    /**
     * 本接口 (DeleteMaliciousRequests) 用于删除恶意请求记录。
     */
    async DeleteMaliciousRequests(req, cb) {
        return this.request("DeleteMaliciousRequests", req, cb);
    }
    /**
     * 获取索引列表
     */
    async DescribeIndexList(req, cb) {
        return this.request("DescribeIndexList", req, cb);
    }
    /**
     * 获取反弹Shell规则列表
     */
    async DescribeReverseShellRules(req, cb) {
        return this.request("DescribeReverseShellRules", req, cb);
    }
    /**
     * 用于异步导出数据量大的日志文件
     */
    async ExportTasks(req, cb) {
        return this.request("ExportTasks", req, cb);
    }
    /**
     * 本接口（RecoverMalwares）用于批量恢复已经被隔离的木马文件。
     */
    async RecoverMalwares(req, cb) {
        return this.request("RecoverMalwares", req, cb);
    }
    /**
     * 删除反弹Shell规则
     */
    async DeleteReverseShellRules(req, cb) {
        return this.request("DeleteReverseShellRules", req, cb);
    }
    /**
     * 查询日志检索服务信息
     */
    async DescribeHistoryService(req, cb) {
        return this.request("DescribeHistoryService", req, cb);
    }
    /**
     * 本接口 (DeleteBruteAttacks) 用于删除暴力破解记录。
     */
    async DeleteBruteAttacks(req, cb) {
        return this.request("DeleteBruteAttacks", req, cb);
    }
    /**
     * 导出高危命令事件
     */
    async ExportBashEvents(req, cb) {
        return this.request("ExportBashEvents", req, cb);
    }
    /**
     * 导出资产管理内核模块列表
     */
    async ExportAssetCoreModuleList(req, cb) {
        return this.request("ExportAssetCoreModuleList", req, cb);
    }
    /**
     * 同步资产扫描信息
     */
    async SyncAssetScan(req, cb) {
        return this.request("SyncAssetScan", req, cb);
    }
    /**
     * 获取ES字段聚合结果
     */
    async DescribeESAggregations(req, cb) {
        return this.request("DescribeESAggregations", req, cb);
    }
    /**
     * 添加历史搜索记录
     */
    async CreateSearchLog(req, cb) {
        return this.request("CreateSearchLog", req, cb);
    }
    /**
     * 本接口 (IgnoreImpactedHosts) 用于忽略漏洞。
     */
    async IgnoreImpactedHosts(req, cb) {
        return this.request("IgnoreImpactedHosts", req, cb);
    }
    /**
     * 获取本地提权规则列表
     */
    async DescribePrivilegeRules(req, cb) {
        return this.request("DescribePrivilegeRules", req, cb);
    }
    /**
     * 本接口 (DeleteNonlocalLoginPlaces) 用于删除异地登录记录。
     */
    async DeleteNonlocalLoginPlaces(req, cb) {
        return this.request("DeleteNonlocalLoginPlaces", req, cb);
    }
    /**
     * 本接口 (ExportMaliciousRequests) 用于导出下载恶意请求文件。
     */
    async ExportMaliciousRequests(req, cb) {
        return this.request("ExportMaliciousRequests", req, cb);
    }
    /**
     * 获取指定标签关联的服务器信息
     */
    async DescribeTagMachines(req, cb) {
        return this.request("DescribeTagMachines", req, cb);
    }
    /**
     *  一键检测
     */
    async ScanVul(req, cb) {
        return this.request("ScanVul", req, cb);
    }
    /**
     * 导出本地提权事件
     */
    async ExportPrivilegeEvents(req, cb) {
        return this.request("ExportPrivilegeEvents", req, cb);
    }
    /**
     * 本接口用于（DescribeOverviewStatistics）获取概览统计数据。
     */
    async DescribeOverviewStatistics(req, cb) {
        return this.request("DescribeOverviewStatistics", req, cb);
    }
    /**
     * 添加检索模板
     */
    async CreateSearchTemplate(req, cb) {
        return this.request("CreateSearchTemplate", req, cb);
    }
    /**
     * 资产指纹启动扫描
     */
    async ScanAsset(req, cb) {
        return this.request("ScanAsset", req, cb);
    }
    /**
     * 本接口 (DescribeSecurityDynamics) 用于获取安全事件消息数据。
     */
    async DescribeSecurityDynamics(req, cb) {
        return this.request("DescribeSecurityDynamics", req, cb);
    }
    /**
     * 根据Ids删除反弹Shell事件
     */
    async DeleteReverseShellEvents(req, cb) {
        return this.request("DeleteReverseShellEvents", req, cb);
    }
    /**
     * 删除本地提权规则
     */
    async DeletePrivilegeRules(req, cb) {
        return this.request("DeletePrivilegeRules", req, cb);
    }
    /**
     * 本接口 (DeleteMalwares) 用于删除木马记录。
     */
    async DeleteMalwares(req, cb) {
        return this.request("DeleteMalwares", req, cb);
    }
    /**
     * 本接口 (DescribeMachineList) 用于网页防篡改获取区域主机列表。
     */
    async DescribeMachineList(req, cb) {
        return this.request("DescribeMachineList", req, cb);
    }
    /**
     * 查询木马扫描进度
     */
    async DescribeScanMalwareSchedule(req, cb) {
        return this.request("DescribeScanMalwareSchedule", req, cb);
    }
    /**
     * 本接口用于删除异地登录白名单规则。
     */
    async DeleteLoginWhiteList(req, cb) {
        return this.request("DeleteLoginWhiteList", req, cb);
    }
    /**
     * 本接口 (CloseProVersion) 用于关闭专业版。
     */
    async CloseProVersion(req, cb) {
        return this.request("CloseProVersion", req, cb);
    }
    /**
     * 定期扫描漏洞设置
     */
    async ScanVulSetting(req, cb) {
        return this.request("ScanVulSetting", req, cb);
    }
    /**
     * 本接口 (DescribeAccountStatistics) 用于获取帐号统计列表数据。
     */
    async DescribeAccountStatistics(req, cb) {
        return this.request("DescribeAccountStatistics", req, cb);
    }
    /**
     * 本接口 (DescribeExportMachines) 用于导出区域主机列表。
     */
    async DescribeExportMachines(req, cb) {
        return this.request("DescribeExportMachines", req, cb);
    }
    /**
     * 获取机器地域列表
     */
    async DescribeMachineRegions(req, cb) {
        return this.request("DescribeMachineRegions", req, cb);
    }
    /**
     * 本接口 (DescribeOpenPortStatistics) 用于获取端口统计列表。
     */
    async DescribeOpenPortStatistics(req, cb) {
        return this.request("DescribeOpenPortStatistics", req, cb);
    }
    /**
     * 本接口 (ExportBruteAttacks) 用于导出密码破解记录成CSV文件。
     */
    async ExportBruteAttacks(req, cb) {
        return this.request("ExportBruteAttacks", req, cb);
    }
    /**
     * 切换高危命令规则状态
     */
    async SwitchBashRules(req, cb) {
        return this.request("SwitchBashRules", req, cb);
    }
    /**
     * 本接口 (ExportMalwares) 用于导出木马记录CSV文件。
     */
    async ExportMalwares(req, cb) {
        return this.request("ExportMalwares", req, cb);
    }
    /**
     * 获取密码破解列表
     */
    async DescribeBruteAttackList(req, cb) {
        return this.request("DescribeBruteAttackList", req, cb);
    }
    /**
     * 网站防篡改-修改网站防护设置
     */
    async ModifyWebPageProtectSetting(req, cb) {
        return this.request("ModifyWebPageProtectSetting", req, cb);
    }
    /**
     * 本接口 (OpenProVersionPrepaid) 用于开通专业版(包年包月)。
     */
    async OpenProVersionPrepaid(req, cb) {
        return this.request("OpenProVersionPrepaid", req, cb);
    }
    /**
     * 获取快速检索列表
     */
    async DescribeSearchTemplates(req, cb) {
        return this.request("DescribeSearchTemplates", req, cb);
    }
    /**
     * 新增或编辑标签
     */
    async EditTags(req, cb) {
        return this.request("EditTags", req, cb);
    }
    /**
     * 本接口（SeparateMalwares）用于隔离木马。
     */
    async SeparateMalwares(req, cb) {
        return this.request("SeparateMalwares", req, cb);
    }
    /**
     * 本接口 (DescribeProcessStatistics) 用于获取进程统计列表数据。
     */
    async DescribeProcessStatistics(req, cb) {
        return this.request("DescribeProcessStatistics", req, cb);
    }
    /**
     * 查看恶意文件详情
     */
    async DescribeMalwareInfo(req, cb) {
        return this.request("DescribeMalwareInfo", req, cb);
    }
    /**
     * 删除高危命令规则
     */
    async DeleteBashRules(req, cb) {
        return this.request("DeleteBashRules", req, cb);
    }
    /**
     * 漏洞管理-重新检测接口
     */
    async ScanVulAgain(req, cb) {
        return this.request("ScanVulAgain", req, cb);
    }
    /**
     * 获取反弹Shell列表
     */
    async DescribeReverseShellEvents(req, cb) {
        return this.request("DescribeReverseShellEvents", req, cb);
    }
    /**
     * 本接口 (ModifyAutoOpenProVersionConfig) 用于设置新增主机自动开通专业版配置。
     */
    async ModifyAutoOpenProVersionConfig(req, cb) {
        return this.request("ModifyAutoOpenProVersionConfig", req, cb);
    }
    /**
     * 查询定时扫描配置
     */
    async DescribeMalwareTimingScanSetting(req, cb) {
        return this.request("DescribeMalwareTimingScanSetting", req, cb);
    }
    /**
     * 获取主机最近趋势情况
     */
    async DescribeAssetRecentMachineInfo(req, cb) {
        return this.request("DescribeAssetRecentMachineInfo", req, cb);
    }
    /**
     * 该接口已废弃

本接口 (DescribeAccounts) 用于获取帐号列表数据。
     */
    async DescribeAccounts(req, cb) {
        return this.request("DescribeAccounts", req, cb);
    }
    /**
     * 本接口 (DescribeProVersionInfo) 用于获取专业版信息。
     */
    async DescribeProVersionInfo(req, cb) {
        return this.request("DescribeProVersionInfo", req, cb);
    }
    /**
     * 获取ES查询文档列表
     */
    async DescribeESHits(req, cb) {
        return this.request("DescribeESHits", req, cb);
    }
    /**
     * 查询网站防篡改概览信息
     */
    async DescribeWebPageGeneralize(req, cb) {
        return this.request("DescribeWebPageGeneralize", req, cb);
    }
    /**
     * 获取安全概览相关事件统计数据接口
     */
    async DescribeSecurityEventsCnt(req, cb) {
        return this.request("DescribeSecurityEventsCnt", req, cb);
    }
    /**
     * 获取本地提权事件列表
     */
    async DescribePrivilegeEvents(req, cb) {
        return this.request("DescribePrivilegeEvents", req, cb);
    }
    /**
     * 本接口（DescribeMachineInfo）用于获取机器详细信息。
     */
    async DescribeMachineInfo(req, cb) {
        return this.request("DescribeMachineInfo", req, cb);
    }
    /**
     * 获取日志检索容量使用统计
     */
    async DescribeLogStorageStatistic(req, cb) {
        return this.request("DescribeLogStorageStatistic", req, cb);
    }
    /**
     * 获取网络攻击威胁类型列表
     */
    async DescribeAttackVulTypeList(req, cb) {
        return this.request("DescribeAttackVulTypeList", req, cb);
    }
    /**
     * 获取异地登录白名单列表
     */
    async DescribeLoginWhiteList(req, cb) {
        return this.request("DescribeLoginWhiteList", req, cb);
    }
    /**
     * 根据基线策略id更新策略信息
     */
    async UpdateBaselineStrategy(req, cb) {
        return this.request("UpdateBaselineStrategy", req, cb);
    }
    /**
     * 入侵检测，获取恶意请求列表
     */
    async DescribeRiskDnsList(req, cb) {
        return this.request("DescribeRiskDnsList", req, cb);
    }
    /**
     * 本接口 (DescribeHistoryAccounts) 用于获取帐号变更历史列表数据。
     */
    async DescribeHistoryAccounts(req, cb) {
        return this.request("DescribeHistoryAccounts", req, cb);
    }
    /**
     * 添加房展防护服务器
     */
    async CreateProtectServer(req, cb) {
        return this.request("CreateProtectServer", req, cb);
    }
    /**
     * 本接口 (ExportNonlocalLoginPlaces) 用于导出异地登录事件记录CSV文件。
     */
    async ExportNonlocalLoginPlaces(req, cb) {
        return this.request("ExportNonlocalLoginPlaces", req, cb);
    }
    /**
     * 本接口（UntrustMalwares）用于取消信任木马文件。
     */
    async UntrustMalwares(req, cb) {
        return this.request("UntrustMalwares", req, cb);
    }
    /**
     * 本接口 (OpenProVersion) 用于开通专业版。
     */
    async OpenProVersion(req, cb) {
        return this.request("OpenProVersion", req, cb);
    }
    /**
     * 查询可筛选操作系统列表.
     */
    async DescribeMachineOsList(req, cb) {
        return this.request("DescribeMachineOsList", req, cb);
    }
    /**
     * 定时扫描设置
     */
    async ModifyMalwareTimingScanSettings(req, cb) {
        return this.request("ModifyMalwareTimingScanSettings", req, cb);
    }
    /**
     * 该接口可以对入侵检测-文件查杀扫描检测
     */
    async CreateScanMalwareSetting(req, cb) {
        return this.request("CreateScanMalwareSetting", req, cb);
    }
    /**
     * 本接口 (ModifyProVersionRenewFlag) 用于修改专业版包年包月续费标识。
     */
    async ModifyProVersionRenewFlag(req, cb) {
        return this.request("ModifyProVersionRenewFlag", req, cb);
    }
    /**
     * 获取主机安全相关统计
     */
    async DescribeGeneralStat(req, cb) {
        return this.request("DescribeGeneralStat", req, cb);
    }
    /**
     * 设置高危命令事件状态
     */
    async SetBashEventsStatus(req, cb) {
        return this.request("SetBashEventsStatus", req, cb);
    }
    /**
     * 导出反弹Shell事件
     */
    async ExportReverseShellEvents(req, cb) {
        return this.request("ExportReverseShellEvents", req, cb);
    }
    /**
     * 删除网络攻击日志
     */
    async DeleteAttackLogs(req, cb) {
        return this.request("DeleteAttackLogs", req, cb);
    }
    /**
     * 查询定期检测的配置
     */
    async DescribeScanVulSetting(req, cb) {
        return this.request("DescribeScanVulSetting", req, cb);
    }
    /**
     * 本接口（DeleteMachine）用于卸载云镜客户端。
     */
    async DeleteMachine(req, cb) {
        return this.request("DeleteMachine", req, cb);
    }
    /**
     * 该接口已废弃

本接口 (RescanImpactedHost) 用于漏洞重新检测。
     */
    async RescanImpactedHost(req, cb) {
        return this.request("RescanImpactedHost", req, cb);
    }
    /**
     * 获取所有主机标签
     */
    async DescribeTags(req, cb) {
        return this.request("DescribeTags", req, cb);
    }
    /**
     * 本接口 (DescribeSecurityTrends) 用于获取安全事件统计数据。
     */
    async DescribeSecurityTrends(req, cb) {
        return this.request("DescribeSecurityTrends", req, cb);
    }
    /**
     * 网络攻击日志详情
     */
    async DescribeAttackLogInfo(req, cb) {
        return this.request("DescribeAttackLogInfo", req, cb);
    }
    /**
     * 获取资产数量： 主机数、账号数、端口数、进程数、软件数、数据库数、Web应用数、Web框架数、Web服务数、Web站点数
     */
    async DescribeAssetInfo(req, cb) {
        return this.request("DescribeAssetInfo", req, cb);
    }
    /**
     * 网站防篡改-删除事件记录
     */
    async DeleteWebPageEventLog(req, cb) {
        return this.request("DeleteWebPageEventLog", req, cb);
    }
    /**
     * 导出本次漏洞检测Excel
     */
    async ExportVulDetectionExcel(req, cb) {
        return this.request("ExportVulDetectionExcel", req, cb);
    }
    /**
     * 获取高危命令列表
     */
    async DescribeBashEvents(req, cb) {
        return this.request("DescribeBashEvents", req, cb);
    }
    /**
     * 本接口 (DescribeMachines) 用于获取区域主机列表。
     */
    async DescribeMachines(req, cb) {
        return this.request("DescribeMachines", req, cb);
    }
    /**
     * 导出漏洞检测报告。
     */
    async ExportVulDetectionReport(req, cb) {
        return this.request("ExportVulDetectionReport", req, cb);
    }
    /**
     * 新增或修改高危命令规则
     */
    async EditBashRules(req, cb) {
        return this.request("EditBashRules", req, cb);
    }
    /**
     * 本接口 (InquiryPriceOpenProVersionPrepaid) 用于开通专业版询价(预付费)。
     */
    async InquiryPriceOpenProVersionPrepaid(req, cb) {
        return this.request("InquiryPriceOpenProVersionPrepaid", req, cb);
    }
}
exports.Client = Client;
