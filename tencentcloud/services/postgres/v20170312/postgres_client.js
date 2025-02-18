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
 * postgres client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("postgres.tencentcloudapi.com", "2017-03-12", clientConfig);
    }
    /**
     * 本接口 (ModifyMaintainTimeWindow) 用于实例维护时间窗口的修改。
     */
    async ModifyMaintainTimeWindow(req, cb) {
        return this.request("ModifyMaintainTimeWindow", req, cb);
    }
    /**
     * 本接口 (DescribeBackupDownloadURL) 用于查询指定备份集的下载地址，可包括全量备份集、增量日志备份集。
     */
    async DescribeBackupDownloadURL(req, cb) {
        return this.request("DescribeBackupDownloadURL", req, cb);
    }
    /**
     * 本接口（DescribeDefaultParameters）主要用于查询某个数据库版本和引擎支持的所有参数。
     */
    async DescribeDefaultParameters(req, cb) {
        return this.request("DescribeDefaultParameters", req, cb);
    }
    /**
     * 本接口（DescribeDBErrlogs）用于查询错误日志。
     */
    async DescribeDBErrlogs(req, cb) {
        return this.request("DescribeDBErrlogs", req, cb);
    }
    /**
     * 本接口（DescribeDBInstanceHAConfig）用于查询实例HA配置信息。其中HA配置信息包括：
<li>允许备节点切换为主节点的条件配置
<li>半同步实例使用同步复制或异步复制的条件配置
     */
    async DescribeDBInstanceHAConfig(req, cb) {
        return this.request("DescribeDBInstanceHAConfig", req, cb);
    }
    /**
     * 本接口（DescribeBackupOverview）用于查询用户的备份概览信息。返回用户当前备份个数、备份占用容量、免费容量、收费容量等信息（容量单位为字节）。
     */
    async DescribeBackupOverview(req, cb) {
        return this.request("DescribeBackupOverview", req, cb);
    }
    /**
     * 本接口用于查询数据库对象列表。例如查询test数据库下的模式列表。
     */
    async DescribeDatabaseObjects(req, cb) {
        return this.request("DescribeDatabaseObjects", req, cb);
    }
    /**
     * 本接口（ModifyAccountRemark）用于修改账号备注。
     */
    async ModifyAccountRemark(req, cb) {
        return this.request("ModifyAccountRemark", req, cb);
    }
    /**
     * 本接口（SetAutoRenewFlag）用于设置自动续费。
     */
    async SetAutoRenewFlag(req, cb) {
        return this.request("SetAutoRenewFlag", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceName）用于修改postgresql实例名字。
     */
    async ModifyDBInstanceName(req, cb) {
        return this.request("ModifyDBInstanceName", req, cb);
    }
    /**
     * 本接口 (DescribeMaintainTimeWindow) 用于查询实例的维护时间窗口
     */
    async DescribeMaintainTimeWindow(req, cb) {
        return this.request("DescribeMaintainTimeWindow", req, cb);
    }
    /**
     * 查询专属集群
     */
    async DescribeDedicatedClusters(req, cb) {
        return this.request("DescribeDedicatedClusters", req, cb);
    }
    /**
     * 本接口（DeleteParameterTemplate）主要用于删除某个参数模板。
     */
    async DeleteParameterTemplate(req, cb) {
        return this.request("DeleteParameterTemplate", req, cb);
    }
    /**
     * 本接口（DescribeDBInstanceAttribute）用于查询实例的参数信息。
     */
    async DescribeDBInstanceParameters(req, cb) {
        return this.request("DescribeDBInstanceParameters", req, cb);
    }
    /**
     * 本接口 (DeleteServerlessDBInstance) 用于删除一个ServerlessDB实例。
     */
    async DeleteServerlessDBInstance(req, cb) {
        return this.request("DeleteServerlessDBInstance", req, cb);
    }
    /**
     * 本接口（CreateDBInstanceNetworkAccess）用于创建实例网络。
     */
    async CreateDBInstanceNetworkAccess(req, cb) {
        return this.request("CreateDBInstanceNetworkAccess", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceSpec）用于修改实例规格，包括内存、磁盘。
     */
    async ModifyDBInstanceSpec(req, cb) {
        return this.request("ModifyDBInstanceSpec", req, cb);
    }
    /**
     * 本接口（ModifyBackupDownloadRestriction）用于修改备份文件下载限制。
     */
    async ModifyBackupDownloadRestriction(req, cb) {
        return this.request("ModifyBackupDownloadRestriction", req, cb);
    }
    /**
     * 本接口（DescribeTasks）用于查询任务列表，展示异步任务的执行进度。
注：本接口中展示的步骤为总结性步骤，可能伴随着版本迭代进行调整，不建议作为关键逻辑使用
     */
    async DescribeTasks(req, cb) {
        return this.request("DescribeTasks", req, cb);
    }
    /**
     * 本接口（RenewInstance）用于续费实例。
     */
    async RenewInstance(req, cb) {
        return this.request("RenewInstance", req, cb);
    }
    /**
     * 接口（DescribeDatabases）用来查询实例的数据库列表。
     */
    async DescribeDatabases(req, cb) {
        return this.request("DescribeDatabases", req, cb);
    }
    /**
     * 本接口 (DescribeParameterTemplates) 用于查询参数模板列表。
     */
    async DescribeParameterTemplates(req, cb) {
        return this.request("DescribeParameterTemplates", req, cb);
    }
    /**
     * 本接口（DescribeProductConfig）用于查询售卖规格配置。本接口已废弃，推荐使用新接口[DescribeClasses](https://cloud.tencent.com/document/api/409/89019)。
     */
    async DescribeProductConfig(req, cb) {
        return this.request("DescribeProductConfig", req, cb);
    }
    /**
     * 本接口（DescribeDBSlowlogs）用于获取慢查询日志。本接口已于2021.09.01日废弃，后续此接口将不再返回任何数据，推荐使用接口[DescribeSlowQueryList](https://cloud.tencent.com/document/api/409/60540)替代。
     */
    async DescribeDBSlowlogs(req, cb) {
        return this.request("DescribeDBSlowlogs", req, cb);
    }
    /**
     * 查询数据库账号对某数据库对象拥有的权限列表。
     */
    async DescribeAccountPrivileges(req, cb) {
        return this.request("DescribeAccountPrivileges", req, cb);
    }
    /**
     * 可对RO组进行网络的删除操作。
     */
    async DeleteReadOnlyGroupNetworkAccess(req, cb) {
        return this.request("DeleteReadOnlyGroupNetworkAccess", req, cb);
    }
    /**
     * 支持实例的计费类型转换（目前仅支持按量计费转包年包月）
     */
    async ModifyDBInstanceChargeType(req, cb) {
        return this.request("ModifyDBInstanceChargeType", req, cb);
    }
    /**
     * 解除数据库账号的锁定，解锁后账号可以登录数据库。
     */
    async UnlockAccount(req, cb) {
        return this.request("UnlockAccount", req, cb);
    }
    /**
     * 本接口 (DestroyDBInstance) 用于彻底销毁指定DBInstanceId对应的实例，销毁后实例数据将彻底删除，无法找回，调用前请仔细确认要操作的实例。只能销毁隔离中的实例。
     */
    async DestroyDBInstance(req, cb) {
        return this.request("DestroyDBInstance", req, cb);
    }
    /**
     * 本接口（DescribeDBBackups）用于查询实例备份列表。本接口已废弃，推荐使用接口[DescribeBaseBackups](https://cloud.tencent.com/document/api/409/89022)替代。
     */
    async DescribeDBBackups(req, cb) {
        return this.request("DescribeDBBackups", req, cb);
    }
    /**
     * 此接口（DescribeSlowQueryAnalysis）用于统计指定时间范围内的所有慢查询，根据SQL语句抽象参数后，进行聚合分析，并返回同类SQL列表。
     */
    async DescribeSlowQueryAnalysis(req, cb) {
        return this.request("DescribeSlowQueryAnalysis", req, cb);
    }
    /**
     * 本接口 (InquiryPriceCreateDBInstances) 用于查询购买实例的价格信息。
     */
    async InquiryPriceCreateDBInstances(req, cb) {
        return this.request("InquiryPriceCreateDBInstances", req, cb);
    }
    /**
     * 本接口（DescribeDBInstanceSecurityGroups）用于查询实例安全组。
     */
    async DescribeDBInstanceSecurityGroups(req, cb) {
        return this.request("DescribeDBInstanceSecurityGroups", req, cb);
    }
    /**
     * 本接口（CreateBaseBackup）用于创建实例的数据备份。
     */
    async CreateBaseBackup(req, cb) {
        return this.request("CreateBaseBackup", req, cb);
    }
    /**
     * 本接口（DescribeParameterTemplateAttributes）用于查询某个参数模板的具体内容，包括基本信息和参数信息。
     */
    async DescribeParameterTemplateAttributes(req, cb) {
        return this.request("DescribeParameterTemplateAttributes", req, cb);
    }
    /**
     * 根据备份集或恢复目标时间，在原实例上恢复数据库相关对象，例如数据库、表。
     */
    async RestoreDBInstanceObjects(req, cb) {
        return this.request("RestoreDBInstanceObjects", req, cb);
    }
    /**
     * 本接口（CloseServerlessDBExtranetAccess）用于关闭serverlessDB实例公网地址
     */
    async CloseServerlessDBExtranetAccess(req, cb) {
        return this.request("CloseServerlessDBExtranetAccess", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceDeployment）用于修改节点可用区部署方式，仅支持主实例。
     */
    async ModifyDBInstanceDeployment(req, cb) {
        return this.request("ModifyDBInstanceDeployment", req, cb);
    }
    /**
     * 本接口 (CreateServerlessDBInstance) 用于创建一个ServerlessDB实例，创建成功返回实例ID。
     */
    async CreateServerlessDBInstance(req, cb) {
        return this.request("CreateServerlessDBInstance", req, cb);
    }
    /**
     * 此接口用于创建数据库，需指定数据库名及所有者。
     */
    async CreateDatabase(req, cb) {
        return this.request("CreateDatabase", req, cb);
    }
    /**
     * 此接口用于创建数据账号，返回的Oid为账号唯一标识。与数据库系统表pg_roles中记录的oid一致。
     */
    async CreateAccount(req, cb) {
        return this.request("CreateAccount", req, cb);
    }
    /**
     * 本接口 (ModifyDBInstanceParameters) 用于修改实例参数。
     */
    async ModifyDBInstanceParameters(req, cb) {
        return this.request("ModifyDBInstanceParameters", req, cb);
    }
    /**
     * 本接口（DescribeBaseBackups）用于查询数据备份列表。
     */
    async DescribeBaseBackups(req, cb) {
        return this.request("DescribeBaseBackups", req, cb);
    }
    /**
     * 本接口（DescribeAvailableRecoveryTime）用于查询实例可恢复的时间范围。
     */
    async DescribeAvailableRecoveryTime(req, cb) {
        return this.request("DescribeAvailableRecoveryTime", req, cb);
    }
    /**
     * 本接口 (DescribeRegions) 用于查询售卖地域信息。
     */
    async DescribeRegions(req, cb) {
        return this.request("DescribeRegions", req, cb);
    }
    /**
     * 本接口（OpenServerlessDBExtranetAccess）用于开通serverlessDB实例公网地址。
     */
    async OpenServerlessDBExtranetAccess(req, cb) {
        return this.request("OpenServerlessDBExtranetAccess", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceReadOnlyGroup）用于修改实例所属的只读组
     */
    async ModifyDBInstanceReadOnlyGroup(req, cb) {
        return this.request("ModifyDBInstanceReadOnlyGroup", req, cb);
    }
    /**
     * 用于克隆实例，支持指定备份集、指定时间点进行克隆。
     */
    async CloneDBInstance(req, cb) {
        return this.request("CloneDBInstance", req, cb);
    }
    /**
     * 本接口（DisIsolateDBInstances）用于解隔离实例
     */
    async DisIsolateDBInstances(req, cb) {
        return this.request("DisIsolateDBInstances", req, cb);
    }
    /**
     * 用于查询一个或多个serverlessDB实例的详细信息
     */
    async DescribeServerlessDBInstances(req, cb) {
        return this.request("DescribeServerlessDBInstances", req, cb);
    }
    /**
     * 本接口（DescribeDBVersions）用于查询支持的数据库版本。
     */
    async DescribeDBVersions(req, cb) {
        return this.request("DescribeDBVersions", req, cb);
    }
    /**
     * 本接口（ModifyParameterTemplate）主要用于修改参数模板名称，描述等配置，也可用于管理参数模板中的参数列表。
     */
    async ModifyParameterTemplate(req, cb) {
        return this.request("ModifyParameterTemplate", req, cb);
    }
    /**
     * 本接口 (CreateParameterTemplate) 用于创建参数模板。
     */
    async CreateParameterTemplate(req, cb) {
        return this.request("CreateParameterTemplate", req, cb);
    }
    /**
     * 本接口(CreateReadOnlyDBInstance)用于创建只读实例
     */
    async CreateReadOnlyDBInstance(req, cb) {
        return this.request("CreateReadOnlyDBInstance", req, cb);
    }
    /**
     * 本接口(DescribeBackupSummaries)用于查询实例备份的统计信息，返回以实例为维度的备份个数、占用容量等信息（容量单位为字节）。
     */
    async DescribeBackupSummaries(req, cb) {
        return this.request("DescribeBackupSummaries", req, cb);
    }
    /**
     * 本接口（UpgradeDBInstanceMajorVersion）用于升级实例内核大版本，例如从PostgreSQL 12升级到PostgreSQL 15。
     */
    async UpgradeDBInstanceMajorVersion(req, cb) {
        return this.request("UpgradeDBInstanceMajorVersion", req, cb);
    }
    /**
     * 本接口(RebalanceReadOnlyGroup)用于重新均衡 RO 组内实例的负载。注意，RO 组内 RO 实例会有一次数据库连接瞬断，请确保应用程序能重连数据库，谨慎操作。
     */
    async RebalanceReadOnlyGroup(req, cb) {
        return this.request("RebalanceReadOnlyGroup", req, cb);
    }
    /**
     * 本接口（CreateReadOnlyGroupNetworkAccess）用于创建RO组的网络。
     */
    async CreateReadOnlyGroupNetworkAccess(req, cb) {
        return this.request("CreateReadOnlyGroupNetworkAccess", req, cb);
    }
    /**
     * 本接口 （DescribeEncryptionKeys） 用于查询实例的密钥信息列表。
     */
    async DescribeEncryptionKeys(req, cb) {
        return this.request("DescribeEncryptionKeys", req, cb);
    }
    /**
     * 本接口（ModifyDBInstancesProject）用于修改实例所属项目。
     */
    async ModifyDBInstancesProject(req, cb) {
        return this.request("ModifyDBInstancesProject", req, cb);
    }
    /**
     * 本接口（UpgradeDBInstanceKernelVersion）用于升级实例的内核版本号。
     */
    async UpgradeDBInstanceKernelVersion(req, cb) {
        return this.request("UpgradeDBInstanceKernelVersion", req, cb);
    }
    /**
     * 本接口（ResetAccountPassword）用于重置实例的账户密码。
     */
    async ResetAccountPassword(req, cb) {
        return this.request("ResetAccountPassword", req, cb);
    }
    /**
     * 本接口（RestartDBInstance）用于重启实例。
     */
    async RestartDBInstance(req, cb) {
        return this.request("RestartDBInstance", req, cb);
    }
    /**
     * 可对实例进行网络的删除操作。
     */
    async DeleteDBInstanceNetworkAccess(req, cb) {
        return this.request("DeleteDBInstanceNetworkAccess", req, cb);
    }
    /**
     * 本接口(DeleteReadOnlyGroup)用于删除指定的只读组
     */
    async DeleteReadOnlyGroup(req, cb) {
        return this.request("DeleteReadOnlyGroup", req, cb);
    }
    /**
     * 本接口（DescribeDBXlogs）用于获取实例Xlog列表。本接口已废弃，推荐使用接口[DescribeLogBackups](https://cloud.tencent.com/document/api/409/89021)替代。
     */
    async DescribeDBXlogs(req, cb) {
        return this.request("DescribeDBXlogs", req, cb);
    }
    /**
     * 本接口 (DescribeDBInstanceAttribute) 用于查询某个实例的详情信息。
     */
    async DescribeDBInstanceAttribute(req, cb) {
        return this.request("DescribeDBInstanceAttribute", req, cb);
    }
    /**
     * 本接口（CreateDBInstances）用于创建一个或者多个PostgreSQL实例,仅发货实例不会进行初始化。本接口已废弃，推荐使用接口[CreateInstances](https://cloud.tencent.com/document/api/409/56107)替代。
     */
    async CreateDBInstances(req, cb) {
        return this.request("CreateDBInstances", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceHAConfig）用于修改实例HA配置信息。其中HA配置信息包括：
<li>允许备节点切换为主节点的条件配置
<li>半同步实例使用同步复制或异步复制的条件配置
     */
    async ModifyDBInstanceHAConfig(req, cb) {
        return this.request("ModifyDBInstanceHAConfig", req, cb);
    }
    /**
     * 本接口（DeleteLogBackup）用于删除实例指定日志备份。
     */
    async DeleteLogBackup(req, cb) {
        return this.request("DeleteLogBackup", req, cb);
    }
    /**
     * 本接口（IsolateDBInstances）用于隔离实例。
     */
    async IsolateDBInstances(req, cb) {
        return this.request("IsolateDBInstances", req, cb);
    }
    /**
     * 本接口（ModifyBaseBackupExpireTime）用于修改实例指定数据备份的过期时间。
     */
    async ModifyBaseBackupExpireTime(req, cb) {
        return this.request("ModifyBaseBackupExpireTime", req, cb);
    }
    /**
     * 修改某账号对某数据库对象的权限、修改账号类型。
     */
    async ModifyAccountPrivileges(req, cb) {
        return this.request("ModifyAccountPrivileges", req, cb);
    }
    /**
     * 此接口（DescribeSlowQueryList）用于查询指定时间范围内的所有慢查询。
     */
    async DescribeSlowQueryList(req, cb) {
        return this.request("DescribeSlowQueryList", req, cb);
    }
    /**
     * 本接口（DescribeLogBackups）用于查询日志备份列表。
     */
    async DescribeLogBackups(req, cb) {
        return this.request("DescribeLogBackups", req, cb);
    }
    /**
     * 本接口（CloseDBExtranetAccess）用于关闭实例公网地址。
     */
    async CloseDBExtranetAccess(req, cb) {
        return this.request("CloseDBExtranetAccess", req, cb);
    }
    /**
     * 本接口（AddDBInstanceToReadOnlyGroup）用于添加只读实例到只读组
     */
    async AddDBInstanceToReadOnlyGroup(req, cb) {
        return this.request("AddDBInstanceToReadOnlyGroup", req, cb);
    }
    /**
     * 本接口（DescribeAccounts）用于查询实例的数据库账号列表。
     */
    async DescribeAccounts(req, cb) {
        return this.request("DescribeAccounts", req, cb);
    }
    /**
     * 本接口（DescribeCloneDBInstanceSpec）用于查询克隆实例可选择的最小规格，包括SpecCode和磁盘。
     */
    async DescribeCloneDBInstanceSpec(req, cb) {
        return this.request("DescribeCloneDBInstanceSpec", req, cb);
    }
    /**
     * 本接口 (DescribeDBInstances) 用于查询一个或多个实例的详细信息。
     */
    async DescribeDBInstances(req, cb) {
        return this.request("DescribeDBInstances", req, cb);
    }
    /**
     * 本接口（DescribeBackupDownloadRestriction）用于查询备份文件下载限制。
     */
    async DescribeBackupDownloadRestriction(req, cb) {
        return this.request("DescribeBackupDownloadRestriction", req, cb);
    }
    /**
     * 本接口(ModifyReadOnlyGroupConfig)用于更新只读组配置信息
     */
    async ModifyReadOnlyGroupConfig(req, cb) {
        return this.request("ModifyReadOnlyGroupConfig", req, cb);
    }
    /**
     * 本接口（RemoveDBInstanceFromReadOnlyGroup）用户将只读实例从只读组中移除
     */
    async RemoveDBInstanceFromReadOnlyGroup(req, cb) {
        return this.request("RemoveDBInstanceFromReadOnlyGroup", req, cb);
    }
    /**
     * 此接口用于创建备份策略。
     */
    async CreateBackupPlan(req, cb) {
        return this.request("CreateBackupPlan", req, cb);
    }
    /**
     * 本接口（DescribeParamsEvent）用于查询参数修改事件。
     */
    async DescribeParamsEvent(req, cb) {
        return this.request("DescribeParamsEvent", req, cb);
    }
    /**
     * 本接口（DescribeClasses）用于查询实例售卖规格。
     */
    async DescribeClasses(req, cb) {
        return this.request("DescribeClasses", req, cb);
    }
    /**
     * 本接口（DescribeOrders）用于查询订单信息。
     */
    async DescribeOrders(req, cb) {
        return this.request("DescribeOrders", req, cb);
    }
    /**
     * 本接口（SwitchDBInstancePrimary）用于切换实例主备关系。
<li>通过主动发起切换，可以验证业务能否正确处理实例主备切换的场景
<li>通过使用强制切换，可以在备节点延迟不满足切换条件时，强制发起主从切换
<li>只有主实例可以执行该操作
     */
    async SwitchDBInstancePrimary(req, cb) {
        return this.request("SwitchDBInstancePrimary", req, cb);
    }
    /**
     * 本接口（ModifyReadOnlyDBInstanceWeight）用于修改只读实例权重
     */
    async ModifyReadOnlyDBInstanceWeight(req, cb) {
        return this.request("ModifyReadOnlyDBInstanceWeight", req, cb);
    }
    /**
     * 本接口 (DescribeBackupPlans) 用于实例所有的备份计划查询
     */
    async DescribeBackupPlans(req, cb) {
        return this.request("DescribeBackupPlans", req, cb);
    }
    /**
     * 当升级完成后，对处于等待切换状态下的实例，强制实例立即切换。
     */
    async ModifySwitchTimePeriod(req, cb) {
        return this.request("ModifySwitchTimePeriod", req, cb);
    }
    /**
     * 本接口（OpenDBExtranetAccess）用于开通实例公网地址。
     */
    async OpenDBExtranetAccess(req, cb) {
        return this.request("OpenDBExtranetAccess", req, cb);
    }
    /**
     * 修改数据库所有者
     */
    async ModifyDatabaseOwner(req, cb) {
        return this.request("ModifyDatabaseOwner", req, cb);
    }
    /**
     * 此接口用于删除数据库账号，需要同时输入Oid与UserName，避免误删。
     */
    async DeleteAccount(req, cb) {
        return this.request("DeleteAccount", req, cb);
    }
    /**
     * 本接口 (ModifyBackupPlan) 用于实例备份计划的修改，默认是在每天的凌晨开始全量备份，备份保留时长是7天。可以根据此接口指定时间进行实例的备份。
     */
    async ModifyBackupPlan(req, cb) {
        return this.request("ModifyBackupPlan", req, cb);
    }
    /**
     * 本接口用于修改实例SSL配置，功能包含开启、关闭、修改SSL证书保护的连接地址。
     */
    async ModifyDBInstanceSSLConfig(req, cb) {
        return this.request("ModifyDBInstanceSSLConfig", req, cb);
    }
    /**
     * 本接口（InitDBInstances）用于初始化云数据库PostgreSQL实例。本接口已废弃，推荐使用接口[CreateInstances](https://cloud.tencent.com/document/api/409/56107)替代。
     */
    async InitDBInstances(req, cb) {
        return this.request("InitDBInstances", req, cb);
    }
    /**
     * 本接口 (DescribeZones) 用于查询支持的可用区信息。
     */
    async DescribeZones(req, cb) {
        return this.request("DescribeZones", req, cb);
    }
    /**
     * 本接口用于查询实例SSL状态
     */
    async DescribeDBInstanceSSLConfig(req, cb) {
        return this.request("DescribeDBInstanceSSLConfig", req, cb);
    }
    /**
     * 删除备份策略
     */
    async DeleteBackupPlan(req, cb) {
        return this.request("DeleteBackupPlan", req, cb);
    }
    /**
     * 本接口（InquiryPriceUpgradeDBInstance）用于查询升级实例的价格。只支持按量计费实例。
     */
    async InquiryPriceUpgradeDBInstance(req, cb) {
        return this.request("InquiryPriceUpgradeDBInstance", req, cb);
    }
    /**
     * 本接口（CreateReadOnlyGroup）用于创建只读组
     */
    async CreateReadOnlyGroup(req, cb) {
        return this.request("CreateReadOnlyGroup", req, cb);
    }
    /**
     * 本接口（InquiryPriceRenewDBInstance）用于查询续费实例的价格。
     */
    async InquiryPriceRenewDBInstance(req, cb) {
        return this.request("InquiryPriceRenewDBInstance", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceSecurityGroups）用于修改实例安全组。
     */
    async ModifyDBInstanceSecurityGroups(req, cb) {
        return this.request("ModifyDBInstanceSecurityGroups", req, cb);
    }
    /**
     * 本接口（DeleteBaseBackup）用于删除实例指定数据备份。
     */
    async DeleteBaseBackup(req, cb) {
        return this.request("DeleteBaseBackup", req, cb);
    }
    /**
     * 此接口用于锁定数据库账号，锁定后账号当前连接会断开，并且无法建立新连接。
     */
    async LockAccount(req, cb) {
        return this.request("LockAccount", req, cb);
    }
    /**
     * 本接口（DescribeReadOnlyGroups）用于查询只读组列表
     */
    async DescribeReadOnlyGroups(req, cb) {
        return this.request("DescribeReadOnlyGroups", req, cb);
    }
    /**
     * 本接口（UpgradeDBInstance）用于升级实例配置。本接口已废弃，推荐使用接口[ModifyDBInstanceSpec](https://cloud.tencent.com/document/api/409/63689)替代。
     */
    async UpgradeDBInstance(req, cb) {
        return this.request("UpgradeDBInstance", req, cb);
    }
    /**
     * 本接口 (CreateInstances) 用于创建一个或者多个PostgreSQL实例，通过此接口创建的实例无需进行初始化，可直接使用。
<li>实例创建成功后将自动开机启动，实例状态变为“运行中”。</li>
<li>预付费实例的购买会预先扣除本次实例购买所需金额，按小时后付费实例购买会预先冻结本次实例购买一小时内所需金额，在调用本接口前请确保账户余额充足。</li>
     */
    async CreateInstances(req, cb) {
        return this.request("CreateInstances", req, cb);
    }
}
exports.Client = Client;
