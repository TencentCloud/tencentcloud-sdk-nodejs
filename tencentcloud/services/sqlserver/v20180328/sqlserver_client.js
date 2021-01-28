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
 * sqlserver client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("sqlserver.tencentcloudapi.com", "2018-03-28", clientConfig);
    }
    /**
     * 本接口(DescribeDBSecurityGroups)用于查询实例的安全组详情。
     */
    async DescribeDBSecurityGroups(req, cb) {
        return this.request("DescribeDBSecurityGroups", req, cb);
    }
    /**
     * 本接口（ModifyMigration）可以修改已有的迁移任务信息
     */
    async ModifyMigration(req, cb) {
        return this.request("ModifyMigration", req, cb);
    }
    /**
     * 本接口（DescribeOrders）用于查询订单信息
     */
    async DescribeOrders(req, cb) {
        return this.request("DescribeOrders", req, cb);
    }
    /**
     * 本接口（ModifyAccountPrivilege）用于修改实例账户权限。
     */
    async ModifyAccountPrivilege(req, cb) {
        return this.request("ModifyAccountPrivilege", req, cb);
    }
    /**
     * 本接口（ModifyBackupStrategy）用于修改备份策略
     */
    async ModifyBackupStrategy(req, cb) {
        return this.request("ModifyBackupStrategy", req, cb);
    }
    /**
     * 本接口(DescribeBackups)用于查询备份列表。
     */
    async DescribeBackups(req, cb) {
        return this.request("DescribeBackups", req, cb);
    }
    /**
     * 本接口（DeleteDBInstance）用于释放回收站中的SQL server实例。释放后的实例将保存一段时间后物理销毁。其发布订阅将自动解除，其ro副本将自动释放。
     */
    async DeleteDBInstance(req, cb) {
        return this.request("DeleteDBInstance", req, cb);
    }
    /**
     * 本接口（DeletePublishSubscribe）用于删除两个数据库间的发布订阅关系。
     */
    async DeletePublishSubscribe(req, cb) {
        return this.request("DeletePublishSubscribe", req, cb);
    }
    /**
     * 本接口（DescribeMigrations）根据输入的限定条件，查询符合条件的迁移任务列表
     */
    async DescribeMigrations(req, cb) {
        return this.request("DescribeMigrations", req, cb);
    }
    /**
     * 本接口（RecycleReadOnlyGroup）立即回收只读组的资源，只读组占用的vip等资源将立即释放且不可找回。
     */
    async RecycleReadOnlyGroup(req, cb) {
        return this.request("RecycleReadOnlyGroup", req, cb);
    }
    /**
     * 本接口(ModifyBackupName)用于修改备份名称。
     */
    async ModifyBackupName(req, cb) {
        return this.request("ModifyBackupName", req, cb);
    }
    /**
     * 本接口（RunMigration）用于启动迁移任务，开始迁移
     */
    async RunMigration(req, cb) {
        return this.request("RunMigration", req, cb);
    }
    /**
     * 本接口（ModifyDBName）用于更新数据库名。
     */
    async ModifyDBName(req, cb) {
        return this.request("ModifyDBName", req, cb);
    }
    /**
     * 本接口（InquiryPriceCreateDBInstances）用于查询申请实例价格。
     */
    async InquiryPriceCreateDBInstances(req, cb) {
        return this.request("InquiryPriceCreateDBInstances", req, cb);
    }
    /**
     * 本接口（CloneDB）用于克隆数据库，只支持克隆到本实例，克隆时必须指定新库名称。
     */
    async CloneDB(req, cb) {
        return this.request("CloneDB", req, cb);
    }
    /**
     * 本接口(DescribeCrossRegionZone)根据主实例查询备机的容灾地域和可用区。
     */
    async DescribeCrossRegionZone(req, cb) {
        return this.request("DescribeCrossRegionZone", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceProject）用于修改数据库实例所属项目。
     */
    async ModifyDBInstanceProject(req, cb) {
        return this.request("ModifyDBInstanceProject", req, cb);
    }
    /**
     * 本接口（DescribeSlowlogs）用于获取慢查询日志文件信息
     */
    async DescribeSlowlogs(req, cb) {
        return this.request("DescribeSlowlogs", req, cb);
    }
    /**
     * 本接口（DeleteAccount）用于删除实例账号。
     */
    async DeleteAccount(req, cb) {
        return this.request("DeleteAccount", req, cb);
    }
    /**
     * 本接口（ModifyPublishSubscribeName）修改发布订阅的名称。
     */
    async ModifyPublishSubscribeName(req, cb) {
        return this.request("ModifyPublishSubscribeName", req, cb);
    }
    /**
     * 本接口(DescribeFlowStatus)用于查询流程状态。
     */
    async DescribeFlowStatus(req, cb) {
        return this.request("DescribeFlowStatus", req, cb);
    }
    /**
     * 本接口（ModifyAccountRemark）用于修改账户备注。
     */
    async ModifyAccountRemark(req, cb) {
        return this.request("ModifyAccountRemark", req, cb);
    }
    /**
     * 本接口（CreateBasicDBInstances）用于创建SQL server基础版实例。
     */
    async CreateBasicDBInstances(req, cb) {
        return this.request("CreateBasicDBInstances", req, cb);
    }
    /**
     * 本接口（RestartDBInstance）用于重启数据库实例。
     */
    async RestartDBInstance(req, cb) {
        return this.request("RestartDBInstance", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceName）用于修改实例名字。
     */
    async ModifyDBInstanceName(req, cb) {
        return this.request("ModifyDBInstanceName", req, cb);
    }
    /**
     * 本接口(TerminateDBInstance)用于主动隔离实例，使得实例进入回收站。
     */
    async TerminateDBInstance(req, cb) {
        return this.request("TerminateDBInstance", req, cb);
    }
    /**
     * 本接口(CreateBackup)用于创建备份。
     */
    async CreateBackup(req, cb) {
        return this.request("CreateBackup", req, cb);
    }
    /**
     * 本接口（CreateDBInstances）用于创建实例。
     */
    async CreateDBInstances(req, cb) {
        return this.request("CreateDBInstances", req, cb);
    }
    /**
     * 本接口（RollbackInstance）用于回档实例
     */
    async RollbackInstance(req, cb) {
        return this.request("RollbackInstance", req, cb);
    }
    /**
     * 本接口（CreateMigration）作用是创建一个迁移任务
     */
    async CreateMigration(req, cb) {
        return this.request("CreateMigration", req, cb);
    }
    /**
     * 本接口(DescribeDBInstances)用于查询实例列表。
     */
    async DescribeDBInstances(req, cb) {
        return this.request("DescribeDBInstances", req, cb);
    }
    /**
     * 本接口 (DescribeZones) 用于查询当前可售卖的可用区信息。
     */
    async DescribeZones(req, cb) {
        return this.request("DescribeZones", req, cb);
    }
    /**
     * 本接口（ModifyDBRemark）用于修改数据库备注。
     */
    async ModifyDBRemark(req, cb) {
        return this.request("ModifyDBRemark", req, cb);
    }
    /**
     * 本接口（RenewDBInstance）用于续费实例。
     */
    async RenewDBInstance(req, cb) {
        return this.request("RenewDBInstance", req, cb);
    }
    /**
     * 本接口（DescribeReadOnlyGroupList）用于查询只读组列表。
     */
    async DescribeReadOnlyGroupList(req, cb) {
        return this.request("DescribeReadOnlyGroupList", req, cb);
    }
    /**
     * 本接口(DescribeProjectSecurityGroups)用于查询项目的安全组详情。
     */
    async DescribeProjectSecurityGroups(req, cb) {
        return this.request("DescribeProjectSecurityGroups", req, cb);
    }
    /**
     * 本接口(AssociateSecurityGroups)用于安全组批量绑定实例。
     */
    async AssociateSecurityGroups(req, cb) {
        return this.request("AssociateSecurityGroups", req, cb);
    }
    /**
     * 本接口（CreateAccount）用于创建实例账号
     */
    async CreateAccount(req, cb) {
        return this.request("CreateAccount", req, cb);
    }
    /**
     * 本接口（InquiryPriceUpgradeDBInstance）用于查询升级实例的价格。
     */
    async InquiryPriceUpgradeDBInstance(req, cb) {
        return this.request("InquiryPriceUpgradeDBInstance", req, cb);
    }
    /**
     * 本接口（ResetAccountPassword）用于重置实例的账户密码。
     */
    async ResetAccountPassword(req, cb) {
        return this.request("ResetAccountPassword", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceNetwork）用于修改运行中实例的网络，仅支持从VPC网络到VPC网络的转换
     */
    async ModifyDBInstanceNetwork(req, cb) {
        return this.request("ModifyDBInstanceNetwork", req, cb);
    }
    /**
     * 本接口（DescribeDBs）用于查询数据库列表。
     */
    async DescribeDBs(req, cb) {
        return this.request("DescribeDBs", req, cb);
    }
    /**
     * 本接口 (DescribeRegions) 用于查询售卖地域信息。
     */
    async DescribeRegions(req, cb) {
        return this.request("DescribeRegions", req, cb);
    }
    /**
     * 本接口（InquiryPriceRenewDBInstance）用于查询续费实例的价格。
     */
    async InquiryPriceRenewDBInstance(req, cb) {
        return this.request("InquiryPriceRenewDBInstance", req, cb);
    }
    /**
     * 本接口（DeleteMigration）用于删除迁移任务
     */
    async DeleteMigration(req, cb) {
        return this.request("DeleteMigration", req, cb);
    }
    /**
     * 本接口（CompleteMigration）作用是完成一个迁移任务
     */
    async CompleteMigration(req, cb) {
        return this.request("CompleteMigration", req, cb);
    }
    /**
     * 本接口（DescribeMaintenanceSpan）根据实例ID查询该实例的可维护时间窗。
     */
    async DescribeMaintenanceSpan(req, cb) {
        return this.request("DescribeMaintenanceSpan", req, cb);
    }
    /**
     * 本接口（DescribeReadOnlyGroupDetails）用于查询只读组详情。
     */
    async DescribeReadOnlyGroupDetails(req, cb) {
        return this.request("DescribeReadOnlyGroupDetails", req, cb);
    }
    /**
     * 本接口（CreatePublishSubscribe）用于创建两个数据库之间的发布订阅关系。作为订阅者，不能再充当发布者，作为发布者可以有多个订阅者实例。
     */
    async CreatePublishSubscribe(req, cb) {
        return this.request("CreatePublishSubscribe", req, cb);
    }
    /**
     * 本接口（DescribeRollbackTime）用于查询实例可回档时间范围
     */
    async DescribeRollbackTime(req, cb) {
        return this.request("DescribeRollbackTime", req, cb);
    }
    /**
     * 本接口（StopMigration）作用是中止一个迁移任务
     */
    async StopMigration(req, cb) {
        return this.request("StopMigration", req, cb);
    }
    /**
     * 本接口（DescribeAccounts）用于拉取实例账户列表。
     */
    async DescribeAccounts(req, cb) {
        return this.request("DescribeAccounts", req, cb);
    }
    /**
     * 本接口（QueryMigrationCheckProcess）的作用是查询迁移检查任务的进度，适用于迁移源的类型为TencentDB for SQLServer 的迁移方式
     */
    async QueryMigrationCheckProcess(req, cb) {
        return this.request("QueryMigrationCheckProcess", req, cb);
    }
    /**
     * 本接口（CompleteExpansion）在实例发起扩容后，实例状态处于“升级待切换”时，可立即完成实例升级切换操作，无需等待可维护时间窗。本接口需要在实例低峰时调用，在完全切换成功前，存在部分库不可访问的风险。
     */
    async CompleteExpansion(req, cb) {
        return this.request("CompleteExpansion", req, cb);
    }
    /**
     * 本接口(DescribeBackupByFlowId)用于通过备份创建流程的ID查询创建的备份详情，流程ID可从接口CreateBackup中获得。
     */
    async DescribeBackupByFlowId(req, cb) {
        return this.request("DescribeBackupByFlowId", req, cb);
    }
    /**
     * 本接口（DescribePublishSubscribe）用于查询发布订阅关系列表。
     */
    async DescribePublishSubscribe(req, cb) {
        return this.request("DescribePublishSubscribe", req, cb);
    }
    /**
     * 本接口（StartMigrationCheck）的作用是启动一个迁移前的校验任务，适用于迁移源的类型为TencentDB for SQLServer 的迁移方式
     */
    async StartMigrationCheck(req, cb) {
        return this.request("StartMigrationCheck", req, cb);
    }
    /**
     * 本接口（RemoveBackups）可以删除用户手动创建的备份文件。待删除的备份策略可以是实例备份，也可以是多库备份。
     */
    async RemoveBackups(req, cb) {
        return this.request("RemoveBackups", req, cb);
    }
    /**
     * 本接口（CreateDB）用于创建数据库。
     */
    async CreateDB(req, cb) {
        return this.request("CreateDB", req, cb);
    }
    /**
     * 本接口(DeleteDB)用于删除数据库。
     */
    async DeleteDB(req, cb) {
        return this.request("DeleteDB", req, cb);
    }
    /**
     * 本接口（DescribeMigrationDetail）用于查询迁移任务的详细情况
     */
    async DescribeMigrationDetail(req, cb) {
        return this.request("DescribeMigrationDetail", req, cb);
    }
    /**
     * 本接口（ModifyReadOnlyGroupDetails）用于修改只读组详情。
     */
    async ModifyReadOnlyGroupDetails(req, cb) {
        return this.request("ModifyReadOnlyGroupDetails", req, cb);
    }
    /**
     * 本接口（RestoreInstance）用于根据备份文件恢复实例。
     */
    async RestoreInstance(req, cb) {
        return this.request("RestoreInstance", req, cb);
    }
    /**
     * 本接口（UpgradeDBInstance）用于升级实例
     */
    async UpgradeDBInstance(req, cb) {
        return this.request("UpgradeDBInstance", req, cb);
    }
    /**
     * 本接口（DescribeMigrationDatabases）的作用是查询待迁移数据库列表
     */
    async DescribeMigrationDatabases(req, cb) {
        return this.request("DescribeMigrationDatabases", req, cb);
    }
    /**
     * 本接口（ModifyMaintenanceSpan）用于修改实例的可维护时间窗
     */
    async ModifyMaintenanceSpan(req, cb) {
        return this.request("ModifyMaintenanceSpan", req, cb);
    }
    /**
     * 本接口（RenewPostpaidDBInstance）用于将通过接口TerminateDBInstance手动隔离的按量计费实例从回收站中恢复。
     */
    async RenewPostpaidDBInstance(req, cb) {
        return this.request("RenewPostpaidDBInstance", req, cb);
    }
    /**
     * 本接口 (DescribeProductConfig) 用于查询售卖规格配置。
     */
    async DescribeProductConfig(req, cb) {
        return this.request("DescribeProductConfig", req, cb);
    }
    /**
     * 本接口（RecycleDBInstance）用于主动回收已下线的SQLSERVER实例
     */
    async RecycleDBInstance(req, cb) {
        return this.request("RecycleDBInstance", req, cb);
    }
    /**
     * 本接口（CreateReadOnlyDBInstances）用于添加只读副本实例。
     */
    async CreateReadOnlyDBInstances(req, cb) {
        return this.request("CreateReadOnlyDBInstances", req, cb);
    }
    /**
     * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
     */
    async DisassociateSecurityGroups(req, cb) {
        return this.request("DisassociateSecurityGroups", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceRenewFlag）用于修改实例续费标记
     */
    async ModifyDBInstanceRenewFlag(req, cb) {
        return this.request("ModifyDBInstanceRenewFlag", req, cb);
    }
    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
     */
    async ModifyDBInstanceSecurityGroups(req, cb) {
        return this.request("ModifyDBInstanceSecurityGroups", req, cb);
    }
    /**
     * 本接口（DescribeReadOnlyGroupByReadOnlyInstance）用于通过只读副本实例ID查询其所在的只读组。
     */
    async DescribeReadOnlyGroupByReadOnlyInstance(req, cb) {
        return this.request("DescribeReadOnlyGroupByReadOnlyInstance", req, cb);
    }
}
exports.Client = Client;
