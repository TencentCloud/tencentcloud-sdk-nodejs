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
 * tcss client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tcss.tencentcloudapi.com", "2020-11-01", clientConfig);
    }
    /**
     * DescribeImageAuthorizedInfo  查询镜像授权信息
     */
    async DescribeImageAuthorizedInfo(req, cb) {
        return this.request("DescribeImageAuthorizedInfo", req, cb);
    }
    /**
     * 查询运行时异常进程事件列表信息导出
     */
    async DescribeAbnormalProcessEventsExport(req, cb) {
        return this.request("DescribeAbnormalProcessEventsExport", req, cb);
    }
    /**
     * 运行时文件扫描超时设置查询
     */
    async DescribeVirusScanTimeoutSetting(req, cb) {
        return this.request("DescribeVirusScanTimeoutSetting", req, cb);
    }
    /**
     * 运行时查询木马概览信息
     */
    async DescribeVirusSummary(req, cb) {
        return this.request("DescribeVirusSummary", req, cb);
    }
    /**
     * 容器安全搜索查询主机列表
     */
    async DescribeAssetHostList(req, cb) {
        return this.request("DescribeAssetHostList", req, cb);
    }
    /**
     * 重新检测选定的检测失败的资产下的所有失败的检测项，返回创建的合规检查任务的ID。
     */
    async ScanComplianceScanFailedAssets(req, cb) {
        return this.request("ScanComplianceScanFailedAssets", req, cb);
    }
    /**
     * 修改运行时访问控制策略的状态，启用或者禁用
     */
    async ModifyAccessControlRuleStatus(req, cb) {
        return this.request("ModifyAccessControlRuleStatus", req, cb);
    }
    /**
     * 查询运行时异常进程策略列表信息导出
     */
    async DescribeAbnormalProcessRulesExport(req, cb) {
        return this.request("DescribeAbnormalProcessRulesExport", req, cb);
    }
    /**
     * ModifyEscapeEventStatus  修改容器逃逸扫描事件状态
     */
    async ModifyEscapeEventStatus(req, cb) {
        return this.request("ModifyEscapeEventStatus", req, cb);
    }
    /**
     * 镜像仓库查看定时任务
     */
    async DescribeImageRegistryTimingScanTask(req, cb) {
        return this.request("DescribeImageRegistryTimingScanTask", req, cb);
    }
    /**
     * 容器安全查询app服务列表
     */
    async DescribeAssetAppServiceList(req, cb) {
        return this.request("DescribeAssetAppServiceList", req, cb);
    }
    /**
     * 搜索查询容器列表
     */
    async DescribeAssetContainerList(req, cb) {
        return this.request("DescribeAssetContainerList", req, cb);
    }
    /**
     * 删除单个镜像仓库详细信息
     */
    async RemoveAssetImageRegistryRegistryDetail(req, cb) {
        return this.request("RemoveAssetImageRegistryRegistryDetail", req, cb);
    }
    /**
     * 下发刷新任务，会刷新资产信息
     */
    async CreateRefreshTask(req, cb) {
        return this.request("CreateRefreshTask", req, cb);
    }
    /**
     * 查询运行时运行时反弹shell白名单列表信息
     */
    async DescribeReverseShellWhiteLists(req, cb) {
        return this.request("DescribeReverseShellWhiteLists", req, cb);
    }
    /**
     * 查询workload类型的影响范围，返回workload列表
     */
    async DescribeAffectedWorkloadList(req, cb) {
        return this.request("DescribeAffectedWorkloadList", req, cb);
    }
    /**
     * 容器安全搜索查询容器组件列表
     */
    async DescribeAssetComponentList(req, cb) {
        return this.request("DescribeAssetComponentList", req, cb);
    }
    /**
     * 容器安全查询镜像扫描状态
     */
    async DescribeAssetImageScanStatus(req, cb) {
        return this.request("DescribeAssetImageScanStatus", req, cb);
    }
    /**
     * 运行时查询文件查杀实时监控设置
     */
    async DescribeVirusMonitorSetting(req, cb) {
        return this.request("DescribeVirusMonitorSetting", req, cb);
    }
    /**
     * 运行时文件扫描超时设置
     */
    async ModifyVirusScanTimeoutSetting(req, cb) {
        return this.request("ModifyVirusScanTimeoutSetting", req, cb);
    }
    /**
     * 创建集群检查任务，用户检查用户的集群相关风险项
     */
    async CreateClusterCheckTask(req, cb) {
        return this.request("CreateClusterCheckTask", req, cb);
    }
    /**
     * 查询运行时访问控制事件列表
     */
    async DescribeAccessControlEvents(req, cb) {
        return this.request("DescribeAccessControlEvents", req, cb);
    }
    /**
     * 运行时更新文件查杀设置
     */
    async ModifyVirusScanSetting(req, cb) {
        return this.request("ModifyVirusScanSetting", req, cb);
    }
    /**
     * 镜像仓库木马信息列表导出
     */
    async DescribeAssetImageRegistryVirusListExport(req, cb) {
        return this.request("DescribeAssetImageRegistryVirusListExport", req, cb);
    }
    /**
     * 获取受影响的集群数量，返回数量
     */
    async DescribeAffectedClusterCount(req, cb) {
        return this.request("DescribeAffectedClusterCount", req, cb);
    }
    /**
     * 修改高危系统调用事件的状态信息
     */
    async ModifyRiskSyscallStatus(req, cb) {
        return this.request("ModifyRiskSyscallStatus", req, cb);
    }
    /**
     * DescribeEscapeEventInfo 查询容器逃逸事件列表
     */
    async DescribeEscapeEventInfo(req, cb) {
        return this.request("DescribeEscapeEventInfo", req, cb);
    }
    /**
     * 查看镜像仓库资产更新进度状态
     */
    async DescribeAssetImageRegistryAssetStatus(req, cb) {
        return this.request("DescribeAssetImageRegistryAssetStatus", req, cb);
    }
    /**
     * 镜像仓库仓库列表
     */
    async DescribeAssetImageRegistryRegistryList(req, cb) {
        return this.request("DescribeAssetImageRegistryRegistryList", req, cb);
    }
    /**
     * 镜像仓库停止镜像扫描任务
     */
    async ModifyAssetImageRegistryScanStop(req, cb) {
        return this.request("ModifyAssetImageRegistryScanStop", req, cb);
    }
    /**
     * 查询单个集群的详细信息
     */
    async DescribeClusterDetail(req, cb) {
        return this.request("DescribeClusterDetail", req, cb);
    }
    /**
     * 镜像仓库查询木马病毒列表
     */
    async DescribeAssetImageRegistryVirusList(req, cb) {
        return this.request("DescribeAssetImageRegistryVirusList", req, cb);
    }
    /**
     * 镜像仓库更新定时任务
     */
    async UpdateImageRegistryTimingScanTask(req, cb) {
        return this.request("UpdateImageRegistryTimingScanTask", req, cb);
    }
    /**
     * 镜像仓库创建镜像一键扫描任务
     */
    async CreateAssetImageRegistryScanTaskOneKey(req, cb) {
        return this.request("CreateAssetImageRegistryScanTaskOneKey", req, cb);
    }
    /**
     * 容器安全停止镜像扫描
     */
    async ModifyAssetImageScanStop(req, cb) {
        return this.request("ModifyAssetImageScanStop", req, cb);
    }
    /**
     * DescribeEscapeEventsExport  查询容器逃逸事件列表导出
     */
    async DescribeEscapeEventsExport(req, cb) {
        return this.request("DescribeEscapeEventsExport", req, cb);
    }
    /**
     * 容器安全搜索查询镜像列表导出
     */
    async DescribeAssetImageListExport(req, cb) {
        return this.request("DescribeAssetImageListExport", req, cb);
    }
    /**
     * 获取镜像扫描设置信息
     */
    async DescribeAssetImageScanSetting(req, cb) {
        return this.request("DescribeAssetImageScanSetting", req, cb);
    }
    /**
     * 安装检查组件，创建防护容器
     */
    async CreateCheckComponent(req, cb) {
        return this.request("CreateCheckComponent", req, cb);
    }
    /**
     * 查询运行时高危系统调用系统名称列表
     */
    async DescribeRiskSyscallNames(req, cb) {
        return this.request("DescribeRiskSyscallNames", req, cb);
    }
    /**
     * 查询合规检测的定时任务列表
     */
    async DescribeCompliancePeriodTaskList(req, cb) {
        return this.request("DescribeCompliancePeriodTaskList", req, cb);
    }
    /**
     * 删除运行访问控制策略
     */
    async DeleteAccessControlRules(req, cb) {
        return this.request("DeleteAccessControlRules", req, cb);
    }
    /**
     * DescribePurchaseStateInfo 查询容器安全服务已购买信息
     */
    async DescribePurchaseStateInfo(req, cb) {
        return this.request("DescribePurchaseStateInfo", req, cb);
    }
    /**
     * 查询运行时高危系统调用白名单详细信息
     */
    async DescribeRiskSyscallWhiteListDetail(req, cb) {
        return this.request("DescribeRiskSyscallWhiteListDetail", req, cb);
    }
    /**
     * 镜像仓库镜像仓库列表详情
     */
    async DescribeAssetImageRegistryDetail(req, cb) {
        return this.request("DescribeAssetImageRegistryDetail", req, cb);
    }
    /**
     * 运行时高危系统调用列表导出
     */
    async DescribeRiskSyscallEventsExport(req, cb) {
        return this.request("DescribeRiskSyscallEventsExport", req, cb);
    }
    /**
     * 查询运行时异常策略详细信息
     */
    async DescribeAbnormalProcessRuleDetail(req, cb) {
        return this.request("DescribeAbnormalProcessRuleDetail", req, cb);
    }
    /**
     * 查看单个镜像仓库详细信息
     */
    async DescribeAssetImageRegistryRegistryDetail(req, cb) {
        return this.request("DescribeAssetImageRegistryRegistryDetail", req, cb);
    }
    /**
     * DescribeValueAddedSrvInfo查询增值服务需购买信息
     */
    async DescribeValueAddedSrvInfo(req, cb) {
        return this.request("DescribeValueAddedSrvInfo", req, cb);
    }
    /**
     * 添加编辑运行时反弹shell白名单
     */
    async AddEditReverseShellWhiteList(req, cb) {
        return this.request("AddEditReverseShellWhiteList", req, cb);
    }
    /**
     * 查询运行时反弹shell事件详细信息
     */
    async DescribeReverseShellDetail(req, cb) {
        return this.request("DescribeReverseShellDetail", req, cb);
    }
    /**
     * 镜像绑定规则列表信息，包含运行时访问控制和异常进程公用
     */
    async DescribeAssetImageBindRuleInfo(req, cb) {
        return this.request("DescribeAssetImageBindRuleInfo", req, cb);
    }
    /**
     * 查询高危系统调用事件详细信息
     */
    async DescribeRiskSyscallDetail(req, cb) {
        return this.request("DescribeRiskSyscallDetail", req, cb);
    }
    /**
     * 查询刷新任务
     */
    async DescribeRefreshTask(req, cb) {
        return this.request("DescribeRefreshTask", req, cb);
    }
    /**
     * 查询检查结果总览，返回受影响的节点数量，返回7天的数据，总共7个
     */
    async DescribeTaskResultSummary(req, cb) {
        return this.request("DescribeTaskResultSummary", req, cb);
    }
    /**
     * 查询容器详细信息
     */
    async DescribeAssetContainerDetail(req, cb) {
        return this.request("DescribeAssetContainerDetail", req, cb);
    }
    /**
     * 镜像仓库查询镜像高危行为列表
     */
    async DescribeAssetImageRegistryRiskInfoList(req, cb) {
        return this.request("DescribeAssetImageRegistryRiskInfoList", req, cb);
    }
    /**
     * ModifyEscapeRule  修改容器逃逸扫描规则信息
     */
    async ModifyEscapeRule(req, cb) {
        return this.request("ModifyEscapeRule", req, cb);
    }
    /**
     * 按照 检测项 → 资产 的两级层次展开的第一层级：检测项层级。
     */
    async DescribeCompliancePolicyItemAffectedSummary(req, cb) {
        return this.request("DescribeCompliancePolicyItemAffectedSummary", req, cb);
    }
    /**
     * 查询容器资产概览信息
     */
    async DescribeContainerAssetSummary(req, cb) {
        return this.request("DescribeContainerAssetSummary", req, cb);
    }
    /**
     * 查询运行时反弹shell事件列表信息导出
     */
    async DescribeReverseShellEventsExport(req, cb) {
        return this.request("DescribeReverseShellEventsExport", req, cb);
    }
    /**
     * 修改运行时异常进程策略的开启关闭状态
     */
    async ModifyAbnormalProcessRuleStatus(req, cb) {
        return this.request("ModifyAbnormalProcessRuleStatus", req, cb);
    }
    /**
     * 查询容器安全本地镜像风险趋势
     */
    async DescribeImageRiskTendency(req, cb) {
        return this.request("DescribeImageRiskTendency", req, cb);
    }
    /**
     * 查询导出任务的结果
     */
    async DescribeExportJobResult(req, cb) {
        return this.request("DescribeExportJobResult", req, cb);
    }
    /**
     * 容器安全创建镜像扫描任务
     */
    async CreateAssetImageScanTask(req, cb) {
        return this.request("CreateAssetImageScanTask", req, cb);
    }
    /**
     * 查询正在一键扫描的镜像扫描taskid
     */
    async DescribeAssetImageScanTask(req, cb) {
        return this.request("DescribeAssetImageScanTask", req, cb);
    }
    /**
     * 镜像仓库镜像列表导出
     */
    async DescribeAssetImageRegistryListExport(req, cb) {
        return this.request("DescribeAssetImageRegistryListExport", req, cb);
    }
    /**
     * 查询上次任务的资产通过率汇总信息
     */
    async DescribeComplianceTaskAssetSummary(req, cb) {
        return this.request("DescribeComplianceTaskAssetSummary", req, cb);
    }
    /**
     * 查询运行访问控制策略列表信息
     */
    async DescribeAccessControlRules(req, cb) {
        return this.request("DescribeAccessControlRules", req, cb);
    }
    /**
     * 容器安全搜索查询镜像木马列表导出
     */
    async DescribeAssetImageVirusListExport(req, cb) {
        return this.request("DescribeAssetImageVirusListExport", req, cb);
    }
    /**
     * 运行时更新文件查杀实时监控设置
     */
    async ModifyVirusMonitorSetting(req, cb) {
        return this.request("ModifyVirusMonitorSetting", req, cb);
    }
    /**
     * DescribePostPayDetail  查询后付费详情
     */
    async DescribePostPayDetail(req, cb) {
        return this.request("DescribePostPayDetail", req, cb);
    }
    /**
     * 重新检测选定的资产
     */
    async ScanComplianceAssets(req, cb) {
        return this.request("ScanComplianceAssets", req, cb);
    }
    /**
     * 运行时停止木马查杀任务
     */
    async StopVirusScanTask(req, cb) {
        return this.request("StopVirusScanTask", req, cb);
    }
    /**
     * 查询所有检查项接口，返回总数和检查项列表
     */
    async DescribeCheckItemList(req, cb) {
        return this.request("DescribeCheckItemList", req, cb);
    }
    /**
     * 运行时查询木马文件信息
     */
    async DescribeVirusDetail(req, cb) {
        return this.request("DescribeVirusDetail", req, cb);
    }
    /**
     * 查询白名单列表
     */
    async DescribeComplianceWhitelistItemList(req, cb) {
        return this.request("DescribeComplianceWhitelistItemList", req, cb);
    }
    /**
     * 创建合规检查任务，在资产级别触发重新检测时使用。
     */
    async CreateComplianceTask(req, cb) {
        return this.request("CreateComplianceTask", req, cb);
    }
    /**
     * 按照 资产 → 检测项 二层结构展示的信息。这里查询第一层 资产的通过率汇总信息。
     */
    async DescribeComplianceScanFailedAssetList(req, cb) {
        return this.request("DescribeComplianceScanFailedAssetList", req, cb);
    }
    /**
     * 容器安全搜索查询端口占用列表
     */
    async DescribeAssetPortList(req, cb) {
        return this.request("DescribeAssetPortList", req, cb);
    }
    /**
     * 镜像仓库漏洞列表导出
     */
    async DescribeAssetImageRegistryVulListExport(req, cb) {
        return this.request("DescribeAssetImageRegistryVulListExport", req, cb);
    }
    /**
     * 删除运行异常进程策略
     */
    async DeleteAbnormalProcessRules(req, cb) {
        return this.request("DeleteAbnormalProcessRules", req, cb);
    }
    /**
     * 镜像仓库敏感信息列表导出
     */
    async DescribeAssetImageRegistryRiskListExport(req, cb) {
        return this.request("DescribeAssetImageRegistryRiskListExport", req, cb);
    }
    /**
     * 运行时文件查杀一键扫描
     */
    async CreateVirusScanTask(req, cb) {
        return this.request("CreateVirusScanTask", req, cb);
    }
    /**
     * DescribeEscapeEventDetail  查询容器逃逸事件详情
     */
    async DescribeEscapeEventDetail(req, cb) {
        return this.request("DescribeEscapeEventDetail", req, cb);
    }
    /**
     * 删除运行时反弹shell白名单
     */
    async DeleteReverseShellWhiteLists(req, cb) {
        return this.request("DeleteReverseShellWhiteLists", req, cb);
    }
    /**
     * 查询某个资产的详情
     */
    async DescribeComplianceAssetDetailInfo(req, cb) {
        return this.request("DescribeComplianceAssetDetailInfo", req, cb);
    }
    /**
     * 获取告警策略列表
     */
    async DescribeWarningRules(req, cb) {
        return this.request("DescribeWarningRules", req, cb);
    }
    /**
     * 修改异常进程事件的状态信息
     */
    async ModifyAbnormalProcessStatus(req, cb) {
        return this.request("ModifyAbnormalProcessStatus", req, cb);
    }
    /**
     * 创建一个导出安全合规信息的任务
     */
    async CreateExportComplianceStatusListJob(req, cb) {
        return this.request("CreateExportComplianceStatusListJob", req, cb);
    }
    /**
     * 容器安全搜索查询镜像简略信息列表
     */
    async DescribeAssetImageSimpleList(req, cb) {
        return this.request("DescribeAssetImageSimpleList", req, cb);
    }
    /**
     * DescribeImageSimpleList 查询全部镜像列表
     */
    async DescribeImageSimpleList(req, cb) {
        return this.request("DescribeImageSimpleList", req, cb);
    }
    /**
     * 修改运行时访问控制事件状态信息
     */
    async ModifyAccessControlStatus(req, cb) {
        return this.request("ModifyAccessControlStatus", req, cb);
    }
    /**
     * DescribeEscapeRuleInfo 查询容器逃逸扫描规则信息
     */
    async DescribeEscapeRuleInfo(req, cb) {
        return this.request("DescribeEscapeRuleInfo", req, cb);
    }
    /**
     * 容器安全查询镜像风险列表
     */
    async DescribeAssetImageRiskList(req, cb) {
        return this.request("DescribeAssetImageRiskList", req, cb);
    }
    /**
     * 容器安全搜索查询镜像漏洞列表导出
     */
    async DescribeAssetImageVulListExport(req, cb) {
        return this.request("DescribeAssetImageVulListExport", req, cb);
    }
    /**
     * 查询用户集群资产总览
     */
    async DescribeClusterSummary(req, cb) {
        return this.request("DescribeClusterSummary", req, cb);
    }
    /**
     * DescribeEscapeSafeState 查询容器逃逸安全状态
     */
    async DescribeEscapeSafeState(req, cb) {
        return this.request("DescribeEscapeSafeState", req, cb);
    }
    /**
     * 运行时查询文件查杀任务列表
     */
    async DescribeVirusTaskList(req, cb) {
        return this.request("DescribeVirusTaskList", req, cb);
    }
    /**
     * 新增单个镜像仓库详细信息
     */
    async AddAssetImageRegistryRegistryDetail(req, cb) {
        return this.request("AddAssetImageRegistryRegistryDetail", req, cb);
    }
    /**
     * 运行时文件查杀事件列表
     */
    async DescribeVirusList(req, cb) {
        return this.request("DescribeVirusList", req, cb);
    }
    /**
     * 镜像仓库资产刷新
     */
    async SyncAssetImageRegistryAsset(req, cb) {
        return this.request("SyncAssetImageRegistryAsset", req, cb);
    }
    /**
     * 查询本地镜像风险概览
     */
    async DescribeImageRiskSummary(req, cb) {
        return this.request("DescribeImageRiskSummary", req, cb);
    }
    /**
     * 重新检测选的检测项下的所有资产，返回创建的合规检查任务的ID。
     */
    async ScanCompliancePolicyItems(req, cb) {
        return this.request("ScanCompliancePolicyItems", req, cb);
    }
    /**
     * 运行时文件查杀重新检测
     */
    async CreateVirusScanAgain(req, cb) {
        return this.request("CreateVirusScanAgain", req, cb);
    }
    /**
     * 查询容器安全未处理事件信息
     */
    async DescribeContainerSecEventSummary(req, cb) {
        return this.request("DescribeContainerSecEventSummary", req, cb);
    }
    /**
     * 查询最近一次任务发现的检测项的汇总信息列表，按照 检测项 → 资产 的两级层次展开。
     */
    async DescribeComplianceTaskPolicyItemSummaryList(req, cb) {
        return this.request("DescribeComplianceTaskPolicyItemSummaryList", req, cb);
    }
    /**
     * 容器安全搜索查询镜像列表
     */
    async DescribeAssetImageList(req, cb) {
        return this.request("DescribeAssetImageList", req, cb);
    }
    /**
     * 查询运行时反弹shell事件列表信息
     */
    async DescribeReverseShellEvents(req, cb) {
        return this.request("DescribeReverseShellEvents", req, cb);
    }
    /**
     * 运行时更新木马文件事件状态
     */
    async ModifyVirusFileStatus(req, cb) {
        return this.request("ModifyVirusFileStatus", req, cb);
    }
    /**
     * 镜像仓库创建镜像扫描任务
     */
    async CreateAssetImageRegistryScanTask(req, cb) {
        return this.request("CreateAssetImageRegistryScanTask", req, cb);
    }
    /**
     * 查询未完成的刷新资产任务信息
     */
    async DescribeUnfinishRefreshTask(req, cb) {
        return this.request("DescribeUnfinishRefreshTask", req, cb);
    }
    /**
     * 添加编辑运行时高危系统调用白名单
     */
    async AddEditRiskSyscallWhiteList(req, cb) {
        return this.request("AddEditRiskSyscallWhiteList", req, cb);
    }
    /**
     * 镜像仓库查询一键镜像扫描状态
     */
    async DescribeAssetImageRegistryScanStatusOneKey(req, cb) {
        return this.request("DescribeAssetImageRegistryScanStatusOneKey", req, cb);
    }
    /**
     * 查询运行时访问控制事件的详细信息
     */
    async DescribeAccessControlDetail(req, cb) {
        return this.request("DescribeAccessControlDetail", req, cb);
    }
    /**
     * 镜像仓库镜像仓库列表
     */
    async DescribeAssetImageRegistryList(req, cb) {
        return this.request("DescribeAssetImageRegistryList", req, cb);
    }
    /**
     * 容器安全搜索查询进程列表
     */
    async DescribeAssetProcessList(req, cb) {
        return this.request("DescribeAssetProcessList", req, cb);
    }
    /**
     * 查询运行时异常进程事件列表信息
     */
    async DescribeAbnormalProcessEvents(req, cb) {
        return this.request("DescribeAbnormalProcessEvents", req, cb);
    }
    /**
     * 更新单个镜像仓库详细信息
     */
    async UpdateAssetImageRegistryRegistryDetail(req, cb) {
        return this.request("UpdateAssetImageRegistryRegistryDetail", req, cb);
    }
    /**
     * DescribeProVersionInfo  查询专业版需购买信息
     */
    async DescribeProVersionInfo(req, cb) {
        return this.request("DescribeProVersionInfo", req, cb);
    }
    /**
     * 查询某资产下的检测项列表
     */
    async DescribeComplianceAssetPolicyItemList(req, cb) {
        return this.request("DescribeComplianceAssetPolicyItemList", req, cb);
    }
    /**
     * 设置检测模式和自动检查
     */
    async SetCheckMode(req, cb) {
        return this.request("SetCheckMode", req, cb);
    }
    /**
     * 从白名单中删除将指定的检测项。
     */
    async DeleteCompliancePolicyItemFromWhitelist(req, cb) {
        return this.request("DeleteCompliancePolicyItemFromWhitelist", req, cb);
    }
    /**
     * 运行时查询文件查杀设置
     */
    async DescribeVirusScanSetting(req, cb) {
        return this.request("DescribeVirusScanSetting", req, cb);
    }
    /**
     * 查询某类资产的列表
     */
    async DescribeComplianceAssetList(req, cb) {
        return this.request("DescribeComplianceAssetList", req, cb);
    }
    /**
     * 按照 检测项 → 资产 的两级层次展开的第二层级：资产层级。
     */
    async DescribeCompliancePolicyItemAffectedAssetList(req, cb) {
        return this.request("DescribeCompliancePolicyItemAffectedAssetList", req, cb);
    }
    /**
     * 容器安全主机资产刷新
     */
    async ModifyAsset(req, cb) {
        return this.request("ModifyAsset", req, cb);
    }
    /**
     * CreateOrModifyPostPayCores  创建或者编辑弹性计费上限
     */
    async CreateOrModifyPostPayCores(req, cb) {
        return this.request("CreateOrModifyPostPayCores", req, cb);
    }
    /**
     * 查询运行时异常进程事件详细信息
     */
    async DescribeAbnormalProcessDetail(req, cb) {
        return this.request("DescribeAbnormalProcessDetail", req, cb);
    }
    /**
     * RenewImageAuthorizeState   授权镜像扫描
     */
    async RenewImageAuthorizeState(req, cb) {
        return this.request("RenewImageAuthorizeState", req, cb);
    }
    /**
     * 镜像仓库停止镜像一键扫描任务
     */
    async ModifyAssetImageRegistryScanStopOneKey(req, cb) {
        return this.request("ModifyAssetImageRegistryScanStopOneKey", req, cb);
    }
    /**
     * 查询运行时访问控制策略详细信息
     */
    async DescribeAccessControlRuleDetail(req, cb) {
        return this.request("DescribeAccessControlRuleDetail", req, cb);
    }
    /**
     * 查询节点类型的影响范围，返回节点列表
     */
    async DescribeAffectedNodeList(req, cb) {
        return this.request("DescribeAffectedNodeList", req, cb);
    }
    /**
     * 查询运行时访问控制事件列表导出
     */
    async DescribeAccessControlEventsExport(req, cb) {
        return this.request("DescribeAccessControlEventsExport", req, cb);
    }
    /**
     * 修改反弹shell事件的状态信息
     */
    async ModifyReverseShellStatus(req, cb) {
        return this.request("ModifyReverseShellStatus", req, cb);
    }
    /**
     * 添加编辑告警策略
     */
    async AddEditWarningRules(req, cb) {
        return this.request("AddEditWarningRules", req, cb);
    }
    /**
     * 容器安全搜索查询镜像风险列表导出
     */
    async DescribeAssetImageRiskListExport(req, cb) {
        return this.request("DescribeAssetImageRiskListExport", req, cb);
    }
    /**
     * 查询运行时访问控制策略列表导出
     */
    async DescribeAccessControlRulesExport(req, cb) {
        return this.request("DescribeAccessControlRulesExport", req, cb);
    }
    /**
     * 查询最近一次任务发现的风险项的信息列表，支持根据特殊字段进行过滤
     */
    async DescribeRiskList(req, cb) {
        return this.request("DescribeRiskList", req, cb);
    }
    /**
     * 容器安全查询镜像漏洞列表
     */
    async DescribeAssetImageVulList(req, cb) {
        return this.request("DescribeAssetImageVulList", req, cb);
    }
    /**
     * 将指定的检测项添加到白名单中，不显示未通过结果。
     */
    async AddCompliancePolicyItemToWhitelist(req, cb) {
        return this.request("AddCompliancePolicyItemToWhitelist", req, cb);
    }
    /**
     * 为客户初始化合规基线的使用环境，创建必要的数据和选项。
     */
    async InitializeUserComplianceEnvironment(req, cb) {
        return this.request("InitializeUserComplianceEnvironment", req, cb);
    }
    /**
     * 安全概览和集群安全页进入调用该接口，查询用户集群相关信息。
     */
    async DescribeUserCluster(req, cb) {
        return this.request("DescribeUserCluster", req, cb);
    }
    /**
     * 修改定时任务的设置，包括检测周期、开启/禁用合规基准。
     */
    async ModifyCompliancePeriodTask(req, cb) {
        return this.request("ModifyCompliancePeriodTask", req, cb);
    }
    /**
     * 镜像仓库查询镜像统计信息
     */
    async DescribeAssetImageRegistrySummary(req, cb) {
        return this.request("DescribeAssetImageRegistrySummary", req, cb);
    }
    /**
     * 查询运行时异常进程策略列表信息
     */
    async DescribeAbnormalProcessRules(req, cb) {
        return this.request("DescribeAbnormalProcessRules", req, cb);
    }
    /**
     * 容器安全查询db服务列表
     */
    async DescribeAssetDBServiceList(req, cb) {
        return this.request("DescribeAssetDBServiceList", req, cb);
    }
    /**
     * 查询运行时运行时高危系统调用列表信息
     */
    async DescribeRiskSyscallEvents(req, cb) {
        return this.request("DescribeRiskSyscallEvents", req, cb);
    }
    /**
     * 删除运行时高危系统调用白名单
     */
    async DeleteRiskSyscallWhiteLists(req, cb) {
        return this.request("DeleteRiskSyscallWhiteLists", req, cb);
    }
    /**
     * 添加编辑运行时访问控制策略
     */
    async AddEditAccessControlRule(req, cb) {
        return this.request("AddEditAccessControlRule", req, cb);
    }
    /**
     * 查询运行时反弹shell白名单详细信息
     */
    async DescribeReverseShellWhiteListDetail(req, cb) {
        return this.request("DescribeReverseShellWhiteListDetail", req, cb);
    }
    /**
     * 添加容器安全镜像扫描设置
     */
    async CreateAssetImageScanSetting(req, cb) {
        return this.request("CreateAssetImageScanSetting", req, cb);
    }
    /**
     * 容器安全查询镜像病毒列表
     */
    async DescribeAssetImageVirusList(req, cb) {
        return this.request("DescribeAssetImageVirusList", req, cb);
    }
    /**
     * 查询账户容器、镜像等统计信息
     */
    async DescribeAssetSummary(req, cb) {
        return this.request("DescribeAssetSummary", req, cb);
    }
    /**
     * 运行时文件查杀事件列表导出
     */
    async ExportVirusList(req, cb) {
        return this.request("ExportVirusList", req, cb);
    }
    /**
     * 容器安全查询web服务列表
     */
    async DescribeAssetWebServiceList(req, cb) {
        return this.request("DescribeAssetWebServiceList", req, cb);
    }
    /**
     * 检查单个镜像仓库名是否重复
     */
    async CheckRepeatAssetImageRegistry(req, cb) {
        return this.request("CheckRepeatAssetImageRegistry", req, cb);
    }
    /**
     * 添加编辑运行时异常进程策略
     */
    async AddEditAbnormalProcessRule(req, cb) {
        return this.request("AddEditAbnormalProcessRule", req, cb);
    }
    /**
     * 查询主机详细信息
     */
    async DescribeAssetHostDetail(req, cb) {
        return this.request("DescribeAssetHostDetail", req, cb);
    }
    /**
     * 容器安全查询镜像关联主机
     */
    async DescribeAssetImageHostList(req, cb) {
        return this.request("DescribeAssetImageHostList", req, cb);
    }
    /**
     * 查询运行时高危系统调用白名单列表信息
     */
    async DescribeRiskSyscallWhiteLists(req, cb) {
        return this.request("DescribeRiskSyscallWhiteLists", req, cb);
    }
    /**
     * 镜像仓库查询镜像漏洞列表
     */
    async DescribeAssetImageRegistryVulList(req, cb) {
        return this.request("DescribeAssetImageRegistryVulList", req, cb);
    }
    /**
     * 运行时查询文件查杀任务状态
     */
    async DescribeVirusScanTaskStatus(req, cb) {
        return this.request("DescribeVirusScanTaskStatus", req, cb);
    }
    /**
     * 用指定的检测项重新检测选定的资产，返回创建的合规检查任务的ID。
     */
    async ScanComplianceAssetsByPolicyItem(req, cb) {
        return this.request("ScanComplianceAssetsByPolicyItem", req, cb);
    }
    /**
     * 查询镜像详细信息
     */
    async DescribeAssetImageDetail(req, cb) {
        return this.request("DescribeAssetImageDetail", req, cb);
    }
    /**
     * 查询容器运行时安全事件趋势
     */
    async DescribeSecEventsTendency(req, cb) {
        return this.request("DescribeSecEventsTendency", req, cb);
    }
}
exports.Client = Client;
