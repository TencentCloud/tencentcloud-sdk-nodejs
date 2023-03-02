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
const RemoveClusterSlaveZoneRequest = models.RemoveClusterSlaveZoneRequest;
const ModifyClusterNameRequest = models.ModifyClusterNameRequest;
const DescribeRollbackTimeRangeRequest = models.DescribeRollbackTimeRangeRequest;
const InquirePriceRenewRequest = models.InquirePriceRenewRequest;
const InstanceAuditRule = models.InstanceAuditRule;
const DescribeAuditLogsRequest = models.DescribeAuditLogsRequest;
const DescribeBackupConfigRequest = models.DescribeBackupConfigRequest;
const ModifyAuditRuleTemplatesRequest = models.ModifyAuditRuleTemplatesRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const ModifyMaintainPeriodConfigRequest = models.ModifyMaintainPeriodConfigRequest;
const DescribeRollbackTimeRangeResponse = models.DescribeRollbackTimeRangeResponse;
const BillingResourceInfo = models.BillingResourceInfo;
const ModifyBackupNameResponse = models.ModifyBackupNameResponse;
const ModifyClusterStorageRequest = models.ModifyClusterStorageRequest;
const RollBackClusterRequest = models.RollBackClusterRequest;
const DescribeAuditLogFilesResponse = models.DescribeAuditLogFilesResponse;
const SwitchClusterZoneResponse = models.SwitchClusterZoneResponse;
const ModifyParamItem = models.ModifyParamItem;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const DescribeBinlogDownloadUrlRequest = models.DescribeBinlogDownloadUrlRequest;
const CreateAccountsResponse = models.CreateAccountsResponse;
const ModifyInstanceNameRequest = models.ModifyInstanceNameRequest;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const DescribeMaintainPeriodRequest = models.DescribeMaintainPeriodRequest;
const AccountParam = models.AccountParam;
const DescribeBinlogsResponse = models.DescribeBinlogsResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeZonesRequest = models.DescribeZonesRequest;
const ClusterInstanceDetail = models.ClusterInstanceDetail;
const AddClusterSlaveZoneResponse = models.AddClusterSlaveZoneResponse;
const OldAddrInfo = models.OldAddrInfo;
const ModifyClusterNameResponse = models.ModifyClusterNameResponse;
const DescribeClusterParamsResponse = models.DescribeClusterParamsResponse;
const IsolateInstanceResponse = models.IsolateInstanceResponse;
const AuditLogFilter = models.AuditLogFilter;
const DescribeParamTemplatesRequest = models.DescribeParamTemplatesRequest;
const DescribeAuditLogsResponse = models.DescribeAuditLogsResponse;
const SearchClusterTablesRequest = models.SearchClusterTablesRequest;
const PauseServerlessRequest = models.PauseServerlessRequest;
const ModifiableInfo = models.ModifiableInfo;
const DescribeFlowResponse = models.DescribeFlowResponse;
const RevokeAccountPrivilegesResponse = models.RevokeAccountPrivilegesResponse;
const CreateClustersResponse = models.CreateClustersResponse;
const SetRenewFlagRequest = models.SetRenewFlagRequest;
const CynosdbInstanceGrp = models.CynosdbInstanceGrp;
const SlowQueriesItem = models.SlowQueriesItem;
const ActivateInstanceRequest = models.ActivateInstanceRequest;
const DatabaseTables = models.DatabaseTables;
const AddClusterSlaveZoneRequest = models.AddClusterSlaveZoneRequest;
const DescribeAccountAllGrantPrivilegesResponse = models.DescribeAccountAllGrantPrivilegesResponse;
const RollbackDatabase = models.RollbackDatabase;
const ModifyVipVportRequest = models.ModifyVipVportRequest;
const DatabasePrivileges = models.DatabasePrivileges;
const DescribeClustersRequest = models.DescribeClustersRequest;
const ModifyClusterStorageResponse = models.ModifyClusterStorageResponse;
const DescribeInstanceDetailResponse = models.DescribeInstanceDetailResponse;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const DeleteAuditLogFileResponse = models.DeleteAuditLogFileResponse;
const DescribeClusterParamLogsResponse = models.DescribeClusterParamLogsResponse;
const DescribeClusterInstanceGrpsRequest = models.DescribeClusterInstanceGrpsRequest;
const DescribeResourcesByDealNameResponse = models.DescribeResourcesByDealNameResponse;
const ResumeServerlessResponse = models.ResumeServerlessResponse;
const CreateAccountsRequest = models.CreateAccountsRequest;
const DeleteAuditRuleTemplatesRequest = models.DeleteAuditRuleTemplatesRequest;
const DescribeAuditRuleTemplatesResponse = models.DescribeAuditRuleTemplatesResponse;
const SwitchClusterZoneRequest = models.SwitchClusterZoneRequest;
const RestartInstanceRequest = models.RestartInstanceRequest;
const Ability = models.Ability;
const InstanceInitInfo = models.InstanceInitInfo;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const RollbackTable = models.RollbackTable;
const IsolateInstanceRequest = models.IsolateInstanceRequest;
const SwitchClusterVpcResponse = models.SwitchClusterVpcResponse;
const DescribeClusterDetailRequest = models.DescribeClusterDetailRequest;
const DeleteBackupResponse = models.DeleteBackupResponse;
const Tag = models.Tag;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const RemoveClusterSlaveZoneResponse = models.RemoveClusterSlaveZoneResponse;
const CreateAuditLogFileResponse = models.CreateAuditLogFileResponse;
const PauseServerlessResponse = models.PauseServerlessResponse;
const OfflineClusterRequest = models.OfflineClusterRequest;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const NewAccount = models.NewAccount;
const BackupFileInfo = models.BackupFileInfo;
const TablePrivileges = models.TablePrivileges;
const DescribeBinlogDownloadUrlResponse = models.DescribeBinlogDownloadUrlResponse;
const DescribeAuditRuleWithInstanceIdsResponse = models.DescribeAuditRuleWithInstanceIdsResponse;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const DescribeBackupListRequest = models.DescribeBackupListRequest;
const SearchClusterDatabasesRequest = models.SearchClusterDatabasesRequest;
const SwitchClusterVpcRequest = models.SwitchClusterVpcRequest;
const CynosdbInstance = models.CynosdbInstance;
const DescribeAuditRuleWithInstanceIdsRequest = models.DescribeAuditRuleWithInstanceIdsRequest;
const DbTable = models.DbTable;
const ModifyClusterSlaveZoneResponse = models.ModifyClusterSlaveZoneResponse;
const GrantAccountPrivilegesRequest = models.GrantAccountPrivilegesRequest;
const BinlogItem = models.BinlogItem;
const ModifyAuditServiceRequest = models.ModifyAuditServiceRequest;
const CreateClustersRequest = models.CreateClustersRequest;
const RollbackTableInfo = models.RollbackTableInfo;
const DescribeClustersResponse = models.DescribeClustersResponse;
const QueryFilter = models.QueryFilter;
const DescribeBackupConfigResponse = models.DescribeBackupConfigResponse;
const ModifyVipVportResponse = models.ModifyVipVportResponse;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DescribeParamTemplatesResponse = models.DescribeParamTemplatesResponse;
const CloseAuditServiceRequest = models.CloseAuditServiceRequest;
const AddInstancesResponse = models.AddInstancesResponse;
const Addr = models.Addr;
const ParamTemplateListInfo = models.ParamTemplateListInfo;
const ParamInfo = models.ParamInfo;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const ModifyClusterParamResponse = models.ModifyClusterParamResponse;
const SecurityGroup = models.SecurityGroup;
const DescribeBackupDownloadUrlRequest = models.DescribeBackupDownloadUrlRequest;
const RollbackTimeRange = models.RollbackTimeRange;
const OfflineInstanceRequest = models.OfflineInstanceRequest;
const OpenAuditServiceRequest = models.OpenAuditServiceRequest;
const PolicyRule = models.PolicyRule;
const NetAddr = models.NetAddr;
const TemplateParamInfo = models.TemplateParamInfo;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const DescribeResourcesByDealNameRequest = models.DescribeResourcesByDealNameRequest;
const CloseAuditServiceResponse = models.CloseAuditServiceResponse;
const CreateBackupResponse = models.CreateBackupResponse;
const DescribeRollbackTimeValidityResponse = models.DescribeRollbackTimeValidityResponse;
const AuditRuleTemplateInfo = models.AuditRuleTemplateInfo;
const DescribeInstanceSlowQueriesResponse = models.DescribeInstanceSlowQueriesResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const DescribeBackupDownloadUrlResponse = models.DescribeBackupDownloadUrlResponse;
const ResumeServerlessRequest = models.ResumeServerlessRequest;
const InquirePriceCreateRequest = models.InquirePriceCreateRequest;
const CreateAuditRuleTemplateRequest = models.CreateAuditRuleTemplateRequest;
const ModifyBackupConfigResponse = models.ModifyBackupConfigResponse;
const DescribeInstanceSpecsRequest = models.DescribeInstanceSpecsRequest;
const ExportInstanceSlowQueriesRequest = models.ExportInstanceSlowQueriesRequest;
const ParamItem = models.ParamItem;
const ModifyAccountParamsRequest = models.ModifyAccountParamsRequest;
const CynosdbCluster = models.CynosdbCluster;
const CreateAuditRuleTemplateResponse = models.CreateAuditRuleTemplateResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const IsolateClusterResponse = models.IsolateClusterResponse;
const SaleZone = models.SaleZone;
const ObjectTask = models.ObjectTask;
const OpenAuditServiceResponse = models.OpenAuditServiceResponse;
const OfflineClusterResponse = models.OfflineClusterResponse;
const SwitchProxyVpcResponse = models.SwitchProxyVpcResponse;
const RevokeAccountPrivilegesRequest = models.RevokeAccountPrivilegesRequest;
const DescribeAuditRuleTemplatesRequest = models.DescribeAuditRuleTemplatesRequest;
const InstanceSpec = models.InstanceSpec;
const DescribeFlowRequest = models.DescribeFlowRequest;
const AuditLogFile = models.AuditLogFile;
const SetRenewFlagResponse = models.SetRenewFlagResponse;
const Account = models.Account;
const CreateBackupRequest = models.CreateBackupRequest;
const DescribeClusterParamLogsRequest = models.DescribeClusterParamLogsRequest;
const SearchClusterTablesResponse = models.SearchClusterTablesResponse;
const Module = models.Module;
const DescribeMaintainPeriodResponse = models.DescribeMaintainPeriodResponse;
const SwitchProxyVpcRequest = models.SwitchProxyVpcRequest;
const DescribeBackupListResponse = models.DescribeBackupListResponse;
const SaleRegion = models.SaleRegion;
const RollBackClusterResponse = models.RollBackClusterResponse;
const RestartInstanceResponse = models.RestartInstanceResponse;
const DescribeBinlogSaveDaysRequest = models.DescribeBinlogSaveDaysRequest;
const ModifyBackupConfigRequest = models.ModifyBackupConfigRequest;
const ActivateInstanceResponse = models.ActivateInstanceResponse;
const DescribeRollbackTimeValidityRequest = models.DescribeRollbackTimeValidityRequest;
const CreateAuditLogFileRequest = models.CreateAuditLogFileRequest;
const DeleteAuditLogFileRequest = models.DeleteAuditLogFileRequest;
const AddInstancesRequest = models.AddInstancesRequest;
const InquirePriceCreateResponse = models.InquirePriceCreateResponse;
const ModifyClusterSlaveZoneRequest = models.ModifyClusterSlaveZoneRequest;
const GrantAccountPrivilegesResponse = models.GrantAccountPrivilegesResponse;
const ClusterParamModifyLog = models.ClusterParamModifyLog;
const DescribeInstanceSlowQueriesRequest = models.DescribeInstanceSlowQueriesRequest;
const CynosdbInstanceDetail = models.CynosdbInstanceDetail;
const RuleFilters = models.RuleFilters;
const ExportInstanceSlowQueriesResponse = models.ExportInstanceSlowQueriesResponse;
const CynosdbClusterDetail = models.CynosdbClusterDetail;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const SearchClusterDatabasesResponse = models.SearchClusterDatabasesResponse;
const DescribeInstanceDetailRequest = models.DescribeInstanceDetailRequest;
const ModifyMaintainPeriodConfigResponse = models.ModifyMaintainPeriodConfigResponse;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const ModifyBackupNameRequest = models.ModifyBackupNameRequest;
const ModifyInstanceNameResponse = models.ModifyInstanceNameResponse;
const AuditRuleFilters = models.AuditRuleFilters;
const DescribeBinlogSaveDaysResponse = models.DescribeBinlogSaveDaysResponse;
const ModifyClusterParamRequest = models.ModifyClusterParamRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const ModifyAccountParamsResponse = models.ModifyAccountParamsResponse;
const DeleteBackupRequest = models.DeleteBackupRequest;
const TradePrice = models.TradePrice;
const DescribeClusterParamsRequest = models.DescribeClusterParamsRequest;
const AuditLog = models.AuditLog;
const DescribeInstanceSpecsResponse = models.DescribeInstanceSpecsResponse;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const DescribeAccountAllGrantPrivilegesRequest = models.DescribeAccountAllGrantPrivilegesRequest;
const OfflineInstanceResponse = models.OfflineInstanceResponse;
const ModifyAuditServiceResponse = models.ModifyAuditServiceResponse;
const IsolateClusterRequest = models.IsolateClusterRequest;
const DeleteAuditRuleTemplatesResponse = models.DeleteAuditRuleTemplatesResponse;
const DescribeAuditLogFilesRequest = models.DescribeAuditLogFilesRequest;
const DescribeClusterDetailResponse = models.DescribeClusterDetailResponse;
const DescribeClusterInstanceGrpsResponse = models.DescribeClusterInstanceGrpsResponse;
const DescribeBinlogsRequest = models.DescribeBinlogsRequest;
const InputAccount = models.InputAccount;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const ZoneStockInfo = models.ZoneStockInfo;
const InquirePriceRenewResponse = models.InquirePriceRenewResponse;
const ModifyAuditRuleTemplatesResponse = models.ModifyAuditRuleTemplatesResponse;


