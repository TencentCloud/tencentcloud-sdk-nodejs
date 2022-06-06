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
const UpgradeSmallVersionRequest = models.UpgradeSmallVersionRequest;
const ModifyInstanceParamsResponse = models.ModifyInstanceParamsResponse;
const EnableReplicaReadonlyRequest = models.EnableReplicaReadonlyRequest;
const RedisBackupSet = models.RedisBackupSet;
const DescribeInstanceMonitorTopNCmdResponse = models.DescribeInstanceMonitorTopNCmdResponse;
const ModifyAutoBackupConfigResponse = models.ModifyAutoBackupConfigResponse;
const RestoreInstanceRequest = models.RestoreInstanceRequest;
const AllocateWanAddressRequest = models.AllocateWanAddressRequest;
const ApplyParamsTemplateRequest = models.ApplyParamsTemplateRequest;
const UpgradeInstanceVersionResponse = models.UpgradeInstanceVersionResponse;
const CreateInstancesRequest = models.CreateInstancesRequest;
const CreateReplicationGroupRequest = models.CreateReplicationGroupRequest;
const ModifyInstanceReadOnlyResponse = models.ModifyInstanceReadOnlyResponse;
const DescribeInstanceZoneInfoRequest = models.DescribeInstanceZoneInfoRequest;
const ModifyNetworkConfigResponse = models.ModifyNetworkConfigResponse;
const CommandTake = models.CommandTake;
const DescribeInstanceMonitorBigKeyResponse = models.DescribeInstanceMonitorBigKeyResponse;
const Inbound = models.Inbound;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const DescribeTaskListResponse = models.DescribeTaskListResponse;
const ModifyInstanceRequest = models.ModifyInstanceRequest;
const KillMasterGroupResponse = models.KillMasterGroupResponse;
const RenewInstanceResponse = models.RenewInstanceResponse;
const DescribeSlowLogResponse = models.DescribeSlowLogResponse;
const DescribeCommonDBInstancesRequest = models.DescribeCommonDBInstancesRequest;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const RestoreInstanceResponse = models.RestoreInstanceResponse;
const RedisNodeInfo = models.RedisNodeInfo;
const DescribeBackupUrlRequest = models.DescribeBackupUrlRequest;
const DeleteParamTemplateResponse = models.DeleteParamTemplateResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeInstanceZoneInfoResponse = models.DescribeInstanceZoneInfoResponse;
const Account = models.Account;
const InstanceProxySlowlogDetail = models.InstanceProxySlowlogDetail;
const SecurityGroupsInboundAndOutbound = models.SecurityGroupsInboundAndOutbound;
const ResetPasswordResponse = models.ResetPasswordResponse;
const ClearInstanceRequest = models.ClearInstanceRequest;
const UpgradeInstanceVersionRequest = models.UpgradeInstanceVersionRequest;
const RegionConf = models.RegionConf;
const BigKeyInfo = models.BigKeyInfo;
const DescribeParamTemplatesRequest = models.DescribeParamTemplatesRequest;
const RenewInstanceRequest = models.RenewInstanceRequest;
const UpgradeVersionToMultiAvailabilityZonesResponse = models.UpgradeVersionToMultiAvailabilityZonesResponse;
const DescribeInstanceParamRecordsResponse = models.DescribeInstanceParamRecordsResponse;
const ModifyAutoBackupConfigRequest = models.ModifyAutoBackupConfigRequest;
const InstanceMultiParam = models.InstanceMultiParam;
const DescribeInstanceDealDetailRequest = models.DescribeInstanceDealDetailRequest;
const RedisNode = models.RedisNode;
const DescribeProjectSecurityGroupRequest = models.DescribeProjectSecurityGroupRequest;
const ParameterDetail = models.ParameterDetail;
const DescribeInstanceShardsResponse = models.DescribeInstanceShardsResponse;
const DestroyPrepaidInstanceRequest = models.DestroyPrepaidInstanceRequest;
const ManualBackupInstanceResponse = models.ManualBackupInstanceResponse;
const TaskInfoDetail = models.TaskInfoDetail;
const DisableReplicaReadonlyResponse = models.DisableReplicaReadonlyResponse;
const CreateParamTemplateResponse = models.CreateParamTemplateResponse;
const InstanceTagInfo = models.InstanceTagInfo;
const DescribeInstanceDTSInfoResponse = models.DescribeInstanceDTSInfoResponse;
const AddReplicationInstanceResponse = models.AddReplicationInstanceResponse;
const DestroyPostpaidInstanceResponse = models.DestroyPostpaidInstanceResponse;
const SwitchInstanceVipRequest = models.SwitchInstanceVipRequest;
const ChangeReplicaToMasterRequest = models.ChangeReplicaToMasterRequest;
const ProxyNodes = models.ProxyNodes;
const ModifyInstanceResponse = models.ModifyInstanceResponse;
const RedisCommonInstanceList = models.RedisCommonInstanceList;
const SourceInfo = models.SourceInfo;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const DescribeInstanceMonitorHotKeyRequest = models.DescribeInstanceMonitorHotKeyRequest;
const DescribeInstanceDTSInfoRequest = models.DescribeInstanceDTSInfoRequest;
const CreateParamTemplateRequest = models.CreateParamTemplateRequest;
const DescribeTendisSlowLogResponse = models.DescribeTendisSlowLogResponse;
const DescribeProductInfoResponse = models.DescribeProductInfoResponse;
const ModifyInstanceAccountRequest = models.ModifyInstanceAccountRequest;
const ModifyMaintenanceWindowRequest = models.ModifyMaintenanceWindowRequest;
const DescribeParamTemplateInfoRequest = models.DescribeParamTemplateInfoRequest;
const DescribeBackupUrlResponse = models.DescribeBackupUrlResponse;
const InquiryPriceRenewInstanceResponse = models.InquiryPriceRenewInstanceResponse;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const InquiryPriceCreateInstanceResponse = models.InquiryPriceCreateInstanceResponse;
const InstanceSecurityGroupDetail = models.InstanceSecurityGroupDetail;
const UpgradeProxyVersionResponse = models.UpgradeProxyVersionResponse;
const ResetPasswordRequest = models.ResetPasswordRequest;
const ModifyInstanceAccountResponse = models.ModifyInstanceAccountResponse;
const DelayDistribution = models.DelayDistribution;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const DescribeInstanceMonitorTookDistResponse = models.DescribeInstanceMonitorTookDistResponse;
const DescribeInstanceBackupsResponse = models.DescribeInstanceBackupsResponse;
const InstanceIntegerParam = models.InstanceIntegerParam;
const UpgradeVersionToMultiAvailabilityZonesRequest = models.UpgradeVersionToMultiAvailabilityZonesRequest;
const AllocateWanAddressResponse = models.AllocateWanAddressResponse;
const DescribeInstanceMonitorTookDistRequest = models.DescribeInstanceMonitorTookDistRequest;
const DeleteReplicationInstanceRequest = models.DeleteReplicationInstanceRequest;
const KillMasterGroupRequest = models.KillMasterGroupRequest;
const InstanceTextParam = models.InstanceTextParam;
const ParamTemplateInfo = models.ParamTemplateInfo;
const DescribeInstanceMonitorTopNCmdTookResponse = models.DescribeInstanceMonitorTopNCmdTookResponse;
const DescribeInstanceMonitorBigKeySizeDistRequest = models.DescribeInstanceMonitorBigKeySizeDistRequest;
const DescribeInstanceAccountRequest = models.DescribeInstanceAccountRequest;
const DescribeInstanceParamRecordsRequest = models.DescribeInstanceParamRecordsRequest;
const DescribeTaskListRequest = models.DescribeTaskListRequest;
const ChangeReplicaToMasterResponse = models.ChangeReplicaToMasterResponse;
const CreateInstancesResponse = models.CreateInstancesResponse;
const DescribeTaskInfoRequest = models.DescribeTaskInfoRequest;
const ApplyParamsTemplateResponse = models.ApplyParamsTemplateResponse;
const DescribeReplicationGroupRequest = models.DescribeReplicationGroupRequest;
const RedisNodes = models.RedisNodes;
const DescribeInstanceMonitorTopNCmdRequest = models.DescribeInstanceMonitorTopNCmdRequest;
const ModifyNetworkConfigRequest = models.ModifyNetworkConfigRequest;
const DescribeInstanceSecurityGroupRequest = models.DescribeInstanceSecurityGroupRequest;
const InstanceParamHistory = models.InstanceParamHistory;
const DescribeInstanceParamsRequest = models.DescribeInstanceParamsRequest;
const CleanUpInstanceResponse = models.CleanUpInstanceResponse;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DescribeParamTemplatesResponse = models.DescribeParamTemplatesResponse;
const DescribeInstanceShardsRequest = models.DescribeInstanceShardsRequest;
const Outbound = models.Outbound;
const DescribeAutoBackupConfigResponse = models.DescribeAutoBackupConfigResponse;
const InquiryPriceUpgradeInstanceRequest = models.InquiryPriceUpgradeInstanceRequest;
const ModifyParamTemplateResponse = models.ModifyParamTemplateResponse;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const DescribeInstanceMonitorBigKeySizeDistResponse = models.DescribeInstanceMonitorBigKeySizeDistResponse;
const SecurityGroup = models.SecurityGroup;
const CreateInstanceAccountRequest = models.CreateInstanceAccountRequest;
const EnableReplicaReadonlyResponse = models.EnableReplicaReadonlyResponse;
const DescribeMaintenanceWindowResponse = models.DescribeMaintenanceWindowResponse;
const DescribeInstanceSecurityGroupResponse = models.DescribeInstanceSecurityGroupResponse;
const ReleaseWanAddressResponse = models.ReleaseWanAddressResponse;
const ProductConf = models.ProductConf;
const ModifyConnectionConfigRequest = models.ModifyConnectionConfigRequest;
const InstanceNode = models.InstanceNode;
const TendisNodes = models.TendisNodes;
const StartupInstanceResponse = models.StartupInstanceResponse;
const DescribeInstanceDTSInstanceInfo = models.DescribeInstanceDTSInstanceInfo;
const TradeDealDetail = models.TradeDealDetail;
const ResourceTag = models.ResourceTag;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const ReplicaGroup = models.ReplicaGroup;
const DescribeTaskInfoResponse = models.DescribeTaskInfoResponse;
const DescribeInstanceMonitorBigKeyTypeDistResponse = models.DescribeInstanceMonitorBigKeyTypeDistResponse;
const DeleteReplicationInstanceResponse = models.DeleteReplicationInstanceResponse;
const CleanUpInstanceRequest = models.CleanUpInstanceRequest;
const DescribeInstanceDealDetailResponse = models.DescribeInstanceDealDetailResponse;
const Groups = models.Groups;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const SourceCommand = models.SourceCommand;
const ModfiyInstancePasswordRequest = models.ModfiyInstancePasswordRequest;
const DescribeSlowLogRequest = models.DescribeSlowLogRequest;
const DeleteParamTemplateRequest = models.DeleteParamTemplateRequest;
const DescribeAutoBackupConfigRequest = models.DescribeAutoBackupConfigRequest;
const DescribeInstanceMonitorSIPResponse = models.DescribeInstanceMonitorSIPResponse;
const DestroyPostpaidInstanceRequest = models.DestroyPostpaidInstanceRequest;
const DeleteInstanceAccountRequest = models.DeleteInstanceAccountRequest;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const ManualBackupInstanceRequest = models.ManualBackupInstanceRequest;
const DescribeReplicationGroupResponse = models.DescribeReplicationGroupResponse;
const ModifyParamTemplateRequest = models.ModifyParamTemplateRequest;
const ModfiyInstancePasswordResponse = models.ModfiyInstancePasswordResponse;
const InstanceSet = models.InstanceSet;
const ReleaseWanAddressRequest = models.ReleaseWanAddressRequest;
const InquiryPriceRenewInstanceRequest = models.InquiryPriceRenewInstanceRequest;
const ModifyConnectionConfigResponse = models.ModifyConnectionConfigResponse;
const ModifyMaintenanceWindowResponse = models.ModifyMaintenanceWindowResponse;
const CreateReplicationGroupResponse = models.CreateReplicationGroupResponse;
const DescribeInstanceMonitorBigKeyTypeDistRequest = models.DescribeInstanceMonitorBigKeyTypeDistRequest;
const DescribeInstanceMonitorTopNCmdTookRequest = models.DescribeInstanceMonitorTopNCmdTookRequest;
const DestroyPrepaidInstanceResponse = models.DestroyPrepaidInstanceResponse;
const DescribeCommonDBInstancesResponse = models.DescribeCommonDBInstancesResponse;
const InquiryPriceCreateInstanceRequest = models.InquiryPriceCreateInstanceRequest;
const UpgradeSmallVersionResponse = models.UpgradeSmallVersionResponse;
const ModifyInstanceParamsRequest = models.ModifyInstanceParamsRequest;
const BackupDownloadInfo = models.BackupDownloadInfo;
const BigKeyTypeInfo = models.BigKeyTypeInfo;
const DescribeInstanceNodeInfoRequest = models.DescribeInstanceNodeInfoRequest;
const DescribeMaintenanceWindowRequest = models.DescribeMaintenanceWindowRequest;
const AddReplicationInstanceRequest = models.AddReplicationInstanceRequest;
const InstanceClusterNode = models.InstanceClusterNode;
const DescribeTendisSlowLogRequest = models.DescribeTendisSlowLogRequest;
const DescribeProxySlowLogRequest = models.DescribeProxySlowLogRequest;
const DescribeProxySlowLogResponse = models.DescribeProxySlowLogResponse;
const ModifyInstanceReadOnlyRequest = models.ModifyInstanceReadOnlyRequest;
const DescribeInstanceAccountResponse = models.DescribeInstanceAccountResponse;
const DescribeInstanceMonitorBigKeyRequest = models.DescribeInstanceMonitorBigKeyRequest;
const DisableReplicaReadonlyRequest = models.DisableReplicaReadonlyRequest;
const DescribeParamTemplateInfoResponse = models.DescribeParamTemplateInfoResponse;
const DescribeProductInfoRequest = models.DescribeProductInfoRequest;
const SwitchInstanceVipResponse = models.SwitchInstanceVipResponse;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const StartupInstanceRequest = models.StartupInstanceRequest;
const HotKeyInfo = models.HotKeyInfo;
const InstanceEnumParam = models.InstanceEnumParam;
const CreateInstanceAccountResponse = models.CreateInstanceAccountResponse;
const DescribeInstanceBackupsRequest = models.DescribeInstanceBackupsRequest;
const SecurityGroupDetail = models.SecurityGroupDetail;
const InquiryPriceUpgradeInstanceResponse = models.InquiryPriceUpgradeInstanceResponse;
const DeleteInstanceAccountResponse = models.DeleteInstanceAccountResponse;
const DescribeInstanceMonitorSIPRequest = models.DescribeInstanceMonitorSIPRequest;
const InstanceClusterShard = models.InstanceClusterShard;
const TendisSlowLogDetail = models.TendisSlowLogDetail;
const UpgradeProxyVersionRequest = models.UpgradeProxyVersionRequest;
const ZoneCapacityConf = models.ZoneCapacityConf;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const DescribeInstanceNodeInfoResponse = models.DescribeInstanceNodeInfoResponse;
const DescribeProjectSecurityGroupResponse = models.DescribeProjectSecurityGroupResponse;
const Instances = models.Instances;
const DescribeInstanceMonitorHotKeyResponse = models.DescribeInstanceMonitorHotKeyResponse;
const InstanceParam = models.InstanceParam;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const ClearInstanceResponse = models.ClearInstanceResponse;
const InstanceSlowlogDetail = models.InstanceSlowlogDetail;


