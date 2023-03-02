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
const SetAutoRenewFlagRequest = models.SetAutoRenewFlagRequest;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const DescribeDBXlogsRequest = models.DescribeDBXlogsRequest;
const CreateReadOnlyGroupNetworkAccessRequest = models.CreateReadOnlyGroupNetworkAccessRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const DeleteReadOnlyGroupResponse = models.DeleteReadOnlyGroupResponse;
const CreateInstancesRequest = models.CreateInstancesRequest;
const SpecItemInfo = models.SpecItemInfo;
const ParameterTemplate = models.ParameterTemplate;
const CreateDBInstanceNetworkAccessResponse = models.CreateDBInstanceNetworkAccessResponse;
const DescribeAvailableRecoveryTimeResponse = models.DescribeAvailableRecoveryTimeResponse;
const ModifyDBInstanceReadOnlyGroupResponse = models.ModifyDBInstanceReadOnlyGroupResponse;
const CloneDBInstanceRequest = models.CloneDBInstanceRequest;
const DescribeCloneDBInstanceSpecRequest = models.DescribeCloneDBInstanceSpecRequest;
const BackupPlan = models.BackupPlan;
const OpenServerlessDBExtranetAccessRequest = models.OpenServerlessDBExtranetAccessRequest;
const RenewInstanceResponse = models.RenewInstanceResponse;
const DeleteServerlessDBInstanceResponse = models.DeleteServerlessDBInstanceResponse;
const ModifyReadOnlyGroupConfigRequest = models.ModifyReadOnlyGroupConfigRequest;
const AddDBInstanceToReadOnlyGroupRequest = models.AddDBInstanceToReadOnlyGroupRequest;
const DescribeProductConfigRequest = models.DescribeProductConfigRequest;
const RemoveDBInstanceFromReadOnlyGroupRequest = models.RemoveDBInstanceFromReadOnlyGroupRequest;
const InitDBInstancesResponse = models.InitDBInstancesResponse;
const DescribeDefaultParametersRequest = models.DescribeDefaultParametersRequest;
const RenewInstanceRequest = models.RenewInstanceRequest;
const RebalanceReadOnlyGroupRequest = models.RebalanceReadOnlyGroupRequest;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DBInstanceNetInfo = models.DBInstanceNetInfo;
const ModifyDBInstanceDeploymentRequest = models.ModifyDBInstanceDeploymentRequest;
const DeleteReadOnlyGroupNetworkAccessRequest = models.DeleteReadOnlyGroupNetworkAccessRequest;
const ZoneInfo = models.ZoneInfo;
const InquiryPriceCreateDBInstancesRequest = models.InquiryPriceCreateDBInstancesRequest;
const NormalQueryItem = models.NormalQueryItem;
const Tag = models.Tag;
const DescribeDBInstanceAttributeRequest = models.DescribeDBInstanceAttributeRequest;
const CloseServerlessDBExtranetAccessRequest = models.CloseServerlessDBExtranetAccessRequest;
const CloneDBInstanceResponse = models.CloneDBInstanceResponse;
const ModifyDBInstanceReadOnlyGroupRequest = models.ModifyDBInstanceReadOnlyGroupRequest;
const AddDBInstanceToReadOnlyGroupResponse = models.AddDBInstanceToReadOnlyGroupResponse;
const CreateReadOnlyDBInstanceResponse = models.CreateReadOnlyDBInstanceResponse;
const DescribeAvailableRecoveryTimeRequest = models.DescribeAvailableRecoveryTimeRequest;
const DurationAnalysis = models.DurationAnalysis;
const DescribeDBInstanceParametersRequest = models.DescribeDBInstanceParametersRequest;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const OpenServerlessDBExtranetAccessResponse = models.OpenServerlessDBExtranetAccessResponse;
const ModifyParameterTemplateRequest = models.ModifyParameterTemplateRequest;
const InquiryPriceCreateDBInstancesResponse = models.InquiryPriceCreateDBInstancesResponse;
const CreateDBInstanceNetworkAccessRequest = models.CreateDBInstanceNetworkAccessRequest;
const ModifySwitchTimePeriodResponse = models.ModifySwitchTimePeriodResponse;
const DescribeDefaultParametersResponse = models.DescribeDefaultParametersResponse;
const ServerlessDBInstanceNetInfo = models.ServerlessDBInstanceNetInfo;
const DescribeBackupPlansResponse = models.DescribeBackupPlansResponse;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const ReadOnlyGroup = models.ReadOnlyGroup;
const ModifyDBInstanceSpecRequest = models.ModifyDBInstanceSpecRequest;
const ModifyAccountRemarkResponse = models.ModifyAccountRemarkResponse;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const DescribeZonesRequest = models.DescribeZonesRequest;
const SpecInfo = models.SpecInfo;
const ParamVersionRelation = models.ParamVersionRelation;
const DescribeReadOnlyGroupsResponse = models.DescribeReadOnlyGroupsResponse;
const SetAutoRenewFlagResponse = models.SetAutoRenewFlagResponse;
const NetworkAccess = models.NetworkAccess;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const RemoveDBInstanceFromReadOnlyGroupResponse = models.RemoveDBInstanceFromReadOnlyGroupResponse;
const ModifyDBInstancesProjectResponse = models.ModifyDBInstancesProjectResponse;
const DescribeParameterTemplatesResponse = models.DescribeParameterTemplatesResponse;
const ParamSpecRelation = models.ParamSpecRelation;
const PgDeal = models.PgDeal;
const DeleteReadOnlyGroupNetworkAccessResponse = models.DeleteReadOnlyGroupNetworkAccessResponse;
const DescribeDBErrlogsRequest = models.DescribeDBErrlogsRequest;
const DBBackup = models.DBBackup;
const ServerlessDBAccount = models.ServerlessDBAccount;
const ModifyDBInstanceDeploymentResponse = models.ModifyDBInstanceDeploymentResponse;
const DeleteParameterTemplateRequest = models.DeleteParameterTemplateRequest;
const DescribeParamsEventRequest = models.DescribeParamsEventRequest;
const EventInfo = models.EventInfo;
const CreateInstancesResponse = models.CreateInstancesResponse;
const AnalysisItems = models.AnalysisItems;
const Xlog = models.Xlog;
const DescribeServerlessDBInstancesRequest = models.DescribeServerlessDBInstancesRequest;
const DescribeDBBackupsResponse = models.DescribeDBBackupsResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeSlowQueryListResponse = models.DescribeSlowQueryListResponse;
const ServerlessDBInstance = models.ServerlessDBInstance;
const CreateReadOnlyGroupRequest = models.CreateReadOnlyGroupRequest;
const CreateReadOnlyGroupNetworkAccessResponse = models.CreateReadOnlyGroupNetworkAccessResponse;
const DescribeParamsEventResponse = models.DescribeParamsEventResponse;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const CloseServerlessDBExtranetAccessResponse = models.CloseServerlessDBExtranetAccessResponse;
const EventItem = models.EventItem;
const RestartDBInstanceRequest = models.RestartDBInstanceRequest;
const DescribeDBInstanceSecurityGroupsResponse = models.DescribeDBInstanceSecurityGroupsResponse;
const CreateParameterTemplateResponse = models.CreateParameterTemplateResponse;
const ParamInfo = models.ParamInfo;
const Detail = models.Detail;
const SecurityGroup = models.SecurityGroup;
const IsolateDBInstancesResponse = models.IsolateDBInstancesResponse;
const OpenDBExtranetAccessResponse = models.OpenDBExtranetAccessResponse;
const InquiryPriceUpgradeDBInstanceRequest = models.InquiryPriceUpgradeDBInstanceRequest;
const RebalanceReadOnlyGroupResponse = models.RebalanceReadOnlyGroupResponse;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const EncryptionKey = models.EncryptionKey;
const InquiryPriceRenewDBInstanceResponse = models.InquiryPriceRenewDBInstanceResponse;
const DescribeSlowQueryAnalysisRequest = models.DescribeSlowQueryAnalysisRequest;
const ErrLogDetail = models.ErrLogDetail;
const DescribeServerlessDBInstancesResponse = models.DescribeServerlessDBInstancesResponse;
const IsolateDBInstancesRequest = models.IsolateDBInstancesRequest;
const DescribeParameterTemplatesRequest = models.DescribeParameterTemplatesRequest;
const InitDBInstancesRequest = models.InitDBInstancesRequest;
const DeleteDBInstanceNetworkAccessRequest = models.DeleteDBInstanceNetworkAccessRequest;
const DBInstance = models.DBInstance;
const DeleteParameterTemplateResponse = models.DeleteParameterTemplateResponse;
const DeleteReadOnlyGroupRequest = models.DeleteReadOnlyGroupRequest;
const DescribeDBBackupsRequest = models.DescribeDBBackupsRequest;
const Filter = models.Filter;
const DisIsolateDBInstancesResponse = models.DisIsolateDBInstancesResponse;
const ModifyDBInstanceParametersResponse = models.ModifyDBInstanceParametersResponse;
const OpenDBExtranetAccessRequest = models.OpenDBExtranetAccessRequest;
const SlowlogDetail = models.SlowlogDetail;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const DBNode = models.DBNode;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const CloseDBExtranetAccessResponse = models.CloseDBExtranetAccessResponse;
const CreateReadOnlyDBInstanceRequest = models.CreateReadOnlyDBInstanceRequest;
const DescribeCloneDBInstanceSpecResponse = models.DescribeCloneDBInstanceSpecResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const CreateServerlessDBInstanceResponse = models.CreateServerlessDBInstanceResponse;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const DescribeProductConfigResponse = models.DescribeProductConfigResponse;
const DescribeOrdersRequest = models.DescribeOrdersRequest;
const CloseDBExtranetAccessRequest = models.CloseDBExtranetAccessRequest;
const ModifyParameterTemplateResponse = models.ModifyParameterTemplateResponse;
const DescribeEncryptionKeysRequest = models.DescribeEncryptionKeysRequest;
const ModifyBackupPlanResponse = models.ModifyBackupPlanResponse;
const DestroyDBInstanceRequest = models.DestroyDBInstanceRequest;
const CreateServerlessDBInstanceRequest = models.CreateServerlessDBInstanceRequest;
const InquiryPriceRenewDBInstanceRequest = models.InquiryPriceRenewDBInstanceRequest;
const CreateReadOnlyGroupResponse = models.CreateReadOnlyGroupResponse;
const DeleteDBInstanceNetworkAccessResponse = models.DeleteDBInstanceNetworkAccessResponse;
const DeleteServerlessDBInstanceRequest = models.DeleteServerlessDBInstanceRequest;
const ModifyReadOnlyGroupConfigResponse = models.ModifyReadOnlyGroupConfigResponse;
const AccountInfo = models.AccountInfo;
const ModifyAccountRemarkRequest = models.ModifyAccountRemarkRequest;
const DescribeParameterTemplateAttributesRequest = models.DescribeParameterTemplateAttributesRequest;
const DescribeDBErrlogsResponse = models.DescribeDBErrlogsResponse;
const ModifyBackupPlanRequest = models.ModifyBackupPlanRequest;
const ParamEntry = models.ParamEntry;
const InquiryPriceUpgradeDBInstanceResponse = models.InquiryPriceUpgradeDBInstanceResponse;
const CreateParameterTemplateRequest = models.CreateParameterTemplateRequest;
const ModifySwitchTimePeriodRequest = models.ModifySwitchTimePeriodRequest;
const DescribeSlowQueryListRequest = models.DescribeSlowQueryListRequest;
const DescribeDBInstanceParametersResponse = models.DescribeDBInstanceParametersResponse;
const RegionInfo = models.RegionInfo;
const DisIsolateDBInstancesRequest = models.DisIsolateDBInstancesRequest;
const RestartDBInstanceResponse = models.RestartDBInstanceResponse;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const DescribeDBInstanceSecurityGroupsRequest = models.DescribeDBInstanceSecurityGroupsRequest;
const DescribeBackupPlansRequest = models.DescribeBackupPlansRequest;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const DescribeSlowQueryAnalysisResponse = models.DescribeSlowQueryAnalysisResponse;
const ModifyDBInstanceParametersRequest = models.ModifyDBInstanceParametersRequest;
const RawSlowQuery = models.RawSlowQuery;
const DescribeReadOnlyGroupsRequest = models.DescribeReadOnlyGroupsRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const DescribeParameterTemplateAttributesResponse = models.DescribeParameterTemplateAttributesResponse;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;
const ModifyDBInstancesProjectRequest = models.ModifyDBInstancesProjectRequest;
const DescribeDBSlowlogsRequest = models.DescribeDBSlowlogsRequest;
const DestroyDBInstanceResponse = models.DestroyDBInstanceResponse;
const DescribeDBInstanceAttributeResponse = models.DescribeDBInstanceAttributeResponse;
const PolicyRule = models.PolicyRule;
const ModifyDBInstanceSpecResponse = models.ModifyDBInstanceSpecResponse;
const DescribeDBXlogsResponse = models.DescribeDBXlogsResponse;
const DescribeEncryptionKeysResponse = models.DescribeEncryptionKeysResponse;
const DescribeDBSlowlogsResponse = models.DescribeDBSlowlogsResponse;
const CreateDBInstancesResponse = models.CreateDBInstancesResponse;


