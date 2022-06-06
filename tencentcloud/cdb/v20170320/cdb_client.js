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
const SellType = models.SellType;
const TaskDetail = models.TaskDetail;
const CreateDBImportJobRequest = models.CreateDBImportJobRequest;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const RWInfo = models.RWInfo;
const InstanceRollbackRangeTime = models.InstanceRollbackRangeTime;
const DescribeTablesResponse = models.DescribeTablesResponse;
const ApplyCDBProxyResponse = models.ApplyCDBProxyResponse;
const ModifyBackupDownloadRestrictionResponse = models.ModifyBackupDownloadRestrictionResponse;
const ModifyTimeWindowResponse = models.ModifyTimeWindowResponse;
const ParamRecord = models.ParamRecord;
const ModifyTimeWindowRequest = models.ModifyTimeWindowRequest;
const DescribeRollbackRangeTimeRequest = models.DescribeRollbackRangeTimeRequest;
const DescribeBackupOverviewRequest = models.DescribeBackupOverviewRequest;
const ModifyDBInstanceProjectResponse = models.ModifyDBInstanceProjectResponse;
const DescribeDataBackupOverviewResponse = models.DescribeDataBackupOverviewResponse;
const DeleteAuditPolicyRequest = models.DeleteAuditPolicyRequest;
const BackupSummaryItem = models.BackupSummaryItem;
const ModifyInstanceParamRequest = models.ModifyInstanceParamRequest;
const CreateParamTemplateRequest = models.CreateParamTemplateRequest;
const RWInstanceInfo = models.RWInstanceInfo;
const DescribeParamTemplateInfoRequest = models.DescribeParamTemplateInfoRequest;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const TableName = models.TableName;
const DeleteAccountsResponse = models.DeleteAccountsResponse;
const SlowLogInfo = models.SlowLogInfo;
const CloseWanServiceRequest = models.CloseWanServiceRequest;
const DescribeAuditConfigRequest = models.DescribeAuditConfigRequest;
const CreateRoInstanceIpResponse = models.CreateRoInstanceIpResponse;
const CreateAuditPolicyResponse = models.CreateAuditPolicyResponse;
const DescribeInstanceParamRecordsRequest = models.DescribeInstanceParamRecordsRequest;
const StopRollbackResponse = models.StopRollbackResponse;
const StopReplicationResponse = models.StopReplicationResponse;
const DatabaseName = models.DatabaseName;
const DescribeInstanceParamsRequest = models.DescribeInstanceParamsRequest;
const DescribeRoMinScaleResponse = models.DescribeRoMinScaleResponse;
const StopDBImportJobResponse = models.StopDBImportJobResponse;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const TagInfoUnit = models.TagInfoUnit;
const ModifyAuditRuleResponse = models.ModifyAuditRuleResponse;
const DescribeAuditRulesRequest = models.DescribeAuditRulesRequest;
const UpgradeDBInstanceEngineVersionResponse = models.UpgradeDBInstanceEngineVersionResponse;
const ErrlogItem = models.ErrlogItem;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const ModifyCDBProxyDescRequest = models.ModifyCDBProxyDescRequest;
const BackupConfig = models.BackupConfig;
const DescribeCDBProxyResponse = models.DescribeCDBProxyResponse;
const UpgradeCDBProxyResponse = models.UpgradeCDBProxyResponse;
const Rule = models.Rule;
const AuditPolicy = models.AuditPolicy;
const DescribeBackupTablesRequest = models.DescribeBackupTablesRequest;
const DescribeTablesRequest = models.DescribeTablesRequest;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const ModifyParamTemplateRequest = models.ModifyParamTemplateRequest;
const StartReplicationResponse = models.StartReplicationResponse;
const ZoneSellConf = models.ZoneSellConf;
const ModifyCDBProxyVipVPortRequest = models.ModifyCDBProxyVipVPortRequest;
const DescribeBinlogBackupOverviewResponse = models.DescribeBinlogBackupOverviewResponse;
const InitDBInstancesRequest = models.InitDBInstancesRequest;
const SwitchDBInstanceMasterSlaveRequest = models.SwitchDBInstanceMasterSlaveRequest;
const ModifyCDBProxyConnectionPoolRequest = models.ModifyCDBProxyConnectionPoolRequest;
const ModifyAutoRenewFlagRequest = models.ModifyAutoRenewFlagRequest;
const DeleteDeployGroupsRequest = models.DeleteDeployGroupsRequest;
const DescribeAuditConfigResponse = models.DescribeAuditConfigResponse;
const ModifyBackupConfigResponse = models.ModifyBackupConfigResponse;
const OpenWanServiceRequest = models.OpenWanServiceRequest;
const DeleteAuditPolicyResponse = models.DeleteAuditPolicyResponse;
const InitDBInstancesResponse = models.InitDBInstancesResponse;
const DescribeParamTemplateInfoResponse = models.DescribeParamTemplateInfoResponse;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const UploadInfo = models.UploadInfo;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const ModifyLocalBinlogConfigRequest = models.ModifyLocalBinlogConfigRequest;
const StartBatchRollbackResponse = models.StartBatchRollbackResponse;
const ModifyAccountHostResponse = models.ModifyAccountHostResponse;
const DescribeRollbackRangeTimeResponse = models.DescribeRollbackRangeTimeResponse;
const ModifyRoGroupInfoRequest = models.ModifyRoGroupInfoRequest;
const ReleaseResult = models.ReleaseResult;
const ProxyGroups = models.ProxyGroups;
const AuditRule = models.AuditRule;
const RegionSellConf = models.RegionSellConf;
const RollbackDBName = models.RollbackDBName;
const CreateAuditRuleResponse = models.CreateAuditRuleResponse;
const DescribeDBInstanceInfoResponse = models.DescribeDBInstanceInfoResponse;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const ApplyCDBProxyRequest = models.ApplyCDBProxyRequest;
const ModifyAuditRuleRequest = models.ModifyAuditRuleRequest;
const DescribeBinlogsResponse = models.DescribeBinlogsResponse;
const DescribeRoMinScaleRequest = models.DescribeRoMinScaleRequest;
const DescribeDefaultParamsRequest = models.DescribeDefaultParamsRequest;
const Address = models.Address;
const CustomConfig = models.CustomConfig;
const SwitchDBInstanceMasterSlaveResponse = models.SwitchDBInstanceMasterSlaveResponse;
const DescribeBackupsRequest = models.DescribeBackupsRequest;
const DescribeInstanceParamRecordsResponse = models.DescribeInstanceParamRecordsResponse;
const DescribeDBInstanceGTIDResponse = models.DescribeDBInstanceGTIDResponse;
const DeleteParamTemplateRequest = models.DeleteParamTemplateRequest;
const DrInfo = models.DrInfo;
const DescribeBinlogsRequest = models.DescribeBinlogsRequest;
const ModifyBackupDownloadRestrictionRequest = models.ModifyBackupDownloadRestrictionRequest;
const CreateParamTemplateResponse = models.CreateParamTemplateResponse;
const ModifyAccountPasswordResponse = models.ModifyAccountPasswordResponse;
const ReleaseIsolatedDBInstancesRequest = models.ReleaseIsolatedDBInstancesRequest;
const BinlogInfo = models.BinlogInfo;
const DescribeErrorLogDataResponse = models.DescribeErrorLogDataResponse;
const AddTimeWindowRequest = models.AddTimeWindowRequest;
const ImportRecord = models.ImportRecord;
const DeleteAuditLogFileResponse = models.DeleteAuditLogFileResponse;
const Parameter = models.Parameter;
const SlaveInfo = models.SlaveInfo;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const DescribeDBSwitchRecordsResponse = models.DescribeDBSwitchRecordsResponse;
const ModifyCDBProxyConnectionPoolResponse = models.ModifyCDBProxyConnectionPoolResponse;
const Tag = models.Tag;
const CreateAuditLogFileResponse = models.CreateAuditLogFileResponse;
const ModifyInstanceTagResponse = models.ModifyInstanceTagResponse;
const DescribeDBSwitchRecordsRequest = models.DescribeDBSwitchRecordsRequest;
const DescribeSupportedPrivilegesRequest = models.DescribeSupportedPrivilegesRequest;
const DescribeAsyncRequestInfoResponse = models.DescribeAsyncRequestInfoResponse;
const DescribeRoGroupsRequest = models.DescribeRoGroupsRequest;
const ParamTemplateInfo = models.ParamTemplateInfo;
const DeleteTimeWindowResponse = models.DeleteTimeWindowResponse;
const DescribeBackupsResponse = models.DescribeBackupsResponse;
const CreateAuditPolicyRequest = models.CreateAuditPolicyRequest;
const CreateRoInstanceIpRequest = models.CreateRoInstanceIpRequest;
const DescribeTimeWindowResponse = models.DescribeTimeWindowResponse;
const DescribeBackupConfigResponse = models.DescribeBackupConfigResponse;
const DescribeParamTemplatesResponse = models.DescribeParamTemplatesResponse;
const ZoneConf = models.ZoneConf;
const SlaveInstanceInfo = models.SlaveInstanceInfo;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const StopReplicationRequest = models.StopReplicationRequest;
const CreateCloneInstanceResponse = models.CreateCloneInstanceResponse;
const DeviceCpuInfo = models.DeviceCpuInfo;
const DescribeAsyncRequestInfoRequest = models.DescribeAsyncRequestInfoRequest;
const BalanceRoGroupLoadRequest = models.BalanceRoGroupLoadRequest;
const QueryCDBProxyRequest = models.QueryCDBProxyRequest;
const DescribeBackupOverviewResponse = models.DescribeBackupOverviewResponse;
const DescribeLocalBinlogConfigRequest = models.DescribeLocalBinlogConfigRequest;
const QueryCDBProxyResponse = models.QueryCDBProxyResponse;
const DescribeDeviceMonitorInfoRequest = models.DescribeDeviceMonitorInfoRequest;
const SwitchDrInstanceToMasterResponse = models.SwitchDrInstanceToMasterResponse;
const DescribeDBInstanceConfigResponse = models.DescribeDBInstanceConfigResponse;
const SlaveConfig = models.SlaveConfig;
const ModifyAccountPrivilegesResponse = models.ModifyAccountPrivilegesResponse;
const StopRollbackRequest = models.StopRollbackRequest;
const DescribeDeviceMonitorInfoResponse = models.DescribeDeviceMonitorInfoResponse;
const TagsInfoOfInstance = models.TagsInfoOfInstance;
const ResetRootAccountRequest = models.ResetRootAccountRequest;
const DescribeDBInstanceConfigRequest = models.DescribeDBInstanceConfigRequest;
const DescribeProxyCustomConfResponse = models.DescribeProxyCustomConfResponse;
const ModifyAuditConfigResponse = models.ModifyAuditConfigResponse;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const VerifyRootAccountRequest = models.VerifyRootAccountRequest;
const PoolConf = models.PoolConf;
const DescribeCloneListResponse = models.DescribeCloneListResponse;
const StartBatchRollbackRequest = models.StartBatchRollbackRequest;
const DescribeDBInstanceCharsetRequest = models.DescribeDBInstanceCharsetRequest;
const DeviceMemInfo = models.DeviceMemInfo;
const UpgradeDBInstanceEngineVersionRequest = models.UpgradeDBInstanceEngineVersionRequest;
const SlowLogItem = models.SlowLogItem;
const TagInfo = models.TagInfo;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const ModifyCDBProxyResponse = models.ModifyCDBProxyResponse;
const DescribeBackupDownloadRestrictionRequest = models.DescribeBackupDownloadRestrictionRequest;
const CreateDeployGroupRequest = models.CreateDeployGroupRequest;
const DeleteAccountsRequest = models.DeleteAccountsRequest;
const ReloadBalanceProxyNodeRequest = models.ReloadBalanceProxyNodeRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const RollbackTimeRange = models.RollbackTimeRange;
const DescribeAuditLogFilesRequest = models.DescribeAuditLogFilesRequest;
const ModifyBackupConfigRequest = models.ModifyBackupConfigRequest;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const DeployGroupInfo = models.DeployGroupInfo;
const LocalBinlogConfig = models.LocalBinlogConfig;
const InquiryPriceUpgradeInstancesResponse = models.InquiryPriceUpgradeInstancesResponse;
const CreateDBInstanceRequest = models.CreateDBInstanceRequest;
const DescribeProxyConnectionPoolConfRequest = models.DescribeProxyConnectionPoolConfRequest;
const DescribeParamTemplatesRequest = models.DescribeParamTemplatesRequest;
const DescribeAccountPrivilegesResponse = models.DescribeAccountPrivilegesResponse;
const DescribeBackupConfigRequest = models.DescribeBackupConfigRequest;
const RoVipInfo = models.RoVipInfo;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const DescribeErrorLogDataRequest = models.DescribeErrorLogDataRequest;
const DescribeAuditLogFilesResponse = models.DescribeAuditLogFilesResponse;
const DescribeDBInstanceRebootTimeRequest = models.DescribeDBInstanceRebootTimeRequest;
const Inbound = models.Inbound;
const CreateAccountsResponse = models.CreateAccountsResponse;
const CreateDeployGroupResponse = models.CreateDeployGroupResponse;
const SellConfig = models.SellConfig;
const MasterInfo = models.MasterInfo;
const ResetRootAccountResponse = models.ResetRootAccountResponse;
const ProxyNodeInfo = models.ProxyNodeInfo;
const Account = models.Account;
const ModifyNameOrDescByDpIdResponse = models.ModifyNameOrDescByDpIdResponse;
const DescribeDBPriceResponse = models.DescribeDBPriceResponse;
const AuditLogFilter = models.AuditLogFilter;
const ConnectionPoolInfo = models.ConnectionPoolInfo;
const OpenDBInstanceGTIDResponse = models.OpenDBInstanceGTIDResponse;
const VerifyRootAccountResponse = models.VerifyRootAccountResponse;
const DescribeDBInstanceRebootTimeResponse = models.DescribeDBInstanceRebootTimeResponse;
const SwitchDrInstanceToMasterRequest = models.SwitchDrInstanceToMasterRequest;
const RoGroup = models.RoGroup;
const ParameterDetail = models.ParameterDetail;
const ModifyCDBProxyVipVPortResponse = models.ModifyCDBProxyVipVPortResponse;
const SwitchForUpgradeRequest = models.SwitchForUpgradeRequest;
const CreateDBInstanceHourResponse = models.CreateDBInstanceHourResponse;
const DescribeBackupDownloadRestrictionResponse = models.DescribeBackupDownloadRestrictionResponse;
const DatabasesWithCharacterLists = models.DatabasesWithCharacterLists;
const CloneItem = models.CloneItem;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const CreateAccountsRequest = models.CreateAccountsRequest;
const DescribeDeployGroupListRequest = models.DescribeDeployGroupListRequest;
const BackupInfo = models.BackupInfo;
const CloseWanServiceResponse = models.CloseWanServiceResponse;
const RoWeight = models.RoWeight;
const RenewDBInstanceRequest = models.RenewDBInstanceRequest;
const RollbackTableName = models.RollbackTableName;
const ModifyLocalBinlogConfigResponse = models.ModifyLocalBinlogConfigResponse;
const DescribeCloneListRequest = models.DescribeCloneListRequest;
const ModifyInstanceTagRequest = models.ModifyInstanceTagRequest;
const ModifyAutoRenewFlagResponse = models.ModifyAutoRenewFlagResponse;
const RollbackTask = models.RollbackTask;
const ReloadBalanceProxyNodeResponse = models.ReloadBalanceProxyNodeResponse;
const DescribeTimeWindowRequest = models.DescribeTimeWindowRequest;
const DescribeDBImportRecordsResponse = models.DescribeDBImportRecordsResponse;
const DescribeBackupDatabasesResponse = models.DescribeBackupDatabasesResponse;
const BackupItem = models.BackupItem;
const AuditFilter = models.AuditFilter;
const DescribeRollbackTaskDetailRequest = models.DescribeRollbackTaskDetailRequest;
const DescribeBackupTablesResponse = models.DescribeBackupTablesResponse;
const ModifyParamTemplateResponse = models.ModifyParamTemplateResponse;
const BalanceRoGroupLoadResponse = models.BalanceRoGroupLoadResponse;
const DeviceNetInfo = models.DeviceNetInfo;
const ModifyDBInstanceVipVportResponse = models.ModifyDBInstanceVipVportResponse;
const DescribeUploadedFilesRequest = models.DescribeUploadedFilesRequest;
const InstanceInfo = models.InstanceInfo;
const DescribeDefaultParamsResponse = models.DescribeDefaultParamsResponse;
const SwitchCDBProxyRequest = models.SwitchCDBProxyRequest;
const DescribeTagsOfInstanceIdsResponse = models.DescribeTagsOfInstanceIdsResponse;
const DescribeDeployGroupListResponse = models.DescribeDeployGroupListResponse;
const OfflineIsolatedInstancesResponse = models.OfflineIsolatedInstancesResponse;
const DatabasePrivilege = models.DatabasePrivilege;
const DescribeAuditPoliciesRequest = models.DescribeAuditPoliciesRequest;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const DescribeRoGroupsResponse = models.DescribeRoGroupsResponse;
const DescribeAuditRulesResponse = models.DescribeAuditRulesResponse;
const RoInstanceInfo = models.RoInstanceInfo;
const ModifyAccountHostRequest = models.ModifyAccountHostRequest;
const CreateAuditLogFileRequest = models.CreateAuditLogFileRequest;
const CreateAuditRuleRequest = models.CreateAuditRuleRequest;
const DeviceCpuRateInfo = models.DeviceCpuRateInfo;
const ModifyAccountPrivilegesRequest = models.ModifyAccountPrivilegesRequest;
const CreateBackupRequest = models.CreateBackupRequest;
const AccountInfo = models.AccountInfo;
const ModifyCDBProxyDescResponse = models.ModifyCDBProxyDescResponse;
const ModifyDBInstanceVipVportRequest = models.ModifyDBInstanceVipVportRequest;
const DescribeDBImportRecordsRequest = models.DescribeDBImportRecordsRequest;
const CreateDBImportJobResponse = models.CreateDBImportJobResponse;
const DescribeTagsOfInstanceIdsRequest = models.DescribeTagsOfInstanceIdsRequest;
const RWInfos = models.RWInfos;
const CloseCDBProxyResponse = models.CloseCDBProxyResponse;
const DescribeDataBackupOverviewRequest = models.DescribeDataBackupOverviewRequest;
const DescribeDBInstanceInfoRequest = models.DescribeDBInstanceInfoRequest;
const BackupLimitVpcItem = models.BackupLimitVpcItem;
const DescribeDBZoneConfigResponse = models.DescribeDBZoneConfigResponse;
const ModifyDBInstanceProjectRequest = models.ModifyDBInstanceProjectRequest;
const SwitchForUpgradeResponse = models.SwitchForUpgradeResponse;
const DescribeCDBProxyRequest = models.DescribeCDBProxyRequest;
const DescribeAccountPrivilegesRequest = models.DescribeAccountPrivilegesRequest;
const DescribeSupportedPrivilegesResponse = models.DescribeSupportedPrivilegesResponse;
const StopDBImportJobRequest = models.StopDBImportJobRequest;
const DescribeLocalBinlogConfigResponse = models.DescribeLocalBinlogConfigResponse;
const OpenWanServiceResponse = models.OpenWanServiceResponse;
const DescribeDBInstanceGTIDRequest = models.DescribeDBInstanceGTIDRequest;
const ModifyCDBProxyRequest = models.ModifyCDBProxyRequest;
const ModifyAuditConfigRequest = models.ModifyAuditConfigRequest;
const DeviceDiskInfo = models.DeviceDiskInfo;
const RoWeightValue = models.RoWeightValue;
const DescribeSlowLogDataResponse = models.DescribeSlowLogDataResponse;
const RestartDBInstancesResponse = models.RestartDBInstancesResponse;
const DescribeSlowLogsRequest = models.DescribeSlowLogsRequest;
const TagInfoItem = models.TagInfoItem;
const DescribeProxyCustomConfRequest = models.DescribeProxyCustomConfRequest;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const ModifyRoGroupInfoResponse = models.ModifyRoGroupInfoResponse;
const DeleteAuditRuleRequest = models.DeleteAuditRuleRequest;
const DeleteParamTemplateResponse = models.DeleteParamTemplateResponse;
const DBSwitchInfo = models.DBSwitchInfo;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DescribeAuditPoliciesResponse = models.DescribeAuditPoliciesResponse;
const IsolateDBInstanceResponse = models.IsolateDBInstanceResponse;
const DescribeDBZoneConfigRequest = models.DescribeDBZoneConfigRequest;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const CommonTimeWindow = models.CommonTimeWindow;
const ModifyAccountMaxUserConnectionsRequest = models.ModifyAccountMaxUserConnectionsRequest;
const ProxyGroup = models.ProxyGroup;
const DeleteDeployGroupsResponse = models.DeleteDeployGroupsResponse;
const DescribeTasksRequest = models.DescribeTasksRequest;
const DescribeRollbackTaskDetailResponse = models.DescribeRollbackTaskDetailResponse;
const CreateDBInstanceHourRequest = models.CreateDBInstanceHourRequest;
const RollbackInstancesInfo = models.RollbackInstancesInfo;
const CreateCloneInstanceRequest = models.CreateCloneInstanceRequest;
const CloseCDBProxyRequest = models.CloseCDBProxyRequest;
const DeleteBackupResponse = models.DeleteBackupResponse;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const DescribeBackupSummariesRequest = models.DescribeBackupSummariesRequest;
const CreateDBInstanceResponse = models.CreateDBInstanceResponse;
const StartReplicationRequest = models.StartReplicationRequest;
const DescribeDBInstanceCharsetResponse = models.DescribeDBInstanceCharsetResponse;
const UpgradeCDBProxyRequest = models.UpgradeCDBProxyRequest;
const DescribeBackupSummariesResponse = models.DescribeBackupSummariesResponse;
const DescribeBinlogBackupOverviewRequest = models.DescribeBinlogBackupOverviewRequest;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const ModifyAccountMaxUserConnectionsResponse = models.ModifyAccountMaxUserConnectionsResponse;
const Outbound = models.Outbound;
const ParamInfo = models.ParamInfo;
const SecurityGroup = models.SecurityGroup;
const DescribeProxyConnectionPoolConfResponse = models.DescribeProxyConnectionPoolConfResponse;
const OfflineIsolatedInstancesRequest = models.OfflineIsolatedInstancesRequest;
const InquiryPriceUpgradeInstancesRequest = models.InquiryPriceUpgradeInstancesRequest;
const ModifyInstanceParamResponse = models.ModifyInstanceParamResponse;
const ColumnPrivilege = models.ColumnPrivilege;
const DescribeUploadedFilesResponse = models.DescribeUploadedFilesResponse;
const DescribeDBPriceRequest = models.DescribeDBPriceRequest;
const CreateBackupResponse = models.CreateBackupResponse;
const OpenDBInstanceGTIDRequest = models.OpenDBInstanceGTIDRequest;
const SqlFileInfo = models.SqlFileInfo;
const RoGroupAttr = models.RoGroupAttr;
const UpgradeCDBProxyVersionResponse = models.UpgradeCDBProxyVersionResponse;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const ModifyAccountPasswordRequest = models.ModifyAccountPasswordRequest;
const InstanceRebootTime = models.InstanceRebootTime;
const RenewDBInstanceResponse = models.RenewDBInstanceResponse;
const TablePrivilege = models.TablePrivilege;
const AddTimeWindowResponse = models.AddTimeWindowResponse;
const BaseGroupInfo = models.BaseGroupInfo;
const DeleteAuditRuleResponse = models.DeleteAuditRuleResponse;
const IsolateDBInstanceRequest = models.IsolateDBInstanceRequest;
const AuditLogFile = models.AuditLogFile;
const RollbackTables = models.RollbackTables;
const DescribeBackupDatabasesRequest = models.DescribeBackupDatabasesRequest;
const LocalBinlogConfigDefault = models.LocalBinlogConfigDefault;
const DescribeSlowLogDataRequest = models.DescribeSlowLogDataRequest;
const ReleaseIsolatedDBInstancesResponse = models.ReleaseIsolatedDBInstancesResponse;
const DeleteAuditLogFileRequest = models.DeleteAuditLogFileRequest;
const DescribeSlowLogsResponse = models.DescribeSlowLogsResponse;
const DeleteTimeWindowRequest = models.DeleteTimeWindowRequest;
const SwitchCDBProxyResponse = models.SwitchCDBProxyResponse;
const RestartDBInstancesRequest = models.RestartDBInstancesRequest;
const DeleteBackupRequest = models.DeleteBackupRequest;
const ModifyNameOrDescByDpIdRequest = models.ModifyNameOrDescByDpIdRequest;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;
const UpgradeCDBProxyVersionRequest = models.UpgradeCDBProxyVersionRequest;


