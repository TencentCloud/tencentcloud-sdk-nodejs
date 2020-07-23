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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DescribeReadOnlyGroupDetailsRequest = models.DescribeReadOnlyGroupDetailsRequest;
const CreateDBInstancesRequest = models.CreateDBInstancesRequest;
const InstanceRenewInfo = models.InstanceRenewInfo;
const DealInfo = models.DealInfo;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const DescribeMaintenanceSpanResponse = models.DescribeMaintenanceSpanResponse;
const CreatePublishSubscribeRequest = models.CreatePublishSubscribeRequest;
const CreateMigrationResponse = models.CreateMigrationResponse;
const DatabaseTuple = models.DatabaseTuple;
const RegionInfo = models.RegionInfo;
const DeletePublishSubscribeRequest = models.DeletePublishSubscribeRequest;
const DatabaseTupleStatus = models.DatabaseTupleStatus;
const ModifyReadOnlyGroupDetailsResponse = models.ModifyReadOnlyGroupDetailsResponse;
const ModifyBackupStrategyResponse = models.ModifyBackupStrategyResponse;
const MigrateDetail = models.MigrateDetail;
const RunMigrationResponse = models.RunMigrationResponse;
const DescribeProductConfigRequest = models.DescribeProductConfigRequest;
const ModifyPublishSubscribeNameResponse = models.ModifyPublishSubscribeNameResponse;
const CreateAccountRequest = models.CreateAccountRequest;
const RollbackInstanceResponse = models.RollbackInstanceResponse;
const DBRemark = models.DBRemark;
const MigrateDB = models.MigrateDB;
const RestartDBInstanceRequest = models.RestartDBInstanceRequest;
const DescribeReadOnlyGroupListResponse = models.DescribeReadOnlyGroupListResponse;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DescribeBackupsRequest = models.DescribeBackupsRequest;
const ModifyDBInstanceProjectResponse = models.ModifyDBInstanceProjectResponse;
const DescribeRollbackTimeResponse = models.DescribeRollbackTimeResponse;
const RestoreInstanceRequest = models.RestoreInstanceRequest;
const DescribeReadOnlyGroupByReadOnlyInstanceResponse = models.DescribeReadOnlyGroupByReadOnlyInstanceResponse;
const RunMigrationRequest = models.RunMigrationRequest;
const RestoreInstanceResponse = models.RestoreInstanceResponse;
const ModifyMaintenanceSpanResponse = models.ModifyMaintenanceSpanResponse;
const ZoneInfo = models.ZoneInfo;
const InquiryPriceCreateDBInstancesRequest = models.InquiryPriceCreateDBInstancesRequest;
const ModifyMaintenanceSpanRequest = models.ModifyMaintenanceSpanRequest;
const DescribeMigrationDetailRequest = models.DescribeMigrationDetailRequest;
const MigrateTask = models.MigrateTask;
const SpecInfo = models.SpecInfo;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const InquiryPriceCreateDBInstancesResponse = models.InquiryPriceCreateDBInstancesResponse;
const ModifyAccountPrivilegeResponse = models.ModifyAccountPrivilegeResponse;
const RemoveBackupsRequest = models.RemoveBackupsRequest;
const DBCreateInfo = models.DBCreateInfo;
const AccountPrivilege = models.AccountPrivilege;
const ModifyMigrationResponse = models.ModifyMigrationResponse;
const AccountCreateInfo = models.AccountCreateInfo;
const DescribeDBsResponse = models.DescribeDBsResponse;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const SlowlogInfo = models.SlowlogInfo;
const ModifyAccountRemarkResponse = models.ModifyAccountRemarkResponse;
const DescribeMigrationsResponse = models.DescribeMigrationsResponse;
const ModifyBackupStrategyRequest = models.ModifyBackupStrategyRequest;
const RenewDBInstanceRequest = models.RenewDBInstanceRequest;
const DescribeZonesRequest = models.DescribeZonesRequest;
const DeleteDBRequest = models.DeleteDBRequest;
const ModifyDBInstanceRenewFlagResponse = models.ModifyDBInstanceRenewFlagResponse;
const CompleteExpansionResponse = models.CompleteExpansionResponse;
const MigrateSource = models.MigrateSource;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const ReadOnlyGroup = models.ReadOnlyGroup;
const ModifyAccountPrivilegeRequest = models.ModifyAccountPrivilegeRequest;
const DescribeMigrationsRequest = models.DescribeMigrationsRequest;
const InquiryPriceRenewDBInstanceResponse = models.InquiryPriceRenewDBInstanceResponse;
const DescribeFlowStatusRequest = models.DescribeFlowStatusRequest;
const DescribeDBsRequest = models.DescribeDBsRequest;
const CompleteExpansionRequest = models.CompleteExpansionRequest;
const DescribeBackupsResponse = models.DescribeBackupsResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeFlowStatusResponse = models.DescribeFlowStatusResponse;
const DeleteMigrationRequest = models.DeleteMigrationRequest;
const DBPrivilegeModifyInfo = models.DBPrivilegeModifyInfo;
const RemoveBackupsResponse = models.RemoveBackupsResponse;
const TerminateDBInstanceRequest = models.TerminateDBInstanceRequest;
const CreateDBRequest = models.CreateDBRequest;
const ReadOnlyInstance = models.ReadOnlyInstance;
const InquiryPriceUpgradeDBInstanceRequest = models.InquiryPriceUpgradeDBInstanceRequest;
const ModifyDBRemarkRequest = models.ModifyDBRemarkRequest;
const ReadOnlyInstanceWeightPair = models.ReadOnlyInstanceWeightPair;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const AccountPassword = models.AccountPassword;
const DeleteMigrationResponse = models.DeleteMigrationResponse;
const InstanceDBDetail = models.InstanceDBDetail;
const InquiryPriceRenewDBInstanceRequest = models.InquiryPriceRenewDBInstanceRequest;
const TerminateDBInstanceResponse = models.TerminateDBInstanceResponse;
const DbRollbackTimeInfo = models.DbRollbackTimeInfo;
const DescribeReadOnlyGroupListRequest = models.DescribeReadOnlyGroupListRequest;
const CreateBackupResponse = models.CreateBackupResponse;
const DBInstance = models.DBInstance;
const DescribeProductConfigResponse = models.DescribeProductConfigResponse;
const CreateMigrationRequest = models.CreateMigrationRequest;
const AccountDetail = models.AccountDetail;
const ModifyDBNameResponse = models.ModifyDBNameResponse;
const DescribePublishSubscribeResponse = models.DescribePublishSubscribeResponse;
const ModifyDBNameRequest = models.ModifyDBNameRequest;
const ModifyDBInstanceRenewFlagRequest = models.ModifyDBInstanceRenewFlagRequest;
const Backup = models.Backup;
const AccountRemark = models.AccountRemark;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const AccountPrivilegeModifyInfo = models.AccountPrivilegeModifyInfo;
const MigrateTarget = models.MigrateTarget;
const DescribeZonesResponse = models.DescribeZonesResponse;
const RenewDBInstanceResponse = models.RenewDBInstanceResponse;
const DBPrivilege = models.DBPrivilege;
const DescribeOrdersRequest = models.DescribeOrdersRequest;
const DescribeReadOnlyGroupDetailsResponse = models.DescribeReadOnlyGroupDetailsResponse;
const DeleteAccountRequest = models.DeleteAccountRequest;
const DescribeReadOnlyGroupByReadOnlyInstanceRequest = models.DescribeReadOnlyGroupByReadOnlyInstanceRequest;
const DescribeMaintenanceSpanRequest = models.DescribeMaintenanceSpanRequest;
const PublishSubscribe = models.PublishSubscribe;
const CreateBackupRequest = models.CreateBackupRequest;
const DescribePublishSubscribeRequest = models.DescribePublishSubscribeRequest;
const ModifyAccountRemarkRequest = models.ModifyAccountRemarkRequest;
const ModifyPublishSubscribeNameRequest = models.ModifyPublishSubscribeNameRequest;
const DeletePublishSubscribeResponse = models.DeletePublishSubscribeResponse;
const InquiryPriceUpgradeDBInstanceResponse = models.InquiryPriceUpgradeDBInstanceResponse;
const DescribeMigrationDetailResponse = models.DescribeMigrationDetailResponse;
const ModifyMigrationRequest = models.ModifyMigrationRequest;
const CreateAccountResponse = models.CreateAccountResponse;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const DeleteDBResponse = models.DeleteDBResponse;
const CreateDBResponse = models.CreateDBResponse;
const RestartDBInstanceResponse = models.RestartDBInstanceResponse;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const DescribeSlowlogsResponse = models.DescribeSlowlogsResponse;
const DBDetail = models.DBDetail;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const ModifyReadOnlyGroupDetailsRequest = models.ModifyReadOnlyGroupDetailsRequest;
const DescribeSlowlogsRequest = models.DescribeSlowlogsRequest;
const ModifyDBInstanceProjectRequest = models.ModifyDBInstanceProjectRequest;
const CreatePublishSubscribeResponse = models.CreatePublishSubscribeResponse;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const RollbackInstanceRequest = models.RollbackInstanceRequest;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;
const DescribeRollbackTimeRequest = models.DescribeRollbackTimeRequest;
const ModifyDBRemarkResponse = models.ModifyDBRemarkResponse;
const CreateDBInstancesResponse = models.CreateDBInstancesResponse;
const DeleteAccountResponse = models.DeleteAccountResponse;


