"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * redis client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("redis.tencentcloudapi.com", "2018-04-12", clientConfig);
    }
    /**
     * 本接口（ModifyInstanceReadOnly）用于设置实例输入模式。
     */
    async ModifyInstanceReadOnly(req, cb) {
        return this.request("ModifyInstanceReadOnly", req, cb);
    }
    /**
     * 腾讯云数据库 Redis 已经于2022年10月31日下线查询实例大 Key 接口。具体公告，请参见 [查询实例大 Key 接口下线公告](https://cloud.tencent.com/document/product/239/81005)。
     */
    async DescribeInstanceMonitorBigKeySizeDist(req, cb) {
        return this.request("DescribeInstanceMonitorBigKeySizeDist", req, cb);
    }
    /**
     * 本接口（DescribeTaskList）用于查询指定实例的任务列表信息。

- 可查询近30天内任务列表数据。
     */
    async DescribeTaskList(req, cb) {
        return this.request("DescribeTaskList", req, cb);
    }
    /**
     * 本接口（DeleteReplicationInstance）移除复制组成员。注：该接口下线中，请使用 [RemoveReplicationInstance](https://cloud.tencent.com/document/product/239/90099)。
     */
    async DeleteReplicationInstance(req, cb) {
        return this.request("DeleteReplicationInstance", req, cb);
    }
    /**
     * 本接口（CleanUpInstance）用于立即下线回收站的实例。
     */
    async CleanUpInstance(req, cb) {
        return this.request("CleanUpInstance", req, cb);
    }
    /**
     * 本接口（DescribeInstanceAccount）用于查看实例子账号信息。
     */
    async DescribeInstanceAccount(req, cb) {
        return this.request("DescribeInstanceAccount", req, cb);
    }
    /**
     * 本接口（SwitchAccessNewInstance）针对处于时间窗口中待切换操作的实例，用户可主动发起该操作。
     */
    async SwitchAccessNewInstance(req, cb) {
        return this.request("SwitchAccessNewInstance", req, cb);
    }
    /**
     * 本接口（ChangeReplicaToMaster）适用于实例副本组提主或副本提主。
     */
    async ChangeReplicaToMaster(req, cb) {
        return this.request("ChangeReplicaToMaster", req, cb);
    }
    /**
     * 本接口（DescribeInstanceMonitorTopNCmd）用于查询实例访问命令。
     */
    async DescribeInstanceMonitorTopNCmd(req, cb) {
        return this.request("DescribeInstanceMonitorTopNCmd", req, cb);
    }
    /**
     * 本接口（UpgradeInstanceVersion）用于将当前实例升级到更高版本，或者将当前标准架构升级至集群架构。
     */
    async UpgradeInstanceVersion(req, cb) {
        return this.request("UpgradeInstanceVersion", req, cb);
    }
    /**
     * 本接口（DescribeProductInfo）用于查询全地域 Redis 的售卖规格。
     */
    async DescribeProductInfo(req, cb) {
        return this.request("DescribeProductInfo", req, cb);
    }
    /**
     * 本接口（DescribeTaskInfo）用于获取指定任务的执行情况。
     */
    async DescribeTaskInfo(req, cb) {
        return this.request("DescribeTaskInfo", req, cb);
    }
    /**
     * 修改实例的备份模式
     */
    async ModifyInstanceBackupMode(req, cb) {
        return this.request("ModifyInstanceBackupMode", req, cb);
    }
    /**
     * 本接口（ModifyBackupDownloadRestriction）用于修改备份文件下载的网络信息与地址。
     */
    async ModifyBackupDownloadRestriction(req, cb) {
        return this.request("ModifyBackupDownloadRestriction", req, cb);
    }
    /**
     * 本接口（ModifyInstanceAccount）用于修改实例子账号。
     */
    async ModifyInstanceAccount(req, cb) {
        return this.request("ModifyInstanceAccount", req, cb);
    }
    /**
     * 本接口（DescribeInstanceSecurityGroup）用于查询实例安全组信息。
     */
    async DescribeInstanceSecurityGroup(req, cb) {
        return this.request("DescribeInstanceSecurityGroup", req, cb);
    }
    /**
     * 本接口（DescribeBackupDetail）用于查询实例的备份信息详情。
     */
    async DescribeBackupDetail(req, cb) {
        return this.request("DescribeBackupDetail", req, cb);
    }
    /**
     * 本接口（UpgradeVersionToMultiAvailabilityZones）用于升级实例支持多AZ。
     */
    async UpgradeVersionToMultiAvailabilityZones(req, cb) {
        return this.request("UpgradeVersionToMultiAvailabilityZones", req, cb);
    }
    /**
     * 本接口（DescribeGlobalReplicationArea）用于查询全球复制支持地域信息。
     */
    async DescribeGlobalReplicationArea(req, cb) {
        return this.request("DescribeGlobalReplicationArea", req, cb);
    }
    /**
     * 本接口（ModifyInstanceParams）用于修改 Redis 实例的参数配置。
     */
    async ModifyInstanceParams(req, cb) {
        return this.request("ModifyInstanceParams", req, cb);
    }
    /**
     * 本接口（ClearInstance）用于清空实例数据。
     */
    async ClearInstance(req, cb) {
        return this.request("ClearInstance", req, cb);
    }
    /**
     * 本接口（DescribeBackupUrl）用于查询备份 Rdb 文件的下载地址。
     */
    async DescribeBackupUrl(req, cb) {
        return this.request("DescribeBackupUrl", req, cb);
    }
    /**
     * 查询实例秒级备份信息
     */
    async DescribeSecondLevelBackupInfo(req, cb) {
        return this.request("DescribeSecondLevelBackupInfo", req, cb);
    }
    /**
     * 本接口（ModifyConnectionConfig）用于修改实例的连接配置，包括带宽和最大连接数。
     */
    async ModifyConnectionConfig(req, cb) {
        return this.request("ModifyConnectionConfig", req, cb);
    }
    /**
     * 本接口（DescribeInstanceLogDelivery）用于查询实例的日志投递配置。
     */
    async DescribeInstanceLogDelivery(req, cb) {
        return this.request("DescribeInstanceLogDelivery", req, cb);
    }
    /**
     * 本接口（ModifyInstance）用于修改实例相关信息。
     */
    async ModifyInstance(req, cb) {
        return this.request("ModifyInstance", req, cb);
    }
    /**
     * 本接口（ChangeInstanceRole）用于更换复制组内实例的角色。
     */
    async ChangeInstanceRole(req, cb) {
        return this.request("ChangeInstanceRole", req, cb);
    }
    /**
     * 本接口（DescribeInstanceNodeInfo）用于查询实例节点信息。
     */
    async DescribeInstanceNodeInfo(req, cb) {
        return this.request("DescribeInstanceNodeInfo", req, cb);
    }
    /**
     * 本接口（CreateInstanceAccount）用于自定义访问实例的账号。
     */
    async CreateInstanceAccount(req, cb) {
        return this.request("CreateInstanceAccount", req, cb);
    }
    /**
     * 本接口（ModifyInstanceEvent）用于修改实例的运维事件的执行计划。
     */
    async ModifyInstanceEvent(req, cb) {
        return this.request("ModifyInstanceEvent", req, cb);
    }
    /**
     * 本接口（UpgradeProxyVersion）用于升级实例 Proxy 版本。
     */
    async UpgradeProxyVersion(req, cb) {
        return this.request("UpgradeProxyVersion", req, cb);
    }
    /**
     * 本接口（DescribeInstanceMonitorTopNCmdTook）用于查询实例 CPU 耗时。
     */
    async DescribeInstanceMonitorTopNCmdTook(req, cb) {
        return this.request("DescribeInstanceMonitorTopNCmdTook", req, cb);
    }
    /**
     * 本接口（ModifyAutoBackupConfig）用于设置自动备份的配置。
     */
    async ModifyAutoBackupConfig(req, cb) {
        return this.request("ModifyAutoBackupConfig", req, cb);
    }
    /**
     * 本接口（DeleteParamTemplate）用于删除参数模板。
     */
    async DeleteParamTemplate(req, cb) {
        return this.request("DeleteParamTemplate", req, cb);
    }
    /**
     * 本接口（AddReplicationInstance）用于为全球复制组添加实例成员。
     */
    async AddReplicationInstance(req, cb) {
        return this.request("AddReplicationInstance", req, cb);
    }
    /**
     * 本接口（CloneInstances）用于基于当前实例的备份文件克隆一个完整的新实例。
     */
    async CloneInstances(req, cb) {
        return this.request("CloneInstances", req, cb);
    }
    /**
     * 该接口（CreateParamTemplate）用于创建参数模板。
     */
    async CreateParamTemplate(req, cb) {
        return this.request("CreateParamTemplate", req, cb);
    }
    /**
     * 本接口（DisableReplicaReadonly）用于禁用读写分离功能。
     */
    async DisableReplicaReadonly(req, cb) {
        return this.request("DisableReplicaReadonly", req, cb);
    }
    /**
     * 本接口（DescribeInstanceDTSInfo）用于查询实例 DTS 信息。
     */
    async DescribeInstanceDTSInfo(req, cb) {
        return this.request("DescribeInstanceDTSInfo", req, cb);
    }
    /**
     * 本接口（InquiryPriceUpgradeInstance）用于查询实例扩容价格。
     */
    async InquiryPriceUpgradeInstance(req, cb) {
        return this.request("InquiryPriceUpgradeInstance", req, cb);
    }
    /**
     * 本接口（RenewInstance）可用于为实例续费。
     */
    async RenewInstance(req, cb) {
        return this.request("RenewInstance", req, cb);
    }
    /**
     * 本接口（ModifyInstanceLogDelivery）用于开启或关闭投递实例日志到CLS。
     */
    async ModifyInstanceLogDelivery(req, cb) {
        return this.request("ModifyInstanceLogDelivery", req, cb);
    }
    /**
     * 本接口（AllocateWanAddress）用于开通实例外网访问。
     */
    async AllocateWanAddress(req, cb) {
        return this.request("AllocateWanAddress", req, cb);
    }
    /**
     * 本接口（DescribeProjectSecurityGroups）用于查询项目的安全组详情。
     */
    async DescribeProjectSecurityGroups(req, cb) {
        return this.request("DescribeProjectSecurityGroups", req, cb);
    }
    /**
     * 本接口（DescribeTendisSlowLog）用于查询 Tendis 实例慢查询。
     */
    async DescribeTendisSlowLog(req, cb) {
        return this.request("DescribeTendisSlowLog", req, cb);
    }
    /**
     * 本接口（ModifyParamTemplate）用于修改参数模板。
     */
    async ModifyParamTemplate(req, cb) {
        return this.request("ModifyParamTemplate", req, cb);
    }
    /**
     * 本接口（InquiryPriceCreateInstance）用于查询新购实例价格。
     */
    async InquiryPriceCreateInstance(req, cb) {
        return this.request("InquiryPriceCreateInstance", req, cb);
    }
    /**
     * 本接口（ModifyReplicationGroup）用于修改复制组信息。
     */
    async ModifyReplicationGroup(req, cb) {
        return this.request("ModifyReplicationGroup", req, cb);
    }
    /**
     * 本接口（DescribeInstanceSupportFeature）用于查询实例支持的功能特性。
     */
    async DescribeInstanceSupportFeature(req, cb) {
        return this.request("DescribeInstanceSupportFeature", req, cb);
    }
    /**
     * 本接口（DescribeInstanceParams）用于查询实例参数列表。
     */
    async DescribeInstanceParams(req, cb) {
        return this.request("DescribeInstanceParams", req, cb);
    }
    /**
     * 腾讯云数据库 Redis 已经于2022年10月31日下线查询实例大 Key 接口。具体公告，请参见 [查询实例大 Key 接口下线公告](https://cloud.tencent.com/document/product/239/81005)。
     */
    async DescribeInstanceMonitorBigKeyTypeDist(req, cb) {
        return this.request("DescribeInstanceMonitorBigKeyTypeDist", req, cb);
    }
    /**
     * 本接口（ReleaseWanAddress）用于关闭外网访问。
     */
    async ReleaseWanAddress(req, cb) {
        return this.request("ReleaseWanAddress", req, cb);
    }
    /**
     * 本接口（DisassociateSecurityGroups）用于安全组批量解绑实例。
     */
    async DisassociateSecurityGroups(req, cb) {
        return this.request("DisassociateSecurityGroups", req, cb);
    }
    /**
     * 本接口（ManualBackupInstance）用于手动备份Redis实例。
     */
    async ManualBackupInstance(req, cb) {
        return this.request("ManualBackupInstance", req, cb);
    }
    /**
     * 本接口（DescribeInstanceSpecBandwidth）用于查询或计算带宽规格。
     */
    async DescribeInstanceSpecBandwidth(req, cb) {
        return this.request("DescribeInstanceSpecBandwidth", req, cb);
    }
    /**
     * 本接口（DeleteInstanceAccount）用于删除实例子账号。
     */
    async DeleteInstanceAccount(req, cb) {
        return this.request("DeleteInstanceAccount", req, cb);
    }
    /**
     * 本接口（SwitchProxy）为 Proxy 模拟故障接口。
     */
    async SwitchProxy(req, cb) {
        return this.request("SwitchProxy", req, cb);
    }
    /**
     * 本接口（DestroyPrepaidInstance）用于退还包年包月计费的 Redis 实例。
     */
    async DestroyPrepaidInstance(req, cb) {
        return this.request("DestroyPrepaidInstance", req, cb);
    }
    /**
     * 本接口（DescribeInstanceParamRecords）用于查询参数修改历史列表。
     */
    async DescribeInstanceParamRecords(req, cb) {
        return this.request("DescribeInstanceParamRecords", req, cb);
    }
    /**
     * 本接口（DescribeParamTemplateInfo）用于查询参数模板详情。
     */
    async DescribeParamTemplateInfo(req, cb) {
        return this.request("DescribeParamTemplateInfo", req, cb);
    }
    /**
     * 本接口（DestroyPostpaidInstance）用于销毁按量计费实例。
     */
    async DestroyPostpaidInstance(req, cb) {
        return this.request("DestroyPostpaidInstance", req, cb);
    }
    /**
     * 本接口（StartupInstance）用于实例解隔离。
     */
    async StartupInstance(req, cb) {
        return this.request("StartupInstance", req, cb);
    }
    /**
     * 本接口（DescribeInstanceMonitorTookDist）用于查询实例访问的耗时分布。
     */
    async DescribeInstanceMonitorTookDist(req, cb) {
        return this.request("DescribeInstanceMonitorTookDist", req, cb);
    }
    /**
     * 本接口（DescribeParamTemplates）用于查询参数模板列表。
     */
    async DescribeParamTemplates(req, cb) {
        return this.request("DescribeParamTemplates", req, cb);
    }
    /**
     * 本接口（DescribeInstanceBackups）用于查询实例备份列表。
     */
    async DescribeInstanceBackups(req, cb) {
        return this.request("DescribeInstanceBackups", req, cb);
    }
    /**
     * 本接口（ResetPassword）用于重置实例访问密码。
     */
    async ResetPassword(req, cb) {
        return this.request("ResetPassword", req, cb);
    }
    /**
     * 本接口（RemoveReplicationInstance）用于移除复制组中的实例。
     */
    async RemoveReplicationInstance(req, cb) {
        return this.request("RemoveReplicationInstance", req, cb);
    }
    /**
     * 本接口（UpgradeSmallVersion）用于实例小版本升级。
     */
    async UpgradeSmallVersion(req, cb) {
        return this.request("UpgradeSmallVersion", req, cb);
    }
    /**
     * 本接口（ModifyInstancePassword）用于修改实例访问密码。
     */
    async ModifyInstancePassword(req, cb) {
        return this.request("ModifyInstancePassword", req, cb);
    }
    /**
     * 本接口（CreateReplicationGroup）用于创建复制组。
     */
    async CreateReplicationGroup(req, cb) {
        return this.request("CreateReplicationGroup", req, cb);
    }
    /**
     * 该接口已下线，请使用数据库智能管家 DBbrain 接口 [DescribeProxyProcessStatistics](https://cloud.tencent.com/document/product/1130/84544) 获取实例访问来源。
     */
    async DescribeInstanceMonitorSIP(req, cb) {
        return this.request("DescribeInstanceMonitorSIP", req, cb);
    }
    /**
     * 本接口（DescribeProjectSecurityGroup）用于查询项目安全组信息。
     */
    async DescribeProjectSecurityGroup(req, cb) {
        return this.request("DescribeProjectSecurityGroup", req, cb);
    }
    /**
     * 本接口（DescribeInstanceMonitorHotKey）用于查询实例热Key。
     */
    async DescribeInstanceMonitorHotKey(req, cb) {
        return this.request("DescribeInstanceMonitorHotKey", req, cb);
    }
    /**
     * 本接口（ModfiyInstancePassword）用于修改实例访问密码。鉴于该接口名存在拼写错误，现已更正为（[ModifyInstancePassword](https://cloud.tencent.com/document/product/239/111555)）接口，推荐使用更正后的接口。
     */
    async ModfiyInstancePassword(req, cb) {
        return this.request("ModfiyInstancePassword", req, cb);
    }
    /**
     * 本接口（EnableReplicaReadonly）用于启用读写分离功能。
     */
    async EnableReplicaReadonly(req, cb) {
        return this.request("EnableReplicaReadonly", req, cb);
    }
    /**
     * 本接口 (AssociateSecurityGroups) 用于将一个安全组绑定于一个或多个数据库实例。创建实例时，未配置安全组，建议通过该接口，绑定安全组。
     */
    async AssociateSecurityGroups(req, cb) {
        return this.request("AssociateSecurityGroups", req, cb);
    }
    /**
     * 本接口（DescribeSSLStatus）用于查询实例 SSL 认证相关信息，包括开启状态、配置状态、证书地址等。
     */
    async DescribeSSLStatus(req, cb) {
        return this.request("DescribeSSLStatus", req, cb);
    }
    /**
     * 腾讯云数据库 Redis 已经于2022年10月31日下线查询实例大 Key 接口。具体公告，请参见[查询实例大 Key 接口下线公告](https://cloud.tencent.com/document/product/239/81005)。
     */
    async DescribeInstanceMonitorBigKey(req, cb) {
        return this.request("DescribeInstanceMonitorBigKey", req, cb);
    }
    /**
     * 本接口（DescribeRedisClusters）用于查询Redis独享集群列表。
     */
    async DescribeRedisClusters(req, cb) {
        return this.request("DescribeRedisClusters", req, cb);
    }
    /**
     * 本接口（KillMasterGroup）用于模拟故障。
     */
    async KillMasterGroup(req, cb) {
        return this.request("KillMasterGroup", req, cb);
    }
    /**
     * 本接口（DescribeCommonDBInstances）用于查询Redis实例列表信息。当前该接口已废弃。
     */
    async DescribeCommonDBInstances(req, cb) {
        return this.request("DescribeCommonDBInstances", req, cb);
    }
    /**
     * 本接口（DescribeSlowLog）查询实例慢查询记录。
     */
    async DescribeSlowLog(req, cb) {
        return this.request("DescribeSlowLog", req, cb);
    }
    /**
     * 本接口（DescribeBackupDownloadRestriction）用于查询当前地域数据库备份文件的下载地址。
     */
    async DescribeBackupDownloadRestriction(req, cb) {
        return this.request("DescribeBackupDownloadRestriction", req, cb);
    }
    /**
     * 本接口（DescribeInstanceZoneInfo）用于查询 Redis 节点详细信息。
     */
    async DescribeInstanceZoneInfo(req, cb) {
        return this.request("DescribeInstanceZoneInfo", req, cb);
    }
    /**
     * 本接口（DescribeInstanceEvents）用于查询 Redis 实例事件信息。
     */
    async DescribeInstanceEvents(req, cb) {
        return this.request("DescribeInstanceEvents", req, cb);
    }
    /**
     * 在通过 DTS 支持跨可用区灾备的场景中，通过该接口（SwitchInstanceVip）交换实例 VIP 完成实例灾备切换。交换 VIP 后目标实例可写，源和目标实例VIP互换，同时源与目标实例间 DTS 同步任务断开。
     */
    async SwitchInstanceVip(req, cb) {
        return this.request("SwitchInstanceVip", req, cb);
    }
    /**
     * 本接口（DescribeDBSecurityGroups）用于查询实例的安全组详情。
     */
    async DescribeDBSecurityGroups(req, cb) {
        return this.request("DescribeDBSecurityGroups", req, cb);
    }
    /**
     * 本接口（DescribeReplicationGroup）用于查询复制组。
     */
    async DescribeReplicationGroup(req, cb) {
        return this.request("DescribeReplicationGroup", req, cb);
    }
    /**
     * 本接口（InquiryPriceRenewInstance）用于查询包年包月计费实例的续费价格。
     */
    async InquiryPriceRenewInstance(req, cb) {
        return this.request("InquiryPriceRenewInstance", req, cb);
    }
    /**
     * 本接口（ModifyMaintenanceWindow）用于修改实例维护时间窗时间，需要进行版本升级或者架构升级的实例，会在维护时间窗内进行时间切换。注意：已经发起版本升级或者架构升级的实例，无法修改维护时间窗。
     */
    async ModifyMaintenanceWindow(req, cb) {
        return this.request("ModifyMaintenanceWindow", req, cb);
    }
    /**
     * 本接口（ModifyNetworkConfig）用于修改实例网络配置。
     */
    async ModifyNetworkConfig(req, cb) {
        return this.request("ModifyNetworkConfig", req, cb);
    }
    /**
     * 本接口（DescribeInstanceShards）用于获取集群架构实例的分片信息。
     */
    async DescribeInstanceShards(req, cb) {
        return this.request("DescribeInstanceShards", req, cb);
    }
    /**
     * 本接口（RestoreInstance）用于恢复实例。
     */
    async RestoreInstance(req, cb) {
        return this.request("RestoreInstance", req, cb);
    }
    /**
     * 本接口（DescribeInstances）用于查询Redis实例列表。
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 本接口（OpenSSL）用于开启 SSL 加密认证功能。
     */
    async OpenSSL(req, cb) {
        return this.request("OpenSSL", req, cb);
    }
    /**
     * 本接口（DescribeAutoBackupConfig）用于获取自动备份配置规则。
     */
    async DescribeAutoBackupConfig(req, cb) {
        return this.request("DescribeAutoBackupConfig", req, cb);
    }
    /**
     * 本接口（DescribeBandwidthRange）用于查询实例带宽信息。
     */
    async DescribeBandwidthRange(req, cb) {
        return this.request("DescribeBandwidthRange", req, cb);
    }
    /**
     * 本接口（DescribeReplicationGroupInstance）用于查询复制组信息。
     */
    async DescribeReplicationGroupInstance(req, cb) {
        return this.request("DescribeReplicationGroupInstance", req, cb);
    }
    /**
     * 本接口（DescribeProxySlowLog）用于查询代理慢查询。
     */
    async DescribeProxySlowLog(req, cb) {
        return this.request("DescribeProxySlowLog", req, cb);
    }
    /**
     * 本接口（ModifyInstanceAvailabilityZones）用于变更实例可用区
     */
    async ModifyInstanceAvailabilityZones(req, cb) {
        return this.request("ModifyInstanceAvailabilityZones", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceSecurityGroups）用于对实例原有的安全组列表进行修改。
     */
    async ModifyDBInstanceSecurityGroups(req, cb) {
        return this.request("ModifyDBInstanceSecurityGroups", req, cb);
    }
    /**
     * 该接口（ChangeMasterInstance）用于将复制组内只读实例设置为主实例。
     */
    async ChangeMasterInstance(req, cb) {
        return this.request("ChangeMasterInstance", req, cb);
    }
    /**
     * 本接口（UpgradeInstance）用于变更实例的配置规格。
     */
    async UpgradeInstance(req, cb) {
        return this.request("UpgradeInstance", req, cb);
    }
    /**
     * 本接口（DescribeRedisClusterOverview）用于查询 Redis 独享集群概览信息。
     */
    async DescribeRedisClusterOverview(req, cb) {
        return this.request("DescribeRedisClusterOverview", req, cb);
    }
    /**
     * 本接口（ApplyParamsTemplate）用于应用参数模板到实例。
     */
    async ApplyParamsTemplate(req, cb) {
        return this.request("ApplyParamsTemplate", req, cb);
    }
    /**
     * 本接口（DescribeMaintenanceWindow）用于查询实例维护时间窗。在实例需要进行版本升级或者架构升级的时候，会在维护时间窗时间内进行切换
     */
    async DescribeMaintenanceWindow(req, cb) {
        return this.request("DescribeMaintenanceWindow", req, cb);
    }
    /**
     * 本接口（CreateInstances）用于创建 Redis 实例。
     */
    async CreateInstances(req, cb) {
        return this.request("CreateInstances", req, cb);
    }
    /**
     * 本接口（DescribeInstanceDealDetail）用于查询订单信息。
     */
    async DescribeInstanceDealDetail(req, cb) {
        return this.request("DescribeInstanceDealDetail", req, cb);
    }
    /**
     * 本接口（CloseSSL）用于关闭SSL加密认证。
     */
    async CloseSSL(req, cb) {
        return this.request("CloseSSL", req, cb);
    }
}
exports.Client = Client;
