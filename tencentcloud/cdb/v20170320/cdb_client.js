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
const CreateDBInstanceRequest = models.CreateDBInstanceRequest;
const TaskDetail = models.TaskDetail;
const DeviceDiskInfo = models.DeviceDiskInfo;
const DescribeAccountPrivilegesResponse = models.DescribeAccountPrivilegesResponse;
const CreateDBImportJobRequest = models.CreateDBImportJobRequest;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const DescribeBackupConfigRequest = models.DescribeBackupConfigRequest;
const RoVipInfo = models.RoVipInfo;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const StopDBImportJobRequest = models.StopDBImportJobRequest;
const StopDBImportJobResponse = models.StopDBImportJobResponse;
const Parameter = models.Parameter;
const DescribeDBInstanceRebootTimeRequest = models.DescribeDBInstanceRebootTimeRequest;
const DescribeSlowLogsRequest = models.DescribeSlowLogsRequest;
const Inbound = models.Inbound;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const CreateAccountsResponse = models.CreateAccountsResponse;
const RegionSellConf = models.RegionSellConf;
const InstanceRollbackRangeTime = models.InstanceRollbackRangeTime;
const SqlFileInfo = models.SqlFileInfo;
const CreateDeployGroupResponse = models.CreateDeployGroupResponse;
const DescribeTablesResponse = models.DescribeTablesResponse;
const SellConfig = models.SellConfig;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const MasterInfo = models.MasterInfo;
const DescribeBinlogsResponse = models.DescribeBinlogsResponse;
const DeleteParamTemplateResponse = models.DeleteParamTemplateResponse;
const ParamInfo = models.ParamInfo;
const DescribeDefaultParamsRequest = models.DescribeDefaultParamsRequest;
const DBSwitchInfo = models.DBSwitchInfo;
const ModifyNameOrDescByDpIdResponse = models.ModifyNameOrDescByDpIdResponse;
const DescribeDBPriceResponse = models.DescribeDBPriceResponse;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DescribeParamTemplatesRequest = models.DescribeParamTemplatesRequest;
const DescribeRollbackRangeTimeRequest = models.DescribeRollbackRangeTimeRequest;
const DescribeBackupsRequest = models.DescribeBackupsRequest;
const ModifyDBInstanceProjectResponse = models.ModifyDBInstanceProjectResponse;
const DescribeInstanceParamRecordsResponse = models.DescribeInstanceParamRecordsResponse;
const DescribeDBInstanceGTIDResponse = models.DescribeDBInstanceGTIDResponse;
const OpenDBInstanceGTIDResponse = models.OpenDBInstanceGTIDResponse;
const DescribeDBZoneConfigRequest = models.DescribeDBZoneConfigRequest;
const DescribeDBInstanceRebootTimeResponse = models.DescribeDBInstanceRebootTimeResponse;
const DeleteParamTemplateRequest = models.DeleteParamTemplateRequest;
const DrInfo = models.DrInfo;
const RoGroup = models.RoGroup;
const ParameterDetail = models.ParameterDetail;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const SwitchForUpgradeRequest = models.SwitchForUpgradeRequest;
const CreateParamTemplateResponse = models.CreateParamTemplateResponse;
const CreateDBInstanceHourResponse = models.CreateDBInstanceHourResponse;
const BinlogInfo = models.BinlogInfo;
const DeleteDeployGroupsResponse = models.DeleteDeployGroupsResponse;
const DescribeTasksRequest = models.DescribeTasksRequest;
const IsolateDBInstanceResponse = models.IsolateDBInstanceResponse;
const SlaveConfig = models.SlaveConfig;
const AddTimeWindowRequest = models.AddTimeWindowRequest;
const ImportRecord = models.ImportRecord;
const CreateAccountsRequest = models.CreateAccountsRequest;
const CreateDBInstanceHourRequest = models.CreateDBInstanceHourRequest;
const DescribeDeployGroupListRequest = models.DescribeDeployGroupListRequest;
const RollbackInstancesInfo = models.RollbackInstancesInfo;
const DescribeParamTemplateInfoRequest = models.DescribeParamTemplateInfoRequest;
const BackupInfo = models.BackupInfo;
const CloseWanServiceResponse = models.CloseWanServiceResponse;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const ModifyDBInstanceVipVportResponse = models.ModifyDBInstanceVipVportResponse;
const DescribeDBSwitchRecordsResponse = models.DescribeDBSwitchRecordsResponse;
const TableName = models.TableName;
const RenewDBInstanceRequest = models.RenewDBInstanceRequest;
const RollbackTableName = models.RollbackTableName;
const DeleteBackupResponse = models.DeleteBackupResponse;
const ModifyInstanceParamRequest = models.ModifyInstanceParamRequest;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const ModifyDBInstanceProjectRequest = models.ModifyDBInstanceProjectRequest;
const CommonTimeWindow = models.CommonTimeWindow;
const ModifyInstanceTagResponse = models.ModifyInstanceTagResponse;
const DescribeDBSwitchRecordsRequest = models.DescribeDBSwitchRecordsRequest;
const DescribeSupportedPrivilegesRequest = models.DescribeSupportedPrivilegesRequest;
const DescribeAsyncRequestInfoResponse = models.DescribeAsyncRequestInfoResponse;
const CreateDBInstanceResponse = models.CreateDBInstanceResponse;
const ModifyInstanceTagRequest = models.ModifyInstanceTagRequest;
const DescribeDBInstanceCharsetResponse = models.DescribeDBInstanceCharsetResponse;
const DeleteAccountsResponse = models.DeleteAccountsResponse;
const CloseWanServiceRequest = models.CloseWanServiceRequest;
const RestartDBInstancesResponse = models.RestartDBInstancesResponse;
const ParamTemplateInfo = models.ParamTemplateInfo;
const DescribeBackupDatabasesResponse = models.DescribeBackupDatabasesResponse;
const DescribeInstanceParamRecordsRequest = models.DescribeInstanceParamRecordsRequest;
const ModifyAutoRenewFlagResponse = models.ModifyAutoRenewFlagResponse;
const DeleteTimeWindowResponse = models.DeleteTimeWindowResponse;
const DescribeBackupsResponse = models.DescribeBackupsResponse;
const DescribeTimeWindowRequest = models.DescribeTimeWindowRequest;
const DescribeDBImportRecordsResponse = models.DescribeDBImportRecordsResponse;
const DescribeTimeWindowResponse = models.DescribeTimeWindowResponse;
const BackupItem = models.BackupItem;
const DatabaseName = models.DatabaseName;
const DescribeBackupConfigResponse = models.DescribeBackupConfigResponse;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DescribeParamTemplatesResponse = models.DescribeParamTemplatesResponse;
const DescribeBackupTablesResponse = models.DescribeBackupTablesResponse;
const Outbound = models.Outbound;
const SlaveInstanceInfo = models.SlaveInstanceInfo;
const ModifyParamTemplateResponse = models.ModifyParamTemplateResponse;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const StartBatchRollbackRequest = models.StartBatchRollbackRequest;
const SecurityGroup = models.SecurityGroup;
const ZoneConf = models.ZoneConf;
const DeviceNetInfo = models.DeviceNetInfo;
const SlaveInfo = models.SlaveInfo;
const TagInfo = models.TagInfo;
const RollbackTimeRange = models.RollbackTimeRange;
const DescribeSupportedPrivilegesResponse = models.DescribeSupportedPrivilegesResponse;
const OfflineIsolatedInstancesRequest = models.OfflineIsolatedInstancesRequest;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const TagInfoUnit = models.TagInfoUnit;
const OpenDBInstanceGTIDRequest = models.OpenDBInstanceGTIDRequest;
const UpgradeDBInstanceEngineVersionResponse = models.UpgradeDBInstanceEngineVersionResponse;
const InquiryPriceUpgradeInstancesRequest = models.InquiryPriceUpgradeInstancesRequest;
const DescribeAsyncRequestInfoRequest = models.DescribeAsyncRequestInfoRequest;
const ModifyInstanceParamResponse = models.ModifyInstanceParamResponse;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const ColumnPrivilege = models.ColumnPrivilege;
const DescribeUploadedFilesRequest = models.DescribeUploadedFilesRequest;
const DescribeDeviceMonitorInfoRequest = models.DescribeDeviceMonitorInfoRequest;
const DescribeDBPriceRequest = models.DescribeDBPriceRequest;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const TagsInfoOfInstance = models.TagsInfoOfInstance;
const DescribeUploadedFilesResponse = models.DescribeUploadedFilesResponse;
const CreateBackupResponse = models.CreateBackupResponse;
const DescribeDBInstanceConfigResponse = models.DescribeDBInstanceConfigResponse;
const DescribeDefaultParamsResponse = models.DescribeDefaultParamsResponse;
const ModifyAccountPrivilegesResponse = models.ModifyAccountPrivilegesResponse;
const BackupConfig = models.BackupConfig;
const VerifyRootAccountResponse = models.VerifyRootAccountResponse;
const DeviceCpuInfo = models.DeviceCpuInfo;
const DescribeTagsOfInstanceIdsResponse = models.DescribeTagsOfInstanceIdsResponse;
const DescribeDeployGroupListResponse = models.DescribeDeployGroupListResponse;
const DescribeDBInstanceConfigRequest = models.DescribeDBInstanceConfigRequest;
const DescribeBackupTablesRequest = models.DescribeBackupTablesRequest;
const InstanceInfo = models.InstanceInfo;
const OfflineIsolatedInstancesResponse = models.OfflineIsolatedInstancesResponse;
const DatabasePrivilege = models.DatabasePrivilege;
const ModifyBackupConfigResponse = models.ModifyBackupConfigResponse;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const ModifyAccountPasswordRequest = models.ModifyAccountPasswordRequest;
const DescribeTablesRequest = models.DescribeTablesRequest;
const InstanceRebootTime = models.InstanceRebootTime;
const RenewDBInstanceResponse = models.RenewDBInstanceResponse;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const ModifyParamTemplateRequest = models.ModifyParamTemplateRequest;
const AddTimeWindowResponse = models.AddTimeWindowResponse;
const ZoneSellConf = models.ZoneSellConf;
const InitDBInstancesRequest = models.InitDBInstancesRequest;
const RoInstanceInfo = models.RoInstanceInfo;
const CreateParamTemplateRequest = models.CreateParamTemplateRequest;
const IsolateDBInstanceRequest = models.IsolateDBInstanceRequest;
const ModifyTimeWindowRequest = models.ModifyTimeWindowRequest;
const DeviceCpuRateInfo = models.DeviceCpuRateInfo;
const ModifyAccountPrivilegesRequest = models.ModifyAccountPrivilegesRequest;
const Account = models.Account;
const CreateBackupRequest = models.CreateBackupRequest;
const AccountInfo = models.AccountInfo;
const DescribeDBInstanceCharsetRequest = models.DescribeDBInstanceCharsetRequest;
const RollbackTables = models.RollbackTables;
const DescribeBackupDatabasesRequest = models.DescribeBackupDatabasesRequest;
const ModifyTimeWindowResponse = models.ModifyTimeWindowResponse;
const DeviceMemInfo = models.DeviceMemInfo;
const ModifyAutoRenewFlagRequest = models.ModifyAutoRenewFlagRequest;
const UpgradeDBInstanceEngineVersionRequest = models.UpgradeDBInstanceEngineVersionRequest;
const DeleteDeployGroupsRequest = models.DeleteDeployGroupsRequest;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;
const ModifyDBInstanceVipVportRequest = models.ModifyDBInstanceVipVportRequest;
const DescribeSlowLogsResponse = models.DescribeSlowLogsResponse;
const DescribeDBImportRecordsRequest = models.DescribeDBImportRecordsRequest;
const CreateDBImportJobResponse = models.CreateDBImportJobResponse;
const DescribeTagsOfInstanceIdsRequest = models.DescribeTagsOfInstanceIdsRequest;
const OpenWanServiceRequest = models.OpenWanServiceRequest;
const DeleteTimeWindowRequest = models.DeleteTimeWindowRequest;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const TablePrivilege = models.TablePrivilege;
const SlowLogInfo = models.SlowLogInfo;
const InitDBInstancesResponse = models.InitDBInstancesResponse;
const DescribeParamTemplateInfoResponse = models.DescribeParamTemplateInfoResponse;
const ParamRecord = models.ParamRecord;
const RestartDBInstancesRequest = models.RestartDBInstancesRequest;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const DescribeDBZoneConfigResponse = models.DescribeDBZoneConfigResponse;
const CreateDeployGroupRequest = models.CreateDeployGroupRequest;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const DeleteAccountsRequest = models.DeleteAccountsRequest;
const SwitchForUpgradeResponse = models.SwitchForUpgradeResponse;
const DescribeAccountPrivilegesRequest = models.DescribeAccountPrivilegesRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const RollbackDBName = models.RollbackDBName;
const DeleteBackupRequest = models.DeleteBackupRequest;
const ModifyNameOrDescByDpIdRequest = models.ModifyNameOrDescByDpIdRequest;
const DescribeInstanceParamsRequest = models.DescribeInstanceParamsRequest;
const StartBatchRollbackResponse = models.StartBatchRollbackResponse;
const DescribeDeviceMonitorInfoResponse = models.DescribeDeviceMonitorInfoResponse;
const UploadInfo = models.UploadInfo;
const DescribeRollbackRangeTimeResponse = models.DescribeRollbackRangeTimeResponse;
const VerifyRootAccountRequest = models.VerifyRootAccountRequest;
const OpenWanServiceResponse = models.OpenWanServiceResponse;
const ModifyBackupConfigRequest = models.ModifyBackupConfigRequest;
const ModifyAccountPasswordResponse = models.ModifyAccountPasswordResponse;
const DescribeBinlogsRequest = models.DescribeBinlogsRequest;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const DescribeDBInstanceGTIDRequest = models.DescribeDBInstanceGTIDRequest;
const DeployGroupInfo = models.DeployGroupInfo;
const InquiryPriceUpgradeInstancesResponse = models.InquiryPriceUpgradeInstancesResponse;


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
     * 该接口（DescribeParamTemplates）查询参数模板列表。
     * @param {DescribeParamTemplatesRequest} req
     * @param {function(string, DescribeParamTemplatesResponse):void} cb
     * @public
     */
    DescribeParamTemplates(req, cb) {
        let resp = new DescribeParamTemplatesResponse();
        this.request("DescribeParamTemplates", req, resp, cb);
    }

    /**
     * 本接口(DeleteBackup)用于删除数据库备份。
     * @param {DeleteBackupRequest} req
     * @param {function(string, DeleteBackupResponse):void} cb
     * @public
     */
    DeleteBackup(req, cb) {
        let resp = new DeleteBackupResponse();
        this.request("DeleteBackup", req, resp, cb);
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
     * 该接口（DeleteParamTemplate）用于删除参数模板。
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
     * 该接口（CreateParamTemplate）用于创建参数模板。
     * @param {CreateParamTemplateRequest} req
     * @param {function(string, CreateParamTemplateResponse):void} cb
     * @public
     */
    CreateParamTemplate(req, cb) {
        let resp = new CreateParamTemplateResponse();
        this.request("CreateParamTemplate", req, resp, cb);
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
     * 本接口(CreateDBInstanceHour)用于创建按量计费的实例，可通过传入实例规格、MySQL 版本号和数量等信息创建云数据库实例，支持主实例、灾备实例和只读实例的创建。

该接口为异步接口，您还可以使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询该实例的详细信息。当该实例的 Status 为 1，且 TaskStatus 为 0，表示实例已经发货成功。

1. 首先请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口查询可创建的实例规格信息，然后请使用 [查询数据库价格](https://cloud.tencent.com/document/api/236/18566) 接口查询可创建实例的售卖价格；
2. 单次创建实例最大支持 100 个，实例时长最大支持 36 个月；
3. 支持创建 MySQL 5.5、MySQL 5.6 和 MySQL 5.7 版本；
4. 支持创建主实例、灾备实例和只读实例；
5. 当入参指定 Port，ParamList 或 Password 时，该实例会进行初始化操作；
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
     * 本接口(RenewDBInstance)用于续费云数据库实例，仅支持付费模式为包年包月的实例。按量计费实例不需要续费。
     * @param {RenewDBInstanceRequest} req
     * @param {function(string, RenewDBInstanceResponse):void} cb
     * @public
     */
    RenewDBInstance(req, cb) {
        let resp = new RenewDBInstanceResponse();
        this.request("RenewDBInstance", req, resp, cb);
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
     * 本接口(DescribeDBPrice)用于查询云数据库实例的价格，支持查询按量计费或者包年包月的价格。可传入实例类型、购买时长、购买数量、内存大小、硬盘大小和可用区信息等来查询实例价格。

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
     * 该接口（ModifyParamTemplate）用于修改参数模板。
     * @param {ModifyParamTemplateRequest} req
     * @param {function(string, ModifyParamTemplateResponse):void} cb
     * @public
     */
    ModifyParamTemplate(req, cb) {
        let resp = new ModifyParamTemplateResponse();
        this.request("ModifyParamTemplate", req, resp, cb);
    }

    /**
     * 本接口(CreateDBInstance)用于创建包年包月的云数据库实例（包括主实例、灾备实例和只读实例），可通过传入实例规格、MySQL 版本号、购买时长和数量等信息创建云数据库实例。

该接口为异步接口，您还可以使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询该实例的详细信息。当该实例的 Status 为1，且 TaskStatus 为0，表示实例已经发货成功。

1. 首先请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口查询可创建的实例规格信息，然后请使用 [查询数据库价格](https://cloud.tencent.com/document/api/236/18566) 接口查询可创建实例的售卖价格；
2. 单次创建实例最大支持 100 个，实例时长最大支持 36 个月；
3. 支持创建 MySQL 5.5 、 MySQL 5.6 、 MySQL 5.7 版本；
4. 支持创建主实例、只读实例、灾备实例；
5. 当入参指定 Port，ParamList 或 Password 时，该实例会进行初始化操作；
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
     * 本接口(DescribeBinlogs)用于查询云数据库实例的二进制数据。
     * @param {DescribeBinlogsRequest} req
     * @param {function(string, DescribeBinlogsResponse):void} cb
     * @public
     */
    DescribeBinlogs(req, cb) {
        let resp = new DescribeBinlogsResponse();
        this.request("DescribeBinlogs", req, resp, cb);
    }

    /**
     * 本接口(DescribeDatabases)用于查询云数据库实例的数据库信息。
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        let resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }

    /**
     * 本接口(CreateAccounts)用于创建云数据库的账户，需要指定新的账户名和域名，以及所对应的密码，同时可以设置账号的备注信息。
     * @param {CreateAccountsRequest} req
     * @param {function(string, CreateAccountsResponse):void} cb
     * @public
     */
    CreateAccounts(req, cb) {
        let resp = new CreateAccountsResponse();
        this.request("CreateAccounts", req, resp, cb);
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
     * 本接口(DescribeUploadedFiles)用于查询用户导入的SQL文件列表。
     * @param {DescribeUploadedFilesRequest} req
     * @param {function(string, DescribeUploadedFilesResponse):void} cb
     * @public
     */
    DescribeUploadedFiles(req, cb) {
        let resp = new DescribeUploadedFilesResponse();
        this.request("DescribeUploadedFiles", req, resp, cb);
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
     * 该接口（DescribeParamTemplateInfo）用于查询参数模板详情。
     * @param {DescribeParamTemplateInfoRequest} req
     * @param {function(string, DescribeParamTemplateInfoResponse):void} cb
     * @public
     */
    DescribeParamTemplateInfo(req, cb) {
        let resp = new DescribeParamTemplateInfoResponse();
        this.request("DescribeParamTemplateInfo", req, resp, cb);
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

    /**
     * 本接口(DescribeTables)用于查询云数据库实例的数据库表信息。
     * @param {DescribeTablesRequest} req
     * @param {function(string, DescribeTablesResponse):void} cb
     * @public
     */
    DescribeTables(req, cb) {
        let resp = new DescribeTablesResponse();
        this.request("DescribeTables", req, resp, cb);
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


}
module.exports = CdbClient;
