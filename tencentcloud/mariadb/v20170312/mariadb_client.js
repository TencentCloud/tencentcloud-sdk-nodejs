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
const IsolateHourDBInstanceResponse = models.IsolateHourDBInstanceResponse;
const CreateDBInstanceRequest = models.CreateDBInstanceRequest;
const ZonesInfo = models.ZonesInfo;
const DescribeAccountPrivilegesResponse = models.DescribeAccountPrivilegesResponse;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const ParamDesc = models.ParamDesc;
const DescribeDBResourceUsageRequest = models.DescribeDBResourceUsageRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const ProcedurePrivilege = models.ProcedurePrivilege;
const DescribeRenewalPriceResponse = models.DescribeRenewalPriceResponse;
const CreateDedicatedClusterDBInstanceResponse = models.CreateDedicatedClusterDBInstanceResponse;
const DestroyHourDBInstanceRequest = models.DestroyHourDBInstanceRequest;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const DescribeUpgradePriceRequest = models.DescribeUpgradePriceRequest;
const FlushBinlogResponse = models.FlushBinlogResponse;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const CancelDcnJobResponse = models.CancelDcnJobResponse;
const DescribeFileDownloadUrlRequest = models.DescribeFileDownloadUrlRequest;
const DescribeDBResourceUsageDetailsResponse = models.DescribeDBResourceUsageDetailsResponse;
const DescribeDBInstanceSpecsResponse = models.DescribeDBInstanceSpecsResponse;
const DestroyHourDBInstanceResponse = models.DestroyHourDBInstanceResponse;
const Account = models.Account;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const DescribeDBSlowLogsRequest = models.DescribeDBSlowLogsRequest;
const CreateAccountRequest = models.CreateAccountRequest;
const InitDBInstancesResponse = models.InitDBInstancesResponse;
const DescribeLogFileRetentionPeriodRequest = models.DescribeLogFileRetentionPeriodRequest;
const IsolateHourDBInstanceRequest = models.IsolateHourDBInstanceRequest;
const ResourceUsageMonitorSet = models.ResourceUsageMonitorSet;
const ModifyLogFileRetentionPeriodRequest = models.ModifyLogFileRetentionPeriodRequest;
const PerformanceMonitorSet = models.PerformanceMonitorSet;
const DescribeFlowResponse = models.DescribeFlowResponse;
const CloneAccountResponse = models.CloneAccountResponse;
const ZoneChooseInfo = models.ZoneChooseInfo;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const DescribeDBParametersRequest = models.DescribeDBParametersRequest;
const ParamConstraint = models.ParamConstraint;
const ModifyDBInstancesProjectResponse = models.ModifyDBInstancesProjectResponse;
const DBBackupTimeConfig = models.DBBackupTimeConfig;
const ModifyBackupTimeRequest = models.ModifyBackupTimeRequest;
const DatabaseView = models.DatabaseView;
const DescribeDBLogFilesRequest = models.DescribeDBLogFilesRequest;
const DescribeRenewalPriceRequest = models.DescribeRenewalPriceRequest;
const NodeInfo = models.NodeInfo;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const ModifySyncTaskAttributeResponse = models.ModifySyncTaskAttributeResponse;
const DcnDetailItem = models.DcnDetailItem;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const CopyAccountPrivilegesResponse = models.CopyAccountPrivilegesResponse;
const ModifyRealServerAccessStrategyResponse = models.ModifyRealServerAccessStrategyResponse;
const CloneAccountRequest = models.CloneAccountRequest;
const DescribeDatabaseObjectsRequest = models.DescribeDatabaseObjectsRequest;
const SlowLogData = models.SlowLogData;
const ParamModifyResult = models.ParamModifyResult;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const SwitchDBInstanceHAResponse = models.SwitchDBInstanceHAResponse;
const DescribeSaleInfoRequest = models.DescribeSaleInfoRequest;
const RenewDBInstanceRequest = models.RenewDBInstanceRequest;
const CreateTmpInstancesRequest = models.CreateTmpInstancesRequest;
const TablePrivilege = models.TablePrivilege;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const DatabaseFunction = models.DatabaseFunction;
const DescribeSqlLogsRequest = models.DescribeSqlLogsRequest;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const DescribeDBInstanceSpecsRequest = models.DescribeDBInstanceSpecsRequest;
const DescribePriceRequest = models.DescribePriceRequest;
const CreateDBInstanceResponse = models.CreateDBInstanceResponse;
const ModifyRealServerAccessStrategyRequest = models.ModifyRealServerAccessStrategyRequest;
const DescribeBackupTimeRequest = models.DescribeBackupTimeRequest;
const RestartDBInstancesResponse = models.RestartDBInstancesResponse;
const DescribeSaleInfoResponse = models.DescribeSaleInfoResponse;
const DatabaseTable = models.DatabaseTable;
const Deal = models.Deal;
const DescribeDBPerformanceDetailsRequest = models.DescribeDBPerformanceDetailsRequest;
const CreateDedicatedClusterDBInstanceRequest = models.CreateDedicatedClusterDBInstanceRequest;
const SwitchDBInstanceHARequest = models.SwitchDBInstanceHARequest;
const DBParamValue = models.DBParamValue;
const SpecConfigInfo = models.SpecConfigInfo;
const ModifyDBParametersRequest = models.ModifyDBParametersRequest;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DescribeDcnDetailRequest = models.DescribeDcnDetailRequest;
const DescribeFileDownloadUrlResponse = models.DescribeFileDownloadUrlResponse;
const ModifyDBParametersResponse = models.ModifyDBParametersResponse;
const CopyAccountPrivilegesRequest = models.CopyAccountPrivilegesRequest;
const SecurityGroup = models.SecurityGroup;
const DescribeDatabaseTableRequest = models.DescribeDatabaseTableRequest;
const OpenDBExtranetAccessResponse = models.OpenDBExtranetAccessResponse;
const KillSessionRequest = models.KillSessionRequest;
const DescribeDatabaseObjectsResponse = models.DescribeDatabaseObjectsResponse;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const DeleteAccountRequest = models.DeleteAccountRequest;
const TableColumn = models.TableColumn;
const CreateTmpInstancesResponse = models.CreateTmpInstancesResponse;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const SecurityGroupBound = models.SecurityGroupBound;
const ColumnPrivilege = models.ColumnPrivilege;
const ModifySyncTaskAttributeRequest = models.ModifySyncTaskAttributeRequest;
const DescribeUpgradePriceResponse = models.DescribeUpgradePriceResponse;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const DBInstance = models.DBInstance;
const DescribePriceResponse = models.DescribePriceResponse;
const InitDBInstancesRequest = models.InitDBInstancesRequest;
const ModifyAccountPrivilegesResponse = models.ModifyAccountPrivilegesResponse;
const ModifyBackupTimeResponse = models.ModifyBackupTimeResponse;
const Database = models.Database;
const GrantAccountPrivilegesResponse = models.GrantAccountPrivilegesResponse;
const CancelDcnJobRequest = models.CancelDcnJobRequest;
const OpenDBExtranetAccessRequest = models.OpenDBExtranetAccessRequest;
const DatabasePrivilege = models.DatabasePrivilege;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const CloseDBExtranetAccessResponse = models.CloseDBExtranetAccessResponse;
const FunctionPrivilege = models.FunctionPrivilege;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const KillSessionResponse = models.KillSessionResponse;
const GrantAccountPrivilegesRequest = models.GrantAccountPrivilegesRequest;
const DescribeBackupTimeResponse = models.DescribeBackupTimeResponse;
const ActivateHourDBInstanceRequest = models.ActivateHourDBInstanceRequest;
const RenewDBInstanceResponse = models.RenewDBInstanceResponse;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const ViewPrivileges = models.ViewPrivileges;
const DescribeOrdersRequest = models.DescribeOrdersRequest;
const DescribeDBLogFilesResponse = models.DescribeDBLogFilesResponse;
const CloseDBExtranetAccessRequest = models.CloseDBExtranetAccessRequest;
const ResourceTag = models.ResourceTag;
const DescribeSqlLogsResponse = models.DescribeSqlLogsResponse;
const DescribeDcnDetailResponse = models.DescribeDcnDetailResponse;
const InstanceSpec = models.InstanceSpec;
const DescribeFlowRequest = models.DescribeFlowRequest;
const ModifyAccountPrivilegesRequest = models.ModifyAccountPrivilegesRequest;
const DescribeDBPerformanceResponse = models.DescribeDBPerformanceResponse;
const DatabaseProcedure = models.DatabaseProcedure;
const ModifyDBSyncModeRequest = models.ModifyDBSyncModeRequest;
const ActivateHourDBInstanceResponse = models.ActivateHourDBInstanceResponse;
const DescribeInstanceNodeInfoRequest = models.DescribeInstanceNodeInfoRequest;
const CreateHourDBInstanceResponse = models.CreateHourDBInstanceResponse;
const CreateAccountResponse = models.CreateAccountResponse;
const DescribeLogFileRetentionPeriodResponse = models.DescribeLogFileRetentionPeriodResponse;
const RegionInfo = models.RegionInfo;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const ConstraintRange = models.ConstraintRange;
const DescribeDBResourceUsageResponse = models.DescribeDBResourceUsageResponse;
const LogFileInfo = models.LogFileInfo;
const RestartDBInstancesRequest = models.RestartDBInstancesRequest;
const DescribeDBResourceUsageDetailsRequest = models.DescribeDBResourceUsageDetailsRequest;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const DBAccount = models.DBAccount;
const CreateHourDBInstanceRequest = models.CreateHourDBInstanceRequest;
const DescribeDatabaseTableResponse = models.DescribeDatabaseTableResponse;
const DescribeAccountPrivilegesRequest = models.DescribeAccountPrivilegesRequest;
const DescribeDBPerformanceDetailsResponse = models.DescribeDBPerformanceDetailsResponse;
const SqlLogItem = models.SqlLogItem;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const DescribeDBSlowLogsResponse = models.DescribeDBSlowLogsResponse;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;
const DescribeDBParametersResponse = models.DescribeDBParametersResponse;
const ModifyDBInstancesProjectRequest = models.ModifyDBInstancesProjectRequest;
const FlushBinlogRequest = models.FlushBinlogRequest;
const MonitorData = models.MonitorData;
const ModifyDBSyncModeResponse = models.ModifyDBSyncModeResponse;
const DescribeInstanceNodeInfoResponse = models.DescribeInstanceNodeInfoResponse;
const ModifyLogFileRetentionPeriodResponse = models.ModifyLogFileRetentionPeriodResponse;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const DescribeDBPerformanceRequest = models.DescribeDBPerformanceRequest;
const DeleteAccountResponse = models.DeleteAccountResponse;


