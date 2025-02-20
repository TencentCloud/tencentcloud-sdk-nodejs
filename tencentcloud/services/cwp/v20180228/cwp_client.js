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
     * 获取资产管理端口列表
     */
    async DescribeAssetPortInfoList(req, cb) {
        return this.request("DescribeAssetPortInfoList", req, cb);
    }
    /**
     * 获取配置的aeskey和aesiv
     */
    async DescribeAESKey(req, cb) {
        return this.request("DescribeAESKey", req, cb);
    }
    /**
     * 批量修改防勒索策略状态
     */
    async ModifyRansomDefenseStrategyStatus(req, cb) {
        return this.request("ModifyRansomDefenseStrategyStatus", req, cb);
    }
    /**
     * 查询防勒索策略列表
     */
    async DescribeRansomDefenseStrategyList(req, cb) {
        return this.request("DescribeRansomDefenseStrategyList", req, cb);
    }
    /**
     * 导出Jar包列表
     */
    async ExportAssetJarList(req, cb) {
        return this.request("ExportAssetJarList", req, cb);
    }
    /**
     * 获取爆破阻断模式
     */
    async DescribeBanMode(req, cb) {
        return this.request("DescribeBanMode", req, cb);
    }
    /**
     * 停止资产扫描任务
     */
    async StopAssetScan(req, cb) {
        return this.request("StopAssetScan", req, cb);
    }
    /**
     * 获取本地存储键值列表
     */
    async KeysLocalStorage(req, cb) {
        return this.request("KeysLocalStorage", req, cb);
    }
    /**
     * 导出java内存马插件信息
     */
    async ExportJavaMemShellPlugins(req, cb) {
        return this.request("ExportJavaMemShellPlugins", req, cb);
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
     * 导出漏洞防御列表
     */
    async ExportVulDefenceList(req, cb) {
        return this.request("ExportVulDefenceList", req, cb);
    }
    /**
     * 根据taskid查询检测进度
     */
    async DescribeScanSchedule(req, cb) {
        return this.request("DescribeScanSchedule", req, cb);
    }
    /**
     * 根据策略信息创建基线策略
     */
    async CreateBaselineStrategy(req, cb) {
        return this.request("CreateBaselineStrategy", req, cb);
    }
    /**
     * 主机信息与标签信息查询
     */
    async DescribeHostInfo(req, cb) {
        return this.request("DescribeHostInfo", req, cb);
    }
    /**
     * 查询批量导入机器信息
     */
    async DescribeImportMachineInfo(req, cb) {
        return this.request("DescribeImportMachineInfo", req, cb);
    }
    /**
     * 获取基线规则列表
     */
    async DescribeBaselineRuleList(req, cb) {
        return this.request("DescribeBaselineRuleList", req, cb);
    }
    /**
     * 大屏可视化风险资产top5（今日），统计今日风险资产
     */
    async DescribeScreenRiskAssetsTop(req, cb) {
        return this.request("DescribeScreenRiskAssetsTop", req, cb);
    }
    /**
     * 获取所有软件应用数量
     */
    async DescribeAssetAppCount(req, cb) {
        return this.request("DescribeAssetAppCount", req, cb);
    }
    /**
     * 接口返回TopN的风险服务器
     */
    async DescribeBaselineHostTop(req, cb) {
        return this.request("DescribeBaselineHostTop", req, cb);
    }
    /**
     * 查询java内存马事件列表
     */
    async DescribeJavaMemShellList(req, cb) {
        return this.request("DescribeJavaMemShellList", req, cb);
    }
    /**
     * 获取基线检测详情记录
     */
    async DescribeBaselineDetectList(req, cb) {
        return this.request("DescribeBaselineDetectList", req, cb);
    }
    /**
     * 专家服务-旗舰重保列表
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
     * 删除高危命令策略
     */
    async DeleteBashPolicies(req, cb) {
        return this.request("DeleteBashPolicies", req, cb);
    }
    /**
     * 获取漏洞防御概览信息，包括事件趋势及插件开启情况
     */
    async DescribeVulDefenceOverview(req, cb) {
        return this.request("DescribeVulDefenceOverview", req, cb);
    }
    /**
     * 获取所有账号数量
     */
    async DescribeAssetUserCount(req, cb) {
        return this.request("DescribeAssetUserCount", req, cb);
    }
    /**
     * 导出资产管理主机资源详细信息
     */
    async ExportAssetMachineDetail(req, cb) {
        return this.request("ExportAssetMachineDetail", req, cb);
    }
    /**
     * 获取所有Web站点数量
     */
    async DescribeAssetWebLocationCount(req, cb) {
        return this.request("DescribeAssetWebLocationCount", req, cb);
    }
    /**
     * 获取Web站点虚拟目录列表
     */
    async DescribeAssetWebLocationPathList(req, cb) {
        return this.request("DescribeAssetWebLocationPathList", req, cb);
    }
    /**
     * 大屏可视化主机入侵详情
     */
    async DescribeScreenHostInvasion(req, cb) {
        return this.request("DescribeScreenHostInvasion", req, cb);
    }
    /**
     * 查看产生事件时规则详情接口
     */
    async DescribeFileTamperEventRuleInfo(req, cb) {
        return this.request("DescribeFileTamperEventRuleInfo", req, cb);
    }
    /**
     * 查询索引
     */
    async DescribeLogIndex(req, cb) {
        return this.request("DescribeLogIndex", req, cb);
    }
    /**
     * DestroyOrder  该接口可以对资源销毁.
     */
    async DestroyOrder(req, cb) {
        return this.request("DestroyOrder", req, cb);
    }
    /**
     * 新增或更新告警接收人
     */
    async ModifyWebHookReceiver(req, cb) {
        return this.request("ModifyWebHookReceiver", req, cb);
    }
    /**
     * 大屏可视化获取主机相关统计
     */
    async DescribeScreenGeneralStat(req, cb) {
        return this.request("DescribeScreenGeneralStat", req, cb);
    }
    /**
     * 查询高危命令事件详情(新)
     */
    async DescribeBashEventsInfoNew(req, cb) {
        return this.request("DescribeBashEventsInfoNew", req, cb);
    }
    /**
     * 更改基线忽略规则
     */
    async ModifyBaselineRuleIgnore(req, cb) {
        return this.request("ModifyBaselineRuleIgnore", req, cb);
    }
    /**
     * 获取Web服务关联进程列表
     */
    async DescribeAssetWebServiceProcessList(req, cb) {
        return this.request("DescribeAssetWebServiceProcessList", req, cb);
    }
    /**
     * 本接口 (ExportMaliciousRequests) 用于导出下载恶意请求文件。
     */
    async ExportMaliciousRequests(req, cb) {
        return this.request("ExportMaliciousRequests", req, cb);
    }
    /**
     * 获取系统负载、内存使用率、硬盘使用率情况
     */
    async DescribeAssetLoadInfo(req, cb) {
        return this.request("DescribeAssetLoadInfo", req, cb);
    }
    /**
     * 修复基线检测
     */
    async FixBaselineDetect(req, cb) {
        return this.request("FixBaselineDetect", req, cb);
    }
    /**
     * 获取基线规则检测列表
     */
    async DescribeBaselineRuleDetectList(req, cb) {
        return this.request("DescribeBaselineRuleDetectList", req, cb);
    }
    /**
     * 编辑漏洞防御最大cpu配置
     */
    async ModifyRaspMaxCpu(req, cb) {
        return this.request("ModifyRaspMaxCpu", req, cb);
    }
    /**
     * 删除授权全部记录
     */
    async DeleteLicenseRecordAll(req, cb) {
        return this.request("DeleteLicenseRecordAll", req, cb);
    }
    /**
     * 获取概览统计数据。
     */
    async DescribeOverviewStatistics(req, cb) {
        return this.request("DescribeOverviewStatistics", req, cb);
    }
    /**
     * 导出基线检测项
     */
    async ExportBaselineItemDetectList(req, cb) {
        return this.request("ExportBaselineItemDetectList", req, cb);
    }
    /**
     * 更新合并后登录审计白名单信息（服务器列表数目应小于1000）
     */
    async ModifyLoginWhiteRecord(req, cb) {
        return this.request("ModifyLoginWhiteRecord", req, cb);
    }
    /**
     * 根据任务id查询基线检测进度
     */
    async DescribeBaselineScanSchedule(req, cb) {
        return this.request("DescribeBaselineScanSchedule", req, cb);
    }
    /**
     * 查询网络攻击设置
     */
    async DescribeNetAttackSetting(req, cb) {
        return this.request("DescribeNetAttackSetting", req, cb);
    }
    /**
     * 导出资产管理Web框架列表
     */
    async ExportAssetWebFrameList(req, cb) {
        return this.request("ExportAssetWebFrameList", req, cb);
    }
    /**
     * 检验核心文件监控前端新增和编辑时的规则参数。
     */
    async CheckFileTamperRule(req, cb) {
        return this.request("CheckFileTamperRule", req, cb);
    }
    /**
     * 获取网络攻击白名单列表
     */
    async DescribeNetAttackWhiteList(req, cb) {
        return this.request("DescribeNetAttackWhiteList", req, cb);
    }
    /**
     * 删除本地提权规则
     */
    async DeletePrivilegeRules(req, cb) {
        return this.request("DeletePrivilegeRules", req, cb);
    }
    /**
     * 切换高危命令策略状态
     */
    async ModifyBashPolicyStatus(req, cb) {
        return this.request("ModifyBashPolicyStatus", req, cb);
    }
    /**
     * 删除恶意请求事件
     */
    async DeleteRiskDnsEvent(req, cb) {
        return this.request("DeleteRiskDnsEvent", req, cb);
    }
    /**
     * 设置本地存储数据
     */
    async SetLocalStorageItem(req, cb) {
        return this.request("SetLocalStorageItem", req, cb);
    }
    /**
     * 本接口用于删除异地登录白名单规则。
     */
    async DeleteLoginWhiteList(req, cb) {
        return this.request("DeleteLoginWhiteList", req, cb);
    }
    /**
     * 删除日志下载任务
     */
    async DeleteLogExport(req, cb) {
        return this.request("DeleteLogExport", req, cb);
    }
    /**
     * 本接口 (DescribeExportMachines) 用于导出区域主机列表。
     */
    async DescribeExportMachines(req, cb) {
        return this.request("DescribeExportMachines", req, cb);
    }
    /**
     * 清理本地存储数据
     */
    async ClearLocalStorage(req, cb) {
        return this.request("ClearLocalStorage", req, cb);
    }
    /**
     * 获取所有Web框架数量
     */
    async DescribeAssetWebFrameCount(req, cb) {
        return this.request("DescribeAssetWebFrameCount", req, cb);
    }
    /**
     * 根据基线策略id删除策略
     */
    async DeleteBaselineStrategy(req, cb) {
        return this.request("DeleteBaselineStrategy", req, cb);
    }
    /**
     * 查询授权信息
     */
    async DescribeLicense(req, cb) {
        return this.request("DescribeLicense", req, cb);
    }
    /**
     * 导出高危命令策略
     */
    async ExportBashPolicies(req, cb) {
        return this.request("ExportBashPolicies", req, cb);
    }
    /**
     * 本接口 (DescribeMachineLicenseDetail)查询机器授权信息
     */
    async DescribeMachineLicenseDetail(req, cb) {
        return this.request("DescribeMachineLicenseDetail", req, cb);
    }
    /**
     * 编辑反弹Shell规则（支持多服务器选择）
     */
    async ModifyReverseShellRulesAggregation(req, cb) {
        return this.request("ModifyReverseShellRulesAggregation", req, cb);
    }
    /**
     * 切换高危命令规则状态
     */
    async SwitchBashRules(req, cb) {
        return this.request("SwitchBashRules", req, cb);
    }
    /**
     * 获取账号列表
     */
    async DescribeAssetUserList(req, cb) {
        return this.request("DescribeAssetUserList", req, cb);
    }
    /**
     * 获取Web站点详情
     */
    async DescribeAssetWebLocationInfo(req, cb) {
        return this.request("DescribeAssetWebLocationInfo", req, cb);
    }
    /**
     * 查询给定主机java内存马插件信息
     */
    async DescribeJavaMemShellPluginInfo(req, cb) {
        return this.request("DescribeJavaMemShellPluginInfo", req, cb);
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
     * 查询基线是否第一次检测
     */
    async CheckFirstScanBaseline(req, cb) {
        return this.request("CheckFirstScanBaseline", req, cb);
    }
    /**
     * 获取快速检索列表
     */
    async DescribeSearchTemplates(req, cb) {
        return this.request("DescribeSearchTemplates", req, cb);
    }
    /**
     * 导出资产管理Web服务列表
     */
    async ExportAssetWebServiceInfoList(req, cb) {
        return this.request("ExportAssetWebServiceInfoList", req, cb);
    }
    /**
     * 本接口（SeparateMalwares）用于隔离木马。
     */
    async SeparateMalwares(req, cb) {
        return this.request("SeparateMalwares", req, cb);
    }
    /**
     * 删除网络攻击白名单
     */
    async DeleteNetAttackWhiteList(req, cb) {
        return this.request("DeleteNetAttackWhiteList", req, cb);
    }
    /**
     * 获取日志下载任务列表
     */
    async DescribeLogExports(req, cb) {
        return this.request("DescribeLogExports", req, cb);
    }
    /**
     * 大屏可视化主机区域列表
     */
    async DescribeScreenMachines(req, cb) {
        return this.request("DescribeScreenMachines", req, cb);
    }
    /**
     * 大屏获取安全防护状态
     */
    async DescribeScreenProtectionStat(req, cb) {
        return this.request("DescribeScreenProtectionStat", req, cb);
    }
    /**
     * 获取高危命令列表(新)
     */
    async DescribeBashEventsNew(req, cb) {
        return this.request("DescribeBashEventsNew", req, cb);
    }
    /**
     * 获取资产指纹页面的资源监控列表
     */
    async DescribeAssetMachineList(req, cb) {
        return this.request("DescribeAssetMachineList", req, cb);
    }
    /**
     * 删除主机所有记录，目前只支持非腾讯云主机，且需要主机在离线状态
     */
    async RemoveMachine(req, cb) {
        return this.request("RemoveMachine", req, cb);
    }
    /**
     * 获取主机所有资源数量
     */
    async DescribeAssetHostTotalCount(req, cb) {
        return this.request("DescribeAssetHostTotalCount", req, cb);
    }
    /**
     * 获取Web站点列表
     */
    async DescribeAssetWebLocationList(req, cb) {
        return this.request("DescribeAssetWebLocationList", req, cb);
    }
    /**
     * 查询恶意请求事件详情
     */
    async DescribeRiskDnsEventInfo(req, cb) {
        return this.request("DescribeRiskDnsEventInfo", req, cb);
    }
    /**
     * 导出高危命令事件(新)
     */
    async ExportBashEventsNew(req, cb) {
        return this.request("ExportBashEventsNew", req, cb);
    }
    /**
     * 查询入侵检测事件更新状态任务是否完成
     */
    async DescribeRiskBatchStatus(req, cb) {
        return this.request("DescribeRiskBatchStatus", req, cb);
    }
    /**
     * 获取资产管理进程列表
     */
    async DescribeAssetProcessInfoList(req, cb) {
        return this.request("DescribeAssetProcessInfoList", req, cb);
    }
    /**
     * 查询告警接收人列表
     */
    async DescribeWebHookReceiver(req, cb) {
        return this.request("DescribeWebHookReceiver", req, cb);
    }
    /**
     * 用于设置新增主机自动开通专业防护配置。
     */
    async ModifyAutoOpenProVersionConfig(req, cb) {
        return this.request("ModifyAutoOpenProVersionConfig", req, cb);
    }
    /**
     * 设置本地存储过期时间
     */
    async SetLocalStorageExpire(req, cb) {
        return this.request("SetLocalStorageExpire", req, cb);
    }
    /**
     * 漏洞修护-查询可修护主机信息
     */
    async DescribeCanFixVulMachine(req, cb) {
        return this.request("DescribeCanFixVulMachine", req, cb);
    }
    /**
     * 更改基线策略状态
     */
    async ModifyBaselinePolicyState(req, cb) {
        return this.request("ModifyBaselinePolicyState", req, cb);
    }
    /**
     * 测试企微机器人规则
     */
    async TestWebHookRule(req, cb) {
        return this.request("TestWebHookRule", req, cb);
    }
    /**
     * 入侵管理-终止扫描任务
     */
    async DeleteMalwareScanTask(req, cb) {
        return this.request("DeleteMalwareScanTask", req, cb);
    }
    /**
     * 核心文件监控规则列表
     */
    async DescribeFileTamperRules(req, cb) {
        return this.request("DescribeFileTamperRules", req, cb);
    }
    /**
     * 查询主机高级防御事件数统计
     */
    async DescribeMachineDefenseCnt(req, cb) {
        return this.request("DescribeMachineDefenseCnt", req, cb);
    }
    /**
     * 用于获取专业版概览信息。
     */
    async DescribeProVersionInfo(req, cb) {
        return this.request("DescribeProVersionInfo", req, cb);
    }
    /**
     * 修改网络攻击设置
     */
    async ModifyNetAttackSetting(req, cb) {
        return this.request("ModifyNetAttackSetting", req, cb);
    }
    /**
     * 删除阻断白名单列表
     */
    async DeleteBanWhiteList(req, cb) {
        return this.request("DeleteBanWhiteList", req, cb);
    }
    /**
     * 查询网站防篡改概览信息
     */
    async DescribeWebPageGeneralize(req, cb) {
        return this.request("DescribeWebPageGeneralize", req, cb);
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
     * 获取各种类型资源Top5
     */
    async DescribeAssetTypeTop(req, cb) {
        return this.request("DescribeAssetTypeTop", req, cb);
    }
    /**
     * 获取漏洞防御白名单漏洞列表
     */
    async DescribeRaspRuleVuls(req, cb) {
        return this.request("DescribeRaspRuleVuls", req, cb);
    }
    /**
     * 导出勒索防御策略绑定机器列表
     */
    async ExportRansomDefenseStrategyMachines(req, cb) {
        return this.request("ExportRansomDefenseStrategyMachines", req, cb);
    }
    /**
     * 获取日志检索容量使用统计
     */
    async DescribeLogStorageStatistic(req, cb) {
        return this.request("DescribeLogStorageStatistic", req, cb);
    }
    /**
     * 获取一键忽略受影响的检测项和主机信息
     */
    async DescribeIgnoreHostAndItemConfig(req, cb) {
        return this.request("DescribeIgnoreHostAndItemConfig", req, cb);
    }
    /**
     * 查询已经忽略的检测项信息
     */
    async DescribeIgnoreBaselineRule(req, cb) {
        return this.request("DescribeIgnoreBaselineRule", req, cb);
    }
    /**
     * 查询日志投递kafka可选项列表
     */
    async DescribeLogDeliveryKafkaOptions(req, cb) {
        return this.request("DescribeLogDeliveryKafkaOptions", req, cb);
    }
    /**
     * 查询主机入侵检测事件统计
     */
    async DescribeMachineRiskCnt(req, cb) {
        return this.request("DescribeMachineRiskCnt", req, cb);
    }
    /**
     * 大屏可视化安全播报
     */
    async DescribeScreenBroadcasts(req, cb) {
        return this.request("DescribeScreenBroadcasts", req, cb);
    }
    /**
     * 该接口可以创建白名单订单
     */
    async CreateWhiteListOrder(req, cb) {
        return this.request("CreateWhiteListOrder", req, cb);
    }
    /**
     * 设置中心-授权管理 对某个授权批量解绑机器
     */
    async ModifyLicenseUnBinds(req, cb) {
        return this.request("ModifyLicenseUnBinds", req, cb);
    }
    /**
     * 获取版本对比信息
     */
    async DescribeVersionCompareChart(req, cb) {
        return this.request("DescribeVersionCompareChart", req, cb);
    }
    /**
     * 该接口可以对入侵检测-文件查杀扫描检测
     */
    async CreateScanMalwareSetting(req, cb) {
        return this.request("CreateScanMalwareSetting", req, cb);
    }
    /**
     * 获取全网勒索态势
     */
    async DescribeRansomDefenseTrend(req, cb) {
        return this.request("DescribeRansomDefenseTrend", req, cb);
    }
    /**
     * 导出资产管理Web应用列表
     */
    async ExportAssetWebAppList(req, cb) {
        return this.request("ExportAssetWebAppList", req, cb);
    }
    /**
     * 该接口可以获取设置中心-授权管理,某个授权下已绑定的授权机器列表
     */
    async DescribeLicenseBindList(req, cb) {
        return this.request("DescribeLicenseBindList", req, cb);
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
     * 开关java内存马插件
     */
    async ModifyJavaMemShellPluginSwitch(req, cb) {
        return this.request("ModifyJavaMemShellPluginSwitch", req, cb);
    }
    /**
     * 获取资产管理数据库详情
     */
    async DescribeAssetDatabaseInfo(req, cb) {
        return this.request("DescribeAssetDatabaseInfo", req, cb);
    }
    /**
     * 获取木马白名单列表
     */
    async DescribeMalwareWhiteList(req, cb) {
        return this.request("DescribeMalwareWhiteList", req, cb);
    }
    /**
     * 查询定期检测的配置
     */
    async DescribeScanVulSetting(req, cb) {
        return this.request("DescribeScanVulSetting", req, cb);
    }
    /**
     * 创建木马白名单
     */
    async CreateMalwareWhiteList(req, cb) {
        return this.request("CreateMalwareWhiteList", req, cb);
    }
    /**
     * 本接口（DeleteMachine）用于卸载主机安全客户端。
     */
    async DeleteMachine(req, cb) {
        return this.request("DeleteMachine", req, cb);
    }
    /**
     * 核心文件事件更新
     */
    async ModifyFileTamperEvents(req, cb) {
        return this.request("ModifyFileTamperEvents", req, cb);
    }
    /**
     * 查询安全播报文章信息
     */
    async DescribeSecurityBroadcastInfo(req, cb) {
        return this.request("DescribeSecurityBroadcastInfo", req, cb);
    }
    /**
     * ScanTaskAgain  重新开始扫描任务，可以指定机器
     */
    async ScanTaskAgain(req, cb) {
        return this.request("ScanTaskAgain", req, cb);
    }
    /**
     * 获取漏洞概览数据
     */
    async DescribeVulOverview(req, cb) {
        return this.request("DescribeVulOverview", req, cb);
    }
    /**
     * 日志分析功能-获取日志类型，使用该接口返回的结果暂时可过滤的日志类型
     */
    async DescribeLogType(req, cb) {
        return this.request("DescribeLogType", req, cb);
    }
    /**
     * 网络攻击事件详情
     */
    async DescribeAttackEventInfo(req, cb) {
        return this.request("DescribeAttackEventInfo", req, cb);
    }
    /**
     * 大屏可视化获取全网攻击热点
     */
    async DescribeScreenAttackHotspot(req, cb) {
        return this.request("DescribeScreenAttackHotspot", req, cb);
    }
    /**
     * 网站防篡改-删除事件记录
     */
    async DeleteWebPageEventLog(req, cb) {
        return this.request("DeleteWebPageEventLog", req, cb);
    }
    /**
     * 导出修复列表
     */
    async ExportBaselineFixList(req, cb) {
        return this.request("ExportBaselineFixList", req, cb);
    }
    /**
     * 用于获取单台主机或所有主机是否开通专业版状态。
     */
    async DescribeProVersionStatus(req, cb) {
        return this.request("DescribeProVersionStatus", req, cb);
    }
    /**
     * 本接口 (DescribeMachines) 用于获取区域主机列表。
     */
    async DescribeMachines(req, cb) {
        return this.request("DescribeMachines", req, cb);
    }
    /**
     * 获取基线检测主机列表
     */
    async DescribeBaselineHostDetectList(req, cb) {
        return this.request("DescribeBaselineHostDetectList", req, cb);
    }
    /**
     * 查询资产管理Web服务列表
     */
    async DescribeAssetWebServiceInfoList(req, cb) {
        return this.request("DescribeAssetWebServiceInfoList", req, cb);
    }
    /**
     * 获取所有进程数量
     */
    async DescribeAssetProcessCount(req, cb) {
        return this.request("DescribeAssetProcessCount", req, cb);
    }
    /**
     * 删除服务器关联的标签
     */
    async DeleteMachineTag(req, cb) {
        return this.request("DeleteMachineTag", req, cb);
    }
    /**
     * 获取漏洞态势信息
     */
    async DescribeVulTrend(req, cb) {
        return this.request("DescribeVulTrend", req, cb);
    }
    /**
     * 获取指定点属性信息
     */
    async DescribeVertexDetail(req, cb) {
        return this.request("DescribeVertexDetail", req, cb);
    }
    /**
     * 修改告警策略开关
     */
    async ModifyWebHookPolicyStatus(req, cb) {
        return this.request("ModifyWebHookPolicyStatus", req, cb);
    }
    /**
     * 导出检测项结果列表
     */
    async ExportBaselineItemList(req, cb) {
        return this.request("ExportBaselineItemList", req, cb);
    }
    /**
     * 获取基线检测项TOP5
     */
    async DescribeBaselineItemRiskTop(req, cb) {
        return this.request("DescribeBaselineItemRiskTop", req, cb);
    }
    /**
     * 导出资产管理应用列表
     */
    async ExportAssetAppList(req, cb) {
        return this.request("ExportAssetAppList", req, cb);
    }
    /**
     * 导出弱口令配置列表
     */
    async ExportBaselineWeakPasswordList(req, cb) {
        return this.request("ExportBaselineWeakPasswordList", req, cb);
    }
    /**
     * 查询一个用户下的基线策略信息
     */
    async DescribeBaselineStrategyList(req, cb) {
        return this.request("DescribeBaselineStrategyList", req, cb);
    }
    /**
     * 删除本地存储数据
     */
    async RemoveLocalStorageItem(req, cb) {
        return this.request("RemoveLocalStorageItem", req, cb);
    }
    /**
     * 导出资产管理端口列表
     */
    async ExportAssetPortInfoList(req, cb) {
        return this.request("ExportAssetPortInfoList", req, cb);
    }
    /**
     * 导出资源监控列表
     */
    async ExportAssetMachineList(req, cb) {
        return this.request("ExportAssetMachineList", req, cb);
    }
    /**
     * 获取日志存储量记录
     */
    async DescribeLogStorageRecord(req, cb) {
        return this.request("DescribeLogStorageRecord", req, cb);
    }
    /**
     * 校验高危命令用户规则新增和编辑时的参数。
     */
    async CheckBashPolicyParams(req, cb) {
        return this.request("CheckBashPolicyParams", req, cb);
    }
    /**
     * 修改网络攻击事件状态
     */
    async ModifyEventAttackStatus(req, cb) {
        return this.request("ModifyEventAttackStatus", req, cb);
    }
    /**
     * 对旗舰版机器单次触发事件调查及告警回溯
     */
    async CreateIncidentBacktracking(req, cb) {
        return this.request("CreateIncidentBacktracking", req, cb);
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
     * 用于统计专业版和基础版机器数。
     */
    async DescribeVersionStatistics(req, cb) {
        return this.request("DescribeVersionStatistics", req, cb);
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
     * 获取资产管理Web应用列表
     */
    async DescribeAssetWebAppList(req, cb) {
        return this.request("DescribeAssetWebAppList", req, cb);
    }
    /**
     * 查询防护目录关联服务器列表信息
     */
    async DescribeProtectDirRelatedServer(req, cb) {
        return this.request("DescribeProtectDirRelatedServer", req, cb);
    }
    /**
     * 导出基线主机检测
     */
    async ExportBaselineHostDetectList(req, cb) {
        return this.request("ExportBaselineHostDetectList", req, cb);
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
     * 删除告警接收人
     */
    async DeleteWebHookReceiver(req, cb) {
        return this.request("DeleteWebHookReceiver", req, cb);
    }
    /**
     * 导出高危命令事件
     */
    async ExportBashEvents(req, cb) {
        return this.request("ExportBashEvents", req, cb);
    }
    /**
     * 查询主机概览信息
     */
    async DescribeMachineGeneral(req, cb) {
        return this.request("DescribeMachineGeneral", req, cb);
    }
    /**
     * 获取恶意请求策略列表
     */
    async DescribeRiskDnsPolicyList(req, cb) {
        return this.request("DescribeRiskDnsPolicyList", req, cb);
    }
    /**
     * 获取应急漏洞列表
     */
    async DescribeEmergencyVulList(req, cb) {
        return this.request("DescribeEmergencyVulList", req, cb);
    }
    /**
     * 查询java内存马事件详细信息
     */
    async DescribeJavaMemShellInfo(req, cb) {
        return this.request("DescribeJavaMemShellInfo", req, cb);
    }
    /**
     * 获取基线下载列表
     */
    async DescribeBaselineDownloadList(req, cb) {
        return this.request("DescribeBaselineDownloadList", req, cb);
    }
    /**
     * 本接口（UntrustMalwares）用于取消信任木马文件。
     */
    async UntrustMalwares(req, cb) {
        return this.request("UntrustMalwares", req, cb);
    }
    /**
     * 新增或修改日志投递kafka接入配置
     */
    async ModifyLogKafkaAccess(req, cb) {
        return this.request("ModifyLogKafkaAccess", req, cb);
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
     * 获取漏洞防御事件详情
     */
    async DescribeDefenceEventDetail(req, cb) {
        return this.request("DescribeDefenceEventDetail", req, cb);
    }
    /**
     * 获取文件查杀概览信息
     */
    async DescribeMalwareRiskOverview(req, cb) {
        return this.request("DescribeMalwareRiskOverview", req, cb);
    }
    /**
     * 设置阻断开关状态
     */
    async ModifyBanStatus(req, cb) {
        return this.request("ModifyBanStatus", req, cb);
    }
    /**
     * 查询机器清理历史记录
     */
    async DescribeMachineClearHistory(req, cb) {
        return this.request("DescribeMachineClearHistory", req, cb);
    }
    /**
     * 关联机器标签列表
     */
    async UpdateMachineTags(req, cb) {
        return this.request("UpdateMachineTags", req, cb);
    }
    /**
     * 获取agent安装命令
     */
    async DescribeAgentInstallCommand(req, cb) {
        return this.request("DescribeAgentInstallCommand", req, cb);
    }
    /**
     * 资产指纹启动扫描
     */
    async ScanAsset(req, cb) {
        return this.request("ScanAsset", req, cb);
    }
    /**
     * 根据Ids删除反弹Shell事件
     */
    async DeleteReverseShellEvents(req, cb) {
        return this.request("DeleteReverseShellEvents", req, cb);
    }
    /**
     * 根据任务id导出指定扫描任务详情
     */
    async ExportScanTaskDetails(req, cb) {
        return this.request("ExportScanTaskDetails", req, cb);
    }
    /**
     * 查询主机地域列表
     */
    async DescribeMachineRegionList(req, cb) {
        return this.request("DescribeMachineRegionList", req, cb);
    }
    /**
     * 修改网站防护设置
     */
    async ModifyWebPageProtectSetting(req, cb) {
        return this.request("ModifyWebPageProtectSetting", req, cb);
    }
    /**
     * 导出资产管理启动服务列表
     */
    async ExportAssetInitServiceList(req, cb) {
        return this.request("ExportAssetInitServiceList", req, cb);
    }
    /**
     * 更新登录审计白名单信息
     */
    async ModifyLoginWhiteInfo(req, cb) {
        return this.request("ModifyLoginWhiteInfo", req, cb);
    }
    /**
     * 导出资产管理内核模块列表
     */
    async ExportAssetCoreModuleList(req, cb) {
        return this.request("ExportAssetCoreModuleList", req, cb);
    }
    /**
     * 获取当前用户告警列表
     */
    async DescribeWarningList(req, cb) {
        return this.request("DescribeWarningList", req, cb);
    }
    /**
     * 获取基线忽略规则列表
     */
    async DescribeBaselineRuleIgnoreList(req, cb) {
        return this.request("DescribeBaselineRuleIgnoreList", req, cb);
    }
    /**
     * 修改主机备注信息
     */
    async ModifyMachineRemark(req, cb) {
        return this.request("ModifyMachineRemark", req, cb);
    }
    /**
     * 查询基线基础信息列表
     */
    async DescribeBaselineBasicInfo(req, cb) {
        return this.request("DescribeBaselineBasicInfo", req, cb);
    }
    /**
     * 获取机器地域列表
     */
    async DescribeMachineRegions(req, cb) {
        return this.request("DescribeMachineRegions", req, cb);
    }
    /**
     * 获取当前漏洞防御插件设置
     */
    async DescribeVulDefenceSetting(req, cb) {
        return this.request("DescribeVulDefenceSetting", req, cb);
    }
    /**
     * 获取待处理漏洞数+影响主机数
     */
    async DescribeVulHostCountScanTime(req, cb) {
        return this.request("DescribeVulHostCountScanTime", req, cb);
    }
    /**
     * 导出基线检测规则
     */
    async ExportBaselineRuleDetectList(req, cb) {
        return this.request("ExportBaselineRuleDetectList", req, cb);
    }
    /**
     * 获取日志存储配置
     */
    async DescribeLogStorageConfig(req, cb) {
        return this.request("DescribeLogStorageConfig", req, cb);
    }
    /**
     * 删除机器清理记录
     */
    async DeleteMachineClearHistory(req, cb) {
        return this.request("DeleteMachineClearHistory", req, cb);
    }
    /**
     * 漏洞修护-查询主机创建的快照
     */
    async DescribeMachineSnapshot(req, cb) {
        return this.request("DescribeMachineSnapshot", req, cb);
    }
    /**
     * 查询授权白名单的可用配置
     */
    async DescribeLicenseWhiteConfig(req, cb) {
        return this.request("DescribeLicenseWhiteConfig", req, cb);
    }
    /**
     * 查询恶意请求白名单列表
     */
    async DescribeMaliciousRequestWhiteList(req, cb) {
        return this.request("DescribeMaliciousRequestWhiteList", req, cb);
    }
    /**
     * 网络攻击top5数据列表
     */
    async DescribeAttackTop(req, cb) {
        return this.request("DescribeAttackTop", req, cb);
    }
    /**
     * 根据基线策略id查询策略详情
     */
    async DescribeBaselineStrategyDetail(req, cb) {
        return this.request("DescribeBaselineStrategyDetail", req, cb);
    }
    /**
     * 更改基线策略设置
     */
    async ModifyBaselinePolicy(req, cb) {
        return this.request("ModifyBaselinePolicy", req, cb);
    }
    /**
     * 获取Jar包详情
     */
    async DescribeAssetJarInfo(req, cb) {
        return this.request("DescribeAssetJarInfo", req, cb);
    }
    /**
     * 删除基线策略配置
     */
    async DeleteBaselinePolicy(req, cb) {
        return this.request("DeleteBaselinePolicy", req, cb);
    }
    /**
     * DescribeScanTaskStatus 查询机器扫描状态列表用于过滤筛选
     */
    async DescribeScanTaskStatus(req, cb) {
        return this.request("DescribeScanTaskStatus", req, cb);
    }
    /**
     * CreateLicenseOrder 该接口可以创建专业版/旗舰版订单
支持预付费后付费创建
后付费订单直接创建成功
预付费订单仅下单不支付,需要调用计费支付接口进行支付
     */
    async CreateLicenseOrder(req, cb) {
        return this.request("CreateLicenseOrder", req, cb);
    }
    /**
     * 大屏可视化主机区域选项列表
     */
    async DescribeScreenMachineRegions(req, cb) {
        return this.request("DescribeScreenMachineRegions", req, cb);
    }
    /**
     * 获取忽略规则主机列表
     */
    async DescribeBaselineHostIgnoreList(req, cb) {
        return this.request("DescribeBaselineHostIgnoreList", req, cb);
    }
    /**
     * 新增或编辑标签
     */
    async EditTags(req, cb) {
        return this.request("EditTags", req, cb);
    }
    /**
     * 查询漏洞防御白名单
     */
    async DescribeRaspRules(req, cb) {
        return this.request("DescribeRaspRules", req, cb);
    }
    /**
     * 创建日志下载任务
     */
    async CreateLogExport(req, cb) {
        return this.request("CreateLogExport", req, cb);
    }
    /**
     * 获取异地登录白名单合并后列表
     */
    async DescribeLoginWhiteCombinedList(req, cb) {
        return this.request("DescribeLoginWhiteCombinedList", req, cb);
    }
    /**
     * 本接口 (ExportNonlocalLoginPlaces) 用于导出异地登录事件记录CSV文件。
     */
    async ExportNonlocalLoginPlaces(req, cb) {
        return this.request("ExportNonlocalLoginPlaces", req, cb);
    }
    /**
     * 获取待处理风险文件数+影响服务器数+是否试用检测+最近检测时间
     */
    async DescribeServersAndRiskAndFirstInfo(req, cb) {
        return this.request("DescribeServersAndRiskAndFirstInfo", req, cb);
    }
    /**
     * 获取软件关联进程列表
     */
    async DescribeAssetAppProcessList(req, cb) {
        return this.request("DescribeAssetAppProcessList", req, cb);
    }
    /**
     * 同步机器信息
     */
    async SyncMachines(req, cb) {
        return this.request("SyncMachines", req, cb);
    }
    /**
     * 获取反弹Shell列表
     */
    async DescribeReverseShellEvents(req, cb) {
        return this.request("DescribeReverseShellEvents", req, cb);
    }
    /**
     * 查询定时扫描配置
     */
    async DescribeMalwareTimingScanSetting(req, cb) {
        return this.request("DescribeMalwareTimingScanSetting", req, cb);
    }
    /**
     * 删除恶意请求策略
     */
    async DeleteRiskDnsPolicy(req, cb) {
        return this.request("DeleteRiskDnsPolicy", req, cb);
    }
    /**
     * 导出漏洞信息，包括影响主机列表，组件信息
     */
    async ExportVulInfo(req, cb) {
        return this.request("ExportVulInfo", req, cb);
    }
    /**
     * 导出资产管理数据库列表
     */
    async ExportAssetDatabaseList(req, cb) {
        return this.request("ExportAssetDatabaseList", req, cb);
    }
    /**
     * 导出核心文件监控规则
     */
    async ExportFileTamperRules(req, cb) {
        return this.request("ExportFileTamperRules", req, cb);
    }
    /**
     * 修改告警设置
     */
    async ModifyWarningSetting(req, cb) {
        return this.request("ModifyWarningSetting", req, cb);
    }
    /**
     * 大屏可视化主机安全防护引擎介绍
     */
    async DescribeScreenProtectionCnt(req, cb) {
        return this.request("DescribeScreenProtectionCnt", req, cb);
    }
    /**
     * 新增或修改高危命令策略
     */
    async ModifyBashPolicy(req, cb) {
        return this.request("ModifyBashPolicy", req, cb);
    }
    /**
     * 查询安全通知信息
     */
    async DescribeSafeInfo(req, cb) {
        return this.request("DescribeSafeInfo", req, cb);
    }
    /**
     * 导出Web站点列表
     */
    async ExportAssetWebLocationList(req, cb) {
        return this.request("ExportAssetWebLocationList", req, cb);
    }
    /**
     * 查询主机快照备份列表
     */
    async DescribeRansomDefenseBackupList(req, cb) {
        return this.request("DescribeRansomDefenseBackupList", req, cb);
    }
    /**
     * 获取基线检测概览
     */
    async DescribeBaselineDetectOverview(req, cb) {
        return this.request("DescribeBaselineDetectOverview", req, cb);
    }
    /**
     * 获取基线检测项的列表
     */
    async DescribeBaselineItemDetectList(req, cb) {
        return this.request("DescribeBaselineItemDetectList", req, cb);
    }
    /**
     * 本接口 (DescribeMachinesSimple) 用于获取主机列表。
     */
    async DescribeMachinesSimple(req, cb) {
        return this.request("DescribeMachinesSimple", req, cb);
    }
    /**
     * 获取策略详情
     */
    async DescribeRansomDefenseStrategyDetail(req, cb) {
        return this.request("DescribeRansomDefenseStrategyDetail", req, cb);
    }
    /**
     * 导出本次漏洞检测Excel
     */
    async ExportVulDetectionExcel(req, cb) {
        return this.request("ExportVulDetectionExcel", req, cb);
    }
    /**
     * 获取阻断地域
     */
    async DescribeBanRegions(req, cb) {
        return this.request("DescribeBanRegions", req, cb);
    }
    /**
     * 删除恶意请求白名单
     */
    async DeleteMaliciousRequestWhiteList(req, cb) {
        return this.request("DeleteMaliciousRequestWhiteList", req, cb);
    }
    /**
     * 添加阻断白名单列表
     */
    async CreateBanWhiteList(req, cb) {
        return this.request("CreateBanWhiteList", req, cb);
    }
    /**
     * 漏洞详情，带CVSS版本
     */
    async DescribeVulInfoCvss(req, cb) {
        return this.request("DescribeVulInfoCvss", req, cb);
    }
    /**
     * 用于查询用户自定义配置
     */
    async DescribeUsersConfig(req, cb) {
        return this.request("DescribeUsersConfig", req, cb);
    }
    /**
     * 修改日志投递状态信息
     */
    async ModifyLogKafkaState(req, cb) {
        return this.request("ModifyLogKafkaState", req, cb);
    }
    /**
     * 导出java内存马事件列表
     */
    async ExportJavaMemShells(req, cb) {
        return this.request("ExportJavaMemShells", req, cb);
    }
    /**
     * 获取基线弱口令列表
     */
    async DescribeBaselineWeakPasswordList(req, cb) {
        return this.request("DescribeBaselineWeakPasswordList", req, cb);
    }
    /**
     * 查询推荐购买防护核数
     */
    async DescribeRecommendedProtectCpu(req, cb) {
        return this.request("DescribeRecommendedProtectCpu", req, cb);
    }
    /**
     * 获取基线检测项信息
     */
    async DescribeBaselineItemInfo(req, cb) {
        return this.request("DescribeBaselineItemInfo", req, cb);
    }
    /**
     * 查询资产管理启动服务列表
     */
    async DescribeAssetInitServiceList(req, cb) {
        return this.request("DescribeAssetInitServiceList", req, cb);
    }
    /**
     * 导出网络攻击事件
     */
    async ExportAttackEvents(req, cb) {
        return this.request("ExportAttackEvents", req, cb);
    }
    /**
     * 获取基线修复列表
     */
    async DescribeBaselineFixList(req, cb) {
        return this.request("DescribeBaselineFixList", req, cb);
    }
    /**
     * 查询告警机器范围配置
     */
    async DescribeWarningHostConfig(req, cb) {
        return this.request("DescribeWarningHostConfig", req, cb);
    }
    /**
     * 修改机器清理配置
     */
    async ModifyMachineAutoClearConfig(req, cb) {
        return this.request("ModifyMachineAutoClearConfig", req, cb);
    }
    /**
     * 漏洞管理-重新检测接口
     */
    async ScanVulAgain(req, cb) {
        return this.request("ScanVulAgain", req, cb);
    }
    /**
     * 网站防篡改-查询网页防篡改服务器购买信息及服务器信息
     */
    async DescribeWebPageServiceInfo(req, cb) {
        return this.request("DescribeWebPageServiceInfo", req, cb);
    }
    /**
     * 获取漏洞防御事件列表
     */
    async DescribeVulDefenceEvent(req, cb) {
        return this.request("DescribeVulDefenceEvent", req, cb);
    }
    /**
     * 更改恶意请求策略状态
     */
    async ModifyRiskDnsPolicyStatus(req, cb) {
        return this.request("ModifyRiskDnsPolicyStatus", req, cb);
    }
    /**
     * 获取漏洞列表数据
     */
    async DescribeVulList(req, cb) {
        return this.request("DescribeVulList", req, cb);
    }
    /**
     * 修改企微机器人规则状态
     */
    async ModifyWebHookRuleStatus(req, cb) {
        return this.request("ModifyWebHookRuleStatus", req, cb);
    }
    /**
     * 导出基线列表
     */
    async ExportBaselineList(req, cb) {
        return this.request("ExportBaselineList", req, cb);
    }
    /**
     * 查询某个监控规则的详情
     */
    async DescribeFileTamperRuleInfo(req, cb) {
        return this.request("DescribeFileTamperRuleInfo", req, cb);
    }
    /**
     * 基线检测与基线重新检测接口
     */
    async ScanBaseline(req, cb) {
        return this.request("ScanBaseline", req, cb);
    }
    /**
     * 修改日志存储配置
     */
    async ModifyLogStorageConfig(req, cb) {
        return this.request("ModifyLogStorageConfig", req, cb);
    }
    /**
     * 编辑、新增核心文件监控规则
     */
    async ModifyFileTamperRule(req, cb) {
        return this.request("ModifyFileTamperRule", req, cb);
    }
    /**
     * 获取木马文件下载地址
     */
    async DescribeMalwareFile(req, cb) {
        return this.request("DescribeMalwareFile", req, cb);
    }
    /**
     * 获取恶意请求事件列表
     */
    async DescribeRiskDnsEventList(req, cb) {
        return this.request("DescribeRiskDnsEventList", req, cb);
    }
    /**
     * 根据Ids删除本地提权
     */
    async DeletePrivilegeEvents(req, cb) {
        return this.request("DeletePrivilegeEvents", req, cb);
    }
    /**
     * 查询告警策略
     */
    async DescribeWebHookPolicy(req, cb) {
        return this.request("DescribeWebHookPolicy", req, cb);
    }
    /**
     * 修改防勒索事件状态
     */
    async ModifyRansomDefenseEventsStatus(req, cb) {
        return this.request("ModifyRansomDefenseEventsStatus", req, cb);
    }
    /**
     * 查询资产管理计划任务列表
     */
    async DescribeAssetPlanTaskList(req, cb) {
        return this.request("DescribeAssetPlanTaskList", req, cb);
    }
    /**
     * 按分页形式展示网络攻击检测事件列表
     */
    async DescribeAttackEvents(req, cb) {
        return this.request("DescribeAttackEvents", req, cb);
    }
    /**
     * 获取资产管理Web应用插件列表
     */
    async DescribeAssetWebAppPluginList(req, cb) {
        return this.request("DescribeAssetWebAppPluginList", req, cb);
    }
    /**
     * 查询合并后白名单机器列表
     */
    async DescribeLoginWhiteHostList(req, cb) {
        return this.request("DescribeLoginWhiteHostList", req, cb);
    }
    /**
     * 获取历史搜索记录
     */
    async DescribeSearchLogs(req, cb) {
        return this.request("DescribeSearchLogs", req, cb);
    }
    /**
     * 根据策略id查询基线检测项TOP
     */
    async DescribeBaselineTop(req, cb) {
        return this.request("DescribeBaselineTop", req, cb);
    }
    /**
     * 日志快速分析统计
     */
    async DescribeFastAnalysis(req, cb) {
        return this.request("DescribeFastAnalysis", req, cb);
    }
    /**
     * 查询主机安全授权试用报告(仅限控制台申领的)
     */
    async DescribeTrialReport(req, cb) {
        return this.request("DescribeTrialReport", req, cb);
    }
    /**
     * 此接口（DescribeUsualLoginPlaces）用于查询常用登录地。
     */
    async DescribeUsualLoginPlaces(req, cb) {
        return this.request("DescribeUsualLoginPlaces", req, cb);
    }
    /**
     * 导出核心文件事件
     */
    async ExportFileTamperEvents(req, cb) {
        return this.request("ExportFileTamperEvents", req, cb);
    }
    /**
     * 批量添加异地登录白名单
     */
    async AddLoginWhiteLists(req, cb) {
        return this.request("AddLoginWhiteLists", req, cb);
    }
    /**
     * 导出网页防篡改防护目录列表
     */
    async ExportProtectDirList(req, cb) {
        return this.request("ExportProtectDirList", req, cb);
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
     * 查询恶意请求详情
     */
    async DescribeRiskDnsInfo(req, cb) {
        return this.request("DescribeRiskDnsInfo", req, cb);
    }
    /**
     * 导出防勒索事件列表
     */
    async ExportRansomDefenseEventsList(req, cb) {
        return this.request("ExportRansomDefenseEventsList", req, cb);
    }
    /**
     * 新增或修改企微机器人规则
     */
    async ModifyWebHookRule(req, cb) {
        return this.request("ModifyWebHookRule", req, cb);
    }
    /**
     * 获取当前异常插件数
     */
    async DescribeVulDefencePluginExceptionCount(req, cb) {
        return this.request("DescribeVulDefencePluginExceptionCount", req, cb);
    }
    /**
     * 根据检测项id与筛选条件查询忽略检测项影响主机列表信息
     */
    async DescribeIgnoreRuleEffectHostList(req, cb) {
        return this.request("DescribeIgnoreRuleEffectHostList", req, cb);
    }
    /**
     * 查询应用列表
     */
    async DescribeAssetAppList(req, cb) {
        return this.request("DescribeAssetAppList", req, cb);
    }
    /**
     * 获取kafka投递信息
     */
    async DescribeLogKafkaDeliverInfo(req, cb) {
        return this.request("DescribeLogKafkaDeliverInfo", req, cb);
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
     * 删除企微机器人规则
     */
    async DeleteWebHookRule(req, cb) {
        return this.request("DeleteWebHookRule", req, cb);
    }
    /**
     * 添加检索模板
     */
    async CreateSearchTemplate(req, cb) {
        return this.request("CreateSearchTemplate", req, cb);
    }
    /**
     * 导出已忽略基线检测项信息
     */
    async ExportIgnoreBaselineRule(req, cb) {
        return this.request("ExportIgnoreBaselineRule", req, cb);
    }
    /**
     * 本地提权信息详情
     */
    async DescribePrivilegeEventInfo(req, cb) {
        return this.request("DescribePrivilegeEventInfo", req, cb);
    }
    /**
     * 打开入侵检测-恶意文件检测,弹出风险预警内容
     */
    async DescribeMalwareRiskWarning(req, cb) {
        return this.request("DescribeMalwareRiskWarning", req, cb);
    }
    /**
     * 查询基线默认策略列表信息
     */
    async DescribeBaselineDefaultStrategyList(req, cb) {
        return this.request("DescribeBaselineDefaultStrategyList", req, cb);
    }
    /**
     * 提交漏洞修护
     */
    async CreateVulFix(req, cb) {
        return this.request("CreateVulFix", req, cb);
    }
    /**
     * 获取指定标签关联的服务器信息
     */
    async DescribeTagMachines(req, cb) {
        return this.request("DescribeTagMachines", req, cb);
    }
    /**
     * 新增或修改本地提权规则（支持多服务器选择）
     */
    async EditPrivilegeRules(req, cb) {
        return this.request("EditPrivilegeRules", req, cb);
    }
    /**
     * 获取异常进程列表
     */
    async DescribeRiskProcessEvents(req, cb) {
        return this.request("DescribeRiskProcessEvents", req, cb);
    }
    /**
     * 专家服务-可用订单详情
     */
    async DescribeAvailableExpertServiceDetail(req, cb) {
        return this.request("DescribeAvailableExpertServiceDetail", req, cb);
    }
    /**
     * 根据事件表名和id查询告警事件详情
     */
    async DescribeEventByTable(req, cb) {
        return this.request("DescribeEventByTable", req, cb);
    }
    /**
     * 对授权管理-订单列表内已过期的订单进行删除.(删除后的订单不在统计范畴内)
     */
    async DeleteLicenseRecord(req, cb) {
        return this.request("DeleteLicenseRecord", req, cb);
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
     * 获取所有数据库数量
     */
    async DescribeAssetDatabaseCount(req, cb) {
        return this.request("DescribeAssetDatabaseCount", req, cb);
    }
    /**
     * 获取异地登录白名单列表
     */
    async DescribeLoginWhiteList(req, cb) {
        return this.request("DescribeLoginWhiteList", req, cb);
    }
    /**
     * 获取日志直方图信息
     */
    async DescribeLogHistogram(req, cb) {
        return this.request("DescribeLogHistogram", req, cb);
    }
    /**
     * 查询主机相关核心文件监控规则列表
     */
    async DescribeMachineFileTamperRules(req, cb) {
        return this.request("DescribeMachineFileTamperRules", req, cb);
    }
    /**
     * 编辑《主机安全-按量计费》授权订单
     */
    async ModifyLicenseOrder(req, cb) {
        return this.request("ModifyLicenseOrder", req, cb);
    }
    /**
     * 获取公网接入代理安装命令
     */
    async DescribePublicProxyInstallCommand(req, cb) {
        return this.request("DescribePublicProxyInstallCommand", req, cb);
    }
    /**
     * 漏洞数量等级分布统计
     */
    async DescribeVulLevelCount(req, cb) {
        return this.request("DescribeVulLevelCount", req, cb);
    }
    /**
     * 导出账号列表
     */
    async ExportAssetUserList(req, cb) {
        return this.request("ExportAssetUserList", req, cb);
    }
    /**
     * 用于网页防篡改获取区域主机列表。
     */
    async DescribeMachineList(req, cb) {
        return this.request("DescribeMachineList", req, cb);
    }
    /**
     * 获取登录审计列表
     */
    async DescribeHostLoginList(req, cb) {
        return this.request("DescribeHostLoginList", req, cb);
    }
    /**
     * 根据基线策略id更新策略信息
     */
    async UpdateBaselineStrategy(req, cb) {
        return this.request("UpdateBaselineStrategy", req, cb);
    }
    /**
     * 取消漏洞忽略
     */
    async CancelIgnoreVul(req, cb) {
        return this.request("CancelIgnoreVul", req, cb);
    }
    /**
     * 入侵检测获取木马列表
     */
    async DescribeMalWareList(req, cb) {
        return this.request("DescribeMalWareList", req, cb);
    }
    /**
     * 本接口 (DescribeOpenPortStatistics) 用于获取端口统计列表。
     */
    async DescribeOpenPortStatistics(req, cb) {
        return this.request("DescribeOpenPortStatistics", req, cb);
    }
    /**
     * 修改爆破阻断模式
     */
    async ModifyBanMode(req, cb) {
        return this.request("ModifyBanMode", req, cb);
    }
    /**
     * 获取专线agent安装命令，包含token
     */
    async DescribeDirectConnectInstallCommand(req, cb) {
        return this.request("DescribeDirectConnectInstallCommand", req, cb);
    }
    /**
     * 获取企微机器人规则列表
     */
    async DescribeWebHookRules(req, cb) {
        return this.request("DescribeWebHookRules", req, cb);
    }
    /**
     * 获取基线策略列表
     */
    async DescribeBaselinePolicyList(req, cb) {
        return this.request("DescribeBaselinePolicyList", req, cb);
    }
    /**
     * 获取所有Web应用数量
     */
    async DescribeAssetWebAppCount(req, cb) {
        return this.request("DescribeAssetWebAppCount", req, cb);
    }
    /**
     * 修改指定日志类别投递配置、开关
     */
    async ModifyLogKafkaDeliverType(req, cb) {
        return this.request("ModifyLogKafkaDeliverType", req, cb);
    }
    /**
     * 查询高危命令事件详情
     */
    async DescribeBashEventsInfo(req, cb) {
        return this.request("DescribeBashEventsInfo", req, cb);
    }
    /**
     * 查询告警点id列表
     */
    async DescribeAlarmVertexId(req, cb) {
        return this.request("DescribeAlarmVertexId", req, cb);
    }
    /**
     * CveId查询漏洞详情
     */
    async DescribeVulCveIdInfo(req, cb) {
        return this.request("DescribeVulCveIdInfo", req, cb);
    }
    /**
     * 导出主机快照备份列表
     */
    async ExportRansomDefenseBackupList(req, cb) {
        return this.request("ExportRansomDefenseBackupList", req, cb);
    }
    /**
     * 网络攻击数据统计
     */
    async DescribeAttackStatistics(req, cb) {
        return this.request("DescribeAttackStatistics", req, cb);
    }
    /**
     * 获取主机账号Key列表
     */
    async DescribeAssetUserKeyList(req, cb) {
        return this.request("DescribeAssetUserKeyList", req, cb);
    }
    /**
     * 查询木马扫描进度
     */
    async DescribeScanMalwareSchedule(req, cb) {
        return this.request("DescribeScanMalwareSchedule", req, cb);
    }
    /**
     * 编辑木马白名单
     */
    async ModifyMalwareWhiteList(req, cb) {
        return this.request("ModifyMalwareWhiteList", req, cb);
    }
    /**
     * 获取企微机器人规则详情
     */
    async DescribeWebHookRule(req, cb) {
        return this.request("DescribeWebHookRule", req, cb);
    }
    /**
     * 修复失败时单独对某一个主机修复漏洞
     */
    async RetryVulFix(req, cb) {
        return this.request("RetryVulFix", req, cb);
    }
    /**
     * 删除高危命令规则
     */
    async DeleteBashRules(req, cb) {
        return this.request("DeleteBashRules", req, cb);
    }
    /**
     * 添加漏洞防御白名单
     */
    async ModifyRaspRules(req, cb) {
        return this.request("ModifyRaspRules", req, cb);
    }
    /**
     * 快照创建失败时可以重试创建快照并且自动进行漏洞修复
     */
    async RetryCreateSnapshot(req, cb) {
        return this.request("RetryCreateSnapshot", req, cb);
    }
    /**
     * 获取主机最近趋势情况
     */
    async DescribeAssetRecentMachineInfo(req, cb) {
        return this.request("DescribeAssetRecentMachineInfo", req, cb);
    }
    /**
     * 漏洞影响组件列表
     */
    async DescribeVulEffectModules(req, cb) {
        return this.request("DescribeVulEffectModules", req, cb);
    }
    /**
     * 漏洞top统计
     */
    async DescribeVulTop(req, cb) {
        return this.request("DescribeVulTop", req, cb);
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
     * 获取安全概览相关事件统计数据接口
     */
    async DescribeSecurityEventsCnt(req, cb) {
        return this.request("DescribeSecurityEventsCnt", req, cb);
    }
    /**
     * 删除木马白名单
     */
    async DeleteMalwareWhiteList(req, cb) {
        return this.request("DeleteMalwareWhiteList", req, cb);
    }
    /**
     * 同步基线检测进度概要
     */
    async SyncBaselineDetectSummary(req, cb) {
        return this.request("SyncBaselineDetectSummary", req, cb);
    }
    /**
     * 查询授权绑定任务的进度
     */
    async DescribeLicenseBindSchedule(req, cb) {
        return this.request("DescribeLicenseBindSchedule", req, cb);
    }
    /**
     * 编辑网络攻击白名单
     */
    async ModifyNetAttackWhiteList(req, cb) {
        return this.request("ModifyNetAttackWhiteList", req, cb);
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
     * 查询基线列表信息
     */
    async DescribeBaselineList(req, cb) {
        return this.request("DescribeBaselineList", req, cb);
    }
    /**
     * 获取资产管理主机资源详细信息
     */
    async DescribeAssetMachineDetail(req, cb) {
        return this.request("DescribeAssetMachineDetail", req, cb);
    }
    /**
     * 获取服务器风险top列表
     */
    async DescribeVulHostTop(req, cb) {
        return this.request("DescribeVulHostTop", req, cb);
    }
    /**
     * 对订单属性编辑
     */
    async ModifyOrderAttribute(req, cb) {
        return this.request("ModifyOrderAttribute", req, cb);
    }
    /**
     * 获取用户当前灰度配置
     */
    async DescribeABTestConfig(req, cb) {
        return this.request("DescribeABTestConfig", req, cb);
    }
    /**
     * 获取资产管理Web框架列表
     */
    async DescribeAssetWebFrameList(req, cb) {
        return this.request("DescribeAssetWebFrameList", req, cb);
    }
    /**
     * 查询资产管理内核模块列表
     */
    async DescribeAssetCoreModuleList(req, cb) {
        return this.request("DescribeAssetCoreModuleList", req, cb);
    }
    /**
     * 定时扫描设置
     */
    async ModifyMalwareTimingScanSettings(req, cb) {
        return this.request("ModifyMalwareTimingScanSettings", req, cb);
    }
    /**
     * 添加恶意请求白名单
     */
    async CreateMaliciousRequestWhiteList(req, cb) {
        return this.request("CreateMaliciousRequestWhiteList", req, cb);
    }
    /**
     * 获取所有Web服务数量
     */
    async DescribeAssetWebServiceCount(req, cb) {
        return this.request("DescribeAssetWebServiceCount", req, cb);
    }
    /**
     * 更改或新增弱口令
     */
    async ModifyBaselineWeakPassword(req, cb) {
        return this.request("ModifyBaselineWeakPassword", req, cb);
    }
    /**
     * 大屏可视化防趋势接口
     */
    async DescribeScreenDefenseTrends(req, cb) {
        return this.request("DescribeScreenDefenseTrends", req, cb);
    }
    /**
     * 设置高危命令事件状态
     */
    async SetBashEventsStatus(req, cb) {
        return this.request("SetBashEventsStatus", req, cb);
    }
    /**
     * 根据策略id修改策略可用状态
     */
    async ChangeStrategyEnableStatus(req, cb) {
        return this.request("ChangeStrategyEnableStatus", req, cb);
    }
    /**
     * 网页防篡改防护目录列表
     */
    async DescribeProtectDirList(req, cb) {
        return this.request("DescribeProtectDirList", req, cb);
    }
    /**
     * 专家服务-专家服务订单列表
     */
    async DescribeExpertServiceOrderList(req, cb) {
        return this.request("DescribeExpertServiceOrderList", req, cb);
    }
    /**
     * 检查日志投递kafka连通性
     */
    async CheckLogKafkaConnectionState(req, cb) {
        return this.request("CheckLogKafkaConnectionState", req, cb);
    }
    /**
     * 获取各主机漏洞防御插件状态
     */
    async DescribeVulDefencePluginStatus(req, cb) {
        return this.request("DescribeVulDefencePluginStatus", req, cb);
    }
    /**
     * 获取所有主机标签
     */
    async DescribeTags(req, cb) {
        return this.request("DescribeTags", req, cb);
    }
    /**
     * 获取单台主机漏洞防御插件信息
     */
    async DescribeVulDefencePluginDetail(req, cb) {
        return this.request("DescribeVulDefencePluginDetail", req, cb);
    }
    /**
     * 更改基线检测规则
     */
    async ModifyBaselineRule(req, cb) {
        return this.request("ModifyBaselineRule", req, cb);
    }
    /**
     * 网站防篡改防护设置开关
     */
    async ModifyWebPageProtectSwitch(req, cb) {
        return this.request("ModifyWebPageProtectSwitch", req, cb);
    }
    /**
     * 修改漏洞防御事件状态（修复漏洞通过其他接口实现）
     */
    async ModifyVulDefenceEventStatus(req, cb) {
        return this.request("ModifyVulDefenceEventStatus", req, cb);
    }
    /**
     * 获取本地存储数据
     */
    async GetLocalStorageItem(req, cb) {
        return this.request("GetLocalStorageItem", req, cb);
    }
    /**
     * 导出备份详情列表
     */
    async ExportRansomDefenseMachineList(req, cb) {
        return this.request("ExportRansomDefenseMachineList", req, cb);
    }
    /**
     * 查询防勒索事件列表
     */
    async DescribeRansomDefenseEventsList(req, cb) {
        return this.request("DescribeRansomDefenseEventsList", req, cb);
    }
    /**
     * 导出资产管理进程列表
     */
    async ExportAssetProcessInfoList(req, cb) {
        return this.request("ExportAssetProcessInfoList", req, cb);
    }
    /**
     * 获取主机绑定策略列表
     */
    async DescribeRansomDefenseMachineStrategyInfo(req, cb) {
        return this.request("DescribeRansomDefenseMachineStrategyInfo", req, cb);
    }
    /**
     * 获取高危命令列表
     */
    async DescribeBashEvents(req, cb) {
        return this.request("DescribeBashEvents", req, cb);
    }
    /**
     * 导出漏洞检测报告。
     */
    async ExportVulDetectionReport(req, cb) {
        return this.request("ExportVulDetectionReport", req, cb);
    }
    /**
     * 修改告警机器范围配置
     */
    async ModifyWarningHostConfig(req, cb) {
        return this.request("ModifyWarningHostConfig", req, cb);
    }
    /**
     * 获取用户所有授权订单信息
     */
    async DescribeLicenseList(req, cb) {
        return this.request("DescribeLicenseList", req, cb);
    }
    /**
     * 检测基线
     */
    async StartBaselineDetect(req, cb) {
        return this.request("StartBaselineDetect", req, cb);
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
     * 删除基线规则
     */
    async DeleteBaselineRule(req, cb) {
        return this.request("DeleteBaselineRule", req, cb);
    }
    /**
     * 查询指定告警接收人的关联策略使用信息
     */
    async DescribeWebHookReceiverUsage(req, cb) {
        return this.request("DescribeWebHookReceiverUsage", req, cb);
    }
    /**
     * 更新恶意请求白名单
     */
    async ModifyMaliciousRequestWhiteList(req, cb) {
        return this.request("ModifyMaliciousRequestWhiteList", req, cb);
    }
    /**
     * 删除基线忽略规则
     */
    async DeleteBaselineRuleIgnore(req, cb) {
        return this.request("DeleteBaselineRuleIgnore", req, cb);
    }
    /**
     * 根据检测项id或事件id批量忽略事件或取消忽略
     */
    async ChangeRuleEventsIgnoreStatus(req, cb) {
        return this.request("ChangeRuleEventsIgnoreStatus", req, cb);
    }
    /**
     * 防勒索快照回滚
     */
    async RansomDefenseRollback(req, cb) {
        return this.request("RansomDefenseRollback", req, cb);
    }
    /**
     * 获取资产管理系统安装包列表
     */
    async DescribeAssetSystemPackageList(req, cb) {
        return this.request("DescribeAssetSystemPackageList", req, cb);
    }
    /**
     * 安全播报列表页
     */
    async DescribeSecurityBroadcasts(req, cb) {
        return this.request("DescribeSecurityBroadcasts", req, cb);
    }
    /**
     * 获取资产指纹类型列表
     */
    async DescribeAssetTypes(req, cb) {
        return this.request("DescribeAssetTypes", req, cb);
    }
    /**
     * 获取用户漏洞所有标签列表
     */
    async DescribeVulLabels(req, cb) {
        return this.request("DescribeVulLabels", req, cb);
    }
    /**
     * 停止基线检测
     */
    async StopBaselineDetect(req, cb) {
        return this.request("StopBaselineDetect", req, cb);
    }
    /**
     * 获取高危命令规则列表
     */
    async DescribeBashRules(req, cb) {
        return this.request("DescribeBashRules", req, cb);
    }
    /**
     * 获取主机磁盘分区列表
     */
    async DescribeAssetDiskList(req, cb) {
        return this.request("DescribeAssetDiskList", req, cb);
    }
    /**
     * 修改漏洞防御插件设置
1）新增主机自动加入，scope为1，quuids为空
2）全量旗舰版不自动加入，scope为0，quuids为当前quuid列表，
3）给定quuid列表，scope为0，quuids为用户选择quuid
     */
    async ModifyVulDefenceSetting(req, cb) {
        return this.request("ModifyVulDefenceSetting", req, cb);
    }
    /**
     * 导出漏洞防御事件
     */
    async ExportVulDefenceEvent(req, cb) {
        return this.request("ExportVulDefenceEvent", req, cb);
    }
    /**
     * 同步资产扫描信息
     */
    async SyncAssetScan(req, cb) {
        return this.request("SyncAssetScan", req, cb);
    }
    /**
     * DescribeScanState 该接口能查询对应模块正在进行的扫描任务状态
     */
    async DescribeScanState(req, cb) {
        return this.request("DescribeScanState", req, cb);
    }
    /**
     * DeleteScanTask 该接口可以对指定类型的扫描任务进行停止扫描;
     */
    async DeleteScanTask(req, cb) {
        return this.request("DeleteScanTask", req, cb);
    }
    /**
     * 用于创建/修改用户自定义配置
     */
    async ModifyUsersConfig(req, cb) {
        return this.request("ModifyUsersConfig", req, cb);
    }
    /**
     * 新增或修改告警策略
     */
    async ModifyWebHookPolicy(req, cb) {
        return this.request("ModifyWebHookPolicy", req, cb);
    }
    /**
     * 删除全部java内存马事件
     */
    async DeleteAllJavaMemShells(req, cb) {
        return this.request("DeleteAllJavaMemShells", req, cb);
    }
    /**
     * 获取基线项检测结果列表
     */
    async DescribeBaselineItemList(req, cb) {
        return this.request("DescribeBaselineItemList", req, cb);
    }
    /**
     * 获取高危命令策略列表
     */
    async DescribeBashPolicies(req, cb) {
        return this.request("DescribeBashPolicies", req, cb);
    }
    /**
     * 查询防勒索策略绑定机器列表
     */
    async DescribeRansomDefenseStrategyMachines(req, cb) {
        return this.request("DescribeRansomDefenseStrategyMachines", req, cb);
    }
    /**
     * 查询日志检索服务信息
     */
    async DescribeHistoryService(req, cb) {
        return this.request("DescribeHistoryService", req, cb);
    }
    /**
     * 漏洞管理模块，获取近日指定类型的漏洞数量和主机数量
     */
    async DescribeVulCountByDates(req, cb) {
        return this.request("DescribeVulCountByDates", req, cb);
    }
    /**
     * 导出漏洞影响主机列表
     */
    async ExportVulEffectHostList(req, cb) {
        return this.request("ExportVulEffectHostList", req, cb);
    }
    /**
     * 获取漏洞库列表
     */
    async DescribeVulStoreList(req, cb) {
        return this.request("DescribeVulStoreList", req, cb);
    }
    /**
     * 获取告警点所在事件的所有节点信息
     */
    async DescribeAlarmIncidentNodes(req, cb) {
        return this.request("DescribeAlarmIncidentNodes", req, cb);
    }
    /**
     * 大屏可视化获取安全概览相关事件统计数据接口
     */
    async DescribeScreenEventsCnt(req, cb) {
        return this.request("DescribeScreenEventsCnt", req, cb);
    }
    /**
     * 获取所有资源数量：主机、账号、端口、进程、软件、数据库、Web应用、Web框架、Web服务、Web站点
     */
    async DescribeAssetTotalCount(req, cb) {
        return this.request("DescribeAssetTotalCount", req, cb);
    }
    /**
     * 获取全网热点漏洞
     */
    async DescribeHotVulTop(req, cb) {
        return this.request("DescribeHotVulTop", req, cb);
    }
    /**
     * 删除基线弱口令
     */
    async DeleteBaselineWeakPassword(req, cb) {
        return this.request("DeleteBaselineWeakPassword", req, cb);
    }
    /**
     * 本接口 (DeleteNonlocalLoginPlaces) 用于删除异地登录记录。
     */
    async DeleteNonlocalLoginPlaces(req, cb) {
        return this.request("DeleteNonlocalLoginPlaces", req, cb);
    }
    /**
     * 导出资产管理系统安装包列表
     */
    async ExportAssetSystemPackageList(req, cb) {
        return this.request("ExportAssetSystemPackageList", req, cb);
    }
    /**
     * 编辑反弹Shell规则（支持多服务器选择）
     */
    async EditReverseShellRules(req, cb) {
        return this.request("EditReverseShellRules", req, cb);
    }
    /**
     * 删除告警策略
     */
    async DeleteWebHookPolicy(req, cb) {
        return this.request("DeleteWebHookPolicy", req, cb);
    }
    /**
     * 导出本地提权事件
     */
    async ExportPrivilegeEvents(req, cb) {
        return this.request("ExportPrivilegeEvents", req, cb);
    }
    /**
     * 入侵检测所有事件的状态，包括：文件查杀，异常登录，密码破解，高危命令，反弹shell，本地提取
     */
    async ModifyRiskEventsStatus(req, cb) {
        return this.request("ModifyRiskEventsStatus", req, cb);
    }
    /**
     * 获取主机账号详情
     */
    async DescribeAssetUserInfo(req, cb) {
        return this.request("DescribeAssetUserInfo", req, cb);
    }
    /**
     * 删除漏洞防御白名单
     */
    async DeleteRaspRules(req, cb) {
        return this.request("DeleteRaspRules", req, cb);
    }
    /**
     * 本接口 (DeleteMalwares) 用于删除木马记录。
     */
    async DeleteMalwares(req, cb) {
        return this.request("DeleteMalwares", req, cb);
    }
    /**
     * 导出漏洞防御插件事件
     */
    async ExportVulDefencePluginEvent(req, cb) {
        return this.request("ExportVulDefencePluginEvent", req, cb);
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
     * 导出异常进程事件
     */
    async ExportRiskProcessEvents(req, cb) {
        return this.request("ExportRiskProcessEvents", req, cb);
    }
    /**
     * 获取漏洞管理模块指定类型的待处理漏洞数、主机数和非专业版主机数量
     */
    async DescribeUndoVulCounts(req, cb) {
        return this.request("DescribeUndoVulCounts", req, cb);
    }
    /**
     * 获取木马不可隔离的主机
     */
    async DescribeCanNotSeparateMachine(req, cb) {
        return this.request("DescribeCanNotSeparateMachine", req, cb);
    }
    /**
     * 本接口 (ExportBruteAttacks) 用于导出密码破解记录成CSV文件。
     */
    async ExportBruteAttacks(req, cb) {
        return this.request("ExportBruteAttacks", req, cb);
    }
    /**
     * 导出资产管理环境变量列表
     */
    async ExportAssetEnvList(req, cb) {
        return this.request("ExportAssetEnvList", req, cb);
    }
    /**
     * 创建/修改网站防护目录
     */
    async ModifyWebPageProtectDir(req, cb) {
        return this.request("ModifyWebPageProtectDir", req, cb);
    }
    /**
     * 导出风险趋势
     */
    async ExportSecurityTrends(req, cb) {
        return this.request("ExportSecurityTrends", req, cb);
    }
    /**
     * 本接口 (ExportMalwares) 用于导出木马记录CSV文件。
     */
    async ExportMalwares(req, cb) {
        return this.request("ExportMalwares", req, cb);
    }
    /**
     * 核心文件规则状态更新，支持批量删除 关闭
     */
    async ModifyFileTamperRuleStatus(req, cb) {
        return this.request("ModifyFileTamperRuleStatus", req, cb);
    }
    /**
     * 修改阻断白名单列表
     */
    async ModifyBanWhiteList(req, cb) {
        return this.request("ModifyBanWhiteList", req, cb);
    }
    /**
     * 导出篡改事件列表
     */
    async ExportWebPageEventList(req, cb) {
        return this.request("ExportWebPageEventList", req, cb);
    }
    /**
     * 获取基线服务器风险TOP5
     */
    async DescribeBaselineHostRiskTop(req, cb) {
        return this.request("DescribeBaselineHostRiskTop", req, cb);
    }
    /**
     * 导出恶意请求事件列表
     */
    async ExportRiskDnsEventList(req, cb) {
        return this.request("ExportRiskDnsEventList", req, cb);
    }
    /**
     * 导出授权列表对应的绑定信息
     */
    async ExportLicenseDetail(req, cb) {
        return this.request("ExportLicenseDetail", req, cb);
    }
    /**
     * 专家服务-应急响应列表
     */
    async DescribeEmergencyResponseList(req, cb) {
        return this.request("DescribeEmergencyResponseList", req, cb);
    }
    /**
     * 网络攻击趋势数据
     */
    async DescribeAttackTrends(req, cb) {
        return this.request("DescribeAttackTrends", req, cb);
    }
    /**
     * 创建或修改防勒索策略
     */
    async CreateRansomDefenseStrategy(req, cb) {
        return this.request("CreateRansomDefenseStrategy", req, cb);
    }
    /**
     * 大屏可视化紧急通知
     */
    async DescribeScreenEmergentMsg(req, cb) {
        return this.request("DescribeScreenEmergentMsg", req, cb);
    }
    /**
     * 不再提醒爆破阻断提示弹窗
     */
    async StopNoticeBanTips(req, cb) {
        return this.request("StopNoticeBanTips", req, cb);
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
     * 核心文件监控事件列表
     */
    async DescribeFileTamperEvents(req, cb) {
        return this.request("DescribeFileTamperEvents", req, cb);
    }
    /**
     * 设置中心-授权管理 对某个授权批量绑定机器
     */
    async ModifyLicenseBinds(req, cb) {
        return this.request("ModifyLicenseBinds", req, cb);
    }
    /**
     * 获取阻断按钮状态
     */
    async DescribeBanStatus(req, cb) {
        return this.request("DescribeBanStatus", req, cb);
    }
    /**
     * 查询漏洞防御列表
     */
    async DescribeVulDefenceList(req, cb) {
        return this.request("DescribeVulDefenceList", req, cb);
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
     * 获取用户防勒索趋势
     */
    async DescribeRansomDefenseState(req, cb) {
        return this.request("DescribeRansomDefenseState", req, cb);
    }
    /**
     * 导出恶意请求策略列表
     */
    async ExportRiskDnsPolicyList(req, cb) {
        return this.request("ExportRiskDnsPolicyList", req, cb);
    }
    /**
     * 根据策略名查询策略是否存在
     */
    async DescribeStrategyExist(req, cb) {
        return this.request("DescribeStrategyExist", req, cb);
    }
    /**
     * 新购授权自动绑定任务
     */
    async CreateBuyBindTask(req, cb) {
        return this.request("CreateBuyBindTask", req, cb);
    }
    /**
     * 查询日志
     */
    async SearchLog(req, cb) {
        return this.request("SearchLog", req, cb);
    }
    /**
     * 查询主机关联文件监控规则数量
     */
    async DescribeFileTamperRuleCount(req, cb) {
        return this.request("DescribeFileTamperRuleCount", req, cb);
    }
    /**
     * 查询java内存马插件列表
     */
    async DescribeJavaMemShellPluginList(req, cb) {
        return this.request("DescribeJavaMemShellPluginList", req, cb);
    }
    /**
     * 创建应急漏洞扫描任务
     */
    async CreateEmergencyVulScan(req, cb) {
        return this.request("CreateEmergencyVulScan", req, cb);
    }
    /**
     * 产品试用状态查询接口
     */
    async DescribeProductStatus(req, cb) {
        return this.request("DescribeProductStatus", req, cb);
    }
    /**
     * 反弹shell信息详情
     */
    async DescribeReverseShellEventInfo(req, cb) {
        return this.request("DescribeReverseShellEventInfo", req, cb);
    }
    /**
     * 获取阻断白名单列表
     */
    async DescribeBanWhiteList(req, cb) {
        return this.request("DescribeBanWhiteList", req, cb);
    }
    /**
     * 漏洞一键检测
     */
    async ScanVul(req, cb) {
        return this.request("ScanVul", req, cb);
    }
    /**
     * 获取网络攻击威胁类型列表
     */
    async DescribeAttackVulTypeList(req, cb) {
        return this.request("DescribeAttackVulTypeList", req, cb);
    }
    /**
     * 查看漏洞防御最大cpu限制
     */
    async DescribeRaspMaxCpu(req, cb) {
        return this.request("DescribeRaspMaxCpu", req, cb);
    }
    /**
     * 根据基线id查询基线详情接口
     */
    async DescribeBaselineDetail(req, cb) {
        return this.request("DescribeBaselineDetail", req, cb);
    }
    /**
     * 获取所有端口数量
     */
    async DescribeAssetPortCount(req, cb) {
        return this.request("DescribeAssetPortCount", req, cb);
    }
    /**
     * 入侵检测，获取恶意请求列表
     */
    async DescribeRiskDnsList(req, cb) {
        return this.request("DescribeRiskDnsList", req, cb);
    }
    /**
     * 获取病毒库及POC的更新信息
     */
    async DescribeVdbAndPocInfo(req, cb) {
        return this.request("DescribeVdbAndPocInfo", req, cb);
    }
    /**
     * 修改暴力破解规则
     */
    async ModifyBruteAttackRules(req, cb) {
        return this.request("ModifyBruteAttackRules", req, cb);
    }
    /**
     * 查询可筛选操作系统列表.
     */
    async DescribeMachineOsList(req, cb) {
        return this.request("DescribeMachineOsList", req, cb);
    }
    /**
     * 获取漏洞紧急通知
     */
    async DescribeVulEmergentMsg(req, cb) {
        return this.request("DescribeVulEmergentMsg", req, cb);
    }
    /**
     * 授权管理-授权概览信息
     */
    async DescribeLicenseGeneral(req, cb) {
        return this.request("DescribeLicenseGeneral", req, cb);
    }
    /**
     * 查询回滚任务列表
     */
    async DescribeRansomDefenseRollBackTaskList(req, cb) {
        return this.request("DescribeRansomDefenseRollBackTaskList", req, cb);
    }
    /**
     * 导出主机最近趋势情况（最长最近90天）
     */
    async ExportAssetRecentMachineInfo(req, cb) {
        return this.request("ExportAssetRecentMachineInfo", req, cb);
    }
    /**
     * 导出反弹Shell事件
     */
    async ExportReverseShellEvents(req, cb) {
        return this.request("ExportReverseShellEvents", req, cb);
    }
    /**
     * 创建网络攻击白名单
     */
    async CreateNetAttackWhiteList(req, cb) {
        return this.request("CreateNetAttackWhiteList", req, cb);
    }
    /**
     * 更改恶意请求策略
     */
    async ModifyRiskDnsPolicy(req, cb) {
        return this.request("ModifyRiskDnsPolicy", req, cb);
    }
    /**
     * 专家服务-安全管家列表
     */
    async DescribeExpertServiceList(req, cb) {
        return this.request("DescribeExpertServiceList", req, cb);
    }
    /**
     * 获取忽略规则项列表
     */
    async DescribeBaselineItemIgnoreList(req, cb) {
        return this.request("DescribeBaselineItemIgnoreList", req, cb);
    }
    /**
     * 导出防勒索策略列表
     */
    async ExportRansomDefenseStrategyList(req, cb) {
        return this.request("ExportRansomDefenseStrategyList", req, cb);
    }
    /**
     * 漏洞修护-查找主机漏洞修护进度
     */
    async DescribeVulFixStatus(req, cb) {
        return this.request("DescribeVulFixStatus", req, cb);
    }
    /**
     * 获取客户端异常事件
     */
    async DescribeClientException(req, cb) {
        return this.request("DescribeClientException", req, cb);
    }
    /**
     * 获取基线分类列表
     */
    async DescribeBaselineRuleCategoryList(req, cb) {
        return this.request("DescribeBaselineRuleCategoryList", req, cb);
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
     * 查询备份详情列表
     */
    async DescribeRansomDefenseMachineList(req, cb) {
        return this.request("DescribeRansomDefenseMachineList", req, cb);
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
     * 获取木马白名单受影响列表
     */
    async DescribeMalwareWhiteListAffectList(req, cb) {
        return this.request("DescribeMalwareWhiteListAffectList", req, cb);
    }
    /**
     * 本接口 (IgnoreImpactedHosts) 用于忽略漏洞。
     */
    async IgnoreImpactedHosts(req, cb) {
        return this.request("IgnoreImpactedHosts", req, cb);
    }
    /**
     * 漏洞管理-导出漏洞列表
     */
    async ExportVulList(req, cb) {
        return this.request("ExportVulList", req, cb);
    }
    /**
     * 修改java内存马事件状态
     */
    async ModifyJavaMemShellsStatus(req, cb) {
        return this.request("ModifyJavaMemShellsStatus", req, cb);
    }
    /**
     * 导出资产管理计划任务列表
     */
    async ExportAssetPlanTaskList(req, cb) {
        return this.request("ExportAssetPlanTaskList", req, cb);
    }
    /**
     * 查询篡改事件列表
     */
    async DescribeWebPageEventList(req, cb) {
        return this.request("DescribeWebPageEventList", req, cb);
    }
    /**
     * 混合云安装agent token获取
     */
    async DescribeAgentInstallationToken(req, cb) {
        return this.request("DescribeAgentInstallationToken", req, cb);
    }
    /**
     * 获取主机标签Top5
     */
    async DescribeAssetMachineTagTop(req, cb) {
        return this.request("DescribeAssetMachineTagTop", req, cb);
    }
}
exports.Client = Client;
