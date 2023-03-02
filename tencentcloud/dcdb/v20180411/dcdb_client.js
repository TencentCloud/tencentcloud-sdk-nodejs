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
const DescribeUserTasksResponse = models.DescribeUserTasksResponse;
const InitDCDBInstancesResponse = models.InitDCDBInstancesResponse;
const UpgradeDCDBInstanceResponse = models.UpgradeDCDBInstanceResponse;
const DescribeAccountPrivilegesResponse = models.DescribeAccountPrivilegesResponse;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const ParamDesc = models.ParamDesc;
const DestroyDCDBInstanceResponse = models.DestroyDCDBInstanceResponse;
const DescribeDBParametersRequest = models.DescribeDBParametersRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const SpecConfig = models.SpecConfig;
const UpgradeHourDCDBInstanceResponse = models.UpgradeHourDCDBInstanceResponse;
const ModifyRealServerAccessStrategyResponse = models.ModifyRealServerAccessStrategyResponse;
const ActiveHourDCDBInstanceResponse = models.ActiveHourDCDBInstanceResponse;
const DescribeDCDBPriceResponse = models.DescribeDCDBPriceResponse;
const ModifyInstanceVportResponse = models.ModifyInstanceVportResponse;
const ModifyInstanceVipResponse = models.ModifyInstanceVipResponse;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const TerminateDedicatedDBInstanceResponse = models.TerminateDedicatedDBInstanceResponse;
const FlushBinlogResponse = models.FlushBinlogResponse;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const CancelDcnJobResponse = models.CancelDcnJobResponse;
const DescribeFileDownloadUrlRequest = models.DescribeFileDownloadUrlRequest;
const DescribeDBSyncModeResponse = models.DescribeDBSyncModeResponse;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const DescribeDCDBUpgradePriceResponse = models.DescribeDCDBUpgradePriceResponse;
const DescribeDBSlowLogsRequest = models.DescribeDBSlowLogsRequest;
const CreateAccountRequest = models.CreateAccountRequest;
const DescribeDBParametersResponse = models.DescribeDBParametersResponse;
const IsolateHourDCDBInstanceRequest = models.IsolateHourDCDBInstanceRequest;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const DescribeFlowResponse = models.DescribeFlowResponse;
const UpgradeHourDCDBInstanceRequest = models.UpgradeHourDCDBInstanceRequest;
const CloneAccountResponse = models.CloneAccountResponse;
const IsolateDedicatedDBInstanceRequest = models.IsolateDedicatedDBInstanceRequest;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const DestroyDCDBInstanceRequest = models.DestroyDCDBInstanceRequest;
const OpenDBExtranetAccessResponse = models.OpenDBExtranetAccessResponse;
const CreateDCDBInstanceResponse = models.CreateDCDBInstanceResponse;
const BriefNodeInfo = models.BriefNodeInfo;
const ModifyDBInstancesProjectResponse = models.ModifyDBInstancesProjectResponse;
const ModifyDBEncryptAttributesResponse = models.ModifyDBEncryptAttributesResponse;
const DescribeDCDBInstanceNodeInfoRequest = models.DescribeDCDBInstanceNodeInfoRequest;
const DatabaseView = models.DatabaseView;
const DescribeDBLogFilesRequest = models.DescribeDBLogFilesRequest;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const CreateHourDCDBInstanceRequest = models.CreateHourDCDBInstanceRequest;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const CopyAccountPrivilegesResponse = models.CopyAccountPrivilegesResponse;
const CloneAccountRequest = models.CloneAccountRequest;
const DescribeDCDBRenewalPriceRequest = models.DescribeDCDBRenewalPriceRequest;
const ModifyInstanceNetworkResponse = models.ModifyInstanceNetworkResponse;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const DatabaseProcedure = models.DatabaseProcedure;
const DescribeDCDBPriceRequest = models.DescribeDCDBPriceRequest;
const SwitchDBInstanceHAResponse = models.SwitchDBInstanceHAResponse;
const ParamModifyResult = models.ParamModifyResult;
const TablePrivilege = models.TablePrivilege;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const DatabaseFunction = models.DatabaseFunction;
const DescribeSqlLogsRequest = models.DescribeSqlLogsRequest;
const ParamConstraint = models.ParamConstraint;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const DescribeDCDBSaleInfoRequest = models.DescribeDCDBSaleInfoRequest;
const ModifyRealServerAccessStrategyRequest = models.ModifyRealServerAccessStrategyRequest;
const ExpandShardConfig = models.ExpandShardConfig;
const RenewDCDBInstanceRequest = models.RenewDCDBInstanceRequest;
const ShardZoneChooseInfo = models.ShardZoneChooseInfo;
const DatabaseTable = models.DatabaseTable;
const Deal = models.Deal;
const GrantAccountPrivilegesRequest = models.GrantAccountPrivilegesRequest;
const DescribeShardSpecRequest = models.DescribeShardSpecRequest;
const DescribeDCDBShardsRequest = models.DescribeDCDBShardsRequest;
const SwitchDBInstanceHARequest = models.SwitchDBInstanceHARequest;
const DBParamValue = models.DBParamValue;
const SpecConfigInfo = models.SpecConfigInfo;
const ModifyDBParametersRequest = models.ModifyDBParametersRequest;
const DCDBInstanceInfo = models.DCDBInstanceInfo;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DescribeDcnDetailRequest = models.DescribeDcnDetailRequest;
const DescribeFileDownloadUrlResponse = models.DescribeFileDownloadUrlResponse;
const ModifyDBParametersResponse = models.ModifyDBParametersResponse;
const DCDBShardInfo = models.DCDBShardInfo;
const CopyAccountPrivilegesRequest = models.CopyAccountPrivilegesRequest;
const SecurityGroup = models.SecurityGroup;
const DescribeDatabaseTableRequest = models.DescribeDatabaseTableRequest;
const DescribeDCDBInstanceNodeInfoResponse = models.DescribeDCDBInstanceNodeInfoResponse;
const KillSessionRequest = models.KillSessionRequest;
const TerminateDedicatedDBInstanceRequest = models.TerminateDedicatedDBInstanceRequest;
const DescribeDatabaseObjectsResponse = models.DescribeDatabaseObjectsResponse;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const DescribeDcnDetailResponse = models.DescribeDcnDetailResponse;
const TableColumn = models.TableColumn;
const SecurityGroupBound = models.SecurityGroupBound;
const ColumnPrivilege = models.ColumnPrivilege;
const SplitShardConfig = models.SplitShardConfig;
const RenewDCDBInstanceResponse = models.RenewDCDBInstanceResponse;
const DescribeShardSpecResponse = models.DescribeShardSpecResponse;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const DescribeDCDBRenewalPriceResponse = models.DescribeDCDBRenewalPriceResponse;
const DescribeDCDBShardsResponse = models.DescribeDCDBShardsResponse;
const ZonesInfo = models.ZonesInfo;
const CreateHourDCDBInstanceResponse = models.CreateHourDCDBInstanceResponse;
const Database = models.Database;
const GrantAccountPrivilegesResponse = models.GrantAccountPrivilegesResponse;
const CancelDcnJobRequest = models.CancelDcnJobRequest;
const IsolateHourDCDBInstanceResponse = models.IsolateHourDCDBInstanceResponse;
const ShardInfo = models.ShardInfo;
const ModifyInstanceVipRequest = models.ModifyInstanceVipRequest;
const OpenDBExtranetAccessRequest = models.OpenDBExtranetAccessRequest;
const DatabasePrivilege = models.DatabasePrivilege;
const DescribeDCDBSaleInfoResponse = models.DescribeDCDBSaleInfoResponse;
const ModifyDBInstancesProjectRequest = models.ModifyDBInstancesProjectRequest;
const DcnDetailItem = models.DcnDetailItem;
const DescribeDBSyncModeRequest = models.DescribeDBSyncModeRequest;
const CloseDBExtranetAccessResponse = models.CloseDBExtranetAccessResponse;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const KillSessionResponse = models.KillSessionResponse;
const SlowLogData = models.SlowLogData;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const ViewPrivileges = models.ViewPrivileges;
const DescribeOrdersRequest = models.DescribeOrdersRequest;
const DescribeDBLogFilesResponse = models.DescribeDBLogFilesResponse;
const CloseDBExtranetAccessRequest = models.CloseDBExtranetAccessRequest;
const InitDCDBInstancesRequest = models.InitDCDBInstancesRequest;
const ResourceTag = models.ResourceTag;
const DescribeSqlLogsResponse = models.DescribeSqlLogsResponse;
const DeleteAccountRequest = models.DeleteAccountRequest;
const DescribeDCDBInstancesResponse = models.DescribeDCDBInstancesResponse;
const ModifyAccountPrivilegesResponse = models.ModifyAccountPrivilegesResponse;
const DescribeFlowRequest = models.DescribeFlowRequest;
const ModifyAccountPrivilegesRequest = models.ModifyAccountPrivilegesRequest;
const Account = models.Account;
const CreateDCDBInstanceRequest = models.CreateDCDBInstanceRequest;
const DescribeDCDBUpgradePriceRequest = models.DescribeDCDBUpgradePriceRequest;
const UserTaskInfo = models.UserTaskInfo;
const DescribeProjectsRequest = models.DescribeProjectsRequest;
const AddShardConfig = models.AddShardConfig;
const ModifyDBSyncModeRequest = models.ModifyDBSyncModeRequest;
const DescribeProjectsResponse = models.DescribeProjectsResponse;
const ModifyDBEncryptAttributesRequest = models.ModifyDBEncryptAttributesRequest;
const CreateAccountResponse = models.CreateAccountResponse;
const IsolateDedicatedDBInstanceResponse = models.IsolateDedicatedDBInstanceResponse;
const RegionInfo = models.RegionInfo;
const DescribeDatabaseObjectsRequest = models.DescribeDatabaseObjectsRequest;
const UpgradeDCDBInstanceRequest = models.UpgradeDCDBInstanceRequest;
const ModifyInstanceNetworkRequest = models.ModifyInstanceNetworkRequest;
const DestroyHourDCDBInstanceResponse = models.DestroyHourDCDBInstanceResponse;
const ConstraintRange = models.ConstraintRange;
const LogFileInfo = models.LogFileInfo;
const ActiveHourDCDBInstanceRequest = models.ActiveHourDCDBInstanceRequest;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const DBAccount = models.DBAccount;
const DescribeDatabaseTableResponse = models.DescribeDatabaseTableResponse;
const DescribeAccountPrivilegesRequest = models.DescribeAccountPrivilegesRequest;
const SqlLogItem = models.SqlLogItem;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const DescribeDBSlowLogsResponse = models.DescribeDBSlowLogsResponse;
const DescribeDCDBInstancesRequest = models.DescribeDCDBInstancesRequest;
const Project = models.Project;
const ModifyInstanceVportRequest = models.ModifyInstanceVportRequest;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const DestroyHourDCDBInstanceRequest = models.DestroyHourDCDBInstanceRequest;
const FlushBinlogRequest = models.FlushBinlogRequest;
const ModifyDBSyncModeResponse = models.ModifyDBSyncModeResponse;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const DescribeUserTasksRequest = models.DescribeUserTasksRequest;
const DeleteAccountResponse = models.DeleteAccountResponse;


