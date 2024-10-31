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
     * 创建k8s api异常事件导出任务
     */
    async CreateK8sApiAbnormalEventExportJob(req, cb) {
        return this.request("CreateK8sApiAbnormalEventExportJob", req, cb);
    }
    /**
     * 更新安全日志-日志投递cls配置
     */
    async ModifySecLogDeliveryClsSetting(req, cb) {
        return this.request("ModifySecLogDeliveryClsSetting", req, cb);
    }
    /**
     * 接口已废弃

查询运行时异常进程事件列表信息导出
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
     * 编辑漏洞防御设置
     */
    async ModifyVulDefenceSetting(req, cb) {
        return this.request("ModifyVulDefenceSetting", req, cb);
    }
    /**
     * 创建异常进程规则导出任务
     */
    async CreateAbnormalProcessRulesExportJob(req, cb) {
        return this.request("CreateAbnormalProcessRulesExportJob", req, cb);
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
     * 获取索引列表
     */
    async DescribeIndexList(req, cb) {
        return this.request("DescribeIndexList", req, cb);
    }
    /**
     * 获取公钥
     */
    async DescribePublicKey(req, cb) {
        return this.request("DescribePublicKey", req, cb);
    }
    /**
     * 查询运行时访问控制事件的详细信息
     */
    async DescribeAccessControlDetail(req, cb) {
        return this.request("DescribeAccessControlDetail", req, cb);
    }
    /**
     * 查询木马自动隔离样本详情
     */
    async DescribeVirusAutoIsolateSampleDetail(req, cb) {
        return this.request("DescribeVirusAutoIsolateSampleDetail", req, cb);
    }
    /**
     * 接口已废弃

查询运行时异常进程策略列表信息导出
     */
    async DescribeAbnormalProcessRulesExport(req, cb) {
        return this.request("DescribeAbnormalProcessRulesExport", req, cb);
    }
    /**
     * 容器网络查询网络策略策略执行状态
     */
    async DescribeNetworkFirewallPolicyStatus(req, cb) {
        return this.request("DescribeNetworkFirewallPolicyStatus", req, cb);
    }
    /**
     * 查询k8sapi异常事件统计
     */
    async DescribeK8sApiAbnormalSummary(req, cb) {
        return this.request("DescribeK8sApiAbnormalSummary", req, cb);
    }
    /**
     * 创建漏洞防御导出任务
     */
    async CreateVulDefenceEventExportJob(req, cb) {
        return this.request("CreateVulDefenceEventExportJob", req, cb);
    }
    /**
     * 容器安全查询app服务列表
     */
    async DescribeAssetAppServiceList(req, cb) {
        return this.request("DescribeAssetAppServiceList", req, cb);
    }
    /**
     * 删除检索模板
     */
    async DeleteSearchTemplate(req, cb) {
        return this.request("DeleteSearchTemplate", req, cb);
    }
    /**
     * 创建受漏洞影响的镜像导出任务
     */
    async CreateVulImageExportJob(req, cb) {
        return this.request("CreateVulImageExportJob", req, cb);
    }
    /**
     * 统计漏洞扫描页已授权和未扫描镜像数
     */
    async DescribeVulScanAuthorizedImageSummary(req, cb) {
        return this.request("DescribeVulScanAuthorizedImageSummary", req, cb);
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
     * 导出ES查询文档列表
     */
    async DescribeSearchExportList(req, cb) {
        return this.request("DescribeSearchExportList", req, cb);
    }
    /**
     * 修改安全日志kafkaUIN
     */
    async ModifySecLogKafkaUIN(req, cb) {
        return this.request("ModifySecLogKafkaUIN", req, cb);
    }
    /**
     * 镜像仓库停止镜像一键扫描任务
     */
    async ModifyAssetImageRegistryScanStopOneKey(req, cb) {
        return this.request("ModifyAssetImageRegistryScanStopOneKey", req, cb);
    }
    /**
     * 查询运行时运行时反弹shell白名单列表信息
     */
    async DescribeReverseShellWhiteLists(req, cb) {
        return this.request("DescribeReverseShellWhiteLists", req, cb);
    }
    /**
     * 查询本地镜像组件列表导出
     */
    async CreateComponentExportJob(req, cb) {
        return this.request("CreateComponentExportJob", req, cb);
    }
    /**
     * 查询木马自动隔离样本下载链接
     */
    async DescribeVirusAutoIsolateSampleDownloadURL(req, cb) {
        return this.request("DescribeVirusAutoIsolateSampleDownloadURL", req, cb);
    }
    /**
     * 查询用户镜像仓库下的命令空间列表
     */
    async DescribeImageRegistryNamespaceList(req, cb) {
        return this.request("DescribeImageRegistryNamespaceList", req, cb);
    }
    /**
     * 查询扫描忽略的漏洞列表
     */
    async DescribeScanIgnoreVulList(req, cb) {
        return this.request("DescribeScanIgnoreVulList", req, cb);
    }
    /**
     * 查询安全日志接入对象列表
     */
    async DescribeSecLogJoinObjectList(req, cb) {
        return this.request("DescribeSecLogJoinObjectList", req, cb);
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
     * 查询平行容器安装命令
     */
    async DescribeAgentDaemonSetCmd(req, cb) {
        return this.request("DescribeAgentDaemonSetCmd", req, cb);
    }
    /**
     * 创建k8sApi异常规则导出任务
     */
    async CreateK8sApiAbnormalRuleExportJob(req, cb) {
        return this.request("CreateK8sApiAbnormalRuleExportJob", req, cb);
    }
    /**
     * 容器网络集群网络策略创建自动发现任务
     */
    async CreateNetworkFirewallPolicyDiscover(req, cb) {
        return this.request("CreateNetworkFirewallPolicyDiscover", req, cb);
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
     * 查询恶意请求事件列表
     */
    async DescribeRiskDnsList(req, cb) {
        return this.request("DescribeRiskDnsList", req, cb);
    }
    /**
     * 运行时更新文件查杀设置
     */
    async ModifyVirusScanSetting(req, cb) {
        return this.request("ModifyVirusScanSetting", req, cb);
    }
    /**
     * 查询安全日志投递kafka可选项
     */
    async DescribeSecLogDeliveryKafkaOptions(req, cb) {
        return this.request("DescribeSecLogDeliveryKafkaOptions", req, cb);
    }
    /**
     * 镜像仓库木马信息列表导出
     */
    async DescribeAssetImageRegistryVirusListExport(req, cb) {
        return this.request("DescribeAssetImageRegistryVirusListExport", req, cb);
    }
    /**
     * 容器网络创建网络策略确认任务
     */
    async ConfirmNetworkFirewallPolicy(req, cb) {
        return this.request("ConfirmNetworkFirewallPolicy", req, cb);
    }
    /**
     * 移除安全合规忽略(资产+检测项)列表，不显示指定的检查项包含的资产内容
参考的AddCompliancePolicyAssetSetToWhitelist，除输入字段外，其它应该是一致的，如果有不同可能是定义的不对
     */
    async DeleteComplianceAssetPolicySetFromWhitelist(req, cb) {
        return this.request("DeleteComplianceAssetPolicySetFromWhitelist", req, cb);
    }
    /**
     * 查询本地镜像组件列表
     */
    async DescribeImageComponentList(req, cb) {
        return this.request("DescribeImageComponentList", req, cb);
    }
    /**
     * 镜像仓库查询镜像统计信息
     */
    async DescribeAssetImageRegistrySummary(req, cb) {
        return this.request("DescribeAssetImageRegistrySummary", req, cb);
    }
    /**
     * 容器网络创建网络策略更新任务
     */
    async UpdateNetworkFirewallPolicyDetail(req, cb) {
        return this.request("UpdateNetworkFirewallPolicyDetail", req, cb);
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
     * 运行时文件查杀事件列表导出
     */
    async ExportVirusList(req, cb) {
        return this.request("ExportVirusList", req, cb);
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
     * 修改运行时访问控制策略的状态，启用或者禁用
     */
    async ModifyAccessControlRuleStatus(req, cb) {
        return this.request("ModifyAccessControlRuleStatus", req, cb);
    }
    /**
     * 容器网络集群查看Yaml网络策略详情
     */
    async DescribeNetworkFirewallPolicyYamlDetail(req, cb) {
        return this.request("DescribeNetworkFirewallPolicyYamlDetail", req, cb);
    }
    /**
     * 接口已废弃

DescribeEscapeEventsExport  查询容器逃逸事件列表导出
     */
    async DescribeEscapeEventsExport(req, cb) {
        return this.request("DescribeEscapeEventsExport", req, cb);
    }
    /**
     * 容器网络创建检查Yaml网络策略任务
     */
    async CheckNetworkFirewallPolicyYaml(req, cb) {
        return this.request("CheckNetworkFirewallPolicyYaml", req, cb);
    }
    /**
     * 容器网络更新Yaml网络策略任务
     */
    async UpdateNetworkFirewallPolicyYamlDetail(req, cb) {
        return this.request("UpdateNetworkFirewallPolicyYamlDetail", req, cb);
    }
    /**
     * 查询集群网络空间列表
     */
    async DescribeNetworkFirewallNamespaceList(req, cb) {
        return this.request("DescribeNetworkFirewallNamespaceList", req, cb);
    }
    /**
     * 接口已废弃

容器安全搜索查询镜像列表导出
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
     * 设置检测模式和自动检查
     */
    async SetCheckMode(req, cb) {
        return this.request("SetCheckMode", req, cb);
    }
    /**
     * 查询最新披露漏洞列表
     */
    async DescribeNewestVul(req, cb) {
        return this.request("DescribeNewestVul", req, cb);
    }
    /**
     * 查询运行时高危系统调用系统名称列表
     */
    async DescribeRiskSyscallNames(req, cb) {
        return this.request("DescribeRiskSyscallNames", req, cb);
    }
    /**
     * 修改k8sapi异常规则信息
     */
    async ModifyK8sApiAbnormalRuleInfo(req, cb) {
        return this.request("ModifyK8sApiAbnormalRuleInfo", req, cb);
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
     * 创建漏洞防御主机导出任务
     */
    async CreateVulDefenceHostExportJob(req, cb) {
        return this.request("CreateVulDefenceHostExportJob", req, cb);
    }
    /**
     * ModifyEscapeEventStatus  修改容器逃逸扫描事件状态
     */
    async ModifyEscapeEventStatus(req, cb) {
        return this.request("ModifyEscapeEventStatus", req, cb);
    }
    /**
     * 统计异常进程各威胁等级待处理事件数
     */
    async DescribeAbnormalProcessLevelSummary(req, cb) {
        return this.request("DescribeAbnormalProcessLevelSummary", req, cb);
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
     * 修改逃逸白名单
     */
    async ModifyEscapeWhiteList(req, cb) {
        return this.request("ModifyEscapeWhiteList", req, cb);
    }
    /**
     * 查询木马一键检测预估超时时间
     */
    async DescribeVirusManualScanEstimateTimeout(req, cb) {
        return this.request("DescribeVirusManualScanEstimateTimeout", req, cb);
    }
    /**
     * 运行时高危系统调用列表导出
     */
    async DescribeRiskSyscallEventsExport(req, cb) {
        return this.request("DescribeRiskSyscallEventsExport", req, cb);
    }
    /**
     * 查询本地镜像自动授权规则
     */
    async DescribeImageAutoAuthorizedRule(req, cb) {
        return this.request("DescribeImageAutoAuthorizedRule", req, cb);
    }
    /**
     * 查询运行时异常策略详细信息
     */
    async DescribeAbnormalProcessRuleDetail(req, cb) {
        return this.request("DescribeAbnormalProcessRuleDetail", req, cb);
    }
    /**
     * 创建支持防御的漏洞导出任务
     */
    async CreateDefenceVulExportJob(req, cb) {
        return this.request("CreateDefenceVulExportJob", req, cb);
    }
    /**
     * DescribeValueAddedSrvInfo查询增值服务需购买信息
     */
    async DescribeValueAddedSrvInfo(req, cb) {
        return this.request("DescribeValueAddedSrvInfo", req, cb);
    }
    /**
     * 运行时更新木马文件事件状态
     */
    async ModifyVirusFileStatus(req, cb) {
        return this.request("ModifyVirusFileStatus", req, cb);
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
     * 获取ES字段聚合结果
     */
    async DescribeESAggregations(req, cb) {
        return this.request("DescribeESAggregations", req, cb);
    }
    /**
     * 镜像绑定规则列表信息，包含运行时访问控制和异常进程公用
     */
    async DescribeAssetImageBindRuleInfo(req, cb) {
        return this.request("DescribeAssetImageBindRuleInfo", req, cb);
    }
    /**
     * 取消漏洞扫描忽略漏洞
     */
    async DeleteIgnoreVul(req, cb) {
        return this.request("DeleteIgnoreVul", req, cb);
    }
    /**
     * 创建本地镜像木马列表导出任务
     */
    async CreateAssetImageVirusExportJob(req, cb) {
        return this.request("CreateAssetImageVirusExportJob", req, cb);
    }
    /**
     * 容器网络查询网络策略自动发现任务进度
     */
    async DescribeNetworkFirewallPolicyDiscover(req, cb) {
        return this.request("DescribeNetworkFirewallPolicyDiscover", req, cb);
    }
    /**
     * 查询安全日志投递cls可选项
     */
    async DescribeSecLogDeliveryClsOptions(req, cb) {
        return this.request("DescribeSecLogDeliveryClsOptions", req, cb);
    }
    /**
     * 查询当天未授权核数趋势
     */
    async DescribeUnauthorizedCoresTendency(req, cb) {
        return this.request("DescribeUnauthorizedCoresTendency", req, cb);
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
     * 查询刷新任务
     */
    async DescribeRefreshTask(req, cb) {
        return this.request("DescribeRefreshTask", req, cb);
    }
    /**
     * 容器网络集群下发刷新任务
     */
    async CreateNetworkFirewallClusterRefresh(req, cb) {
        return this.request("CreateNetworkFirewallClusterRefresh", req, cb);
    }
    /**
     * 查询运行时运行时高危系统调用列表信息
     */
    async DescribeRiskSyscallEvents(req, cb) {
        return this.request("DescribeRiskSyscallEvents", req, cb);
    }
    /**
     * 新增安全合规忽略(资产+检测项列表)列表，不显示指定的检查项包含的资产内容
参考的AddCompliancePolicyItemToWhitelist，除输入字段外，其它应该是一致的，如果有不同可能是定义的不对
     */
    async AddComplianceAssetPolicySetToWhitelist(req, cb) {
        return this.request("AddComplianceAssetPolicySetToWhitelist", req, cb);
    }
    /**
     * 修改安全日志接入对象
     */
    async ModifySecLogJoinObjects(req, cb) {
        return this.request("ModifySecLogJoinObjects", req, cb);
    }
    /**
     * 查询容器资产概览信息
     */
    async DescribeContainerAssetSummary(req, cb) {
        return this.request("DescribeContainerAssetSummary", req, cb);
    }
    /**
     * 查询超级节点列表
     */
    async DescribeAssetSuperNodeList(req, cb) {
        return this.request("DescribeAssetSuperNodeList", req, cb);
    }
    /**
     * 镜像仓库查看定时任务
     */
    async DescribeImageRegistryTimingScanTask(req, cb) {
        return this.request("DescribeImageRegistryTimingScanTask", req, cb);
    }
    /**
     * 查询运行时反弹shell事件列表信息导出
     */
    async DescribeReverseShellEventsExport(req, cb) {
        return this.request("DescribeReverseShellEventsExport", req, cb);
    }
    /**
     * 容器安全查询db服务列表
     */
    async DescribeAssetDBServiceList(req, cb) {
        return this.request("DescribeAssetDBServiceList", req, cb);
    }
    /**
     * 查询漏洞影响的镜像列表
     */
    async DescribeVulImageList(req, cb) {
        return this.request("DescribeVulImageList", req, cb);
    }
    /**
     * 修改运行时异常进程策略的开启关闭状态
     */
    async ModifyAbnormalProcessRuleStatus(req, cb) {
        return this.request("ModifyAbnormalProcessRuleStatus", req, cb);
    }
    /**
     * 查询漏洞防御事件列表
     */
    async DescribeVulDefenceEvent(req, cb) {
        return this.request("DescribeVulDefenceEvent", req, cb);
    }
    /**
     * 查询漏洞扫描忽略的仓库镜像列表
     */
    async DescribeVulIgnoreRegistryImageList(req, cb) {
        return this.request("DescribeVulIgnoreRegistryImageList", req, cb);
    }
    /**
     * 查询漏洞扫描任务信息
     */
    async DescribeVulScanInfo(req, cb) {
        return this.request("DescribeVulScanInfo", req, cb);
    }
    /**
     * 查询漏洞镜像统计
     */
    async DescribeVulImageSummary(req, cb) {
        return this.request("DescribeVulImageSummary", req, cb);
    }
    /**
     * 创建web漏洞导出任务
     */
    async CreateWebVulExportJob(req, cb) {
        return this.request("CreateWebVulExportJob", req, cb);
    }
    /**
     * 容器网络创建网络策略更新并发布任务
     */
    async UpdateAndPublishNetworkFirewallPolicyDetail(req, cb) {
        return this.request("UpdateAndPublishNetworkFirewallPolicyDetail", req, cb);
    }
    /**
     * 隔离容器网络状态
     */
    async ModifyContainerNetStatus(req, cb) {
        return this.request("ModifyContainerNetStatus", req, cb);
    }
    /**
     * 查询容器安全本地镜像风险趋势
     */
    async DescribeImageRiskTendency(req, cb) {
        return this.request("DescribeImageRiskTendency", req, cb);
    }
    /**
     * 查询agent安装命令
     */
    async DescribeAgentInstallCommand(req, cb) {
        return this.request("DescribeAgentInstallCommand", req, cb);
    }
    /**
     * 查询导出接口进度
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
     * 创建应急漏洞导出任务
     */
    async CreateEmergencyVulExportJob(req, cb) {
        return this.request("CreateEmergencyVulExportJob", req, cb);
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
     * 查询漏洞防御插件列表
     */
    async DescribeVulDefencePlugin(req, cb) {
        return this.request("DescribeVulDefencePlugin", req, cb);
    }
    /**
     * 查询k8s api异常事件列表
     */
    async DescribeK8sApiAbnormalEventList(req, cb) {
        return this.request("DescribeK8sApiAbnormalEventList", req, cb);
    }
    /**
     * 查询上次任务的资产通过率汇总信息
     */
    async DescribeComplianceTaskAssetSummary(req, cb) {
        return this.request("DescribeComplianceTaskAssetSummary", req, cb);
    }
    /**
     * 运行时更新文件查杀实时监控设置
     */
    async ModifyVirusMonitorSetting(req, cb) {
        return this.request("ModifyVirusMonitorSetting", req, cb);
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
     * 搜索查询容器列表
     */
    async DescribeAssetContainerList(req, cb) {
        return this.request("DescribeAssetContainerList", req, cb);
    }
    /**
     * 添加检索模板
     */
    async CreateSearchTemplate(req, cb) {
        return this.request("CreateSearchTemplate", req, cb);
    }
    /**
     * DescribePostPayDetail  查询后付费详情
     */
    async DescribePostPayDetail(req, cb) {
        return this.request("DescribePostPayDetail", req, cb);
    }
    /**
     * 查询超级节点pod列表
     */
    async DescribeSuperNodePodList(req, cb) {
        return this.request("DescribeSuperNodePodList", req, cb);
    }
    /**
     * 容器网络创建Yaml网络策略添加任务
     */
    async AddNetworkFirewallPolicyYamlDetail(req, cb) {
        return this.request("AddNetworkFirewallPolicyYamlDetail", req, cb);
    }
    /**
     * 删除运行时反弹shell事件
     */
    async DeleteReverseShellEvents(req, cb) {
        return this.request("DeleteReverseShellEvents", req, cb);
    }
    /**
     * 查看单个镜像仓库详细信息
     */
    async DescribeAssetImageRegistryRegistryDetail(req, cb) {
        return this.request("DescribeAssetImageRegistryRegistryDetail", req, cb);
    }
    /**
     * 新增逃逸白名单
     */
    async AddEscapeWhiteList(req, cb) {
        return this.request("AddEscapeWhiteList", req, cb);
    }
    /**
     * 创建镜像导出任务
     */
    async CreateImageExportJob(req, cb) {
        return this.request("CreateImageExportJob", req, cb);
    }
    /**
     * 查询安全日志投递Cls配置
     */
    async DescribeSecLogDeliveryClsSetting(req, cb) {
        return this.request("DescribeSecLogDeliveryClsSetting", req, cb);
    }
    /**
     * 查询运行时文件查杀事件列表
     */
    async DescribeVirusList(req, cb) {
        return this.request("DescribeVirusList", req, cb);
    }
    /**
     * 容器安全停止镜像扫描
     */
    async ModifyAssetImageScanStop(req, cb) {
        return this.request("ModifyAssetImageScanStop", req, cb);
    }
    /**
     * 重新检测选定的资产
     */
    async ScanComplianceAssets(req, cb) {
        return this.request("ScanComplianceAssets", req, cb);
    }
    /**
     * 修改k8sapi异常事件状态
     */
    async ModifyK8sApiAbnormalEventStatus(req, cb) {
        return this.request("ModifyK8sApiAbnormalEventStatus", req, cb);
    }
    /**
     * 新增漏洞扫描忽略漏洞
     */
    async AddIgnoreVul(req, cb) {
        return this.request("AddIgnoreVul", req, cb);
    }
    /**
     * 查询所有检查项接口，返回总数和检查项列表
     */
    async DescribeCheckItemList(req, cb) {
        return this.request("DescribeCheckItemList", req, cb);
    }
    /**
     * 创建系统漏洞导出任务
     */
    async CreateSystemVulExportJob(req, cb) {
        return this.request("CreateSystemVulExportJob", req, cb);
    }
    /**
     * 运行时查询木马文件信息
     */
    async DescribeVirusDetail(req, cb) {
        return this.request("DescribeVirusDetail", req, cb);
    }
    /**
     * 查询本地镜像漏洞列表导出
     */
    async CreateVulExportJob(req, cb) {
        return this.request("CreateVulExportJob", req, cb);
    }
    /**
     * 查询白名单列表
     */
    async DescribeComplianceWhitelistItemList(req, cb) {
        return this.request("DescribeComplianceWhitelistItemList", req, cb);
    }
    /**
     * 查询集群网络策略列表
     */
    async DescribeNetworkFirewallPolicyList(req, cb) {
        return this.request("DescribeNetworkFirewallPolicyList", req, cb);
    }
    /**
     * 镜像仓库资产刷新
     */
    async SyncAssetImageRegistryAsset(req, cb) {
        return this.request("SyncAssetImageRegistryAsset", req, cb);
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
     * 查询k8sapi 异常规则中范围列表
     */
    async DescribeK8sApiAbnormalRuleScopeList(req, cb) {
        return this.request("DescribeK8sApiAbnormalRuleScopeList", req, cb);
    }
    /**
     * 查询集群列表
     */
    async DescribeAssetClusterList(req, cb) {
        return this.request("DescribeAssetClusterList", req, cb);
    }
    /**
     * 查询支持防御的漏洞列表
     */
    async DescribeSupportDefenceVul(req, cb) {
        return this.request("DescribeSupportDefenceVul", req, cb);
    }
    /**
     * 删除运行时高危系统调用事件
     */
    async DeleteRiskSyscallEvents(req, cb) {
        return this.request("DeleteRiskSyscallEvents", req, cb);
    }
    /**
     * 查询workload类型的影响范围，返回workload列表
     */
    async DescribeAffectedWorkloadList(req, cb) {
        return this.request("DescribeAffectedWorkloadList", req, cb);
    }
    /**
     * 新增安全合规忽略(检测项+资产)列表，不显示指定的检查项包含的资产内容
参考的AddCompliancePolicyItemToWhitelist，除输入字段外，其它应该是一致的，如果有不同可能是定义的不对
     */
    async AddCompliancePolicyAssetSetToWhitelist(req, cb) {
        return this.request("AddCompliancePolicyAssetSetToWhitelist", req, cb);
    }
    /**
     * 删除运行异常进程策略
     */
    async DeleteAbnormalProcessRules(req, cb) {
        return this.request("DeleteAbnormalProcessRules", req, cb);
    }
    /**
     * 查询漏洞详情
     */
    async DescribeVulDetail(req, cb) {
        return this.request("DescribeVulDetail", req, cb);
    }
    /**
     * 查询导出任务管理列表
     */
    async DescribeExportJobManageList(req, cb) {
        return this.request("DescribeExportJobManageList", req, cb);
    }
    /**
     * 创建漏洞扫描任务
     */
    async CreateVulScanTask(req, cb) {
        return this.request("CreateVulScanTask", req, cb);
    }
    /**
     * 查询集群策略列表
     */
    async DescribeNetworkFirewallClusterList(req, cb) {
        return this.request("DescribeNetworkFirewallClusterList", req, cb);
    }
    /**
     * 停止漏洞扫描任务
     */
    async StopVulScanTask(req, cb) {
        return this.request("StopVulScanTask", req, cb);
    }
    /**
     * 镜像仓库敏感信息列表导出
     */
    async DescribeAssetImageRegistryRiskListExport(req, cb) {
        return this.request("DescribeAssetImageRegistryRiskListExport", req, cb);
    }
    /**
     * 运行时文件扫描超时设置
     */
    async ModifyVirusScanTimeoutSetting(req, cb) {
        return this.request("ModifyVirusScanTimeoutSetting", req, cb);
    }
    /**
     * 运行时文件查杀一键扫描
     */
    async CreateVirusScanTask(req, cb) {
        return this.request("CreateVirusScanTask", req, cb);
    }
    /**
     * 查询漏洞防御的主机列表
     */
    async DescribeVulDefenceHost(req, cb) {
        return this.request("DescribeVulDefenceHost", req, cb);
    }
    /**
     * 查询漏洞扫描忽略的本地镜像列表
     */
    async DescribeVulIgnoreLocalImageList(req, cb) {
        return this.request("DescribeVulIgnoreLocalImageList", req, cb);
    }
    /**
     * DescribeEscapeEventDetail  查询容器逃逸事件详情
     */
    async DescribeEscapeEventDetail(req, cb) {
        return this.request("DescribeEscapeEventDetail", req, cb);
    }
    /**
     * 修改高危系统调用事件的状态信息
     */
    async ModifyRiskSyscallStatus(req, cb) {
        return this.request("ModifyRiskSyscallStatus", req, cb);
    }
    /**
     * 创建恶意请求事件导出任务
     */
    async CreateRiskDnsEventExportJob(req, cb) {
        return this.request("CreateRiskDnsEventExportJob", req, cb);
    }
    /**
     * 查询漏洞防御攻击事件趋势
     */
    async DescribeVulDefenceEventTendency(req, cb) {
        return this.request("DescribeVulDefenceEventTendency", req, cb);
    }
    /**
     * 查询逃逸白名单
     */
    async DescribeEscapeWhiteList(req, cb) {
        return this.request("DescribeEscapeWhiteList", req, cb);
    }
    /**
     * 重新检测选的检测项下的所有资产，返回创建的合规检查任务的ID。
     */
    async ScanCompliancePolicyItems(req, cb) {
        return this.request("ScanCompliancePolicyItems", req, cb);
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
     * 查询运行时访问控制策略详细信息
     */
    async DescribeAccessControlRuleDetail(req, cb) {
        return this.request("DescribeAccessControlRuleDetail", req, cb);
    }
    /**
     * 容器网络更新Yaml网络策略并发布任务
     */
    async UpdateAndPublishNetworkFirewallPolicyYamlDetail(req, cb) {
        return this.request("UpdateAndPublishNetworkFirewallPolicyYamlDetail", req, cb);
    }
    /**
     * 批量授权镜像扫描V2.0
     */
    async ModifyImageAuthorized(req, cb) {
        return this.request("ModifyImageAuthorized", req, cb);
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
     * 创建逃逸白名单导出任务
     */
    async CreateEscapeWhiteListExportJob(req, cb) {
        return this.request("CreateEscapeWhiteListExportJob", req, cb);
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
     * 容器安全查询镜像关联主机
     */
    async DescribeAssetImageHostList(req, cb) {
        return this.request("DescribeAssetImageHostList", req, cb);
    }
    /**
     * 查询用户集群资产总览
     */
    async DescribeClusterSummary(req, cb) {
        return this.request("DescribeClusterSummary", req, cb);
    }
    /**
     * 查询漏洞防御事件详情
     */
    async DescribeVulDefenceEventDetail(req, cb) {
        return this.request("DescribeVulDefenceEventDetail", req, cb);
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
     * 获取历史搜索记录
     */
    async DescribeSearchLogs(req, cb) {
        return this.request("DescribeSearchLogs", req, cb);
    }
    /**
     * 新增单个镜像仓库详细信息
     */
    async AddAssetImageRegistryRegistryDetail(req, cb) {
        return this.request("AddAssetImageRegistryRegistryDetail", req, cb);
    }
    /**
     * 容器安全搜索查询端口占用列表
     */
    async DescribeAssetPortList(req, cb) {
        return this.request("DescribeAssetPortList", req, cb);
    }
    /**
     * 新增或编辑本地镜像自动授权规则
     */
    async AddEditImageAutoAuthorizedRule(req, cb) {
        return this.request("AddEditImageAutoAuthorizedRule", req, cb);
    }
    /**
     * 查询容器安全概览信息
     */
    async DescribeTcssSummary(req, cb) {
        return this.request("DescribeTcssSummary", req, cb);
    }
    /**
     * 查询本地镜像风险概览
     */
    async DescribeImageRiskSummary(req, cb) {
        return this.request("DescribeImageRiskSummary", req, cb);
    }
    /**
     * 查询漏洞影响的仓库镜像列表
     */
    async DescribeVulRegistryImageList(req, cb) {
        return this.request("DescribeVulRegistryImageList", req, cb);
    }
    /**
     * 查询应急漏洞列表
     */
    async DescribeEmergencyVulList(req, cb) {
        return this.request("DescribeEmergencyVulList", req, cb);
    }
    /**
     * 查询漏洞各威胁等级统计数
     */
    async DescribeVulLevelSummary(req, cb) {
        return this.request("DescribeVulLevelSummary", req, cb);
    }
    /**
     * 查询集群网络空间标签列表
     */
    async DescribeNetworkFirewallNamespaceLabelList(req, cb) {
        return this.request("DescribeNetworkFirewallNamespaceLabelList", req, cb);
    }
    /**
     * 修改木马自动隔离样本开关
     */
    async ModifyVirusAutoIsolateExampleSwitch(req, cb) {
        return this.request("ModifyVirusAutoIsolateExampleSwitch", req, cb);
    }
    /**
     * 容器网络查询资产任务进度
     */
    async DescribeNetworkFirewallClusterRefreshStatus(req, cb) {
        return this.request("DescribeNetworkFirewallClusterRefreshStatus", req, cb);
    }
    /**
     * 运行时查询文件查杀实时监控设置
     */
    async DescribeVirusMonitorSetting(req, cb) {
        return this.request("DescribeVirusMonitorSetting", req, cb);
    }
    /**
     * 查询木马自动隔离设置
     */
    async DescribeVirusAutoIsolateSetting(req, cb) {
        return this.request("DescribeVirusAutoIsolateSetting", req, cb);
    }
    /**
     * 查询待处理逃逸事件趋势
     */
    async DescribeEscapeEventTendency(req, cb) {
        return this.request("DescribeEscapeEventTendency", req, cb);
    }
    /**
     * 修改定时任务的设置，包括检测周期、开启/禁用合规基准。
     */
    async ModifyCompliancePeriodTask(req, cb) {
        return this.request("ModifyCompliancePeriodTask", req, cb);
    }
    /**
     * 查询安全日志清理设置详情
     */
    async DescribeSecLogCleanSettingInfo(req, cb) {
        return this.request("DescribeSecLogCleanSettingInfo", req, cb);
    }
    /**
     * 查询系统漏洞列表
     */
    async DescribeSystemVulList(req, cb) {
        return this.request("DescribeSystemVulList", req, cb);
    }
    /**
     * 查询漏洞扫描任务的本地镜像列表
     */
    async DescribeVulScanLocalImageList(req, cb) {
        return this.request("DescribeVulScanLocalImageList", req, cb);
    }
    /**
     * 运行时停止木马查杀任务
     */
    async StopVirusScanTask(req, cb) {
        return this.request("StopVirusScanTask", req, cb);
    }
    /**
     * 添加编辑运行时异常进程策略
     */
    async AddEditAbnormalProcessRule(req, cb) {
        return this.request("AddEditAbnormalProcessRule", req, cb);
    }
    /**
     * 修改漏洞防御事件状态
     */
    async ModifyVulDefenceEventStatus(req, cb) {
        return this.request("ModifyVulDefenceEventStatus", req, cb);
    }
    /**
     * 重置安全日志主题设置
     */
    async ResetSecLogTopicConfig(req, cb) {
        return this.request("ResetSecLogTopicConfig", req, cb);
    }
    /**
     * 运行时文件查杀重新检测
     */
    async CreateVirusScanAgain(req, cb) {
        return this.request("CreateVirusScanAgain", req, cb);
    }
    /**
     * 查询集群策略审计列表
     */
    async DescribeNetworkFirewallAuditRecord(req, cb) {
        return this.request("DescribeNetworkFirewallAuditRecord", req, cb);
    }
    /**
     * 修改安全日志接入状态
     */
    async ModifySecLogJoinState(req, cb) {
        return this.request("ModifySecLogJoinState", req, cb);
    }
    /**
     * 查询容器安全未处理事件信息
     */
    async DescribeContainerSecEventSummary(req, cb) {
        return this.request("DescribeContainerSecEventSummary", req, cb);
    }
    /**
     * 查询镜像自动授权任务列表
     */
    async DescribeImageAutoAuthorizedTaskList(req, cb) {
        return this.request("DescribeImageAutoAuthorizedTaskList", req, cb);
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
     * 删除k8sapi异常事件规则
     */
    async DeleteK8sApiAbnormalRule(req, cb) {
        return this.request("DeleteK8sApiAbnormalRule", req, cb);
    }
    /**
     * 查询运行时反弹shell事件列表信息
     */
    async DescribeReverseShellEvents(req, cb) {
        return this.request("DescribeReverseShellEvents", req, cb);
    }
    /**
     * 创建异常进程事件导出异步任务
     */
    async CreateProcessEventsExportJob(req, cb) {
        return this.request("CreateProcessEventsExportJob", req, cb);
    }
    /**
     * 容器网络集群查看策略详情
     */
    async DescribeNetworkFirewallPolicyDetail(req, cb) {
        return this.request("DescribeNetworkFirewallPolicyDetail", req, cb);
    }
    /**
     * 镜像仓库创建镜像扫描任务
     */
    async CreateAssetImageRegistryScanTask(req, cb) {
        return this.request("CreateAssetImageRegistryScanTask", req, cb);
    }
    /**
     * 查询安全日志告警信息
     */
    async DescribeSecLogAlertMsg(req, cb) {
        return this.request("DescribeSecLogAlertMsg", req, cb);
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
     * 容器网络创建网络策略添加并发布任务
     */
    async AddAndPublishNetworkFirewallPolicyDetail(req, cb) {
        return this.request("AddAndPublishNetworkFirewallPolicyDetail", req, cb);
    }
    /**
     * 容器安全搜索查询镜像漏洞列表导出
     */
    async DescribeAssetImageVulListExport(req, cb) {
        return this.request("DescribeAssetImageVulListExport", req, cb);
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
     * 查询集群网络pod标签
     */
    async DescribeNetworkFirewallPodLabelsList(req, cb) {
        return this.request("DescribeNetworkFirewallPodLabelsList", req, cb);
    }
    /**
     * 查询k8sapi异常事件趋势
     */
    async DescribeK8sApiAbnormalTendency(req, cb) {
        return this.request("DescribeK8sApiAbnormalTendency", req, cb);
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
     * 查询集群节点信息
     */
    async DescribeClusterNodes(req, cb) {
        return this.request("DescribeClusterNodes", req, cb);
    }
    /**
     * 获取ES查询文档列表
     */
    async DescribeESHits(req, cb) {
        return this.request("DescribeESHits", req, cb);
    }
    /**
     * 查询漏洞防御设置信息
     */
    async DescribeVulDefenceSetting(req, cb) {
        return this.request("DescribeVulDefenceSetting", req, cb);
    }
    /**
     * 查询资产同步最近时间
     */
    async DescribeAssetSyncLastTime(req, cb) {
        return this.request("DescribeAssetSyncLastTime", req, cb);
    }
    /**
     * 查询k8sapi异常请求规则详情
     */
    async DescribeK8sApiAbnormalRuleInfo(req, cb) {
        return this.request("DescribeK8sApiAbnormalRuleInfo", req, cb);
    }
    /**
     * 查询恶意请求事件详情
     */
    async DescribeRiskDnsEventDetail(req, cb) {
        return this.request("DescribeRiskDnsEventDetail", req, cb);
    }
    /**
     * 产品重构优化，这几个接口已经没有调用了

从白名单中删除将指定的检测项。
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
     * 查询促销活动
     */
    async DescribePromotionActivity(req, cb) {
        return this.request("DescribePromotionActivity", req, cb);
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
     * 获取日志检索容量使用统计
     */
    async DescribeLogStorageStatistic(req, cb) {
        return this.request("DescribeLogStorageStatistic", req, cb);
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
     * 修改木马自动隔离设置
     */
    async ModifyVirusAutoIsolateSetting(req, cb) {
        return this.request("ModifyVirusAutoIsolateSetting", req, cb);
    }
    /**
     * 查询安全日志KafkaUIN
     */
    async DescribeSecLogKafkaUIN(req, cb) {
        return this.request("DescribeSecLogKafkaUIN", req, cb);
    }
    /**
     * 编辑本地镜像自动授权开关
     */
    async SwitchImageAutoAuthorizedRule(req, cb) {
        return this.request("SwitchImageAutoAuthorizedRule", req, cb);
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
     * 获取受影响的集群数量，返回数量
     */
    async DescribeAffectedClusterCount(req, cb) {
        return this.request("DescribeAffectedClusterCount", req, cb);
    }
    /**
     * 创建受漏洞影响的容器导出任务
     */
    async CreateVulContainerExportJob(req, cb) {
        return this.request("CreateVulContainerExportJob", req, cb);
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
     * 查询木马事件趋势
     */
    async DescribeVirusEventTendency(req, cb) {
        return this.request("DescribeVirusEventTendency", req, cb);
    }
    /**
     * 查询镜像自动授权结果列表
     */
    async DescribeImageAutoAuthorizedLogList(req, cb) {
        return this.request("DescribeImageAutoAuthorizedLogList", req, cb);
    }
    /**
     * 查询应急漏洞各威胁等级统计镜像数
     */
    async DescribeVulLevelImageSummary(req, cb) {
        return this.request("DescribeVulLevelImageSummary", req, cb);
    }
    /**
     * 修改反弹shell事件的状态信息
     */
    async ModifyReverseShellStatus(req, cb) {
        return this.request("ModifyReverseShellStatus", req, cb);
    }
    /**
     * 查询安全日志接入列表
     */
    async DescribeSecLogJoinTypeList(req, cb) {
        return this.request("DescribeSecLogJoinTypeList", req, cb);
    }
    /**
     * 添加编辑告警策略
     */
    async AddEditWarningRules(req, cb) {
        return this.request("AddEditWarningRules", req, cb);
    }
    /**
     * 获取用户当前灰度配置
     */
    async DescribeABTestConfig(req, cb) {
        return this.request("DescribeABTestConfig", req, cb);
    }
    /**
     * 容器安全搜索查询镜像风险列表导出
     */
    async DescribeAssetImageRiskListExport(req, cb) {
        return this.request("DescribeAssetImageRiskListExport", req, cb);
    }
    /**
     * 修改安全日志清理设置信息
     */
    async ModifySecLogCleanSettingInfo(req, cb) {
        return this.request("ModifySecLogCleanSettingInfo", req, cb);
    }
    /**
     * 查询导出任务下载URL
     */
    async DescribeExportJobDownloadURL(req, cb) {
        return this.request("DescribeExportJobDownloadURL", req, cb);
    }
    /**
     * 镜像仓库查询镜像漏洞列表
     */
    async DescribeAssetImageRegistryVulList(req, cb) {
        return this.request("DescribeAssetImageRegistryVulList", req, cb);
    }
    /**
     * 查询最近一次任务发现的风险项的信息列表，支持根据特殊字段进行过滤
     */
    async DescribeRiskList(req, cb) {
        return this.request("DescribeRiskList", req, cb);
    }
    /**
     * DescribeEscapeEventInfo 查询容器逃逸事件列表
     */
    async DescribeEscapeEventInfo(req, cb) {
        return this.request("DescribeEscapeEventInfo", req, cb);
    }
    /**
     * 查询漏洞风险统计概览
     */
    async DescribeVulSummary(req, cb) {
        return this.request("DescribeVulSummary", req, cb);
    }
    /**
     * 查询自动授权规则授权范围主机信息
     */
    async DescribeAutoAuthorizedRuleHost(req, cb) {
        return this.request("DescribeAutoAuthorizedRuleHost", req, cb);
    }
    /**
     * 容器网络创建Yaml网络策略并发布任务
     */
    async AddAndPublishNetworkFirewallPolicyYamlDetail(req, cb) {
        return this.request("AddAndPublishNetworkFirewallPolicyYamlDetail", req, cb);
    }
    /**
     * 统计容器逃逸各事件类型和待处理事件数
     */
    async DescribeEscapeEventTypeSummary(req, cb) {
        return this.request("DescribeEscapeEventTypeSummary", req, cb);
    }
    /**
     * 创建逃逸事件导出异步任务
     */
    async CreateEscapeEventsExportJob(req, cb) {
        return this.request("CreateEscapeEventsExportJob", req, cb);
    }
    /**
     * 容器安全查询镜像漏洞列表
     */
    async DescribeAssetImageVulList(req, cb) {
        return this.request("DescribeAssetImageVulList", req, cb);
    }
    /**
     * 查询漏洞Top排名列表
     */
    async DescribeVulTopRanking(req, cb) {
        return this.request("DescribeVulTopRanking", req, cb);
    }
    /**
     * 获取告警策略列表
     */
    async DescribeWarningRules(req, cb) {
        return this.request("DescribeWarningRules", req, cb);
    }
    /**
     * 获取快速检索列表
     */
    async DescribeSearchTemplates(req, cb) {
        return this.request("DescribeSearchTemplates", req, cb);
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
     * 卸载Agent客户端
     */
    async DeleteMachine(req, cb) {
        return this.request("DeleteMachine", req, cb);
    }
    /**
     * 创建主机列表导出任务
     */
    async CreateHostExportJob(req, cb) {
        return this.request("CreateHostExportJob", req, cb);
    }
    /**
     * 开通容器安全服务试用
     */
    async OpenTcssTrial(req, cb) {
        return this.request("OpenTcssTrial", req, cb);
    }
    /**
     * 查询运行时异常进程策略列表信息
     */
    async DescribeAbnormalProcessRules(req, cb) {
        return this.request("DescribeAbnormalProcessRules", req, cb);
    }
    /**
     * 查询检查报告
     */
    async DescribeInspectionReport(req, cb) {
        return this.request("DescribeInspectionReport", req, cb);
    }
    /**
     * 用指定的检测项重新检测选定的资产，返回创建的合规检查任务的ID。
     */
    async ScanComplianceAssetsByPolicyItem(req, cb) {
        return this.request("ScanComplianceAssetsByPolicyItem", req, cb);
    }
    /**
     * 删除逃逸白名单
     */
    async DeleteEscapeWhiteList(req, cb) {
        return this.request("DeleteEscapeWhiteList", req, cb);
    }
    /**
     * 容器网络创建网络策略发布任务
     */
    async CreateNetworkFirewallPublish(req, cb) {
        return this.request("CreateNetworkFirewallPublish", req, cb);
    }
    /**
     * 容器网络创建网络策略撤销任务
     */
    async CreateNetworkFirewallUndoPublish(req, cb) {
        return this.request("CreateNetworkFirewallUndoPublish", req, cb);
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
     * 查询本地镜像、仓库镜像中严重&高危的漏洞趋势
     */
    async DescribeVulTendency(req, cb) {
        return this.request("DescribeVulTendency", req, cb);
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
     * 创建k8sapi异常事件规则
     */
    async CreateK8sApiAbnormalRuleInfo(req, cb) {
        return this.request("CreateK8sApiAbnormalRuleInfo", req, cb);
    }
    /**
     * 查询账户容器、镜像等统计信息
     */
    async DescribeAssetSummary(req, cb) {
        return this.request("DescribeAssetSummary", req, cb);
    }
    /**
     * 查询安全日志投递kafka配置
     */
    async DescribeSecLogDeliveryKafkaSetting(req, cb) {
        return this.request("DescribeSecLogDeliveryKafkaSetting", req, cb);
    }
    /**
     * DescribeRiskContainerImageList查询风险容器镜像列表
     */
    async DescribeEventEscapeImageList(req, cb) {
        return this.request("DescribeEventEscapeImageList", req, cb);
    }
    /**
     * 容器网络创建网络策略删除任务
     */
    async DeleteNetworkFirewallPolicyDetail(req, cb) {
        return this.request("DeleteNetworkFirewallPolicyDetail", req, cb);
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
     * 容器网络创建网络策略添加任务
     */
    async AddNetworkFirewallPolicyDetail(req, cb) {
        return this.request("AddNetworkFirewallPolicyDetail", req, cb);
    }
    /**
     * 查询k8s api 异常事件详情
     */
    async DescribeK8sApiAbnormalEventInfo(req, cb) {
        return this.request("DescribeK8sApiAbnormalEventInfo", req, cb);
    }
    /**
     * 查询待处理异常进程事件趋势
     */
    async DescribeAbnormalProcessEventTendency(req, cb) {
        return this.request("DescribeAbnormalProcessEventTendency", req, cb);
    }
    /**
     * 查询受漏洞的容器列表
     */
    async DescribeVulContainerList(req, cb) {
        return this.request("DescribeVulContainerList", req, cb);
    }
    /**
     * 镜像仓库停止镜像扫描任务
     */
    async ModifyAssetImageRegistryScanStop(req, cb) {
        return this.request("ModifyAssetImageRegistryScanStop", req, cb);
    }
    /**
     * 查询安全日志商品信息
     */
    async DescribeSecLogVasInfo(req, cb) {
        return this.request("DescribeSecLogVasInfo", req, cb);
    }
    /**
     * 获取用户的pod列表
     */
    async DescribeUserPodList(req, cb) {
        return this.request("DescribeUserPodList", req, cb);
    }
    /**
     * 查询木马样本下载url
     */
    async DescribeVirusSampleDownloadUrl(req, cb) {
        return this.request("DescribeVirusSampleDownloadUrl", req, cb);
    }
    /**
     * 查询主机详细信息
     */
    async DescribeAssetHostDetail(req, cb) {
        return this.request("DescribeAssetHostDetail", req, cb);
    }
    /**
     * 镜像仓库漏洞列表导出
     */
    async DescribeAssetImageRegistryVulListExport(req, cb) {
        return this.request("DescribeAssetImageRegistryVulListExport", req, cb);
    }
    /**
     * 查询web应用漏洞列表
     */
    async DescribeWebVulList(req, cb) {
        return this.request("DescribeWebVulList", req, cb);
    }
    /**
     * 查询运行时高危系统调用白名单列表信息
     */
    async DescribeRiskSyscallWhiteLists(req, cb) {
        return this.request("DescribeRiskSyscallWhiteLists", req, cb);
    }
    /**
     * 接口已废弃

查询运行时访问控制策略列表导出
     */
    async DescribeAccessControlRulesExport(req, cb) {
        return this.request("DescribeAccessControlRulesExport", req, cb);
    }
    /**
     * 查询高危系统调用事件详细信息
     */
    async DescribeRiskSyscallDetail(req, cb) {
        return this.request("DescribeRiskSyscallDetail", req, cb);
    }
    /**
     * 查询木马自动隔离样本列表
     */
    async DescribeVirusAutoIsolateSampleList(req, cb) {
        return this.request("DescribeVirusAutoIsolateSampleList", req, cb);
    }
    /**
     * 运行时查询文件查杀任务状态
     */
    async DescribeVirusScanTaskStatus(req, cb) {
        return this.request("DescribeVirusScanTaskStatus", req, cb);
    }
    /**
     * 修改k8sapi异常事件规则状态
     */
    async ModifyK8sApiAbnormalRuleStatus(req, cb) {
        return this.request("ModifyK8sApiAbnormalRuleStatus", req, cb);
    }
    /**
     * 查询容器运行时安全事件趋势
     */
    async DescribeSecEventsTendency(req, cb) {
        return this.request("DescribeSecEventsTendency", req, cb);
    }
    /**
     * 查询镜像详细信息
     */
    async DescribeAssetImageDetail(req, cb) {
        return this.request("DescribeAssetImageDetail", req, cb);
    }
    /**
     * 更新安全日志投递kafka设置
     */
    async ModifySecLogDeliveryKafkaSetting(req, cb) {
        return this.request("ModifySecLogDeliveryKafkaSetting", req, cb);
    }
    /**
     * 创建文件篡改规则导出任务
     */
    async CreateAccessControlsRuleExportJob(req, cb) {
        return this.request("CreateAccessControlsRuleExportJob", req, cb);
    }
    /**
     * 新增安全合规忽略(检测项+资产)列表，不显示指定的检查项包含的资产内容
     */
    async DeleteCompliancePolicyAssetSetFromWhitelist(req, cb) {
        return this.request("DeleteCompliancePolicyAssetSetFromWhitelist", req, cb);
    }
    /**
     * 查询k8sapi异常请求规则列表
     */
    async DescribeK8sApiAbnormalRuleList(req, cb) {
        return this.request("DescribeK8sApiAbnormalRuleList", req, cb);
    }
}
exports.Client = Client;
