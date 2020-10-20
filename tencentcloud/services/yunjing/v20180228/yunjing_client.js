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
 * yunjing client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("yunjing.tencentcloudapi.com", "2018-02-28", clientConfig);
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
     * 本接口 (OpenProVersion) 用于开通专业版。
     */
    async OpenProVersion(req, cb) {
        return this.request("OpenProVersion", req, cb);
    }
    /**
     * 本接口 (DescribeWeeklyReportMalwares) 用于获取专业周报木马数据。
     */
    async DescribeWeeklyReportMalwares(req, cb) {
        return this.request("DescribeWeeklyReportMalwares", req, cb);
    }
    /**
     * 本接口 (DescribeVulInfo) 用于获取漏洞详情。
     */
    async DescribeVulInfo(req, cb) {
        return this.request("DescribeVulInfo", req, cb);
    }
    /**
     * 新增或修改高危命令规则
     */
    async EditBashRule(req, cb) {
        return this.request("EditBashRule", req, cb);
    }
    /**
     * 本接口（DeleteUsualLoginPlaces）用于删除常用登录地。
     */
    async DeleteUsualLoginPlaces(req, cb) {
        return this.request("DeleteUsualLoginPlaces", req, cb);
    }
    /**
     * 本接口 (DescribeVuls) 用于获取漏洞列表数据。
     */
    async DescribeVuls(req, cb) {
        return this.request("DescribeVuls", req, cb);
    }
    /**
     * 本接口{MisAlarmNonlocalLoginPlaces}将设置当前地点为常用登录地。
     */
    async MisAlarmNonlocalLoginPlaces(req, cb) {
        return this.request("MisAlarmNonlocalLoginPlaces", req, cb);
    }
    /**
     * 根据策略信息创建基线策略
     */
    async CreateBaselineStrategy(req, cb) {
        return this.request("CreateBaselineStrategy", req, cb);
    }
    /**
     * 获取高危命令规则列表
     */
    async DescribeBashRules(req, cb) {
        return this.request("DescribeBashRules", req, cb);
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
     * 获取反弹Shell规则列表
     */
    async DescribeReverseShellRules(req, cb) {
        return this.request("DescribeReverseShellRules", req, cb);
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
     * 本接口 (CreateProcessTask) 用于创建实时拉取进程任务。
     */
    async CreateProcessTask(req, cb) {
        return this.request("CreateProcessTask", req, cb);
    }
    /**
     * 编辑反弹Shell规则
     */
    async EditReverseShellRule(req, cb) {
        return this.request("EditReverseShellRule", req, cb);
    }
    /**
     * 本接口 (DescribeProcesses) 用于获取进程列表数据。
     */
    async DescribeProcesses(req, cb) {
        return this.request("DescribeProcesses", req, cb);
    }
    /**
     * 本接口（DescribeMalwares）用于获取木马事件列表。
     */
    async DescribeMalwares(req, cb) {
        return this.request("DescribeMalwares", req, cb);
    }
    /**
     * 编辑白名单规则
     */
    async ModifyLoginWhiteList(req, cb) {
        return this.request("ModifyLoginWhiteList", req, cb);
    }
    /**
     * 获取本地提权规则列表
     */
    async DescribePrivilegeRules(req, cb) {
        return this.request("DescribePrivilegeRules", req, cb);
    }
    /**
     * 本接口 (UntrustMaliciousRequest) 用于取消信任恶意请求。
     */
    async UntrustMaliciousRequest(req, cb) {
        return this.request("UntrustMaliciousRequest", req, cb);
    }
    /**
     * 本接口 (DescribeImpactedHosts) 用于获取漏洞受影响机器列表。
     */
    async DescribeImpactedHosts(req, cb) {
        return this.request("DescribeImpactedHosts", req, cb);
    }
    /**
     * 本接口 (DeleteNonlocalLoginPlaces) 用于删除异地登录记录。
     */
    async DeleteNonlocalLoginPlaces(req, cb) {
        return this.request("DeleteNonlocalLoginPlaces", req, cb);
    }
    /**
     * 本接口 (DescribeOpenPorts) 用于获取端口列表数据。

     */
    async DescribeOpenPorts(req, cb) {
        return this.request("DescribeOpenPorts", req, cb);
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
     * 本接口(DescribeNonlocalLoginPlaces)用于获取异地登录事件。
     */
    async DescribeNonlocalLoginPlaces(req, cb) {
        return this.request("DescribeNonlocalLoginPlaces", req, cb);
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
     * 本接口 (DescribeOpenPortTaskStatus) 用于获取实时拉取端口任务状态。
     */
    async DescribeOpenPortTaskStatus(req, cb) {
        return this.request("DescribeOpenPortTaskStatus", req, cb);
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
     * 本接口 (DescribeWeeklyReportNonlocalLoginPlaces) 用于获取专业周报异地登录数据。
     */
    async DescribeWeeklyReportNonlocalLoginPlaces(req, cb) {
        return this.request("DescribeWeeklyReportNonlocalLoginPlaces", req, cb);
    }
    /**
     * 删除白名单规则
     */
    async DeleteLoginWhiteList(req, cb) {
        return this.request("DeleteLoginWhiteList", req, cb);
    }
    /**
     * 本接口 (CreateOpenPortTask) 用于创建实时获取端口任务。
     */
    async CreateOpenPortTask(req, cb) {
        return this.request("CreateOpenPortTask", req, cb);
    }
    /**
     * 本接口 (CloseProVersion) 用于关闭专业版。
     */
    async CloseProVersion(req, cb) {
        return this.request("CloseProVersion", req, cb);
    }
    /**
     * 本接口 (DescribeAccountStatistics) 用于获取帐号统计列表数据。
     */
    async DescribeAccountStatistics(req, cb) {
        return this.request("DescribeAccountStatistics", req, cb);
    }
    /**
     * 本接口（ModifyAlarmAttribute）用于修改告警设置。
     */
    async ModifyAlarmAttribute(req, cb) {
        return this.request("ModifyAlarmAttribute", req, cb);
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
     * 本接口 (TrustMaliciousRequest) 用于恶意请求添加信任。
     */
    async TrustMaliciousRequest(req, cb) {
        return this.request("TrustMaliciousRequest", req, cb);
    }
    /**
     * 切换高危命令规则状态
     */
    async SwitchBashRules(req, cb) {
        return this.request("SwitchBashRules", req, cb);
    }
    /**
     * 新增或修改本地提权规则
     */
    async EditPrivilegeRule(req, cb) {
        return this.request("EditPrivilegeRule", req, cb);
    }
    /**
     * 本接口 (ExportMalwares) 用于导出木马记录CSV文件。
     */
    async ExportMalwares(req, cb) {
        return this.request("ExportMalwares", req, cb);
    }
    /**
     * 本接口{DescribeBruteAttacks}用于获取暴力破解事件列表。
     */
    async DescribeBruteAttacks(req, cb) {
        return this.request("DescribeBruteAttacks", req, cb);
    }
    /**
     * 本接口 (OpenProVersionPrepaid) 用于开通专业版(包年包月)。
     */
    async OpenProVersionPrepaid(req, cb) {
        return this.request("OpenProVersionPrepaid", req, cb);
    }
    /**
     * 增加机器关联标签
     */
    async AddMachineTag(req, cb) {
        return this.request("AddMachineTag", req, cb);
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
     * 本接口（AddLoginWhiteList）用于添加白名单规则
     */
    async AddLoginWhiteList(req, cb) {
        return this.request("AddLoginWhiteList", req, cb);
    }
    /**
     * 本接口 (ExportNonlocalLoginPlaces) 用于导出异地登录事件记录CSV文件。
     */
    async ExportNonlocalLoginPlaces(req, cb) {
        return this.request("ExportNonlocalLoginPlaces", req, cb);
    }
    /**
     * 本接口 (DescribeMaliciousRequests) 用于获取恶意请求数据。
     */
    async DescribeMaliciousRequests(req, cb) {
        return this.request("DescribeMaliciousRequests", req, cb);
    }
    /**
     * 删除高危命令规则
     */
    async DeleteBashRules(req, cb) {
        return this.request("DeleteBashRules", req, cb);
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
     * 本接口 (DescribeAgentVuls) 用于获取单台主机的漏洞列表。
     */
    async DescribeAgentVuls(req, cb) {
        return this.request("DescribeAgentVuls", req, cb);
    }
    /**
     * 本接口 (DescribeAccounts) 用于获取帐号列表数据。
     */
    async DescribeAccounts(req, cb) {
        return this.request("DescribeAccounts", req, cb);
    }
    /**
     * 本接口 (DescribeWeeklyReports) 用于获取周报列表数据。
     */
    async DescribeWeeklyReports(req, cb) {
        return this.request("DescribeWeeklyReports", req, cb);
    }
    /**
     * 本接口 (DescribeProVersionInfo) 用于获取专业版信息。
     */
    async DescribeProVersionInfo(req, cb) {
        return this.request("DescribeProVersionInfo", req, cb);
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
     * 本接口 (DescribeAlarmAttribute) 用于获取告警设置。
     */
    async DescribeAlarmAttribute(req, cb) {
        return this.request("DescribeAlarmAttribute", req, cb);
    }
    /**
     * 本接口 (DescribeComponents) 用于获取组件列表数据。
     */
    async DescribeComponents(req, cb) {
        return this.request("DescribeComponents", req, cb);
    }
    /**
     * 获取异地登录白名单列表
     */
    async DescribeLoginWhiteList(req, cb) {
        return this.request("DescribeLoginWhiteList", req, cb);
    }
    /**
     * 本接口 (DescribeVulScanResult) 用于获取漏洞检测结果。

     */
    async DescribeVulScanResult(req, cb) {
        return this.request("DescribeVulScanResult", req, cb);
    }
    /**
     * 本接口 (DescribeHistoryAccounts) 用于获取帐号变更历史列表数据。
     */
    async DescribeHistoryAccounts(req, cb) {
        return this.request("DescribeHistoryAccounts", req, cb);
    }
    /**
     * 本接口 (DescribeProcessStatistics) 用于获取进程统计列表数据。
     */
    async DescribeProcessStatistics(req, cb) {
        return this.request("DescribeProcessStatistics", req, cb);
    }
    /**
     * 本接口 (DescribeWeeklyReportBruteAttacks) 用于获取专业周报密码破解数据。
     */
    async DescribeWeeklyReportBruteAttacks(req, cb) {
        return this.request("DescribeWeeklyReportBruteAttacks", req, cb);
    }
    /**
     * 本接口（UntrustMalwares）用于取消信任木马文件。
     */
    async UntrustMalwares(req, cb) {
        return this.request("UntrustMalwares", req, cb);
    }
    /**
     * 本接口 (DescribeWeeklyReportVuls) 用于专业版周报漏洞数据。

     */
    async DescribeWeeklyReportVuls(req, cb) {
        return this.request("DescribeWeeklyReportVuls", req, cb);
    }
    /**
     * 本接口 (DescribeWeeklyReportInfo) 用于获取专业周报详情数据。
     */
    async DescribeWeeklyReportInfo(req, cb) {
        return this.request("DescribeWeeklyReportInfo", req, cb);
    }
    /**
     * 本接口 (DescribeComponentInfo) 用于获取组件信息数据。
     */
    async DescribeComponentInfo(req, cb) {
        return this.request("DescribeComponentInfo", req, cb);
    }
    /**
     * 本接口 (ModifyProVersionRenewFlag) 用于修改专业版包年包月续费标识。
     */
    async ModifyProVersionRenewFlag(req, cb) {
        return this.request("ModifyProVersionRenewFlag", req, cb);
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
     * 本接口（DeleteMachine）用于卸载云镜客户端。
     */
    async DeleteMachine(req, cb) {
        return this.request("DeleteMachine", req, cb);
    }
    /**
     * 本接口 (DescribeProcessTaskStatus) 用于获取实时拉取进程任务状态。
     */
    async DescribeProcessTaskStatus(req, cb) {
        return this.request("DescribeProcessTaskStatus", req, cb);
    }
    /**
     * 本接口 (RescanImpactedHost) 用于漏洞重新检测。
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
     * 本接口 (IgnoreImpactedHosts) 用于忽略漏洞。
     */
    async IgnoreImpactedHosts(req, cb) {
        return this.request("IgnoreImpactedHosts", req, cb);
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
     * 此接口（CreateUsualLoginPlaces）用于添加常用登录地。
     */
    async CreateUsualLoginPlaces(req, cb) {
        return this.request("CreateUsualLoginPlaces", req, cb);
    }
    /**
     * 本接口 (InquiryPriceOpenProVersionPrepaid) 用于开通专业版询价(预付费)。
     */
    async InquiryPriceOpenProVersionPrepaid(req, cb) {
        return this.request("InquiryPriceOpenProVersionPrepaid", req, cb);
    }
}
exports.Client = Client;
