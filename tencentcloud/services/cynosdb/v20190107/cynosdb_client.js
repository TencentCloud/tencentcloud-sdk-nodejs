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
     * 本接口(ModifyAuditService)用于修改云数据库审计日志保存时长、审计规则等服务配置。
     */
    async ModifyAuditService(req, cb) {
        return this.request("ModifyAuditService", req, cb);
    }
    /**
     * 下线实例
     */
    async OfflineInstance(req, cb) {
        return this.request("OfflineInstance", req, cb);
    }
    /**
     * 查询备份文件列表
     */
    async DescribeBackupList(req, cb) {
        return this.request("DescribeBackupList", req, cb);
    }
    /**
     * 批量回收账号权限
     */
    async RevokeAccountPrivileges(req, cb) {
        return this.request("RevokeAccountPrivileges", req, cb);
    }
    /**
     * 本接口（RollBackCluster）用于回档集群
     */
    async RollBackCluster(req, cb) {
        return this.request("RollBackCluster", req, cb);
    }
    /**
     * 查询项目安全组信息
     */
    async DescribeProjectSecurityGroups(req, cb) {
        return this.request("DescribeProjectSecurityGroups", req, cb);
    }
    /**
     * 此接口（DescribeBinlogSaveDays）用于查询集群的Binlog保留天数。
     */
    async DescribeBinlogSaveDays(req, cb) {
        return this.request("DescribeBinlogSaveDays", req, cb);
    }
    /**
     * 本接口（DescribeInstanceSpecs）用于查询实例规格
     */
    async DescribeInstanceSpecs(req, cb) {
        return this.request("DescribeInstanceSpecs", req, cb);
    }
    /**
     * 增加从可用区
     */
    async AddClusterSlaveZone(req, cb) {
        return this.request("AddClusterSlaveZone", req, cb);
    }
    /**
     * 查询用户指定产品下的所有参数模板信息
     */
    async DescribeParamTemplates(req, cb) {
        return this.request("DescribeParamTemplates", req, cb);
    }
    /**
     * 为集群删除手动备份，无法删除自动备份
     */
    async DeleteBackup(req, cb) {
        return this.request("DeleteBackup", req, cb);
    }
    /**
     * 本接口（DescribeClusterInstanceGrps）用于查询实例组信息。
     */
    async DescribeClusterInstanceGrps(req, cb) {
        return this.request("DescribeClusterInstanceGrps", req, cb);
    }
    /**
     * 修改实例组ip，端口
     */
    async ModifyVipVport(req, cb) {
        return this.request("ModifyVipVport", req, cb);
    }
    /**
     * TDSQL-C for MySQL实例开通审计服务
     */
    async OpenAuditService(req, cb) {
        return this.request("OpenAuditService", req, cb);
    }
    /**
     * 创建审计规则模版
     */
    async CreateAuditRuleTemplate(req, cb) {
        return this.request("CreateAuditRuleTemplate", req, cb);
    }
    /**
     * 此接口（ModifyBackupName）用于修改备份文件备注名。
     */
    async ModifyBackupName(req, cb) {
        return this.request("ModifyBackupName", req, cb);
    }
    /**
     * 本接口(DeleteAuditLogFile)用于删除云数据库实例的审计日志文件。
     */
    async DeleteAuditLogFile(req, cb) {
        return this.request("DeleteAuditLogFile", req, cb);
    }
    /**
     * 本接口(ResetAccountPassword)用于重置实例的数据库账号密码。
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
     * 查询审计规则模版信息
     */
    async DescribeAuditRuleTemplates(req, cb) {
        return this.request("DescribeAuditRuleTemplates", req, cb);
    }
    /**
     * 查询指定集群有效回滚时间范围
     */
    async DescribeRollbackTimeRange(req, cb) {
        return this.request("DescribeRollbackTimeRange", req, cb);
    }
    /**
     * 本接口（DescribeFlow）用于查询任务流信息
     */
    async DescribeFlow(req, cb) {
        return this.request("DescribeFlow", req, cb);
    }
    /**
     * 修改指定集群的备份配置
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
     * 删除审计规则模版
     */
    async DeleteAuditRuleTemplates(req, cb) {
        return this.request("DeleteAuditRuleTemplates", req, cb);
    }
    /**
     * 本接口（DescribeClusterParamLogs）查询参数修改日志
     */
    async DescribeClusterParamLogs(req, cb) {
        return this.request("DescribeClusterParamLogs", req, cb);
    }
    /**
     * 修改维护时间配置
     */
    async ModifyMaintainPeriodConfig(req, cb) {
        return this.request("ModifyMaintainPeriodConfig", req, cb);
    }
    /**
     * 本接口(DescribeAuditLogs)用于查询数据库审计日志。
     */
    async DescribeAuditLogs(req, cb) {
        return this.request("DescribeAuditLogs", req, cb);
    }
    /**
     * 修改从可用区
     */
    async ModifyClusterSlaveZone(req, cb) {
        return this.request("ModifyClusterSlaveZone", req, cb);
    }
    /**
     * 修改账号参数
     */
    async ModifyAccountParams(req, cb) {
        return this.request("ModifyAccountParams", req, cb);
    }
    /**
     * 本接口（DescribeClusterParams）用于查询集群参数
     */
    async DescribeClusterParams(req, cb) {
        return this.request("DescribeClusterParams", req, cb);
    }
    /**
     * 为集群创建手动备份
     */
    async CreateBackup(req, cb) {
        return this.request("CreateBackup", req, cb);
    }
    /**
     * TDSQL-C for MySQL实例关闭审计服务
     */
    async CloseAuditService(req, cb) {
        return this.request("CloseAuditService", req, cb);
    }
    /**
     * 本接口(ModifyInstanceName)用于修改实例名称。
     */
    async ModifyInstanceName(req, cb) {
        return this.request("ModifyInstanceName", req, cb);
    }
    /**
     * 查询实例维护时间窗
     */
    async DescribeMaintainPeriod(req, cb) {
        return this.request("DescribeMaintainPeriod", req, cb);
    }
    /**
     * 恢复serverless集群
     */
    async ResumeServerless(req, cb) {
        return this.request("ResumeServerless", req, cb);
    }
    /**
     * 重启实例
     */
    async RestartInstance(req, cb) {
        return this.request("RestartInstance", req, cb);
    }
    /**
     * 查询集群列表
     */
    async DescribeClusters(req, cb) {
        return this.request("DescribeClusters", req, cb);
    }
    /**
     * 本接口(CreateAuditLogFile)用于创建云数据库实例的审计日志文件。
     */
    async CreateAuditLogFile(req, cb) {
        return this.request("CreateAuditLogFile", req, cb);
    }
    /**
     * 隔离集群
     */
    async IsolateCluster(req, cb) {
        return this.request("IsolateCluster", req, cb);
    }
    /**
     * 查询新购集群价格
     */
    async InquirePriceCreate(req, cb) {
        return this.request("InquirePriceCreate", req, cb);
    }
    /**
     * 此接口（DescribeBackupDownloadUrl）用于查询集群备份文件下载地址。
     */
    async DescribeBackupDownloadUrl(req, cb) {
        return this.request("DescribeBackupDownloadUrl", req, cb);
    }
    /**
     * 更换集群vpc
     */
    async SwitchClusterVpc(req, cb) {
        return this.request("SwitchClusterVpc", req, cb);
    }
    /**
     * 安全组批量绑定云资源
     */
    async AssociateSecurityGroups(req, cb) {
        return this.request("AssociateSecurityGroups", req, cb);
    }
    /**
     * 删除从可用区
     */
    async RemoveClusterSlaveZone(req, cb) {
        return this.request("RemoveClusterSlaveZone", req, cb);
    }
    /**
     * 修改集群名称
     */
    async ModifyClusterName(req, cb) {
        return this.request("ModifyClusterName", req, cb);
    }
    /**
     * 本接口(SwitchProxyVpc)更换数据库代理vpc
     */
    async SwitchProxyVpc(req, cb) {
        return this.request("SwitchProxyVpc", req, cb);
    }
    /**
     * 该接口（DescribeClusterDetail）显示集群详情
     */
    async DescribeClusterDetail(req, cb) {
        return this.request("DescribeClusterDetail", req, cb);
    }
    /**
     * 获取实例的审计规则
     */
    async DescribeAuditRuleWithInstanceIds(req, cb) {
        return this.request("DescribeAuditRuleWithInstanceIds", req, cb);
    }
    /**
     * 本接口(IsolateInstance)用于隔离实例。
     */
    async IsolateInstance(req, cb) {
        return this.request("IsolateInstance", req, cb);
    }
    /**
     * 获取指定集群的备份配置信息，包括全量备份时间段，备份文件保留时间
     */
    async DescribeBackupConfig(req, cb) {
        return this.request("DescribeBackupConfig", req, cb);
    }
    /**
     * 账号所有权限
     */
    async DescribeAccountAllGrantPrivileges(req, cb) {
        return this.request("DescribeAccountAllGrantPrivileges", req, cb);
    }
    /**
     * 查询续费集群价格
     */
    async InquirePriceRenew(req, cb) {
        return this.request("InquirePriceRenew", req, cb);
    }
    /**
     * 此接口（DescribeBinlogDownloadUrl）用于查询Binlog的下载地址。
     */
    async DescribeBinlogDownloadUrl(req, cb) {
        return this.request("DescribeBinlogDownloadUrl", req, cb);
    }
    /**
     * 本接口(DescribeAccounts)用于查询数据库管理账号。
     */
    async DescribeAccounts(req, cb) {
        return this.request("DescribeAccounts", req, cb);
    }
    /**
     * 根据计费订单id查询资源列表
     */
    async DescribeResourcesByDealName(req, cb) {
        return this.request("DescribeResourcesByDealName", req, cb);
    }
    /**
     * 此接口（ExportInstanceSlowQueries）用于导出实例慢日志。
     */
    async ExportInstanceSlowQueries(req, cb) {
        return this.request("ExportInstanceSlowQueries", req, cb);
    }
    /**
     * 暂停serverless集群
     */
    async PauseServerless(req, cb) {
        return this.request("PauseServerless", req, cb);
    }
    /**
     * 修改集群参数
     */
    async ModifyClusterParam(req, cb) {
        return this.request("ModifyClusterParam", req, cb);
    }
    /**
     * 升级实例
     */
    async UpgradeInstance(req, cb) {
        return this.request("UpgradeInstance", req, cb);
    }
    /**
     * 创建集群
     */
    async CreateClusters(req, cb) {
        return this.request("CreateClusters", req, cb);
    }
    /**
     * 此接口（DescribeBinlogs）用来查询集群Binlog日志列表。
     */
    async DescribeBinlogs(req, cb) {
        return this.request("DescribeBinlogs", req, cb);
    }
    /**
     * 创建账号
     */
    async CreateAccounts(req, cb) {
        return this.request("CreateAccounts", req, cb);
    }
    /**
     * 升级预付费存储
     */
    async ModifyClusterStorage(req, cb) {
        return this.request("ModifyClusterStorage", req, cb);
    }
    /**
     * 本接口(ActivateInstance)用于恢复已隔离的实例访问。
     */
    async ActivateInstance(req, cb) {
        return this.request("ActivateInstance", req, cb);
    }
    /**
     * 查询实例安全组信息
     */
    async DescribeDBSecurityGroups(req, cb) {
        return this.request("DescribeDBSecurityGroups", req, cb);
    }
    /**
     * 本接口(DescribeAuditLogFiles)用于查询云数据库实例的审计日志文件。
     */
    async DescribeAuditLogFiles(req, cb) {
        return this.request("DescribeAuditLogFiles", req, cb);
    }
    /**
     * 本接口(DescribeZones)用于查询可售卖地域可用区信息。
     */
    async DescribeZones(req, cb) {
        return this.request("DescribeZones", req, cb);
    }
    /**
     * SetRenewFlag设置实例的自动续费功能
     */
    async SetRenewFlag(req, cb) {
        return this.request("SetRenewFlag", req, cb);
    }
    /**
     * 下线集群
     */
    async OfflineCluster(req, cb) {
        return this.request("OfflineCluster", req, cb);
    }
    /**
     * 修改审计规则模版
     */
    async ModifyAuditRuleTemplates(req, cb) {
        return this.request("ModifyAuditRuleTemplates", req, cb);
    }
    /**
     * 批量授权账号权限
     */
    async GrantAccountPrivileges(req, cb) {
        return this.request("GrantAccountPrivileges", req, cb);
    }
    /**
     * 本接口(SearchClusterTables)搜索集群数据表列表
     */
    async SearchClusterTables(req, cb) {
        return this.request("SearchClusterTables", req, cb);
    }
    /**
     * 切换到从可用区
     */
    async SwitchClusterZone(req, cb) {
        return this.request("SwitchClusterZone", req, cb);
    }
    /**
     * 安全组批量解绑云资源
     */
    async DisassociateSecurityGroups(req, cb) {
        return this.request("DisassociateSecurityGroups", req, cb);
    }
    /**
     * 本接口(SearchClusterDatabases)搜索集群database列表
     */
    async SearchClusterDatabases(req, cb) {
        return this.request("SearchClusterDatabases", req, cb);
    }
    /**
     * 此接口（DescribeInstanceSlowQueries）用于查询实例慢查询日志。
     */
    async DescribeInstanceSlowQueries(req, cb) {
        return this.request("DescribeInstanceSlowQueries", req, cb);
    }
    /**
     * 指定时间和集群查询是否可回滚
     */
    async DescribeRollbackTimeValidity(req, cb) {
        return this.request("DescribeRollbackTimeValidity", req, cb);
    }
    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
     */
    async ModifyDBInstanceSecurityGroups(req, cb) {
        return this.request("ModifyDBInstanceSecurityGroups", req, cb);
    }
    /**
     * 本接口（AddInstances）用于集群添加实例
     */
    async AddInstances(req, cb) {
        return this.request("AddInstances", req, cb);
    }
}
exports.Client = Client;
