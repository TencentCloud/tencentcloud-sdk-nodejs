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
const CloneDBResponse = models.CloneDBResponse;
const InstanceRenewInfo = models.InstanceRenewInfo;
const DealInfo = models.DealInfo;
const CreateBasicDBInstancesResponse = models.CreateBasicDBInstancesResponse;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const DescribeMaintenanceSpanResponse = models.DescribeMaintenanceSpanResponse;
const CreatePublishSubscribeRequest = models.CreatePublishSubscribeRequest;
const CreateMigrationResponse = models.CreateMigrationResponse;
const QueryMigrationCheckProcessRequest = models.QueryMigrationCheckProcessRequest;
const DeleteBackupMigrationRequest = models.DeleteBackupMigrationRequest;
const DatabaseTuple = models.DatabaseTuple;
const RegionInfo = models.RegionInfo;
const ModifyBackupNameResponse = models.ModifyBackupNameResponse;
const DeletePublishSubscribeRequest = models.DeletePublishSubscribeRequest;
const ModifyMaintenanceSpanRequest = models.ModifyMaintenanceSpanRequest;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const DatabaseTupleStatus = models.DatabaseTupleStatus;
const StartBackupMigrationResponse = models.StartBackupMigrationResponse;
const ModifyReadOnlyGroupDetailsResponse = models.ModifyReadOnlyGroupDetailsResponse;
const ModifyBackupStrategyResponse = models.ModifyBackupStrategyResponse;
const ModifyIncrementalMigrationRequest = models.ModifyIncrementalMigrationRequest;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const MigrateDetail = models.MigrateDetail;
const CreateIncrementalMigrationRequest = models.CreateIncrementalMigrationRequest;
const RunMigrationResponse = models.RunMigrationResponse;
const DescribeProductConfigRequest = models.DescribeProductConfigRequest;
const ModifyPublishSubscribeNameResponse = models.ModifyPublishSubscribeNameResponse;
const DescribeCrossRegionZoneRequest = models.DescribeCrossRegionZoneRequest;
const RollbackInstanceResponse = models.RollbackInstanceResponse;
const DeleteIncrementalMigrationRequest = models.DeleteIncrementalMigrationRequest;
const DBRemark = models.DBRemark;
const MigrateDB = models.MigrateDB;
const RestartDBInstanceRequest = models.RestartDBInstanceRequest;
const DescribeReadOnlyGroupListResponse = models.DescribeReadOnlyGroupListResponse;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DescribeBackupsRequest = models.DescribeBackupsRequest;
const ModifyDBInstanceProjectResponse = models.ModifyDBInstanceProjectResponse;
const DescribeRollbackTimeResponse = models.DescribeRollbackTimeResponse;
const RestoreInstanceRequest = models.RestoreInstanceRequest;
const DescribeIncrementalMigrationRequest = models.DescribeIncrementalMigrationRequest;
const DescribeReadOnlyGroupByReadOnlyInstanceResponse = models.DescribeReadOnlyGroupByReadOnlyInstanceResponse;
const RunMigrationRequest = models.RunMigrationRequest;
const SecurityGroupPolicy = models.SecurityGroupPolicy;
const RestoreInstanceResponse = models.RestoreInstanceResponse;
const ModifyMaintenanceSpanResponse = models.ModifyMaintenanceSpanResponse;
const ZoneInfo = models.ZoneInfo;
const InquiryPriceCreateDBInstancesRequest = models.InquiryPriceCreateDBInstancesRequest;
const StartIncrementalMigrationRequest = models.StartIncrementalMigrationRequest;
const Migration = models.Migration;
const ModifyDBInstanceNetworkRequest = models.ModifyDBInstanceNetworkRequest;
const MigrationDetail = models.MigrationDetail;
const DescribeBackupByFlowIdResponse = models.DescribeBackupByFlowIdResponse;
const RecycleDBInstanceRequest = models.RecycleDBInstanceRequest;
const DescribeFlowStatusRequest = models.DescribeFlowStatusRequest;
const StartMigrationCheckResponse = models.StartMigrationCheckResponse;
const MigrateTask = models.MigrateTask;
const SpecInfo = models.SpecInfo;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const InquiryPriceCreateDBInstancesResponse = models.InquiryPriceCreateDBInstancesResponse;
const CompleteMigrationRequest = models.CompleteMigrationRequest;
const ModifyAccountPrivilegeResponse = models.ModifyAccountPrivilegeResponse;
const RemoveBackupsRequest = models.RemoveBackupsRequest;
const DBCreateInfo = models.DBCreateInfo;
const AccountPrivilege = models.AccountPrivilege;
const ModifyMigrationResponse = models.ModifyMigrationResponse;
const RecycleReadOnlyGroupResponse = models.RecycleReadOnlyGroupResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const DescribeDBsResponse = models.DescribeDBsResponse;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const SlowlogInfo = models.SlowlogInfo;
const ModifyAccountRemarkResponse = models.ModifyAccountRemarkResponse;
const DescribeMigrationsResponse = models.DescribeMigrationsResponse;
const ModifyBackupStrategyRequest = models.ModifyBackupStrategyRequest;
const RenewDBInstanceRequest = models.RenewDBInstanceRequest;
const DescribeZonesRequest = models.DescribeZonesRequest;
const DeleteDBRequest = models.DeleteDBRequest;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const DescribeCrossRegionZoneResponse = models.DescribeCrossRegionZoneResponse;
const ModifyDBInstanceRenewFlagResponse = models.ModifyDBInstanceRenewFlagResponse;
const DescribeMigrationDatabasesResponse = models.DescribeMigrationDatabasesResponse;
const CompleteExpansionResponse = models.CompleteExpansionResponse;
const MigrateSource = models.MigrateSource;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const ModifyBackupMigrationResponse = models.ModifyBackupMigrationResponse;
const ReadOnlyGroup = models.ReadOnlyGroup;
const QueryMigrationCheckProcessResponse = models.QueryMigrationCheckProcessResponse;
const CreateReadOnlyDBInstancesRequest = models.CreateReadOnlyDBInstancesRequest;
const ModifyAccountPrivilegeRequest = models.ModifyAccountPrivilegeRequest;
const CreateBackupMigrationRequest = models.CreateBackupMigrationRequest;
const DescribeMigrationsRequest = models.DescribeMigrationsRequest;
const DescribeDBCharsetsRequest = models.DescribeDBCharsetsRequest;
const DescribeUploadIncrementalInfoRequest = models.DescribeUploadIncrementalInfoRequest;
const DescribeDBsRequest = models.DescribeDBsRequest;
const CompleteExpansionRequest = models.CompleteExpansionRequest;
const RenewPostpaidDBInstanceRequest = models.RenewPostpaidDBInstanceRequest;
const DeleteIncrementalMigrationResponse = models.DeleteIncrementalMigrationResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeMaintenanceSpanRequest = models.DescribeMaintenanceSpanRequest;
const DescribeFlowStatusResponse = models.DescribeFlowStatusResponse;
const StopMigrationRequest = models.StopMigrationRequest;
const CreateReadOnlyDBInstancesResponse = models.CreateReadOnlyDBInstancesResponse;
const DeleteMigrationRequest = models.DeleteMigrationRequest;
const CompleteMigrationResponse = models.CompleteMigrationResponse;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DBPrivilegeModifyInfo = models.DBPrivilegeModifyInfo;
const RemoveBackupsResponse = models.RemoveBackupsResponse;
const TerminateDBInstanceRequest = models.TerminateDBInstanceRequest;
const DescribeUploadIncrementalInfoResponse = models.DescribeUploadIncrementalInfoResponse;
const CreateDBRequest = models.CreateDBRequest;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const InstanceDBDetail = models.InstanceDBDetail;
const SecurityGroup = models.SecurityGroup;
const RenameRestoreDatabase = models.RenameRestoreDatabase;
const ReadOnlyInstance = models.ReadOnlyInstance;
const InquiryPriceUpgradeDBInstanceRequest = models.InquiryPriceUpgradeDBInstanceRequest;
const ModifyDBRemarkRequest = models.ModifyDBRemarkRequest;
const ReadOnlyInstanceWeightPair = models.ReadOnlyInstanceWeightPair;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const AccountPassword = models.AccountPassword;
const DeleteMigrationResponse = models.DeleteMigrationResponse;
const DescribeBackupMigrationRequest = models.DescribeBackupMigrationRequest;
const RecycleReadOnlyGroupRequest = models.RecycleReadOnlyGroupRequest;
const StepDetail = models.StepDetail;
const DescribeBackupUploadSizeResponse = models.DescribeBackupUploadSizeResponse;
const InquiryPriceRenewDBInstanceRequest = models.InquiryPriceRenewDBInstanceRequest;
const StartIncrementalMigrationResponse = models.StartIncrementalMigrationResponse;
const TerminateDBInstanceResponse = models.TerminateDBInstanceResponse;
const DbRollbackTimeInfo = models.DbRollbackTimeInfo;
const ModifyDBInstanceNetworkResponse = models.ModifyDBInstanceNetworkResponse;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const AccountDetail = models.AccountDetail;
const CreateBackupResponse = models.CreateBackupResponse;
const DBInstance = models.DBInstance;
const DescribeProductConfigResponse = models.DescribeProductConfigResponse;
const DescribeRollbackTimeRequest = models.DescribeRollbackTimeRequest;
const DescribeUploadBackupInfoResponse = models.DescribeUploadBackupInfoResponse;
const CreateMigrationRequest = models.CreateMigrationRequest;
const StartMigrationCheckRequest = models.StartMigrationCheckRequest;
const CreateBasicDBInstancesRequest = models.CreateBasicDBInstancesRequest;
const ModifyDBNameResponse = models.ModifyDBNameResponse;
const CosUploadBackupFile = models.CosUploadBackupFile;
const ModifyDBNameRequest = models.ModifyDBNameRequest;
const ModifyDBInstanceRenewFlagRequest = models.ModifyDBInstanceRenewFlagRequest;
const Backup = models.Backup;
const DescribeBackupCommandRequest = models.DescribeBackupCommandRequest;
const AccountRemark = models.AccountRemark;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const CreateIncrementalMigrationResponse = models.CreateIncrementalMigrationResponse;
const MigrationAction = models.MigrationAction;
const AccountPrivilegeModifyInfo = models.AccountPrivilegeModifyInfo;
const DescribeBackupMigrationResponse = models.DescribeBackupMigrationResponse;
const AccountCreateInfo = models.AccountCreateInfo;
const RenewDBInstanceResponse = models.RenewDBInstanceResponse;
const DBPrivilege = models.DBPrivilege;
const DescribeOrdersRequest = models.DescribeOrdersRequest;
const DescribeReadOnlyGroupDetailsResponse = models.DescribeReadOnlyGroupDetailsResponse;
const DescribeBackupsResponse = models.DescribeBackupsResponse;
const ResourceTag = models.ResourceTag;
const CreateBackupMigrationResponse = models.CreateBackupMigrationResponse;
const RecycleDBInstanceResponse = models.RecycleDBInstanceResponse;
const DeleteAccountRequest = models.DeleteAccountRequest;
const DescribeReadOnlyGroupByReadOnlyInstanceRequest = models.DescribeReadOnlyGroupByReadOnlyInstanceRequest;
const DeleteBackupMigrationResponse = models.DeleteBackupMigrationResponse;
const PublishSubscribe = models.PublishSubscribe;
const DescribeBackupByFlowIdRequest = models.DescribeBackupByFlowIdRequest;
const CreateBackupRequest = models.CreateBackupRequest;
const DescribePublishSubscribeRequest = models.DescribePublishSubscribeRequest;
const ModifyAccountRemarkRequest = models.ModifyAccountRemarkRequest;
const ModifyIncrementalMigrationResponse = models.ModifyIncrementalMigrationResponse;
const ModifyPublishSubscribeNameRequest = models.ModifyPublishSubscribeNameRequest;
const DeletePublishSubscribeResponse = models.DeletePublishSubscribeResponse;
const InquiryPriceUpgradeDBInstanceResponse = models.InquiryPriceUpgradeDBInstanceResponse;
const CloneDBRequest = models.CloneDBRequest;
const DescribeMigrationDetailResponse = models.DescribeMigrationDetailResponse;
const ModifyMigrationRequest = models.ModifyMigrationRequest;
const DescribeMigrationDatabasesRequest = models.DescribeMigrationDatabasesRequest;
const DeleteDBInstanceRequest = models.DeleteDBInstanceRequest;
const CreateAccountResponse = models.CreateAccountResponse;
const RenewPostpaidDBInstanceResponse = models.RenewPostpaidDBInstanceResponse;
const DescribeBackupUploadSizeRequest = models.DescribeBackupUploadSizeRequest;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const CreateAccountRequest = models.CreateAccountRequest;
const DeleteDBResponse = models.DeleteDBResponse;
const CreateDBResponse = models.CreateDBResponse;
const RestartDBInstanceResponse = models.RestartDBInstanceResponse;
const InquiryPriceRenewDBInstanceResponse = models.InquiryPriceRenewDBInstanceResponse;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const DescribeSlowlogsResponse = models.DescribeSlowlogsResponse;
const DBDetail = models.DBDetail;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const ModifyReadOnlyGroupDetailsRequest = models.ModifyReadOnlyGroupDetailsRequest;
const RollbackInstanceRequest = models.RollbackInstanceRequest;
const DescribeSlowlogsRequest = models.DescribeSlowlogsRequest;
const ModifyDBInstanceProjectRequest = models.ModifyDBInstanceProjectRequest;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const ModifyBackupNameRequest = models.ModifyBackupNameRequest;
const StopMigrationResponse = models.StopMigrationResponse;
const MigrationStep = models.MigrationStep;
const CreatePublishSubscribeResponse = models.CreatePublishSubscribeResponse;
const DescribeUploadBackupInfoRequest = models.DescribeUploadBackupInfoRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const DeleteDBInstanceResponse = models.DeleteDBInstanceResponse;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;
const DescribeBackupCommandResponse = models.DescribeBackupCommandResponse;
const StartBackupMigrationRequest = models.StartBackupMigrationRequest;
const DescribePublishSubscribeResponse = models.DescribePublishSubscribeResponse;
const DescribeMigrationDetailRequest = models.DescribeMigrationDetailRequest;
const DescribeReadOnlyGroupListRequest = models.DescribeReadOnlyGroupListRequest;
const DescribeIncrementalMigrationResponse = models.DescribeIncrementalMigrationResponse;
const ModifyDBRemarkResponse = models.ModifyDBRemarkResponse;
const MigrateTarget = models.MigrateTarget;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const CreateDBInstancesResponse = models.CreateDBInstancesResponse;
const ModifyBackupMigrationRequest = models.ModifyBackupMigrationRequest;
const DeleteAccountResponse = models.DeleteAccountResponse;
const DescribeDBCharsetsResponse = models.DescribeDBCharsetsResponse;


