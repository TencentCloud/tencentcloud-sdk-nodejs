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
 * cdb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cdb.tencentcloudapi.com", "2017-03-20", clientConfig);
    }
    /**
     * 本接口(DescribeDBInstanceGTID)用于查询云数据库实例是否开通了 GTID，不支持版本为 5.5 以及以下的实例。
     */
    async DescribeDBInstanceGTID(req, cb) {
        return this.request("DescribeDBInstanceGTID", req, cb);
    }
    /**
     * 本接口(CreateRoInstanceIp)用于创建云数据库只读实例的独立VIP。
     */
    async CreateRoInstanceIp(req, cb) {
        return this.request("CreateRoInstanceIp", req, cb);
    }
    /**
     * 本接口(CreateAuditPolicy)用于创建云数据库实例的审计策略，即将审计规则绑定到具体的云数据库实例上。
     */
    async CreateAuditPolicy(req, cb) {
        return this.request("CreateAuditPolicy", req, cb);
    }
    /**
     * 本接口(DescribeTableColumns)用于查询云数据库实例的指定数据库表的列信息，仅支持主实例和灾备实例。
     */
    async DescribeTableColumns(req, cb) {
        return this.request("DescribeTableColumns", req, cb);
    }
    /**
     * 开启SSL连接功能。
     */
    async OpenSSL(req, cb) {
        return this.request("OpenSSL", req, cb);
    }
    /**
     * 本接口（DescribeDBFeatures）用于查询云数据库版本属性，包括是否支持数据库加密、数据库审计等功能。
     */
    async DescribeDBFeatures(req, cb) {
        return this.request("DescribeDBFeatures", req, cb);
    }
    /**
     * 本接口（CreateAuditRuleTemplate）用于创建审计规则模板。
     */
    async CreateAuditRuleTemplate(req, cb) {
        return this.request("CreateAuditRuleTemplate", req, cb);
    }
    /**
     * 本接口(BalanceRoGroupLoad)用于重新均衡 RO 组内实例的负载。注意，RO 组内 RO 实例会有一次数据库连接瞬断，请确保应用程序能重连数据库，谨慎操作。
     */
    async BalanceRoGroupLoad(req, cb) {
        return this.request("BalanceRoGroupLoad", req, cb);
    }
    /**
     * 本接口(IsolateDBInstance)用于隔离云数据库实例，隔离后不能通过IP和端口访问数据库。隔离的实例可在回收站中进行开机。若为欠费隔离，请尽快进行充值。
     */
    async IsolateDBInstance(req, cb) {
        return this.request("IsolateDBInstance", req, cb);
    }
    /**
     * 本接口（RestartDBInstances）用于重启云数据库实例。

注意：
1、本接口支持主实例、只读实例、灾备实例进行重启操作。
2、实例状态必须为正常，并且没有其他异步任务在执行中。
     */
    async RestartDBInstances(req, cb) {
        return this.request("RestartDBInstances", req, cb);
    }
    /**
     * 本接口(ModifyInstanceTag)用于对实例标签进行添加、修改或者删除。
     */
    async ModifyInstanceTag(req, cb) {
        return this.request("ModifyInstanceTag", req, cb);
    }
    /**
     * 本接口(DescribeTimeWindow)用于查询云数据库实例的维护时间窗口。
     */
    async DescribeTimeWindow(req, cb) {
        return this.request("DescribeTimeWindow", req, cb);
    }
    /**
     * 该接口（DescribeInstanceUpgradeCheckJob）查询实例版本升级校验任务。
     */
    async DescribeInstanceUpgradeCheckJob(req, cb) {
        return this.request("DescribeInstanceUpgradeCheckJob", req, cb);
    }
    /**
     * 本接口(DescribeBackupOverview)用于查询用户的备份概览。返回用户当前备份总个数、备份总的占用容量、赠送的免费容量、计费容量（容量单位为字节）。
     */
    async DescribeBackupOverview(req, cb) {
        return this.request("DescribeBackupOverview", req, cb);
    }
    /**
     * 本接口（StopReplication）用于停止 RO 复制，中断从主实例同步数据。
     */
    async StopReplication(req, cb) {
        return this.request("StopReplication", req, cb);
    }
    /**
     * 开启/关闭CDB慢日志、错误日志投递CLS
     */
    async ModifyDBInstanceLogToCLS(req, cb) {
        return this.request("ModifyDBInstanceLogToCLS", req, cb);
    }
    /**
     * 通过该API，可以关闭 CPU 弹性扩容。
     */
    async StopCpuExpand(req, cb) {
        return this.request("StopCpuExpand", req, cb);
    }
    /**
     * 本接口(ModifyDBInstanceName)用于修改云数据库实例的名称。
     */
    async ModifyDBInstanceName(req, cb) {
        return this.request("ModifyDBInstanceName", req, cb);
    }
    /**
     * 本接口(DescribeCdbZoneConfig)用于查询云数据库各地域可售卖的规格配置。
     */
    async DescribeCdbZoneConfig(req, cb) {
        return this.request("DescribeCdbZoneConfig", req, cb);
    }
    /**
     * 实例关闭审计服务
     */
    async CloseAuditService(req, cb) {
        return this.request("CloseAuditService", req, cb);
    }
    /**
     * 本接口(StopRollback) 用于撤销实例正在进行的回档任务，该接口返回一个异步任务id。 撤销结果可以通过 DescribeAsyncRequestInfo 查询任务的执行情况。
     */
    async StopRollback(req, cb) {
        return this.request("StopRollback", req, cb);
    }
    /**
     * 本接口（DescribeInstanceUpgradeType）用于查询数据库实例升级类型。
     */
    async DescribeInstanceUpgradeType(req, cb) {
        return this.request("DescribeInstanceUpgradeType", req, cb);
    }
    /**
     * 本接口(OfflineIsolatedInstances)用于立即下线隔离状态的云数据库实例。进行操作的实例状态必须为隔离状态，即通过 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询到 Status 值为 5 的实例。

该接口为异步操作，部分资源的回收可能存在延迟。您可以通过使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口，指定实例 InstanceId 和状态 Status 为 [5,6,7] 进行查询，若返回实例为空，则实例资源已全部释放。

注意，实例下线后，相关资源和数据将无法找回，请谨慎操作。
     */
    async OfflineIsolatedInstances(req, cb) {
        return this.request("OfflineIsolatedInstances", req, cb);
    }
    /**
     * 本接口(CreateAuditLogFile)用于创建云数据库实例的审计日志文件。
     */
    async CreateAuditLogFile(req, cb) {
        return this.request("CreateAuditLogFile", req, cb);
    }
    /**
     * 本接口(OpenDBInstanceGTID)用于开启云数据库实例的 GTID，只支持版本为 5.6 以及以上的实例。
     */
    async OpenDBInstanceGTID(req, cb) {
        return this.request("OpenDBInstanceGTID", req, cb);
    }
    /**
     * 本接口(VerifyRootAccount)用于校验云数据库实例的 ROOT 账号是否有足够的权限进行授权操作。
     */
    async VerifyRootAccount(req, cb) {
        return this.request("VerifyRootAccount", req, cb);
    }
    /**
     * 本接口(DescribeRollbackTaskDetail)用于查询云数据库实例回档任务详情。
     */
    async DescribeRollbackTaskDetail(req, cb) {
        return this.request("DescribeRollbackTaskDetail", req, cb);
    }
    /**
     * 本接口（CheckMigrateCluster）用于高可用实例一键迁移到集群版校验。
     */
    async CheckMigrateCluster(req, cb) {
        return this.request("CheckMigrateCluster", req, cb);
    }
    /**
     * 该接口用于修改用户当前地域的备份文件限制下载来源，可以设置内外网均可下载、仅内网可下载，或内网指定的vpc、ip可以下载。
     */
    async ModifyBackupDownloadRestriction(req, cb) {
        return this.request("ModifyBackupDownloadRestriction", req, cb);
    }
    /**
     * 该接口（DescribeParamTemplates）查询参数模板列表，全地域公共参数Region均为ap-guangzhou。
     */
    async DescribeParamTemplates(req, cb) {
        return this.request("DescribeParamTemplates", req, cb);
    }
    /**
     * 本接口(DescribeTasks)用于查询云数据库实例任务列表。
     */
    async DescribeTasks(req, cb) {
        return this.request("DescribeTasks", req, cb);
    }
    /**
     * 本接口(DescribeBackupConfig)用于查询数据库备份配置信息。
     */
    async DescribeBackupConfig(req, cb) {
        return this.request("DescribeBackupConfig", req, cb);
    }
    /**
     * 本接口（OpenDBInstanceEncryption）用于启用实例数据存储加密功能，支持用户指定自定义密钥。

注意，启用实例数据存储加密之前，需要进行以下操作：

1、进行 [实例初始化](https://cloud.tencent.com/document/api/236/15873) 操作；

2、开启 [KMS服务](https://console.cloud.tencent.com/kms2)；

3、对云数据库(MySQL)[授予访问KMS密钥的权限](https://console.cloud.tencent.com/cam/role)，角色名为MySQL_QCSRole，预设策略名为QcloudAccessForMySQLRole；

该 API 耗时可能到10s，客户端可能超时，如果调用 API 返回 InternalError ，请您调用DescribeDBInstanceInfo 确认后端加密是否开通成功。
     */
    async OpenDBInstanceEncryption(req, cb) {
        return this.request("OpenDBInstanceEncryption", req, cb);
    }
    /**
     * 本接口(CloseWanService)用于关闭云数据库实例的外网访问。关闭外网访问后，外网地址将不可访问。
     */
    async CloseWanService(req, cb) {
        return this.request("CloseWanService", req, cb);
    }
    /**
     * 该接口（DescribeDefaultParams）用于查询默认的可设置参数列表。
     */
    async DescribeDefaultParams(req, cb) {
        return this.request("DescribeDefaultParams", req, cb);
    }
    /**
     * 本接口（DescribeAuditPolicies）用于查询云数据库实例的审计策略。
     */
    async DescribeAuditPolicies(req, cb) {
        return this.request("DescribeAuditPolicies", req, cb);
    }
    /**
     * 本接口(DeleteDatabase)用于在云数据库实例中删除数据库。
     */
    async DeleteDatabase(req, cb) {
        return this.request("DeleteDatabase", req, cb);
    }
    /**
     * 本接口(DescribeTagsOfInstanceIds)用于获取云数据库实例的标签信息。
     */
    async DescribeTagsOfInstanceIds(req, cb) {
        return this.request("DescribeTagsOfInstanceIds", req, cb);
    }
    /**
     * 本接口(DescribeDatabases)用于查询云数据库实例的数据库信息，仅支持主实例和灾备实例，不支持只读实例。
     */
    async DescribeDatabases(req, cb) {
        return this.request("DescribeDatabases", req, cb);
    }
    /**
     * 根据检索条件查询实例错误日志详情。只能查询一个月之内的错误日志。
使用时需要注意：可能存在单条错误日志太大，导致整个http请求的回包太大，进而引发接口超时。一旦发生超时，建议您缩小查询时的Limit参数值，从而降低包的大小，让接口能够及时返回内容。
     */
    async DescribeErrorLogData(req, cb) {
        return this.request("DescribeErrorLogData", req, cb);
    }
    /**
     * 该接口 (SwitchDBInstanceMasterSlave) 支持用户主动切换实例主从角色。
     */
    async SwitchDBInstanceMasterSlave(req, cb) {
        return this.request("SwitchDBInstanceMasterSlave", req, cb);
    }
    /**
     * 本接口(CreateDatabase)用于在云数据库实例中创建数据库。
     */
    async CreateDatabase(req, cb) {
        return this.request("CreateDatabase", req, cb);
    }
    /**
     * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
     */
    async DisassociateSecurityGroups(req, cb) {
        return this.request("DisassociateSecurityGroups", req, cb);
    }
    /**
     * 本接口(RenewDBInstance)用于续费云数据库实例，支持付费模式为包年包月的实例。按量计费实例可通过该接口续费为包年包月的实例。
     */
    async RenewDBInstance(req, cb) {
        return this.request("RenewDBInstance", req, cb);
    }
    /**
     * 本接口(DescribeTables)用于查询云数据库实例的数据库表信息，仅支持主实例和灾备实例，不支持只读实例。
     */
    async DescribeTables(req, cb) {
        return this.request("DescribeTables", req, cb);
    }
    /**
     * 本接口(DescribeAccountPrivileges)用于查询云数据库账户支持的权限信息。
     */
    async DescribeAccountPrivileges(req, cb) {
        return this.request("DescribeAccountPrivileges", req, cb);
    }
    /**
     * 本接口(DescribeDataBackupOverview)用于查询用户在当前地域总的数据备份概览。
     */
    async DescribeDataBackupOverview(req, cb) {
        return this.request("DescribeDataBackupOverview", req, cb);
    }
    /**
     * 本接口（ReleaseIsolatedDBInstances）用于恢复已隔离云数据库实例。仅用于按量计费实例的解隔离，包年包月实例的解隔离请使用 RenewDBInstance 。
     */
    async ReleaseIsolatedDBInstances(req, cb) {
        return this.request("ReleaseIsolatedDBInstances", req, cb);
    }
    /**
     * 本接口（CreateCloneInstance）用于从目标源实例创建一个克隆实例，可以指定克隆实例回档到源实例的指定物理备份文件或者指定的回档时间点。
     */
    async CreateCloneInstance(req, cb) {
        return this.request("CreateCloneInstance", req, cb);
    }
    /**
     * 本接口(ModifyAuditConfig)用于修改云数据库审计策略的服务配置，包括审计日志保存时长等。
     */
    async ModifyAuditConfig(req, cb) {
        return this.request("ModifyAuditConfig", req, cb);
    }
    /**
     * 本接口（ModifyInstancePasswordComplexity）用于修改云数据库实例的密码复杂度。
     */
    async ModifyInstancePasswordComplexity(req, cb) {
        return this.request("ModifyInstancePasswordComplexity", req, cb);
    }
    /**
     * 本接口(ModifyTimeWindow)用于更新云数据库实例的维护时间窗口。
     */
    async ModifyTimeWindow(req, cb) {
        return this.request("ModifyTimeWindow", req, cb);
    }
    /**
     * 根据置放群组ID删除置放群组（置放群组中有资源存在时不能删除该置放群组）
     */
    async DeleteDeployGroups(req, cb) {
        return this.request("DeleteDeployGroups", req, cb);
    }
    /**
     * 本接口(SwitchForUpgrade)用于切换访问新实例，针对主升级中的实例处于待切换状态时，用户可主动发起该流程。
     */
    async SwitchForUpgrade(req, cb) {
        return this.request("SwitchForUpgrade", req, cb);
    }
    /**
     * 删除审计规则模板
     */
    async DeleteAuditRuleTemplates(req, cb) {
        return this.request("DeleteAuditRuleTemplates", req, cb);
    }
    /**
     * 本接口(DescribeBackups)用于查询云数据库实例的备份数据。
     */
    async DescribeBackups(req, cb) {
        return this.request("DescribeBackups", req, cb);
    }
    /**
     * 本接口（DescribeCdbProxyInfo）用于查询数据库代理详情信息。
     */
    async DescribeCdbProxyInfo(req, cb) {
        return this.request("DescribeCdbProxyInfo", req, cb);
    }
    /**
     * 该接口（CreateParamTemplate）用于创建参数模板，全地域公共参数 Region 均为 ap-guangzhou。
     */
    async CreateParamTemplate(req, cb) {
        return this.request("CreateParamTemplate", req, cb);
    }
    /**
     * 本接口（CreateDBInstanceHour）用于创建按量计费的实例，可通过传入实例规格、MySQL 版本号和数量等信息创建云数据库实例，支持主实例、灾备实例和只读实例的创建。

该接口为异步接口，您还可以使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询该实例的详细信息。当该实例的 Status 为 1，且 TaskStatus 为 0，表示实例已经发货成功。

1. 首先请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口查询可创建的实例规格信息，然后请使用 [查询数据库价格](https://cloud.tencent.com/document/api/236/18566) 接口查询可创建实例的售卖价格；
2. 单次创建实例最大支持 100 个，实例时长最大支持 36 个月；
3. 支持创建 MySQL 5.5、MySQL 5.6 、MySQL 5.7 和 MySQL 8.0 版本；
4. 支持创建主实例、灾备实例和只读实例；
     */
    async CreateDBInstanceHour(req, cb) {
        return this.request("CreateDBInstanceHour", req, cb);
    }
    /**
     * 本接口（AddTimeWindow）用于添加云数据库实例的维护时间窗口，以指定实例在哪些时间段可以自动执行切换访问操作。
     */
    async AddTimeWindow(req, cb) {
        return this.request("AddTimeWindow", req, cb);
    }
    /**
     * 查询实例支持代理版本和参数
     */
    async DescribeProxySupportParam(req, cb) {
        return this.request("DescribeProxySupportParam", req, cb);
    }
    /**
     * 该接口用于查询实例本地binlog保留策略。
     */
    async DescribeLocalBinlogConfig(req, cb) {
        return this.request("DescribeLocalBinlogConfig", req, cb);
    }
    /**
     * 本接口（CreateBackup）用于创建数据库备份。
     */
    async CreateBackup(req, cb) {
        return this.request("CreateBackup", req, cb);
    }
    /**
     * 本接口(ModifyDBInstanceVipVport)用于修改云数据库实例的IP和端口号，也可进行基础网络转 VPC 网络和 VPC 网络下的子网变更。
     */
    async ModifyDBInstanceVipVport(req, cb) {
        return this.request("ModifyDBInstanceVipVport", req, cb);
    }
    /**
     * 本接口(DescribeDBInstanceConfig)用于云数据库实例的配置信息，包括同步模式，部署模式等。
     */
    async DescribeDBInstanceConfig(req, cb) {
        return this.request("DescribeDBInstanceConfig", req, cb);
    }
    /**
     * 本接口（CreateCdbProxyAddress）用于数据库代理增加代理地址。
     */
    async CreateCdbProxyAddress(req, cb) {
        return this.request("CreateCdbProxyAddress", req, cb);
    }
    /**
     * 本接口(DeleteAuditPolicy)用于删除用户的审计策略。
     */
    async DeleteAuditPolicy(req, cb) {
        return this.request("DeleteAuditPolicy", req, cb);
    }
    /**
     * 本接口(DescribeProjectSecurityGroups)用于查询项目的安全组详情。
     */
    async DescribeProjectSecurityGroups(req, cb) {
        return this.request("DescribeProjectSecurityGroups", req, cb);
    }
    /**
     * 本接口(DescribeSlowLogs)用于获取云数据库实例的慢查询日志。说明：若单次查询数据量过大，则有可能响应超时，建议缩短单次查询时间范围，如一小时，避免导致超时。
     */
    async DescribeSlowLogs(req, cb) {
        return this.request("DescribeSlowLogs", req, cb);
    }
    /**
     * 本接口(InquiryPriceUpgradeInstances)用于查询云数据库实例升级的价格，支持查询按量计费或者包年包月实例的升级价格，实例类型支持主实例、灾备实例和只读实例。
     */
    async InquiryPriceUpgradeInstances(req, cb) {
        return this.request("InquiryPriceUpgradeInstances", req, cb);
    }
    /**
     * 该接口用于修改实例本地binlog保留策略。
     */
    async ModifyLocalBinlogConfig(req, cb) {
        return this.request("ModifyLocalBinlogConfig", req, cb);
    }
    /**
     * 本接口（CreateDBInstance）用于创建包年包月的云数据库实例（包括主实例、灾备实例和只读实例），可通过传入实例规格、MySQL 版本号、购买时长和数量等信息创建云数据库实例。

该接口为异步接口，您还可以使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询该实例的详细信息。当该实例的 Status 为1，且 TaskStatus 为0，表示实例已经发货成功。

1. 首先请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口查询可创建的实例规格信息，然后请使用 [查询数据库价格](https://cloud.tencent.com/document/api/236/18566) 接口查询可创建实例的售卖价格；
2. 单次创建实例最大支持 100 个，实例时长最大支持 36 个月；
3. 支持创建 MySQL 5.5 、 MySQL 5.6 、 MySQL 5.7 、 MySQL 8.0 版本；
4. 支持创建主实例、只读实例、灾备实例；
5. 当入参指定 ParamTemplateId 或 AlarmPolicyList 时，需将SDK提升至最新版本方可支持；
     */
    async CreateDBInstance(req, cb) {
        return this.request("CreateDBInstance", req, cb);
    }
    /**
     * 该接口（ModifyParamTemplate）用于修改参数模板，全地域公共参数Region均为ap-guangzhou。
     */
    async ModifyParamTemplate(req, cb) {
        return this.request("ModifyParamTemplate", req, cb);
    }
    /**
     * 该接口（DescribeInstanceParams）用于查询实例的参数列表。
     */
    async DescribeInstanceParams(req, cb) {
        return this.request("DescribeInstanceParams", req, cb);
    }
    /**
     * 本接口(DescribeBackupEncryptionStatus)用于查询实例默认备份加密状态。
     */
    async DescribeBackupEncryptionStatus(req, cb) {
        return this.request("DescribeBackupEncryptionStatus", req, cb);
    }
    /**
     * 查询代理规格配置
     */
    async DescribeProxyCustomConf(req, cb) {
        return this.request("DescribeProxyCustomConf", req, cb);
    }
    /**
     * 本接口(DescribeDeployGroupList)用于查询用户的置放群组列表，可以指定置放群组 ID 或置放群组名称。
     */
    async DescribeDeployGroupList(req, cb) {
        return this.request("DescribeDeployGroupList", req, cb);
    }
    /**
     * 本接口(StopDBImportJob)用于终止数据导入任务。
     */
    async StopDBImportJob(req, cb) {
        return this.request("StopDBImportJob", req, cb);
    }
    /**
     * 本接口（AnalyzeAuditLogs）用于在不同过滤条件下的审计日志结果集中，选定特定的数据列进行聚合统计。
     */
    async AnalyzeAuditLogs(req, cb) {
        return this.request("AnalyzeAuditLogs", req, cb);
    }
    /**
     * 本接口(CreateAccounts)用于创建云数据库的账户，需要指定新的账户名和域名，以及所对应的密码，同时可以设置账号的备注信息以及最大可用连接数。
     */
    async CreateAccounts(req, cb) {
        return this.request("CreateAccounts", req, cb);
    }
    /**
     * 调整数据库代理配置
     */
    async AdjustCdbProxy(req, cb) {
        return this.request("AdjustCdbProxy", req, cb);
    }
    /**
     * 该接口（ModifyProtectMode）用于修改实例的同步方式。
说明：仅专属集群可调用，该接口即将下线。
     */
    async ModifyProtectMode(req, cb) {
        return this.request("ModifyProtectMode", req, cb);
    }
    /**
     * 本接口(UpgradeDBInstanceEngineVersion)用于升级云数据库实例版本，实例类型支持主实例、灾备实例和只读实例等。
     */
    async UpgradeDBInstanceEngineVersion(req, cb) {
        return this.request("UpgradeDBInstanceEngineVersion", req, cb);
    }
    /**
     * 本接口（DescribeAuditLogFiles）用于查询云数据库实例的审计日志文件。
     */
    async DescribeAuditLogFiles(req, cb) {
        return this.request("DescribeAuditLogFiles", req, cb);
    }
    /**
     * 本接口（DescribeBackupDecryptionKey）用于查询备份文件解密密钥。
     */
    async DescribeBackupDecryptionKey(req, cb) {
        return this.request("DescribeBackupDecryptionKey", req, cb);
    }
    /**
     * 该接口（DescribeInstanceParamRecords）用于查询实例参数修改历史。
     */
    async DescribeInstanceParamRecords(req, cb) {
        return this.request("DescribeInstanceParamRecords", req, cb);
    }
    /**
     * 本接口(DescribeBackupSummaries)用于查询备份的统计情况，返回以实例为维度的备份占用容量，以及每个实例的数据备份和日志备份的个数和容量（容量单位为字节）。
     */
    async DescribeBackupSummaries(req, cb) {
        return this.request("DescribeBackupSummaries", req, cb);
    }
    /**
     * 该接口（DescribeParamTemplateInfo）用于查询参数模板详情，全地域公共参数Region均为ap-guangzhou。
     */
    async DescribeParamTemplateInfo(req, cb) {
        return this.request("DescribeParamTemplateInfo", req, cb);
    }
    /**
     * 本接口(DescribeBinlogBackupOverview)用于查询用户在当前地域总的日志备份概览。
     */
    async DescribeBinlogBackupOverview(req, cb) {
        return this.request("DescribeBinlogBackupOverview", req, cb);
    }
    /**
     * 本接口（SwitchDrInstanceToMaster）用于将云数据库灾备实例切换为主实例，注意请求必须发到灾备实例所在的地域。
     */
    async SwitchDrInstanceToMaster(req, cb) {
        return this.request("SwitchDrInstanceToMaster", req, cb);
    }
    /**
     * 本接口（DeleteAccounts）用于删除云数据库的账户。
     */
    async DeleteAccounts(req, cb) {
        return this.request("DeleteAccounts", req, cb);
    }
    /**
     * 本接口（DescribeDBInstanceInfo）用于查询实例基本信息（实例 ID，实例名称，是否开通加密）。
     */
    async DescribeDBInstanceInfo(req, cb) {
        return this.request("DescribeDBInstanceInfo", req, cb);
    }
    /**
     * 本接口（DescribeClusterInfo）用于查询集群版实例信息。
     */
    async DescribeClusterInfo(req, cb) {
        return this.request("DescribeClusterInfo", req, cb);
    }
    /**
     * 本接口(DescribeRollbackRangeTime)用于查询云数据库实例可回档的时间范围。
     */
    async DescribeRollbackRangeTime(req, cb) {
        return this.request("DescribeRollbackRangeTime", req, cb);
    }
    /**
     * 请求关闭数据库代理地址
     */
    async CloseCdbProxyAddress(req, cb) {
        return this.request("CloseCdbProxyAddress", req, cb);
    }
    /**
     * 本接口(DeleteBackup)用于删除数据库备份。本接口只支持删除手动发起的备份。
     */
    async DeleteBackup(req, cb) {
        return this.request("DeleteBackup", req, cb);
    }
    /**
     * 本接口(DescribeRoMinScale)用于获取只读实例购买、升级时的最小规格。
     */
    async DescribeRoMinScale(req, cb) {
        return this.request("DescribeRoMinScale", req, cb);
    }
    /**
     * 修改代理地址描述信息
     */
    async ModifyCdbProxyAddressDesc(req, cb) {
        return this.request("ModifyCdbProxyAddressDesc", req, cb);
    }
    /**
     * 本接口(ModifyAccountHost)用于修改云数据库账户的主机。
     */
    async ModifyAccountHost(req, cb) {
        return this.request("ModifyAccountHost", req, cb);
    }
    /**
     * 本接口（StartReplication）用于开启 RO 复制，从主实例同步数据。
     */
    async StartReplication(req, cb) {
        return this.request("StartReplication", req, cb);
    }
    /**
     * 本接口（AdjustCdbProxyAddress）用于调整数据库代理地址配置。
     */
    async AdjustCdbProxyAddress(req, cb) {
        return this.request("AdjustCdbProxyAddress", req, cb);
    }
    /**
     * 本接口（DescribeAuditInstanceList）用于获取审计实例列表。
     */
    async DescribeAuditInstanceList(req, cb) {
        return this.request("DescribeAuditInstanceList", req, cb);
    }
    /**
     * 本接口(DescribeAuditConfig)用于查询云数据库审计策略的服务配置，包括审计日志保存时长等。
     */
    async DescribeAuditConfig(req, cb) {
        return this.request("DescribeAuditConfig", req, cb);
    }
    /**
     * 手动刷新轮转密码
     */
    async ResetPassword(req, cb) {
        return this.request("ResetPassword", req, cb);
    }
    /**
     * 本接口(ModifyInstanceParam)用于修改云数据库实例的参数。
     */
    async ModifyInstanceParam(req, cb) {
        return this.request("ModifyInstanceParam", req, cb);
    }
    /**
     * 本接口（CloseCDBProxy）用于关闭数据库代理。
     */
    async CloseCDBProxy(req, cb) {
        return this.request("CloseCDBProxy", req, cb);
    }
    /**
     * 修改置放群组的名称或者描述
     */
    async ModifyNameOrDescByDpId(req, cb) {
        return this.request("ModifyNameOrDescByDpId", req, cb);
    }
    /**
     * 本接口(ModifyAccountMaxUserConnections)用于修改云数据库账户最大可用连接数。
     */
    async ModifyAccountMaxUserConnections(req, cb) {
        return this.request("ModifyAccountMaxUserConnections", req, cb);
    }
    /**
     * 本接口(DescribeAsyncRequestInfo)用于查询云数据库实例异步任务的执行结果。
     */
    async DescribeAsyncRequestInfo(req, cb) {
        return this.request("DescribeAsyncRequestInfo", req, cb);
    }
    /**
     * 本接口（DescribeAuditLogs）用于查询数据库审计日志。
     */
    async DescribeAuditLogs(req, cb) {
        return this.request("DescribeAuditLogs", req, cb);
    }
    /**
     * 本接口（DescribeDBInstanceRebootTime）用于查询云数据库实例重启预计所需的时间。
     */
    async DescribeDBInstanceRebootTime(req, cb) {
        return this.request("DescribeDBInstanceRebootTime", req, cb);
    }
    /**
     * 本接口（DescribeDBInstances）用于查询云数据库实例列表，支持通过项目 ID、实例 ID、访问地址、实例状态等过滤条件来筛选实例。支持查询主实例、灾备实例和只读实例信息列表。
     */
    async DescribeDBInstances(req, cb) {
        return this.request("DescribeDBInstances", req, cb);
    }
    /**
     * 本接口（ModifyRoGroupInfo）用于更新云数据库只读组的信息。包括设置实例延迟超限剔除策略，设置只读实例读权重，设置复制延迟时间等。
     */
    async ModifyRoGroupInfo(req, cb) {
        return this.request("ModifyRoGroupInfo", req, cb);
    }
    /**
     * 不再支持审计规则创建

本接口(CreateAuditRule)用于创建用户在当前地域的审计规则。
     */
    async CreateAuditRule(req, cb) {
        return this.request("CreateAuditRule", req, cb);
    }
    /**
     * 本接口(DescribeDBInstanceCharset)用于查询云数据库实例的字符集，获取字符集的名称。
     */
    async DescribeDBInstanceCharset(req, cb) {
        return this.request("DescribeDBInstanceCharset", req, cb);
    }
    /**
     * 本接口(AssociateSecurityGroups)用于安全组批量绑定实例。
     */
    async AssociateSecurityGroups(req, cb) {
        return this.request("AssociateSecurityGroups", req, cb);
    }
    /**
     * 本接口（DescribeDBPrice）用于查询购买或续费云数据库实例的价格，支持查询按量计费或者包年包月的价格。可传入实例类型、购买时长、购买数量、内存大小、硬盘大小和可用区信息等来查询实例价格。可传入实例名称来查询实例续费价格。

注意：对某个地域进行询价，请使用对应地域的接入点，接入点信息请参照 <a href="https://cloud.tencent.com/document/api/236/15832">服务地址</a> 文档。例如：对广州地域进行询价，请把请求发到：cdb.ap-guangzhou.tencentcloudapi.com。同理对上海地域询价，把请求发到：cdb.ap-shanghai.tencentcloudapi.com。
     */
    async DescribeDBPrice(req, cb) {
        return this.request("DescribeDBPrice", req, cb);
    }
    /**
     * 本接口(ModifyAccountPrivileges)用于修改云数据库的账户的权限信息。

注意，修改账号权限时，需要传入该账号下的全量权限信息。用户可以先通过 [查询云数据库账户的权限信息
](https://cloud.tencent.com/document/api/236/17500) 查询该账号下的全量权限信息，然后进行权限修改。
     */
    async ModifyAccountPrivileges(req, cb) {
        return this.request("ModifyAccountPrivileges", req, cb);
    }
    /**
     * 本接口(DescribeDBImportRecords)用于查询云数据库导入任务操作日志。
     */
    async DescribeDBImportRecords(req, cb) {
        return this.request("DescribeDBImportRecords", req, cb);
    }
    /**
     * 查询 SSL 开通情况。如果已经开通 SSL ，会同步返回证书下载链接。
     */
    async DescribeSSLStatus(req, cb) {
        return this.request("DescribeSSLStatus", req, cb);
    }
    /**
     * 本接口(DescribeDBSwitchRecords)用于查询云数据库实例切换记录。
     */
    async DescribeDBSwitchRecords(req, cb) {
        return this.request("DescribeDBSwitchRecords", req, cb);
    }
    /**
     * 本接口（CreateRotationPassword）用于开启密码轮转。
     */
    async CreateRotationPassword(req, cb) {
        return this.request("CreateRotationPassword", req, cb);
    }
    /**
     * 本接口（CreateDBImportJob）用于创建云数据库数据导入任务。
注意，用户进行数据导入任务的文件，必须提前上传到腾讯云。用户须在控制台进行文件导入。
     */
    async CreateDBImportJob(req, cb) {
        return this.request("CreateDBImportJob", req, cb);
    }
    /**
     * 本接口（DescribeAccounts）用于查询云数据库的所有账户信息。
     */
    async DescribeAccounts(req, cb) {
        return this.request("DescribeAccounts", req, cb);
    }
    /**
     * DescribeCpuExpandStrategy

通过该 API 可以查询实例的 CPU 弹性扩容策略
     */
    async DescribeCpuExpandStrategy(req, cb) {
        return this.request("DescribeCpuExpandStrategy", req, cb);
    }
    /**
     * 重新负载均衡数据库代理
     */
    async ReloadBalanceProxyNode(req, cb) {
        return this.request("ReloadBalanceProxyNode", req, cb);
    }
    /**
     * 本接口(ModifyBackupEncryptionStatus)用于设置实例备份文件是否加密。
     */
    async ModifyBackupEncryptionStatus(req, cb) {
        return this.request("ModifyBackupEncryptionStatus", req, cb);
    }
    /**
     * 该接口用户查询当前地域用户设置的默认备份下载来源限制。
     */
    async DescribeBackupDownloadRestriction(req, cb) {
        return this.request("DescribeBackupDownloadRestriction", req, cb);
    }
    /**
     * 重置实例ROOT账号，初始化账号权限
     */
    async ResetRootAccount(req, cb) {
        return this.request("ResetRootAccount", req, cb);
    }
    /**
     * 修改审计规则模板
     */
    async ModifyAuditRuleTemplates(req, cb) {
        return this.request("ModifyAuditRuleTemplates", req, cb);
    }
    /**
     * 该接口（SubmitInstanceUpgradeCheckJob）提交实例版本升级校验任务。
     */
    async SubmitInstanceUpgradeCheckJob(req, cb) {
        return this.request("SubmitInstanceUpgradeCheckJob", req, cb);
    }
    /**
     * 本接口（DeleteRotationPassword）用于关闭实例账户密码轮转。
     */
    async DeleteRotationPassword(req, cb) {
        return this.request("DeleteRotationPassword", req, cb);
    }
    /**
     * 本接口(ModifyAccountPassword)用于修改云数据库账户的密码。
     */
    async ModifyAccountPassword(req, cb) {
        return this.request("ModifyAccountPassword", req, cb);
    }
    /**
     * 本接口(DescribeUploadedFiles)用于查询用户导入的SQL文件列表，全地域公共参数Region均为ap-shanghai。
     */
    async DescribeUploadedFiles(req, cb) {
        return this.request("DescribeUploadedFiles", req, cb);
    }
    /**
     * 本接口(ModifyAccountDescription)用于修改云数据库账户的备注信息。
     */
    async ModifyAccountDescription(req, cb) {
        return this.request("ModifyAccountDescription", req, cb);
    }
    /**
     * 本接口（DescribeSlowLogData）用于使用条件检索实例的慢日志。只允许查看一个月之内的慢日志。
使用时需要注意：可能存在单条慢日志太大，导致整个http请求的回包太大，进而引发接口超时。一旦发生超时，建议您缩小查询时的Limit参数值，从而降低包的大小，让接口能够及时返回内容。
     */
    async DescribeSlowLogData(req, cb) {
        return this.request("DescribeSlowLogData", req, cb);
    }
    /**
     * CDB实例开通审计服务
     */
    async OpenAuditService(req, cb) {
        return this.request("OpenAuditService", req, cb);
    }
    /**
     * 本接口(DeleteAuditLogFile)用于删除云数据库实例的审计日志文件。
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
     * 本接口(ModifyBackupConfig)用于修改数据库备份配置信息。
     */
    async ModifyBackupConfig(req, cb) {
        return this.request("ModifyBackupConfig", req, cb);
    }
    /**
     * 不再支持审计规则创建

本接口(DescribeAuditRules)用于查询用户在当前地域的审计规则。
     */
    async DescribeAuditRules(req, cb) {
        return this.request("DescribeAuditRules", req, cb);
    }
    /**
     * 本接口(DescribeRemoteBackupConfig)用于查询数据库异地备份配置信息。
     */
    async DescribeRemoteBackupConfig(req, cb) {
        return this.request("DescribeRemoteBackupConfig", req, cb);
    }
    /**
     * 修改数据库代理地址VPC信息
     */
    async ModifyCdbProxyAddressVipAndVPort(req, cb) {
        return this.request("ModifyCdbProxyAddressVipAndVPort", req, cb);
    }
    /**
     * 本接口(ModifyDBInstanceProject)用于修改云数据库实例的所属项目。
     */
    async ModifyDBInstanceProject(req, cb) {
        return this.request("ModifyDBInstanceProject", req, cb);
    }
    /**
     * 本接口(DescribeDBInstanceLogToCLS)用于查询实例慢日志、错误日志投递CLS的配置，通过AppId、Region以及实例ID过滤出当前实例日志投递CLS的配置。
     */
    async DescribeDBInstanceLogToCLS(req, cb) {
        return this.request("DescribeDBInstanceLogToCLS", req, cb);
    }
    /**
     * 本接口（DescribeAuditRuleTemplateModifyHistory）用于查询规则模板变更记录。
     */
    async DescribeAuditRuleTemplateModifyHistory(req, cb) {
        return this.request("DescribeAuditRuleTemplateModifyHistory", req, cb);
    }
    /**
     * 本接口（CreateCdbProxy）用于主实例创建数据库代理。
     */
    async CreateCdbProxy(req, cb) {
        return this.request("CreateCdbProxy", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceReadOnlyStatus）用户设置MySQL云数据库实例为只读
     */
    async ModifyDBInstanceReadOnlyStatus(req, cb) {
        return this.request("ModifyDBInstanceReadOnlyStatus", req, cb);
    }
    /**
     * 本接口（ModifyAutoRenewFlag）用于修改云数据库实例的自动续费标记。仅支持包年包月的实例设置自动续费标记。
     */
    async ModifyAutoRenewFlag(req, cb) {
        return this.request("ModifyAutoRenewFlag", req, cb);
    }
    /**
     * 数据库代理配置变更或则升级版本后手动发起立即切换
     */
    async SwitchCDBProxy(req, cb) {
        return this.request("SwitchCDBProxy", req, cb);
    }
    /**
     * 本接口(ModifyAuditService)用于修改云数据库审计日志保存时长、审计规则等服务配置
     */
    async ModifyAuditService(req, cb) {
        return this.request("ModifyAuditService", req, cb);
    }
    /**
     * 配置数据库代理参数
     */
    async ModifyCdbProxyParam(req, cb) {
        return this.request("ModifyCdbProxyParam", req, cb);
    }
    /**
     * 该接口（StartBatchRollback）用于批量回档云数据库实例的库表。
     */
    async StartBatchRollback(req, cb) {
        return this.request("StartBatchRollback", req, cb);
    }
    /**
     * 本接口（DescribeDeviceMonitorInfo）用于查询云数据库物理机当天的监控信息，暂只支持内存488G、硬盘6T的实例查询。
     */
    async DescribeDeviceMonitorInfo(req, cb) {
        return this.request("DescribeDeviceMonitorInfo", req, cb);
    }
    /**
     * 本接口(OpenWanService)用于开通实例外网访问。

注意，实例开通外网访问之前，需要先将实例进行 [实例初始化](https://cloud.tencent.com/document/api/236/15873) 操作。
     */
    async OpenWanService(req, cb) {
        return this.request("OpenWanService", req, cb);
    }
    /**
     * 不再支持审计规则创建

本接口(ModifyAuditRule)用于修改用户的审计规则。
     */
    async ModifyAuditRule(req, cb) {
        return this.request("ModifyAuditRule", req, cb);
    }
    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
     */
    async ModifyDBInstanceSecurityGroups(req, cb) {
        return this.request("ModifyDBInstanceSecurityGroups", req, cb);
    }
    /**
     * 不再支持审计规则创建

本接口(DeleteAuditRule)用于删除用户的审计规则。
     */
    async DeleteAuditRule(req, cb) {
        return this.request("DeleteAuditRule", req, cb);
    }
    /**
     * 通过该API，可以开启CPU弹性扩容，包括一次性的手动扩容以及自动弹性扩容。
     */
    async StartCpuExpand(req, cb) {
        return this.request("StartCpuExpand", req, cb);
    }
    /**
     * 本接口(DescribeSupportedPrivileges)用于查询云数据库的支持的权限信息，包括全局权限，数据库权限，表权限以及列权限。
     */
    async DescribeSupportedPrivileges(req, cb) {
        return this.request("DescribeSupportedPrivileges", req, cb);
    }
    /**
     * 该接口（DeleteParamTemplate）用于删除参数模板，全地域公共参数 Region 均为 ap-guangzhou。
     */
    async DeleteParamTemplate(req, cb) {
        return this.request("DeleteParamTemplate", req, cb);
    }
    /**
     * 升级数据库代理版本
     */
    async UpgradeCDBProxyVersion(req, cb) {
        return this.request("UpgradeCDBProxyVersion", req, cb);
    }
    /**
     * 本接口(DescribeBinlogs)用于查询云数据库实例的 binlog 文件列表。
     */
    async DescribeBinlogs(req, cb) {
        return this.request("DescribeBinlogs", req, cb);
    }
    /**
     * 本接口(DescribeDBSecurityGroups)用于查询实例的安全组详情。
     */
    async DescribeDBSecurityGroups(req, cb) {
        return this.request("DescribeDBSecurityGroups", req, cb);
    }
    /**
     * 本接口（DescribeRoGroups）用于查询云数据库实例的所有的 RO 组的信息。
     */
    async DescribeRoGroups(req, cb) {
        return this.request("DescribeRoGroups", req, cb);
    }
    /**
     * 本接口（DescribeCloneList）用于查询用户实例的克隆任务列表。
     */
    async DescribeCloneList(req, cb) {
        return this.request("DescribeCloneList", req, cb);
    }
    /**
     * 本接口（DescribeInstanceAlarmEvents）用于查询实例发生的事件信息。
     */
    async DescribeInstanceAlarmEvents(req, cb) {
        return this.request("DescribeInstanceAlarmEvents", req, cb);
    }
    /**
     * 本接口(UpgradeDBInstance)用于升级或降级云数据库实例的配置，实例类型支持主实例、灾备实例和只读实例。如果进行迁移业务，请一定填写实例规格（CPU、内存），不然系统会默认以最小允许规格传参。
     */
    async UpgradeDBInstance(req, cb) {
        return this.request("UpgradeDBInstance", req, cb);
    }
    /**
     * 关闭SSL连接功能。
     */
    async CloseSSL(req, cb) {
        return this.request("CloseSSL", req, cb);
    }
    /**
     * 本接口（CreateDeployGroup）用于创建放置实例的置放群组。
     */
    async CreateDeployGroup(req, cb) {
        return this.request("CreateDeployGroup", req, cb);
    }
    /**
     * 本接口(ModifyRemoteBackupConfig)用于修改数据库异地备份配置信息。
     */
    async ModifyRemoteBackupConfig(req, cb) {
        return this.request("ModifyRemoteBackupConfig", req, cb);
    }
    /**
     * 本接口(DeleteTimeWindow)用于删除云数据库实例的维护时间窗口。删除实例维护时间窗口之后，默认的维护时间窗为 03:00-04:00，即当选择在维护时间窗口内切换访问新实例时，默认会在 03:00-04:00 点进行切换访问新实例。
     */
    async DeleteTimeWindow(req, cb) {
        return this.request("DeleteTimeWindow", req, cb);
    }
}
exports.Client = Client;
