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
 * cynosdb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cynosdb.tencentcloudapi.com", "2019-01-07", clientConfig);
    }
    /**
     * 本接口（ResumeServerless）用于恢复 serverless 集群（启动暂停的集群）。
     */
    async ResumeServerless(req, cb) {
        return this.request("ResumeServerless", req, cb);
    }
    /**
     * 本接口（UpgradeProxyVersion）用于升级数据库代理版本。
     */
    async UpgradeProxyVersion(req, cb) {
        return this.request("UpgradeProxyVersion", req, cb);
    }
    /**
     * 本接口（DescribeBackupConfig）用于获取指定集群的备份配置信息，包括全量备份时间段、备份文件保留时间。
     */
    async DescribeBackupConfig(req, cb) {
        return this.request("DescribeBackupConfig", req, cb);
    }
    /**
     * 该接口（ModifyBinlogConfig）用于修改Binlog配置
     */
    async ModifyBinlogConfig(req, cb) {
        return this.request("ModifyBinlogConfig", req, cb);
    }
    /**
     * 本接口（CreateProxyEndPoint）用于创建数据库代理连接点。
     */
    async CreateProxyEndPoint(req, cb) {
        return this.request("CreateProxyEndPoint", req, cb);
    }
    /**
     * 本接口（ModifyResourcePackageClusters）用于修改资源包与集群之间的绑定关系。
     */
    async ModifyResourcePackageClusters(req, cb) {
        return this.request("ModifyResourcePackageClusters", req, cb);
    }
    /**
     * 本接口（CreateAuditRuleTemplate）用于创建审计规则模板。
     */
    async CreateAuditRuleTemplate(req, cb) {
        return this.request("CreateAuditRuleTemplate", req, cb);
    }
    /**
     * 本接口（GrantAccountPrivileges）用于批量授权账号权限。
     */
    async GrantAccountPrivileges(req, cb) {
        return this.request("GrantAccountPrivileges", req, cb);
    }
    /**
     * 本接口（DescribeClusterParamLogs）用于查询参数修改记录。
     */
    async DescribeClusterParamLogs(req, cb) {
        return this.request("DescribeClusterParamLogs", req, cb);
    }
    /**
     * 本接口（ModifyMaintainPeriodConfig）用于修改维护时间配置。
     */
    async ModifyMaintainPeriodConfig(req, cb) {
        return this.request("ModifyMaintainPeriodConfig", req, cb);
    }
    /**
     * 本接口（CopyClusterPasswordComplexity）用于复制集群密码复杂度。
     */
    async CopyClusterPasswordComplexity(req, cb) {
        return this.request("CopyClusterPasswordComplexity", req, cb);
    }
    /**
     * 本接口（CloseAuditService）用于关闭 TDSQL-C MySQL 实例的数据库审计服务。
     */
    async CloseAuditService(req, cb) {
        return this.request("CloseAuditService", req, cb);
    }
    /**
     * 本接口（DescribeSupportProxyVersion）用于查询支持的数据库代理版本。
     */
    async DescribeSupportProxyVersion(req, cb) {
        return this.request("DescribeSupportProxyVersion", req, cb);
    }
    /**
     * 本接口(CreateAuditLogFile)用于创建云数据库实例的审计日志文件。
     */
    async CreateAuditLogFile(req, cb) {
        return this.request("CreateAuditLogFile", req, cb);
    }
    /**
     * 续费集群
     */
    async RenewClusters(req, cb) {
        return this.request("RenewClusters", req, cb);
    }
    /**
     * 本接口（CloseProxyEndPoint）用于关闭数据库代理连接地址。
     */
    async CloseProxyEndPoint(req, cb) {
        return this.request("CloseProxyEndPoint", req, cb);
    }
    /**
     * 本接口（CloseProxy）用于关闭集群的数据库代理服务。
     */
    async CloseProxy(req, cb) {
        return this.request("CloseProxy", req, cb);
    }
    /**
     * 本接口（DescribeProxySpecs）用于查询数据库代理规格。
     */
    async DescribeProxySpecs(req, cb) {
        return this.request("DescribeProxySpecs", req, cb);
    }
    /**
     * 变配预付费集群询价
     */
    async InquirePriceModify(req, cb) {
        return this.request("InquirePriceModify", req, cb);
    }
    /**
     * 本接口（SwitchProxyVpc）用于更换数据库代理vpc。
     */
    async SwitchProxyVpc(req, cb) {
        return this.request("SwitchProxyVpc", req, cb);
    }
    /**
     * 该接口（DescribeClusterDetail）用于显示集群详情。
     */
    async DescribeClusterDetail(req, cb) {
        return this.request("DescribeClusterDetail", req, cb);
    }
    /**
     * 本接口（DescribeTasks）用于查询任务列表。
     */
    async DescribeTasks(req, cb) {
        return this.request("DescribeTasks", req, cb);
    }
    /**
     * 本接口（DescribeInstanceSpecs）用于查询购买页可购买的实例规格。
     */
    async DescribeInstanceSpecs(req, cb) {
        return this.request("DescribeInstanceSpecs", req, cb);
    }
    /**
     * 本接口（DescribeBinlogDownloadUrl）用于查询 Binlog 的下载地址。
     */
    async DescribeBinlogDownloadUrl(req, cb) {
        return this.request("DescribeBinlogDownloadUrl", req, cb);
    }
    /**
     * 本接口（DescribeResourcesByDealName）用于查询订单关联实例。
     */
    async DescribeResourcesByDealName(req, cb) {
        return this.request("DescribeResourcesByDealName", req, cb);
    }
    /**
     * 本接口（ModifyClusterStorage）用于调整包年包月存储容量。
     */
    async ModifyClusterStorage(req, cb) {
        return this.request("ModifyClusterStorage", req, cb);
    }
    /**
     * 本接口（ActivateInstance）用于恢复已隔离的实例访问。
     */
    async ActivateInstance(req, cb) {
        return this.request("ActivateInstance", req, cb);
    }
    /**
     * 本接口（DescribeProxyNodes）用于查询代理节点列表。
     */
    async DescribeProxyNodes(req, cb) {
        return this.request("DescribeProxyNodes", req, cb);
    }
    /**
     * 本接口（DisassociateSecurityGroups）用于安全组批量解绑云资源。
     */
    async DisassociateSecurityGroups(req, cb) {
        return this.request("DisassociateSecurityGroups", req, cb);
    }
    /**
     * 查询集群透明加密信息
     */
    async DescribeClusterTransparentEncryptInfo(req, cb) {
        return this.request("DescribeClusterTransparentEncryptInfo", req, cb);
    }
    /**
     * 本接口（ExportInstanceSlowQueries）用于导出实例慢日志。
     */
    async ExportInstanceSlowQueries(req, cb) {
        return this.request("ExportInstanceSlowQueries", req, cb);
    }
    /**
     * 本接口（DeleteCLSDelivery）用于删除日志投递。
     */
    async DeleteCLSDelivery(req, cb) {
        return this.request("DeleteCLSDelivery", req, cb);
    }
    /**
     * 本接口（DescribeChangedParamsAfterUpgrade）用于查询升降配运行参数对比。
     */
    async DescribeChangedParamsAfterUpgrade(req, cb) {
        return this.request("DescribeChangedParamsAfterUpgrade", req, cb);
    }
    /**
     * 本接口（DescribeAccountPrivileges）用于查询账号已有权限。
     */
    async DescribeAccountPrivileges(req, cb) {
        return this.request("DescribeAccountPrivileges", req, cb);
    }
    /**
     * 本接口（CloseClusterPasswordComplexity）用于关闭集群密码复杂度。
     */
    async CloseClusterPasswordComplexity(req, cb) {
        return this.request("CloseClusterPasswordComplexity", req, cb);
    }
    /**
     * 本接口（RollBackCluster）用于集群回档。
     */
    async RollBackCluster(req, cb) {
        return this.request("RollBackCluster", req, cb);
    }
    /**
     * 此接口（DescribeBinlogSaveDays）用于查询集群的Binlog保留天数。
     */
    async DescribeBinlogSaveDays(req, cb) {
        return this.request("DescribeBinlogSaveDays", req, cb);
    }
    /**
     * 本接口（SearchClusterTables）用于搜索集群数据表列表。
     */
    async SearchClusterTables(req, cb) {
        return this.request("SearchClusterTables", req, cb);
    }
    /**
     * 本接口（DescribeClusterInstanceGrps）用于查询实例组信息。 该接口已废弃，推荐使用DescribeClusterInstanceGroups
     */
    async DescribeClusterInstanceGrps(req, cb) {
        return this.request("DescribeClusterInstanceGrps", req, cb);
    }
    /**
     * 本接口（DescribeIsolatedInstances）用于查询回收站实例列表。
     */
    async DescribeIsolatedInstances(req, cb) {
        return this.request("DescribeIsolatedInstances", req, cb);
    }
    /**
     * 本接口（DescribeInstanceErrorLogs）用于查询实例错误日志列表。
     */
    async DescribeInstanceErrorLogs(req, cb) {
        return this.request("DescribeInstanceErrorLogs", req, cb);
    }
    /**
     * 本接口（ModifyClusterName）用于修改集群名称。
     */
    async ModifyClusterName(req, cb) {
        return this.request("ModifyClusterName", req, cb);
    }
    /**
     * 本接口（ModifyProxyRwSplit）用于配置数据库代理读写分离。
     */
    async ModifyProxyRwSplit(req, cb) {
        return this.request("ModifyProxyRwSplit", req, cb);
    }
    /**
     * 本接口（ModifyVipVport）用于修改实例组ip，端口。
     */
    async ModifyVipVport(req, cb) {
        return this.request("ModifyVipVport", req, cb);
    }
    /**
     * 本接口（DeleteAuditRuleTemplates）用于删除审计规则模板。
     */
    async DeleteAuditRuleTemplates(req, cb) {
        return this.request("DeleteAuditRuleTemplates", req, cb);
    }
    /**
     * 本接口（ModifyProxyDesc）用于修改数据库代理描述。
     */
    async ModifyProxyDesc(req, cb) {
        return this.request("ModifyProxyDesc", req, cb);
    }
    /**
     * 本接口（CreateParamTemplate）用于创建参数模板。
     */
    async CreateParamTemplate(req, cb) {
        return this.request("CreateParamTemplate", req, cb);
    }
    /**
     * 本接口（ModifyClusterSlaveZone）用于变更集群的备可用区。
     */
    async ModifyClusterSlaveZone(req, cb) {
        return this.request("ModifyClusterSlaveZone", req, cb);
    }
    /**
     * 本接口（ModifyAccountParams）用于修改账号配置。
     */
    async ModifyAccountParams(req, cb) {
        return this.request("ModifyAccountParams", req, cb);
    }
    /**
     * 本接口（ModifyClusterPasswordComplexity）用于修改/开启集群密码复杂度。
     */
    async ModifyClusterPasswordComplexity(req, cb) {
        return this.request("ModifyClusterPasswordComplexity", req, cb);
    }
    /**
     * 本接口（CreateBackup）用于为集群创建手动备份。
     */
    async CreateBackup(req, cb) {
        return this.request("CreateBackup", req, cb);
    }
    /**
     * 本接口（OfflineInstance）用于销毁实例。
     */
    async OfflineInstance(req, cb) {
        return this.request("OfflineInstance", req, cb);
    }
    /**
     * 本接口（IsolateCluster）用于隔离集群。
     */
    async IsolateCluster(req, cb) {
        return this.request("IsolateCluster", req, cb);
    }
    /**
     * 本接口（DescribeInstancesWithinSameCluster）用于查询同一集群下实例列表
     */
    async DescribeInstancesWithinSameCluster(req, cb) {
        return this.request("DescribeInstancesWithinSameCluster", req, cb);
    }
    /**
     * 本接口（RestartInstance）用于重启实例。
     */
    async RestartInstance(req, cb) {
        return this.request("RestartInstance", req, cb);
    }
    /**
     * 本接口（UpgradeProxy）用于升级数据库代理配置。
     */
    async UpgradeProxy(req, cb) {
        return this.request("UpgradeProxy", req, cb);
    }
    /**
     * 本接口（DescribeClusters）用于查询集群列表。
     */
    async DescribeClusters(req, cb) {
        return this.request("DescribeClusters", req, cb);
    }
    /**
     * 本接口（CloseWan）用于关闭外网。
     */
    async CloseWan(req, cb) {
        return this.request("CloseWan", req, cb);
    }
    /**
     * 本接口（DescribeProjectSecurityGroups）用于查询项目安全组信息。
     */
    async DescribeProjectSecurityGroups(req, cb) {
        return this.request("DescribeProjectSecurityGroups", req, cb);
    }
    /**
     * 本接口（ModifyClusterDatabase）用于修改数据库的账号授权。
     */
    async ModifyClusterDatabase(req, cb) {
        return this.request("ModifyClusterDatabase", req, cb);
    }
    /**
     * 本接口（ModifyAuditRuleTemplates）用于修改审计规则模板。
     */
    async ModifyAuditRuleTemplates(req, cb) {
        return this.request("ModifyAuditRuleTemplates", req, cb);
    }
    /**
     * 本接口（ModifyParamTemplate）用于修改用户参数模板。
     */
    async ModifyParamTemplate(req, cb) {
        return this.request("ModifyParamTemplate", req, cb);
    }
    /**
     * 修改已绑定资源包抵扣优先级
     */
    async ModifyResourcePackagesDeductionPriority(req, cb) {
        return this.request("ModifyResourcePackagesDeductionPriority", req, cb);
    }
    /**
     * 本接口（DescribeInstanceParams）用于查询实例参数列表。
     */
    async DescribeInstanceParams(req, cb) {
        return this.request("DescribeInstanceParams", req, cb);
    }
    /**
     * 此接口（DescribeInstanceSlowQueries）用于查询实例慢日志详情。
     */
    async DescribeInstanceSlowQueries(req, cb) {
        return this.request("DescribeInstanceSlowQueries", req, cb);
    }
    /**
     * 本接口（DescribeClusterDatabases）用于获取集群数据库列表。
     */
    async DescribeClusterDatabases(req, cb) {
        return this.request("DescribeClusterDatabases", req, cb);
    }
    /**
     * 本接口（ModifyClusterParam）用于修改集群参数。
     */
    async ModifyClusterParam(req, cb) {
        return this.request("ModifyClusterParam", req, cb);
    }
    /**
     * 本接口（CreateClusters）用于新购集群。
     */
    async CreateClusters(req, cb) {
        return this.request("CreateClusters", req, cb);
    }
    /**
     * 本接口（CreateAccounts）用于创建用户账号。
     */
    async CreateAccounts(req, cb) {
        return this.request("CreateAccounts", req, cb);
    }
    /**
     * 本接口（RollbackToNewCluster）用于回档到新集群。
     */
    async RollbackToNewCluster(req, cb) {
        return this.request("RollbackToNewCluster", req, cb);
    }
    /**
     * 本接口（CreateResourcePackage）用于新购资源包。
     */
    async CreateResourcePackage(req, cb) {
        return this.request("CreateResourcePackage", req, cb);
    }
    /**
     * 本接口(DescribeAuditLogFiles)用于查询云数据库实例的审计日志文件。
     */
    async DescribeAuditLogFiles(req, cb) {
        return this.request("DescribeAuditLogFiles", req, cb);
    }
    /**
     * 本接口（DeleteClusterDatabase）用于删除数据库。
     */
    async DeleteClusterDatabase(req, cb) {
        return this.request("DeleteClusterDatabase", req, cb);
    }
    /**
     * 本接口（SwitchClusterZone）用于切换集群的主备可用区。
     */
    async SwitchClusterZone(req, cb) {
        return this.request("SwitchClusterZone", req, cb);
    }
    /**
     * 本接口（SearchClusterDatabases）用于搜索集群数据库列表。
     */
    async SearchClusterDatabases(req, cb) {
        return this.request("SearchClusterDatabases", req, cb);
    }
    /**
     * 本接口（AddInstances）用于集群添加实例。
     */
    async AddInstances(req, cb) {
        return this.request("AddInstances", req, cb);
    }
    /**
     * 本接口（ModifyInstanceUpgradeLimitDays）用于修改实例内核小版本的升级限制时间。
     */
    async ModifyInstanceUpgradeLimitDays(req, cb) {
        return this.request("ModifyInstanceUpgradeLimitDays", req, cb);
    }
    /**
     * 本接口（DeleteAccounts）用于删除用户账号。
     */
    async DeleteAccounts(req, cb) {
        return this.request("DeleteAccounts", req, cb);
    }
    /**
     * 本接口（RevokeAccountPrivileges）用于批量回收账号权限。
     */
    async RevokeAccountPrivileges(req, cb) {
        return this.request("RevokeAccountPrivileges", req, cb);
    }
    /**
     * 本接口（OpenClusterReadOnlyInstanceGroupAccess）用于开启只读实例组接入。
     */
    async OpenClusterReadOnlyInstanceGroupAccess(req, cb) {
        return this.request("OpenClusterReadOnlyInstanceGroupAccess", req, cb);
    }
    /**
     * 开通集群透明加密
     */
    async OpenClusterTransparentEncrypt(req, cb) {
        return this.request("OpenClusterTransparentEncrypt", req, cb);
    }
    /**
     * 本接口（DescribeParamTemplates）用于查询用户指定产品下的所有参数模板信息。
     */
    async DescribeParamTemplates(req, cb) {
        return this.request("DescribeParamTemplates", req, cb);
    }
    /**
     * 本接口（DeleteBackup）用于为集群删除手动备份，无法删除自动备份。
     */
    async DeleteBackup(req, cb) {
        return this.request("DeleteBackup", req, cb);
    }
    /**
     * 查询serverless策略
     */
    async DescribeServerlessStrategy(req, cb) {
        return this.request("DescribeServerlessStrategy", req, cb);
    }
    /**
     * 本接口（PauseServerless）用于暂停 serverless 集群。
     */
    async PauseServerless(req, cb) {
        return this.request("PauseServerless", req, cb);
    }
    /**
     * 本接口（ModifyAccountHost）用于修改账号主机。
     */
    async ModifyAccountHost(req, cb) {
        return this.request("ModifyAccountHost", req, cb);
    }
    /**
     * 本接口（ResetAccountPassword）用于修改数据库账号密码。
     */
    async ResetAccountPassword(req, cb) {
        return this.request("ResetAccountPassword", req, cb);
    }
    /**
     * 本接口(DescribeInstanceDetail)用于查询实例详情。
     */
    async DescribeInstanceDetail(req, cb) {
        return this.request("DescribeInstanceDetail", req, cb);
    }
    /**
     * 本接口（DescribeAuditInstanceList）用于获取数据库审计的实例列表。
     */
    async DescribeAuditInstanceList(req, cb) {
        return this.request("DescribeAuditInstanceList", req, cb);
    }
    /**
     * 本接口（DescribeRollbackTimeRange）用于查询回档时间范围。
     */
    async DescribeRollbackTimeRange(req, cb) {
        return this.request("DescribeRollbackTimeRange", req, cb);
    }
    /**
     * 本接口（DescribeFlow）用于查询任务流信息。
     */
    async DescribeFlow(req, cb) {
        return this.request("DescribeFlow", req, cb);
    }
    /**
     * 本接口（ModifyInstanceParam）用于修改实例参数。
     */
    async ModifyInstanceParam(req, cb) {
        return this.request("ModifyInstanceParam", req, cb);
    }
    /**
     * 本接口（DescribeInstanceCLSLogDelivery）用于查询实例日志投递信息。
     */
    async DescribeInstanceCLSLogDelivery(req, cb) {
        return this.request("DescribeInstanceCLSLogDelivery", req, cb);
    }
    /**
     * 本接口（BindClusterResourcePackages）用于为集群绑定资源包。
     */
    async BindClusterResourcePackages(req, cb) {
        return this.request("BindClusterResourcePackages", req, cb);
    }
    /**
     * 查询Serverless实例可选规格
     */
    async DescribeServerlessInstanceSpecs(req, cb) {
        return this.request("DescribeServerlessInstanceSpecs", req, cb);
    }
    /**
     * 本接口（DescribeAuditLogs）用于查询数据库审计日志。
     */
    async DescribeAuditLogs(req, cb) {
        return this.request("DescribeAuditLogs", req, cb);
    }
    /**
     * 本接口（UnbindClusterResourcePackages）用于解除资源包与集群之间的绑定关系。
     */
    async UnbindClusterResourcePackages(req, cb) {
        return this.request("UnbindClusterResourcePackages", req, cb);
    }
    /**
     * 本接口（DescribeProxies）用于查询数据库代理列表。
     */
    async DescribeProxies(req, cb) {
        return this.request("DescribeProxies", req, cb);
    }
    /**
     * 本接口（OpenWan）用于开通外网。
     */
    async OpenWan(req, cb) {
        return this.request("OpenWan", req, cb);
    }
    /**
     * 本接口（InquirePriceCreate）用于新购集群的价格查询。
     */
    async InquirePriceCreate(req, cb) {
        return this.request("InquirePriceCreate", req, cb);
    }
    /**
     * 本接口（AssociateSecurityGroups）用于安全组批量绑定云资源。
     */
    async AssociateSecurityGroups(req, cb) {
        return this.request("AssociateSecurityGroups", req, cb);
    }
    /**
     * 该接口（DescribeBinlogConfig）用于查询binlog配置
     */
    async DescribeBinlogConfig(req, cb) {
        return this.request("DescribeBinlogConfig", req, cb);
    }
    /**
     * 本接口（DescribeResourcePackageSaleSpec）用于查询资源包规格。
     */
    async DescribeResourcePackageSaleSpec(req, cb) {
        return this.request("DescribeResourcePackageSaleSpec", req, cb);
    }
    /**
     * 本接口（ModifyAccountPrivileges）用于修改账号库表权限。
     */
    async ModifyAccountPrivileges(req, cb) {
        return this.request("ModifyAccountPrivileges", req, cb);
    }
    /**
     * 本接口（DescribeAuditRuleWithInstanceIds）用于获取实例的审计规则。
     */
    async DescribeAuditRuleWithInstanceIds(req, cb) {
        return this.request("DescribeAuditRuleWithInstanceIds", req, cb);
    }
    /**
     * 此接口（ExportInstanceErrorLogs）用于导出实例错误日志。
     */
    async ExportInstanceErrorLogs(req, cb) {
        return this.request("ExportInstanceErrorLogs", req, cb);
    }
    /**
     * 本接口（AddClusterSlaveZone）用于对集群开启多可用区部署。
     */
    async AddClusterSlaveZone(req, cb) {
        return this.request("AddClusterSlaveZone", req, cb);
    }
    /**
     * 此接口（ModifyBackupName）用于修改备份文件备注名。
     */
    async ModifyBackupName(req, cb) {
        return this.request("ModifyBackupName", req, cb);
    }
    /**
     * 本接口（DescribeAccounts）用于查询数据库账号列表。
     */
    async DescribeAccounts(req, cb) {
        return this.request("DescribeAccounts", req, cb);
    }
    /**
     * 本接口（SetRenewFlag）用于设置实例的自动续费功能。
     */
    async SetRenewFlag(req, cb) {
        return this.request("SetRenewFlag", req, cb);
    }
    /**
     * 本接口（InquirePriceRenew）用于查询续费集群价格。
     */
    async InquirePriceRenew(req, cb) {
        return this.request("InquirePriceRenew", req, cb);
    }
    /**
     * 本接口（StartCLSDelivery）用于开启日志投递功能。
     */
    async StartCLSDelivery(req, cb) {
        return this.request("StartCLSDelivery", req, cb);
    }
    /**
     * 本接口（ReloadBalanceProxyNode）用于负载均衡数据库代理。
     */
    async ReloadBalanceProxyNode(req, cb) {
        return this.request("ReloadBalanceProxyNode", req, cb);
    }
    /**
     * 本接口（OfflineCluster）用于销毁集群。
     */
    async OfflineCluster(req, cb) {
        return this.request("OfflineCluster", req, cb);
    }
    /**
     * 获取table列表
     */
    async DescribeClusterDatabaseTables(req, cb) {
        return this.request("DescribeClusterDatabaseTables", req, cb);
    }
    /**
     * 本接口（StopCLSDelivery）用于停止日志投递功能。
     */
    async StopCLSDelivery(req, cb) {
        return this.request("StopCLSDelivery", req, cb);
    }
    /**
     * 本接口（DescribeBackupList）用于查询集群的备份文件列表。
     */
    async DescribeBackupList(req, cb) {
        return this.request("DescribeBackupList", req, cb);
    }
    /**
     * 本接口(ModifyAccountDescription)用于修改数据库账号描述信息。
     */
    async ModifyAccountDescription(req, cb) {
        return this.request("ModifyAccountDescription", req, cb);
    }
    /**
     * 修改serverless策略
     */
    async ModifyServerlessStrategy(req, cb) {
        return this.request("ModifyServerlessStrategy", req, cb);
    }
    /**
     * 本接口（CreateClusterDatabase）用于创建数据库。
     */
    async CreateClusterDatabase(req, cb) {
        return this.request("CreateClusterDatabase", req, cb);
    }
    /**
     * 本接口（OpenAuditService）用于为实例开通数据库审计服务。
     */
    async OpenAuditService(req, cb) {
        return this.request("OpenAuditService", req, cb);
    }
    /**
     * 本接口（DeleteAuditLogFile）用于删除云数据库实例的审计日志文件。
     */
    async DeleteAuditLogFile(req, cb) {
        return this.request("DeleteAuditLogFile", req, cb);
    }
    /**
     * 本接口（DescribeAuditRuleTemplates）用于查询审计规则模板信息。
     */
    async DescribeAuditRuleTemplates(req, cb) {
        return this.request("DescribeAuditRuleTemplates", req, cb);
    }
    /**
     * 本接口（DescribeResourcePackageDetail）用于查询资源包使用详情。
     */
    async DescribeResourcePackageDetail(req, cb) {
        return this.request("DescribeResourcePackageDetail", req, cb);
    }
    /**
     * 本接口（ModifyBackupConfig）用于修改指定集群的备份配置。
     */
    async ModifyBackupConfig(req, cb) {
        return this.request("ModifyBackupConfig", req, cb);
    }
    /**
     * 本接口(DescribeInstances)用于查询实例列表。
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 本接口（UpgradeClusterVersion）用于更新内核小版本。
     */
    async UpgradeClusterVersion(req, cb) {
        return this.request("UpgradeClusterVersion", req, cb);
    }
    /**
     * 本接口（DescribeResourcePackageList）用于查询资源包列表。
     */
    async DescribeResourcePackageList(req, cb) {
        return this.request("DescribeResourcePackageList", req, cb);
    }
    /**
     * 本接口（DescribeClusterParams）用于查询集群参数。
     */
    async DescribeClusterParams(req, cb) {
        return this.request("DescribeClusterParams", req, cb);
    }
    /**
     * 本接口（RefundResourcePackage）用于资源包退款。
     */
    async RefundResourcePackage(req, cb) {
        return this.request("RefundResourcePackage", req, cb);
    }
    /**
     * 本接口(ModifyInstanceName)用于修改实例名称。
     */
    async ModifyInstanceName(req, cb) {
        return this.request("ModifyInstanceName", req, cb);
    }
    /**
     * 本接口（DescribeMaintainPeriod）用于查询实例维护时间窗。
     */
    async DescribeMaintainPeriod(req, cb) {
        return this.request("DescribeMaintainPeriod", req, cb);
    }
    /**
     * 资源包使用明细导出
     */
    async ExportResourcePackageDeductDetails(req, cb) {
        return this.request("ExportResourcePackageDeductDetails", req, cb);
    }
    /**
     * 本接口（DescribeClusterDetailDatabases）用于查询数据库列表。
     */
    async DescribeClusterDetailDatabases(req, cb) {
        return this.request("DescribeClusterDetailDatabases", req, cb);
    }
    /**
     * 本接口(ModifyAuditService)用于修改云数据库审计日志保存时长、审计规则等服务配置。
     */
    async ModifyAuditService(req, cb) {
        return this.request("ModifyAuditService", req, cb);
    }
    /**
     * 本接口（DescribeZones）用于查询可售卖地域可用区信息。
     */
    async DescribeZones(req, cb) {
        return this.request("DescribeZones", req, cb);
    }
    /**
     * 本接口（DescribeBackupDownloadUrl）用于查询集群备份文件下载地址。
     */
    async DescribeBackupDownloadUrl(req, cb) {
        return this.request("DescribeBackupDownloadUrl", req, cb);
    }
    /**
     * 本接口（SwitchClusterVpc）用于更换集群vpc。
     */
    async SwitchClusterVpc(req, cb) {
        return this.request("SwitchClusterVpc", req, cb);
    }
    /**
     * 本接口（CreateProxy）用于开启集群的数据库代理。
     */
    async CreateProxy(req, cb) {
        return this.request("CreateProxy", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceSecurityGroups）用于修改实例绑定的安全组。
     */
    async ModifyDBInstanceSecurityGroups(req, cb) {
        return this.request("ModifyDBInstanceSecurityGroups", req, cb);
    }
    /**
     * 本接口（CreateCLSDelivery）用于创建日志投递。
     */
    async CreateCLSDelivery(req, cb) {
        return this.request("CreateCLSDelivery", req, cb);
    }
    /**
     * 此接口（ModifyBinlogSaveDays）用于修改集群Binlog保留天数。
     */
    async ModifyBinlogSaveDays(req, cb) {
        return this.request("ModifyBinlogSaveDays", req, cb);
    }
    /**
     * 本接口（DescribeAccountAllGrantPrivileges）用于查询账号所有可授予的权限。
     */
    async DescribeAccountAllGrantPrivileges(req, cb) {
        return this.request("DescribeAccountAllGrantPrivileges", req, cb);
    }
    /**
     * 本接口（OpenReadOnlyInstanceExclusiveAccess）用于开通只读实例独有访问接入组。
     */
    async OpenReadOnlyInstanceExclusiveAccess(req, cb) {
        return this.request("OpenReadOnlyInstanceExclusiveAccess", req, cb);
    }
    /**
     * 本接口（DescribeClusterPasswordComplexity）用于查看集群密码复杂度详情。
     */
    async DescribeClusterPasswordComplexity(req, cb) {
        return this.request("DescribeClusterPasswordComplexity", req, cb);
    }
    /**
     * 本接口（DeleteParamTemplate）用于删除用户创建的参数模板。
     */
    async DeleteParamTemplate(req, cb) {
        return this.request("DeleteParamTemplate", req, cb);
    }
    /**
     * 本接口（UpgradeInstance）用于实例变配。
     */
    async UpgradeInstance(req, cb) {
        return this.request("UpgradeInstance", req, cb);
    }
    /**
     * 本接口（DescribeBinlogs）用来查询集群 Binlog 日志列表。
     */
    async DescribeBinlogs(req, cb) {
        return this.request("DescribeBinlogs", req, cb);
    }
    /**
     * 本接口（DescribeClusterInstanceGrps）用于查询实例组信息。
     */
    async DescribeClusterInstanceGroups(req, cb) {
        return this.request("DescribeClusterInstanceGroups", req, cb);
    }
    /**
     * 本接口（DescribeDBSecurityGroups）用于查询实例安全组信息。
     */
    async DescribeDBSecurityGroups(req, cb) {
        return this.request("DescribeDBSecurityGroups", req, cb);
    }
    /**
     * 本接口（OpenClusterPasswordComplexity）用于开启自定义密码复杂度功能。
     */
    async OpenClusterPasswordComplexity(req, cb) {
        return this.request("OpenClusterPasswordComplexity", req, cb);
    }
    /**
     * 本接口（ModifyResourcePackageName）用于修改资源包名称。
     */
    async ModifyResourcePackageName(req, cb) {
        return this.request("ModifyResourcePackageName", req, cb);
    }
    /**
     * 本接口（RemoveClusterSlaveZone）用于关闭集群多可用区部署。
     */
    async RemoveClusterSlaveZone(req, cb) {
        return this.request("RemoveClusterSlaveZone", req, cb);
    }
    /**
     * 本接口（DescribeParamTemplateDetail）用于查询用户参数模板详情。
     */
    async DescribeParamTemplateDetail(req, cb) {
        return this.request("DescribeParamTemplateDetail", req, cb);
    }
    /**
     * 本接口(IsolateInstance)用于隔离实例。
     */
    async IsolateInstance(req, cb) {
        return this.request("IsolateInstance", req, cb);
    }
}
exports.Client = Client;