/**
 * redis client
 * @class
 */
class RedisClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("redis.tencentcloudapi.com", "2018-04-12", credential, region, profile);
    }
    
    /**
     * 启用读写分离
     * @param {EnableReplicaReadonlyRequest} req
     * @param {function(string, EnableReplicaReadonlyResponse):void} cb
     * @public
     */
    EnableReplicaReadonly(req, cb) {
        let resp = new EnableReplicaReadonlyResponse();
        this.request("EnableReplicaReadonly", req, resp, cb);
    }

    /**
     * 查询复制组
     * @param {DescribeReplicationGroupRequest} req
     * @param {function(string, DescribeReplicationGroupResponse):void} cb
     * @public
     */
    DescribeReplicationGroup(req, cb) {
        let resp = new DescribeReplicationGroupResponse();
        this.request("DescribeReplicationGroup", req, resp, cb);
    }

    /**
     * 查询实例节点信息
     * @param {DescribeInstanceNodeInfoRequest} req
     * @param {function(string, DescribeInstanceNodeInfoResponse):void} cb
     * @public
     */
    DescribeInstanceNodeInfo(req, cb) {
        let resp = new DescribeInstanceNodeInfoResponse();
        this.request("DescribeInstanceNodeInfo", req, resp, cb);
    }

    /**
     * 设置实例输入模式
     * @param {ModifyInstanceReadOnlyRequest} req
     * @param {function(string, ModifyInstanceReadOnlyResponse):void} cb
     * @public
     */
    ModifyInstanceReadOnly(req, cb) {
        let resp = new ModifyInstanceReadOnlyResponse();
        this.request("ModifyInstanceReadOnly", req, resp, cb);
    }

    /**
     * 查询实例大Key大小分布
     * @param {DescribeInstanceMonitorBigKeySizeDistRequest} req
     * @param {function(string, DescribeInstanceMonitorBigKeySizeDistResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorBigKeySizeDist(req, cb) {
        let resp = new DescribeInstanceMonitorBigKeySizeDistResponse();
        this.request("DescribeInstanceMonitorBigKeySizeDist", req, resp, cb);
    }

    /**
     * 创建实例子账号
     * @param {CreateInstanceAccountRequest} req
     * @param {function(string, CreateInstanceAccountResponse):void} cb
     * @public
     */
    CreateInstanceAccount(req, cb) {
        let resp = new CreateInstanceAccountResponse();
        this.request("CreateInstanceAccount", req, resp, cb);
    }

    /**
     * 修改实例维护时间窗时间，需要进行版本升级或者架构升级的实例，会在维护时间窗内进行时间切换。注意：已经发起版本升级或者架构升级的实例，无法修改维护时间窗。
     * @param {ModifyMaintenanceWindowRequest} req
     * @param {function(string, ModifyMaintenanceWindowResponse):void} cb
     * @public
     */
    ModifyMaintenanceWindow(req, cb) {
        let resp = new ModifyMaintenanceWindowResponse();
        this.request("ModifyMaintenanceWindow", req, resp, cb);
    }

    /**
     * 查询参数模板列表
     * @param {DescribeParamTemplatesRequest} req
     * @param {function(string, DescribeParamTemplatesResponse):void} cb
     * @public
     */
    DescribeParamTemplates(req, cb) {
        let resp = new DescribeParamTemplatesResponse();
        this.request("DescribeParamTemplates", req, resp, cb);
    }

    /**
     * 关闭外网
     * @param {ReleaseWanAddressRequest} req
     * @param {function(string, ReleaseWanAddressResponse):void} cb
     * @public
     */
    ReleaseWanAddress(req, cb) {
        let resp = new ReleaseWanAddressResponse();
        this.request("ReleaseWanAddress", req, resp, cb);
    }

    /**
     * 查询实例慢查询记录
     * @param {DescribeSlowLogRequest} req
     * @param {function(string, DescribeSlowLogResponse):void} cb
     * @public
     */
    DescribeSlowLog(req, cb) {
        let resp = new DescribeSlowLogResponse();
        this.request("DescribeSlowLog", req, resp, cb);
    }

    /**
     * 查询任务列表信息
     * @param {DescribeTaskListRequest} req
     * @param {function(string, DescribeTaskListResponse):void} cb
     * @public
     */
    DescribeTaskList(req, cb) {
        let resp = new DescribeTaskListResponse();
        this.request("DescribeTaskList", req, resp, cb);
    }

    /**
     * 移除复制组成员 注：接口下线中，请使用 RemoveReplicationInstance
     * @param {DeleteReplicationInstanceRequest} req
     * @param {function(string, DeleteReplicationInstanceResponse):void} cb
     * @public
     */
    DeleteReplicationInstance(req, cb) {
        let resp = new DeleteReplicationInstanceResponse();
        this.request("DeleteReplicationInstance", req, resp, cb);
    }

    /**
     * 回收站实例立即下线
     * @param {CleanUpInstanceRequest} req
     * @param {function(string, CleanUpInstanceResponse):void} cb
     * @public
     */
    CleanUpInstance(req, cb) {
        let resp = new CleanUpInstanceResponse();
        this.request("CleanUpInstance", req, resp, cb);
    }

    /**
     * 查询参数模板详情。
     * @param {DescribeParamTemplateInfoRequest} req
     * @param {function(string, DescribeParamTemplateInfoResponse):void} cb
     * @public
     */
    DescribeParamTemplateInfo(req, cb) {
        let resp = new DescribeParamTemplateInfoResponse();
        this.request("DescribeParamTemplateInfo", req, resp, cb);
    }

    /**
     * 查看实例子账号信息
     * @param {DescribeInstanceAccountRequest} req
     * @param {function(string, DescribeInstanceAccountResponse):void} cb
     * @public
     */
    DescribeInstanceAccount(req, cb) {
        let resp = new DescribeInstanceAccountResponse();
        this.request("DescribeInstanceAccount", req, resp, cb);
    }

    /**
     * 获取备份配置
     * @param {DescribeAutoBackupConfigRequest} req
     * @param {function(string, DescribeAutoBackupConfigResponse):void} cb
     * @public
     */
    DescribeAutoBackupConfig(req, cb) {
        let resp = new DescribeAutoBackupConfigResponse();
        this.request("DescribeAutoBackupConfig", req, resp, cb);
    }

    /**
     * 查询实例CPU耗时
     * @param {DescribeInstanceMonitorTopNCmdTookRequest} req
     * @param {function(string, DescribeInstanceMonitorTopNCmdTookResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorTopNCmdTook(req, cb) {
        let resp = new DescribeInstanceMonitorTopNCmdTookResponse();
        this.request("DescribeInstanceMonitorTopNCmdTook", req, resp, cb);
    }

    /**
     * 该接口仅支持多AZ实例副本组提主和单AZ副本提主
     * @param {ChangeReplicaToMasterRequest} req
     * @param {function(string, ChangeReplicaToMasterResponse):void} cb
     * @public
     */
    ChangeReplicaToMaster(req, cb) {
        let resp = new ChangeReplicaToMasterResponse();
        this.request("ChangeReplicaToMaster", req, resp, cb);
    }

    /**
     * 设置自动备份配置
     * @param {ModifyAutoBackupConfigRequest} req
     * @param {function(string, ModifyAutoBackupConfigResponse):void} cb
     * @public
     */
    ModifyAutoBackupConfig(req, cb) {
        let resp = new ModifyAutoBackupConfigResponse();
        this.request("ModifyAutoBackupConfig", req, resp, cb);
    }

    /**
     * 获取集群版实例分片信息
     * @param {DescribeInstanceShardsRequest} req
     * @param {function(string, DescribeInstanceShardsResponse):void} cb
     * @public
     */
    DescribeInstanceShards(req, cb) {
        let resp = new DescribeInstanceShardsResponse();
        this.request("DescribeInstanceShards", req, resp, cb);
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
     * 恢复 CRS 实例
     * @param {RestoreInstanceRequest} req
     * @param {function(string, RestoreInstanceResponse):void} cb
     * @public
     */
    RestoreInstance(req, cb) {
        let resp = new RestoreInstanceResponse();
        this.request("RestoreInstance", req, resp, cb);
    }

    /**
     * 查询Redis实例列表
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 删除参数模板
     * @param {DeleteParamTemplateRequest} req
     * @param {function(string, DeleteParamTemplateResponse):void} cb
     * @public
     */
    DeleteParamTemplate(req, cb) {
        let resp = new DeleteParamTemplateResponse();
        this.request("DeleteParamTemplate", req, resp, cb);
    }

    /**
     * 添加复制组成员
     * @param {AddReplicationInstanceRequest} req
     * @param {function(string, AddReplicationInstanceResponse):void} cb
     * @public
     */
    AddReplicationInstance(req, cb) {
        let resp = new AddReplicationInstanceResponse();
        this.request("AddReplicationInstance", req, resp, cb);
    }

    /**
     * 查询实例维护时间窗，在实例需要进行版本升级或者架构升级的时候，会在维护时间窗时间内进行切换
     * @param {DescribeMaintenanceWindowRequest} req
     * @param {function(string, DescribeMaintenanceWindowResponse):void} cb
     * @public
     */
    DescribeMaintenanceWindow(req, cb) {
        let resp = new DescribeMaintenanceWindowResponse();
        this.request("DescribeMaintenanceWindow", req, resp, cb);
    }

    /**
     * 查询实例访问命令
     * @param {DescribeInstanceMonitorTopNCmdRequest} req
     * @param {function(string, DescribeInstanceMonitorTopNCmdResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorTopNCmd(req, cb) {
        let resp = new DescribeInstanceMonitorTopNCmdResponse();
        this.request("DescribeInstanceMonitorTopNCmd", req, resp, cb);
    }

    /**
     * 创建参数模板。
     * @param {CreateParamTemplateRequest} req
     * @param {function(string, CreateParamTemplateResponse):void} cb
     * @public
     */
    CreateParamTemplate(req, cb) {
        let resp = new CreateParamTemplateResponse();
        this.request("CreateParamTemplate", req, resp, cb);
    }

    /**
     * 禁用读写分离
     * @param {DisableReplicaReadonlyRequest} req
     * @param {function(string, DisableReplicaReadonlyResponse):void} cb
     * @public
     */
    DisableReplicaReadonly(req, cb) {
        let resp = new DisableReplicaReadonlyResponse();
        this.request("DisableReplicaReadonly", req, resp, cb);
    }

    /**
     * 查询实例DTS信息
     * @param {DescribeInstanceDTSInfoRequest} req
     * @param {function(string, DescribeInstanceDTSInfoResponse):void} cb
     * @public
     */
    DescribeInstanceDTSInfo(req, cb) {
        let resp = new DescribeInstanceDTSInfoResponse();
        this.request("DescribeInstanceDTSInfo", req, resp, cb);
    }

    /**
     * 修改实例网络配置
     * @param {ModifyNetworkConfigRequest} req
     * @param {function(string, ModifyNetworkConfigResponse):void} cb
     * @public
     */
    ModifyNetworkConfig(req, cb) {
        let resp = new ModifyNetworkConfigResponse();
        this.request("ModifyNetworkConfig", req, resp, cb);
    }

    /**
     * 创建复制组
     * @param {CreateReplicationGroupRequest} req
     * @param {function(string, CreateReplicationGroupResponse):void} cb
     * @public
     */
    CreateReplicationGroup(req, cb) {
        let resp = new CreateReplicationGroupResponse();
        this.request("CreateReplicationGroup", req, resp, cb);
    }

    /**
     * 查询实例访问来源信息
     * @param {DescribeInstanceMonitorSIPRequest} req
     * @param {function(string, DescribeInstanceMonitorSIPResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorSIP(req, cb) {
        let resp = new DescribeInstanceMonitorSIPResponse();
        this.request("DescribeInstanceMonitorSIP", req, resp, cb);
    }

    /**
     * 本接口(CreateInstances)用于创建redis实例。
     * @param {CreateInstancesRequest} req
     * @param {function(string, CreateInstancesResponse):void} cb
     * @public
     */
    CreateInstances(req, cb) {
        let resp = new CreateInstancesResponse();
        this.request("CreateInstances", req, resp, cb);
    }

    /**
     * 修改实例子账号
     * @param {ModifyInstanceAccountRequest} req
     * @param {function(string, ModifyInstanceAccountResponse):void} cb
     * @public
     */
    ModifyInstanceAccount(req, cb) {
        let resp = new ModifyInstanceAccountResponse();
        this.request("ModifyInstanceAccount", req, resp, cb);
    }

    /**
     * 将原本实例升级到高版本实例，或者将主从版实例升级到集群版实例
     * @param {UpgradeInstanceVersionRequest} req
     * @param {function(string, UpgradeInstanceVersionResponse):void} cb
     * @public
     */
    UpgradeInstanceVersion(req, cb) {
        let resp = new UpgradeInstanceVersionResponse();
        this.request("UpgradeInstanceVersion", req, resp, cb);
    }

    /**
     * 查询实例续费价格（包年包月）
     * @param {InquiryPriceRenewInstanceRequest} req
     * @param {function(string, InquiryPriceRenewInstanceResponse):void} cb
     * @public
     */
    InquiryPriceRenewInstance(req, cb) {
        let resp = new InquiryPriceRenewInstanceResponse();
        this.request("InquiryPriceRenewInstance", req, resp, cb);
    }

    /**
     * 查询实例扩容价格
     * @param {InquiryPriceUpgradeInstanceRequest} req
     * @param {function(string, InquiryPriceUpgradeInstanceResponse):void} cb
     * @public
     */
    InquiryPriceUpgradeInstance(req, cb) {
        let resp = new InquiryPriceUpgradeInstanceResponse();
        this.request("InquiryPriceUpgradeInstance", req, resp, cb);
    }

    /**
     * 查询项目安全组信息
     * @param {DescribeProjectSecurityGroupRequest} req
     * @param {function(string, DescribeProjectSecurityGroupResponse):void} cb
     * @public
     */
    DescribeProjectSecurityGroup(req, cb) {
        let resp = new DescribeProjectSecurityGroupResponse();
        this.request("DescribeProjectSecurityGroup", req, resp, cb);
    }

    /**
     * 查询实例热Key
     * @param {DescribeInstanceMonitorHotKeyRequest} req
     * @param {function(string, DescribeInstanceMonitorHotKeyResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorHotKey(req, cb) {
        let resp = new DescribeInstanceMonitorHotKeyResponse();
        this.request("DescribeInstanceMonitorHotKey", req, resp, cb);
    }

    /**
     * 用于查询任务结果
     * @param {DescribeTaskInfoRequest} req
     * @param {function(string, DescribeTaskInfoResponse):void} cb
     * @public
     */
    DescribeTaskInfo(req, cb) {
        let resp = new DescribeTaskInfoResponse();
        this.request("DescribeTaskInfo", req, resp, cb);
    }

    /**
     * 开通外网
     * @param {AllocateWanAddressRequest} req
     * @param {function(string, AllocateWanAddressResponse):void} cb
     * @public
     */
    AllocateWanAddress(req, cb) {
        let resp = new AllocateWanAddressResponse();
        this.request("AllocateWanAddress", req, resp, cb);
    }

    /**
     * 本接口（DescribeProxySlowLog）用于查询代理慢查询。
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
     * 查询Tendis慢查询
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
     * 本接口(ModifyInstanceParams)用于修改实例参数。
     * @param {ModifyInstanceParamsRequest} req
     * @param {function(string, ModifyInstanceParamsResponse):void} cb
     * @public
     */
    ModifyInstanceParams(req, cb) {
        let resp = new ModifyInstanceParamsResponse();
        this.request("ModifyInstanceParams", req, resp, cb);
    }

    /**
     * 实例proxy版本升级
     * @param {UpgradeProxyVersionRequest} req
     * @param {function(string, UpgradeProxyVersionResponse):void} cb
     * @public
     */
    UpgradeProxyVersion(req, cb) {
        let resp = new UpgradeProxyVersionResponse();
        this.request("UpgradeProxyVersion", req, resp, cb);
    }

    /**
     * 修改参数模板
     * @param {ModifyParamTemplateRequest} req
     * @param {function(string, ModifyParamTemplateResponse):void} cb
     * @public
     */
    ModifyParamTemplate(req, cb) {
        let resp = new ModifyParamTemplateResponse();
        this.request("ModifyParamTemplate", req, resp, cb);
    }

    /**
     * 查询新购实例价格
     * @param {InquiryPriceCreateInstanceRequest} req
     * @param {function(string, InquiryPriceCreateInstanceResponse):void} cb
     * @public
     */
    InquiryPriceCreateInstance(req, cb) {
        let resp = new InquiryPriceCreateInstanceResponse();
        this.request("InquiryPriceCreateInstance", req, resp, cb);
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
     * 按量计费实例销毁
     * @param {DestroyPostpaidInstanceRequest} req
     * @param {function(string, DestroyPostpaidInstanceResponse):void} cb
     * @public
     */
    DestroyPostpaidInstance(req, cb) {
        let resp = new DestroyPostpaidInstanceResponse();
        this.request("DestroyPostpaidInstance", req, resp, cb);
    }

    /**
     * 查询实例大Key
     * @param {DescribeInstanceMonitorBigKeyRequest} req
     * @param {function(string, DescribeInstanceMonitorBigKeyResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorBigKey(req, cb) {
        let resp = new DescribeInstanceMonitorBigKeyResponse();
        this.request("DescribeInstanceMonitorBigKey", req, resp, cb);
    }

    /**
     * 在通过DTS支持跨可用区灾备的场景中，通过该接口交换实例VIP完成实例灾备切换。交换VIP后目标实例可写，源和目标实例VIP互换，同时源与目标实例间DTS同步任务断开
     * @param {SwitchInstanceVipRequest} req
     * @param {function(string, SwitchInstanceVipResponse):void} cb
     * @public
     */
    SwitchInstanceVip(req, cb) {
        let resp = new SwitchInstanceVipResponse();
        this.request("SwitchInstanceVip", req, resp, cb);
    }

    /**
     * 查询实例安全组信息
     * @param {DescribeInstanceSecurityGroupRequest} req
     * @param {function(string, DescribeInstanceSecurityGroupResponse):void} cb
     * @public
     */
    DescribeInstanceSecurityGroup(req, cb) {
        let resp = new DescribeInstanceSecurityGroupResponse();
        this.request("DescribeInstanceSecurityGroup", req, resp, cb);
    }

    /**
     * 查询实例大Key类型分布
     * @param {DescribeInstanceMonitorBigKeyTypeDistRequest} req
     * @param {function(string, DescribeInstanceMonitorBigKeyTypeDistResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorBigKeyTypeDist(req, cb) {
        let resp = new DescribeInstanceMonitorBigKeyTypeDistResponse();
        this.request("DescribeInstanceMonitorBigKeyTypeDist", req, resp, cb);
    }

    /**
     * 重置密码
     * @param {ResetPasswordRequest} req
     * @param {function(string, ResetPasswordResponse):void} cb
     * @public
     */
    ResetPassword(req, cb) {
        let resp = new ResetPasswordResponse();
        this.request("ResetPassword", req, resp, cb);
    }

    /**
     * 模拟故障
     * @param {KillMasterGroupRequest} req
     * @param {function(string, KillMasterGroupResponse):void} cb
     * @public
     */
    KillMasterGroup(req, cb) {
        let resp = new KillMasterGroupResponse();
        this.request("KillMasterGroup", req, resp, cb);
    }

    /**
     * 修改实例的连接配置，包括带宽和最大连接数。
     * @param {ModifyConnectionConfigRequest} req
     * @param {function(string, ModifyConnectionConfigResponse):void} cb
     * @public
     */
    ModifyConnectionConfig(req, cb) {
        let resp = new ModifyConnectionConfigResponse();
        this.request("ModifyConnectionConfig", req, resp, cb);
    }

    /**
     * 升级实例支持多AZ
     * @param {UpgradeVersionToMultiAvailabilityZonesRequest} req
     * @param {function(string, UpgradeVersionToMultiAvailabilityZonesResponse):void} cb
     * @public
     */
    UpgradeVersionToMultiAvailabilityZones(req, cb) {
        let resp = new UpgradeVersionToMultiAvailabilityZonesResponse();
        this.request("UpgradeVersionToMultiAvailabilityZones", req, resp, cb);
    }

    /**
     * 查询Redis实例列表信息。该接口已废弃。
     * @param {DescribeCommonDBInstancesRequest} req
     * @param {function(string, DescribeCommonDBInstancesResponse):void} cb
     * @public
     */
    DescribeCommonDBInstances(req, cb) {
        let resp = new DescribeCommonDBInstancesResponse();
        this.request("DescribeCommonDBInstances", req, resp, cb);
    }

    /**
     * 本接口查询指定可用区和实例类型下 Redis 的售卖规格， 如果用户不在购买白名单中，将不能查询该可用区或该类型的售卖规格详情。申请购买某地域白名单可以提交工单
     * @param {DescribeProductInfoRequest} req
     * @param {function(string, DescribeProductInfoResponse):void} cb
     * @public
     */
    DescribeProductInfo(req, cb) {
        let resp = new DescribeProductInfoResponse();
        this.request("DescribeProductInfo", req, resp, cb);
    }

    /**
     * 续费实例
     * @param {RenewInstanceRequest} req
     * @param {function(string, RenewInstanceResponse):void} cb
     * @public
     */
    RenewInstance(req, cb) {
        let resp = new RenewInstanceResponse();
        this.request("RenewInstance", req, resp, cb);
    }

    /**
     * 实例小版本升级
     * @param {UpgradeSmallVersionRequest} req
     * @param {function(string, UpgradeSmallVersionResponse):void} cb
     * @public
     */
    UpgradeSmallVersion(req, cb) {
        let resp = new UpgradeSmallVersionResponse();
        this.request("UpgradeSmallVersion", req, resp, cb);
    }

    /**
     * 手动备份Redis实例
     * @param {ManualBackupInstanceRequest} req
     * @param {function(string, ManualBackupInstanceResponse):void} cb
     * @public
     */
    ManualBackupInstance(req, cb) {
        let resp = new ManualBackupInstanceResponse();
        this.request("ManualBackupInstance", req, resp, cb);
    }

    /**
     * 修改redis密码
     * @param {ModfiyInstancePasswordRequest} req
     * @param {function(string, ModfiyInstancePasswordResponse):void} cb
     * @public
     */
    ModfiyInstancePassword(req, cb) {
        let resp = new ModfiyInstancePasswordResponse();
        this.request("ModfiyInstancePassword", req, resp, cb);
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
     * 查询实例参数列表
     * @param {DescribeInstanceParamsRequest} req
     * @param {function(string, DescribeInstanceParamsResponse):void} cb
     * @public
     */
    DescribeInstanceParams(req, cb) {
        let resp = new DescribeInstanceParamsResponse();
        this.request("DescribeInstanceParams", req, resp, cb);
    }

    /**
     * 应用参数模板到实例
     * @param {ApplyParamsTemplateRequest} req
     * @param {function(string, ApplyParamsTemplateResponse):void} cb
     * @public
     */
    ApplyParamsTemplate(req, cb) {
        let resp = new ApplyParamsTemplateResponse();
        this.request("ApplyParamsTemplate", req, resp, cb);
    }

    /**
     * 包年包月实例退还
     * @param {DestroyPrepaidInstanceRequest} req
     * @param {function(string, DestroyPrepaidInstanceResponse):void} cb
     * @public
     */
    DestroyPrepaidInstance(req, cb) {
        let resp = new DestroyPrepaidInstanceResponse();
        this.request("DestroyPrepaidInstance", req, resp, cb);
    }

    /**
     * 查询参数修改历史列表
     * @param {DescribeInstanceParamRecordsRequest} req
     * @param {function(string, DescribeInstanceParamRecordsResponse):void} cb
     * @public
     */
    DescribeInstanceParamRecords(req, cb) {
        let resp = new DescribeInstanceParamRecordsResponse();
        this.request("DescribeInstanceParamRecords", req, resp, cb);
    }

    /**
     * 清空Redis实例的实例数据。
     * @param {ClearInstanceRequest} req
     * @param {function(string, ClearInstanceResponse):void} cb
     * @public
     */
    ClearInstance(req, cb) {
        let resp = new ClearInstanceResponse();
        this.request("ClearInstance", req, resp, cb);
    }

    /**
     * 查询Redis节点详细信息
     * @param {DescribeInstanceZoneInfoRequest} req
     * @param {function(string, DescribeInstanceZoneInfoResponse):void} cb
     * @public
     */
    DescribeInstanceZoneInfo(req, cb) {
        let resp = new DescribeInstanceZoneInfoResponse();
        this.request("DescribeInstanceZoneInfo", req, resp, cb);
    }

    /**
     * 查询订单信息
     * @param {DescribeInstanceDealDetailRequest} req
     * @param {function(string, DescribeInstanceDealDetailResponse):void} cb
     * @public
     */
    DescribeInstanceDealDetail(req, cb) {
        let resp = new DescribeInstanceDealDetailResponse();
        this.request("DescribeInstanceDealDetail", req, resp, cb);
    }

    /**
     * 删除实例子账号
     * @param {DeleteInstanceAccountRequest} req
     * @param {function(string, DeleteInstanceAccountResponse):void} cb
     * @public
     */
    DeleteInstanceAccount(req, cb) {
        let resp = new DeleteInstanceAccountResponse();
        this.request("DeleteInstanceAccount", req, resp, cb);
    }

    /**
     * 查询 CRS 实例备份列表
     * @param {DescribeInstanceBackupsRequest} req
     * @param {function(string, DescribeInstanceBackupsResponse):void} cb
     * @public
     */
    DescribeInstanceBackups(req, cb) {
        let resp = new DescribeInstanceBackupsResponse();
        this.request("DescribeInstanceBackups", req, resp, cb);
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
     * 实例解隔离
     * @param {StartupInstanceRequest} req
     * @param {function(string, StartupInstanceResponse):void} cb
     * @public
     */
    StartupInstance(req, cb) {
        let resp = new StartupInstanceResponse();
        this.request("StartupInstance", req, resp, cb);
    }

    /**
     * 修改实例相关信息
     * @param {ModifyInstanceRequest} req
     * @param {function(string, ModifyInstanceResponse):void} cb
     * @public
     */
    ModifyInstance(req, cb) {
        let resp = new ModifyInstanceResponse();
        this.request("ModifyInstance", req, resp, cb);
    }

    /**
     * 查询实例访问的耗时分布
     * @param {DescribeInstanceMonitorTookDistRequest} req
     * @param {function(string, DescribeInstanceMonitorTookDistResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorTookDist(req, cb) {
        let resp = new DescribeInstanceMonitorTookDistResponse();
        this.request("DescribeInstanceMonitorTookDist", req, resp, cb);
    }

    /**
     * 查询备份Rdb下载地址(接口灰度中，需要加白名单使用)
     * @param {DescribeBackupUrlRequest} req
     * @param {function(string, DescribeBackupUrlResponse):void} cb
     * @public
     */
    DescribeBackupUrl(req, cb) {
        let resp = new DescribeBackupUrlResponse();
        this.request("DescribeBackupUrl", req, resp, cb);
    }


}
module.exports = RedisClient;
