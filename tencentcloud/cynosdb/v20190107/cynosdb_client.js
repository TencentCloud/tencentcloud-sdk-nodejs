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
const ModifyClusterNameRequest = models.ModifyClusterNameRequest;
const DescribeRollbackTimeRangeRequest = models.DescribeRollbackTimeRangeRequest;
const ObjectTask = models.ObjectTask;
const DescribeBackupConfigRequest = models.DescribeBackupConfigRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const ModifyMaintainPeriodConfigRequest = models.ModifyMaintainPeriodConfigRequest;
const DescribeRollbackTimeRangeResponse = models.DescribeRollbackTimeRangeResponse;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const CreateAccountsResponse = models.CreateAccountsResponse;
const ModifyInstanceNameRequest = models.ModifyInstanceNameRequest;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const DescribeMaintainPeriodRequest = models.DescribeMaintainPeriodRequest;
const AccountParam = models.AccountParam;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const ClusterInstanceDetail = models.ClusterInstanceDetail;
const Account = models.Account;
const ModifyBackupConfigResponse = models.ModifyBackupConfigResponse;
const IsolateInstanceResponse = models.IsolateInstanceResponse;
const ModifyInstanceNameResponse = models.ModifyInstanceNameResponse;
const PauseServerlessRequest = models.PauseServerlessRequest;
const RevokeAccountPrivilegesResponse = models.RevokeAccountPrivilegesResponse;
const CreateClustersResponse = models.CreateClustersResponse;
const SetRenewFlagRequest = models.SetRenewFlagRequest;
const CynosdbInstanceGrp = models.CynosdbInstanceGrp;
const Tag = models.Tag;
const ActivateInstanceRequest = models.ActivateInstanceRequest;
const RollbackTableInfo = models.RollbackTableInfo;
const DescribeAccountAllGrantPrivilegesResponse = models.DescribeAccountAllGrantPrivilegesResponse;
const RollbackDatabase = models.RollbackDatabase;
const DatabasePrivileges = models.DatabasePrivileges;
const DescribeClustersRequest = models.DescribeClustersRequest;
const DescribeInstanceDetailResponse = models.DescribeInstanceDetailResponse;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const ModifyAccountParamsRequest = models.ModifyAccountParamsRequest;
const DescribeClusterInstanceGrpsRequest = models.DescribeClusterInstanceGrpsRequest;
const DescribeResourcesByDealNameResponse = models.DescribeResourcesByDealNameResponse;
const ResumeServerlessResponse = models.ResumeServerlessResponse;
const CreateAccountsRequest = models.CreateAccountsRequest;
const IsolateInstanceRequest = models.IsolateInstanceRequest;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const RollBackClusterRequest = models.RollBackClusterRequest;
const RollbackTable = models.RollbackTable;
const DescribeClusterDetailRequest = models.DescribeClusterDetailRequest;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const PauseServerlessResponse = models.PauseServerlessResponse;
const OfflineClusterRequest = models.OfflineClusterRequest;
const NewAccount = models.NewAccount;
const BackupFileInfo = models.BackupFileInfo;
const DescribeBackupListRequest = models.DescribeBackupListRequest;
const CynosdbInstance = models.CynosdbInstance;
const DbTable = models.DbTable;
const GrantAccountPrivilegesRequest = models.GrantAccountPrivilegesRequest;
const IsolateClusterResponse = models.IsolateClusterResponse;
const CreateClustersRequest = models.CreateClustersRequest;
const DescribeClustersResponse = models.DescribeClustersResponse;
const QueryFilter = models.QueryFilter;
const DescribeBackupConfigResponse = models.DescribeBackupConfigResponse;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const AddInstancesResponse = models.AddInstancesResponse;
const Addr = models.Addr;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const ModifyClusterParamResponse = models.ModifyClusterParamResponse;
const SecurityGroup = models.SecurityGroup;
const NetAddr = models.NetAddr;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const DescribeResourcesByDealNameRequest = models.DescribeResourcesByDealNameRequest;
const DescribeRollbackTimeValidityResponse = models.DescribeRollbackTimeValidityResponse;
const GrantAccountPrivilegesResponse = models.GrantAccountPrivilegesResponse;
const ResumeServerlessRequest = models.ResumeServerlessRequest;
const BillingResourceInfo = models.BillingResourceInfo;
const ModifyClusterNameResponse = models.ModifyClusterNameResponse;
const DescribeInstanceSpecsRequest = models.DescribeInstanceSpecsRequest;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const DescribeClusterParamLogsResponse = models.DescribeClusterParamLogsResponse;
const CynosdbCluster = models.CynosdbCluster;
const SetRenewFlagResponse = models.SetRenewFlagResponse;
const OfflineClusterResponse = models.OfflineClusterResponse;
const RevokeAccountPrivilegesRequest = models.RevokeAccountPrivilegesRequest;
const InstanceSpec = models.InstanceSpec;
const DescribeClusterParamLogsRequest = models.DescribeClusterParamLogsRequest;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const DescribeMaintainPeriodResponse = models.DescribeMaintainPeriodResponse;
const DescribeBackupListResponse = models.DescribeBackupListResponse;
const RollBackClusterResponse = models.RollBackClusterResponse;
const DescribeClusterDetailResponse = models.DescribeClusterDetailResponse;
const ActivateInstanceResponse = models.ActivateInstanceResponse;
const DescribeRollbackTimeValidityRequest = models.DescribeRollbackTimeValidityRequest;
const IsolateClusterRequest = models.IsolateClusterRequest;
const DescribeClusterInstanceGrpsResponse = models.DescribeClusterInstanceGrpsResponse;
const AddInstancesRequest = models.AddInstancesRequest;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const ClusterParamModifyLog = models.ClusterParamModifyLog;
const CynosdbInstanceDetail = models.CynosdbInstanceDetail;
const CynosdbClusterDetail = models.CynosdbClusterDetail;
const DescribeInstanceDetailRequest = models.DescribeInstanceDetailRequest;
const ModifyMaintainPeriodConfigResponse = models.ModifyMaintainPeriodConfigResponse;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const TablePrivileges = models.TablePrivileges;
const ModifyClusterParamRequest = models.ModifyClusterParamRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const ModifyAccountParamsResponse = models.ModifyAccountParamsResponse;
const OfflineInstanceRequest = models.OfflineInstanceRequest;
const DescribeInstanceSpecsResponse = models.DescribeInstanceSpecsResponse;
const DescribeAccountAllGrantPrivilegesRequest = models.DescribeAccountAllGrantPrivilegesRequest;
const OfflineInstanceResponse = models.OfflineInstanceResponse;
const ParamItem = models.ParamItem;
const PolicyRule = models.PolicyRule;
const ModifyBackupConfigRequest = models.ModifyBackupConfigRequest;
const InputAccount = models.InputAccount;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;


/**
 * cynosdb client
 * @class
 */
class CynosdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cynosdb.tencentcloudapi.com", "2019-01-07", credential, region, profile);
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
     * 本接口（DescribeClusterInstanceGrps）用于查询实例组
     * @param {DescribeClusterInstanceGrpsRequest} req
     * @param {function(string, DescribeClusterInstanceGrpsResponse):void} cb
     * @public
     */
    DescribeClusterInstanceGrps(req, cb) {
        let resp = new DescribeClusterInstanceGrpsResponse();
        this.request("DescribeClusterInstanceGrps", req, resp, cb);
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
     * 显示集群详情
     * @param {DescribeClusterDetailRequest} req
     * @param {function(string, DescribeClusterDetailResponse):void} cb
     * @public
     */
    DescribeClusterDetail(req, cb) {
        let resp = new DescribeClusterDetailResponse();
        this.request("DescribeClusterDetail", req, resp, cb);
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
