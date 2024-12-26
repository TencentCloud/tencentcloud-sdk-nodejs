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
 * csip client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("csip.tencentcloudapi.com", "2022-11-21", clientConfig);
    }
    /**
     * 查询用户行为分析策略列表
     */
    async DescribeUebaRule(req, cb) {
        return this.request("DescribeUebaRule", req, cb);
    }
    /**
     * 获取任务扫描报告列表
     */
    async DescribeTaskLogList(req, cb) {
        return this.request("DescribeTaskLogList", req, cb);
    }
    /**
     * 删除域名和ip请求
     */
    async DeleteDomainAndIp(req, cb) {
        return this.request("DeleteDomainAndIp", req, cb);
    }
    /**
     * db资产详情
     */
    async DescribeDbAssetInfo(req, cb) {
        return this.request("DescribeDbAssetInfo", req, cb);
    }
    /**
     * 获取网卡列表
     */
    async DescribeNICAssets(req, cb) {
        return this.request("DescribeNICAssets", req, cb);
    }
    /**
     * 获取漏洞视角的漏洞风险列表
     */
    async DescribeRiskCenterVULViewVULRiskList(req, cb) {
        return this.request("DescribeRiskCenterVULViewVULRiskList", req, cb);
    }
    /**
     * 域名列表
     */
    async DescribeDomainAssets(req, cb) {
        return this.request("DescribeDomainAssets", req, cb);
    }
    /**
     * ip公网列表
     */
    async DescribePublicIpAssets(req, cb) {
        return this.request("DescribePublicIpAssets", req, cb);
    }
    /**
     * csip角色授权绑定接口
     */
    async AddNewBindRoleUser(req, cb) {
        return this.request("AddNewBindRoleUser", req, cb);
    }
    /**
     * 查询clb监听器列表
     */
    async DescribeListenerList(req, cb) {
        return this.request("DescribeListenerList", req, cb);
    }
    /**
     * 停止扫风险中心扫描任务
     */
    async StopRiskCenterTask(req, cb) {
        return this.request("StopRiskCenterTask", req, cb);
    }
    /**
     * 删除风险中心扫描任务
     */
    async DeleteRiskScanTask(req, cb) {
        return this.request("DeleteRiskScanTask", req, cb);
    }
    /**
     * 获取资产视角的弱口令风险列表
     */
    async DescribeRiskCenterAssetViewWeakPasswordRiskList(req, cb) {
        return this.request("DescribeRiskCenterAssetViewWeakPasswordRiskList", req, cb);
    }
    /**
     * 获取资产视角的漏洞风险列表
     */
    async DescribeRiskCenterAssetViewVULRiskList(req, cb) {
        return this.request("DescribeRiskCenterAssetViewVULRiskList", req, cb);
    }
    /**
     * 集群pod列表
     */
    async DescribeClusterPodAssets(req, cb) {
        return this.request("DescribeClusterPodAssets", req, cb);
    }
    /**
     * 获取资产视角的配置风险列表
     */
    async DescribeRiskCenterAssetViewCFGRiskList(req, cb) {
        return this.request("DescribeRiskCenterAssetViewCFGRiskList", req, cb);
    }
    /**
     * 获取vpc列表
     */
    async DescribeVpcAssets(req, cb) {
        return this.request("DescribeVpcAssets", req, cb);
    }
    /**
     * 获取风险服务列表
     */
    async DescribeRiskCenterServerRiskList(req, cb) {
        return this.request("DescribeRiskCenterServerRiskList", req, cb);
    }
    /**
     * 获取cvm列表
     */
    async DescribeCVMAssets(req, cb) {
        return this.request("DescribeCVMAssets", req, cb);
    }
    /**
     * 修改风险中心扫描任务
     */
    async ModifyRiskCenterScanTask(req, cb) {
        return this.request("ModifyRiskCenterScanTask", req, cb);
    }
    /**
     * 云防资产中心统计数据
     */
    async DescribeCFWAssetStatistics(req, cb) {
        return this.request("DescribeCFWAssetStatistics", req, cb);
    }
    /**
     * 获取资产视角的漏洞风险列表
     */
    async DescribeAssetViewVulRiskList(req, cb) {
        return this.request("DescribeAssetViewVulRiskList", req, cb);
    }
    /**
     * 获取漏洞展开详情
     */
    async DescribeVULRiskDetail(req, cb) {
        return this.request("DescribeVULRiskDetail", req, cb);
    }
    /**
     * 获取内容风险列表
     */
    async DescribeRiskCenterWebsiteRiskList(req, cb) {
        return this.request("DescribeRiskCenterWebsiteRiskList", req, cb);
    }
    /**
     * 查询集团账号详情
     */
    async DescribeOrganizationInfo(req, cb) {
        return this.request("DescribeOrganizationInfo", req, cb);
    }
    /**
     * 获取报告下载的临时链接
     */
    async DescribeTaskLogURL(req, cb) {
        return this.request("DescribeTaskLogURL", req, cb);
    }
    /**
     * 更新自定义策略的开关
     */
    async ModifyUebaRuleSwitch(req, cb) {
        return this.request("ModifyUebaRuleSwitch", req, cb);
    }
    /**
     * 创建风险中心扫描任务
     */
    async CreateRiskCenterScanTask(req, cb) {
        return this.request("CreateRiskCenterScanTask", req, cb);
    }
    /**
     * 获取网关列表
     */
    async DescribeGatewayAssets(req, cb) {
        return this.request("DescribeGatewayAssets", req, cb);
    }
    /**
     * 查询TOP攻击信息
     */
    async DescribeTopAttackInfo(req, cb) {
        return this.request("DescribeTopAttackInfo", req, cb);
    }
    /**
     * 立体防护中心查询漏洞信息
     */
    async DescribeSearchBugInfo(req, cb) {
        return this.request("DescribeSearchBugInfo", req, cb);
    }
    /**
     * 查询集团的子账号列表
     */
    async DescribeSubUserInfo(req, cb) {
        return this.request("DescribeSubUserInfo", req, cb);
    }
    /**
     * 获取漏洞视角的漏洞风险列表
     */
    async DescribeVulViewVulRiskList(req, cb) {
        return this.request("DescribeVulViewVulRiskList", req, cb);
    }
    /**
     * 获取扫描报告列表
     */
    async DescribeScanReportList(req, cb) {
        return this.request("DescribeScanReportList", req, cb);
    }
    /**
     * 创建域名、ip相关信息
     */
    async CreateDomainAndIp(req, cb) {
        return this.request("CreateDomainAndIp", req, cb);
    }
    /**
     * 告警中心全量告警列表接口
     */
    async DescribeAlertList(req, cb) {
        return this.request("DescribeAlertList", req, cb);
    }
    /**
     * 批量告警状态处理接口
     */
    async UpdateAlertStatusList(req, cb) {
        return this.request("UpdateAlertStatusList", req, cb);
    }
    /**
     * 获取扫描任务列表
     */
    async DescribeScanTaskList(req, cb) {
        return this.request("DescribeScanTaskList", req, cb);
    }
    /**
     * 数据库资产列表
     */
    async DescribeDbAssets(req, cb) {
        return this.request("DescribeDbAssets", req, cb);
    }
    /**
     * 获取端口视角的端口风险列表
     */
    async DescribeRiskCenterPortViewPortRiskList(req, cb) {
        return this.request("DescribeRiskCenterPortViewPortRiskList", req, cb);
    }
    /**
     * 获取资产视角的端口风险列表
     */
    async DescribeRiskCenterAssetViewPortRiskList(req, cb) {
        return this.request("DescribeRiskCenterAssetViewPortRiskList", req, cb);
    }
    /**
     * 查询漏洞风险高级配置
     */
    async DescribeVULRiskAdvanceCFGList(req, cb) {
        return this.request("DescribeVULRiskAdvanceCFGList", req, cb);
    }
    /**
     * 修改风险中心风险状态
     */
    async ModifyRiskCenterRiskStatus(req, cb) {
        return this.request("ModifyRiskCenterRiskStatus", req, cb);
    }
    /**
     * 修改集团账号状态
     */
    async ModifyOrganizationAccountStatus(req, cb) {
        return this.request("ModifyOrganizationAccountStatus", req, cb);
    }
    /**
     * 查询集团账号用户列表
     */
    async DescribeOrganizationUserInfo(req, cb) {
        return this.request("DescribeOrganizationUserInfo", req, cb);
    }
    /**
     * 集群列表
     */
    async DescribeClusterAssets(req, cb) {
        return this.request("DescribeClusterAssets", req, cb);
    }
    /**
     * 获取子网列表
     */
    async DescribeSubnetAssets(req, cb) {
        return this.request("DescribeSubnetAssets", req, cb);
    }
    /**
     * cvm详情
     */
    async DescribeCVMAssetInfo(req, cb) {
        return this.request("DescribeCVMAssetInfo", req, cb);
    }
}
exports.Client = Client;