/**
 * postgres client
 * @class
 */
class PostgresClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("postgres.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    
    /**
     * 可对RO组进行网络的添加操作。
     * @param {CreateReadOnlyGroupNetworkAccessRequest} req
     * @param {function(string, CreateReadOnlyGroupNetworkAccessResponse):void} cb
     * @public
     */
    CreateReadOnlyGroupNetworkAccess(req, cb) {
        let resp = new CreateReadOnlyGroupNetworkAccessResponse();
        this.request("CreateReadOnlyGroupNetworkAccess", req, resp, cb);
    }

    /**
     * 获取实例的密钥信息列表。
     * @param {DescribeEncryptionKeysRequest} req
     * @param {function(string, DescribeEncryptionKeysResponse):void} cb
     * @public
     */
    DescribeEncryptionKeys(req, cb) {
        let resp = new DescribeEncryptionKeysResponse();
        this.request("DescribeEncryptionKeys", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBInstancesProject）用于将实例转至其他项目。
     * @param {ModifyDBInstancesProjectRequest} req
     * @param {function(string, ModifyDBInstancesProjectResponse):void} cb
     * @public
     */
    ModifyDBInstancesProject(req, cb) {
        let resp = new ModifyDBInstancesProjectResponse();
        this.request("ModifyDBInstancesProject", req, resp, cb);
    }

    /**
     * 本接口（DescribeOrders）用于获取订单信息。
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req, cb) {
        let resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
    }

    /**
     * 本接口 (DescribeDBInstances) 用于查询一个或多个实例的详细信息。
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        let resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }

    /**
     * 可对RO组进行网络的删除操作。
     * @param {DeleteReadOnlyGroupNetworkAccessRequest} req
     * @param {function(string, DeleteReadOnlyGroupNetworkAccessResponse):void} cb
     * @public
     */
    DeleteReadOnlyGroupNetworkAccess(req, cb) {
        let resp = new DeleteReadOnlyGroupNetworkAccessResponse();
        this.request("DeleteReadOnlyGroupNetworkAccess", req, resp, cb);
    }

    /**
     * 本接口（DescribeDefaultParameters）主要用于查询某个数据库版本和引擎支持的所有参数。
     * @param {DescribeDefaultParametersRequest} req
     * @param {function(string, DescribeDefaultParametersResponse):void} cb
     * @public
     */
    DescribeDefaultParameters(req, cb) {
        let resp = new DescribeDefaultParametersResponse();
        this.request("DescribeDefaultParameters", req, resp, cb);
    }

    /**
     * 本接口（UpgradeDBInstance）用于升级实例配置。
     * @param {UpgradeDBInstanceRequest} req
     * @param {function(string, UpgradeDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDBInstance(req, cb) {
        let resp = new UpgradeDBInstanceResponse();
        this.request("UpgradeDBInstance", req, resp, cb);
    }

    /**
     * 批量修改参数
     * @param {ModifyDBInstanceParametersRequest} req
     * @param {function(string, ModifyDBInstanceParametersResponse):void} cb
     * @public
     */
    ModifyDBInstanceParameters(req, cb) {
        let resp = new ModifyDBInstanceParametersResponse();
        this.request("ModifyDBInstanceParameters", req, resp, cb);
    }

    /**
     * 本接口 (DestroyDBInstance) 用于彻底销毁指定DBInstanceId对应的实例，销毁后实例数据将彻底删除，无法找回，只能销毁隔离中的实例。
     * @param {DestroyDBInstanceRequest} req
     * @param {function(string, DestroyDBInstanceResponse):void} cb
     * @public
     */
    DestroyDBInstance(req, cb) {
        let resp = new DestroyDBInstanceResponse();
        this.request("DestroyDBInstance", req, resp, cb);
    }

    /**
     * 本接口（SetAutoRenewFlag）用于设置自动续费。
     * @param {SetAutoRenewFlagRequest} req
     * @param {function(string, SetAutoRenewFlagResponse):void} cb
     * @public
     */
    SetAutoRenewFlag(req, cb) {
        let resp = new SetAutoRenewFlagResponse();
        this.request("SetAutoRenewFlag", req, resp, cb);
    }

    /**
     * 本接口 (DescribeBackupPlans) 用于实例所有的备份计划查询
     * @param {DescribeBackupPlansRequest} req
     * @param {function(string, DescribeBackupPlansResponse):void} cb
     * @public
     */
    DescribeBackupPlans(req, cb) {
        let resp = new DescribeBackupPlansResponse();
        this.request("DescribeBackupPlans", req, resp, cb);
    }

    /**
     * 本接口（RenewInstance）用于续费实例。
     * @param {RenewInstanceRequest} req
     * @param {function(string, RenewInstanceResponse):void} cb
     * @public
     */
    RenewInstance(req, cb) {
        let resp = new RenewInstanceResponse();
        this.request("RenewInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeDBBackups）用于查询实例备份列表。
     * @param {DescribeDBBackupsRequest} req
     * @param {function(string, DescribeDBBackupsResponse):void} cb
     * @public
     */
    DescribeDBBackups(req, cb) {
        let resp = new DescribeDBBackupsResponse();
        this.request("DescribeDBBackups", req, resp, cb);
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
     * 本接口（DescribeDBErrlogs）用于获取错误日志。
     * @param {DescribeDBErrlogsRequest} req
     * @param {function(string, DescribeDBErrlogsResponse):void} cb
     * @public
     */
    DescribeDBErrlogs(req, cb) {
        let resp = new DescribeDBErrlogsResponse();
        this.request("DescribeDBErrlogs", req, resp, cb);
    }

    /**
     * 本接口(DescribeReadOnlyGroups)用于查询用户输入指定实例的只读组
     * @param {DescribeReadOnlyGroupsRequest} req
     * @param {function(string, DescribeReadOnlyGroupsResponse):void} cb
     * @public
     */
    DescribeReadOnlyGroups(req, cb) {
        let resp = new DescribeReadOnlyGroupsResponse();
        this.request("DescribeReadOnlyGroups", req, resp, cb);
    }

    /**
     * 当升级完成后，对处于等待切换状态下的实例，强制实例立即切换。
     * @param {ModifySwitchTimePeriodRequest} req
     * @param {function(string, ModifySwitchTimePeriodResponse):void} cb
     * @public
     */
    ModifySwitchTimePeriod(req, cb) {
        let resp = new ModifySwitchTimePeriodResponse();
        this.request("ModifySwitchTimePeriod", req, resp, cb);
    }

    /**
     * 本接口 (InquiryPriceCreateDBInstances) 用于查询购买一个或多个实例的价格信息。
     * @param {InquiryPriceCreateDBInstancesRequest} req
     * @param {function(string, InquiryPriceCreateDBInstancesResponse):void} cb
     * @public
     */
    InquiryPriceCreateDBInstances(req, cb) {
        let resp = new InquiryPriceCreateDBInstancesResponse();
        this.request("InquiryPriceCreateDBInstances", req, resp, cb);
    }

    /**
     * 本接口（DescribeDBInstanceSecurityGroups）用于查询实例安全组信息。
     * @param {DescribeDBInstanceSecurityGroupsRequest} req
     * @param {function(string, DescribeDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeDBInstanceSecurityGroups(req, cb) {
        let resp = new DescribeDBInstanceSecurityGroupsResponse();
        this.request("DescribeDBInstanceSecurityGroups", req, resp, cb);
    }

    /**
     * 本接口（OpenDBExtranetAccess）用于开通外网。
     * @param {OpenDBExtranetAccessRequest} req
     * @param {function(string, OpenDBExtranetAccessResponse):void} cb
     * @public
     */
    OpenDBExtranetAccess(req, cb) {
        let resp = new OpenDBExtranetAccessResponse();
        this.request("OpenDBExtranetAccess", req, resp, cb);
    }

    /**
     * 本接口（DescribeParameterTemplateAttributes）用于查询某个参数模板的具体内容，包括基本信息和参数信息。
     * @param {DescribeParameterTemplateAttributesRequest} req
     * @param {function(string, DescribeParameterTemplateAttributesResponse):void} cb
     * @public
     */
    DescribeParameterTemplateAttributes(req, cb) {
        let resp = new DescribeParameterTemplateAttributesResponse();
        this.request("DescribeParameterTemplateAttributes", req, resp, cb);
    }

    /**
     * 可对实例进行网络的删除操作。
     * @param {DeleteDBInstanceNetworkAccessRequest} req
     * @param {function(string, DeleteDBInstanceNetworkAccessResponse):void} cb
     * @public
     */
    DeleteDBInstanceNetworkAccess(req, cb) {
        let resp = new DeleteDBInstanceNetworkAccessResponse();
        this.request("DeleteDBInstanceNetworkAccess", req, resp, cb);
    }

    /**
     * 本接口（RestartDBInstance）用于重启实例。
     * @param {RestartDBInstanceRequest} req
     * @param {function(string, RestartDBInstanceResponse):void} cb
     * @public
     */
    RestartDBInstance(req, cb) {
        let resp = new RestartDBInstanceResponse();
        this.request("RestartDBInstance", req, resp, cb);
    }

    /**
     * 本接口 (ModifyBackupPlan) 用于实例备份计划的修改，默认是在每天的凌晨开始全量备份，备份保留时长是7天。可以根据此接口指定时间进行实例的备份。
     * @param {ModifyBackupPlanRequest} req
     * @param {function(string, ModifyBackupPlanResponse):void} cb
     * @public
     */
    ModifyBackupPlan(req, cb) {
        let resp = new ModifyBackupPlanResponse();
        this.request("ModifyBackupPlan", req, resp, cb);
    }

    /**
     * 关闭serverlessDB实例外网
     * @param {CloseServerlessDBExtranetAccessRequest} req
     * @param {function(string, CloseServerlessDBExtranetAccessResponse):void} cb
     * @public
     */
    CloseServerlessDBExtranetAccess(req, cb) {
        let resp = new CloseServerlessDBExtranetAccessResponse();
        this.request("CloseServerlessDBExtranetAccess", req, resp, cb);
    }

    /**
     * 本接口(DeleteReadOnlyGroup)用于删除指定的只读组
     * @param {DeleteReadOnlyGroupRequest} req
     * @param {function(string, DeleteReadOnlyGroupResponse):void} cb
     * @public
     */
    DeleteReadOnlyGroup(req, cb) {
        let resp = new DeleteReadOnlyGroupResponse();
        this.request("DeleteReadOnlyGroup", req, resp, cb);
    }

    /**
     * 本接口（ModifyAccountRemark）用于修改帐号备注。
     * @param {ModifyAccountRemarkRequest} req
     * @param {function(string, ModifyAccountRemarkResponse):void} cb
     * @public
     */
    ModifyAccountRemark(req, cb) {
        let resp = new ModifyAccountRemarkResponse();
        this.request("ModifyAccountRemark", req, resp, cb);
    }

    /**
     * 本接口（DescribeDBXlogs）用于获取实例Xlog列表。
     * @param {DescribeDBXlogsRequest} req
     * @param {function(string, DescribeDBXlogsResponse):void} cb
     * @public
     */
    DescribeDBXlogs(req, cb) {
        let resp = new DescribeDBXlogsResponse();
        this.request("DescribeDBXlogs", req, resp, cb);
    }

    /**
     * 开通serverlessDB实例外网
     * @param {OpenServerlessDBExtranetAccessRequest} req
     * @param {function(string, OpenServerlessDBExtranetAccessResponse):void} cb
     * @public
     */
    OpenServerlessDBExtranetAccess(req, cb) {
        let resp = new OpenServerlessDBExtranetAccessResponse();
        this.request("OpenServerlessDBExtranetAccess", req, resp, cb);
    }

    /**
     * 本接口 (DescribeDBInstanceAttribute) 用于查询某个实例的详情信息。
     * @param {DescribeDBInstanceAttributeRequest} req
     * @param {function(string, DescribeDBInstanceAttributeResponse):void} cb
     * @public
     */
    DescribeDBInstanceAttribute(req, cb) {
        let resp = new DescribeDBInstanceAttributeResponse();
        this.request("DescribeDBInstanceAttribute", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBInstanceName）用于修改postgresql实例名字。
     * @param {ModifyDBInstanceNameRequest} req
     * @param {function(string, ModifyDBInstanceNameResponse):void} cb
     * @public
     */
    ModifyDBInstanceName(req, cb) {
        let resp = new ModifyDBInstanceNameResponse();
        this.request("ModifyDBInstanceName", req, resp, cb);
    }

    /**
     * 本接口（InquiryPriceUpgradeDBInstance）用于查询升级实例的价格。只支持按量计费实例。
     * @param {InquiryPriceUpgradeDBInstanceRequest} req
     * @param {function(string, InquiryPriceUpgradeDBInstanceResponse):void} cb
     * @public
     */
    InquiryPriceUpgradeDBInstance(req, cb) {
        let resp = new InquiryPriceUpgradeDBInstanceResponse();
        this.request("InquiryPriceUpgradeDBInstance", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBInstanceDeployment）用于修改节点可用区部署方式，仅支持主实例。
     * @param {ModifyDBInstanceDeploymentRequest} req
     * @param {function(string, ModifyDBInstanceDeploymentResponse):void} cb
     * @public
     */
    ModifyDBInstanceDeployment(req, cb) {
        let resp = new ModifyDBInstanceDeploymentResponse();
        this.request("ModifyDBInstanceDeployment", req, resp, cb);
    }

    /**
     * 本接口 (CreateDBInstances) 用于创建一个或者多个PostgreSQL实例,仅发货实例不会进行初始化。
     * @param {CreateDBInstancesRequest} req
     * @param {function(string, CreateDBInstancesResponse):void} cb
     * @public
     */
    CreateDBInstances(req, cb) {
        let resp = new CreateDBInstancesResponse();
        this.request("CreateDBInstances", req, resp, cb);
    }

    /**
     * 本接口(RebalanceReadOnlyGroup)用于重新均衡 RO 组内实例的负载。注意，RO 组内 RO 实例会有一次数据库连接瞬断，请确保应用程序能重连数据库，谨慎操作。
     * @param {RebalanceReadOnlyGroupRequest} req
     * @param {function(string, RebalanceReadOnlyGroupResponse):void} cb
     * @public
     */
    RebalanceReadOnlyGroup(req, cb) {
        let resp = new RebalanceReadOnlyGroupResponse();
        this.request("RebalanceReadOnlyGroup", req, resp, cb);
    }

    /**
     * 本接口 (CreateServerlessDBInstance) 用于创建一个ServerlessDB实例，创建成功返回实例ID。
     * @param {CreateServerlessDBInstanceRequest} req
     * @param {function(string, CreateServerlessDBInstanceResponse):void} cb
     * @public
     */
    CreateServerlessDBInstance(req, cb) {
        let resp = new CreateServerlessDBInstanceResponse();
        this.request("CreateServerlessDBInstance", req, resp, cb);
    }

    /**
     * 获取实例可修改参数列表
     * @param {DescribeDBInstanceParametersRequest} req
     * @param {function(string, DescribeDBInstanceParametersResponse):void} cb
     * @public
     */
    DescribeDBInstanceParameters(req, cb) {
        let resp = new DescribeDBInstanceParametersResponse();
        this.request("DescribeDBInstanceParameters", req, resp, cb);
    }

    /**
     * 本接口 (DescribeZones) 用于查询支持的可用区信息。
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * 本接口（DeleteParameterTemplate）主要用于删除某个参数模板。
     * @param {DeleteParameterTemplateRequest} req
     * @param {function(string, DeleteParameterTemplateResponse):void} cb
     * @public
     */
    DeleteParameterTemplate(req, cb) {
        let resp = new DeleteParameterTemplateResponse();
        this.request("DeleteParameterTemplate", req, resp, cb);
    }

    /**
     * 本接口（IsolateDBInstances）用于隔离实例
     * @param {IsolateDBInstancesRequest} req
     * @param {function(string, IsolateDBInstancesResponse):void} cb
     * @public
     */
    IsolateDBInstances(req, cb) {
        let resp = new IsolateDBInstancesResponse();
        this.request("IsolateDBInstances", req, resp, cb);
    }

    /**
     * 本接口 (DeleteServerlessDBInstance) 用于删除一个ServerlessDB实例。
     * @param {DeleteServerlessDBInstanceRequest} req
     * @param {function(string, DeleteServerlessDBInstanceResponse):void} cb
     * @public
     */
    DeleteServerlessDBInstance(req, cb) {
        let resp = new DeleteServerlessDBInstanceResponse();
        this.request("DeleteServerlessDBInstance", req, resp, cb);
    }

    /**
     * 本接口 (InitDBInstances) 用于初始化云数据库PostgreSQL实例。
     * @param {InitDBInstancesRequest} req
     * @param {function(string, InitDBInstancesResponse):void} cb
     * @public
     */
    InitDBInstances(req, cb) {
        let resp = new InitDBInstancesResponse();
        this.request("InitDBInstances", req, resp, cb);
    }

    /**
     * 可对实例进行网络的添加操作。
     * @param {CreateDBInstanceNetworkAccessRequest} req
     * @param {function(string, CreateDBInstanceNetworkAccessResponse):void} cb
     * @public
     */
    CreateDBInstanceNetworkAccess(req, cb) {
        let resp = new CreateDBInstanceNetworkAccessResponse();
        this.request("CreateDBInstanceNetworkAccess", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBInstanceSpec）用于调整实例规格，包括内存、磁盘。
     * @param {ModifyDBInstanceSpecRequest} req
     * @param {function(string, ModifyDBInstanceSpecResponse):void} cb
     * @public
     */
    ModifyDBInstanceSpec(req, cb) {
        let resp = new ModifyDBInstanceSpecResponse();
        this.request("ModifyDBInstanceSpec", req, resp, cb);
    }

    /**
     * 本接口（DescribeAvailableRecoveryTime）用于查询实例可恢复的时间范围。
     * @param {DescribeAvailableRecoveryTimeRequest} req
     * @param {function(string, DescribeAvailableRecoveryTimeResponse):void} cb
     * @public
     */
    DescribeAvailableRecoveryTime(req, cb) {
        let resp = new DescribeAvailableRecoveryTimeResponse();
        this.request("DescribeAvailableRecoveryTime", req, resp, cb);
    }

    /**
     * 本接口（CreateReadOnlyGroup）用于创建只读组
     * @param {CreateReadOnlyGroupRequest} req
     * @param {function(string, CreateReadOnlyGroupResponse):void} cb
     * @public
     */
    CreateReadOnlyGroup(req, cb) {
        let resp = new CreateReadOnlyGroupResponse();
        this.request("CreateReadOnlyGroup", req, resp, cb);
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
     * 此接口（DescribeSlowQueryList）用于查询指定时间范围内的所有慢查询。
     * @param {DescribeSlowQueryListRequest} req
     * @param {function(string, DescribeSlowQueryListResponse):void} cb
     * @public
     */
    DescribeSlowQueryList(req, cb) {
        let resp = new DescribeSlowQueryListResponse();
        this.request("DescribeSlowQueryList", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBInstanceReadOnlyGroup）用于修改实例所属的只读组
     * @param {ModifyDBInstanceReadOnlyGroupRequest} req
     * @param {function(string, ModifyDBInstanceReadOnlyGroupResponse):void} cb
     * @public
     */
    ModifyDBInstanceReadOnlyGroup(req, cb) {
        let resp = new ModifyDBInstanceReadOnlyGroupResponse();
        this.request("ModifyDBInstanceReadOnlyGroup", req, resp, cb);
    }

    /**
     * 本接口（CloseDBExtranetAccess）用于关闭实例外网链接。
     * @param {CloseDBExtranetAccessRequest} req
     * @param {function(string, CloseDBExtranetAccessResponse):void} cb
     * @public
     */
    CloseDBExtranetAccess(req, cb) {
        let resp = new CloseDBExtranetAccessResponse();
        this.request("CloseDBExtranetAccess", req, resp, cb);
    }

    /**
     * 用于克隆实例，支持指定备份集、指定时间点进行克隆。
     * @param {CloneDBInstanceRequest} req
     * @param {function(string, CloneDBInstanceResponse):void} cb
     * @public
     */
    CloneDBInstance(req, cb) {
        let resp = new CloneDBInstanceResponse();
        this.request("CloneDBInstance", req, resp, cb);
    }

    /**
     * 本接口（AddDBInstanceToReadOnlyGroup）用于添加只读实例到只读组
     * @param {AddDBInstanceToReadOnlyGroupRequest} req
     * @param {function(string, AddDBInstanceToReadOnlyGroupResponse):void} cb
     * @public
     */
    AddDBInstanceToReadOnlyGroup(req, cb) {
        let resp = new AddDBInstanceToReadOnlyGroupResponse();
        this.request("AddDBInstanceToReadOnlyGroup", req, resp, cb);
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
     * 本接口（DescribeAccounts）用于获取实例用户列表。
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * 本接口（DisIsolateDBInstances）用于解隔离实例
     * @param {DisIsolateDBInstancesRequest} req
     * @param {function(string, DisIsolateDBInstancesResponse):void} cb
     * @public
     */
    DisIsolateDBInstances(req, cb) {
        let resp = new DisIsolateDBInstancesResponse();
        this.request("DisIsolateDBInstances", req, resp, cb);
    }

    /**
     * 用于查询一个或多个serverlessDB实例的详细信息
     * @param {DescribeServerlessDBInstancesRequest} req
     * @param {function(string, DescribeServerlessDBInstancesResponse):void} cb
     * @public
     */
    DescribeServerlessDBInstances(req, cb) {
        let resp = new DescribeServerlessDBInstancesResponse();
        this.request("DescribeServerlessDBInstances", req, resp, cb);
    }

    /**
     * 本接口（ModifyParameterTemplate）主要用于修改参数模板名称，描述，修改，添加和删除参数模板参数。
     * @param {ModifyParameterTemplateRequest} req
     * @param {function(string, ModifyParameterTemplateResponse):void} cb
     * @public
     */
    ModifyParameterTemplate(req, cb) {
        let resp = new ModifyParameterTemplateResponse();
        this.request("ModifyParameterTemplate", req, resp, cb);
    }

    /**
     * 本接口（DescribeCloneDBInstanceSpec）用于查询克隆实例可选择的最小规格，包括SpecCode和磁盘。
     * @param {DescribeCloneDBInstanceSpecRequest} req
     * @param {function(string, DescribeCloneDBInstanceSpecResponse):void} cb
     * @public
     */
    DescribeCloneDBInstanceSpec(req, cb) {
        let resp = new DescribeCloneDBInstanceSpecResponse();
        this.request("DescribeCloneDBInstanceSpec", req, resp, cb);
    }

    /**
     * 本接口 (CreateParameterTemplate) 用于创建参数模板。
     * @param {CreateParameterTemplateRequest} req
     * @param {function(string, CreateParameterTemplateResponse):void} cb
     * @public
     */
    CreateParameterTemplate(req, cb) {
        let resp = new CreateParameterTemplateResponse();
        this.request("CreateParameterTemplate", req, resp, cb);
    }

    /**
     * 此接口（DescribeSlowQueryAnalysis）用于统计指定时间范围内的所有慢查询，根据SQL语句抽象参数后，进行聚合分析，并返回同类SQL列表。
     * @param {DescribeSlowQueryAnalysisRequest} req
     * @param {function(string, DescribeSlowQueryAnalysisResponse):void} cb
     * @public
     */
    DescribeSlowQueryAnalysis(req, cb) {
        let resp = new DescribeSlowQueryAnalysisResponse();
        this.request("DescribeSlowQueryAnalysis", req, resp, cb);
    }

    /**
     * 接口（DescribeDatabases）用来拉取数据库列表
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        let resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }

    /**
     * 本接口(CreateReadOnlyDBInstance)用于创建只读实例
     * @param {CreateReadOnlyDBInstanceRequest} req
     * @param {function(string, CreateReadOnlyDBInstanceResponse):void} cb
     * @public
     */
    CreateReadOnlyDBInstance(req, cb) {
        let resp = new CreateReadOnlyDBInstanceResponse();
        this.request("CreateReadOnlyDBInstance", req, resp, cb);
    }

    /**
     * 本接口 (DescribeParameterTemplates) 用于查询参数模板列表。
     * @param {DescribeParameterTemplatesRequest} req
     * @param {function(string, DescribeParameterTemplatesResponse):void} cb
     * @public
     */
    DescribeParameterTemplates(req, cb) {
        let resp = new DescribeParameterTemplatesResponse();
        this.request("DescribeParameterTemplates", req, resp, cb);
    }

    /**
     * 本接口(ModifyReadOnlyGroupConfig)用于更新只读组配置信息
     * @param {ModifyReadOnlyGroupConfigRequest} req
     * @param {function(string, ModifyReadOnlyGroupConfigResponse):void} cb
     * @public
     */
    ModifyReadOnlyGroupConfig(req, cb) {
        let resp = new ModifyReadOnlyGroupConfigResponse();
        this.request("ModifyReadOnlyGroupConfig", req, resp, cb);
    }

    /**
     * 本接口 (CreateInstances) 用于创建一个或者多个PostgreSQL实例，通过此接口创建的实例无需进行初始化，可直接使用。
     * @param {CreateInstancesRequest} req
     * @param {function(string, CreateInstancesResponse):void} cb
     * @public
     */
    CreateInstances(req, cb) {
        let resp = new CreateInstancesResponse();
        this.request("CreateInstances", req, resp, cb);
    }

    /**
     * 本接口（RemoveDBInstanceFromReadOnlyGroup）用户将只读实例从只读组中移除
     * @param {RemoveDBInstanceFromReadOnlyGroupRequest} req
     * @param {function(string, RemoveDBInstanceFromReadOnlyGroupResponse):void} cb
     * @public
     */
    RemoveDBInstanceFromReadOnlyGroup(req, cb) {
        let resp = new RemoveDBInstanceFromReadOnlyGroupResponse();
        this.request("RemoveDBInstanceFromReadOnlyGroup", req, resp, cb);
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
     * 获取参数修改事件详情
     * @param {DescribeParamsEventRequest} req
     * @param {function(string, DescribeParamsEventResponse):void} cb
     * @public
     */
    DescribeParamsEvent(req, cb) {
        let resp = new DescribeParamsEventResponse();
        this.request("DescribeParamsEvent", req, resp, cb);
    }

    /**
     * 本接口（DescribeDBSlowlogs）用于获取慢查询日志。已于2021.09.01日正式废弃，后续此接口将不再返回任何数据，新接口为DescribeSlowQueryList，详细请查看：https://cloud.tencent.com/document/product/409/60540
     * @param {DescribeDBSlowlogsRequest} req
     * @param {function(string, DescribeDBSlowlogsResponse):void} cb
     * @public
     */
    DescribeDBSlowlogs(req, cb) {
        let resp = new DescribeDBSlowlogsResponse();
        this.request("DescribeDBSlowlogs", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBInstanceSecurityGroups）用于修改实例安全组。
     * @param {ModifyDBInstanceSecurityGroupsRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroups(req, cb) {
        let resp = new ModifyDBInstanceSecurityGroupsResponse();
        this.request("ModifyDBInstanceSecurityGroups", req, resp, cb);
    }


}
module.exports = PostgresClient;