/**
 * sqlserver client
 * @class
 */
class SqlserverClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("sqlserver.tencentcloudapi.com", "2018-03-28", credential, region, profile);
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
     * 本接口（RecycleReadOnlyGroup）立即回收只读组的资源，只读组占用的vip等资源将立即释放且不可找回。
     * @param {RecycleReadOnlyGroupRequest} req
     * @param {function(string, RecycleReadOnlyGroupResponse):void} cb
     * @public
     */
    RecycleReadOnlyGroup(req, cb) {
        let resp = new RecycleReadOnlyGroupResponse();
        this.request("RecycleReadOnlyGroup", req, resp, cb);
    }

    /**
     * 本接口（StartIncrementalMigration）用于启动增量备份导入任务。
     * @param {StartIncrementalMigrationRequest} req
     * @param {function(string, StartIncrementalMigrationResponse):void} cb
     * @public
     */
    StartIncrementalMigration(req, cb) {
        let resp = new StartIncrementalMigrationResponse();
        this.request("StartIncrementalMigration", req, resp, cb);
    }

    /**
     * 本接口（QueryMigrationCheckProcess）的作用是查询迁移检查任务的进度，适用于迁移源的类型为TencentDB for SQLServer 的迁移方式
     * @param {QueryMigrationCheckProcessRequest} req
     * @param {function(string, QueryMigrationCheckProcessResponse):void} cb
     * @public
     */
    QueryMigrationCheckProcess(req, cb) {
        let resp = new QueryMigrationCheckProcessResponse();
        this.request("QueryMigrationCheckProcess", req, resp, cb);
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
     * 本接口（DescribeUploadIncrementalInfo）用于查询增量备份上传权限。
     * @param {DescribeUploadIncrementalInfoRequest} req
     * @param {function(string, DescribeUploadIncrementalInfoResponse):void} cb
     * @public
     */
    DescribeUploadIncrementalInfo(req, cb) {
        let resp = new DescribeUploadIncrementalInfoResponse();
        this.request("DescribeUploadIncrementalInfo", req, resp, cb);
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
     * 本接口（DeleteIncrementalMigration）用于删除增量备份导入任务。
     * @param {DeleteIncrementalMigrationRequest} req
     * @param {function(string, DeleteIncrementalMigrationResponse):void} cb
     * @public
     */
    DeleteIncrementalMigration(req, cb) {
        let resp = new DeleteIncrementalMigrationResponse();
        this.request("DeleteIncrementalMigration", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBInstanceNetwork）用于修改运行中实例的网络，仅支持从VPC网络到VPC网络的转换
     * @param {ModifyDBInstanceNetworkRequest} req
     * @param {function(string, ModifyDBInstanceNetworkResponse):void} cb
     * @public
     */
    ModifyDBInstanceNetwork(req, cb) {
        let resp = new ModifyDBInstanceNetworkResponse();
        this.request("ModifyDBInstanceNetwork", req, resp, cb);
    }

    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
     * @param {ModifyDBInstanceSecurityGroupsRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroups(req, cb) {
        let resp = new ModifyDBInstanceSecurityGroupsResponse();
        this.request("ModifyDBInstanceSecurityGroups", req, resp, cb);
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
     * 本接口（DescribeReadOnlyGroupByReadOnlyInstance）用于通过只读副本实例ID查询其所在的只读组。
     * @param {DescribeReadOnlyGroupByReadOnlyInstanceRequest} req
     * @param {function(string, DescribeReadOnlyGroupByReadOnlyInstanceResponse):void} cb
     * @public
     */
    DescribeReadOnlyGroupByReadOnlyInstance(req, cb) {
        let resp = new DescribeReadOnlyGroupByReadOnlyInstanceResponse();
        this.request("DescribeReadOnlyGroupByReadOnlyInstance", req, resp, cb);
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
     * 本接口（DescribeUploadBackupInfo）用于查询备份上传权限。
     * @param {DescribeUploadBackupInfoRequest} req
     * @param {function(string, DescribeUploadBackupInfoResponse):void} cb
     * @public
     */
    DescribeUploadBackupInfo(req, cb) {
        let resp = new DescribeUploadBackupInfoResponse();
        this.request("DescribeUploadBackupInfo", req, resp, cb);
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
     * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
     * @param {DisassociateSecurityGroupsRequest} req
     * @param {function(string, DisassociateSecurityGroupsResponse):void} cb
     * @public
     */
    DisassociateSecurityGroups(req, cb) {
        let resp = new DisassociateSecurityGroupsResponse();
        this.request("DisassociateSecurityGroups", req, resp, cb);
    }

    /**
     * 本接口(TerminateDBInstance)用于主动隔离实例，使得实例进入回收站。
     * @param {TerminateDBInstanceRequest} req
     * @param {function(string, TerminateDBInstanceResponse):void} cb
     * @public
     */
    TerminateDBInstance(req, cb) {
        let resp = new TerminateDBInstanceResponse();
        this.request("TerminateDBInstance", req, resp, cb);
    }

    /**
     * 本接口（DeleteDBInstance）用于释放回收站中的SQL server实例。释放后的实例将保存一段时间后物理销毁。其发布订阅将自动解除，其ro副本将自动释放。
     * @param {DeleteDBInstanceRequest} req
     * @param {function(string, DeleteDBInstanceResponse):void} cb
     * @public
     */
    DeleteDBInstance(req, cb) {
        let resp = new DeleteDBInstanceResponse();
        this.request("DeleteDBInstance", req, resp, cb);
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
     * 本接口(DescribeCrossRegionZone)根据主实例查询备机的容灾地域和可用区。
     * @param {DescribeCrossRegionZoneRequest} req
     * @param {function(string, DescribeCrossRegionZoneResponse):void} cb
     * @public
     */
    DescribeCrossRegionZone(req, cb) {
        let resp = new DescribeCrossRegionZoneResponse();
        this.request("DescribeCrossRegionZone", req, resp, cb);
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
     * 本接口（RenewPostpaidDBInstance）用于将通过接口TerminateDBInstance手动隔离的按量计费实例从回收站中恢复。
     * @param {RenewPostpaidDBInstanceRequest} req
     * @param {function(string, RenewPostpaidDBInstanceResponse):void} cb
     * @public
     */
    RenewPostpaidDBInstance(req, cb) {
        let resp = new RenewPostpaidDBInstanceResponse();
        this.request("RenewPostpaidDBInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeIncrementalMigration）用于查询增量备份导入任务。
     * @param {DescribeIncrementalMigrationRequest} req
     * @param {function(string, DescribeIncrementalMigrationResponse):void} cb
     * @public
     */
    DescribeIncrementalMigration(req, cb) {
        let resp = new DescribeIncrementalMigrationResponse();
        this.request("DescribeIncrementalMigration", req, resp, cb);
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
     * 本接口（DescribeBackupMigration）用于创建增量备份导入任务。
     * @param {DescribeBackupMigrationRequest} req
     * @param {function(string, DescribeBackupMigrationResponse):void} cb
     * @public
     */
    DescribeBackupMigration(req, cb) {
        let resp = new DescribeBackupMigrationResponse();
        this.request("DescribeBackupMigration", req, resp, cb);
    }

    /**
     * 本接口(DescribeProjectSecurityGroups)用于查询项目的安全组详情。
     * @param {DescribeProjectSecurityGroupsRequest} req
     * @param {function(string, DescribeProjectSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeProjectSecurityGroups(req, cb) {
        let resp = new DescribeProjectSecurityGroupsResponse();
        this.request("DescribeProjectSecurityGroups", req, resp, cb);
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
     * 本接口（StopMigration）作用是中止一个迁移任务
     * @param {StopMigrationRequest} req
     * @param {function(string, StopMigrationResponse):void} cb
     * @public
     */
    StopMigration(req, cb) {
        let resp = new StopMigrationResponse();
        this.request("StopMigration", req, resp, cb);
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
     * 本接口（CompleteMigration）作用是完成一个迁移任务
     * @param {CompleteMigrationRequest} req
     * @param {function(string, CompleteMigrationResponse):void} cb
     * @public
     */
    CompleteMigration(req, cb) {
        let resp = new CompleteMigrationResponse();
        this.request("CompleteMigration", req, resp, cb);
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
     * 本接口（StartMigrationCheck）的作用是启动一个迁移前的校验任务，适用于迁移源的类型为TencentDB for SQLServer 的迁移方式
     * @param {StartMigrationCheckRequest} req
     * @param {function(string, StartMigrationCheckResponse):void} cb
     * @public
     */
    StartMigrationCheck(req, cb) {
        let resp = new StartMigrationCheckResponse();
        this.request("StartMigrationCheck", req, resp, cb);
    }

    /**
     * 本接口（DescribeDBCharsets）用于查询实例支持的数据库字符集。
     * @param {DescribeDBCharsetsRequest} req
     * @param {function(string, DescribeDBCharsetsResponse):void} cb
     * @public
     */
    DescribeDBCharsets(req, cb) {
        let resp = new DescribeDBCharsetsResponse();
        this.request("DescribeDBCharsets", req, resp, cb);
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
     * 本接口（CreateBasicDBInstances）用于创建SQL server基础版实例。
     * @param {CreateBasicDBInstancesRequest} req
     * @param {function(string, CreateBasicDBInstancesResponse):void} cb
     * @public
     */
    CreateBasicDBInstances(req, cb) {
        let resp = new CreateBasicDBInstancesResponse();
        this.request("CreateBasicDBInstances", req, resp, cb);
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
     * 本接口（CreateBackupMigration）用于创建备份导入任务。
     * @param {CreateBackupMigrationRequest} req
     * @param {function(string, CreateBackupMigrationResponse):void} cb
     * @public
     */
    CreateBackupMigration(req, cb) {
        let resp = new CreateBackupMigrationResponse();
        this.request("CreateBackupMigration", req, resp, cb);
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
     * 本接口(AssociateSecurityGroups)用于安全组批量绑定实例。
     * @param {AssociateSecurityGroupsRequest} req
     * @param {function(string, AssociateSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateSecurityGroups(req, cb) {
        let resp = new AssociateSecurityGroupsResponse();
        this.request("AssociateSecurityGroups", req, resp, cb);
    }

    /**
     * 本接口（CreateIncrementalMigration）用于创建增量备份导入任务。
     * @param {CreateIncrementalMigrationRequest} req
     * @param {function(string, CreateIncrementalMigrationResponse):void} cb
     * @public
     */
    CreateIncrementalMigration(req, cb) {
        let resp = new CreateIncrementalMigrationResponse();
        this.request("CreateIncrementalMigration", req, resp, cb);
    }

    /**
     * 本接口（DescribeBackupUploadSize）用于查询上传的备份文件大小。在备份上传类型是COS_UPLOAD(备份放在业务的对象存储上)时有效。
     * @param {DescribeBackupUploadSizeRequest} req
     * @param {function(string, DescribeBackupUploadSizeResponse):void} cb
     * @public
     */
    DescribeBackupUploadSize(req, cb) {
        let resp = new DescribeBackupUploadSizeResponse();
        this.request("DescribeBackupUploadSize", req, resp, cb);
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
     * 本接口(ModifyBackupName)用于修改备份名称。
     * @param {ModifyBackupNameRequest} req
     * @param {function(string, ModifyBackupNameResponse):void} cb
     * @public
     */
    ModifyBackupName(req, cb) {
        let resp = new ModifyBackupNameResponse();
        this.request("ModifyBackupName", req, resp, cb);
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
     * 本接口（ModifyIncrementalMigration）用于修改增量备份导入任务。
     * @param {ModifyIncrementalMigrationRequest} req
     * @param {function(string, ModifyIncrementalMigrationResponse):void} cb
     * @public
     */
    ModifyIncrementalMigration(req, cb) {
        let resp = new ModifyIncrementalMigrationResponse();
        this.request("ModifyIncrementalMigration", req, resp, cb);
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
     * 本接口（DescribeMigrationDatabases）的作用是查询待迁移数据库列表
     * @param {DescribeMigrationDatabasesRequest} req
     * @param {function(string, DescribeMigrationDatabasesResponse):void} cb
     * @public
     */
    DescribeMigrationDatabases(req, cb) {
        let resp = new DescribeMigrationDatabasesResponse();
        this.request("DescribeMigrationDatabases", req, resp, cb);
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
     * 本接口（CreateReadOnlyDBInstances）用于添加只读副本实例。
     * @param {CreateReadOnlyDBInstancesRequest} req
     * @param {function(string, CreateReadOnlyDBInstancesResponse):void} cb
     * @public
     */
    CreateReadOnlyDBInstances(req, cb) {
        let resp = new CreateReadOnlyDBInstancesResponse();
        this.request("CreateReadOnlyDBInstances", req, resp, cb);
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
     * 本接口（RecycleDBInstance）用于主动回收已下线的SQLSERVER实例
     * @param {RecycleDBInstanceRequest} req
     * @param {function(string, RecycleDBInstanceResponse):void} cb
     * @public
     */
    RecycleDBInstance(req, cb) {
        let resp = new RecycleDBInstanceResponse();
        this.request("RecycleDBInstance", req, resp, cb);
    }

    /**
     * 本接口（CloneDB）用于克隆数据库，只支持克隆到本实例，克隆时必须指定新库名称。
     * @param {CloneDBRequest} req
     * @param {function(string, CloneDBResponse):void} cb
     * @public
     */
    CloneDB(req, cb) {
        let resp = new CloneDBResponse();
        this.request("CloneDB", req, resp, cb);
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
     * 本接口（DescribeBackupCommand）用于查询以规范的格式创建备份的命令。
     * @param {DescribeBackupCommandRequest} req
     * @param {function(string, DescribeBackupCommandResponse):void} cb
     * @public
     */
    DescribeBackupCommand(req, cb) {
        let resp = new DescribeBackupCommandResponse();
        this.request("DescribeBackupCommand", req, resp, cb);
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
     * 本接口（ModifyBackupMigration）用于修改备份导入任务。
     * @param {ModifyBackupMigrationRequest} req
     * @param {function(string, ModifyBackupMigrationResponse):void} cb
     * @public
     */
    ModifyBackupMigration(req, cb) {
        let resp = new ModifyBackupMigrationResponse();
        this.request("ModifyBackupMigration", req, resp, cb);
    }

    /**
     * 本接口（StartBackupMigration）用于启动备份导入任务。
     * @param {StartBackupMigrationRequest} req
     * @param {function(string, StartBackupMigrationResponse):void} cb
     * @public
     */
    StartBackupMigration(req, cb) {
        let resp = new StartBackupMigrationResponse();
        this.request("StartBackupMigration", req, resp, cb);
    }

    /**
     * 本接口(DescribeBackupByFlowId)用于通过备份创建流程的ID查询创建的备份详情，流程ID可从接口CreateBackup中获得。
     * @param {DescribeBackupByFlowIdRequest} req
     * @param {function(string, DescribeBackupByFlowIdResponse):void} cb
     * @public
     */
    DescribeBackupByFlowId(req, cb) {
        let resp = new DescribeBackupByFlowIdResponse();
        this.request("DescribeBackupByFlowId", req, resp, cb);
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
     * 本接口(DescribeDBSecurityGroups)用于查询实例的安全组详情。
     * @param {DescribeDBSecurityGroupsRequest} req
     * @param {function(string, DescribeDBSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeDBSecurityGroups(req, cb) {
        let resp = new DescribeDBSecurityGroupsResponse();
        this.request("DescribeDBSecurityGroups", req, resp, cb);
    }

    /**
     * 本接口（DeleteBackupMigration）用于删除备份导入任务。
     * @param {DeleteBackupMigrationRequest} req
     * @param {function(string, DeleteBackupMigrationResponse):void} cb
     * @public
     */
    DeleteBackupMigration(req, cb) {
        let resp = new DeleteBackupMigrationResponse();
        this.request("DeleteBackupMigration", req, resp, cb);
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
     * 本接口（ModifyDBInstanceRenewFlag）用于修改实例续费标记
     * @param {ModifyDBInstanceRenewFlagRequest} req
     * @param {function(string, ModifyDBInstanceRenewFlagResponse):void} cb
     * @public
     */
    ModifyDBInstanceRenewFlag(req, cb) {
        let resp = new ModifyDBInstanceRenewFlagResponse();
        this.request("ModifyDBInstanceRenewFlag", req, resp, cb);
    }


}
module.exports = SqlserverClient;
