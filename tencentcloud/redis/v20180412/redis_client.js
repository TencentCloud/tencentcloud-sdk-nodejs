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
const RedisBackupSet = models.RedisBackupSet;
const DescribeInstanceMonitorTopNCmdResponse = models.DescribeInstanceMonitorTopNCmdResponse;
const ModifyAutoBackupConfigResponse = models.ModifyAutoBackupConfigResponse;
const RestoreInstanceRequest = models.RestoreInstanceRequest;
const TaskInfoDetail = models.TaskInfoDetail;
const SwitchInstanceVipRequest = models.SwitchInstanceVipRequest;
const CreateInstancesRequest = models.CreateInstancesRequest;
const ModifyNetworkConfigResponse = models.ModifyNetworkConfigResponse;
const CommandTake = models.CommandTake;
const DescribeInstanceMonitorBigKeyResponse = models.DescribeInstanceMonitorBigKeyResponse;
const DescribeTaskListResponse = models.DescribeTaskListResponse;
const ModifyInstanceRequest = models.ModifyInstanceRequest;
const RenewInstanceResponse = models.RenewInstanceResponse;
const DescribeSlowLogResponse = models.DescribeSlowLogResponse;
const DescribeBackupUrlRequest = models.DescribeBackupUrlRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DestroyPostpaidInstanceRequest = models.DestroyPostpaidInstanceRequest;
const Account = models.Account;
const SecurityGroupsInboundAndOutbound = models.SecurityGroupsInboundAndOutbound;
const ResetPasswordResponse = models.ResetPasswordResponse;
const ClearInstanceRequest = models.ClearInstanceRequest;
const RegionConf = models.RegionConf;
const BigKeyInfo = models.BigKeyInfo;
const RenewInstanceRequest = models.RenewInstanceRequest;
const DescribeInstanceParamRecordsResponse = models.DescribeInstanceParamRecordsResponse;
const ModifyAutoBackupConfigRequest = models.ModifyAutoBackupConfigRequest;
const InstanceMultiParam = models.InstanceMultiParam;
const DescribeInstanceDealDetailRequest = models.DescribeInstanceDealDetailRequest;
const DescribeProjectSecurityGroupRequest = models.DescribeProjectSecurityGroupRequest;
const RestoreInstanceResponse = models.RestoreInstanceResponse;
const DescribeInstanceShardsResponse = models.DescribeInstanceShardsResponse;
const DestroyPrepaidInstanceRequest = models.DestroyPrepaidInstanceRequest;
const ManualBackupInstanceResponse = models.ManualBackupInstanceResponse;
const InstanceTagInfo = models.InstanceTagInfo;
const DescribeInstanceDTSInfoResponse = models.DescribeInstanceDTSInfoResponse;
const DestroyPostpaidInstanceResponse = models.DestroyPostpaidInstanceResponse;
const ModifyInstanceResponse = models.ModifyInstanceResponse;
const TradeDealDetail = models.TradeDealDetail;
const SourceInfo = models.SourceInfo;
const DescribeInstanceMonitorHotKeyRequest = models.DescribeInstanceMonitorHotKeyRequest;
const DescribeInstanceDTSInfoRequest = models.DescribeInstanceDTSInfoRequest;
const DescribeProductInfoResponse = models.DescribeProductInfoResponse;
const ModifyInstanceAccountRequest = models.ModifyInstanceAccountRequest;
const DescribeBackupUrlResponse = models.DescribeBackupUrlResponse;
const ResetPasswordRequest = models.ResetPasswordRequest;
const ModifyInstanceAccountResponse = models.ModifyInstanceAccountResponse;
const DelayDistribution = models.DelayDistribution;
const DescribeInstanceMonitorTookDistResponse = models.DescribeInstanceMonitorTookDistResponse;
const DescribeInstanceBackupsResponse = models.DescribeInstanceBackupsResponse;
const InstanceIntegerParam = models.InstanceIntegerParam;
const DescribeInstanceMonitorTookDistRequest = models.DescribeInstanceMonitorTookDistRequest;
const InstanceTextParam = models.InstanceTextParam;
const DescribeInstanceMonitorTopNCmdTookResponse = models.DescribeInstanceMonitorTopNCmdTookResponse;
const DescribeInstanceMonitorBigKeySizeDistRequest = models.DescribeInstanceMonitorBigKeySizeDistRequest;
const InstanceParamHistory = models.InstanceParamHistory;
const DescribeInstanceParamRecordsRequest = models.DescribeInstanceParamRecordsRequest;
const DescribeTaskListRequest = models.DescribeTaskListRequest;
const DisableReplicaReadonlyResponse = models.DisableReplicaReadonlyResponse;
const CreateInstancesResponse = models.CreateInstancesResponse;
const DescribeTaskInfoRequest = models.DescribeTaskInfoRequest;
const DescribeInstanceMonitorTopNCmdRequest = models.DescribeInstanceMonitorTopNCmdRequest;
const ModifyNetworkConfigRequest = models.ModifyNetworkConfigRequest;
const DescribeInstanceSecurityGroupRequest = models.DescribeInstanceSecurityGroupRequest;
const DescribeInstanceAccountRequest = models.DescribeInstanceAccountRequest;
const DescribeInstanceParamsRequest = models.DescribeInstanceParamsRequest;
const InstanceClusterShard = models.InstanceClusterShard;
const DescribeInstanceShardsRequest = models.DescribeInstanceShardsRequest;
const DescribeAutoBackupConfigResponse = models.DescribeAutoBackupConfigResponse;
const DescribeInstanceMonitorBigKeySizeDistResponse = models.DescribeInstanceMonitorBigKeySizeDistResponse;
const CreateInstanceAccountRequest = models.CreateInstanceAccountRequest;
const EnableReplicaReadonlyResponse = models.EnableReplicaReadonlyResponse;
const InstanceSecurityGroupDetail = models.InstanceSecurityGroupDetail;
const DescribeInstanceSecurityGroupResponse = models.DescribeInstanceSecurityGroupResponse;
const ProductConf = models.ProductConf;
const InstanceNode = models.InstanceNode;
const StartupInstanceResponse = models.StartupInstanceResponse;
const DescribeInstanceDTSInstanceInfo = models.DescribeInstanceDTSInstanceInfo;
const DescribeTaskInfoResponse = models.DescribeTaskInfoResponse;
const DescribeInstanceMonitorBigKeyTypeDistResponse = models.DescribeInstanceMonitorBigKeyTypeDistResponse;
const CleanUpInstanceRequest = models.CleanUpInstanceRequest;
const DescribeInstanceDealDetailResponse = models.DescribeInstanceDealDetailResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const SourceCommand = models.SourceCommand;
const ModfiyInstancePasswordRequest = models.ModfiyInstancePasswordRequest;
const DescribeSlowLogRequest = models.DescribeSlowLogRequest;
const DescribeAutoBackupConfigRequest = models.DescribeAutoBackupConfigRequest;
const DescribeInstanceMonitorSIPResponse = models.DescribeInstanceMonitorSIPResponse;
const InstanceEnumParam = models.InstanceEnumParam;
const DeleteInstanceAccountRequest = models.DeleteInstanceAccountRequest;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const ManualBackupInstanceRequest = models.ManualBackupInstanceRequest;
const ModfiyInstancePasswordResponse = models.ModfiyInstancePasswordResponse;
const InstanceSet = models.InstanceSet;
const DescribeInstanceMonitorTopNCmdTookRequest = models.DescribeInstanceMonitorTopNCmdTookRequest;
const DestroyPrepaidInstanceResponse = models.DestroyPrepaidInstanceResponse;
const DescribeInstanceMonitorBigKeyTypeDistRequest = models.DescribeInstanceMonitorBigKeyTypeDistRequest;
const ModifyInstanceParamsRequest = models.ModifyInstanceParamsRequest;
const BigKeyTypeInfo = models.BigKeyTypeInfo;
const InstanceClusterNode = models.InstanceClusterNode;
const EnableReplicaReadonlyRequest = models.EnableReplicaReadonlyRequest;
const DescribeInstanceAccountResponse = models.DescribeInstanceAccountResponse;
const DescribeInstanceMonitorBigKeyRequest = models.DescribeInstanceMonitorBigKeyRequest;
const DisableReplicaReadonlyRequest = models.DisableReplicaReadonlyRequest;
const DescribeProductInfoRequest = models.DescribeProductInfoRequest;
const SwitchInstanceVipResponse = models.SwitchInstanceVipResponse;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const StartupInstanceRequest = models.StartupInstanceRequest;
const HotKeyInfo = models.HotKeyInfo;
const CreateInstanceAccountResponse = models.CreateInstanceAccountResponse;
const DescribeInstanceBackupsRequest = models.DescribeInstanceBackupsRequest;
const SecurityGroupDetail = models.SecurityGroupDetail;
const DeleteInstanceAccountResponse = models.DeleteInstanceAccountResponse;
const DescribeInstanceMonitorSIPRequest = models.DescribeInstanceMonitorSIPRequest;
const CleanUpInstanceResponse = models.CleanUpInstanceResponse;
const ZoneCapacityConf = models.ZoneCapacityConf;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const DescribeProjectSecurityGroupResponse = models.DescribeProjectSecurityGroupResponse;
const DescribeInstanceMonitorHotKeyResponse = models.DescribeInstanceMonitorHotKeyResponse;
const InstanceParam = models.InstanceParam;
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
     * 设置自动备份时间
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
     * 修改实例参数
     * @param {ModifyInstanceParamsRequest} req
     * @param {function(string, ModifyInstanceParamsResponse):void} cb
     * @public
     */
    ModifyInstanceParams(req, cb) {
        let resp = new ModifyInstanceParamsResponse();
        this.request("ModifyInstanceParams", req, resp, cb);
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
     * 创建redis实例
     * @param {CreateInstancesRequest} req
     * @param {function(string, CreateInstancesResponse):void} cb
     * @public
     */
    CreateInstances(req, cb) {
        let resp = new CreateInstancesResponse();
        this.request("CreateInstances", req, resp, cb);
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
     * 查询备份Rdb下载地址(接口灰度中，需要加白名单使用)
     * @param {DescribeBackupUrlRequest} req
     * @param {function(string, DescribeBackupUrlResponse):void} cb
     * @public
     */
    DescribeBackupUrl(req, cb) {
        let resp = new DescribeBackupUrlResponse();
        this.request("DescribeBackupUrl", req, resp, cb);
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
     * 查询实例大Key大小分布
     * @param {DescribeInstanceMonitorTookDistRequest} req
     * @param {function(string, DescribeInstanceMonitorTookDistResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorTookDist(req, cb) {
        let resp = new DescribeInstanceMonitorTookDistResponse();
        this.request("DescribeInstanceMonitorTookDist", req, resp, cb);
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


}
module.exports = RedisClient;