/**
 * cdb client
 * @class
 */
class CdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cdb.tencentcloudapi.com", "2017-03-20", credential, region, profile);
    }
    
    /**
     * 本接口(DescribeDBInstanceGTID)用于查询云数据库实例是否开通了 GTID，不支持版本为 5.5 以及以下的实例。
     * @param {DescribeDBInstanceGTIDRequest} req
     * @param {function(string, DescribeDBInstanceGTIDResponse):void} cb
     * @public
     */
    DescribeDBInstanceGTID(req, cb) {
        let resp = new DescribeDBInstanceGTIDResponse();
        this.request("DescribeDBInstanceGTID", req, resp, cb);
    }

    /**
     * 本接口(CreateRoInstanceIp)用于创建云数据库只读实例的独立VIP。
     * @param {CreateRoInstanceIpRequest} req
     * @param {function(string, CreateRoInstanceIpResponse):void} cb
     * @public
     */
    CreateRoInstanceIp(req, cb) {
        let resp = new CreateRoInstanceIpResponse();
        this.request("CreateRoInstanceIp", req, resp, cb);
    }

    /**
     * 本接口(DescribeTimeWindow)用于查询云数据库实例的维护时间窗口。
     * @param {DescribeTimeWindowRequest} req
     * @param {function(string, DescribeTimeWindowResponse):void} cb
     * @public
     */
    DescribeTimeWindow(req, cb) {
        let resp = new DescribeTimeWindowResponse();
        this.request("DescribeTimeWindow", req, resp, cb);
    }

    /**
     * 本接口(DescribeDataBackupOverview)用于查询用户在当前地域总的数据备份概览。
     * @param {DescribeDataBackupOverviewRequest} req
     * @param {function(string, DescribeDataBackupOverviewResponse):void} cb
     * @public
     */
    DescribeDataBackupOverview(req, cb) {
        let resp = new DescribeDataBackupOverviewResponse();
        this.request("DescribeDataBackupOverview", req, resp, cb);
    }

    /**
     * 本接口(BalanceRoGroupLoad)用于重新均衡 RO 组内实例的负载。注意，RO 组内 RO 实例会有一次数据库连接瞬断，请确保应用程序能重连数据库，谨慎操作。
     * @param {BalanceRoGroupLoadRequest} req
     * @param {function(string, BalanceRoGroupLoadResponse):void} cb
     * @public
     */
    BalanceRoGroupLoad(req, cb) {
        let resp = new BalanceRoGroupLoadResponse();
        this.request("BalanceRoGroupLoad", req, resp, cb);
    }

    /**
     * 本接口(IsolateDBInstance)用于隔离云数据库实例，隔离后不能通过IP和端口访问数据库。隔离的实例可在回收站中进行开机。若为欠费隔离，请尽快进行充值。
     * @param {IsolateDBInstanceRequest} req
     * @param {function(string, IsolateDBInstanceResponse):void} cb
     * @public
     */
    IsolateDBInstance(req, cb) {
        let resp = new IsolateDBInstanceResponse();
        this.request("IsolateDBInstance", req, resp, cb);
    }

    /**
     * 本接口(RestartDBInstances)用于重启云数据库实例。

注意：
1、本接口只支持主实例进行重启操作；
2、实例状态必须为正常，并且没有其他异步任务在执行中。
     * @param {RestartDBInstancesRequest} req
     * @param {function(string, RestartDBInstancesResponse):void} cb
     * @public
     */
    RestartDBInstances(req, cb) {
        let resp = new RestartDBInstancesResponse();
        this.request("RestartDBInstances", req, resp, cb);
    }

    /**
     * 本接口(ModifyInstanceTag)用于对实例标签进行添加、修改或者删除。
     * @param {ModifyInstanceTagRequest} req
     * @param {function(string, ModifyInstanceTagResponse):void} cb
     * @public
     */
    ModifyInstanceTag(req, cb) {
        let resp = new ModifyInstanceTagResponse();
        this.request("ModifyInstanceTag", req, resp, cb);
    }

    /**
     * 本接口(CreateAuditPolicy)用于创建云数据库实例的审计策略，即将审计规则绑定到具体的云数据库实例上。
     * @param {CreateAuditPolicyRequest} req
     * @param {function(string, CreateAuditPolicyResponse):void} cb
     * @public
     */
    CreateAuditPolicy(req, cb) {
        let resp = new CreateAuditPolicyResponse();
        this.request("CreateAuditPolicy", req, resp, cb);
    }

    /**
     * 本接口(DescribeBackupOverview)用于查询用户的备份概览。返回用户当前备份总个数、备份总的占用容量、赠送的免费容量、计费容量（容量单位为字节）。
     * @param {DescribeBackupOverviewRequest} req
     * @param {function(string, DescribeBackupOverviewResponse):void} cb
     * @public
     */
    DescribeBackupOverview(req, cb) {
        let resp = new DescribeBackupOverviewResponse();
        this.request("DescribeBackupOverview", req, resp, cb);
    }

    /**
     * 停止 RO 复制，中断从主实例同步数据。
     * @param {StopReplicationRequest} req
     * @param {function(string, StopReplicationResponse):void} cb
     * @public
     */
    StopReplication(req, cb) {
        let resp = new StopReplicationResponse();
        this.request("StopReplication", req, resp, cb);
    }

    /**
     * 本接口(ModifyDBInstanceName)用于修改云数据库实例的名称。
     * @param {ModifyDBInstanceNameRequest} req
     * @param {function(string, ModifyDBInstanceNameResponse):void} cb
     * @public
     */
    ModifyDBInstanceName(req, cb) {
        let resp = new ModifyDBInstanceNameResponse();
        this.request("ModifyDBInstanceName", req, resp, cb);
    }

    /**
     * 本接口(StopRollback) 用于撤销实例正在进行的回档任务，该接口返回一个异步任务id。 撤销结果可以通过 DescribeAsyncRequestInfo 查询任务的执行情况。
     * @param {StopRollbackRequest} req
     * @param {function(string, StopRollbackResponse):void} cb
     * @public
     */
    StopRollback(req, cb) {
        let resp = new StopRollbackResponse();
        this.request("StopRollback", req, resp, cb);
    }

    /**
     * 本接口(OfflineIsolatedInstances)用于立即下线隔离状态的云数据库实例。进行操作的实例状态必须为隔离状态，即通过 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询到 Status 值为 5 的实例。

该接口为异步操作，部分资源的回收可能存在延迟。您可以通过使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口，指定实例 InstanceId 和状态 Status 为 [5,6,7] 进行查询，若返回实例为空，则实例资源已全部释放。

注意，实例下线后，相关资源和数据将无法找回，请谨慎操作。
     * @param {OfflineIsolatedInstancesRequest} req
     * @param {function(string, OfflineIsolatedInstancesResponse):void} cb
     * @public
     */
    OfflineIsolatedInstances(req, cb) {
        let resp = new OfflineIsolatedInstancesResponse();
        this.request("OfflineIsolatedInstances", req, resp, cb);
    }

    /**
     * 本接口(CreateAuditLogFile)用于创建云数据库实例的审计日志文件。
     * @param {CreateAuditLogFileRequest} req
     * @param {function(string, CreateAuditLogFileResponse):void} cb
     * @public
     */
    CreateAuditLogFile(req, cb) {
        let resp = new CreateAuditLogFileResponse();
        this.request("CreateAuditLogFile", req, resp, cb);
    }

    /**
     * 本接口(OpenDBInstanceGTID)用于开启云数据库实例的 GTID，只支持版本为 5.6 以及以上的实例。
     * @param {OpenDBInstanceGTIDRequest} req
     * @param {function(string, OpenDBInstanceGTIDResponse):void} cb
     * @public
     */
    OpenDBInstanceGTID(req, cb) {
        let resp = new OpenDBInstanceGTIDResponse();
        this.request("OpenDBInstanceGTID", req, resp, cb);
    }

    /**
     * 修改数据库代理描述
     * @param {ModifyCDBProxyDescRequest} req
     * @param {function(string, ModifyCDBProxyDescResponse):void} cb
     * @public
     */
    ModifyCDBProxyDesc(req, cb) {
        let resp = new ModifyCDBProxyDescResponse();
        this.request("ModifyCDBProxyDesc", req, resp, cb);
    }

    /**
     * 本接口(DescribeRollbackTaskDetail)用于查询云数据库实例回档任务详情。
     * @param {DescribeRollbackTaskDetailRequest} req
     * @param {function(string, DescribeRollbackTaskDetailResponse):void} cb
     * @public
     */
    DescribeRollbackTaskDetail(req, cb) {
        let resp = new DescribeRollbackTaskDetailResponse();
        this.request("DescribeRollbackTaskDetail", req, resp, cb);
    }

    /**
     * 该接口用于修改用户当前地域的备份文件限制下载来源，可以设置内外网均可下载、仅内网可下载，或内网指定的vpc、ip可以下载。
     * @param {ModifyBackupDownloadRestrictionRequest} req
     * @param {function(string, ModifyBackupDownloadRestrictionResponse):void} cb
     * @public
     */
    ModifyBackupDownloadRestriction(req, cb) {
        let resp = new ModifyBackupDownloadRestrictionResponse();
        this.request("ModifyBackupDownloadRestriction", req, resp, cb);
    }

    /**
     * 本接口(DescribeTasks)用于查询云数据库实例任务列表。
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * 本接口(DescribeBackupConfig)用于查询数据库备份配置信息。
     * @param {DescribeBackupConfigRequest} req
     * @param {function(string, DescribeBackupConfigResponse):void} cb
     * @public
     */
    DescribeBackupConfig(req, cb) {
        let resp = new DescribeBackupConfigResponse();
        this.request("DescribeBackupConfig", req, resp, cb);
    }

    /**
     * 本接口(CloseWanService)用于关闭云数据库实例的外网访问。关闭外网访问后，外网地址将不可访问。
     * @param {CloseWanServiceRequest} req
     * @param {function(string, CloseWanServiceResponse):void} cb
     * @public
     */
    CloseWanService(req, cb) {
        let resp = new CloseWanServiceResponse();
        this.request("CloseWanService", req, resp, cb);
    }

    /**
     * 该接口（DescribeDefaultParams）用于查询默认的可设置参数列表。
     * @param {DescribeDefaultParamsRequest} req
     * @param {function(string, DescribeDefaultParamsResponse):void} cb
     * @public
     */
    DescribeDefaultParams(req, cb) {
        let resp = new DescribeDefaultParamsResponse();
        this.request("DescribeDefaultParams", req, resp, cb);
    }

    /**
     * 本接口(DescribeAuditPolicies)用于查询云数据库实例的审计策略。
     * @param {DescribeAuditPoliciesRequest} req
     * @param {function(string, DescribeAuditPoliciesResponse):void} cb
     * @public
     */
    DescribeAuditPolicies(req, cb) {
        let resp = new DescribeAuditPoliciesResponse();
        this.request("DescribeAuditPolicies", req, resp, cb);
    }

    /**
     * 本接口(DescribeTagsOfInstanceIds)用于获取云数据库实例的标签信息。
     * @param {DescribeTagsOfInstanceIdsRequest} req
     * @param {function(string, DescribeTagsOfInstanceIdsResponse):void} cb
     * @public
     */
    DescribeTagsOfInstanceIds(req, cb) {
        let resp = new DescribeTagsOfInstanceIdsResponse();
        this.request("DescribeTagsOfInstanceIds", req, resp, cb);
    }

    /**
     * 本接口(DescribeDatabases)用于查询云数据库实例的数据库信息，仅支持主实例和灾备实例，不支持只读实例。
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        let resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }

    /**
     * 根据检索条件查询实例错误日志详情。只能查询一个月之内的错误日志。
使用时需要注意：可能存在单条错误日志太大，导致整个http请求的回包太大，进而引发接口超时。一旦发生超时，建议您缩小查询时的Limit参数值，从而降低包的大小，让接口能够及时返回内容。
     * @param {DescribeErrorLogDataRequest} req
     * @param {function(string, DescribeErrorLogDataResponse):void} cb
     * @public
     */
    DescribeErrorLogData(req, cb) {
        let resp = new DescribeErrorLogDataResponse();
        this.request("DescribeErrorLogData", req, resp, cb);
    }

    /**
     * 该接口 (SwitchDBInstanceMasterSlave) 支持用户主动切换实例主从角色。
     * @param {SwitchDBInstanceMasterSlaveRequest} req
     * @param {function(string, SwitchDBInstanceMasterSlaveResponse):void} cb
     * @public
     */
    SwitchDBInstanceMasterSlave(req, cb) {
        let resp = new SwitchDBInstanceMasterSlaveResponse();
        this.request("SwitchDBInstanceMasterSlave", req, resp, cb);
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
     * 本接口(DescribeTables)用于查询云数据库实例的数据库表信息，仅支持主实例和灾备实例，不支持只读实例。
     * @param {DescribeTablesRequest} req
     * @param {function(string, DescribeTablesResponse):void} cb
     * @public
     */
    DescribeTables(req, cb) {
        let resp = new DescribeTablesResponse();
        this.request("DescribeTables", req, resp, cb);
    }

    /**
     * 本接口(DescribeAccountPrivileges)用于查询云数据库账户支持的权限信息。
     * @param {DescribeAccountPrivilegesRequest} req
     * @param {function(string, DescribeAccountPrivilegesResponse):void} cb
     * @public
     */
    DescribeAccountPrivileges(req, cb) {
        let resp = new DescribeAccountPrivilegesResponse();
        this.request("DescribeAccountPrivileges", req, resp, cb);
    }

    /**
     * 本接口（ReleaseIsolatedDBInstances）用于恢复已隔离云数据库实例。
     * @param {ReleaseIsolatedDBInstancesRequest} req
     * @param {function(string, ReleaseIsolatedDBInstancesResponse):void} cb
     * @public
     */
    ReleaseIsolatedDBInstances(req, cb) {
        let resp = new ReleaseIsolatedDBInstancesResponse();
        this.request("ReleaseIsolatedDBInstances", req, resp, cb);
    }

    /**
     * 本接口(CreateCloneInstance) 用于从目标源实例创建一个克隆实例，可以指定克隆实例回档到源实例的指定物理备份文件或者指定的回档时间点。
     * @param {CreateCloneInstanceRequest} req
     * @param {function(string, CreateCloneInstanceResponse):void} cb
     * @public
     */
    CreateCloneInstance(req, cb) {
        let resp = new CreateCloneInstanceResponse();
        this.request("CreateCloneInstance", req, resp, cb);
    }

    /**
     * 本接口(ModifyAuditConfig)用于修改云数据库审计策略的服务配置，包括审计日志保存时长等。
     * @param {ModifyAuditConfigRequest} req
     * @param {function(string, ModifyAuditConfigResponse):void} cb
     * @public
     */
    ModifyAuditConfig(req, cb) {
        let resp = new ModifyAuditConfigResponse();
        this.request("ModifyAuditConfig", req, resp, cb);
    }

    /**
     * 本接口(ModifyTimeWindow)用于更新云数据库实例的维护时间窗口。
     * @param {ModifyTimeWindowRequest} req
     * @param {function(string, ModifyTimeWindowResponse):void} cb
     * @public
     */
    ModifyTimeWindow(req, cb) {
        let resp = new ModifyTimeWindowResponse();
        this.request("ModifyTimeWindow", req, resp, cb);
    }

    /**
     * 根据置放群组ID删除置放群组（置放群组中有资源存在时不能删除该置放群组）
     * @param {DeleteDeployGroupsRequest} req
     * @param {function(string, DeleteDeployGroupsResponse):void} cb
     * @public
     */
    DeleteDeployGroups(req, cb) {
        let resp = new DeleteDeployGroupsResponse();
        this.request("DeleteDeployGroups", req, resp, cb);
    }

    /**
     * 本接口(SwitchForUpgrade)用于切换访问新实例，针对主升级中的实例处于待切换状态时，用户可主动发起该流程。
     * @param {SwitchForUpgradeRequest} req
     * @param {function(string, SwitchForUpgradeResponse):void} cb
     * @public
     */
    SwitchForUpgrade(req, cb) {
        let resp = new SwitchForUpgradeResponse();
        this.request("SwitchForUpgrade", req, resp, cb);
    }

    /**
     * 该接口（DeleteParamTemplate）用于删除参数模板，全地域公共参数Region均为ap-guangzhou。
     * @param {DeleteParamTemplateRequest} req
     * @param {function(string, DeleteParamTemplateResponse):void} cb
     * @public
     */
    DeleteParamTemplate(req, cb) {
        let resp = new DeleteParamTemplateResponse();
        this.request("DeleteParamTemplate", req, resp, cb);
    }

    /**
     * 本接口(DescribeBackups)用于查询云数据库实例的备份数据。
     * @param {DescribeBackupsRequest} req
     * @param {function(string, DescribeBackupsResponse):void} cb
     * @public
     */
    DescribeBackups(req, cb) {
        let resp = new DescribeBackupsResponse();
        this.request("DescribeBackups", req, resp, cb);
    }

    /**
     * 该接口（CreateParamTemplate）用于创建参数模板，全地域公共参数Region均为ap-guangzhou。
     * @param {CreateParamTemplateRequest} req
     * @param {function(string, CreateParamTemplateResponse):void} cb
     * @public
     */
    CreateParamTemplate(req, cb) {
        let resp = new CreateParamTemplateResponse();
        this.request("CreateParamTemplate", req, resp, cb);
    }

    /**
     * 本接口(CreateDBInstanceHour)用于创建按量计费的实例，可通过传入实例规格、MySQL 版本号和数量等信息创建云数据库实例，支持主实例、灾备实例和只读实例的创建。

该接口为异步接口，您还可以使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询该实例的详细信息。当该实例的 Status 为 1，且 TaskStatus 为 0，表示实例已经发货成功。

1. 首先请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口查询可创建的实例规格信息，然后请使用 [查询数据库价格](https://cloud.tencent.com/document/api/236/18566) 接口查询可创建实例的售卖价格；
2. 单次创建实例最大支持 100 个，实例时长最大支持 36 个月；
3. 支持创建 MySQL 5.5、MySQL 5.6 、MySQL 5.7 和 MySQL 8.0 版本；
4. 支持创建主实例、灾备实例和只读实例；
5. 当入参指定 Port，ParamList 或 Password 时，该实例会进行初始化操作（暂不支持基础版实例）；
     * @param {CreateDBInstanceHourRequest} req
     * @param {function(string, CreateDBInstanceHourResponse):void} cb
     * @public
     */
    CreateDBInstanceHour(req, cb) {
        let resp = new CreateDBInstanceHourResponse();
        this.request("CreateDBInstanceHour", req, resp, cb);
    }

    /**
     * 本接口(AddTimeWindow)用于添加云数据库实例的维护时间窗口，以指定实例在哪些时间段可以自动执行切换访问操作。
     * @param {AddTimeWindowRequest} req
     * @param {function(string, AddTimeWindowResponse):void} cb
     * @public
     */
    AddTimeWindow(req, cb) {
        let resp = new AddTimeWindowResponse();
        this.request("AddTimeWindow", req, resp, cb);
    }

    /**
     * 本接口（DescribeDeviceMonitorInfo）用于查询云数据库物理机当天的监控信息，暂只支持内存488G、硬盘6T的实例查询。
     * @param {DescribeDeviceMonitorInfoRequest} req
     * @param {function(string, DescribeDeviceMonitorInfoResponse):void} cb
     * @public
     */
    DescribeDeviceMonitorInfo(req, cb) {
        let resp = new DescribeDeviceMonitorInfoResponse();
        this.request("DescribeDeviceMonitorInfo", req, resp, cb);
    }

    /**
     * 本接口(CreateBackup)用于创建数据库备份。
     * @param {CreateBackupRequest} req
     * @param {function(string, CreateBackupResponse):void} cb
     * @public
     */
    CreateBackup(req, cb) {
        let resp = new CreateBackupResponse();
        this.request("CreateBackup", req, resp, cb);
    }

    /**
     * 本接口(ModifyDBInstanceVipVport)用于修改云数据库实例的IP和端口号，也可进行基础网络转 VPC 网络和 VPC 网络下的子网变更。
     * @param {ModifyDBInstanceVipVportRequest} req
     * @param {function(string, ModifyDBInstanceVipVportResponse):void} cb
     * @public
     */
    ModifyDBInstanceVipVport(req, cb) {
        let resp = new ModifyDBInstanceVipVportResponse();
        this.request("ModifyDBInstanceVipVport", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBInstanceConfig)用于云数据库实例的配置信息，包括同步模式，部署模式等。
     * @param {DescribeDBInstanceConfigRequest} req
     * @param {function(string, DescribeDBInstanceConfigResponse):void} cb
     * @public
     */
    DescribeDBInstanceConfig(req, cb) {
        let resp = new DescribeDBInstanceConfigResponse();
        this.request("DescribeDBInstanceConfig", req, resp, cb);
    }

    /**
     * 本接口(DescribeBackupTables)用于查询指定的数据库的备份数据表名 (已废弃)。
旧版本支持全量备份后，用户如果分库表下载逻辑备份文件，需要用到此接口。
新版本支持(CreateBackup)创建逻辑备份的时候，直接发起指定库表备份，用户直接下载该备份文件即可。
     * @param {DescribeBackupTablesRequest} req
     * @param {function(string, DescribeBackupTablesResponse):void} cb
     * @public
     */
    DescribeBackupTables(req, cb) {
        let resp = new DescribeBackupTablesResponse();
        this.request("DescribeBackupTables", req, resp, cb);
    }

    /**
     * 本接口(DeleteAuditPolicy)用于删除用户的审计策略。
     * @param {DeleteAuditPolicyRequest} req
     * @param {function(string, DeleteAuditPolicyResponse):void} cb
     * @public
     */
    DeleteAuditPolicy(req, cb) {
        let resp = new DeleteAuditPolicyResponse();
        this.request("DeleteAuditPolicy", req, resp, cb);
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
     * 请求该接口配置数据库连接池；支持的连接池配置请求DescribeProxyConnectionPoolConf接口获取。
     * @param {ModifyCDBProxyConnectionPoolRequest} req
     * @param {function(string, ModifyCDBProxyConnectionPoolResponse):void} cb
     * @public
     */
    ModifyCDBProxyConnectionPool(req, cb) {
        let resp = new ModifyCDBProxyConnectionPoolResponse();
        this.request("ModifyCDBProxyConnectionPool", req, resp, cb);
    }

    /**
     * 本接口(DescribeSlowLogs)用于获取云数据库实例的慢查询日志。
     * @param {DescribeSlowLogsRequest} req
     * @param {function(string, DescribeSlowLogsResponse):void} cb
     * @public
     */
    DescribeSlowLogs(req, cb) {
        let resp = new DescribeSlowLogsResponse();
        this.request("DescribeSlowLogs", req, resp, cb);
    }

    /**
     * 本接口(InquiryPriceUpgradeInstances)用于查询云数据库实例升级的价格，支持查询按量计费或者包年包月实例的升级价格，实例类型支持主实例、灾备实例和只读实例。
     * @param {InquiryPriceUpgradeInstancesRequest} req
     * @param {function(string, InquiryPriceUpgradeInstancesResponse):void} cb
     * @public
     */
    InquiryPriceUpgradeInstances(req, cb) {
        let resp = new InquiryPriceUpgradeInstancesResponse();
        this.request("InquiryPriceUpgradeInstances", req, resp, cb);
    }

    /**
     * 该接口用于修改实例本地binlog保留策略。
     * @param {ModifyLocalBinlogConfigRequest} req
     * @param {function(string, ModifyLocalBinlogConfigResponse):void} cb
     * @public
     */
    ModifyLocalBinlogConfig(req, cb) {
        let resp = new ModifyLocalBinlogConfigResponse();
        this.request("ModifyLocalBinlogConfig", req, resp, cb);
    }

    /**
     * 本接口(CreateDBInstance)用于创建包年包月的云数据库实例（包括主实例、灾备实例和只读实例），可通过传入实例规格、MySQL 版本号、购买时长和数量等信息创建云数据库实例。

该接口为异步接口，您还可以使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询该实例的详细信息。当该实例的 Status 为1，且 TaskStatus 为0，表示实例已经发货成功。

1. 首先请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口查询可创建的实例规格信息，然后请使用 [查询数据库价格](https://cloud.tencent.com/document/api/236/18566) 接口查询可创建实例的售卖价格；
2. 单次创建实例最大支持 100 个，实例时长最大支持 36 个月；
3. 支持创建 MySQL 5.5 、 MySQL 5.6 、 MySQL 5.7 、 MySQL 8.0 版本；
4. 支持创建主实例、只读实例、灾备实例；
5. 当入参指定 Port，ParamList 或 Password 时，该实例会进行初始化操作（不支持基础版实例）；
6. 当入参指定 ParamTemplateId 或 AlarmPolicyList 时，需将SDK提升至最新版本方可支持；
     * @param {CreateDBInstanceRequest} req
     * @param {function(string, CreateDBInstanceResponse):void} cb
     * @public
     */
    CreateDBInstance(req, cb) {
        let resp = new CreateDBInstanceResponse();
        this.request("CreateDBInstance", req, resp, cb);
    }

    /**
     * 该接口（ModifyParamTemplate）用于修改参数模板，全地域公共参数Region均为ap-guangzhou。
     * @param {ModifyParamTemplateRequest} req
     * @param {function(string, ModifyParamTemplateResponse):void} cb
     * @public
     */
    ModifyParamTemplate(req, cb) {
        let resp = new ModifyParamTemplateResponse();
        this.request("ModifyParamTemplate", req, resp, cb);
    }

    /**
     * 该接口（DescribeInstanceParams）用于查询实例的参数列表。
     * @param {DescribeInstanceParamsRequest} req
     * @param {function(string, DescribeInstanceParamsResponse):void} cb
     * @public
     */
    DescribeInstanceParams(req, cb) {
        let resp = new DescribeInstanceParamsResponse();
        this.request("DescribeInstanceParams", req, resp, cb);
    }

    /**
     * 配置数据库代理读写分离
     * @param {ModifyCDBProxyRequest} req
     * @param {function(string, ModifyCDBProxyResponse):void} cb
     * @public
     */
    ModifyCDBProxy(req, cb) {
        let resp = new ModifyCDBProxyResponse();
        this.request("ModifyCDBProxy", req, resp, cb);
    }

    /**
     * 查询代理规格配置
     * @param {DescribeProxyCustomConfRequest} req
     * @param {function(string, DescribeProxyCustomConfResponse):void} cb
     * @public
     */
    DescribeProxyCustomConf(req, cb) {
        let resp = new DescribeProxyCustomConfResponse();
        this.request("DescribeProxyCustomConf", req, resp, cb);
    }

    /**
     * 本接口(DescribeDeployGroupList)用于查询用户的置放群组列表，可以指定置放群组 ID 或置放群组名称。
     * @param {DescribeDeployGroupListRequest} req
     * @param {function(string, DescribeDeployGroupListResponse):void} cb
     * @public
     */
    DescribeDeployGroupList(req, cb) {
        let resp = new DescribeDeployGroupListResponse();
        this.request("DescribeDeployGroupList", req, resp, cb);
    }

    /**
     * 本接口(StopDBImportJob)用于终止数据导入任务。
     * @param {StopDBImportJobRequest} req
     * @param {function(string, StopDBImportJobResponse):void} cb
     * @public
     */
    StopDBImportJob(req, cb) {
        let resp = new StopDBImportJobResponse();
        this.request("StopDBImportJob", req, resp, cb);
    }

    /**
     * 本接口(CreateAccounts)用于创建云数据库的账户，需要指定新的账户名和域名，以及所对应的密码，同时可以设置账号的备注信息以及最大可用连接数。
     * @param {CreateAccountsRequest} req
     * @param {function(string, CreateAccountsResponse):void} cb
     * @public
     */
    CreateAccounts(req, cb) {
        let resp = new CreateAccountsResponse();
        this.request("CreateAccounts", req, resp, cb);
    }

    /**
     * 调整数据库代理配置
     * @param {UpgradeCDBProxyRequest} req
     * @param {function(string, UpgradeCDBProxyResponse):void} cb
     * @public
     */
    UpgradeCDBProxy(req, cb) {
        let resp = new UpgradeCDBProxyResponse();
        this.request("UpgradeCDBProxy", req, resp, cb);
    }

    /**
     * 本接口(UpgradeDBInstanceEngineVersion)用于升级云数据库实例版本，实例类型支持主实例、灾备实例和只读实例。
     * @param {UpgradeDBInstanceEngineVersionRequest} req
     * @param {function(string, UpgradeDBInstanceEngineVersionResponse):void} cb
     * @public
     */
    UpgradeDBInstanceEngineVersion(req, cb) {
        let resp = new UpgradeDBInstanceEngineVersionResponse();
        this.request("UpgradeDBInstanceEngineVersion", req, resp, cb);
    }

    /**
     * 本接口(DescribeAuditLogFiles)用于查询云数据库实例的审计日志文件。
     * @param {DescribeAuditLogFilesRequest} req
     * @param {function(string, DescribeAuditLogFilesResponse):void} cb
     * @public
     */
    DescribeAuditLogFiles(req, cb) {
        let resp = new DescribeAuditLogFilesResponse();
        this.request("DescribeAuditLogFiles", req, resp, cb);
    }

    /**
     * 该接口（DescribeInstanceParamRecords）用于查询实例参数修改历史。
     * @param {DescribeInstanceParamRecordsRequest} req
     * @param {function(string, DescribeInstanceParamRecordsResponse):void} cb
     * @public
     */
    DescribeInstanceParamRecords(req, cb) {
        let resp = new DescribeInstanceParamRecordsResponse();
        this.request("DescribeInstanceParamRecords", req, resp, cb);
    }

    /**
     * 本接口(DescribeBackupSummaries)用于查询备份的统计情况，返回以实例为维度的备份占用容量，以及每个实例的数据备份和日志备份的个数和容量（容量单位为字节）。
     * @param {DescribeBackupSummariesRequest} req
     * @param {function(string, DescribeBackupSummariesResponse):void} cb
     * @public
     */
    DescribeBackupSummaries(req, cb) {
        let resp = new DescribeBackupSummariesResponse();
        this.request("DescribeBackupSummaries", req, resp, cb);
    }

    /**
     * 该接口（DescribeParamTemplateInfo）用于查询参数模板详情，全地域公共参数Region均为ap-guangzhou。
     * @param {DescribeParamTemplateInfoRequest} req
     * @param {function(string, DescribeParamTemplateInfoResponse):void} cb
     * @public
     */
    DescribeParamTemplateInfo(req, cb) {
        let resp = new DescribeParamTemplateInfoResponse();
        this.request("DescribeParamTemplateInfo", req, resp, cb);
    }

    /**
     * 本接口(DescribeBinlogBackupOverview)用于查询用户在当前地域总的日志备份概览。
     * @param {DescribeBinlogBackupOverviewRequest} req
     * @param {function(string, DescribeBinlogBackupOverviewResponse):void} cb
     * @public
     */
    DescribeBinlogBackupOverview(req, cb) {
        let resp = new DescribeBinlogBackupOverviewResponse();
        this.request("DescribeBinlogBackupOverview", req, resp, cb);
    }

    /**
     * 本接口(SwitchDrInstanceToMaster)用于将云数据库灾备实例切换为主实例，注意请求必须发到灾备实例所在的地域。
     * @param {SwitchDrInstanceToMasterRequest} req
     * @param {function(string, SwitchDrInstanceToMasterResponse):void} cb
     * @public
     */
    SwitchDrInstanceToMaster(req, cb) {
        let resp = new SwitchDrInstanceToMasterResponse();
        this.request("SwitchDrInstanceToMaster", req, resp, cb);
    }

    /**
     * 本接口(DeleteAccounts)用于删除云数据库的账户。
     * @param {DeleteAccountsRequest} req
     * @param {function(string, DeleteAccountsResponse):void} cb
     * @public
     */
    DeleteAccounts(req, cb) {
        let resp = new DeleteAccountsResponse();
        this.request("DeleteAccounts", req, resp, cb);
    }

    /**
     * 查询实例基本信息（实例 ID ，实例名称，是否开通加密 ）
     * @param {DescribeDBInstanceInfoRequest} req
     * @param {function(string, DescribeDBInstanceInfoResponse):void} cb
     * @public
     */
    DescribeDBInstanceInfo(req, cb) {
        let resp = new DescribeDBInstanceInfoResponse();
        this.request("DescribeDBInstanceInfo", req, resp, cb);
    }

    /**
     * 本接口(DescribeRollbackRangeTime)用于查询云数据库实例可回档的时间范围。
     * @param {DescribeRollbackRangeTimeRequest} req
     * @param {function(string, DescribeRollbackRangeTimeResponse):void} cb
     * @public
     */
    DescribeRollbackRangeTime(req, cb) {
        let resp = new DescribeRollbackRangeTimeResponse();
        this.request("DescribeRollbackRangeTime", req, resp, cb);
    }

    /**
     * 该接口（DescribeParamTemplates）查询参数模板列表，全地域公共参数Region均为ap-guangzhou。
     * @param {DescribeParamTemplatesRequest} req
     * @param {function(string, DescribeParamTemplatesResponse):void} cb
     * @public
     */
    DescribeParamTemplates(req, cb) {
        let resp = new DescribeParamTemplatesResponse();
        this.request("DescribeParamTemplates", req, resp, cb);
    }

    /**
     * 本接口(DeleteBackup)用于删除数据库备份。本接口只支持删除手动发起的备份。
     * @param {DeleteBackupRequest} req
     * @param {function(string, DeleteBackupResponse):void} cb
     * @public
     */
    DeleteBackup(req, cb) {
        let resp = new DeleteBackupResponse();
        this.request("DeleteBackup", req, resp, cb);
    }

    /**
     * 修改数据库代理VIP或端口
     * @param {ModifyCDBProxyVipVPortRequest} req
     * @param {function(string, ModifyCDBProxyVipVPortResponse):void} cb
     * @public
     */
    ModifyCDBProxyVipVPort(req, cb) {
        let resp = new ModifyCDBProxyVipVPortResponse();
        this.request("ModifyCDBProxyVipVPort", req, resp, cb);
    }

    /**
     * 本接口(DescribeRoMinScale)用于获取只读实例购买、升级时的最小规格。
     * @param {DescribeRoMinScaleRequest} req
     * @param {function(string, DescribeRoMinScaleResponse):void} cb
     * @public
     */
    DescribeRoMinScale(req, cb) {
        let resp = new DescribeRoMinScaleResponse();
        this.request("DescribeRoMinScale", req, resp, cb);
    }

    /**
     * 本接口(ModifyAccountHost)用于修改云数据库账户的主机。
     * @param {ModifyAccountHostRequest} req
     * @param {function(string, ModifyAccountHostResponse):void} cb
     * @public
     */
    ModifyAccountHost(req, cb) {
        let resp = new ModifyAccountHostResponse();
        this.request("ModifyAccountHost", req, resp, cb);
    }

    /**
     * 本接口(DescribeAuditConfig)用于查询云数据库审计策略的服务配置，包括审计日志保存时长等。
     * @param {DescribeAuditConfigRequest} req
     * @param {function(string, DescribeAuditConfigResponse):void} cb
     * @public
     */
    DescribeAuditConfig(req, cb) {
        let resp = new DescribeAuditConfigResponse();
        this.request("DescribeAuditConfig", req, resp, cb);
    }

    /**
     * 本接口(ModifyInstanceParam)用于修改云数据库实例的参数。
     * @param {ModifyInstanceParamRequest} req
     * @param {function(string, ModifyInstanceParamResponse):void} cb
     * @public
     */
    ModifyInstanceParam(req, cb) {
        let resp = new ModifyInstanceParamResponse();
        this.request("ModifyInstanceParam", req, resp, cb);
    }

    /**
     * 关闭数据库代理
     * @param {CloseCDBProxyRequest} req
     * @param {function(string, CloseCDBProxyResponse):void} cb
     * @public
     */
    CloseCDBProxy(req, cb) {
        let resp = new CloseCDBProxyResponse();
        this.request("CloseCDBProxy", req, resp, cb);
    }

    /**
     * 本接口(ModifyAccountMaxUserConnections)用于修改云数据库账户最大可用连接数。
     * @param {ModifyAccountMaxUserConnectionsRequest} req
     * @param {function(string, ModifyAccountMaxUserConnectionsResponse):void} cb
     * @public
     */
    ModifyAccountMaxUserConnections(req, cb) {
        let resp = new ModifyAccountMaxUserConnectionsResponse();
        this.request("ModifyAccountMaxUserConnections", req, resp, cb);
    }

    /**
     * 本接口(DescribeAsyncRequestInfo)用于查询云数据库实例异步任务的执行结果。
     * @param {DescribeAsyncRequestInfoRequest} req
     * @param {function(string, DescribeAsyncRequestInfoResponse):void} cb
     * @public
     */
    DescribeAsyncRequestInfo(req, cb) {
        let resp = new DescribeAsyncRequestInfoResponse();
        this.request("DescribeAsyncRequestInfo", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBZoneConfig)用于查询可创建的云数据库各地域可售卖的规格配置。
     * @param {DescribeDBZoneConfigRequest} req
     * @param {function(string, DescribeDBZoneConfigResponse):void} cb
     * @public
     */
    DescribeDBZoneConfig(req, cb) {
        let resp = new DescribeDBZoneConfigResponse();
        this.request("DescribeDBZoneConfig", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBInstanceRebootTime)用于查询云数据库实例重启预计所需的时间。
     * @param {DescribeDBInstanceRebootTimeRequest} req
     * @param {function(string, DescribeDBInstanceRebootTimeResponse):void} cb
     * @public
     */
    DescribeDBInstanceRebootTime(req, cb) {
        let resp = new DescribeDBInstanceRebootTimeResponse();
        this.request("DescribeDBInstanceRebootTime", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBInstances)用于查询云数据库实例列表，支持通过项目 ID、实例 ID、访问地址、实例状态等过滤条件来筛选实例。支持查询主实例、灾备实例和只读实例信息列表。
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        let resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }

    /**
     * 本接口（ModifyRoGroupInfo）用于更新云数据库只读组的信息。包括设置实例延迟超限剔除策略，设置只读实例读权重，设置复制延迟时间等。
     * @param {ModifyRoGroupInfoRequest} req
     * @param {function(string, ModifyRoGroupInfoResponse):void} cb
     * @public
     */
    ModifyRoGroupInfo(req, cb) {
        let resp = new ModifyRoGroupInfoResponse();
        this.request("ModifyRoGroupInfo", req, resp, cb);
    }

    /**
     * 本接口(CreateAuditRule)用于创建用户在当前地域的审计规则。
     * @param {CreateAuditRuleRequest} req
     * @param {function(string, CreateAuditRuleResponse):void} cb
     * @public
     */
    CreateAuditRule(req, cb) {
        let resp = new CreateAuditRuleResponse();
        this.request("CreateAuditRule", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBInstanceCharset)用于查询云数据库实例的字符集，获取字符集的名称。
     * @param {DescribeDBInstanceCharsetRequest} req
     * @param {function(string, DescribeDBInstanceCharsetResponse):void} cb
     * @public
     */
    DescribeDBInstanceCharset(req, cb) {
        let resp = new DescribeDBInstanceCharsetResponse();
        this.request("DescribeDBInstanceCharset", req, resp, cb);
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
     * 本接口(InitDBInstances)用于初始化云数据库实例，包括初始化密码、默认字符集、实例端口号等
     * @param {InitDBInstancesRequest} req
     * @param {function(string, InitDBInstancesResponse):void} cb
     * @public
     */
    InitDBInstances(req, cb) {
        let resp = new InitDBInstancesResponse();
        this.request("InitDBInstances", req, resp, cb);
    }

    /**
     * 本接口(ModifyAccountPrivileges)用于修改云数据库的账户的权限信息。

注意，修改账号权限时，需要传入该账号下的全量权限信息。用户可以先通过 [查询云数据库账户的权限信息
](https://cloud.tencent.com/document/api/236/17500) 查询该账号下的全量权限信息，然后进行权限修改。
     * @param {ModifyAccountPrivilegesRequest} req
     * @param {function(string, ModifyAccountPrivilegesResponse):void} cb
     * @public
     */
    ModifyAccountPrivileges(req, cb) {
        let resp = new ModifyAccountPrivilegesResponse();
        this.request("ModifyAccountPrivileges", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBImportRecords)用于查询云数据库导入任务操作日志。
     * @param {DescribeDBImportRecordsRequest} req
     * @param {function(string, DescribeDBImportRecordsResponse):void} cb
     * @public
     */
    DescribeDBImportRecords(req, cb) {
        let resp = new DescribeDBImportRecordsResponse();
        this.request("DescribeDBImportRecords", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBSwitchRecords)用于查询云数据库实例切换记录。
     * @param {DescribeDBSwitchRecordsRequest} req
     * @param {function(string, DescribeDBSwitchRecordsResponse):void} cb
     * @public
     */
    DescribeDBSwitchRecords(req, cb) {
        let resp = new DescribeDBSwitchRecordsResponse();
        this.request("DescribeDBSwitchRecords", req, resp, cb);
    }

    /**
     * 本接口(CreateDBImportJob)用于创建云数据库数据导入任务。

注意，用户进行数据导入任务的文件，必须提前上传到腾讯云。用户须在控制台进行文件导入。
     * @param {CreateDBImportJobRequest} req
     * @param {function(string, CreateDBImportJobResponse):void} cb
     * @public
     */
    CreateDBImportJob(req, cb) {
        let resp = new CreateDBImportJobResponse();
        this.request("CreateDBImportJob", req, resp, cb);
    }

    /**
     * 本接口(DescribeAccounts)用于查询云数据库的所有账户信息。
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * 重新负载均衡数据库代理
     * @param {ReloadBalanceProxyNodeRequest} req
     * @param {function(string, ReloadBalanceProxyNodeResponse):void} cb
     * @public
     */
    ReloadBalanceProxyNode(req, cb) {
        let resp = new ReloadBalanceProxyNodeResponse();
        this.request("ReloadBalanceProxyNode", req, resp, cb);
    }

    /**
     * 本接口(VerifyRootAccount)用于校验云数据库实例的 ROOT 账号是否有足够的权限进行授权操作。
     * @param {VerifyRootAccountRequest} req
     * @param {function(string, VerifyRootAccountResponse):void} cb
     * @public
     */
    VerifyRootAccount(req, cb) {
        let resp = new VerifyRootAccountResponse();
        this.request("VerifyRootAccount", req, resp, cb);
    }

    /**
     * 该接口用户查询当前地域用户设置的默认备份下载来源限制。
     * @param {DescribeBackupDownloadRestrictionRequest} req
     * @param {function(string, DescribeBackupDownloadRestrictionResponse):void} cb
     * @public
     */
    DescribeBackupDownloadRestriction(req, cb) {
        let resp = new DescribeBackupDownloadRestrictionResponse();
        this.request("DescribeBackupDownloadRestriction", req, resp, cb);
    }

    /**
     * 重置实例ROOT账号，初始化账号权限
     * @param {ResetRootAccountRequest} req
     * @param {function(string, ResetRootAccountResponse):void} cb
     * @public
     */
    ResetRootAccount(req, cb) {
        let resp = new ResetRootAccountResponse();
        this.request("ResetRootAccount", req, resp, cb);
    }

    /**
     * 本接口(ModifyAccountPassword)用于修改云数据库账户的密码。
     * @param {ModifyAccountPasswordRequest} req
     * @param {function(string, ModifyAccountPasswordResponse):void} cb
     * @public
     */
    ModifyAccountPassword(req, cb) {
        let resp = new ModifyAccountPasswordResponse();
        this.request("ModifyAccountPassword", req, resp, cb);
    }

    /**
     * 本接口(DescribeUploadedFiles)用于查询用户导入的SQL文件列表，全地域公共参数Region均为ap-shanghai。
     * @param {DescribeUploadedFilesRequest} req
     * @param {function(string, DescribeUploadedFilesResponse):void} cb
     * @public
     */
    DescribeUploadedFiles(req, cb) {
        let resp = new DescribeUploadedFilesResponse();
        this.request("DescribeUploadedFiles", req, resp, cb);
    }

    /**
     * 查询数据库代理（待下线，替换接口QueryCDBProxy）
     * @param {DescribeCDBProxyRequest} req
     * @param {function(string, DescribeCDBProxyResponse):void} cb
     * @public
     */
    DescribeCDBProxy(req, cb) {
        let resp = new DescribeCDBProxyResponse();
        this.request("DescribeCDBProxy", req, resp, cb);
    }

    /**
     * 本接口(ModifyAccountDescription)用于修改云数据库账户的备注信息。
     * @param {ModifyAccountDescriptionRequest} req
     * @param {function(string, ModifyAccountDescriptionResponse):void} cb
     * @public
     */
    ModifyAccountDescription(req, cb) {
        let resp = new ModifyAccountDescriptionResponse();
        this.request("ModifyAccountDescription", req, resp, cb);
    }

    /**
     * 条件检索实例的慢日志。只允许查看一个月之内的慢日志。
使用时需要注意：可能存在单条慢日志太大，导致整个http请求的回包太大，进而引发接口超时。一旦发生超时，建议您缩小查询时的Limit参数值，从而降低包的大小，让接口能够及时返回内容。
     * @param {DescribeSlowLogDataRequest} req
     * @param {function(string, DescribeSlowLogDataResponse):void} cb
     * @public
     */
    DescribeSlowLogData(req, cb) {
        let resp = new DescribeSlowLogDataResponse();
        this.request("DescribeSlowLogData", req, resp, cb);
    }

    /**
     * 开启 RO 复制，从主实例同步数据。
     * @param {StartReplicationRequest} req
     * @param {function(string, StartReplicationResponse):void} cb
     * @public
     */
    StartReplication(req, cb) {
        let resp = new StartReplicationResponse();
        this.request("StartReplication", req, resp, cb);
    }

    /**
     * 本接口(DeleteAuditLogFile)用于删除云数据库实例的审计日志文件。
     * @param {DeleteAuditLogFileRequest} req
     * @param {function(string, DeleteAuditLogFileResponse):void} cb
     * @public
     */
    DeleteAuditLogFile(req, cb) {
        let resp = new DeleteAuditLogFileResponse();
        this.request("DeleteAuditLogFile", req, resp, cb);
    }

    /**
     * 本接口(ModifyBackupConfig)用于修改数据库备份配置信息。
     * @param {ModifyBackupConfigRequest} req
     * @param {function(string, ModifyBackupConfigResponse):void} cb
     * @public
     */
    ModifyBackupConfig(req, cb) {
        let resp = new ModifyBackupConfigResponse();
        this.request("ModifyBackupConfig", req, resp, cb);
    }

    /**
     * 针对主实例申请创建数据库代理。
     * @param {ApplyCDBProxyRequest} req
     * @param {function(string, ApplyCDBProxyResponse):void} cb
     * @public
     */
    ApplyCDBProxy(req, cb) {
        let resp = new ApplyCDBProxyResponse();
        this.request("ApplyCDBProxy", req, resp, cb);
    }

    /**
     * 本接口(DescribeAuditRules)用于查询用户在当前地域的审计规则。
     * @param {DescribeAuditRulesRequest} req
     * @param {function(string, DescribeAuditRulesResponse):void} cb
     * @public
     */
    DescribeAuditRules(req, cb) {
        let resp = new DescribeAuditRulesResponse();
        this.request("DescribeAuditRules", req, resp, cb);
    }

    /**
     * 本接口(DescribeBackupDatabases)用于查询备份文件包含的库 (已废弃)。
旧版本支持全量备份后，用户如果分库表下载逻辑备份文件，需要用到此接口。
新版本支持(CreateBackup)创建逻辑备份的时候，直接发起指定库表备份，用户直接下载该备份文件即可。
     * @param {DescribeBackupDatabasesRequest} req
     * @param {function(string, DescribeBackupDatabasesResponse):void} cb
     * @public
     */
    DescribeBackupDatabases(req, cb) {
        let resp = new DescribeBackupDatabasesResponse();
        this.request("DescribeBackupDatabases", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBPrice)用于查询购买或续费云数据库实例的价格，支持查询按量计费或者包年包月的价格。可传入实例类型、购买时长、购买数量、内存大小、硬盘大小和可用区信息等来查询实例价格。可传入实例名称来查询实例续费价格。

注意：对某个地域进行询价，请使用对应地域的接入点，接入点信息请参照 <a href="https://cloud.tencent.com/document/api/236/15832">服务地址</a> 文档。例如：对广州地域进行询价，请把请求发到：cdb.ap-guangzhou.tencentcloudapi.com。同理对上海地域询价，把请求发到：cdb.ap-shanghai.tencentcloudapi.com。
     * @param {DescribeDBPriceRequest} req
     * @param {function(string, DescribeDBPriceResponse):void} cb
     * @public
     */
    DescribeDBPrice(req, cb) {
        let resp = new DescribeDBPriceResponse();
        this.request("DescribeDBPrice", req, resp, cb);
    }

    /**
     * 本接口(ModifyAutoRenewFlag)用于修改云数据库实例的自动续费标记。仅支持包年包月的实例设置自动续费标记。
     * @param {ModifyAutoRenewFlagRequest} req
     * @param {function(string, ModifyAutoRenewFlagResponse):void} cb
     * @public
     */
    ModifyAutoRenewFlag(req, cb) {
        let resp = new ModifyAutoRenewFlagResponse();
        this.request("ModifyAutoRenewFlag", req, resp, cb);
    }

    /**
     * 数据库代理配置变更或则升级版本后手动发起立即切换
     * @param {SwitchCDBProxyRequest} req
     * @param {function(string, SwitchCDBProxyResponse):void} cb
     * @public
     */
    SwitchCDBProxy(req, cb) {
        let resp = new SwitchCDBProxyResponse();
        this.request("SwitchCDBProxy", req, resp, cb);
    }

    /**
     * 本接口(RenewDBInstance)用于续费云数据库实例，支持付费模式为包年包月的实例。按量计费实例可通过该接口续费为包年包月的实例。
     * @param {RenewDBInstanceRequest} req
     * @param {function(string, RenewDBInstanceResponse):void} cb
     * @public
     */
    RenewDBInstance(req, cb) {
        let resp = new RenewDBInstanceResponse();
        this.request("RenewDBInstance", req, resp, cb);
    }

    /**
     * 该接口（StartBatchRollback）用于批量回档云数据库实例的库表。
     * @param {StartBatchRollbackRequest} req
     * @param {function(string, StartBatchRollbackResponse):void} cb
     * @public
     */
    StartBatchRollback(req, cb) {
        let resp = new StartBatchRollbackResponse();
        this.request("StartBatchRollback", req, resp, cb);
    }

    /**
     * 本接口(ModifyDBInstanceProject)用于修改云数据库实例的所属项目。
     * @param {ModifyDBInstanceProjectRequest} req
     * @param {function(string, ModifyDBInstanceProjectResponse):void} cb
     * @public
     */
    ModifyDBInstanceProject(req, cb) {
        let resp = new ModifyDBInstanceProjectResponse();
        this.request("ModifyDBInstanceProject", req, resp, cb);
    }

    /**
     * 该接口用于查询实例本地binlog保留策略。
     * @param {DescribeLocalBinlogConfigRequest} req
     * @param {function(string, DescribeLocalBinlogConfigResponse):void} cb
     * @public
     */
    DescribeLocalBinlogConfig(req, cb) {
        let resp = new DescribeLocalBinlogConfigResponse();
        this.request("DescribeLocalBinlogConfig", req, resp, cb);
    }

    /**
     * 本接口(OpenWanService)用于开通实例外网访问。

注意，实例开通外网访问之前，需要先将实例进行 [实例初始化](https://cloud.tencent.com/document/api/236/15873) 操作。
     * @param {OpenWanServiceRequest} req
     * @param {function(string, OpenWanServiceResponse):void} cb
     * @public
     */
    OpenWanService(req, cb) {
        let resp = new OpenWanServiceResponse();
        this.request("OpenWanService", req, resp, cb);
    }

    /**
     * 本接口(ModifyAuditRule)用于修改用户的审计规则。
     * @param {ModifyAuditRuleRequest} req
     * @param {function(string, ModifyAuditRuleResponse):void} cb
     * @public
     */
    ModifyAuditRule(req, cb) {
        let resp = new ModifyAuditRuleResponse();
        this.request("ModifyAuditRule", req, resp, cb);
    }

    /**
     * 查询代理详情
     * @param {QueryCDBProxyRequest} req
     * @param {function(string, QueryCDBProxyResponse):void} cb
     * @public
     */
    QueryCDBProxy(req, cb) {
        let resp = new QueryCDBProxyResponse();
        this.request("QueryCDBProxy", req, resp, cb);
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
     * 本接口(DeleteAuditRule)用于删除用户的审计规则。
     * @param {DeleteAuditRuleRequest} req
     * @param {function(string, DeleteAuditRuleResponse):void} cb
     * @public
     */
    DeleteAuditRule(req, cb) {
        let resp = new DeleteAuditRuleResponse();
        this.request("DeleteAuditRule", req, resp, cb);
    }

    /**
     * 获取数据库代理连接池相关规格配置
     * @param {DescribeProxyConnectionPoolConfRequest} req
     * @param {function(string, DescribeProxyConnectionPoolConfResponse):void} cb
     * @public
     */
    DescribeProxyConnectionPoolConf(req, cb) {
        let resp = new DescribeProxyConnectionPoolConfResponse();
        this.request("DescribeProxyConnectionPoolConf", req, resp, cb);
    }

    /**
     * 本接口(DescribeSupportedPrivileges)用于查询云数据库的支持的权限信息，包括全局权限，数据库权限，表权限以及列权限。
     * @param {DescribeSupportedPrivilegesRequest} req
     * @param {function(string, DescribeSupportedPrivilegesResponse):void} cb
     * @public
     */
    DescribeSupportedPrivileges(req, cb) {
        let resp = new DescribeSupportedPrivilegesResponse();
        this.request("DescribeSupportedPrivileges", req, resp, cb);
    }

    /**
     * 升级数据库代理版本
     * @param {UpgradeCDBProxyVersionRequest} req
     * @param {function(string, UpgradeCDBProxyVersionResponse):void} cb
     * @public
     */
    UpgradeCDBProxyVersion(req, cb) {
        let resp = new UpgradeCDBProxyVersionResponse();
        this.request("UpgradeCDBProxyVersion", req, resp, cb);
    }

    /**
     * 本接口(DescribeBinlogs)用于查询云数据库实例的 binlog 文件列表。
     * @param {DescribeBinlogsRequest} req
     * @param {function(string, DescribeBinlogsResponse):void} cb
     * @public
     */
    DescribeBinlogs(req, cb) {
        let resp = new DescribeBinlogsResponse();
        this.request("DescribeBinlogs", req, resp, cb);
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
     * 本接口(DescribeRoGroups)用于查询云数据库实例的所有的RO组的信息。
     * @param {DescribeRoGroupsRequest} req
     * @param {function(string, DescribeRoGroupsResponse):void} cb
     * @public
     */
    DescribeRoGroups(req, cb) {
        let resp = new DescribeRoGroupsResponse();
        this.request("DescribeRoGroups", req, resp, cb);
    }

    /**
     * 本接口(DescribeCloneList) 用于查询用户实例的克隆任务列表。
     * @param {DescribeCloneListRequest} req
     * @param {function(string, DescribeCloneListResponse):void} cb
     * @public
     */
    DescribeCloneList(req, cb) {
        let resp = new DescribeCloneListResponse();
        this.request("DescribeCloneList", req, resp, cb);
    }

    /**
     * 修改置放群组的名称或者描述
     * @param {ModifyNameOrDescByDpIdRequest} req
     * @param {function(string, ModifyNameOrDescByDpIdResponse):void} cb
     * @public
     */
    ModifyNameOrDescByDpId(req, cb) {
        let resp = new ModifyNameOrDescByDpIdResponse();
        this.request("ModifyNameOrDescByDpId", req, resp, cb);
    }

    /**
     * 本接口(UpgradeDBInstance)用于升级或降级云数据库实例的配置，实例类型支持主实例、灾备实例和只读实例。
     * @param {UpgradeDBInstanceRequest} req
     * @param {function(string, UpgradeDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDBInstance(req, cb) {
        let resp = new UpgradeDBInstanceResponse();
        this.request("UpgradeDBInstance", req, resp, cb);
    }

    /**
     * 本接口(CreateDeployGroup)用于创建放置实例的置放群组
     * @param {CreateDeployGroupRequest} req
     * @param {function(string, CreateDeployGroupResponse):void} cb
     * @public
     */
    CreateDeployGroup(req, cb) {
        let resp = new CreateDeployGroupResponse();
        this.request("CreateDeployGroup", req, resp, cb);
    }

    /**
     * 本接口(DeleteTimeWindow)用于删除云数据库实例的维护时间窗口。删除实例维护时间窗口之后，默认的维护时间窗为 03:00-04:00，即当选择在维护时间窗口内切换访问新实例时，默认会在 03:00-04:00 点进行切换访问新实例。
     * @param {DeleteTimeWindowRequest} req
     * @param {function(string, DeleteTimeWindowResponse):void} cb
     * @public
     */
    DeleteTimeWindow(req, cb) {
        let resp = new DeleteTimeWindowResponse();
        this.request("DeleteTimeWindow", req, resp, cb);
    }


}
module.exports = CdbClient;