/**
 * dcdb client
 * @class
 */
class DcdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dcdb.tencentcloudapi.com", "2018-04-11", credential, region, profile);
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
     * 解隔离DCDB后付费实例
     * @param {ActiveHourDCDBInstanceRequest} req
     * @param {function(string, ActiveHourDCDBInstanceResponse):void} cb
     * @public
     */
    ActiveHourDCDBInstance(req, cb) {
        let resp = new ActiveHourDCDBInstanceResponse();
        this.request("ActiveHourDCDBInstance", req, resp, cb);
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
     * 查询可创建的分布式数据库可售卖的分片规格配置。
     * @param {DescribeShardSpecRequest} req
     * @param {function(string, DescribeShardSpecResponse):void} cb
     * @public
     */
    DescribeShardSpec(req, cb) {
        let resp = new DescribeShardSpecResponse();
        this.request("DescribeShardSpec", req, resp, cb);
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
     * 查询云数据库实例列表，支持通过项目ID、实例ID、内网地址、实例名称等来筛选实例。
如果不指定任何筛选条件，则默认返回10条实例记录，单次请求最多支持返回100条实例记录。
     * @param {DescribeDCDBInstancesRequest} req
     * @param {function(string, DescribeDCDBInstancesResponse):void} cb
     * @public
     */
    DescribeDCDBInstances(req, cb) {
        let resp = new DescribeDCDBInstancesResponse();
        this.request("DescribeDCDBInstances", req, resp, cb);
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
     * 本接口（DescribeUserTasks）用于拉取用户任务列表
     * @param {DescribeUserTasksRequest} req
     * @param {function(string, DescribeUserTasksResponse):void} cb
     * @public
     */
    DescribeUserTasks(req, cb) {
        let resp = new DescribeUserTasksResponse();
        this.request("DescribeUserTasks", req, resp, cb);
    }

    /**
     * 本接口（DescribeDCDBPrice）用于在购买实例前，查询实例的价格。
     * @param {DescribeDCDBPriceRequest} req
     * @param {function(string, DescribeDCDBPriceResponse):void} cb
     * @public
     */
    DescribeDCDBPrice(req, cb) {
        let resp = new DescribeDCDBPriceResponse();
        this.request("DescribeDCDBPrice", req, resp, cb);
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
     * 本接口(DescribeDCDBSaleInfo)用于查询分布式数据库可售卖的地域和可用区信息。
     * @param {DescribeDCDBSaleInfoRequest} req
     * @param {function(string, DescribeDCDBSaleInfoResponse):void} cb
     * @public
     */
    DescribeDCDBSaleInfo(req, cb) {
        let resp = new DescribeDCDBSaleInfoResponse();
        this.request("DescribeDCDBSaleInfo", req, resp, cb);
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
     * 本接口（DescribeFlow）用于查询流程状态
     * @param {DescribeFlowRequest} req
     * @param {function(string, DescribeFlowResponse):void} cb
     * @public
     */
    DescribeFlow(req, cb) {
        let resp = new DescribeFlowResponse();
        this.request("DescribeFlow", req, resp, cb);
    }

    /**
     * 本接口(SwitchDBInstanceHA)用于实例主备切换。
     * @param {SwitchDBInstanceHARequest} req
     * @param {function(string, SwitchDBInstanceHAResponse):void} cb
     * @public
     */
    SwitchDBInstanceHA(req, cb) {
        let resp = new SwitchDBInstanceHAResponse();
        this.request("SwitchDBInstanceHA", req, resp, cb);
    }

    /**
     * 本接口(InitDCDBInstances)用于初始化云数据库实例，包括设置默认字符集、表名大小写敏感等。
     * @param {InitDCDBInstancesRequest} req
     * @param {function(string, InitDCDBInstancesResponse):void} cb
     * @public
     */
    InitDCDBInstances(req, cb) {
        let resp = new InitDCDBInstancesResponse();
        this.request("InitDCDBInstances", req, resp, cb);
    }

    /**
     * 本接口（IsolateDedicatedDBInstance）用于隔离独享云数据库实例。
     * @param {IsolateDedicatedDBInstanceRequest} req
     * @param {function(string, IsolateDedicatedDBInstanceResponse):void} cb
     * @public
     */
    IsolateDedicatedDBInstance(req, cb) {
        let resp = new IsolateDedicatedDBInstanceResponse();
        this.request("IsolateDedicatedDBInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeOrders）用于查询分布式数据库订单信息。传入订单ID来查询订单关联的分布式数据库实例，和对应的任务流程ID。
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req, cb) {
        let resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
    }

    /**
     * 本接口（RenewDCDBInstance）用于续费分布式数据库实例。
     * @param {RenewDCDBInstanceRequest} req
     * @param {function(string, RenewDCDBInstanceResponse):void} cb
     * @public
     */
    RenewDCDBInstance(req, cb) {
        let resp = new RenewDCDBInstanceResponse();
        this.request("RenewDCDBInstance", req, resp, cb);
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
     * 本接口（ModifyInstanceVip）用于修改实例Vip
     * @param {ModifyInstanceVipRequest} req
     * @param {function(string, ModifyInstanceVipResponse):void} cb
     * @public
     */
    ModifyInstanceVip(req, cb) {
        let resp = new ModifyInstanceVipResponse();
        this.request("ModifyInstanceVip", req, resp, cb);
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
     * 隔离DCDB后付费实例
     * @param {IsolateHourDCDBInstanceRequest} req
     * @param {function(string, IsolateHourDCDBInstanceResponse):void} cb
     * @public
     */
    IsolateHourDCDBInstance(req, cb) {
        let resp = new IsolateHourDCDBInstanceResponse();
        this.request("IsolateHourDCDBInstance", req, resp, cb);
    }

    /**
     * 本接口（UpgradeHourDCDBInstance）用于升级后付费分布式数据库实例。
     * @param {UpgradeHourDCDBInstanceRequest} req
     * @param {function(string, UpgradeHourDCDBInstanceResponse):void} cb
     * @public
     */
    UpgradeHourDCDBInstance(req, cb) {
        let resp = new UpgradeHourDCDBInstanceResponse();
        this.request("UpgradeHourDCDBInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeDBSyncMode）用于查询云数据库实例的同步模式。
     * @param {DescribeDBSyncModeRequest} req
     * @param {function(string, DescribeDBSyncModeResponse):void} cb
     * @public
     */
    DescribeDBSyncMode(req, cb) {
        let resp = new DescribeDBSyncModeResponse();
        this.request("DescribeDBSyncMode", req, resp, cb);
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
     * 本接口（ModifyInstanceNetwork）用于修改实例所属网络。
     * @param {ModifyInstanceNetworkRequest} req
     * @param {function(string, ModifyInstanceNetworkResponse):void} cb
     * @public
     */
    ModifyInstanceNetwork(req, cb) {
        let resp = new ModifyInstanceNetworkResponse();
        this.request("ModifyInstanceNetwork", req, resp, cb);
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
     * 本接口(DestroyDCDBInstance)用于销毁已隔离的包年包月实例。
     * @param {DestroyDCDBInstanceRequest} req
     * @param {function(string, DestroyDCDBInstanceResponse):void} cb
     * @public
     */
    DestroyDCDBInstance(req, cb) {
        let resp = new DestroyDCDBInstanceResponse();
        this.request("DestroyDCDBInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeDCDBInstanceNodeInfo）用于获取实例节点信息
     * @param {DescribeDCDBInstanceNodeInfoRequest} req
     * @param {function(string, DescribeDCDBInstanceNodeInfoResponse):void} cb
     * @public
     */
    DescribeDCDBInstanceNodeInfo(req, cb) {
        let resp = new DescribeDCDBInstanceNodeInfoResponse();
        this.request("DescribeDCDBInstanceNodeInfo", req, resp, cb);
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
     * 本接口（DescribeProjects）用于查询项目列表
     * @param {DescribeProjectsRequest} req
     * @param {function(string, DescribeProjectsResponse):void} cb
     * @public
     */
    DescribeProjects(req, cb) {
        let resp = new DescribeProjectsResponse();
        this.request("DescribeProjects", req, resp, cb);
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
     * 本接口(ModifyDBEncryptAttributes)用于修改实例数据加密。
     * @param {ModifyDBEncryptAttributesRequest} req
     * @param {function(string, ModifyDBEncryptAttributesResponse):void} cb
     * @public
     */
    ModifyDBEncryptAttributes(req, cb) {
        let resp = new ModifyDBEncryptAttributesResponse();
        this.request("ModifyDBEncryptAttributes", req, resp, cb);
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
     * 相当于在所有分片的mysqld中执行flush logs，完成切分的binlog将展示在各个分片控制台binlog列表里。
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
     * 本接口（DescribeDCDBShards）用于查询云数据库实例的分片信息。
     * @param {DescribeDCDBShardsRequest} req
     * @param {function(string, DescribeDCDBShardsResponse):void} cb
     * @public
     */
    DescribeDCDBShards(req, cb) {
        let resp = new DescribeDCDBShardsResponse();
        this.request("DescribeDCDBShards", req, resp, cb);
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
     * 本接口（CreateDCDBInstance）用于创建包年包月的云数据库实例，可通过传入实例规格、数据库版本号、购买时长等信息创建云数据库实例。
     * @param {CreateDCDBInstanceRequest} req
     * @param {function(string, CreateDCDBInstanceResponse):void} cb
     * @public
     */
    CreateDCDBInstance(req, cb) {
        let resp = new CreateDCDBInstanceResponse();
        this.request("CreateDCDBInstance", req, resp, cb);
    }

    /**
     * 本接口（DestroyHourDCDBInstance）用于销毁按量计费实例。
     * @param {DestroyHourDCDBInstanceRequest} req
     * @param {function(string, DestroyHourDCDBInstanceResponse):void} cb
     * @public
     */
    DestroyHourDCDBInstance(req, cb) {
        let resp = new DestroyHourDCDBInstanceResponse();
        this.request("DestroyHourDCDBInstance", req, resp, cb);
    }

    /**
     * 本接口（ModifyInstanceVport）用于修改实例VPORT
     * @param {ModifyInstanceVportRequest} req
     * @param {function(string, ModifyInstanceVportResponse):void} cb
     * @public
     */
    ModifyInstanceVport(req, cb) {
        let resp = new ModifyInstanceVportResponse();
        this.request("ModifyInstanceVport", req, resp, cb);
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
     * 本接口（DescribeDCDBUpgradePrice）用于查询变配分布式数据库实例价格。
     * @param {DescribeDCDBUpgradePriceRequest} req
     * @param {function(string, DescribeDCDBUpgradePriceResponse):void} cb
     * @public
     */
    DescribeDCDBUpgradePrice(req, cb) {
        let resp = new DescribeDCDBUpgradePriceResponse();
        this.request("DescribeDCDBUpgradePrice", req, resp, cb);
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
     * 本接口（TerminateDedicatedDBInstance）用于销毁已隔离的独享分布式数据库实例。
     * @param {TerminateDedicatedDBInstanceRequest} req
     * @param {function(string, TerminateDedicatedDBInstanceResponse):void} cb
     * @public
     */
    TerminateDedicatedDBInstance(req, cb) {
        let resp = new TerminateDedicatedDBInstanceResponse();
        this.request("TerminateDedicatedDBInstance", req, resp, cb);
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
     * 本接口（ModifyDBInstanceName）用于修改实例名字
     * @param {ModifyDBInstanceNameRequest} req
     * @param {function(string, ModifyDBInstanceNameResponse):void} cb
     * @public
     */
    ModifyDBInstanceName(req, cb) {
        let resp = new ModifyDBInstanceNameResponse();
        this.request("ModifyDBInstanceName", req, resp, cb);
    }

    /**
     * 创建DCDB后付费实例
     * @param {CreateHourDCDBInstanceRequest} req
     * @param {function(string, CreateHourDCDBInstanceResponse):void} cb
     * @public
     */
    CreateHourDCDBInstance(req, cb) {
        let resp = new CreateHourDCDBInstanceResponse();
        this.request("CreateHourDCDBInstance", req, resp, cb);
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
     * 本接口（UpgradeDCDBInstance）用于升级分布式数据库实例。本接口完成下单和支付两个动作，如果发生支付失败的错误，调用用户账户相关接口中的支付订单接口（PayDeals）重新支付即可。
     * @param {UpgradeDCDBInstanceRequest} req
     * @param {function(string, UpgradeDCDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDCDBInstance(req, cb) {
        let resp = new UpgradeDCDBInstanceResponse();
        this.request("UpgradeDCDBInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeDCDBRenewalPrice）用于在续费分布式数据库实例时，查询续费的价格。
     * @param {DescribeDCDBRenewalPriceRequest} req
     * @param {function(string, DescribeDCDBRenewalPriceResponse):void} cb
     * @public
     */
    DescribeDCDBRenewalPrice(req, cb) {
        let resp = new DescribeDCDBRenewalPriceResponse();
        this.request("DescribeDCDBRenewalPrice", req, resp, cb);
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


}
module.exports = DcdbClient;