/**
 * mariadb client
 * @class
 */
class MariadbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mariadb.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    
    /**
     * 本接口（DescribeAccountPrivileges）用于查询云数据库账号权限。
注意：注意：相同用户名，不同Host是不同的账号。
     * @param {DescribeAccountPrivilegesRequest} req
     * @param {function(string, DescribeAccountPrivilegesResponse):void} cb
     * @public
     */
    DescribeAccountPrivileges(req, cb) {
        let resp = new DescribeAccountPrivilegesResponse();
        this.request("DescribeAccountPrivileges", req, resp, cb);
    }

    /**
     * 本接口（DescribeRenewalPrice）用于在续费云数据库实例时，查询续费的价格。
     * @param {DescribeRenewalPriceRequest} req
     * @param {function(string, DescribeRenewalPriceResponse):void} cb
     * @public
     */
    DescribeRenewalPrice(req, cb) {
        let resp = new DescribeRenewalPriceResponse();
        this.request("DescribeRenewalPrice", req, resp, cb);
    }

    /**
     * 创建后付费实例
     * @param {CreateHourDBInstanceRequest} req
     * @param {function(string, CreateHourDBInstanceResponse):void} cb
     * @public
     */
    CreateHourDBInstance(req, cb) {
        let resp = new CreateHourDBInstanceResponse();
        this.request("CreateHourDBInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstanceNodeInfo）用于获取数据库实例主备节点信息
     * @param {DescribeInstanceNodeInfoRequest} req
     * @param {function(string, DescribeInstanceNodeInfoResponse):void} cb
     * @public
     */
    DescribeInstanceNodeInfo(req, cb) {
        let resp = new DescribeInstanceNodeInfoResponse();
        this.request("DescribeInstanceNodeInfo", req, resp, cb);
    }

    /**
     * 本接口（DescribeDatabaseObjects）用于查询云数据库实例的数据库中的对象列表，包含表、存储过程、视图和函数。
     * @param {DescribeDatabaseObjectsRequest} req
     * @param {function(string, DescribeDatabaseObjectsResponse):void} cb
     * @public
     */
    DescribeDatabaseObjects(req, cb) {
        let resp = new DescribeDatabaseObjectsResponse();
        this.request("DescribeDatabaseObjects", req, resp, cb);
    }

    /**
     * 本接口（KillSession）用于杀死指定会话。
     * @param {KillSessionRequest} req
     * @param {function(string, KillSessionResponse):void} cb
     * @public
     */
    KillSession(req, cb) {
        let resp = new KillSessionResponse();
        this.request("KillSession", req, resp, cb);
    }

    /**
     * 本接口（ModifyBackupTime）用于设置云数据库实例的备份时间。后台系统将根据此配置定期进行实例备份。
     * @param {ModifyBackupTimeRequest} req
     * @param {function(string, ModifyBackupTimeResponse):void} cb
     * @public
     */
    ModifyBackupTime(req, cb) {
        let resp = new ModifyBackupTimeResponse();
        this.request("ModifyBackupTime", req, resp, cb);
    }

    /**
     * 本接口(DescribeSaleInfo)用于查询云数据库可售卖的地域和可用区信息。
     * @param {DescribeSaleInfoRequest} req
     * @param {function(string, DescribeSaleInfoResponse):void} cb
     * @public
     */
    DescribeSaleInfo(req, cb) {
        let resp = new DescribeSaleInfoResponse();
        this.request("DescribeSaleInfo", req, resp, cb);
    }

    /**
     * 本接口（ModifyAccountDescription）用于修改云数据库账号备注。
注意：相同用户名，不同Host是不同的账号。
     * @param {ModifyAccountDescriptionRequest} req
     * @param {function(string, ModifyAccountDescriptionResponse):void} cb
     * @public
     */
    ModifyAccountDescription(req, cb) {
        let resp = new ModifyAccountDescriptionResponse();
        this.request("ModifyAccountDescription", req, resp, cb);
    }

    /**
     * 本接口(ModifyRealServerAccessStrategy)用于修改云数据库的VPCGW到RS的访问策略。

**注意**
- 修改策略后只对新建立的连接生效，老连接不受影响
- 就近访问只针对实例是跨可用区部署有用，单可用区部署实例就近与否并无作用
- DB每个Node对应一个proxy，如果开启就近访问，将会把连接集中到对应可用区的proxy上，可能造成热点问题，这种情况下如果是线上业务，请务必根据自己的业务请求量测试符合预期后再进行就近策略变更
     * @param {ModifyRealServerAccessStrategyRequest} req
     * @param {function(string, ModifyRealServerAccessStrategyResponse):void} cb
     * @public
     */
    ModifyRealServerAccessStrategy(req, cb) {
        let resp = new ModifyRealServerAccessStrategyResponse();
        this.request("ModifyRealServerAccessStrategy", req, resp, cb);
    }

    /**
     * 本接口（SwitchDBInstanceHA）用于发起实例主备切换。
     * @param {SwitchDBInstanceHARequest} req
     * @param {function(string, SwitchDBInstanceHAResponse):void} cb
     * @public
     */
    SwitchDBInstanceHA(req, cb) {
        let resp = new SwitchDBInstanceHAResponse();
        this.request("SwitchDBInstanceHA", req, resp, cb);
    }

    /**
     * 本接口(DescribeFileDownloadUrl)用于获取数据库指定备份或日志文件的下载连接。
     * @param {DescribeFileDownloadUrlRequest} req
     * @param {function(string, DescribeFileDownloadUrlResponse):void} cb
     * @public
     */
    DescribeFileDownloadUrl(req, cb) {
        let resp = new DescribeFileDownloadUrlResponse();
        this.request("DescribeFileDownloadUrl", req, resp, cb);
    }

    /**
     * 本接口（DescribeBackupTime）用于获取云数据库的备份时间。后台系统将根据此配置定期进行实例备份。
     * @param {DescribeBackupTimeRequest} req
     * @param {function(string, DescribeBackupTimeResponse):void} cb
     * @public
     */
    DescribeBackupTime(req, cb) {
        let resp = new DescribeBackupTimeResponse();
        this.request("DescribeBackupTime", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBResourceUsageDetails)用于查看数据库实例当前性能数据。
     * @param {DescribeDBResourceUsageDetailsRequest} req
     * @param {function(string, DescribeDBResourceUsageDetailsResponse):void} cb
     * @public
     */
    DescribeDBResourceUsageDetails(req, cb) {
        let resp = new DescribeDBResourceUsageDetailsResponse();
        this.request("DescribeDBResourceUsageDetails", req, resp, cb);
    }

    /**
     * 解隔离后付费实例
     * @param {ActivateHourDBInstanceRequest} req
     * @param {function(string, ActivateHourDBInstanceResponse):void} cb
     * @public
     */
    ActivateHourDBInstance(req, cb) {
        let resp = new ActivateHourDBInstanceResponse();
        this.request("ActivateHourDBInstance", req, resp, cb);
    }

    /**
     * 本接口（ResetAccountPassword）用于重置云数据库账号的密码。
注意：相同用户名，不同Host是不同的账号。
     * @param {ResetAccountPasswordRequest} req
     * @param {function(string, ResetAccountPasswordResponse):void} cb
     * @public
     */
    ResetAccountPassword(req, cb) {
        let resp = new ResetAccountPasswordResponse();
        this.request("ResetAccountPassword", req, resp, cb);
    }

    /**
     * 本接口(ModifyDBParameters)用于修改数据库参数。
     * @param {ModifyDBParametersRequest} req
     * @param {function(string, ModifyDBParametersResponse):void} cb
     * @public
     */
    ModifyDBParameters(req, cb) {
        let resp = new ModifyDBParametersResponse();
        this.request("ModifyDBParameters", req, resp, cb);
    }

    /**
     * 本接口（DescribeSqlLogs）用于获取实例SQL日志。
     * @param {DescribeSqlLogsRequest} req
     * @param {function(string, DescribeSqlLogsResponse):void} cb
     * @public
     */
    DescribeSqlLogs(req, cb) {
        let resp = new DescribeSqlLogsResponse();
        this.request("DescribeSqlLogs", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBPerformanceDetails)用于查看实例性能数据详情。
     * @param {DescribeDBPerformanceDetailsRequest} req
     * @param {function(string, DescribeDBPerformanceDetailsResponse):void} cb
     * @public
     */
    DescribeDBPerformanceDetails(req, cb) {
        let resp = new DescribeDBPerformanceDetailsResponse();
        this.request("DescribeDBPerformanceDetails", req, resp, cb);
    }

    /**
     * 本接口（DescribeFlow）用于查询流程状态。
     * @param {DescribeFlowRequest} req
     * @param {function(string, DescribeFlowResponse):void} cb
     * @public
     */
    DescribeFlow(req, cb) {
        let resp = new DescribeFlowResponse();
        this.request("DescribeFlow", req, resp, cb);
    }

    /**
     * 创建独享集群Mariadb实例
     * @param {CreateDedicatedClusterDBInstanceRequest} req
     * @param {function(string, CreateDedicatedClusterDBInstanceResponse):void} cb
     * @public
     */
    CreateDedicatedClusterDBInstance(req, cb) {
        let resp = new CreateDedicatedClusterDBInstanceResponse();
        this.request("CreateDedicatedClusterDBInstance", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBInstanceName）用于修改云数据库实例的名称。
     * @param {ModifyDBInstanceNameRequest} req
     * @param {function(string, ModifyDBInstanceNameResponse):void} cb
     * @public
     */
    ModifyDBInstanceName(req, cb) {
        let resp = new ModifyDBInstanceNameResponse();
        this.request("ModifyDBInstanceName", req, resp, cb);
    }

    /**
     * 本接口（RestartDBInstances）用于重启数据库实例
     * @param {RestartDBInstancesRequest} req
     * @param {function(string, RestartDBInstancesResponse):void} cb
     * @public
     */
    RestartDBInstances(req, cb) {
        let resp = new RestartDBInstancesResponse();
        this.request("RestartDBInstances", req, resp, cb);
    }

    /**
     * 本接口（DescribeOrders）用于查询云数据库订单信息。传入订单ID来查询订单关联的云数据库实例，和对应的任务流程ID。
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req, cb) {
        let resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
    }

    /**
     * 本接口（DeleteAccount）用于删除云数据库账号。用户名+host唯一确定一个账号。
     * @param {DeleteAccountRequest} req
     * @param {function(string, DeleteAccountResponse):void} cb
     * @public
     */
    DeleteAccount(req, cb) {
        let resp = new DeleteAccountResponse();
        this.request("DeleteAccount", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBParameters)用于获取数据库的当前参数设置。
     * @param {DescribeDBParametersRequest} req
     * @param {function(string, DescribeDBParametersResponse):void} cb
     * @public
     */
    DescribeDBParameters(req, cb) {
        let resp = new DescribeDBParametersResponse();
        this.request("DescribeDBParameters", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBInstancesProject）用于修改云数据库实例所属项目。
     * @param {ModifyDBInstancesProjectRequest} req
     * @param {function(string, ModifyDBInstancesProjectResponse):void} cb
     * @public
     */
    ModifyDBInstancesProject(req, cb) {
        let resp = new ModifyDBInstancesProjectResponse();
        this.request("ModifyDBInstancesProject", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBSlowLogs)用于查询慢查询日志列表。
     * @param {DescribeDBSlowLogsRequest} req
     * @param {function(string, DescribeDBSlowLogsResponse):void} cb
     * @public
     */
    DescribeDBSlowLogs(req, cb) {
        let resp = new DescribeDBSlowLogsResponse();
        this.request("DescribeDBSlowLogs", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBLogFiles)用于获取数据库的各种日志列表，包括冷备、binlog、errlog和slowlog。
     * @param {DescribeDBLogFilesRequest} req
     * @param {function(string, DescribeDBLogFilesResponse):void} cb
     * @public
     */
    DescribeDBLogFiles(req, cb) {
        let resp = new DescribeDBLogFilesResponse();
        this.request("DescribeDBLogFiles", req, resp, cb);
    }

    /**
     * 本接口 (ModifySyncTaskAttribute) 用于修改同步任务的属性（目前只支持修改任务名称）
     * @param {ModifySyncTaskAttributeRequest} req
     * @param {function(string, ModifySyncTaskAttributeResponse):void} cb
     * @public
     */
    ModifySyncTaskAttribute(req, cb) {
        let resp = new ModifySyncTaskAttributeResponse();
        this.request("ModifySyncTaskAttribute", req, resp, cb);
    }

    /**
     * 本接口（DestroyHourDBInstance）用于销毁按量计费实例。
     * @param {DestroyHourDBInstanceRequest} req
     * @param {function(string, DestroyHourDBInstanceResponse):void} cb
     * @public
     */
    DestroyHourDBInstance(req, cb) {
        let resp = new DestroyHourDBInstanceResponse();
        this.request("DestroyHourDBInstance", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBInstanceSpecs)用于查询可创建的云数据库可售卖的规格配置。
     * @param {DescribeDBInstanceSpecsRequest} req
     * @param {function(string, DescribeDBInstanceSpecsResponse):void} cb
     * @public
     */
    DescribeDBInstanceSpecs(req, cb) {
        let resp = new DescribeDBInstanceSpecsResponse();
        this.request("DescribeDBInstanceSpecs", req, resp, cb);
    }

    /**
     * 本接口（DescribeDBInstances）用于查询云数据库实例列表，支持通过项目ID、实例ID、内网地址、实例名称等来筛选实例。
如果不指定任何筛选条件，则默认返回20条实例记录，单次请求最多支持返回100条实例记录。
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        let resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }

    /**
     * 本接口（RenewDBInstance）用于续费云数据库实例。
     * @param {RenewDBInstanceRequest} req
     * @param {function(string, RenewDBInstanceResponse):void} cb
     * @public
     */
    RenewDBInstance(req, cb) {
        let resp = new RenewDBInstanceResponse();
        this.request("RenewDBInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeUpgradePrice）用于在扩容云数据库实例时，查询变配的价格。
     * @param {DescribeUpgradePriceRequest} req
     * @param {function(string, DescribeUpgradePriceResponse):void} cb
     * @public
     */
    DescribeUpgradePrice(req, cb) {
        let resp = new DescribeUpgradePriceResponse();
        this.request("DescribeUpgradePrice", req, resp, cb);
    }

    /**
     * 本接口（DescribeProjectSecurityGroups）用于查询项目安全组信息
     * @param {DescribeProjectSecurityGroupsRequest} req
     * @param {function(string, DescribeProjectSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeProjectSecurityGroups(req, cb) {
        let resp = new DescribeProjectSecurityGroupsResponse();
        this.request("DescribeProjectSecurityGroups", req, resp, cb);
    }

    /**
     * 本接口 (AssociateSecurityGroups) 用于安全组批量绑定云资源。
     * @param {AssociateSecurityGroupsRequest} req
     * @param {function(string, AssociateSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateSecurityGroups(req, cb) {
        let resp = new AssociateSecurityGroupsResponse();
        this.request("AssociateSecurityGroups", req, resp, cb);
    }

    /**
     * 本接口（CreateAccount）用于创建云数据库账号。一个实例可以创建多个不同的账号，相同的用户名+不同的host是不同的账号。
     * @param {CreateAccountRequest} req
     * @param {function(string, CreateAccountResponse):void} cb
     * @public
     */
    CreateAccount(req, cb) {
        let resp = new CreateAccountResponse();
        this.request("CreateAccount", req, resp, cb);
    }

    /**
     * 本接口（OpenDBExtranetAccess）用于开通云数据库实例的外网访问。开通外网访问后，您可通过外网域名和端口访问实例，可使用查询实例列表接口获取外网域名和端口信息。
     * @param {OpenDBExtranetAccessRequest} req
     * @param {function(string, OpenDBExtranetAccessResponse):void} cb
     * @public
     */
    OpenDBExtranetAccess(req, cb) {
        let resp = new OpenDBExtranetAccessResponse();
        this.request("OpenDBExtranetAccess", req, resp, cb);
    }

    /**
     * 本接口(InitDBInstances)用于初始化云数据库实例，包括设置默认字符集、表名大小写敏感等。
     * @param {InitDBInstancesRequest} req
     * @param {function(string, InitDBInstancesResponse):void} cb
     * @public
     */
    InitDBInstances(req, cb) {
        let resp = new InitDBInstancesResponse();
        this.request("InitDBInstances", req, resp, cb);
    }

    /**
     * 本接口（CreateDBInstance）用于创建包年包月的云数据库实例，可通过传入实例规格、数据库版本号、购买时长和数量等信息创建云数据库实例。
     * @param {CreateDBInstanceRequest} req
     * @param {function(string, CreateDBInstanceResponse):void} cb
     * @public
     */
    CreateDBInstance(req, cb) {
        let resp = new CreateDBInstanceResponse();
        this.request("CreateDBInstance", req, resp, cb);
    }

    /**
     * 本接口(ModifyAccountPrivileges)用于修改云数据库的账户的权限信息。

**注意**
- 系统保留库："mysql"，只开放["SELECT"]权限
- 只读账号授予读写权限会报错
- 不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组
     * @param {ModifyAccountPrivilegesRequest} req
     * @param {function(string, ModifyAccountPrivilegesResponse):void} cb
     * @public
     */
    ModifyAccountPrivileges(req, cb) {
        let resp = new ModifyAccountPrivilegesResponse();
        this.request("ModifyAccountPrivileges", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBInstanceSecurityGroups）用于修改云数据库安全组
     * @param {ModifyDBInstanceSecurityGroupsRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroups(req, cb) {
        let resp = new ModifyDBInstanceSecurityGroupsResponse();
        this.request("ModifyDBInstanceSecurityGroups", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBSyncMode）用于修改云数据库实例的同步模式。
     * @param {ModifyDBSyncModeRequest} req
     * @param {function(string, ModifyDBSyncModeResponse):void} cb
     * @public
     */
    ModifyDBSyncMode(req, cb) {
        let resp = new ModifyDBSyncModeResponse();
        this.request("ModifyDBSyncMode", req, resp, cb);
    }

    /**
     * 本接口(CloseDBExtranetAccess)用于关闭云数据库实例的外网访问。关闭外网访问后，外网地址将不可访问，查询实例列表接口将不返回对应实例的外网域名和端口信息。
     * @param {CloseDBExtranetAccessRequest} req
     * @param {function(string, CloseDBExtranetAccessResponse):void} cb
     * @public
     */
    CloseDBExtranetAccess(req, cb) {
        let resp = new CloseDBExtranetAccessResponse();
        this.request("CloseDBExtranetAccess", req, resp, cb);
    }

    /**
     * 本接口（CreateTmpInstances）用于创建临时实例。
     * @param {CreateTmpInstancesRequest} req
     * @param {function(string, CreateTmpInstancesResponse):void} cb
     * @public
     */
    CreateTmpInstances(req, cb) {
        let resp = new CreateTmpInstancesResponse();
        this.request("CreateTmpInstances", req, resp, cb);
    }

    /**
     * 本接口（DescribeAccounts）用于查询指定云数据库实例的账号列表。
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * 获取实例灾备详情
     * @param {DescribeDcnDetailRequest} req
     * @param {function(string, DescribeDcnDetailResponse):void} cb
     * @public
     */
    DescribeDcnDetail(req, cb) {
        let resp = new DescribeDcnDetailResponse();
        this.request("DescribeDcnDetail", req, resp, cb);
    }

    /**
     * 相当于在mysqld中执行flush logs，完成切分的binlog将展示在实例控制台binlog列表里。
     * @param {FlushBinlogRequest} req
     * @param {function(string, FlushBinlogResponse):void} cb
     * @public
     */
    FlushBinlog(req, cb) {
        let resp = new FlushBinlogResponse();
        this.request("FlushBinlog", req, resp, cb);
    }

    /**
     * 本接口（GrantAccountPrivileges）用于给云数据库账号赋权。
注意：相同用户名，不同Host是不同的账号。
     * @param {GrantAccountPrivilegesRequest} req
     * @param {function(string, GrantAccountPrivilegesResponse):void} cb
     * @public
     */
    GrantAccountPrivileges(req, cb) {
        let resp = new GrantAccountPrivilegesResponse();
        this.request("GrantAccountPrivileges", req, resp, cb);
    }

    /**
     * 本接口（CopyAccountPrivileges）用于复制云数据库账号的权限。
注意：相同用户名，不同Host是不同的账号，Readonly属性相同的账号之间才能复制权限。
     * @param {CopyAccountPrivilegesRequest} req
     * @param {function(string, CopyAccountPrivilegesResponse):void} cb
     * @public
     */
    CopyAccountPrivileges(req, cb) {
        let resp = new CopyAccountPrivilegesResponse();
        this.request("CopyAccountPrivileges", req, resp, cb);
    }

    /**
     * 隔离后付费实例
     * @param {IsolateHourDBInstanceRequest} req
     * @param {function(string, IsolateHourDBInstanceResponse):void} cb
     * @public
     */
    IsolateHourDBInstance(req, cb) {
        let resp = new IsolateHourDBInstanceResponse();
        this.request("IsolateHourDBInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeDatabases）用于查询云数据库实例的数据库列表。
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        let resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }

    /**
     * 本接口（DescribePrice）用于在购买实例前，查询实例的价格。
     * @param {DescribePriceRequest} req
     * @param {function(string, DescribePriceResponse):void} cb
     * @public
     */
    DescribePrice(req, cb) {
        let resp = new DescribePriceResponse();
        this.request("DescribePrice", req, resp, cb);
    }

    /**
     * 本接口（DescribeDBSecurityGroups）用于查询实例安全组信息
     * @param {DescribeDBSecurityGroupsRequest} req
     * @param {function(string, DescribeDBSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeDBSecurityGroups(req, cb) {
        let resp = new DescribeDBSecurityGroupsResponse();
        this.request("DescribeDBSecurityGroups", req, resp, cb);
    }

    /**
     * 本接口（DescribeDatabaseTable）用于查询云数据库实例的表信息。
     * @param {DescribeDatabaseTableRequest} req
     * @param {function(string, DescribeDatabaseTableResponse):void} cb
     * @public
     */
    DescribeDatabaseTable(req, cb) {
        let resp = new DescribeDatabaseTableResponse();
        this.request("DescribeDatabaseTable", req, resp, cb);
    }

    /**
     * 取消DCN同步
     * @param {CancelDcnJobRequest} req
     * @param {function(string, CancelDcnJobResponse):void} cb
     * @public
     */
    CancelDcnJob(req, cb) {
        let resp = new CancelDcnJobResponse();
        this.request("CancelDcnJob", req, resp, cb);
    }

    /**
     * 本接口（CloneAccount）用于克隆实例账户。
     * @param {CloneAccountRequest} req
     * @param {function(string, CloneAccountResponse):void} cb
     * @public
     */
    CloneAccount(req, cb) {
        let resp = new CloneAccountResponse();
        this.request("CloneAccount", req, resp, cb);
    }

    /**
     * 本接口(UpgradeDBInstance)用于扩容云数据库实例。本接口完成下单和支付两个动作，如果发生支付失败的错误，调用用户账户相关接口中的支付订单接口（PayDeals）重新支付即可。
     * @param {UpgradeDBInstanceRequest} req
     * @param {function(string, UpgradeDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDBInstance(req, cb) {
        let resp = new UpgradeDBInstanceResponse();
        this.request("UpgradeDBInstance", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBPerformance)用于查看数据库实例当前性能数据。
     * @param {DescribeDBPerformanceRequest} req
     * @param {function(string, DescribeDBPerformanceResponse):void} cb
     * @public
     */
    DescribeDBPerformance(req, cb) {
        let resp = new DescribeDBPerformanceResponse();
        this.request("DescribeDBPerformance", req, resp, cb);
    }

    /**
     * 本接口(DescribeLogFileRetentionPeriod)用于查看数据库备份日志的备份天数的设置情况。
     * @param {DescribeLogFileRetentionPeriodRequest} req
     * @param {function(string, DescribeLogFileRetentionPeriodResponse):void} cb
     * @public
     */
    DescribeLogFileRetentionPeriod(req, cb) {
        let resp = new DescribeLogFileRetentionPeriodResponse();
        this.request("DescribeLogFileRetentionPeriod", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBResourceUsage)用于查看数据库实例资源的使用情况。
     * @param {DescribeDBResourceUsageRequest} req
     * @param {function(string, DescribeDBResourceUsageResponse):void} cb
     * @public
     */
    DescribeDBResourceUsage(req, cb) {
        let resp = new DescribeDBResourceUsageResponse();
        this.request("DescribeDBResourceUsage", req, resp, cb);
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
     * 本接口(ModifyLogFileRetentionPeriod)用于修改数据库备份日志保存天数。
     * @param {ModifyLogFileRetentionPeriodRequest} req
     * @param {function(string, ModifyLogFileRetentionPeriodResponse):void} cb
     * @public
     */
    ModifyLogFileRetentionPeriod(req, cb) {
        let resp = new ModifyLogFileRetentionPeriodResponse();
        this.request("ModifyLogFileRetentionPeriod", req, resp, cb);
    }


}
module.exports = MariadbClient;