/**
 * sqlserver client
 * @class
 */
class SqlserverClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("sqlserver.tencentcloudapi.com", "2018-03-28", credential, region, profile);
    }
    
    /**
     * 本接口（DescribeReadOnlyGroupList）用于查询只读组列表。
     * @param {DescribeReadOnlyGroupListRequest} req
     * @param {function(string, DescribeReadOnlyGroupListResponse):void} cb
     * @public
     */
    DescribeReadOnlyGroupList(req, cb) {
        let resp = new DescribeReadOnlyGroupListResponse();
        this.request("DescribeReadOnlyGroupList", req, resp, cb);
    }

    /**
     * 本接口（ModifyMigration）可以修改已有的迁移任务信息
     * @param {ModifyMigrationRequest} req
     * @param {function(string, ModifyMigrationResponse):void} cb
     * @public
     */
    ModifyMigration(req, cb) {
        let resp = new ModifyMigrationResponse();
        this.request("ModifyMigration", req, resp, cb);
    }

    /**
     * 本接口（DescribeOrders）用于查询订单信息
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req, cb) {
        let resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
    }

    /**
     * 本接口（ModifyBackupStrategy）用于修改备份策略
     * @param {ModifyBackupStrategyRequest} req
     * @param {function(string, ModifyBackupStrategyResponse):void} cb
     * @public
     */
    ModifyBackupStrategy(req, cb) {
        let resp = new ModifyBackupStrategyResponse();
        this.request("ModifyBackupStrategy", req, resp, cb);
    }

    /**
     * 本接口(DescribeBackups)用于查询备份列表。
     * @param {DescribeBackupsRequest} req
     * @param {function(string, DescribeBackupsResponse):void} cb
     * @public
     */
    DescribeBackups(req, cb) {
        let resp = new DescribeBackupsResponse();
        this.request("DescribeBackups", req, resp, cb);
    }

    /**
     * 本接口（DeletePublishSubscribe）用于删除两个数据库间的发布订阅关系。
     * @param {DeletePublishSubscribeRequest} req
     * @param {function(string, DeletePublishSubscribeResponse):void} cb
     * @public
     */
    DeletePublishSubscribe(req, cb) {
        let resp = new DeletePublishSubscribeResponse();
        this.request("DeletePublishSubscribe", req, resp, cb);
    }

    /**
     * 本接口（ModifyAccountPrivilege）用于修改实例账户权限。
     * @param {ModifyAccountPrivilegeRequest} req
     * @param {function(string, ModifyAccountPrivilegeResponse):void} cb
     * @public
     */
    ModifyAccountPrivilege(req, cb) {
        let resp = new ModifyAccountPrivilegeResponse();
        this.request("ModifyAccountPrivilege", req, resp, cb);
    }

    /**
     * 本接口（ResetAccountPassword）用于重置实例的账户密码。
     * @param {ResetAccountPasswordRequest} req
     * @param {function(string, ResetAccountPasswordResponse):void} cb
     * @public
     */
    ResetAccountPassword(req, cb) {
        let resp = new ResetAccountPasswordResponse();
        this.request("ResetAccountPassword", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBName）用于更新数据库名。
     * @param {ModifyDBNameRequest} req
     * @param {function(string, ModifyDBNameResponse):void} cb
     * @public
     */
    ModifyDBName(req, cb) {
        let resp = new ModifyDBNameResponse();
        this.request("ModifyDBName", req, resp, cb);
    }

    /**
     * 本接口（InquiryPriceCreateDBInstances）用于查询申请实例价格。
     * @param {InquiryPriceCreateDBInstancesRequest} req
     * @param {function(string, InquiryPriceCreateDBInstancesResponse):void} cb
     * @public
     */
    InquiryPriceCreateDBInstances(req, cb) {
        let resp = new InquiryPriceCreateDBInstancesResponse();
        this.request("InquiryPriceCreateDBInstances", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBInstanceProject）用于修改数据库实例所属项目。
     * @param {ModifyDBInstanceProjectRequest} req
     * @param {function(string, ModifyDBInstanceProjectResponse):void} cb
     * @public
     */
    ModifyDBInstanceProject(req, cb) {
        let resp = new ModifyDBInstanceProjectResponse();
        this.request("ModifyDBInstanceProject", req, resp, cb);
    }

    /**
     * 本接口（DescribeSlowlogs）用于获取慢查询日志文件信息
     * @param {DescribeSlowlogsRequest} req
     * @param {function(string, DescribeSlowlogsResponse):void} cb
     * @public
     */
    DescribeSlowlogs(req, cb) {
        let resp = new DescribeSlowlogsResponse();
        this.request("DescribeSlowlogs", req, resp, cb);
    }

    /**
     * 本接口（DeleteAccount）用于删除实例账号。
     * @param {DeleteAccountRequest} req
     * @param {function(string, DeleteAccountResponse):void} cb
     * @public
     */
    DeleteAccount(req, cb) {
        let resp = new DeleteAccountResponse();
        this.request("DeleteAccount", req, resp, cb);
    }

    /**
     * 本接口（ModifyPublishSubscribeName）修改发布订阅的名称。
     * @param {ModifyPublishSubscribeNameRequest} req
     * @param {function(string, ModifyPublishSubscribeNameResponse):void} cb
     * @public
     */
    ModifyPublishSubscribeName(req, cb) {
        let resp = new ModifyPublishSubscribeNameResponse();
        this.request("ModifyPublishSubscribeName", req, resp, cb);
    }

    /**
     * 本接口(DescribeFlowStatus)用于查询流程状态。
     * @param {DescribeFlowStatusRequest} req
     * @param {function(string, DescribeFlowStatusResponse):void} cb
     * @public
     */
    DescribeFlowStatus(req, cb) {
        let resp = new DescribeFlowStatusResponse();
        this.request("DescribeFlowStatus", req, resp, cb);
    }

    /**
     * 本接口（ModifyAccountRemark）用于修改账户备注。
     * @param {ModifyAccountRemarkRequest} req
     * @param {function(string, ModifyAccountRemarkResponse):void} cb
     * @public
     */
    ModifyAccountRemark(req, cb) {
        let resp = new ModifyAccountRemarkResponse();
        this.request("ModifyAccountRemark", req, resp, cb);
    }

    /**
     * 本接口（DescribeMigrations）根据输入的限定条件，查询符合条件的迁移任务列表
     * @param {DescribeMigrationsRequest} req
     * @param {function(string, DescribeMigrationsResponse):void} cb
     * @public
     */
    DescribeMigrations(req, cb) {
        let resp = new DescribeMigrationsResponse();
        this.request("DescribeMigrations", req, resp, cb);
    }

    /**
     * 本接口（RestartDBInstance）用于重启数据库实例。
     * @param {RestartDBInstanceRequest} req
     * @param {function(string, RestartDBInstanceResponse):void} cb
     * @public
     */
    RestartDBInstance(req, cb) {
        let resp = new RestartDBInstanceResponse();
        this.request("RestartDBInstance", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBInstanceName）用于修改实例名字。
     * @param {ModifyDBInstanceNameRequest} req
     * @param {function(string, ModifyDBInstanceNameResponse):void} cb
     * @public
     */
    ModifyDBInstanceName(req, cb) {
        let resp = new ModifyDBInstanceNameResponse();
        this.request("ModifyDBInstanceName", req, resp, cb);
    }

    /**
     * 本接口(TerminateDBInstance)用于主动销毁按量计费实例。
     * @param {TerminateDBInstanceRequest} req
     * @param {function(string, TerminateDBInstanceResponse):void} cb
     * @public
     */
    TerminateDBInstance(req, cb) {
        let resp = new TerminateDBInstanceResponse();
        this.request("TerminateDBInstance", req, resp, cb);
    }

    /**
     * 本接口(CreateBackup)用于创建备份。
     * @param {CreateBackupRequest} req
     * @param {function(string, CreateBackupResponse):void} cb
     * @public
     */
    CreateBackup(req, cb) {
        let resp = new CreateBackupResponse();
        this.request("CreateBackup", req, resp, cb);
    }

    /**
     * 本接口（CreateDBInstances）用于创建实例。
     * @param {CreateDBInstancesRequest} req
     * @param {function(string, CreateDBInstancesResponse):void} cb
     * @public
     */
    CreateDBInstances(req, cb) {
        let resp = new CreateDBInstancesResponse();
        this.request("CreateDBInstances", req, resp, cb);
    }

    /**
     * 本接口（RollbackInstance）用于回档实例
     * @param {RollbackInstanceRequest} req
     * @param {function(string, RollbackInstanceResponse):void} cb
     * @public
     */
    RollbackInstance(req, cb) {
        let resp = new RollbackInstanceResponse();
        this.request("RollbackInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeDBs）用于查询数据库列表。
     * @param {DescribeDBsRequest} req
     * @param {function(string, DescribeDBsResponse):void} cb
     * @public
     */
    DescribeDBs(req, cb) {
        let resp = new DescribeDBsResponse();
        this.request("DescribeDBs", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBInstances)用于查询实例列表。
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        let resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }

    /**
     * 本接口 (DescribeZones) 用于查询当前可售卖的可用区信息。
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBRemark）用于修改数据库备注。
     * @param {ModifyDBRemarkRequest} req
     * @param {function(string, ModifyDBRemarkResponse):void} cb
     * @public
     */
    ModifyDBRemark(req, cb) {
        let resp = new ModifyDBRemarkResponse();
        this.request("ModifyDBRemark", req, resp, cb);
    }

    /**
     * 本接口（RenewDBInstance）用于续费实例。
     * @param {RenewDBInstanceRequest} req
     * @param {function(string, RenewDBInstanceResponse):void} cb
     * @public
     */
    RenewDBInstance(req, cb) {
        let resp = new RenewDBInstanceResponse();
        this.request("RenewDBInstance", req, resp, cb);
    }

    /**
     * 本接口（CreateAccount）用于创建实例账号
     * @param {CreateAccountRequest} req
     * @param {function(string, CreateAccountResponse):void} cb
     * @public
     */
    CreateAccount(req, cb) {
        let resp = new CreateAccountResponse();
        this.request("CreateAccount", req, resp, cb);
    }

    /**
     * 本接口（InquiryPriceUpgradeDBInstance）用于查询升级实例的价格。
     * @param {InquiryPriceUpgradeDBInstanceRequest} req
     * @param {function(string, InquiryPriceUpgradeDBInstanceResponse):void} cb
     * @public
     */
    InquiryPriceUpgradeDBInstance(req, cb) {
        let resp = new InquiryPriceUpgradeDBInstanceResponse();
        this.request("InquiryPriceUpgradeDBInstance", req, resp, cb);
    }

    /**
     * 本接口（CreateMigration）作用是创建一个迁移任务
     * @param {CreateMigrationRequest} req
     * @param {function(string, CreateMigrationResponse):void} cb
     * @public
     */
    CreateMigration(req, cb) {
        let resp = new CreateMigrationResponse();
        this.request("CreateMigration", req, resp, cb);
    }

    /**
     * 本接口 (DescribeRegions) 用于查询售卖地域信息。
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * 本接口（InquiryPriceRenewDBInstance）用于查询续费实例的价格。
     * @param {InquiryPriceRenewDBInstanceRequest} req
     * @param {function(string, InquiryPriceRenewDBInstanceResponse):void} cb
     * @public
     */
    InquiryPriceRenewDBInstance(req, cb) {
        let resp = new InquiryPriceRenewDBInstanceResponse();
        this.request("InquiryPriceRenewDBInstance", req, resp, cb);
    }

    /**
     * 本接口（DeleteMigration）用于删除迁移任务
     * @param {DeleteMigrationRequest} req
     * @param {function(string, DeleteMigrationResponse):void} cb
     * @public
     */
    DeleteMigration(req, cb) {
        let resp = new DeleteMigrationResponse();
        this.request("DeleteMigration", req, resp, cb);
    }

    /**
     * 本接口（ModifyMaintenanceSpan）用于修改实例的可维护时间窗
     * @param {ModifyMaintenanceSpanRequest} req
     * @param {function(string, ModifyMaintenanceSpanResponse):void} cb
     * @public
     */
    ModifyMaintenanceSpan(req, cb) {
        let resp = new ModifyMaintenanceSpanResponse();
        this.request("ModifyMaintenanceSpan", req, resp, cb);
    }

    /**
     * 本接口（DescribeReadOnlyGroupDetails）用于查询只读组详情。
     * @param {DescribeReadOnlyGroupDetailsRequest} req
     * @param {function(string, DescribeReadOnlyGroupDetailsResponse):void} cb
     * @public
     */
    DescribeReadOnlyGroupDetails(req, cb) {
        let resp = new DescribeReadOnlyGroupDetailsResponse();
        this.request("DescribeReadOnlyGroupDetails", req, resp, cb);
    }

    /**
     * 本接口（CreatePublishSubscribe）用于创建两个数据库之间的发布订阅关系。作为订阅者，不能再充当发布者，作为发布者可以有多个订阅者实例。
     * @param {CreatePublishSubscribeRequest} req
     * @param {function(string, CreatePublishSubscribeResponse):void} cb
     * @public
     */
    CreatePublishSubscribe(req, cb) {
        let resp = new CreatePublishSubscribeResponse();
        this.request("CreatePublishSubscribe", req, resp, cb);
    }

    /**
     * 本接口（DescribeRollbackTime）用于查询实例可回档时间范围
     * @param {DescribeRollbackTimeRequest} req
     * @param {function(string, DescribeRollbackTimeResponse):void} cb
     * @public
     */
    DescribeRollbackTime(req, cb) {
        let resp = new DescribeRollbackTimeResponse();
        this.request("DescribeRollbackTime", req, resp, cb);
    }

    /**
     * 本接口（DescribeAccounts）用于拉取实例账户列表。
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * 本接口（CompleteExpansion）在实例发起扩容后，实例状态处于“升级待切换”时，可立即完成实例升级切换操作，无需等待可维护时间窗。本接口需要在实例低峰时调用，在完全切换成功前，存在部分库不可访问的风险。
     * @param {CompleteExpansionRequest} req
     * @param {function(string, CompleteExpansionResponse):void} cb
     * @public
     */
    CompleteExpansion(req, cb) {
        let resp = new CompleteExpansionResponse();
        this.request("CompleteExpansion", req, resp, cb);
    }

    /**
     * 本接口（DescribeMaintenanceSpan）根据实例ID查询该实例的可维护时间窗。
     * @param {DescribeMaintenanceSpanRequest} req
     * @param {function(string, DescribeMaintenanceSpanResponse):void} cb
     * @public
     */
    DescribeMaintenanceSpan(req, cb) {
        let resp = new DescribeMaintenanceSpanResponse();
        this.request("DescribeMaintenanceSpan", req, resp, cb);
    }

    /**
     * 本接口（DescribePublishSubscribe）用于查询发布订阅关系列表。
     * @param {DescribePublishSubscribeRequest} req
     * @param {function(string, DescribePublishSubscribeResponse):void} cb
     * @public
     */
    DescribePublishSubscribe(req, cb) {
        let resp = new DescribePublishSubscribeResponse();
        this.request("DescribePublishSubscribe", req, resp, cb);
    }

    /**
     * 本接口（RemoveBackups）可以删除用户手动创建的备份文件。待删除的备份策略可以是实例备份，也可以是多库备份。
     * @param {RemoveBackupsRequest} req
     * @param {function(string, RemoveBackupsResponse):void} cb
     * @public
     */
    RemoveBackups(req, cb) {
        let resp = new RemoveBackupsResponse();
        this.request("RemoveBackups", req, resp, cb);
    }

    /**
     * 本接口（CreateDB）用于创建数据库。
     * @param {CreateDBRequest} req
     * @param {function(string, CreateDBResponse):void} cb
     * @public
     */
    CreateDB(req, cb) {
        let resp = new CreateDBResponse();
        this.request("CreateDB", req, resp, cb);
    }

    /**
     * 本接口(DeleteDB)用于删除数据库。
     * @param {DeleteDBRequest} req
     * @param {function(string, DeleteDBResponse):void} cb
     * @public
     */
    DeleteDB(req, cb) {
        let resp = new DeleteDBResponse();
        this.request("DeleteDB", req, resp, cb);
    }

    /**
     * 本接口（DescribeMigrationDetail）用于查询迁移任务的详细情况
     * @param {DescribeMigrationDetailRequest} req
     * @param {function(string, DescribeMigrationDetailResponse):void} cb
     * @public
     */
    DescribeMigrationDetail(req, cb) {
        let resp = new DescribeMigrationDetailResponse();
        this.request("DescribeMigrationDetail", req, resp, cb);
    }

    /**
     * 本接口（ModifyReadOnlyGroupDetails）用于修改只读组详情。
     * @param {ModifyReadOnlyGroupDetailsRequest} req
     * @param {function(string, ModifyReadOnlyGroupDetailsResponse):void} cb
     * @public
     */
    ModifyReadOnlyGroupDetails(req, cb) {
        let resp = new ModifyReadOnlyGroupDetailsResponse();
        this.request("ModifyReadOnlyGroupDetails", req, resp, cb);
    }

    /**
     * 本接口（RestoreInstance）用于根据备份文件恢复实例。
     * @param {RestoreInstanceRequest} req
     * @param {function(string, RestoreInstanceResponse):void} cb
     * @public
     */
    RestoreInstance(req, cb) {
        let resp = new RestoreInstanceResponse();
        this.request("RestoreInstance", req, resp, cb);
    }

    /**
     * 本接口（UpgradeDBInstance）用于升级实例
     * @param {UpgradeDBInstanceRequest} req
     * @param {function(string, UpgradeDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDBInstance(req, cb) {
        let resp = new UpgradeDBInstanceResponse();
        this.request("UpgradeDBInstance", req, resp, cb);
    }

    /**
     * 本接口（RunMigration）用于启动迁移任务，开始迁移
     * @param {RunMigrationRequest} req
     * @param {function(string, RunMigrationResponse):void} cb
     * @public
     */
    RunMigration(req, cb) {
        let resp = new RunMigrationResponse();
        this.request("RunMigration", req, resp, cb);
    }

    /**
     * 本接口 (DescribeProductConfig) 用于查询售卖规格配置。
     * @param {DescribeProductConfigRequest} req
     * @param {function(string, DescribeProductConfigResponse):void} cb
     * @public
     */
    DescribeProductConfig(req, cb) {
        let resp = new DescribeProductConfigResponse();
        this.request("DescribeProductConfig", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBInstanceRenewFlag）用于修改实例续费标记
     * @param {ModifyDBInstanceRenewFlagRequest} req
     * @param {function(string, ModifyDBInstanceRenewFlagResponse):void} cb
     * @public
     */
    ModifyDBInstanceRenewFlag(req, cb) {
        let resp = new ModifyDBInstanceRenewFlagResponse();
        this.request("ModifyDBInstanceRenewFlag", req, resp, cb);
    }

    /**
     * 本接口（DescribeReadOnlyGroupByReadOnlyInstance）用于通过只读副本实例ID查询其所在的只读组。
     * @param {DescribeReadOnlyGroupByReadOnlyInstanceRequest} req
     * @param {function(string, DescribeReadOnlyGroupByReadOnlyInstanceResponse):void} cb
     * @public
     */
    DescribeReadOnlyGroupByReadOnlyInstance(req, cb) {
        let resp = new DescribeReadOnlyGroupByReadOnlyInstanceResponse();
        this.request("DescribeReadOnlyGroupByReadOnlyInstance", req, resp, cb);
    }


}
module.exports = SqlserverClient;
