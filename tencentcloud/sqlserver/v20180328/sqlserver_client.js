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
const CreateDBInstancesRequest = models.CreateDBInstancesRequest;
const InstanceRenewInfo = models.InstanceRenewInfo;
const DealInfo = models.DealInfo;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const CreateMigrationResponse = models.CreateMigrationResponse;
const RestartDBInstanceRequest = models.RestartDBInstanceRequest;
const RegionInfo = models.RegionInfo;
const ModifyDBRemarkRequest = models.ModifyDBRemarkRequest;
const MigrateDetail = models.MigrateDetail;
const RunMigrationResponse = models.RunMigrationResponse;
const DescribeProductConfigRequest = models.DescribeProductConfigRequest;
const CreateAccountRequest = models.CreateAccountRequest;
const RollbackInstanceResponse = models.RollbackInstanceResponse;
const DBRemark = models.DBRemark;
const MigrateDB = models.MigrateDB;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DescribeBackupsRequest = models.DescribeBackupsRequest;
const ModifyDBInstanceProjectResponse = models.ModifyDBInstanceProjectResponse;
const DescribeRollbackTimeResponse = models.DescribeRollbackTimeResponse;
const RestoreInstanceRequest = models.RestoreInstanceRequest;
const RunMigrationRequest = models.RunMigrationRequest;
const RestoreInstanceResponse = models.RestoreInstanceResponse;
const ZoneInfo = models.ZoneInfo;
const InquiryPriceCreateDBInstancesRequest = models.InquiryPriceCreateDBInstancesRequest;
const DescribeMigrationDetailRequest = models.DescribeMigrationDetailRequest;
const MigrateTask = models.MigrateTask;
const SpecInfo = models.SpecInfo;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const InquiryPriceCreateDBInstancesResponse = models.InquiryPriceCreateDBInstancesResponse;
const ModifyAccountPrivilegeResponse = models.ModifyAccountPrivilegeResponse;
const DBCreateInfo = models.DBCreateInfo;
const AccountPrivilege = models.AccountPrivilege;
const ModifyMigrationResponse = models.ModifyMigrationResponse;
const AccountCreateInfo = models.AccountCreateInfo;
const DescribeDBsResponse = models.DescribeDBsResponse;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const SlowlogInfo = models.SlowlogInfo;
const ModifyAccountRemarkResponse = models.ModifyAccountRemarkResponse;
const DescribeMigrationsResponse = models.DescribeMigrationsResponse;
const RenewDBInstanceRequest = models.RenewDBInstanceRequest;
const DescribeZonesRequest = models.DescribeZonesRequest;
const DeleteDBRequest = models.DeleteDBRequest;
const ModifyDBInstanceRenewFlagResponse = models.ModifyDBInstanceRenewFlagResponse;
const MigrateSource = models.MigrateSource;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const ModifyAccountPrivilegeRequest = models.ModifyAccountPrivilegeRequest;
const DescribeMigrationsRequest = models.DescribeMigrationsRequest;
const InquiryPriceRenewDBInstanceResponse = models.InquiryPriceRenewDBInstanceResponse;
const DescribeFlowStatusRequest = models.DescribeFlowStatusRequest;
const DescribeDBsRequest = models.DescribeDBsRequest;
const ModifyDBNameRequest = models.ModifyDBNameRequest;
const DescribeBackupsResponse = models.DescribeBackupsResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeFlowStatusResponse = models.DescribeFlowStatusResponse;
const DeleteMigrationRequest = models.DeleteMigrationRequest;
const DBPrivilegeModifyInfo = models.DBPrivilegeModifyInfo;
const CreateDBRequest = models.CreateDBRequest;
const InquiryPriceUpgradeDBInstanceRequest = models.InquiryPriceUpgradeDBInstanceRequest;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const AccountPassword = models.AccountPassword;
const DeleteMigrationResponse = models.DeleteMigrationResponse;
const InstanceDBDetail = models.InstanceDBDetail;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const DbRollbackTimeInfo = models.DbRollbackTimeInfo;
const AccountDetail = models.AccountDetail;
const CreateBackupResponse = models.CreateBackupResponse;
const DBInstance = models.DBInstance;
const DescribeProductConfigResponse = models.DescribeProductConfigResponse;
const CreateMigrationRequest = models.CreateMigrationRequest;
const ModifyDBNameResponse = models.ModifyDBNameResponse;
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
const DeleteAccountRequest = models.DeleteAccountRequest;
const InquiryPriceRenewDBInstanceRequest = models.InquiryPriceRenewDBInstanceRequest;
const CreateBackupRequest = models.CreateBackupRequest;
const ModifyAccountRemarkRequest = models.ModifyAccountRemarkRequest;
const InquiryPriceUpgradeDBInstanceResponse = models.InquiryPriceUpgradeDBInstanceResponse;
const DescribeMigrationDetailResponse = models.DescribeMigrationDetailResponse;
const ModifyMigrationRequest = models.ModifyMigrationRequest;
const CreateAccountResponse = models.CreateAccountResponse;
const DeleteDBResponse = models.DeleteDBResponse;
const CreateDBResponse = models.CreateDBResponse;
const RestartDBInstanceResponse = models.RestartDBInstanceResponse;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const DescribeSlowlogsResponse = models.DescribeSlowlogsResponse;
const DBDetail = models.DBDetail;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const DescribeSlowlogsRequest = models.DescribeSlowlogsRequest;
const ModifyDBInstanceProjectRequest = models.ModifyDBInstanceProjectRequest;
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


}
module.exports = SqlserverClient;
