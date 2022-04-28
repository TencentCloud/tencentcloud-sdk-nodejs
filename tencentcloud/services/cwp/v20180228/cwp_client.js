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
     * 新增或编辑标签
     */
    async EditTags(req, cb) {
        return this.request("EditTags", req, cb);
    }
    /**
     * 本接口(TrustMalwares)将被识别木马文件设为信任。
     */
    async TrustMalwares(req, cb) {
        return this.request("TrustMalwares", req, cb);
    }
    /**
     * 获取资产管理端口列表
     */
    async DescribeAssetPortInfoList(req, cb) {
        return this.request("DescribeAssetPortInfoList", req, cb);
    }
    /**
     * 本接口 (DescribeComponentStatistics) 用于获取组件统计列表数据。
     */
    async DescribeComponentStatistics(req, cb) {
        return this.request("DescribeComponentStatistics", req, cb);
    }
    /**
     * 根据taskid查询检测进度
     */
    async DescribeScanSchedule(req, cb) {
        return this.request("DescribeScanSchedule", req, cb);
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
     * 查询资产管理计划任务列表
     */
    async DescribeAssetPlanTaskList(req, cb) {
        return this.request("DescribeAssetPlanTaskList", req, cb);
    }
    /**
     * 获取爆破阻断模式
     */
    async DescribeBanMode(req, cb) {
        return this.request("DescribeBanMode", req, cb);
    }
    /**
     * 根据检测项id或事件id批量忽略事件或取消忽略
     */
    async ChangeRuleEventsIgnoreStatus(req, cb) {
        return this.request("ChangeRuleEventsIgnoreStatus", req, cb);
    }
    /**
     * 获取资产管理系统安装包列表
     */
    async DescribeAssetSystemPackageList(req, cb) {
        return this.request("DescribeAssetSystemPackageList", req, cb);
    }
    /**
     * 获取资产管理Web应用插件列表
     */
    async DescribeAssetWebAppPluginList(req, cb) {
        return this.request("DescribeAssetWebAppPluginList", req, cb);
    }
    /**
     * 删除检索模板
     */
    async DeleteSearchTemplate(req, cb) {
        return this.request("DeleteSearchTemplate", req, cb);
    }
    /**
     * 校验高危命令用户规则新增和编辑时的参数。
     */
    async CheckBashRuleParams(req, cb) {
        return this.request("CheckBashRuleParams", req, cb);
    }
    /**
     * DescribeScanTaskDetails 查询扫描任务详情 , 可以查询扫描进度信息/异常;
     */
    async DescribeScanTaskDetails(req, cb) {
        return this.request("DescribeScanTaskDetails", req, cb);
    }
    /**
     * 查询服务区关联目录详情
     */
    async DescribeServerRelatedDirInfo(req, cb) {
        return this.request("DescribeServerRelatedDirInfo", req, cb);
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
     * 导出网络攻击日志
     */
    async ExportAttackLogs(req, cb) {
        return this.request("ExportAttackLogs", req, cb);
    }
    /**
     * 接口返回TopN的风险服务器
     */
    async DescribeBaselineHostTop(req, cb) {
        return this.request("DescribeBaselineHostTop", req, cb);
    }
    /**
     * 专家服务-安全管家列表
     */
    async DescribeExpertServiceList(req, cb) {
        return this.request("DescribeExpertServiceList", req, cb);
    }
    /**
     * 查询基线列表信息
     */
    async DescribeBaselineList(req, cb) {
        return this.request("DescribeBaselineList", req, cb);
    }
    /**
     * 根据Ids删除高危命令事件
     */
    async DeleteBashEvents(req, cb) {
        return this.request("DeleteBashEvents", req, cb);
    }
    /**
     * 根据基线id查询基线影响主机列表
     */
    async DescribeBaselineEffectHostList(req, cb) {
        return this.request("DescribeBaselineEffectHostList", req, cb);
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
     * 导出基线列表
     */
    async ExportBaselineList(req, cb) {
        return this.request("ExportBaselineList", req, cb);
    }
    /**
     * 用于获取专业版概览信息。
     */
    async DescribeProVersionInfo(req, cb) {
        return this.request("DescribeProVersionInfo", req, cb);
    }
    /**
     * 专家服务-旗舰护网列表
     */
    async DescribeProtectNetList(req, cb) {
        return this.request("DescribeProtectNetList", req, cb);
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
     * 根据检测项id导出忽略检测项影响主机列表
     */
    async ExportIgnoreRuleEffectHostList(req, cb) {
        return this.request("ExportIgnoreRuleEffectHostList", req, cb);
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
     * 获取资产管理Web应用列表
     */
    async DescribeAssetWebAppList(req, cb) {
        return this.request("DescribeAssetWebAppList", req, cb);
    }
    /**
     * 漏洞管理模块，获取近日指定类型的漏洞数量和主机数量
     */
    async DescribeVulCountByDates(req, cb) {
        return this.request("DescribeVulCountByDates", req, cb);
    }
    /**
     * 查询防护目录关联服务器列表信息
     */
    async DescribeProtectDirRelatedServer(req, cb) {
        return this.request("DescribeProtectDirRelatedServer", req, cb);
    }
    /**
     * 删除防护网站
     */
    async DeleteProtectDir(req, cb) {
        return this.request("DeleteProtectDir", req, cb);
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
     * 根据检测项id与筛选条件查询忽略检测项影响主机列表信息
     */
    async DescribeIgnoreRuleEffectHostList(req, cb) {
        return this.request("DescribeIgnoreRuleEffectHostList", req, cb);
    }
    /**
     * 导出漏洞影响主机列表
     */
    async ExportVulEffectHostList(req, cb) {
        return this.request("ExportVulEffectHostList", req, cb);
    }
    /**
     * 查询应用列表
     */
    async DescribeAssetAppList(req, cb) {
        return this.request("DescribeAssetAppList", req, cb);
    }
    /**
     * 查询网站防篡改概览信息
     */
    async DescribeWebPageGeneralize(req, cb) {
        return this.request("DescribeWebPageGeneralize", req, cb);
    }
    /**
     * 导出本次漏洞检测Excel
     */
    async ExportVulDetectionExcel(req, cb) {
        return this.request("ExportVulDetectionExcel", req, cb);
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
     * 获取应急漏洞列表
     */
    async DescribeEmergencyVulList(req, cb) {
        return this.request("DescribeEmergencyVulList", req, cb);
    }
    /**
     * 不再提醒爆破阻断提示弹窗
     */
    async StopNoticeBanTips(req, cb) {
        return this.request("StopNoticeBanTips", req, cb);
    }
    /**
     * 本接口 (IgnoreImpactedHosts) 用于忽略漏洞。
     */
    async IgnoreImpactedHosts(req, cb) {
        return this.request("IgnoreImpactedHosts", req, cb);
    }
    /**
     * 根据任务id查询基线检测进度
     */
    async DescribeBaselineScanSchedule(req, cb) {
        return this.request("DescribeBaselineScanSchedule", req, cb);
    }
    /**
     * 导出已忽略基线检测项信息
     */
    async ExportIgnoreBaselineRule(req, cb) {
        return this.request("ExportIgnoreBaselineRule", req, cb);
    }
    /**
     * 打开入侵检测-恶意文件检测,弹出风险预警内容
     */
    async DescribeMalwareRiskWarning(req, cb) {
        return this.request("DescribeMalwareRiskWarning", req, cb);
    }
    /**
     * 获取本地提权规则列表
     */
    async DescribePrivilegeRules(req, cb) {
        return this.request("DescribePrivilegeRules", req, cb);
    }
    /**
     * 查询Jar包列表
     */
    async DescribeAssetJarList(req, cb) {
        return this.request("DescribeAssetJarList", req, cb);
    }
    /**
     * 本接口 (DeleteNonlocalLoginPlaces) 用于删除异地登录记录。
     */
    async DeleteNonlocalLoginPlaces(req, cb) {
        return this.request("DeleteNonlocalLoginPlaces", req, cb);
    }
    /**
     * 获取Web服务关联进程列表
     */
    async DescribeAssetWebServiceProcessList(req, cb) {
        return this.request("DescribeAssetWebServiceProcessList", req, cb);
    }
    /**
     * 设置阻断开关状态
     */
    async ModifyBanStatus(req, cb) {
        return this.request("ModifyBanStatus", req, cb);
    }
    /**
     * 本接口 (ExportMaliciousRequests) 用于导出下载恶意请求文件。
     */
    async ExportMaliciousRequests(req, cb) {
        return this.request("ExportMaliciousRequests", req, cb);
    }
    /**
     * 此接口（DescribeUsualLoginPlaces）用于查询常用登录地。
     */
    async DescribeUsualLoginPlaces(req, cb) {
        return this.request("DescribeUsualLoginPlaces", req, cb);
    }
    /**
     * 获取指定标签关联的服务器信息
     */
    async DescribeTagMachines(req, cb) {
        return this.request("DescribeTagMachines", req, cb);
    }
    /**
     * 关联机器标签列表
     */
    async UpdateMachineTags(req, cb) {
        return this.request("UpdateMachineTags", req, cb);
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
     * 导出网页防篡改防护目录列表
     */
    async ExportProtectDirList(req, cb) {
        return this.request("ExportProtectDirList", req, cb);
    }
    /**
     * 获取概览统计数据。
     */
    async DescribeOverviewStatistics(req, cb) {
        return this.request("DescribeOverviewStatistics", req, cb);
    }
    /**
     * 专家服务-可用订单详情
     */
    async DescribeAvailableExpertServiceDetail(req, cb) {
        return this.request("DescribeAvailableExpertServiceDetail", req, cb);
    }
    /**
     * 获取待处理风险文件数+影响服务器数+是否试用检测+最近检测时间
     */
    async DescribeServersAndRiskAndFirstInfo(req, cb) {
        return this.request("DescribeServersAndRiskAndFirstInfo", req, cb);
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
     * 本接口 (DescribeSecurityDynamics) 用于获取安全事件动态消息数据。
     */
    async DescribeSecurityDynamics(req, cb) {
        return this.request("DescribeSecurityDynamics", req, cb);
    }
    /**
     * 获取安全事件统计
     */
    async DescribeSecurityEventStat(req, cb) {
        return this.request("DescribeSecurityEventStat", req, cb);
    }
    /**
     * 根据Ids删除反弹Shell事件
     */
    async DeleteReverseShellEvents(req, cb) {
        return this.request("DeleteReverseShellEvents", req, cb);
    }
    /**
     * 获取主机账号详情
     */
    async DescribeAssetUserInfo(req, cb) {
        return this.request("DescribeAssetUserInfo", req, cb);
    }
    /**
     * 取消漏洞忽略
     */
    async CancelIgnoreVul(req, cb) {
        return this.request("CancelIgnoreVul", req, cb);
    }
    /**
     * 删除本地提权规则
     */
    async DeletePrivilegeRules(req, cb) {
        return this.request("DeletePrivilegeRules", req, cb);
    }
    /**
     * 根据任务id导出指定扫描任务详情
     */
    async ExportScanTaskDetails(req, cb) {
        return this.request("ExportScanTaskDetails", req, cb);
    }
    /**
     * 漏洞数量等级分布统计
     */
    async DescribeVulLevelCount(req, cb) {
        return this.request("DescribeVulLevelCount", req, cb);
    }
    /**
     * 本接口 (DeleteMalwares) 用于删除木马记录。
     */
    async DeleteMalwares(req, cb) {
        return this.request("DeleteMalwares", req, cb);
    }
    /**
     * 用于网页防篡改获取区域主机列表。
     */
    async DescribeMachineList(req, cb) {
        return this.request("DescribeMachineList", req, cb);
    }
    /**
     * 修改网站防护设置
     */
    async ModifyWebPageProtectSetting(req, cb) {
        return this.request("ModifyWebPageProtectSetting", req, cb);
    }
    /**
     * 获取登录审计列表
     */
    async DescribeHostLoginList(req, cb) {
        return this.request("DescribeHostLoginList", req, cb);
    }
    /**
     * 本接口用于删除异地登录白名单规则。
     */
    async DeleteLoginWhiteList(req, cb) {
        return this.request("DeleteLoginWhiteList", req, cb);
    }
    /**
     * 获取当前用户告警列表
     */
    async DescribeWarningList(req, cb) {
        return this.request("DescribeWarningList", req, cb);
    }
    /**
     * 根据基线策略id更新策略信息
     */
    async UpdateBaselineStrategy(req, cb) {
        return this.request("UpdateBaselineStrategy", req, cb);
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
     * 获取资产管理主机资源详细信息
     */
    async DescribeAssetMachineDetail(req, cb) {
        return this.request("DescribeAssetMachineDetail", req, cb);
    }
    /**
     * 导出风险趋势
     */
    async ExportSecurityTrends(req, cb) {
        return this.request("ExportSecurityTrends", req, cb);
    }
    /**
     * 查询资产管理内核模块列表
     */
    async DescribeAssetCoreModuleList(req, cb) {
        return this.request("DescribeAssetCoreModuleList", req, cb);
    }
    /**
     * 本接口 (DescribeOpenPortStatistics) 用于获取端口统计列表。
     */
    async DescribeOpenPortStatistics(req, cb) {
        return this.request("DescribeOpenPortStatistics", req, cb);
    }
    /**
     * 更新或者插入用户告警设置(该接口废弃,请调用 ModifyWarningSetting )
     */
    async DescribeSaveOrUpdateWarnings(req, cb) {
        return this.request("DescribeSaveOrUpdateWarnings", req, cb);
    }
    /**
     * 本接口 (ExportBruteAttacks) 用于导出密码破解记录成CSV文件。
     */
    async ExportBruteAttacks(req, cb) {
        return this.request("ExportBruteAttacks", req, cb);
    }
    /**
     * 修改爆破阻断模式
     */
    async ModifyBanMode(req, cb) {
        return this.request("ModifyBanMode", req, cb);
    }
    /**
     * 创建/修改网站防护目录
     */
    async ModifyWebPageProtectDir(req, cb) {
        return this.request("ModifyWebPageProtectDir", req, cb);
    }
    /**
     * 查询恶意请求白名单列表
     */
    async DescribeMaliciousRequestWhiteList(req, cb) {
        return this.request("DescribeMaliciousRequestWhiteList", req, cb);
    }
    /**
     * 获取账号列表
     */
    async DescribeAssetUserList(req, cb) {
        return this.request("DescribeAssetUserList", req, cb);
    }
    /**
     * 根据基线策略id查询策略详情
     */
    async DescribeBaselineStrategyDetail(req, cb) {
        return this.request("DescribeBaselineStrategyDetail", req, cb);
    }
    /**
     * 获取Web站点详情
     */
    async DescribeAssetWebLocationInfo(req, cb) {
        return this.request("DescribeAssetWebLocationInfo", req, cb);
    }
    /**
     * 网页防篡改防护目录列表
     */
    async DescribeProtectDirList(req, cb) {
        return this.request("DescribeProtectDirList", req, cb);
    }
    /**
     * 本接口 (ExportMalwares) 用于导出木马记录CSV文件。
     */
    async ExportMalwares(req, cb) {
        return this.request("ExportMalwares", req, cb);
    }
    /**
     * 获取Jar包详情
     */
    async DescribeAssetJarInfo(req, cb) {
        return this.request("DescribeAssetJarInfo", req, cb);
    }
    /**
     * 导出篡改事件列表
     */
    async ExportWebPageEventList(req, cb) {
        return this.request("ExportWebPageEventList", req, cb);
    }
    /**
     * 获取密码破解列表
     */
    async DescribeBruteAttackList(req, cb) {
        return this.request("DescribeBruteAttackList", req, cb);
    }
    /**
     * 查询资产管理数据库列表
     */
    async DescribeAssetDatabaseList(req, cb) {
        return this.request("DescribeAssetDatabaseList", req, cb);
    }
    /**
     * 漏洞影响主机列表
     */
    async DescribeVulEffectHostList(req, cb) {
        return this.request("DescribeVulEffectHostList", req, cb);
    }
    /**
     * DescribeScanTaskStatus 查询机器扫描状态列表用于过滤筛选
     */
    async DescribeScanTaskStatus(req, cb) {
        return this.request("DescribeScanTaskStatus", req, cb);
    }
    /**
     * 获取快速检索列表
     */
    async DescribeSearchTemplates(req, cb) {
        return this.request("DescribeSearchTemplates", req, cb);
    }
    /**
     * 专家服务-应急响应列表
     */
    async DescribeEmergencyResponseList(req, cb) {
        return this.request("DescribeEmergencyResponseList", req, cb);
    }
    /**
     * 导出资产管理Web服务列表
     */
    async ExportAssetWebServiceInfoList(req, cb) {
        return this.request("ExportAssetWebServiceInfoList", req, cb);
    }
    /**
     * 漏洞管理-重新检测接口
     */
    async ScanVulAgain(req, cb) {
        return this.request("ScanVulAgain", req, cb);
    }
    /**
     * 查询一个用户下的基线策略信息
     */
    async DescribeBaselineStrategyList(req, cb) {
        return this.request("DescribeBaselineStrategyList", req, cb);
    }
    /**
     * 本接口（SeparateMalwares）用于隔离木马。
     */
    async SeparateMalwares(req, cb) {
        return this.request("SeparateMalwares", req, cb);
    }
    /**
     * 查询木马扫描进度
     */
    async DescribeScanMalwareSchedule(req, cb) {
        return this.request("DescribeScanMalwareSchedule", req, cb);
    }
    /**
     * 根据基线id查询下属检测项信息
     */
    async DescribeBaselineRule(req, cb) {
        return this.request("DescribeBaselineRule", req, cb);
    }
    /**
     * 导出基线影响主机列表
     */
    async ExportBaselineEffectHostList(req, cb) {
        return this.request("ExportBaselineEffectHostList", req, cb);
    }
    /**
     * 本接口 (ExportNonlocalLoginPlaces) 用于导出异地登录事件记录CSV文件。
     */
    async ExportNonlocalLoginPlaces(req, cb) {
        return this.request("ExportNonlocalLoginPlaces", req, cb);
    }
    /**
     * 获取资产指纹页面的资源监控列表
     */
    async DescribeAssetMachineList(req, cb) {
        return this.request("DescribeAssetMachineList", req, cb);
    }
    /**
     * 获取阻断按钮状态
     */
    async DescribeBanStatus(req, cb) {
        return this.request("DescribeBanStatus", req, cb);
    }
    /**
     * 获取异地登录白名单合并后列表
     */
    async DescribeLoginWhiteCombinedList(req, cb) {
        return this.request("DescribeLoginWhiteCombinedList", req, cb);
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
     * 获取Web站点列表
     */
    async DescribeAssetWebLocationList(req, cb) {
        return this.request("DescribeAssetWebLocationList", req, cb);
    }
    /**
     * 根据策略id查询基线检测项TOP
     */
    async DescribeBaselineTop(req, cb) {
        return this.request("DescribeBaselineTop", req, cb);
    }
    /**
     * 删除高危命令规则
     */
    async DeleteBashRules(req, cb) {
        return this.request("DeleteBashRules", req, cb);
    }
    /**
     * 获取资产管理进程列表
     */
    async DescribeAssetProcessInfoList(req, cb) {
        return this.request("DescribeAssetProcessInfoList", req, cb);
    }
    /**
     * 获取反弹Shell列表
     */
    async DescribeReverseShellEvents(req, cb) {
        return this.request("DescribeReverseShellEvents", req, cb);
    }
    /**
     * 修改暴力破解规则
     */
    async ModifyBruteAttackRules(req, cb) {
        return this.request("ModifyBruteAttackRules", req, cb);
    }
    /**
     *  用于设置新增主机自动开通专业防护配置。
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
     * 入侵管理-终止扫描任务
     */
    async DeleteMalwareScanTask(req, cb) {
        return this.request("DeleteMalwareScanTask", req, cb);
    }
    /**
     * 漏洞top统计
     */
    async DescribeVulTop(req, cb) {
        return this.request("DescribeVulTop", req, cb);
    }
    /**
     * 修改告警设置
     */
    async ModifyWarningSetting(req, cb) {
        return this.request("ModifyWarningSetting", req, cb);
    }
    /**
     * 获取待处理漏洞数+影响主机数
     */
    async DescribeVulHostCountScanTime(req, cb) {
        return this.request("DescribeVulHostCountScanTime", req, cb);
    }
    /**
     * 获取爆破破解规则
     */
    async DescribeBruteAttackRules(req, cb) {
        return this.request("DescribeBruteAttackRules", req, cb);
    }
    /**
     * 查询资产管理环境变量列表
     */
    async DescribeAssetEnvList(req, cb) {
        return this.request("DescribeAssetEnvList", req, cb);
    }
    /**
     * 获取ES查询文档列表
     */
    async DescribeESHits(req, cb) {
        return this.request("DescribeESHits", req, cb);
    }
    /**
     * 创建应急漏洞扫描任务
     */
    async CreateEmergencyVulScan(req, cb) {
        return this.request("CreateEmergencyVulScan", req, cb);
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
     * 获取阻断白名单列表
     */
    async DescribeBanWhiteList(req, cb) {
        return this.request("DescribeBanWhiteList", req, cb);
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
     * 查询已经忽略的检测项信息
     */
    async DescribeIgnoreBaselineRule(req, cb) {
        return this.request("DescribeIgnoreBaselineRule", req, cb);
    }
    /**
     * 根据基线id查询基线详情接口
     */
    async DescribeBaselineDetail(req, cb) {
        return this.request("DescribeBaselineDetail", req, cb);
    }
    /**
     * 入侵检测，获取恶意请求列表
     */
    async DescribeRiskDnsList(req, cb) {
        return this.request("DescribeRiskDnsList", req, cb);
    }
    /**
     * 网站防篡改-查询动态防护信息
     */
    async DescribeWebPageProtectStat(req, cb) {
        return this.request("DescribeWebPageProtectStat", req, cb);
    }
    /**
     * 本接口 (DescribeHistoryAccounts) 用于获取帐号变更历史列表数据。
     */
    async DescribeHistoryAccounts(req, cb) {
        return this.request("DescribeHistoryAccounts", req, cb);
    }
    /**
     * 添加网站防护服务器
     */
    async CreateProtectServer(req, cb) {
        return this.request("CreateProtectServer", req, cb);
    }
    /**
     * DescribeScanState 该接口能查询对应模块正在进行的扫描任务状态
     */
    async DescribeScanState(req, cb) {
        return this.request("DescribeScanState", req, cb);
    }
    /**
     * 根据基线策略id删除策略
     */
    async DeleteBaselineStrategy(req, cb) {
        return this.request("DeleteBaselineStrategy", req, cb);
    }
    /**
     * 获取服务器风险top列表
     */
    async DescribeVulHostTop(req, cb) {
        return this.request("DescribeVulHostTop", req, cb);
    }
    /**
     * 本接口（UntrustMalwares）用于取消信任木马文件。
     */
    async UntrustMalwares(req, cb) {
        return this.request("UntrustMalwares", req, cb);
    }
    /**
     * 获取资产管理Web框架列表
     */
    async DescribeAssetWebFrameList(req, cb) {
        return this.request("DescribeAssetWebFrameList", req, cb);
    }
    /**
     * 获取阻断地域
     */
    async DescribeBanRegions(req, cb) {
        return this.request("DescribeBanRegions", req, cb);
    }
    /**
     * 查询可筛选操作系统列表.
     */
    async DescribeMachineOsList(req, cb) {
        return this.request("DescribeMachineOsList", req, cb);
    }
    /**
     * 漏洞详情，带CVSS版本
     */
    async DescribeVulInfoCvss(req, cb) {
        return this.request("DescribeVulInfoCvss", req, cb);
    }
    /**
     * 入侵检测获取木马列表
     */
    async DescribeMalWareList(req, cb) {
        return this.request("DescribeMalWareList", req, cb);
    }
    /**
     * 该接口可以对入侵检测-文件查杀扫描检测
     */
    async CreateScanMalwareSetting(req, cb) {
        return this.request("CreateScanMalwareSetting", req, cb);
    }
    /**
     * 定时扫描设置
     */
    async ModifyMalwareTimingScanSettings(req, cb) {
        return this.request("ModifyMalwareTimingScanSettings", req, cb);
    }
    /**
     * 获取漏洞列表数据
     */
    async DescribeVulList(req, cb) {
        return this.request("DescribeVulList", req, cb);
    }
    /**
     * 获取内核模块详情
     */
    async DescribeAssetCoreModuleInfo(req, cb) {
        return this.request("DescribeAssetCoreModuleInfo", req, cb);
    }
    /**
     * 获取主机相关统计
     */
    async DescribeGeneralStat(req, cb) {
        return this.request("DescribeGeneralStat", req, cb);
    }
    /**
     * 获取软件关联进程列表
     */
    async DescribeAssetAppProcessList(req, cb) {
        return this.request("DescribeAssetAppProcessList", req, cb);
    }
    /**
     * 获取资产管理数据库详情
     */
    async DescribeAssetDatabaseInfo(req, cb) {
        return this.request("DescribeAssetDatabaseInfo", req, cb);
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
     * 查询资产管理启动服务列表
     */
    async DescribeAssetInitServiceList(req, cb) {
        return this.request("DescribeAssetInitServiceList", req, cb);
    }
    /**
     * 本接口（DeleteMachine）用于卸载云镜客户端。
     */
    async DeleteMachine(req, cb) {
        return this.request("DeleteMachine", req, cb);
    }
    /**
     * 专家服务-专家服务订单列表
     */
    async DescribeExpertServiceOrderList(req, cb) {
        return this.request("DescribeExpertServiceOrderList", req, cb);
    }
    /**
     * 根据策略名查询策略是否存在
     */
    async DescribeStrategyExist(req, cb) {
        return this.request("DescribeStrategyExist", req, cb);
    }
    /**
     * 网站防篡改-查询网页防篡改服务器购买信息及服务器信息
     */
    async DescribeWebPageServiceInfo(req, cb) {
        return this.request("DescribeWebPageServiceInfo", req, cb);
    }
    /**
     * 切换高危命令规则状态
     */
    async SwitchBashRules(req, cb) {
        return this.request("SwitchBashRules", req, cb);
    }
    /**
     * 获取所有主机标签
     */
    async DescribeTags(req, cb) {
        return this.request("DescribeTags", req, cb);
    }
    /**
     * 查询基线基础信息列表
     */
    async DescribeBaselineBasicInfo(req, cb) {
        return this.request("DescribeBaselineBasicInfo", req, cb);
    }
    /**
     * 本接口 (DescribeSecurityTrends) 用于获取安全事件统计数据。
     */
    async DescribeSecurityTrends(req, cb) {
        return this.request("DescribeSecurityTrends", req, cb);
    }
    /**
     * 根据基线策略id查询基线策略数据概览统计
     */
    async DescribeBaselineAnalysisData(req, cb) {
        return this.request("DescribeBaselineAnalysisData", req, cb);
    }
    /**
     * 网络攻击日志详情
     */
    async DescribeAttackLogInfo(req, cb) {
        return this.request("DescribeAttackLogInfo", req, cb);
    }
    /**
     * 网站防篡改防护设置开关
     */
    async ModifyWebPageProtectSwitch(req, cb) {
        return this.request("ModifyWebPageProtectSwitch", req, cb);
    }
    /**
     * 新增或修改高危命令规则
     */
    async EditBashRules(req, cb) {
        return this.request("EditBashRules", req, cb);
    }
    /**
     * 专家服务-安全管家月巡检报告下载
     */
    async DescribeMonthInspectionReport(req, cb) {
        return this.request("DescribeMonthInspectionReport", req, cb);
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
     * 用于统计专业版和基础版机器数。
     */
    async DescribeVersionStatistics(req, cb) {
        return this.request("DescribeVersionStatistics", req, cb);
    }
    /**
     * 漏洞管理-导出漏洞列表
     */
    async ExportVulList(req, cb) {
        return this.request("ExportVulList", req, cb);
    }
    /**
     * 用于获取单台主机或所有主机是否开通专业版状态。
     */
    async DescribeProVersionStatus(req, cb) {
        return this.request("DescribeProVersionStatus", req, cb);
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
     * 查询资产管理Web服务列表
     */
    async DescribeAssetWebServiceInfoList(req, cb) {
        return this.request("DescribeAssetWebServiceInfoList", req, cb);
    }
    /**
     * 导出漏洞检测报告。
     */
    async ExportVulDetectionReport(req, cb) {
        return this.request("ExportVulDetectionReport", req, cb);
    }
    /**
     * 查询篡改事件列表
     */
    async DescribeWebPageEventList(req, cb) {
        return this.request("DescribeWebPageEventList", req, cb);
    }
    /**
     * 获取木马文件下载地址
     */
    async DescribeMalwareFile(req, cb) {
        return this.request("DescribeMalwareFile", req, cb);
    }
    /**
     * 获取漏洞管理模块指定类型的待处理漏洞数、主机数和非专业版主机数量
     */
    async DescribeUndoVulCounts(req, cb) {
        return this.request("DescribeUndoVulCounts", req, cb);
    }
}
exports.Client = Client;
