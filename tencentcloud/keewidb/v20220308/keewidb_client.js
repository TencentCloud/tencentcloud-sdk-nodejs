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
const ModifyInstanceParamsResponse = models.ModifyInstanceParamsResponse;
const ModifyAutoBackupConfigResponse = models.ModifyAutoBackupConfigResponse;
const TaskInfoDetail = models.TaskInfoDetail;
const CreateInstancesRequest = models.CreateInstancesRequest;
const ModifyNetworkConfigResponse = models.ModifyNetworkConfigResponse;
const DescribeInstanceBinlogsRequest = models.DescribeInstanceBinlogsRequest;
const Inbound = models.Inbound;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const DescribeTaskListResponse = models.DescribeTaskListResponse;
const ModifyInstanceRequest = models.ModifyInstanceRequest;
const RenewInstanceResponse = models.RenewInstanceResponse;
const CreateBackupManuallyResponse = models.CreateBackupManuallyResponse;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const RedisNodeInfo = models.RedisNodeInfo;
const ProxyNodeInfo = models.ProxyNodeInfo;
const DestroyPostpaidInstanceRequest = models.DestroyPostpaidInstanceRequest;
const InstanceProxySlowlogDetail = models.InstanceProxySlowlogDetail;
const ResetPasswordResponse = models.ResetPasswordResponse;
const ClearInstanceRequest = models.ClearInstanceRequest;
const RegionConf = models.RegionConf;
const RenewInstanceRequest = models.RenewInstanceRequest;
const CreateBackupManuallyRequest = models.CreateBackupManuallyRequest;
const DescribeInstanceParamRecordsResponse = models.DescribeInstanceParamRecordsResponse;
const InstanceMultiParam = models.InstanceMultiParam;
const ModifyAutoBackupConfigRequest = models.ModifyAutoBackupConfigRequest;
const DestroyPrepaidInstanceRequest = models.DestroyPrepaidInstanceRequest;
const InstanceIntegerParam = models.InstanceIntegerParam;
const InstanceTagInfo = models.InstanceTagInfo;
const DestroyPostpaidInstanceResponse = models.DestroyPostpaidInstanceResponse;
const ModifyInstanceResponse = models.ModifyInstanceResponse;
const NodeInfo = models.NodeInfo;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const DescribeTendisSlowLogResponse = models.DescribeTendisSlowLogResponse;
const DescribeProductInfoResponse = models.DescribeProductInfoResponse;
const BackupInfo = models.BackupInfo;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const ChangeInstanceMasterRequest = models.ChangeInstanceMasterRequest;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const DescribeInstanceBackupsResponse = models.DescribeInstanceBackupsResponse;
const DescribeInstanceReplicasResponse = models.DescribeInstanceReplicasResponse;
const StartUpInstanceResponse = models.StartUpInstanceResponse;
const InstanceTextParam = models.InstanceTextParam;
const InstanceParamHistory = models.InstanceParamHistory;
const DescribeInstanceParamRecordsRequest = models.DescribeInstanceParamRecordsRequest;
const DescribeTaskListRequest = models.DescribeTaskListRequest;
const CreateInstancesResponse = models.CreateInstancesResponse;
const KeeWiDBNode = models.KeeWiDBNode;
const BinlogInfo = models.BinlogInfo;
const ModifyNetworkConfigRequest = models.ModifyNetworkConfigRequest;
const DescribeInstanceParamsRequest = models.DescribeInstanceParamsRequest;
const CleanUpInstanceResponse = models.CleanUpInstanceResponse;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const ZoneCapacityConf = models.ZoneCapacityConf;
const Outbound = models.Outbound;
const DescribeAutoBackupConfigResponse = models.DescribeAutoBackupConfigResponse;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const SecurityGroup = models.SecurityGroup;
const StartUpInstanceRequest = models.StartUpInstanceRequest;
const DescribeMaintenanceWindowResponse = models.DescribeMaintenanceWindowResponse;
const ResetPasswordRequest = models.ResetPasswordRequest;
const ProductConf = models.ProductConf;
const ModifyConnectionConfigRequest = models.ModifyConnectionConfigRequest;
const ResourceTag = models.ResourceTag;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const ReplicaGroup = models.ReplicaGroup;
const InstanceInfo = models.InstanceInfo;
const CleanUpInstanceRequest = models.CleanUpInstanceRequest;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const DescribeTaskInfoResponse = models.DescribeTaskInfoResponse;
const DescribeAutoBackupConfigRequest = models.DescribeAutoBackupConfigRequest;
const InstanceEnumParam = models.InstanceEnumParam;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeTaskInfoRequest = models.DescribeTaskInfoRequest;
const ModifyConnectionConfigResponse = models.ModifyConnectionConfigResponse;
const ModifyMaintenanceWindowResponse = models.ModifyMaintenanceWindowResponse;
const DescribeInstanceReplicasRequest = models.DescribeInstanceReplicasRequest;
const DestroyPrepaidInstanceResponse = models.DestroyPrepaidInstanceResponse;
const InstanceNodeInfo = models.InstanceNodeInfo;
const TendisSlowLogDetail = models.TendisSlowLogDetail;
const ModifyInstanceParamsRequest = models.ModifyInstanceParamsRequest;
const DescribeInstanceNodeInfoRequest = models.DescribeInstanceNodeInfoRequest;
const DescribeMaintenanceWindowRequest = models.DescribeMaintenanceWindowRequest;
const DescribeTendisSlowLogRequest = models.DescribeTendisSlowLogRequest;
const DescribeProxySlowLogRequest = models.DescribeProxySlowLogRequest;
const DescribeProxySlowLogResponse = models.DescribeProxySlowLogResponse;
const DescribeProductInfoRequest = models.DescribeProductInfoRequest;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const ModifyMaintenanceWindowRequest = models.ModifyMaintenanceWindowRequest;
const DescribeInstanceBackupsRequest = models.DescribeInstanceBackupsRequest;
const DescribeInstanceBinlogsResponse = models.DescribeInstanceBinlogsResponse;
const ChangeInstanceMasterResponse = models.ChangeInstanceMasterResponse;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const DescribeInstanceNodeInfoResponse = models.DescribeInstanceNodeInfoResponse;
const InstanceParam = models.InstanceParam;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const ClearInstanceResponse = models.ClearInstanceResponse;