/**
 * cynosdb client
 * @class
 */
class CynosdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cynosdb.tencentcloudapi.com", "2019-01-07", credential, region, profile);
    }
    
    /**
     * 本接口(ModifyAuditService)用于修改云数据库审计日志保存时长、审计规则等服务配置。
     * @param {ModifyAuditServiceRequest} req
     * @param {function(string, ModifyAuditServiceResponse):void} cb
     * @public
     */
    ModifyAuditService(req, cb) {
        let resp = new ModifyAuditServiceResponse();
        this.request("ModifyAuditService", req, resp, cb);
    }

    /**
     * 下线实例
     * @param {OfflineInstanceRequest} req
     * @param {function(string, OfflineInstanceResponse):void} cb
     * @public
     */
    OfflineInstance(req, cb) {
        let resp = new OfflineInstanceResponse();
        this.request("OfflineInstance", req, resp, cb);
    }

    /**
     * 查询备份文件列表
     * @param {DescribeBackupListRequest} req
     * @param {function(string, DescribeBackupListResponse):void} cb
     * @public
     */
    DescribeBackupList(req, cb) {
        let resp = new DescribeBackupListResponse();
        this.request("DescribeBackupList", req, resp, cb);
    }

    /**
     * 批量回收账号权限
     * @param {RevokeAccountPrivilegesRequest} req
     * @param {function(string, RevokeAccountPrivilegesResponse):void} cb
     * @public
     */
    RevokeAccountPrivileges(req, cb) {
        let resp = new RevokeAccountPrivilegesResponse();
        this.request("RevokeAccountPrivileges", req, resp, cb);
    }

    /**
     * 本接口（RollBackCluster）用于回档集群
     * @param {RollBackClusterRequest} req
     * @param {function(string, RollBackClusterResponse):void} cb
     * @public
     */
    RollBackCluster(req, cb) {
        let resp = new RollBackClusterResponse();
        this.request("RollBackCluster", req, resp, cb);
    }

    /**
     * 查询项目安全组信息
     * @param {DescribeProjectSecurityGroupsRequest} req
     * @param {function(string, DescribeProjectSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeProjectSecurityGroups(req, cb) {
        let resp = new DescribeProjectSecurityGroupsResponse();
        this.request("DescribeProjectSecurityGroups", req, resp, cb);
    }

    /**
     * 此接口（DescribeBinlogSaveDays）用于查询集群的Binlog保留天数。
     * @param {DescribeBinlogSaveDaysRequest} req
     * @param {function(string, DescribeBinlogSaveDaysResponse):void} cb
     * @public
     */
    DescribeBinlogSaveDays(req, cb) {
        let resp = new DescribeBinlogSaveDaysResponse();
        this.request("DescribeBinlogSaveDays", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstanceSpecs）用于查询实例规格
     * @param {DescribeInstanceSpecsRequest} req
     * @param {function(string, DescribeInstanceSpecsResponse):void} cb
     * @public
     */
    DescribeInstanceSpecs(req, cb) {
        let resp = new DescribeInstanceSpecsResponse();
        this.request("DescribeInstanceSpecs", req, resp, cb);
    }

    /**
     * 增加从可用区
     * @param {AddClusterSlaveZoneRequest} req
     * @param {function(string, AddClusterSlaveZoneResponse):void} cb
     * @public
     */
    AddClusterSlaveZone(req, cb) {
        let resp = new AddClusterSlaveZoneResponse();
        this.request("AddClusterSlaveZone", req, resp, cb);
    }

    /**
     * 查询用户指定产品下的所有参数模板信息
     * @param {DescribeParamTemplatesRequest} req
     * @param {function(string, DescribeParamTemplatesResponse):void} cb
     * @public
     */
    DescribeParamTemplates(req, cb) {
        let resp = new DescribeParamTemplatesResponse();
        this.request("DescribeParamTemplates", req, resp, cb);
    }

    /**
     * 为集群删除手动备份，无法删除自动备份
     * @param {DeleteBackupRequest} req
     * @param {function(string, DeleteBackupResponse):void} cb
     * @public
     */
    DeleteBackup(req, cb) {
        let resp = new DeleteBackupResponse();
        this.request("DeleteBackup", req, resp, cb);
    }

    /**
     * 本接口（DescribeClusterInstanceGrps）用于查询实例组信息。
     * @param {DescribeClusterInstanceGrpsRequest} req
     * @param {function(string, DescribeClusterInstanceGrpsResponse):void} cb
     * @public
     */
    DescribeClusterInstanceGrps(req, cb) {
        let resp = new DescribeClusterInstanceGrpsResponse();
        this.request("DescribeClusterInstanceGrps", req, resp, cb);
    }

    /**
     * 修改实例组ip，端口
     * @param {ModifyVipVportRequest} req
     * @param {function(string, ModifyVipVportResponse):void} cb
     * @public
     */
    ModifyVipVport(req, cb) {
        let resp = new ModifyVipVportResponse();
        this.request("ModifyVipVport", req, resp, cb);
    }

    /**
     * TDSQL-C for MySQL实例开通审计服务
     * @param {OpenAuditServiceRequest} req
     * @param {function(string, OpenAuditServiceResponse):void} cb
     * @public
     */
    OpenAuditService(req, cb) {
        let resp = new OpenAuditServiceResponse();
        this.request("OpenAuditService", req, resp, cb);
    }

    /**
     * 创建审计规则模版
     * @param {CreateAuditRuleTemplateRequest} req
     * @param {function(string, CreateAuditRuleTemplateResponse):void} cb
     * @public
     */
    CreateAuditRuleTemplate(req, cb) {
        let resp = new CreateAuditRuleTemplateResponse();
        this.request("CreateAuditRuleTemplate", req, resp, cb);
    }

    /**
     * 此接口（ModifyBackupName）用于修改备份文件备注名。
     * @param {ModifyBackupNameRequest} req
     * @param {function(string, ModifyBackupNameResponse):void} cb
     * @public
     */
    ModifyBackupName(req, cb) {
        let resp = new ModifyBackupNameResponse();
        this.request("ModifyBackupName", req, resp, cb);
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
     * 本接口(ResetAccountPassword)用于重置实例的数据库账号密码。
     * @param {ResetAccountPasswordRequest} req
     * @param {function(string, ResetAccountPasswordResponse):void} cb
     * @public
     */
    ResetAccountPassword(req, cb) {
        let resp = new ResetAccountPasswordResponse();
        this.request("ResetAccountPassword", req, resp, cb);
    }

    /**
     * 本接口(DescribeInstanceDetail)用于查询实例详情。
     * @param {DescribeInstanceDetailRequest} req
     * @param {function(string, DescribeInstanceDetailResponse):void} cb
     * @public
     */
    DescribeInstanceDetail(req, cb) {
        let resp = new DescribeInstanceDetailResponse();
        this.request("DescribeInstanceDetail", req, resp, cb);
    }

    /**
     * 查询审计规则模版信息
     * @param {DescribeAuditRuleTemplatesRequest} req
     * @param {function(string, DescribeAuditRuleTemplatesResponse):void} cb
     * @public
     */
    DescribeAuditRuleTemplates(req, cb) {
        let resp = new DescribeAuditRuleTemplatesResponse();
        this.request("DescribeAuditRuleTemplates", req, resp, cb);
    }

    /**
     * 查询指定集群有效回滚时间范围
     * @param {DescribeRollbackTimeRangeRequest} req
     * @param {function(string, DescribeRollbackTimeRangeResponse):void} cb
     * @public
     */
    DescribeRollbackTimeRange(req, cb) {
        let resp = new DescribeRollbackTimeRangeResponse();
        this.request("DescribeRollbackTimeRange", req, resp, cb);
    }

    /**
     * 本接口（DescribeFlow）用于查询任务流信息
     * @param {DescribeFlowRequest} req
     * @param {function(string, DescribeFlowResponse):void} cb
     * @public
     */
    DescribeFlow(req, cb) {
        let resp = new DescribeFlowResponse();
        this.request("DescribeFlow", req, resp, cb);
    }

    /**
     * 修改指定集群的备份配置
     * @param {ModifyBackupConfigRequest} req
     * @param {function(string, ModifyBackupConfigResponse):void} cb
     * @public
     */
    ModifyBackupConfig(req, cb) {
        let resp = new ModifyBackupConfigResponse();
        this.request("ModifyBackupConfig", req, resp, cb);
    }

    /**
     * 本接口(DescribeInstances)用于查询实例列表。
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 删除审计规则模版
     * @param {DeleteAuditRuleTemplatesRequest} req
     * @param {function(string, DeleteAuditRuleTemplatesResponse):void} cb
     * @public
     */
    DeleteAuditRuleTemplates(req, cb) {
        let resp = new DeleteAuditRuleTemplatesResponse();
        this.request("DeleteAuditRuleTemplates", req, resp, cb);
    }

    /**
     * 本接口（DescribeClusterParamLogs）查询参数修改日志
     * @param {DescribeClusterParamLogsRequest} req
     * @param {function(string, DescribeClusterParamLogsResponse):void} cb
     * @public
     */
    DescribeClusterParamLogs(req, cb) {
        let resp = new DescribeClusterParamLogsResponse();
        this.request("DescribeClusterParamLogs", req, resp, cb);
    }

    /**
     * 修改维护时间配置
     * @param {ModifyMaintainPeriodConfigRequest} req
     * @param {function(string, ModifyMaintainPeriodConfigResponse):void} cb
     * @public
     */
    ModifyMaintainPeriodConfig(req, cb) {
        let resp = new ModifyMaintainPeriodConfigResponse();
        this.request("ModifyMaintainPeriodConfig", req, resp, cb);
    }

    /**
     * 本接口(DescribeAuditLogs)用于查询数据库审计日志。
     * @param {DescribeAuditLogsRequest} req
     * @param {function(string, DescribeAuditLogsResponse):void} cb
     * @public
     */
    DescribeAuditLogs(req, cb) {
        let resp = new DescribeAuditLogsResponse();
        this.request("DescribeAuditLogs", req, resp, cb);
    }

    /**
     * 修改从可用区
     * @param {ModifyClusterSlaveZoneRequest} req
     * @param {function(string, ModifyClusterSlaveZoneResponse):void} cb
     * @public
     */
    ModifyClusterSlaveZone(req, cb) {
        let resp = new ModifyClusterSlaveZoneResponse();
        this.request("ModifyClusterSlaveZone", req, resp, cb);
    }

    /**
     * 修改账号参数
     * @param {ModifyAccountParamsRequest} req
     * @param {function(string, ModifyAccountParamsResponse):void} cb
     * @public
     */
    ModifyAccountParams(req, cb) {
        let resp = new ModifyAccountParamsResponse();
        this.request("ModifyAccountParams", req, resp, cb);
    }

    /**
     * 本接口（DescribeClusterParams）用于查询集群参数
     * @param {DescribeClusterParamsRequest} req
     * @param {function(string, DescribeClusterParamsResponse):void} cb
     * @public
     */
    DescribeClusterParams(req, cb) {
        let resp = new DescribeClusterParamsResponse();
        this.request("DescribeClusterParams", req, resp, cb);
    }

    /**
     * 为集群创建手动备份
     * @param {CreateBackupRequest} req
     * @param {function(string, CreateBackupResponse):void} cb
     * @public
     */
    CreateBackup(req, cb) {
        let resp = new CreateBackupResponse();
        this.request("CreateBackup", req, resp, cb);
    }

    /**
     * TDSQL-C for MySQL实例关闭审计服务
     * @param {CloseAuditServiceRequest} req
     * @param {function(string, CloseAuditServiceResponse):void} cb
     * @public
     */
    CloseAuditService(req, cb) {
        let resp = new CloseAuditServiceResponse();
        this.request("CloseAuditService", req, resp, cb);
    }

    /**
     * 本接口(ModifyInstanceName)用于修改实例名称。
     * @param {ModifyInstanceNameRequest} req
     * @param {function(string, ModifyInstanceNameResponse):void} cb
     * @public
     */
    ModifyInstanceName(req, cb) {
        let resp = new ModifyInstanceNameResponse();
        this.request("ModifyInstanceName", req, resp, cb);
    }

    /**
     * 查询实例维护时间窗
     * @param {DescribeMaintainPeriodRequest} req
     * @param {function(string, DescribeMaintainPeriodResponse):void} cb
     * @public
     */
    DescribeMaintainPeriod(req, cb) {
        let resp = new DescribeMaintainPeriodResponse();
        this.request("DescribeMaintainPeriod", req, resp, cb);
    }

    /**
     * 恢复serverless集群
     * @param {ResumeServerlessRequest} req
     * @param {function(string, ResumeServerlessResponse):void} cb
     * @public
     */
    ResumeServerless(req, cb) {
        let resp = new ResumeServerlessResponse();
        this.request("ResumeServerless", req, resp, cb);
    }

    /**
     * 重启实例
     * @param {RestartInstanceRequest} req
     * @param {function(string, RestartInstanceResponse):void} cb
     * @public
     */
    RestartInstance(req, cb) {
        let resp = new RestartInstanceResponse();
        this.request("RestartInstance", req, resp, cb);
    }

    /**
     * 查询集群列表
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        let resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
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
     * 隔离集群
     * @param {IsolateClusterRequest} req
     * @param {function(string, IsolateClusterResponse):void} cb
     * @public
     */
    IsolateCluster(req, cb) {
        let resp = new IsolateClusterResponse();
        this.request("IsolateCluster", req, resp, cb);
    }

    /**
     * 查询新购集群价格
     * @param {InquirePriceCreateRequest} req
     * @param {function(string, InquirePriceCreateResponse):void} cb
     * @public
     */
    InquirePriceCreate(req, cb) {
        let resp = new InquirePriceCreateResponse();
        this.request("InquirePriceCreate", req, resp, cb);
    }

    /**
     * 此接口（DescribeBackupDownloadUrl）用于查询集群备份文件下载地址。
     * @param {DescribeBackupDownloadUrlRequest} req
     * @param {function(string, DescribeBackupDownloadUrlResponse):void} cb
     * @public
     */
    DescribeBackupDownloadUrl(req, cb) {
        let resp = new DescribeBackupDownloadUrlResponse();
        this.request("DescribeBackupDownloadUrl", req, resp, cb);
    }

    /**
     * 更换集群vpc
     * @param {SwitchClusterVpcRequest} req
     * @param {function(string, SwitchClusterVpcResponse):void} cb
     * @public
     */
    SwitchClusterVpc(req, cb) {
        let resp = new SwitchClusterVpcResponse();
        this.request("SwitchClusterVpc", req, resp, cb);
    }

    /**
     * 安全组批量绑定云资源
     * @param {AssociateSecurityGroupsRequest} req
     * @param {function(string, AssociateSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateSecurityGroups(req, cb) {
        let resp = new AssociateSecurityGroupsResponse();
        this.request("AssociateSecurityGroups", req, resp, cb);
    }

    /**
     * 删除从可用区
     * @param {RemoveClusterSlaveZoneRequest} req
     * @param {function(string, RemoveClusterSlaveZoneResponse):void} cb
     * @public
     */
    RemoveClusterSlaveZone(req, cb) {
        let resp = new RemoveClusterSlaveZoneResponse();
        this.request("RemoveClusterSlaveZone", req, resp, cb);
    }

    /**
     * 修改集群名称
     * @param {ModifyClusterNameRequest} req
     * @param {function(string, ModifyClusterNameResponse):void} cb
     * @public
     */
    ModifyClusterName(req, cb) {
        let resp = new ModifyClusterNameResponse();
        this.request("ModifyClusterName", req, resp, cb);
    }

    /**
     * 本接口(SwitchProxyVpc)更换数据库代理vpc
     * @param {SwitchProxyVpcRequest} req
     * @param {function(string, SwitchProxyVpcResponse):void} cb
     * @public
     */
    SwitchProxyVpc(req, cb) {
        let resp = new SwitchProxyVpcResponse();
        this.request("SwitchProxyVpc", req, resp, cb);
    }

    /**
     * 该接口（DescribeClusterDetail）显示集群详情
     * @param {DescribeClusterDetailRequest} req
     * @param {function(string, DescribeClusterDetailResponse):void} cb
     * @public
     */
    DescribeClusterDetail(req, cb) {
        let resp = new DescribeClusterDetailResponse();
        this.request("DescribeClusterDetail", req, resp, cb);
    }

    /**
     * 获取实例的审计规则
     * @param {DescribeAuditRuleWithInstanceIdsRequest} req
     * @param {function(string, DescribeAuditRuleWithInstanceIdsResponse):void} cb
     * @public
     */
    DescribeAuditRuleWithInstanceIds(req, cb) {
        let resp = new DescribeAuditRuleWithInstanceIdsResponse();
        this.request("DescribeAuditRuleWithInstanceIds", req, resp, cb);
    }

    /**
     * 本接口(IsolateInstance)用于隔离实例。
     * @param {IsolateInstanceRequest} req
     * @param {function(string, IsolateInstanceResponse):void} cb
     * @public
     */
    IsolateInstance(req, cb) {
        let resp = new IsolateInstanceResponse();
        this.request("IsolateInstance", req, resp, cb);
    }

    /**
     * 获取指定集群的备份配置信息，包括全量备份时间段，备份文件保留时间
     * @param {DescribeBackupConfigRequest} req
     * @param {function(string, DescribeBackupConfigResponse):void} cb
     * @public
     */
    DescribeBackupConfig(req, cb) {
        let resp = new DescribeBackupConfigResponse();
        this.request("DescribeBackupConfig", req, resp, cb);
    }

    /**
     * 账号所有权限
     * @param {DescribeAccountAllGrantPrivilegesRequest} req
     * @param {function(string, DescribeAccountAllGrantPrivilegesResponse):void} cb
     * @public
     */
    DescribeAccountAllGrantPrivileges(req, cb) {
        let resp = new DescribeAccountAllGrantPrivilegesResponse();
        this.request("DescribeAccountAllGrantPrivileges", req, resp, cb);
    }

    /**
     * 查询续费集群价格
     * @param {InquirePriceRenewRequest} req
     * @param {function(string, InquirePriceRenewResponse):void} cb
     * @public
     */
    InquirePriceRenew(req, cb) {
        let resp = new InquirePriceRenewResponse();
        this.request("InquirePriceRenew", req, resp, cb);
    }

    /**
     * 此接口（DescribeBinlogDownloadUrl）用于查询Binlog的下载地址。
     * @param {DescribeBinlogDownloadUrlRequest} req
     * @param {function(string, DescribeBinlogDownloadUrlResponse):void} cb
     * @public
     */
    DescribeBinlogDownloadUrl(req, cb) {
        let resp = new DescribeBinlogDownloadUrlResponse();
        this.request("DescribeBinlogDownloadUrl", req, resp, cb);
    }

    /**
     * 本接口(DescribeAccounts)用于查询数据库管理账号。
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * 根据计费订单id查询资源列表
     * @param {DescribeResourcesByDealNameRequest} req
     * @param {function(string, DescribeResourcesByDealNameResponse):void} cb
     * @public
     */
    DescribeResourcesByDealName(req, cb) {
        let resp = new DescribeResourcesByDealNameResponse();
        this.request("DescribeResourcesByDealName", req, resp, cb);
    }

    /**
     * 此接口（ExportInstanceSlowQueries）用于导出实例慢日志。
     * @param {ExportInstanceSlowQueriesRequest} req
     * @param {function(string, ExportInstanceSlowQueriesResponse):void} cb
     * @public
     */
    ExportInstanceSlowQueries(req, cb) {
        let resp = new ExportInstanceSlowQueriesResponse();
        this.request("ExportInstanceSlowQueries", req, resp, cb);
    }

    /**
     * 暂停serverless集群
     * @param {PauseServerlessRequest} req
     * @param {function(string, PauseServerlessResponse):void} cb
     * @public
     */
    PauseServerless(req, cb) {
        let resp = new PauseServerlessResponse();
        this.request("PauseServerless", req, resp, cb);
    }

    /**
     * 修改集群参数
     * @param {ModifyClusterParamRequest} req
     * @param {function(string, ModifyClusterParamResponse):void} cb
     * @public
     */
    ModifyClusterParam(req, cb) {
        let resp = new ModifyClusterParamResponse();
        this.request("ModifyClusterParam", req, resp, cb);
    }

    /**
     * 升级实例
     * @param {UpgradeInstanceRequest} req
     * @param {function(string, UpgradeInstanceResponse):void} cb
     * @public
     */
    UpgradeInstance(req, cb) {
        let resp = new UpgradeInstanceResponse();
        this.request("UpgradeInstance", req, resp, cb);
    }

    /**
     * 创建集群
     * @param {CreateClustersRequest} req
     * @param {function(string, CreateClustersResponse):void} cb
     * @public
     */
    CreateClusters(req, cb) {
        let resp = new CreateClustersResponse();
        this.request("CreateClusters", req, resp, cb);
    }

    /**
     * 此接口（DescribeBinlogs）用来查询集群Binlog日志列表。
     * @param {DescribeBinlogsRequest} req
     * @param {function(string, DescribeBinlogsResponse):void} cb
     * @public
     */
    DescribeBinlogs(req, cb) {
        let resp = new DescribeBinlogsResponse();
        this.request("DescribeBinlogs", req, resp, cb);
    }

    /**
     * 创建账号
     * @param {CreateAccountsRequest} req
     * @param {function(string, CreateAccountsResponse):void} cb
     * @public
     */
    CreateAccounts(req, cb) {
        let resp = new CreateAccountsResponse();
        this.request("CreateAccounts", req, resp, cb);
    }

    /**
     * 升级预付费存储
     * @param {ModifyClusterStorageRequest} req
     * @param {function(string, ModifyClusterStorageResponse):void} cb
     * @public
     */
    ModifyClusterStorage(req, cb) {
        let resp = new ModifyClusterStorageResponse();
        this.request("ModifyClusterStorage", req, resp, cb);
    }

    /**
     * 本接口(ActivateInstance)用于恢复已隔离的实例访问。
     * @param {ActivateInstanceRequest} req
     * @param {function(string, ActivateInstanceResponse):void} cb
     * @public
     */
    ActivateInstance(req, cb) {
        let resp = new ActivateInstanceResponse();
        this.request("ActivateInstance", req, resp, cb);
    }

    /**
     * 查询实例安全组信息
     * @param {DescribeDBSecurityGroupsRequest} req
     * @param {function(string, DescribeDBSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeDBSecurityGroups(req, cb) {
        let resp = new DescribeDBSecurityGroupsResponse();
        this.request("DescribeDBSecurityGroups", req, resp, cb);
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
     * 本接口(DescribeZones)用于查询可售卖地域可用区信息。
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * SetRenewFlag设置实例的自动续费功能
     * @param {SetRenewFlagRequest} req
     * @param {function(string, SetRenewFlagResponse):void} cb
     * @public
     */
    SetRenewFlag(req, cb) {
        let resp = new SetRenewFlagResponse();
        this.request("SetRenewFlag", req, resp, cb);
    }

    /**
     * 下线集群
     * @param {OfflineClusterRequest} req
     * @param {function(string, OfflineClusterResponse):void} cb
     * @public
     */
    OfflineCluster(req, cb) {
        let resp = new OfflineClusterResponse();
        this.request("OfflineCluster", req, resp, cb);
    }

    /**
     * 修改审计规则模版
     * @param {ModifyAuditRuleTemplatesRequest} req
     * @param {function(string, ModifyAuditRuleTemplatesResponse):void} cb
     * @public
     */
    ModifyAuditRuleTemplates(req, cb) {
        let resp = new ModifyAuditRuleTemplatesResponse();
        this.request("ModifyAuditRuleTemplates", req, resp, cb);
    }

    /**
     * 批量授权账号权限
     * @param {GrantAccountPrivilegesRequest} req
     * @param {function(string, GrantAccountPrivilegesResponse):void} cb
     * @public
     */
    GrantAccountPrivileges(req, cb) {
        let resp = new GrantAccountPrivilegesResponse();
        this.request("GrantAccountPrivileges", req, resp, cb);
    }

    /**
     * 本接口(SearchClusterTables)搜索集群数据表列表
     * @param {SearchClusterTablesRequest} req
     * @param {function(string, SearchClusterTablesResponse):void} cb
     * @public
     */
    SearchClusterTables(req, cb) {
        let resp = new SearchClusterTablesResponse();
        this.request("SearchClusterTables", req, resp, cb);
    }

    /**
     * 切换到从可用区
     * @param {SwitchClusterZoneRequest} req
     * @param {function(string, SwitchClusterZoneResponse):void} cb
     * @public
     */
    SwitchClusterZone(req, cb) {
        let resp = new SwitchClusterZoneResponse();
        this.request("SwitchClusterZone", req, resp, cb);
    }

    /**
     * 安全组批量解绑云资源
     * @param {DisassociateSecurityGroupsRequest} req
     * @param {function(string, DisassociateSecurityGroupsResponse):void} cb
     * @public
     */
    DisassociateSecurityGroups(req, cb) {
        let resp = new DisassociateSecurityGroupsResponse();
        this.request("DisassociateSecurityGroups", req, resp, cb);
    }

    /**
     * 本接口(SearchClusterDatabases)搜索集群database列表
     * @param {SearchClusterDatabasesRequest} req
     * @param {function(string, SearchClusterDatabasesResponse):void} cb
     * @public
     */
    SearchClusterDatabases(req, cb) {
        let resp = new SearchClusterDatabasesResponse();
        this.request("SearchClusterDatabases", req, resp, cb);
    }

    /**
     * 此接口（DescribeInstanceSlowQueries）用于查询实例慢查询日志。
     * @param {DescribeInstanceSlowQueriesRequest} req
     * @param {function(string, DescribeInstanceSlowQueriesResponse):void} cb
     * @public
     */
    DescribeInstanceSlowQueries(req, cb) {
        let resp = new DescribeInstanceSlowQueriesResponse();
        this.request("DescribeInstanceSlowQueries", req, resp, cb);
    }

    /**
     * 指定时间和集群查询是否可回滚
     * @param {DescribeRollbackTimeValidityRequest} req
     * @param {function(string, DescribeRollbackTimeValidityResponse):void} cb
     * @public
     */
    DescribeRollbackTimeValidity(req, cb) {
        let resp = new DescribeRollbackTimeValidityResponse();
        this.request("DescribeRollbackTimeValidity", req, resp, cb);
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
     * 本接口（AddInstances）用于集群添加实例
     * @param {AddInstancesRequest} req
     * @param {function(string, AddInstancesResponse):void} cb
     * @public
     */
    AddInstances(req, cb) {
        let resp = new AddInstancesResponse();
        this.request("AddInstances", req, resp, cb);
    }


}
module.exports = CynosdbClient;