/**
 * keewidb client
 * @class
 */
class KeewidbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("keewidb.tencentcloudapi.com", "2022-03-08", credential, region, profile);
    }
    
    /**
     * 本接口（DescribeInstanceNodeInfo）查询实例节点信息。
     * @param {DescribeInstanceNodeInfoRequest} req
     * @param {function(string, DescribeInstanceNodeInfoResponse):void} cb
     * @public
     */
    DescribeInstanceNodeInfo(req, cb) {
        let resp = new DescribeInstanceNodeInfoResponse();
        this.request("DescribeInstanceNodeInfo", req, resp, cb);
    }

    /**
     * 本接口（ModifyMaintenanceWindow）修改实例维护时间窗时间。
     * @param {ModifyMaintenanceWindowRequest} req
     * @param {function(string, ModifyMaintenanceWindowResponse):void} cb
     * @public
     */
    ModifyMaintenanceWindow(req, cb) {
        let resp = new ModifyMaintenanceWindowResponse();
        this.request("ModifyMaintenanceWindow", req, resp, cb);
    }

    /**
     * 本接口（DescribeTaskList）用于查询任务列表信息。
     * @param {DescribeTaskListRequest} req
     * @param {function(string, DescribeTaskListResponse):void} cb
     * @public
     */
    DescribeTaskList(req, cb) {
        let resp = new DescribeTaskListResponse();
        this.request("DescribeTaskList", req, resp, cb);
    }

    /**
     * 本接口（CleanUpInstance）用于立即下线回收站已隔离的实例。
     * @param {CleanUpInstanceRequest} req
     * @param {function(string, CleanUpInstanceResponse):void} cb
     * @public
     */
    CleanUpInstance(req, cb) {
        let resp = new CleanUpInstanceResponse();
        this.request("CleanUpInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeMaintenanceWindow）用于查询实例维护时间窗。
     * @param {DescribeMaintenanceWindowRequest} req
     * @param {function(string, DescribeMaintenanceWindowResponse):void} cb
     * @public
     */
    DescribeMaintenanceWindow(req, cb) {
        let resp = new DescribeMaintenanceWindowResponse();
        this.request("DescribeMaintenanceWindow", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstanceBackups）用于查询实例全量备份列表。
     * @param {DescribeInstanceBackupsRequest} req
     * @param {function(string, DescribeInstanceBackupsResponse):void} cb
     * @public
     */
    DescribeInstanceBackups(req, cb) {
        let resp = new DescribeInstanceBackupsResponse();
        this.request("DescribeInstanceBackups", req, resp, cb);
    }

    /**
     * 本接口（ModifyNetworkConfig）用于修改实例网络配置。
     * @param {ModifyNetworkConfigRequest} req
     * @param {function(string, ModifyNetworkConfigResponse):void} cb
     * @public
     */
    ModifyNetworkConfig(req, cb) {
        let resp = new ModifyNetworkConfigResponse();
        this.request("ModifyNetworkConfig", req, resp, cb);
    }

    /**
     * 本接口（ModifyAutoBackupConfig）用于修改自动备份配置。
     * @param {ModifyAutoBackupConfigRequest} req
     * @param {function(string, ModifyAutoBackupConfigResponse):void} cb
     * @public
     */
    ModifyAutoBackupConfig(req, cb) {
        let resp = new ModifyAutoBackupConfigResponse();
        this.request("ModifyAutoBackupConfig", req, resp, cb);
    }

    /**
     * 本接口（ResetPassword）用于重置数据库访问密码。
     * @param {ResetPasswordRequest} req
     * @param {function(string, ResetPasswordResponse):void} cb
     * @public
     */
    ResetPassword(req, cb) {
        let resp = new ResetPasswordResponse();
        this.request("ResetPassword", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstances）可以根据地域、网络、实例id、标签、计费方式等条件，搜索查询实例列表。
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstanceBinlogs）用于查询增量备份列表。
     * @param {DescribeInstanceBinlogsRequest} req
     * @param {function(string, DescribeInstanceBinlogsResponse):void} cb
     * @public
     */
    DescribeInstanceBinlogs(req, cb) {
        let resp = new DescribeInstanceBinlogsResponse();
        this.request("DescribeInstanceBinlogs", req, resp, cb);
    }

    /**
     * 本接口（DescribeAutoBackupConfig）用于获取自动备份配置。
     * @param {DescribeAutoBackupConfigRequest} req
     * @param {function(string, DescribeAutoBackupConfigResponse):void} cb
     * @public
     */
    DescribeAutoBackupConfig(req, cb) {
        let resp = new DescribeAutoBackupConfigResponse();
        this.request("DescribeAutoBackupConfig", req, resp, cb);
    }

    /**
     * 本接口（ChangeInstanceMaster）用于将副本节点提升为主节点。
     * @param {ChangeInstanceMasterRequest} req
     * @param {function(string, ChangeInstanceMasterResponse):void} cb
     * @public
     */
    ChangeInstanceMaster(req, cb) {
        let resp = new ChangeInstanceMasterResponse();
        this.request("ChangeInstanceMaster", req, resp, cb);
    }

    /**
     * 创建数据库实例
     * @param {CreateInstancesRequest} req
     * @param {function(string, CreateInstancesResponse):void} cb
     * @public
     */
    CreateInstances(req, cb) {
        let resp = new CreateInstancesResponse();
        this.request("CreateInstances", req, resp, cb);
    }

    /**
     * 本接口（RenewInstance）用于为包年包月计费实例续费。
     * @param {RenewInstanceRequest} req
     * @param {function(string, RenewInstanceResponse):void} cb
     * @public
     */
    RenewInstance(req, cb) {
        let resp = new RenewInstanceResponse();
        this.request("RenewInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeTaskInfo）用于查询异步任务结果。
     * @param {DescribeTaskInfoRequest} req
     * @param {function(string, DescribeTaskInfoResponse):void} cb
     * @public
     */
    DescribeTaskInfo(req, cb) {
        let resp = new DescribeTaskInfoResponse();
        this.request("DescribeTaskInfo", req, resp, cb);
    }

    /**
     * 本接口（DescribeProxySlowLog）用于查询代理（Proxy）慢日志。
     * @param {DescribeProxySlowLogRequest} req
     * @param {function(string, DescribeProxySlowLogResponse):void} cb
     * @public
     */
    DescribeProxySlowLog(req, cb) {
        let resp = new DescribeProxySlowLogResponse();
        this.request("DescribeProxySlowLog", req, resp, cb);
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
     * 本接口（DescribeTendisSlowLog）用于查询实例慢日志。
     * @param {DescribeTendisSlowLogRequest} req
     * @param {function(string, DescribeTendisSlowLogResponse):void} cb
     * @public
     */
    DescribeTendisSlowLog(req, cb) {
        let resp = new DescribeTendisSlowLogResponse();
        this.request("DescribeTendisSlowLog", req, resp, cb);
    }

    /**
     * 本接口 (AssociateSecurityGroups) 用于安全组批量绑定多个指定实例。
     * @param {AssociateSecurityGroupsRequest} req
     * @param {function(string, AssociateSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateSecurityGroups(req, cb) {
        let resp = new AssociateSecurityGroupsResponse();
        this.request("AssociateSecurityGroups", req, resp, cb);
    }

    /**
     * 本接口（ModifyInstanceParams）用于修改实例参数配置。
     * @param {ModifyInstanceParamsRequest} req
     * @param {function(string, ModifyInstanceParamsResponse):void} cb
     * @public
     */
    ModifyInstanceParams(req, cb) {
        let resp = new ModifyInstanceParamsResponse();
        this.request("ModifyInstanceParams", req, resp, cb);
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
     * 本接口（DescribeInstanceParams）用于查询实例的参数列表。
     * @param {DescribeInstanceParamsRequest} req
     * @param {function(string, DescribeInstanceParamsResponse):void} cb
     * @public
     */
    DescribeInstanceParams(req, cb) {
        let resp = new DescribeInstanceParamsResponse();
        this.request("DescribeInstanceParams", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstanceReplicas）用于获取实例副本节点信息。
     * @param {DescribeInstanceReplicasRequest} req
     * @param {function(string, DescribeInstanceReplicasResponse):void} cb
     * @public
     */
    DescribeInstanceReplicas(req, cb) {
        let resp = new DescribeInstanceReplicasResponse();
        this.request("DescribeInstanceReplicas", req, resp, cb);
    }

    /**
     * 本接口（ModifyConnectionConfig）用于修改实例的连接配置，包括带宽和最大连接数。
     * @param {ModifyConnectionConfigRequest} req
     * @param {function(string, ModifyConnectionConfigResponse):void} cb
     * @public
     */
    ModifyConnectionConfig(req, cb) {
        let resp = new ModifyConnectionConfigResponse();
        this.request("ModifyConnectionConfig", req, resp, cb);
    }

    /**
     * 本接口查询指定可用区和实例类型下keewidb 的售卖规格， 如果用户不在购买白名单中，将不能查询该可用区或该类型的售卖规格详情。申请购买某地域白名单可以提交工单
     * @param {DescribeProductInfoRequest} req
     * @param {function(string, DescribeProductInfoResponse):void} cb
     * @public
     */
    DescribeProductInfo(req, cb) {
        let resp = new DescribeProductInfoResponse();
        this.request("DescribeProductInfo", req, resp, cb);
    }

    /**
     * 本接口（UpgradeInstance）用于对实例进行配置变更。
     * @param {UpgradeInstanceRequest} req
     * @param {function(string, UpgradeInstanceResponse):void} cb
     * @public
     */
    UpgradeInstance(req, cb) {
        let resp = new UpgradeInstanceResponse();
        this.request("UpgradeInstance", req, resp, cb);
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
     * 手动发起备份
     * @param {CreateBackupManuallyRequest} req
     * @param {function(string, CreateBackupManuallyResponse):void} cb
     * @public
     */
    CreateBackupManually(req, cb) {
        let resp = new CreateBackupManuallyResponse();
        this.request("CreateBackupManually", req, resp, cb);
    }

    /**
     * 本接口（DestroyPrepaidInstance）用于退还包年包月计费实例。
     * @param {DestroyPrepaidInstanceRequest} req
     * @param {function(string, DestroyPrepaidInstanceResponse):void} cb
     * @public
     */
    DestroyPrepaidInstance(req, cb) {
        let resp = new DestroyPrepaidInstanceResponse();
        this.request("DestroyPrepaidInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstanceParamRecords）查询参数配置修改历史列表。
     * @param {DescribeInstanceParamRecordsRequest} req
     * @param {function(string, DescribeInstanceParamRecordsResponse):void} cb
     * @public
     */
    DescribeInstanceParamRecords(req, cb) {
        let resp = new DescribeInstanceParamRecordsResponse();
        this.request("DescribeInstanceParamRecords", req, resp, cb);
    }

    /**
     * 本接口（ClearInstance）用于清空实例数据。
     * @param {ClearInstanceRequest} req
     * @param {function(string, ClearInstanceResponse):void} cb
     * @public
     */
    ClearInstance(req, cb) {
        let resp = new ClearInstanceResponse();
        this.request("ClearInstance", req, resp, cb);
    }

    /**
     * 本接口（DestroyPostpaidInstance）用于退还按量计费实例。
     * @param {DestroyPostpaidInstanceRequest} req
     * @param {function(string, DestroyPostpaidInstanceResponse):void} cb
     * @public
     */
    DestroyPostpaidInstance(req, cb) {
        let resp = new DestroyPostpaidInstanceResponse();
        this.request("DestroyPostpaidInstance", req, resp, cb);
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
     * 本接口（ModifyInstance）用于修改实例相关信息。
     * @param {ModifyInstanceRequest} req
     * @param {function(string, ModifyInstanceResponse):void} cb
     * @public
     */
    ModifyInstance(req, cb) {
        let resp = new ModifyInstanceResponse();
        this.request("ModifyInstance", req, resp, cb);
    }

    /**
     * 本接口（StartUpInstance）用于按量计费实例解隔离
     * @param {StartUpInstanceRequest} req
     * @param {function(string, StartUpInstanceResponse):void} cb
     * @public
     */
    StartUpInstance(req, cb) {
        let resp = new StartUpInstanceResponse();
        this.request("StartUpInstance", req, resp, cb);
    }


}
module.exports = KeewidbClient;
